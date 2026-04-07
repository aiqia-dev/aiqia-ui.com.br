import * as u from "react";
import j, { useState as $e, useEffect as gt, useCallback as De, createContext as uv, useContext as dv, useRef as Ut, useLayoutEffect as yl, useMemo as ro, useImperativeHandle as wl } from "react";
import * as hr from "react-dom";
import Cl from "react-dom";
import { ChevronDown as Pt, ChevronsUpDown as Sl, Loader2 as or, Check as gr, MoreHorizontal as Nl, ChevronRight as Aa, ChevronLeftIcon as fv, ChevronRightIcon as mv, ChevronDownIcon as pv, ArrowLeft as hv, ArrowRight as gv, Search as vv, CalendarIcon as bv, Clock as xv, Calendar as yv, X as Oa, Circle as El, XCircle as nc, XIcon as wv, Plus as Cv, CheckIcon as rc, WandSparkles as Sv, ChevronLeft as Nv, ChevronUp as Ev } from "lucide-react";
import { useFormContext as _n, FormProvider as Rv, Controller as Tv } from "react-hook-form";
import { Link as Mv } from "react-router-dom";
import * as ja from "recharts";
var Gr = { exports: {} }, Un = {};
var oc;
function Pv() {
  if (oc) return Un;
  oc = 1;
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
  return Un.Fragment = t, Un.jsx = n, Un.jsxs = n, Un;
}
var qn = {};
var sc;
function kv() {
  return sc || (sc = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === k ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
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
        case P:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case v:
            return "Portal";
          case w:
            return (T.displayName || "Context") + ".Provider";
          case y:
            return (T._context.displayName || "Context") + ".Consumer";
          case S:
            var z = T.render;
            return T = T.displayName, T || (T = z.displayName || z.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case R:
            return z = T.displayName || null, z !== null ? z : e(T.type) || "Memo";
          case E:
            z = T._payload, T = T._init;
            try {
              return e(T(z));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function n(T) {
      try {
        t(T);
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var D = z.error, W = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return D.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(T);
      }
    }
    function r(T) {
      if (T === h) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === E)
        return "<...>";
      try {
        var z = e(T);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var T = I.A;
      return T === null ? null : T.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(T) {
      if (Y.call(T, "key")) {
        var z = Object.getOwnPropertyDescriptor(T, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function i(T, z) {
      function D() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: D,
        configurable: !0
      });
    }
    function c() {
      var T = e(this.type);
      return $[T] || ($[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function d(T, z, D, W, U, L, Z, O) {
      return D = L.ref, T = {
        $$typeof: g,
        type: T,
        key: z,
        props: L,
        _owner: U
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function f(T, z, D, W, U, L, Z, O) {
      var K = z.children;
      if (K !== void 0)
        if (W)
          if (q(K)) {
            for (W = 0; W < K.length; W++)
              m(K[W]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(K);
      if (Y.call(z, "key")) {
        K = e(T);
        var Q = Object.keys(z).filter(function(te) {
          return te !== "key";
        });
        W = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", F[K + W] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          K,
          Q,
          K
        ), F[K + W] = !0);
      }
      if (K = null, D !== void 0 && (n(D), K = "" + D), a(z) && (n(z.key), K = "" + z.key), "key" in z) {
        D = {};
        for (var re in z)
          re !== "key" && (D[re] = z[re]);
      } else D = z;
      return K && i(
        D,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), d(
        T,
        K,
        L,
        U,
        o(),
        D,
        Z,
        O
      );
    }
    function m(T) {
      typeof T == "object" && T !== null && T.$$typeof === g && T._store && (T._store.validated = 1);
    }
    var p = j, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), N = /* @__PURE__ */ Symbol.for("react.suspense"), C = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), k = /* @__PURE__ */ Symbol.for("react.client.reference"), I = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, q = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(T) {
        return T();
      }
    };
    var B, $ = {}, X = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), H = _(r(s)), F = {};
    qn.Fragment = h, qn.jsx = function(T, z, D, W, U) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        T,
        z,
        D,
        !1,
        W,
        U,
        L ? Error("react-stack-top-frame") : X,
        L ? _(r(T)) : H
      );
    }, qn.jsxs = function(T, z, D, W, U) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        T,
        z,
        D,
        !0,
        W,
        U,
        L ? Error("react-stack-top-frame") : X,
        L ? _(r(T)) : H
      );
    };
  })()), qn;
}
var ac;
function Dv() {
  return ac || (ac = 1, process.env.NODE_ENV === "production" ? Gr.exports = Pv() : Gr.exports = kv()), Gr.exports;
}
var l = Dv();
function _v(e, t) {
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
function Ne(e, t = []) {
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
  return o.scopeName = e, [r, Av(o, ...t)];
}
function Av(...e) {
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
function ic(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ke(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = ic(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : ic(e[o], null);
        }
      };
  };
}
function oe(...e) {
  return u.useCallback(Ke(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  const t = /* @__PURE__ */ Ov(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(jv);
    if (c) {
      const d = c.props.children, f = i.map((m) => m === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ov(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = Fv(o), i = Iv(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ke(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Rl = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Tl(e) {
  const t = ({ children: n }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Rl, t;
}
function jv(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rl;
}
function Iv(e, t) {
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
function Fv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function on(e) {
  const t = e + "CollectionProvider", [n, r] = Ne(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: b, children: x } = h, y = j.useRef(null), w = j.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: b, itemMap: w, collectionRef: y, children: x });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Xt(i), d = j.forwardRef(
    (h, b) => {
      const { scope: x, children: y } = h, w = s(i, x), S = oe(b, w.collectionRef);
      return /* @__PURE__ */ l.jsx(c, { ref: S, children: y });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Xt(f), g = j.forwardRef(
    (h, b) => {
      const { scope: x, children: y, ...w } = h, S = j.useRef(null), N = oe(b, S), C = s(f, x);
      return j.useEffect(() => (C.itemMap.set(S, { ref: S, ...w }), () => {
        C.itemMap.delete(S);
      })), /* @__PURE__ */ l.jsx(p, { [m]: "", ref: N, children: y });
    }
  );
  g.displayName = f;
  function v(h) {
    const b = s(e + "CollectionConsumer", h);
    return j.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${m}]`));
      return Array.from(b.itemMap.values()).sort(
        (C, R) => w.indexOf(C.ref.current) - w.indexOf(R.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: g },
    v,
    r
  ];
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ge = globalThis?.document ? u.useLayoutEffect : () => {
}, Lv = u[" useInsertionEffect ".trim().toString()] || ge;
function Ce({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = $v({
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
        const m = Wv(f) ? f(e) : f;
        m !== e && a.current?.(m);
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, d];
}
function $v({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return Lv(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Wv(e) {
  return typeof e == "function";
}
var Bv = [
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
], G = Bv.reduce((e, t) => {
  const n = /* @__PURE__ */ Xt(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function sr(e, t) {
  e && hr.flushSync(() => e.dispatchEvent(t));
}
function Vv(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var ve = (e) => {
  const { present: t, children: n } = e, r = zv(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = oe(r.ref, Hv(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
ve.displayName = "Presence";
function zv(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = Vv(a, {
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
    const d = Kr(r.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), ge(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = s.current, g = Kr(d);
      e ? c("MOUNT") : g === "none" || d?.display === "none" ? c("UNMOUNT") : c(f && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ge(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (g) => {
        const h = Kr(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (g) => {
        g.target === t && (s.current = Kr(r.current));
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
function Kr(e) {
  return e?.animationName || "none";
}
function Hv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Yv = u[" useId ".trim().toString()] || (() => {
}), Gv = 0;
function be(e) {
  const [t, n] = u.useState(Yv());
  return ge(() => {
    n((r) => r ?? String(Gv++));
  }, [e]), t ? `radix-${t}` : "";
}
var ko = "Collapsible", [Kv, Ml] = Ne(ko), [Uv, Ia] = Kv(ko), Pl = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, d] = Ce({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: ko
    });
    return /* @__PURE__ */ l.jsx(
      Uv,
      {
        scope: n,
        disabled: s,
        contentId: be(),
        open: c,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ l.jsx(
          G.div,
          {
            "data-state": La(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Pl.displayName = ko;
var kl = "CollapsibleTrigger", Dl = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ia(kl, n);
    return /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": La(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Dl.displayName = kl;
var Fa = "CollapsibleContent", _l = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ia(Fa, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ve, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ l.jsx(qv, { ...r, ref: t, present: s }) });
  }
);
_l.displayName = Fa;
var qv = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = Ia(Fa, n), [i, c] = u.useState(r), d = u.useRef(null), f = oe(t, d), m = u.useRef(0), p = m.current, g = u.useRef(0), v = g.current, h = a.open || i, b = u.useRef(h), x = u.useRef(void 0);
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
    G.div,
    {
      "data-state": La(a.open),
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
function La(e) {
  return e ? "open" : "closed";
}
var Xv = Pl, Zv = Dl, Qv = _l, Jv = u.createContext(void 0);
function xt(e) {
  const t = u.useContext(Jv);
  return e || t || "ltr";
}
var Xe = "Accordion", eb = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [$a, tb, nb] = on(Xe), [Do] = Ne(Xe, [
  nb,
  Ml
]), Wa = Ml(), Al = j.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ l.jsx($a.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(ab, { ...s, ref: t }) : /* @__PURE__ */ l.jsx(sb, { ...o, ref: t }) });
  }
);
Al.displayName = Xe;
var [Ol, rb] = Do(Xe), [jl, ob] = Do(
  Xe,
  { collapsible: !1 }
), sb = j.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = Ce({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Xe
    });
    return /* @__PURE__ */ l.jsx(
      Ol,
      {
        scope: e.__scopeAccordion,
        value: j.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: j.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ l.jsx(jl, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ l.jsx(Il, { ...a, ref: t }) })
      }
    );
  }
), ab = j.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Ce({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Xe
  }), c = j.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = j.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    Ol,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: d,
      children: /* @__PURE__ */ l.jsx(jl, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(Il, { ...s, ref: t }) })
    }
  );
}), [ib, _o] = Do(Xe), Il = j.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = j.useRef(null), c = oe(i, t), d = tb(n), m = xt(o) === "ltr", p = A(e.onKeyDown, (g) => {
      if (!eb.includes(g.key)) return;
      const v = g.target, h = d().filter((E) => !E.ref.current?.disabled), b = h.findIndex((E) => E.ref.current === v), x = h.length;
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
      const R = y % x;
      h[R].ref.current?.focus();
    });
    return /* @__PURE__ */ l.jsx(
      ib,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ l.jsx($a.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
          G.div,
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
), fo = "AccordionItem", [cb, Ba] = Do(fo), Fl = j.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = _o(fo, n), a = rb(fo, n), i = Wa(n), c = be(), d = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      cb,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ l.jsx(
          Xv,
          {
            "data-orientation": s.orientation,
            "data-state": zl(d),
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
Fl.displayName = fo;
var Ll = "AccordionHeader", $l = j.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = _o(Xe, n), s = Ba(Ll, n);
    return /* @__PURE__ */ l.jsx(
      G.h3,
      {
        "data-orientation": o.orientation,
        "data-state": zl(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
$l.displayName = Ll;
var ta = "AccordionTrigger", Wl = j.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = _o(Xe, n), s = Ba(ta, n), a = ob(ta, n), i = Wa(n);
    return /* @__PURE__ */ l.jsx($a.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      Zv,
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
Wl.displayName = ta;
var Bl = "AccordionContent", Vl = j.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = _o(Xe, n), s = Ba(Bl, n), a = Wa(n);
    return /* @__PURE__ */ l.jsx(
      Qv,
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
Vl.displayName = Bl;
function zl(e) {
  return e ? "open" : "closed";
}
var lb = Al, ub = Fl, db = $l, Hl = Wl, Yl = Vl;
function Gl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Gl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Kl() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Gl(e)) && (r && (r += " "), r += t);
  return r;
}
const fb = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, mb = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ul = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), mo = "-", cc = [], pb = "arbitrary..", hb = (e) => {
  const t = vb(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return gb(a);
      const i = a.split(mo), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ql(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = r[a], d = n[a];
        return c ? d ? fb(d, c) : c : d || cc;
      }
      return n[a] || cc;
    }
  };
}, ql = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const d = ql(e, t + 1, s);
    if (d) return d;
  }
  const a = n.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(mo) : e.slice(t).join(mo), c = a.length;
  for (let d = 0; d < c; d++) {
    const f = a[d];
    if (f.validator(i))
      return f.classGroupId;
  }
}, gb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? pb + r : void 0;
})(), vb = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return bb(n, t);
}, bb = (e, t) => {
  const n = Ul();
  for (const r in e) {
    const o = e[r];
    Va(o, n, r, t);
  }
  return n;
}, Va = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    xb(a, t, n, r);
  }
}, xb = (e, t, n, r) => {
  if (typeof e == "string") {
    yb(e, t, n);
    return;
  }
  if (typeof e == "function") {
    wb(e, t, n, r);
    return;
  }
  Cb(e, t, n, r);
}, yb = (e, t, n) => {
  const r = e === "" ? t : Xl(t, e);
  r.classGroupId = n;
}, wb = (e, t, n, r) => {
  if (Sb(e)) {
    Va(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(mb(n, e));
}, Cb = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    Va(c, Xl(t, i), n, r);
  }
}, Xl = (e, t) => {
  let n = e;
  const r = t.split(mo), o = r.length;
  for (let s = 0; s < o; s++) {
    const a = r[s];
    let i = n.nextPart.get(a);
    i || (i = Ul(), n.nextPart.set(a, i)), n = i;
  }
  return n;
}, Sb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Nb = (e) => {
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
}, na = "!", lc = ":", Eb = [], uc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Rb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, d;
    const f = o.length;
    for (let h = 0; h < f; h++) {
      const b = o[h];
      if (a === 0 && i === 0) {
        if (b === lc) {
          s.push(o.slice(c, h)), c = h + 1;
          continue;
        }
        if (b === "/") {
          d = h;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? i++ : b === ")" && i--;
    }
    const m = s.length === 0 ? o : o.slice(c);
    let p = m, g = !1;
    m.endsWith(na) ? (p = m.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(na) && (p = m.slice(1), g = !0)
    );
    const v = d && d > c ? d - c : void 0;
    return uc(s, g, p, v);
  };
  if (t) {
    const o = t + lc, s = r;
    r = (a) => a.startsWith(o) ? s(a.slice(o.length)) : uc(Eb, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Tb = (e) => {
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
}, Mb = (e) => ({
  cache: Nb(e.cacheSize),
  parseClassName: Rb(e),
  sortModifiers: Tb(e),
  ...hb(e)
}), Pb = /\s+/, kb = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(Pb);
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
    const y = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), w = g ? y + na : y, S = w + x;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const N = o(x, b);
    for (let C = 0; C < N.length; ++C) {
      const R = N[C];
      a.push(w + R);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Db = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Zl(n)) && (o && (o += " "), o += r);
  return o;
}, Zl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Zl(e[r])) && (n && (n += " "), n += t);
  return n;
}, _b = (e, ...t) => {
  let n, r, o, s;
  const a = (c) => {
    const d = t.reduce((f, m) => m(f), e());
    return n = Mb(d), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }, i = (c) => {
    const d = r(c);
    if (d)
      return d;
    const f = kb(c, n);
    return o(c, f), f;
  };
  return s = a, (...c) => s(Db(...c));
}, Ab = [], Ee = (e) => {
  const t = (n) => n[e] || Ab;
  return t.isThemeGetter = !0, t;
}, Ql = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ob = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, jb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ib = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Lb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $b = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e) => Ob.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), Et = (e) => !!e && Number.isInteger(Number(e)), Ds = (e) => e.endsWith("%") && ce(e.slice(0, -1)), mt = (e) => jb.test(e), eu = () => !0, Wb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ib.test(e) && !Fb.test(e)
), za = () => !1, Bb = (e) => Lb.test(e), Vb = (e) => $b.test(e), zb = (e) => !J(e) && !ee(e), Hb = (e) => At(e, ru, za), J = (e) => Ql.test(e), zt = (e) => At(e, ou, Wb), dc = (e) => At(e, Qb, ce), Yb = (e) => At(e, au, eu), Gb = (e) => At(e, su, za), fc = (e) => At(e, tu, za), Kb = (e) => At(e, nu, Vb), Ur = (e) => At(e, iu, Bb), ee = (e) => Jl.test(e), Xn = (e) => sn(e, ou), Ub = (e) => sn(e, su), mc = (e) => sn(e, tu), qb = (e) => sn(e, ru), Xb = (e) => sn(e, nu), qr = (e) => sn(e, iu, !0), Zb = (e) => sn(e, au, !0), At = (e, t, n) => {
  const r = Ql.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, sn = (e, t, n = !1) => {
  const r = Jl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, tu = (e) => e === "position" || e === "percentage", nu = (e) => e === "image" || e === "url", ru = (e) => e === "length" || e === "size" || e === "bg-size", ou = (e) => e === "length", Qb = (e) => e === "number", su = (e) => e === "family-name", au = (e) => e === "number" || e === "weight", iu = (e) => e === "shadow", Jb = () => {
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
  ], N = () => [...S(), ee, J], C = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], E = () => [ee, J, c], P = () => [Nt, "full", "auto", ...E()], k = () => [Et, "none", "subgrid", ee, J], I = () => ["auto", {
    span: ["full", Et, ee, J]
  }, Et, ee, J], Y = () => [Et, "auto", ee, J], q = () => ["auto", "min", "max", "fr", ee, J], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...E()], X = () => [Nt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], H = () => [Nt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], F = () => [Nt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], T = () => [e, ee, J], z = () => [...S(), mc, fc, {
    position: [ee, J]
  }], D = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], W = () => ["auto", "cover", "contain", qb, Hb, {
    size: [ee, J]
  }], U = () => [Ds, Xn, zt], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ee,
    J
  ], Z = () => ["", ce, Xn, zt], O = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [ce, Ds, mc, fc], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    ee,
    J
  ], te = () => ["none", ce, ee, J], V = () => ["none", ce, ee, J], ae = () => [ce, ee, J], ue = () => [Nt, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [mt],
      breakpoint: [mt],
      color: [eu],
      container: [mt],
      "drop-shadow": [mt],
      ease: ["in", "out", "in-out"],
      font: [zb],
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
        aspect: ["auto", "square", Nt, J, ee, b]
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
        columns: [ce, J, ee, i]
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
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: P()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: P()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": P()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": P()
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
        z: [Et, "auto", ee, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Nt, "full", "auto", i, ...E()]
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
        flex: [ce, Nt, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, ee, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, ee, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Et, "first", "last", "none", ee, J]
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
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
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
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        justify: [..._(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ..._()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": _()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
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
        m: $()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: $()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
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
        size: X()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...H()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...H()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...H()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...F()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...F()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...F()]
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
        text: ["base", n, Xn, zt]
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
        font: [r, Zb, Yb]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ds, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ub, Gb, t]
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
        "line-clamp": [ce, "none", ee, dc]
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
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
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
        decoration: [...O(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", ee, zt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", ee, J]
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
        bg: z()
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
        bg: W()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Et, ee, J],
          radial: ["", ee, J],
          conic: [Et, ee, J]
        }, Xb, Kb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: U()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: U()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: U()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
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
        border: [...O(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...O(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...O(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, ee, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Xn, zt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
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
          qr,
          Ur
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, qr, Ur]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
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
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ce, zt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
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
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, qr, Ur]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, ee, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
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
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
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
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
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
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
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
        mask: z()
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
        mask: W()
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
        brightness: [ce, ee, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, ee, J]
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
          qr,
          Ur
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, ee, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, ee, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, ee, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, ee, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, ee, J]
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
        "backdrop-brightness": [ce, ee, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, ee, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, ee, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, ee, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, ee, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, ee, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, ee, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, ee, J]
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
        duration: [ce, "initial", ee, J]
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
        delay: [ce, ee, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, ee, J]
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
        scale: V()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": V()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": V()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": V()
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
        skew: ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ae()
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
        translate: ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ue()
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
        accent: T()
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
        caret: T()
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
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Xn, zt, dc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
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
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, ex = /* @__PURE__ */ _b(Jb);
function M(...e) {
  return ex(Kl(e));
}
const g_ = lb, tx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ub,
  {
    ref: n,
    className: M("border-b", e),
    ...t
  }
));
tx.displayName = "AccordionItem";
const nx = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(db, { className: "flex", children: /* @__PURE__ */ l.jsxs(
  Hl,
  {
    ref: r,
    className: M(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Pt, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
nx.displayName = Hl.displayName;
const rx = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Yl,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ l.jsx("div", { className: M("pb-4 pt-0", e), children: t })
  }
));
rx.displayName = Yl.displayName;
const pc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, hc = Kl, it = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return hc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((d) => {
    const f = n?.[d], m = s?.[d];
    if (f === null) return null;
    const p = pc(f) || pc(m);
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
  return hc(e, a, c, n?.class, n?.className);
}, ox = it(
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
), sx = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: M(ox({ variant: t }), e),
    ...n
  }
));
sx.displayName = "Alert";
const ax = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "h5",
  {
    ref: n,
    className: M("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
ax.displayName = "AlertTitle";
const ix = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
ix.displayName = "AlertDescription";
function me(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function cx(e, t = globalThis?.document) {
  const n = me(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var lx = "DismissableLayer", ra = "dismissableLayer.update", ux = "dismissableLayer.pointerDownOutside", dx = "dismissableLayer.focusOutside", gc, cu = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ot = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, d = u.useContext(cu), [f, m] = u.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), v = oe(t, (R) => m(R)), h = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(b), y = f ? h.indexOf(f) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, N = mx((R) => {
      const E = R.target, P = [...d.branches].some((k) => k.contains(E));
      !S || P || (o?.(R), a?.(R), R.defaultPrevented || i?.());
    }, p), C = px((R) => {
      const E = R.target;
      [...d.branches].some((k) => k.contains(E)) || (s?.(R), a?.(R), R.defaultPrevented || i?.());
    }, p);
    return cx((R) => {
      y === d.layers.size - 1 && (r?.(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (gc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), vc(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = gc);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), vc());
    }, [f, d]), u.useEffect(() => {
      const R = () => g({});
      return document.addEventListener(ra, R), () => document.removeEventListener(ra, R);
    }, []), /* @__PURE__ */ l.jsx(
      G.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: A(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
Ot.displayName = lx;
var fx = "DismissableLayerBranch", lu = u.forwardRef((e, t) => {
  const n = u.useContext(cu), r = u.useRef(null), o = oe(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(G.div, { ...e, ref: o });
});
lu.displayName = fx;
function mx(e, t = globalThis?.document) {
  const n = me(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          uu(
            ux,
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
function px(e, t = globalThis?.document) {
  const n = me(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && uu(dx, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function vc() {
  const e = new CustomEvent(ra);
  document.dispatchEvent(e);
}
function uu(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sr(o, s) : o.dispatchEvent(s);
}
var hx = Ot, gx = lu, _s = "focusScope.autoFocusOnMount", As = "focusScope.autoFocusOnUnmount", bc = { bubbles: !1, cancelable: !0 }, vx = "FocusScope", vr = u.forwardRef((e, t) => {
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
        i.contains(S) ? m.current = S : Tt(m.current, { select: !0 });
      }, b = function(w) {
        if (g.paused || !i) return;
        const S = w.relatedTarget;
        S !== null && (i.contains(S) || Tt(m.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const N of w)
            N.removedNodes.length > 0 && Tt(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", b);
      const y = new MutationObserver(x);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [r, i, g.paused]), u.useEffect(() => {
    if (i) {
      yc.add(g);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(_s, bc);
        i.addEventListener(_s, d), i.dispatchEvent(x), x.defaultPrevented || (bx(Sx(du(i)), { select: !0 }), document.activeElement === h && Tt(i));
      }
      return () => {
        i.removeEventListener(_s, d), setTimeout(() => {
          const x = new CustomEvent(As, bc);
          i.addEventListener(As, f), i.dispatchEvent(x), x.defaultPrevented || Tt(h ?? document.body, { select: !0 }), i.removeEventListener(As, f), yc.remove(g);
        }, 0);
      };
    }
  }, [i, d, f, g]);
  const v = u.useCallback(
    (h) => {
      if (!n && !r || g.paused) return;
      const b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
      if (b && x) {
        const y = h.currentTarget, [w, S] = xx(y);
        w && S ? !h.shiftKey && x === S ? (h.preventDefault(), n && Tt(w, { select: !0 })) : h.shiftKey && x === w && (h.preventDefault(), n && Tt(S, { select: !0 })) : x === y && h.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ l.jsx(G.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
});
vr.displayName = vx;
function bx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Tt(r, { select: t }), document.activeElement !== n) return;
}
function xx(e) {
  const t = du(e), n = xc(t, e), r = xc(t.reverse(), e);
  return [n, r];
}
function du(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function xc(e, t) {
  for (const n of e)
    if (!yx(n, { upTo: t })) return n;
}
function yx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function wx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Tt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && wx(e) && t && e.select();
  }
}
var yc = Cx();
function Cx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = wc(e, t), e.unshift(t);
    },
    remove(t) {
      e = wc(e, t), e[0]?.resume();
    }
  };
}
function wc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Sx(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Nx = "Portal", an = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  ge(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? Cl.createPortal(/* @__PURE__ */ l.jsx(G.div, { ...r, ref: t }), a) : null;
});
an.displayName = Nx;
var Os = 0;
function Ao() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cc()), Os++, () => {
      Os === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Os--;
    };
  }, []);
}
function Cc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var et = function() {
  return et = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, et.apply(this, arguments);
};
function fu(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ex(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var oo = "right-scroll-bar-position", so = "width-before-scroll-bar", Rx = "with-scroll-bars-hidden", Tx = "--removed-body-scroll-bar-size";
function js(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Mx(e, t) {
  var n = $e(function() {
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
var Px = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Sc = /* @__PURE__ */ new WeakMap();
function kx(e, t) {
  var n = Mx(null, function(r) {
    return e.forEach(function(o) {
      return js(o, r);
    });
  });
  return Px(function() {
    var r = Sc.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || js(i, null);
      }), s.forEach(function(i) {
        o.has(i) || js(i, a);
      });
    }
    Sc.set(n, e);
  }, [e]), n;
}
function Dx(e) {
  return e;
}
function _x(e, t) {
  t === void 0 && (t = Dx);
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
function Ax(e) {
  e === void 0 && (e = {});
  var t = _x(null);
  return t.options = et({ async: !0, ssr: !1 }, e), t;
}
var mu = function(e) {
  var t = e.sideCar, n = fu(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, et({}, n));
};
mu.isSideCarExport = !0;
function Ox(e, t) {
  return e.useMedium(t), mu;
}
var pu = Ax(), Is = function() {
}, Oo = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Is,
    onWheelCapture: Is,
    onTouchMoveCapture: Is
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, g = e.noRelative, v = e.noIsolation, h = e.inert, b = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, w = e.gapMode, S = fu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), N = p, C = kx([n, t]), R = et(et({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(N, { sideCar: pu, removeScrollBar: d, shards: m, noRelative: g, noIsolation: v, inert: h, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    a ? u.cloneElement(u.Children.only(i), et(et({}, R), { ref: C })) : u.createElement(y, et({}, R, { className: c, ref: C }), i)
  );
});
Oo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Oo.classNames = {
  fullWidth: so,
  zeroRight: oo
};
var jx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Ix() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = jx();
  return t && e.setAttribute("nonce", t), e;
}
function Fx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lx(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $x = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Ix()) && (Fx(t, n), Lx(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Wx = function() {
  var e = $x();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, hu = function() {
  var e = Wx(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Bx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Fs = function(e) {
  return parseInt(e || "", 10) || 0;
}, Vx = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Fs(n), Fs(r), Fs(o)];
}, zx = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bx;
  var t = Vx(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Hx = hu(), Cn = "data-scroll-locked", Yx = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Rx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Cn, `] {
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
  
  .`).concat(oo, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(so, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(oo, " .").concat(oo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(so, " .").concat(so, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Cn, `] {
    `).concat(Tx, ": ").concat(i, `px;
  }
`);
}, Nc = function() {
  var e = parseInt(document.body.getAttribute(Cn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Gx = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Cn, (Nc() + 1).toString()), function() {
      var e = Nc() - 1;
      e <= 0 ? document.body.removeAttribute(Cn) : document.body.setAttribute(Cn, e.toString());
    };
  }, []);
}, Kx = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Gx();
  var s = u.useMemo(function() {
    return zx(o);
  }, [o]);
  return u.createElement(Hx, { styles: Yx(s, !t, o, n ? "" : "!important") });
}, oa = !1;
if (typeof window < "u")
  try {
    var Xr = Object.defineProperty({}, "passive", {
      get: function() {
        return oa = !0, !0;
      }
    });
    window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
  } catch {
    oa = !1;
  }
var pn = oa ? { passive: !1 } : !1, Ux = function(e) {
  return e.tagName === "TEXTAREA";
}, gu = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ux(e) && n[t] === "visible")
  );
}, qx = function(e) {
  return gu(e, "overflowY");
}, Xx = function(e) {
  return gu(e, "overflowX");
}, Ec = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = vu(e, r);
    if (o) {
      var s = bu(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Zx = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Qx = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, vu = function(e, t) {
  return e === "v" ? qx(t) : Xx(t);
}, bu = function(e, t) {
  return e === "v" ? Zx(t) : Qx(t);
}, Jx = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ey = function(e, t, n, r, o) {
  var s = Jx(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), d = !1, f = a > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var g = bu(e, i), v = g[0], h = g[1], b = g[2], x = h - b - s * v;
    (v || x) && vu(e, i) && (m += x, p += v);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, Zr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Rc = function(e) {
  return [e.deltaX, e.deltaY];
}, Tc = function(e) {
  return e && "current" in e ? e.current : e;
}, ty = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ny = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ry = 0, hn = [];
function oy(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(ry++)[0], s = u.useState(hu)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Ex([e.lockRef.current], (e.shards || []).map(Tc), !0).filter(Boolean);
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
    var x = Zr(h), y = n.current, w = "deltaX" in h ? h.deltaX : y[0] - x[0], S = "deltaY" in h ? h.deltaY : y[1] - x[1], N, C = h.target, R = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && R === "h" && C.type === "range")
      return !1;
    var E = window.getSelection(), P = E && E.anchorNode, k = P ? P === C || P.contains(C) : !1;
    if (k)
      return !1;
    var I = Ec(R, C);
    if (!I)
      return !0;
    if (I ? N = R : (N = R === "v" ? "h" : "v", I = Ec(R, C)), !I)
      return !1;
    if (!r.current && "changedTouches" in h && (w || S) && (r.current = N), !N)
      return !0;
    var Y = r.current || N;
    return ey(Y, b, h, Y === "h" ? w : S);
  }, []), c = u.useCallback(function(h) {
    var b = h;
    if (!(!hn.length || hn[hn.length - 1] !== s)) {
      var x = "deltaY" in b ? Rc(b) : Zr(b), y = t.current.filter(function(N) {
        return N.name === b.type && (N.target === b.target || b.target === N.shadowParent) && ty(N.delta, x);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var w = (a.current.shards || []).map(Tc).filter(Boolean).filter(function(N) {
          return N.contains(b.target);
        }), S = w.length > 0 ? i(b, w[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, b, x, y) {
    var w = { name: h, delta: b, target: x, should: y, shadowParent: sy(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(h) {
    n.current = Zr(h), r.current = void 0;
  }, []), m = u.useCallback(function(h) {
    d(h.type, Rc(h), h.target, i(h, e.lockRef.current));
  }, []), p = u.useCallback(function(h) {
    d(h.type, Zr(h), h.target, i(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return hn.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, pn), document.addEventListener("touchmove", c, pn), document.addEventListener("touchstart", f, pn), function() {
      hn = hn.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, pn), document.removeEventListener("touchmove", c, pn), document.removeEventListener("touchstart", f, pn);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    v ? u.createElement(s, { styles: ny(o) }) : null,
    g ? u.createElement(Kx, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function sy(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ay = Ox(pu, oy);
var br = u.forwardRef(function(e, t) {
  return u.createElement(Oo, et({}, e, { ref: t, sideCar: ay }));
});
br.classNames = Oo.classNames;
var iy = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gn = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Jr = {}, Ls = 0, xu = function(e) {
  return e && (e.host || xu(e.parentNode));
}, cy = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = xu(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ly = function(e, t, n, r) {
  var o = cy(t, Array.isArray(e) ? e : [e]);
  Jr[n] || (Jr[n] = /* @__PURE__ */ new WeakMap());
  var s = Jr[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var g = p.getAttribute(r), v = g !== null && g !== "false", h = (gn.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          gn.set(p, h), s.set(p, b), a.push(p), h === 1 && v && Qr.set(p, !0), b === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return f(t), i.clear(), Ls++, function() {
    a.forEach(function(m) {
      var p = gn.get(m) - 1, g = s.get(m) - 1;
      gn.set(m, p), s.set(m, g), p || (Qr.has(m) || m.removeAttribute(r), Qr.delete(m)), g || m.removeAttribute(n);
    }), Ls--, Ls || (gn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Jr = {});
  };
}, jo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = iy(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ly(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Io = "Dialog", [yu, wu] = Ne(Io), [uy, Ze] = yu(Io), Cu = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = u.useRef(null), c = u.useRef(null), [d, f] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Io
  });
  return /* @__PURE__ */ l.jsx(
    uy,
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
Cu.displayName = Io;
var Su = "DialogTrigger", Nu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Su, n), s = oe(t, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ga(o.open),
        ...r,
        ref: s,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Nu.displayName = Su;
var Ha = "DialogPortal", [dy, Eu] = yu(Ha, {
  forceMount: void 0
}), Ru = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Ze(Ha, t);
  return /* @__PURE__ */ l.jsx(dy, { scope: t, forceMount: n, children: u.Children.map(r, (a) => /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(an, { asChild: !0, container: o, children: a }) })) });
};
Ru.displayName = Ha;
var po = "DialogOverlay", Tu = u.forwardRef(
  (e, t) => {
    const n = Eu(po, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze(po, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(my, { ...o, ref: t }) }) : null;
  }
);
Tu.displayName = po;
var fy = /* @__PURE__ */ Xt("DialogOverlay.RemoveScroll"), my = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(po, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(br, { as: fy, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        G.div,
        {
          "data-state": Ga(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Zt = "DialogContent", Mu = u.forwardRef(
  (e, t) => {
    const n = Eu(Zt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ze(Zt, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(py, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(hy, { ...o, ref: t }) });
  }
);
Mu.displayName = Zt;
var py = u.forwardRef(
  (e, t) => {
    const n = Ze(Zt, e.__scopeDialog), r = u.useRef(null), o = oe(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return jo(s);
    }, []), /* @__PURE__ */ l.jsx(
      Pu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
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
), hy = u.forwardRef(
  (e, t) => {
    const n = Ze(Zt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Pu,
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
), Pu = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Ze(Zt, n), c = u.useRef(null), d = oe(t, c);
    return Ao(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        vr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ l.jsx(
            Ot,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Ga(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(vy, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(xy, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ya = "DialogTitle", ku = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Ya, n);
    return /* @__PURE__ */ l.jsx(G.h2, { id: o.titleId, ...r, ref: t });
  }
);
ku.displayName = Ya;
var Du = "DialogDescription", _u = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Du, n);
    return /* @__PURE__ */ l.jsx(G.p, { id: o.descriptionId, ...r, ref: t });
  }
);
_u.displayName = Du;
var Au = "DialogClose", Ou = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ze(Au, n);
    return /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ou.displayName = Au;
function Ga(e) {
  return e ? "open" : "closed";
}
var ju = "DialogTitleWarning", [gy, Iu] = _v(ju, {
  contentName: Zt,
  titleName: Ya,
  docsSlug: "dialog"
}), vy = ({ titleId: e }) => {
  const t = Iu(ju), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, by = "DialogDescriptionWarning", xy = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Iu(by).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Fo = Cu, Ka = Nu, Lo = Ru, An = Tu, On = Mu, xr = ku, yr = _u, jn = Ou, Fu = "AlertDialog", [yy] = Ne(Fu, [
  wu
]), yt = wu(), Lu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yt(t);
  return /* @__PURE__ */ l.jsx(Fo, { ...r, ...n, modal: !0 });
};
Lu.displayName = Fu;
var wy = "AlertDialogTrigger", $u = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(Ka, { ...o, ...r, ref: t });
  }
);
$u.displayName = wy;
var Cy = "AlertDialogPortal", Wu = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = yt(t);
  return /* @__PURE__ */ l.jsx(Lo, { ...r, ...n });
};
Wu.displayName = Cy;
var Sy = "AlertDialogOverlay", Bu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(An, { ...o, ...r, ref: t });
  }
);
Bu.displayName = Sy;
var Sn = "AlertDialogContent", [Ny, Ey] = yy(Sn), Ry = /* @__PURE__ */ Tl("AlertDialogContent"), Vu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, s = yt(n), a = u.useRef(null), i = oe(t, a), c = u.useRef(null);
    return /* @__PURE__ */ l.jsx(
      gy,
      {
        contentName: Sn,
        titleName: zu,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx(Ny, { scope: n, cancelRef: c, children: /* @__PURE__ */ l.jsxs(
          On,
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
            children: [
              /* @__PURE__ */ l.jsx(Ry, { children: r }),
              /* @__PURE__ */ l.jsx(My, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Vu.displayName = Sn;
var zu = "AlertDialogTitle", Hu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(xr, { ...o, ...r, ref: t });
  }
);
Hu.displayName = zu;
var Yu = "AlertDialogDescription", Gu = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
  return /* @__PURE__ */ l.jsx(yr, { ...o, ...r, ref: t });
});
Gu.displayName = Yu;
var Ty = "AlertDialogAction", Ku = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = yt(n);
    return /* @__PURE__ */ l.jsx(jn, { ...o, ...r, ref: t });
  }
);
Ku.displayName = Ty;
var Uu = "AlertDialogCancel", qu = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = Ey(Uu, n), s = yt(n), a = oe(t, o);
    return /* @__PURE__ */ l.jsx(jn, { ...s, ...r, ref: a });
  }
);
qu.displayName = Uu;
var My = ({ contentRef: e }) => {
  const t = `\`${Sn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Sn}\` by passing a \`${Yu}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Sn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, Py = Lu, ky = $u, Dy = Wu, Xu = Bu, Zu = Vu, Qu = Ku, Ju = qu, ed = Hu, td = Gu;
const v_ = Py, b_ = ky, _y = Dy, nd = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Xu,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
nd.displayName = Xu.displayName;
const Ay = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs(_y, { children: [
  /* @__PURE__ */ l.jsx(nd, {}),
  /* @__PURE__ */ l.jsx(
    Zu,
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
Ay.displayName = Zu.displayName;
const Oy = ({
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
Oy.displayName = "AlertDialogHeader";
const jy = ({
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
jy.displayName = "AlertDialogFooter";
const Iy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ed,
  {
    ref: n,
    className: M("text-lg font-semibold", e),
    ...t
  }
));
Iy.displayName = ed.displayName;
const Fy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  td,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Fy.displayName = td.displayName;
const Ly = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Qu,
  {
    ref: n,
    className: M(Qt(), e),
    ...t
  }
));
Ly.displayName = Qu.displayName;
const $y = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ju,
  {
    ref: n,
    className: M(
      Qt({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
$y.displayName = Ju.displayName;
function Wy({
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
  const [h, b] = $e(!1), [x, y] = $e(i), [w, S] = $e(null), [N, C] = $e("");
  gt(() => {
    y(i);
  }, [i]), gt(() => {
    if (i && e.length > 0) {
      const E = e.find((P) => r(P) === i);
      E && S(E);
    }
  }, [i, e, r]);
  const R = De(
    (E) => {
      const P = g && E === x ? "" : E;
      i && y(P), S(
        e.find((k) => r(k) === P) || null
      ), c(P), b(!1);
    },
    [x, c, g, e, r, i]
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-1", children: [
    !!s && /* @__PURE__ */ l.jsx(is, { className: M(v && "text-destructive"), children: s }),
    /* @__PURE__ */ l.jsxs(Ar, { open: h, onOpenChange: b, children: [
      /* @__PURE__ */ l.jsx(Or, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
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
            /* @__PURE__ */ l.jsx(Sl, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx($n, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ l.jsxs(Tr, { shouldFilter: !1, children: [
        /* @__PURE__ */ l.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ l.jsx(
            Go,
            {
              placeholder: "Buscar",
              value: N,
              onValueChange: (E) => {
                C(E), d(E);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ l.jsx(or, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ l.jsxs(Ko, { children: [
          t && e.length === 0 && /* @__PURE__ */ l.jsx(By, {}),
          !t && e.length === 0 && /* @__PURE__ */ l.jsx(Uo, { children: /* @__PURE__ */ l.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: p ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ l.jsx(Mr, { children: e.map((E) => /* @__PURE__ */ l.jsxs(
            qt,
            {
              value: r(E),
              onSelect: R,
              children: [
                /* @__PURE__ */ l.jsx(
                  gr,
                  {
                    className: M(
                      "mr-2 size-4 shrink-0",
                      x === r(E) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: "w-0 flex-1", children: n(E) })
              ]
            },
            r(E)
          )) })
        ] })
      ] }) })
    ] }),
    !!v && /* @__PURE__ */ l.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: v })
  ] });
}
function By() {
  return /* @__PURE__ */ l.jsx(Mr, { children: [1, 2, 3].map((e) => /* @__PURE__ */ l.jsx(qt, { disabled: !0, className: "p-0", children: /* @__PURE__ */ l.jsx(Bk, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const x_ = ({
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
  const { control: f } = _n();
  return /* @__PURE__ */ l.jsx(
    $r,
    {
      name: e,
      control: f,
      render: ({ field: m }) => /* @__PURE__ */ l.jsxs(Wn, { children: [
        !!t && /* @__PURE__ */ l.jsx(Bn, { children: t }),
        /* @__PURE__ */ l.jsx(
          Wy,
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
        /* @__PURE__ */ l.jsx(Vn, {})
      ] })
    }
  );
};
function Vy(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = u.createContext(a);
    i.displayName = s + "Context";
    const c = n.length;
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
  return o.scopeName = e, [r, zy(o, ...t)];
}
function zy(...e) {
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
var Hy = /* @__PURE__ */ Symbol.for("react.lazy"), ho = u[" use ".trim().toString()];
function Yy(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function rd(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Hy && "_payload" in e && Yy(e._payload);
}
// @__NO_SIDE_EFFECTS__
function od(e) {
  const t = /* @__PURE__ */ Gy(e), n = u.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    rd(s) && typeof ho == "function" && (s = ho(s._payload));
    const i = u.Children.toArray(s), c = i.find(Uy);
    if (c) {
      const d = c.props.children, f = i.map((m) => m === c ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var sd = /* @__PURE__ */ od("Slot");
// @__NO_SIDE_EFFECTS__
function Gy(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (rd(o) && typeof ho == "function" && (o = ho(o._payload)), u.isValidElement(o)) {
      const a = Xy(o), i = qy(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ke(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ky = /* @__PURE__ */ Symbol("radix.slottable");
function Uy(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ky;
}
function qy(e, t) {
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
function Xy(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zy = [
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
], Fe = Zy.reduce((e, t) => {
  const n = /* @__PURE__ */ od(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), eo = { exports: {} }, $s = {};
var Mc;
function Qy() {
  if (Mc) return $s;
  Mc = 1;
  var e = j;
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
  return $s.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, $s;
}
var Ws = {};
var Pc;
function Jy() {
  return Pc || (Pc = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var o = j, s = typeof Object.is == "function" ? Object.is : e, a = o.useState, i = o.useEffect, c = o.useLayoutEffect, d = o.useDebugValue, f = !1, m = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Ws.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ws;
}
var kc;
function ew() {
  return kc || (kc = 1, process.env.NODE_ENV === "production" ? eo.exports = Qy() : eo.exports = Jy()), eo.exports;
}
var tw = ew();
function nw() {
  return tw.useSyncExternalStore(
    rw,
    () => !0,
    () => !1
  );
}
function rw() {
  return () => {
  };
}
var Ua = "Avatar", [ow] = Vy(Ua), [sw, ad] = ow(Ua), id = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = u.useState("idle");
    return /* @__PURE__ */ l.jsx(
      sw,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ l.jsx(Fe.span, { ...r, ref: t })
      }
    );
  }
);
id.displayName = Ua;
var cd = "AvatarImage", ld = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...s } = e, a = ad(cd, n), i = aw(r, s), c = me((d) => {
      o(d), a.onImageLoadingStatusChange(d);
    });
    return ge(() => {
      i !== "idle" && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ l.jsx(Fe.img, { ...s, ref: t, src: r }) : null;
  }
);
ld.displayName = cd;
var ud = "AvatarFallback", dd = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = ad(ud, n), [a, i] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), a && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(Fe.span, { ...o, ref: t }) : null;
  }
);
dd.displayName = ud;
function Dc(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function aw(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = nw(), o = u.useRef(null), s = r ? (o.current || (o.current = new window.Image()), o.current) : null, [a, i] = u.useState(
    () => Dc(s, e)
  );
  return ge(() => {
    i(Dc(s, e));
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
var fd = id, md = ld, pd = dd;
const iw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  fd,
  {
    ref: n,
    className: M(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
iw.displayName = fd.displayName;
const cw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  md,
  {
    ref: n,
    className: M("aspect-square h-full w-full", e),
    ...t
  }
));
cw.displayName = md.displayName;
const lw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  pd,
  {
    ref: n,
    className: M(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
lw.displayName = pd.displayName;
const uw = it(
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
function _c({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: M(uw({ variant: t }), e), ...n });
}
const dw = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ l.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
dw.displayName = "Breadcrumb";
const fw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
fw.displayName = "BreadcrumbList";
const mw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "li",
  {
    ref: n,
    className: M("inline-flex items-center gap-1.5", e),
    ...t
  }
));
mw.displayName = "BreadcrumbItem";
const pw = u.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? sd : "a";
  return /* @__PURE__ */ l.jsx(
    o,
    {
      ref: r,
      className: M("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
pw.displayName = "BreadcrumbLink";
const hw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
hw.displayName = "BreadcrumbPage";
const gw = ({
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
gw.displayName = "BreadcrumbSeparator";
const vw = ({
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
      /* @__PURE__ */ l.jsx(Nl, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
vw.displayName = "BreadcrumbElipssis";
const bw = {
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
}, Qt = it(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: bw,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), wt = u.forwardRef(({ className: e, variant: t, size: n, disabled: r, href: o, ...s }, a) => /* @__PURE__ */ l.jsx(l.Fragment, { children: o ? /* @__PURE__ */ l.jsx(
  Mv,
  {
    className: M(Qt({ variant: t, size: n, className: e })),
    ref: a,
    to: o,
    ...s
  }
) : /* @__PURE__ */ l.jsx(
  "button",
  {
    className: M(Qt({ variant: t, size: n, className: e })),
    ref: a,
    disabled: r,
    ...s
  }
) }));
wt.displayName = "Button";
function xw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const yw = {}, Qn = {};
function Gt(e, t) {
  try {
    const r = (yw[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Qn ? Qn[r] : Ac(r, r.split(":"));
  } catch {
    if (e in Qn) return Qn[e];
    const n = e?.match(ww);
    return n ? Ac(e, n.slice(1)) : NaN;
  }
}
const ww = /([+-]\d\d):?(\d\d)?/;
function Ac(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Qn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class rt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Gt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), hd(this), sa(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new rt(...n, t) : new rt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new rt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Gt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), sa(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new rt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Oc = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Oc.test(e)) return;
  const t = e.replace(Oc, "$1UTC");
  rt.prototype[t] && (e.startsWith("get") ? rt.prototype[e] = function() {
    return this.internal[t]();
  } : (rt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Cw(this), +this;
  }, rt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), sa(this), +this;
  }));
});
function sa(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Gt(e.timeZone, e) * 60));
}
function Cw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), hd(e);
}
function hd(e) {
  const t = Gt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(Gt(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = Gt(e.timeZone, e), g = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, b = g !== n, x = h - c;
  if (b && x) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x);
    const y = Gt(e.timeZone, e), w = y > 0 ? Math.floor(y) : Math.ceil(y), S = g - w;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class Me extends rt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Me(...n, t) : new Me(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${xw(this.timeZone, this)})`;
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
    return new Me(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Me(+new Date(t), this.timeZone);
  }
  //#endregion
}
const gd = 6048e5, Sw = 864e5, jc = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Se(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && jc in e ? e[jc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function he(e, t) {
  return Se(t || e, e);
}
function qa(e, t, n) {
  const r = he(e, n?.in);
  return isNaN(t) ? Se(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Xa(e, t, n) {
  const r = he(e, n?.in);
  if (isNaN(t)) return Se(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = Se(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
function Nw(e, t, n) {
  const {
    years: r = 0,
    months: o = 0,
    weeks: s = 0,
    days: a = 0,
    hours: i = 0,
    minutes: c = 0,
    seconds: d = 0
  } = t, f = he(e, n?.in), m = o || r ? Xa(f, o + r * 12) : f, p = a || s ? qa(m, a + s * 7) : m, g = c + i * 60, h = (d + g * 60) * 1e3;
  return Se(e, +p + h);
}
let Ew = {};
function wr() {
  return Ew;
}
function Rn(e, t) {
  const n = wr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = he(e, t?.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function ar(e, t) {
  return Rn(e, { ...t, weekStartsOn: 1 });
}
function vd(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = Se(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = ar(o), a = Se(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = ar(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ic(e) {
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
function In(e, ...t) {
  const n = Se.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ir(e, t) {
  const n = he(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Za(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  ), s = ir(r), a = ir(o), i = +s - Ic(s), c = +a - Ic(a);
  return Math.round((i - c) / Sw);
}
function Rw(e, t) {
  const n = vd(e, t), r = Se(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ar(r);
}
function Tw(e, t, n) {
  return qa(e, t * 7, n);
}
function Mw(e, t, n) {
  return Xa(e, t * 12, n);
}
function Pw(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const s = he(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), Se(r, n || NaN);
}
function kw(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Se.bind(null, o));
    const s = he(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), Se(r, n || NaN);
}
function Dw(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return +ir(r) == +ir(o);
}
function bd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function _w(e) {
  return !(!bd(e) && typeof e != "number" || isNaN(+he(e)));
}
function xd(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function Aw(e, t) {
  const n = he(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function yd(e, t) {
  const [n, r] = In(e, t.start, t.end);
  return { start: n, end: r };
}
function Ow(e, t) {
  const { start: n, end: r } = yd(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(Se(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function jw(e, t) {
  const n = he(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Iw(e, t) {
  const n = he(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function wd(e, t) {
  const n = he(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Fw(e, t) {
  const { start: n, end: r } = yd(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(Se(n, a)), a.setFullYear(a.getFullYear() + i);
  return o ? c.reverse() : c;
}
function Cd(e, t) {
  const n = wr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = he(e, t?.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function Lw(e, t) {
  return Cd(e, { ...t, weekStartsOn: 1 });
}
const $w = {
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
}, Ww = (e, t, n) => {
  let r;
  const o = $w[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Nn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Bw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Vw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, zw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Hw = {
  date: Nn({
    formats: Bw,
    defaultWidth: "full"
  }),
  time: Nn({
    formats: Vw,
    defaultWidth: "full"
  }),
  dateTime: Nn({
    formats: zw,
    defaultWidth: "full"
  })
}, Yw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Gw = (e, t, n, r) => Yw[e];
function tt(e) {
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
const Kw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Uw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qw = {
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
}, Xw = {
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
}, Zw = {
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
}, Qw = {
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
}, Jw = (e, t) => {
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
}, eC = {
  ordinalNumber: Jw,
  era: tt({
    values: Kw,
    defaultWidth: "wide"
  }),
  quarter: tt({
    values: Uw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tt({
    values: qw,
    defaultWidth: "wide"
  }),
  day: tt({
    values: Xw,
    defaultWidth: "wide"
  }),
  dayPeriod: tt({
    values: Zw,
    defaultWidth: "wide",
    formattingValues: Qw,
    defaultFormattingWidth: "wide"
  })
};
function nt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? nC(i, (m) => m.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      tC(i, (m) => m.test(a))
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
function tC(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function nC(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Sd(e) {
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
const rC = /^(\d+)(th|st|nd|rd)?/i, oC = /\d+/i, sC = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, aC = {
  any: [/^b/i, /^(a|c)/i]
}, iC = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, cC = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lC = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uC = {
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
}, dC = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fC = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mC = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, pC = {
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
}, hC = {
  ordinalNumber: Sd({
    matchPattern: rC,
    parsePattern: oC,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nt({
    matchPatterns: sC,
    defaultMatchWidth: "wide",
    parsePatterns: aC,
    defaultParseWidth: "any"
  }),
  quarter: nt({
    matchPatterns: iC,
    defaultMatchWidth: "wide",
    parsePatterns: cC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nt({
    matchPatterns: lC,
    defaultMatchWidth: "wide",
    parsePatterns: uC,
    defaultParseWidth: "any"
  }),
  day: nt({
    matchPatterns: dC,
    defaultMatchWidth: "wide",
    parsePatterns: fC,
    defaultParseWidth: "any"
  }),
  dayPeriod: nt({
    matchPatterns: mC,
    defaultMatchWidth: "any",
    parsePatterns: pC,
    defaultParseWidth: "any"
  })
}, xn = {
  code: "en-US",
  formatDistance: Ww,
  formatLong: Hw,
  formatRelative: Gw,
  localize: eC,
  match: hC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function gC(e, t) {
  const n = he(e, t?.in);
  return Za(n, wd(n)) + 1;
}
function Qa(e, t) {
  const n = he(e, t?.in), r = +ar(n) - +Rw(n);
  return Math.round(r / gd) + 1;
}
function Nd(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = wr(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = Se(t?.in || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = Rn(a, t), c = Se(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const d = Rn(c, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function vC(e, t) {
  const n = wr(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Nd(e, t), s = Se(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Rn(s, t);
}
function Ja(e, t) {
  const n = he(e, t?.in), r = +Rn(n, t) - +vC(n, t);
  return Math.round(r / gd) + 1;
}
function pe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
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
}, vn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fc = {
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
    return Rt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Nd(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return pe(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : pe(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = vd(e);
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
        return Rt.M(e, t);
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
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Ja(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : pe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Qa(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : pe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Rt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = gC(e);
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
    switch (r === 12 ? o = vn.noon : r === 0 ? o = vn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = vn.evening : r >= 12 ? o = vn.afternoon : r >= 4 ? o = vn.morning : o = vn.night, t) {
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
    return Rt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Rt.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Rt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Rt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Rt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return $c(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Yt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return $c(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Yt(r);
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
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
        return "GMT" + Lc(r, ":");
      default:
        return "GMT" + Yt(r, ":");
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
        return "GMT" + Lc(r, ":");
      default:
        return "GMT" + Yt(r, ":");
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
function Lc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + pe(s, 2);
}
function $c(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2) : Yt(e, t);
}
function Yt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = pe(Math.trunc(r / 60), 2), s = pe(r % 60, 2);
  return n + o + t + s;
}
const Wc = (e, t) => {
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
}, Ed = (e, t) => {
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
}, bC = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Wc(e, t);
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
  return s.replace("{{date}}", Wc(r, t)).replace("{{time}}", Ed(o, t));
}, xC = {
  p: Ed,
  P: bC
}, yC = /^D+$/, wC = /^Y+$/, CC = ["D", "DD", "YY", "YYYY"];
function SC(e) {
  return yC.test(e);
}
function NC(e) {
  return wC.test(e);
}
function EC(e, t, n) {
  const r = RC(e, t, n);
  if (console.warn(r), CC.includes(e)) throw new RangeError(r);
}
function RC(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const TC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, MC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, PC = /^'([^]*?)'?$/, kC = /''/g, DC = /[a-zA-Z]/;
function ot(e, t, n) {
  const r = wr(), o = n?.locale ?? r.locale ?? xn, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = he(e, n?.in);
  if (!_w(i))
    throw new RangeError("Invalid time value");
  let c = t.match(MC).map((f) => {
    const m = f[0];
    if (m === "p" || m === "P") {
      const p = xC[m];
      return p(f, o.formatLong);
    }
    return f;
  }).join("").match(TC).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const m = f[0];
    if (m === "'")
      return { isToken: !1, value: _C(f) };
    if (Fc[m])
      return { isToken: !0, value: f };
    if (m.match(DC))
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
    (!n?.useAdditionalWeekYearTokens && NC(m) || !n?.useAdditionalDayOfYearTokens && SC(m)) && EC(m, t, String(e));
    const p = Fc[m[0]];
    return p(i, m, o.localize, d);
  }).join("");
}
function _C(e) {
  const t = e.match(PC);
  return t ? t[1].replace(kC, "'") : e;
}
function AC(e, t) {
  const n = he(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = Se(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function OC(e, t) {
  return he(e, t?.in).getMonth();
}
function jC(e, t) {
  return he(e, t?.in).getFullYear();
}
function IC(e, t) {
  return +he(e) > +he(t);
}
function FC(e, t) {
  return +he(e) < +he(t);
}
function LC(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function $C(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function WC(e, t, n) {
  const r = he(e, n?.in), o = r.getFullYear(), s = r.getDate(), a = Se(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = AC(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function BC(e, t, n) {
  const r = he(e, n?.in);
  return isNaN(+r) ? Se(e, NaN) : (r.setFullYear(t), r);
}
const Bc = 5, VC = 4;
function zC(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Bc * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Bc : VC;
}
function Rd(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function HC(e, t) {
  const n = Rd(e, t), r = zC(e, t);
  return t.addDays(n, r * 7 - 1);
}
const YC = {
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
}, GC = (e, t, n) => {
  let r;
  const o = YC[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, KC = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, UC = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, qC = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, XC = {
  date: Nn({
    formats: KC,
    defaultWidth: "full"
  }),
  time: Nn({
    formats: UC,
    defaultWidth: "full"
  }),
  dateTime: Nn({
    formats: qC,
    defaultWidth: "full"
  })
}, ZC = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, QC = (e, t, n, r) => {
  const o = ZC[e];
  return typeof o == "function" ? o(t) : o;
}, JC = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, eS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, tS = {
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
}, nS = {
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
}, rS = {
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
}, oS = {
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
}, sS = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, aS = {
  ordinalNumber: sS,
  era: tt({
    values: JC,
    defaultWidth: "wide"
  }),
  quarter: tt({
    values: eS,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: tt({
    values: tS,
    defaultWidth: "wide"
  }),
  day: tt({
    values: nS,
    defaultWidth: "wide"
  }),
  dayPeriod: tt({
    values: rS,
    defaultWidth: "wide",
    formattingValues: oS,
    defaultFormattingWidth: "wide"
  })
}, iS = /^(\d+)[ºªo]?/i, cS = /\d+/i, lS = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, uS = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, dS = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, fS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mS = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, pS = {
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
}, hS = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, gS = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, vS = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, bS = {
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
}, xS = {
  ordinalNumber: Sd({
    matchPattern: iS,
    parsePattern: cS,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: nt({
    matchPatterns: lS,
    defaultMatchWidth: "wide",
    parsePatterns: uS,
    defaultParseWidth: "any"
  }),
  quarter: nt({
    matchPatterns: dS,
    defaultMatchWidth: "wide",
    parsePatterns: fS,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: nt({
    matchPatterns: mS,
    defaultMatchWidth: "wide",
    parsePatterns: pS,
    defaultParseWidth: "any"
  }),
  day: nt({
    matchPatterns: hS,
    defaultMatchWidth: "wide",
    parsePatterns: gS,
    defaultParseWidth: "any"
  }),
  dayPeriod: nt({
    matchPatterns: vS,
    defaultMatchWidth: "any",
    parsePatterns: bS,
    defaultParseWidth: "any"
  })
}, Kt = {
  code: "pt-BR",
  formatDistance: GC,
  formatLong: XC,
  formatRelative: QC,
  localize: aS,
  match: xS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Td = {
  ...xn,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => ot(a, i, { locale: xn, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => ot(o, s, { locale: xn, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => ot(a, i, { locale: xn, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => ot(o, s, { locale: xn, ...t }), r(e, "cccc");
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
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Me.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Me(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : qa(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Xa(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : Tw(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Mw(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Za(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : xd(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Ow(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Fw(r), s = new Set(o.map((i) => this.getYear(i)));
      if (s.size === o.length)
        return o;
      const a = [];
      return s.forEach((i) => {
        a.push(new Date(i, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : HC(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Lw(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Aw(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Cd(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Iw(r), this.format = (r, o, s) => {
      const a = this.overrides?.format ? this.overrides.format(r, o, this.options) : ot(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Qa(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : OC(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : jC(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Ja(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : IC(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : FC(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : bd(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Dw(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : LC(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : $C(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Pw(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : kw(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : WC(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : BC(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Rd(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : ir(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : ar(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : jw(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Rn(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : wd(r), this.options = { locale: Td, ...t }, this.overrides = n;
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
class Md {
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
class yS {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class wS {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function CS(e) {
  return j.createElement("button", { ...e });
}
function SS(e) {
  return j.createElement("span", { ...e });
}
function NS(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    j.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && j.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && j.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && j.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && j.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function ES(e) {
  const { day: t, modifiers: n, ...r } = e;
  return j.createElement("td", { ...r });
}
function RS(e) {
  const { day: t, modifiers: n, ...r } = e, o = j.useRef(null);
  return j.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), j.createElement("button", { ref: o, ...r });
}
var ne;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ne || (ne = {}));
var xe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(xe || (xe = {}));
var Ye;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ye || (Ye = {}));
var Ae;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ae || (Ae = {}));
function TS(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[ne.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === s.value);
  return j.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[ne.DropdownRoot] },
    j.createElement(r.Select, { className: a, ...s }, t?.map(({ value: c, label: d, disabled: f }) => j.createElement(r.Option, { key: c, value: c, disabled: f }, d))),
    j.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      j.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function MS(e) {
  return j.createElement("div", { ...e });
}
function PS(e) {
  return j.createElement("div", { ...e });
}
function kS(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return j.createElement("div", { ...r }, e.children);
}
function DS(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return j.createElement("div", { ...r });
}
function _S(e) {
  return j.createElement("table", { ...e });
}
function AS(e) {
  return j.createElement("div", { ...e });
}
const Pd = uv(void 0);
function Cr() {
  const e = dv(Pd);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function OS(e) {
  const { components: t } = Cr();
  return j.createElement(t.Dropdown, { ...e });
}
function jS(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: d } } = Cr(), f = De((p) => {
    o && n?.(p);
  }, [o, n]), m = De((p) => {
    r && t?.(p);
  }, [r, t]);
  return j.createElement(
    "nav",
    { ...s },
    j.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: m },
      j.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[ne.Chevron], orientation: "left" })
    ),
    j.createElement(
      a.NextMonthButton,
      { type: "button", className: i[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      j.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ne.Chevron] })
    )
  );
}
function IS(e) {
  const { components: t } = Cr();
  return j.createElement(t.Button, { ...e });
}
function FS(e) {
  return j.createElement("option", { ...e });
}
function LS(e) {
  const { components: t } = Cr();
  return j.createElement(t.Button, { ...e });
}
function $S(e) {
  const { rootRef: t, ...n } = e;
  return j.createElement("div", { ...n, ref: t });
}
function WS(e) {
  return j.createElement("select", { ...e });
}
function BS(e) {
  const { week: t, ...n } = e;
  return j.createElement("tr", { ...n });
}
function VS(e) {
  return j.createElement("th", { ...e });
}
function zS(e) {
  return j.createElement(
    "thead",
    { "aria-hidden": !0 },
    j.createElement("tr", { ...e })
  );
}
function HS(e) {
  const { week: t, ...n } = e;
  return j.createElement("th", { ...n });
}
function YS(e) {
  return j.createElement("th", { ...e });
}
function GS(e) {
  return j.createElement("tbody", { ...e });
}
function KS(e) {
  const { components: t } = Cr();
  return j.createElement(t.Dropdown, { ...e });
}
const US = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: CS,
  CaptionLabel: SS,
  Chevron: NS,
  Day: ES,
  DayButton: RS,
  Dropdown: TS,
  DropdownNav: MS,
  Footer: PS,
  Month: kS,
  MonthCaption: DS,
  MonthGrid: _S,
  Months: AS,
  MonthsDropdown: OS,
  Nav: jS,
  NextMonthButton: IS,
  Option: FS,
  PreviousMonthButton: LS,
  Root: $S,
  Select: WS,
  Week: BS,
  WeekNumber: HS,
  WeekNumberHeader: YS,
  Weekday: VS,
  Weekdays: zS,
  Weeks: GS,
  YearsDropdown: KS
}, Symbol.toStringTag, { value: "Module" }));
function pt(e, t, n = !1, r = ct) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function ei(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function $o(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function ti(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ni(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function kd(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Dd(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function ht(e, t, n = ct) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Dd(i, n))
      return i.some((c) => o(e, c));
    if ($o(i))
      return pt(i, e, !1, n);
    if (kd(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (ei(i)) {
      const c = s(i.before, e), d = s(i.after, e), f = c > 0, m = d < 0;
      return a(i.before, i.after) ? m && f : f || m;
    }
    return ti(i) ? s(e, i.after) > 0 : ni(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function qS(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: d, today: f = o.today() } = t, { isSameDay: m, isSameMonth: p, startOfMonth: g, isBefore: v, endOfMonth: h, isAfter: b } = o, x = n && g(n), y = r && h(r), w = {
    [xe.focused]: [],
    [xe.outside]: [],
    [xe.disabled]: [],
    [xe.hidden]: [],
    [xe.today]: []
  }, S = {};
  for (const N of e) {
    const { date: C, displayMonth: R } = N, E = !!(R && !p(C, R)), P = !!(x && v(C, x)), k = !!(y && b(C, y)), I = !!(s && ht(C, s, o)), Y = !!(a && ht(C, a, o)) || P || k || // Broadcast calendar will show outside days as default
    !d && !c && E || d && c === !1 && E, q = m(C, f);
    E && w.outside.push(N), I && w.disabled.push(N), Y && w.hidden.push(N), q && w.today.push(N), i && Object.keys(i).forEach((_) => {
      const B = i?.[_];
      B && ht(C, B, o) && (S[_] ? S[_].push(N) : S[_] = [N]);
    });
  }
  return (N) => {
    const C = {
      [xe.focused]: !1,
      [xe.disabled]: !1,
      [xe.hidden]: !1,
      [xe.outside]: !1,
      [xe.today]: !1
    }, R = {};
    for (const E in w) {
      const P = w[E];
      C[E] = P.some((k) => k === N);
    }
    for (const E in S)
      R[E] = S[E].some((P) => P === N);
    return {
      ...C,
      // custom modifiers should override all the previous ones
      ...R
    };
  };
}
function XS(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[xe[s]] ? o.push(t[xe[s]]) : t[Ye[s]] && o.push(t[Ye[s]]), o), [t[ne.Day]]);
}
function ZS(e) {
  return {
    ...US,
    ...e
  };
}
function QS(e) {
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
function ri() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in Ye)
    e[Ye[t]] = `rdp-${Ye[t]}`;
  for (const t in Ae)
    e[Ae[t]] = `rdp-${Ae[t]}`;
  return e;
}
function _d(e, t, n) {
  return (n ?? new Ie(t)).formatMonthYear(e);
}
const JS = _d;
function eN(e, t, n) {
  return (n ?? new Ie(t)).format(e, "d");
}
function tN(e, t = ct) {
  return t.format(e, "LLLL");
}
function nN(e, t, n) {
  return (n ?? new Ie(t)).format(e, "cccccc");
}
function rN(e, t = ct) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function oN() {
  return "";
}
function Ad(e, t = ct) {
  return t.format(e, "yyyy");
}
const sN = Ad, aN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: _d,
  formatDay: eN,
  formatMonthCaption: JS,
  formatMonthDropdown: tN,
  formatWeekNumber: rN,
  formatWeekNumberHeader: oN,
  formatWeekdayName: nN,
  formatYearCaption: sN,
  formatYearDropdown: Ad
}, Symbol.toStringTag, { value: "Module" }));
function iN(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...aN,
    ...e
  };
}
function oi(e, t, n, r) {
  let o = (r ?? new Ie(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const cN = oi;
function si(e, t, n) {
  return (n ?? new Ie(t)).formatMonthYear(e);
}
const lN = si;
function Od(e, t, n, r) {
  let o = (r ?? new Ie(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function jd(e) {
  return "Choose the Month";
}
function Id() {
  return "";
}
const uN = "Go to the Next Month";
function Fd(e, t) {
  return uN;
}
function Ld(e) {
  return "Go to the Previous Month";
}
function $d(e, t, n) {
  return (n ?? new Ie(t)).format(e, "cccc");
}
function Wd(e, t) {
  return `Week ${e}`;
}
function Bd(e) {
  return "Week Number";
}
function Vd(e) {
  return "Choose the Year";
}
const dN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: lN,
  labelDay: cN,
  labelDayButton: oi,
  labelGrid: si,
  labelGridcell: Od,
  labelMonthDropdown: jd,
  labelNav: Id,
  labelNext: Fd,
  labelPrevious: Ld,
  labelWeekNumber: Wd,
  labelWeekNumberHeader: Bd,
  labelWeekday: $d,
  labelYearDropdown: Vd
}, Symbol.toStringTag, { value: "Module" })), ze = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function fN(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...dN,
    ...e ?? {},
    labelDayButton: ze(oi, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ze(jd, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ze(Fd, e?.labelNext, n.labelNext),
    labelPrevious: ze(Ld, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ze(Wd, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ze(Vd, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ze(si, e?.labelGrid, n.labelGrid),
    labelGridcell: ze(Od, e?.labelGridcell, n.labelGridcell),
    labelNav: ze(Id, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: ze(Bd, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ze($d, e?.labelWeekday, n.labelWeekday)
  };
}
function mN(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: d } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((p) => {
    const g = r.formatMonthDropdown(p, o), v = d(p), h = t && p < s(t) || n && p > s(n) || !1;
    return { value: v, label: g, disabled: h };
  });
}
function pN(e, t = {}, n = {}) {
  let r = { ...t?.[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function hN(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), a = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(s, i);
    a.push(c);
  }
  return a;
}
function gN(e, t, n, r, o = !1) {
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
function vN(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new Me(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, a = (i) => {
    const c = s(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Me.tz(e)),
    newDate: (i, c, d) => new Me(i, c, d, 12, 0, 0, e),
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
      const c = s(i.start), d = s(i.end), f = [], m = new Me(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), p = d.getFullYear() * 12 + d.getMonth();
      for (; m.getFullYear() * 12 + m.getMonth() <= p; )
        f.push(new Me(m, e)), m.setMonth(m.getMonth() + 1, 1);
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
      const c = s(i.start), d = s(i.end), f = [], m = new Me(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; m.getFullYear() <= d.getFullYear(); )
        f.push(new Me(m, e)), m.setFullYear(m.getFullYear() + 1, 0, 1);
      return f;
    },
    getWeek: (i, c) => {
      const d = a(i);
      return Ja(d, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = a(i);
      return Qa(c);
    },
    differenceInCalendarDays: (i, c) => {
      const d = a(i), f = a(c);
      return Za(d, f);
    },
    differenceInCalendarMonths: (i, c) => {
      const d = a(i), f = a(c);
      return xd(d, f);
    }
  };
}
const Sr = (e) => e instanceof HTMLElement ? e : null, Bs = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], bN = (e) => Sr(e.querySelector("[data-animated-month]")), Vs = (e) => Sr(e.querySelector("[data-animated-caption]")), zs = (e) => Sr(e.querySelector("[data-animated-weeks]")), xN = (e) => Sr(e.querySelector("[data-animated-nav]")), yN = (e) => Sr(e.querySelector("[data-animated-weekdays]"));
function wN(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = Ut(null), i = Ut(r), c = Ut(!1);
  yl(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = s.isSameMonth(r[0].date, d[0].date), m = s.isAfter(r[0].date, d[0].date), p = m ? n[Ae.caption_after_enter] : n[Ae.caption_before_enter], g = m ? n[Ae.weeks_after_enter] : n[Ae.weeks_before_enter], v = a.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Bs(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const S = bN(w);
      S && w.contains(S) && w.removeChild(S);
      const N = Vs(w);
      N && N.classList.remove(p);
      const C = zs(w);
      C && C.classList.remove(g);
    }), a.current = h) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = v instanceof HTMLElement ? Bs(v) : [], x = Bs(e.current);
    if (x?.every((y) => y instanceof HTMLElement) && b && b.every((y) => y instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const y = xN(e.current);
      y && (y.style.zIndex = "1"), x.forEach((w, S) => {
        const N = b[S];
        if (!N)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const C = Vs(w);
        C && C.classList.add(p);
        const R = zs(w);
        R && R.classList.add(g);
        const E = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), C && C.classList.remove(p), R && R.classList.remove(g), w.style.position = "", w.style.overflow = "", w.contains(N) && w.removeChild(N);
        };
        N.style.pointerEvents = "none", N.style.position = "absolute", N.style.overflow = "hidden", N.setAttribute("aria-hidden", "true");
        const P = yN(N);
        P && (P.style.opacity = "0");
        const k = Vs(N);
        k && (k.classList.add(m ? n[Ae.caption_before_exit] : n[Ae.caption_after_exit]), k.addEventListener("animationend", E));
        const I = zs(N);
        I && I.classList.add(m ? n[Ae.weeks_before_exit] : n[Ae.weeks_after_exit]), w.insertBefore(N, w.firstChild);
      });
    }
  });
}
function CN(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: g, endOfMonth: v, endOfWeek: h, isAfter: b, startOfBroadcastWeek: x, startOfISOWeek: y, startOfWeek: w } = r, S = c ? x(o, r) : a ? y(o) : w(o), N = c ? p(s) : a ? g(v(s)) : h(v(s)), C = t && (c ? p(t) : a ? g(t) : h(t)), R = C && b(N, C) ? C : N, E = f(R, S), P = m(s, o) + 1, k = [];
  for (let q = 0; q <= E; q++) {
    const _ = d(S, q);
    k.push(_);
  }
  const Y = (c ? 35 : 42) * P;
  if (i && k.length < Y) {
    const q = Y - k.length;
    for (let _ = 0; _ < q; _++) {
      const B = d(k[k.length - 1], 1);
      k.push(B);
    }
  }
  return k;
}
function SN(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function NN(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function Vc(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, c) < i - 1) {
    const p = -1 * (i - 1);
    c = f(n, p);
  }
  return t && d(c, t) < 0 && (c = t), m(c);
}
function EN(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: g } = r, v = e.reduce((h, b) => {
    const x = n.broadcastCalendar ? m(b, r) : n.ISOWeek ? p(b) : g(b), y = n.broadcastCalendar ? s(b) : n.ISOWeek ? a(i(b)) : c(i(b)), w = t.filter((R) => R >= x && R <= y), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < S) {
      const R = t.filter((E) => {
        const P = S - w.length;
        return E > y && E <= o(y, P);
      });
      w.push(...R);
    }
    const N = w.reduce((R, E) => {
      const P = n.ISOWeek ? d(E) : f(E), k = R.find((Y) => Y.weekNumber === P), I = new Md(E, b, r);
      return k ? k.days.push(I) : R.push(new wS(P, [I])), R;
    }, []), C = new yS(b, N);
    return h.push(C), h;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function RN(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: g, fromMonth: v, toMonth: h } = e;
  !n && v && (n = v), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && g && (r = f(g, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : p ? n = f(p, 0, 1) : !n && b && (n = o(c(e.today ?? m(), -100))), r ? r = i(r) : g ? r = f(g, 11, 31) : !r && b && (r = d(e.today ?? m())), [
    n && s(n),
    r && s(r)
  ];
}
function TN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s : 1, f = a(e);
  if (!t)
    return i(f, d);
  if (!(c(t, e) < s))
    return i(f, d);
}
function MN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, d = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -d);
  if (!(c(f, t) <= 0))
    return i(f, -d);
}
function PN(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Wo(e, t) {
  const [n, r] = $e(e);
  return [t === void 0 ? n : t, r];
}
function kN(e, t) {
  const [n, r] = RN(e, t), { startOfMonth: o, endOfMonth: s } = t, a = Vc(e, n, r, t), [i, c] = Wo(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  gt(() => {
    const S = Vc(e, n, r, t);
    c(S);
  }, [e.timeZone]);
  const { months: d, weeks: f, days: m, previousMonth: p, nextMonth: g } = ro(() => {
    const S = NN(i, r, { numberOfMonths: e.numberOfMonths }, t), N = CN(S, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), C = EN(S, N, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), R = PN(C), E = SN(C), P = MN(i, n, e, t), k = TN(i, r, e, t);
    return {
      months: C,
      weeks: R,
      days: E,
      previousMonth: P,
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
var Je;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Je || (Je = {}));
function zc(e) {
  return !e[xe.disabled] && !e[xe.hidden] && !e[xe.outside];
}
function DN(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    zc(i) && (i[xe.focused] && s < Je.FocusedModifier ? (o = a, s = Je.FocusedModifier) : r?.isEqualTo(a) && s < Je.LastFocused ? (o = a, s = Je.LastFocused) : n(a.date) && s < Je.Selected ? (o = a, s = Je.Selected) : i[xe.today] && s < Je.Today && (o = a, s = Je.Today));
  }
  return o || (o = e.find((a) => zc(t(a)))), o;
}
function _N(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: g, endOfISOWeek: v, endOfWeek: h, max: b, min: x, startOfBroadcastWeek: y, startOfISOWeek: w, startOfWeek: S } = a;
  let C = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (R) => c ? y(R, a) : i ? w(R) : S(R),
    endOfWeek: (R) => c ? g(R) : i ? v(R) : h(R)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? C = b([r, C]) : t === "after" && o && (C = x([o, C])), C;
}
function zd(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = _N(e, t, n.date, r, o, s, a), d = !!(s.disabled && ht(c, s.disabled, a)), f = !!(s.hidden && ht(c, s.hidden, a)), m = c, p = new Md(c, m, a);
  return !d && !f ? p : zd(e, t, p, r, o, s, a, i + 1);
}
function AN(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = $e(), c = DN(t.days, n, r || (() => !1), a), [d, f] = $e(s ? c : void 0);
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
      const x = zd(h, b, d, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((w) => w.isEqualTo(x)) || (t.goToDay(x), f(x)));
    }
  };
}
function ON(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Wo(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, d = (g) => i?.some((v) => c(v, g)) ?? !1, { min: f, max: m } = e;
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
function jN(e, t, n = 0, r = 0, o = !1, s = ct) {
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
function IN(e, t, n = ct) {
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
function Hc(e, t, n = ct) {
  return pt(e, t.from, !1, n) || pt(e, t.to, !1, n) || pt(t, e.from, !1, n) || pt(t, e.to, !1, n);
}
function FN(e, t, n = ct) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? pt(e, i, !1, n) : Dd(i, n) ? i.some((c) => pt(e, c, !1, n)) : $o(i) ? i.from && i.to ? Hc(e, { from: i.from, to: i.to }, n) : !1 : kd(i) ? IN(e, i.dayOfWeek, n) : ei(i) ? n.isAfter(i.before, i.after) ? Hc(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : ht(e.from, i, n) || ht(e.to, i, n) : ti(i) || ni(i) ? ht(e.from, i, n) || ht(e.to, i, n) : !1))
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
function LN(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Wo(o, a ? o : void 0), d = a ? o : i;
  return {
    selected: d,
    select: (p, g, v) => {
      const { min: h, max: b } = e, x = p ? jN(p, d, h, b, s, t) : void 0;
      return r && n && x?.from && x.to && FN({ from: x.from, to: x.to }, n, t) && (x.from = p, x.to = void 0), a || c(x), a?.(x, p, g, v), x;
    },
    isSelected: (p) => d && pt(d, p, !1, t)
  };
}
function $N(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Wo(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (m, p, g) => {
      let v = m;
      return !r && i && i && c(m, i) && (v = void 0), o || a(v), o?.(v, m, p, g), v;
    },
    isSelected: (m) => i ? c(i, m) : !1
  };
}
function WN(e, t) {
  const n = $N(e, t), r = ON(e, t), o = LN(e, t);
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
function Le(e, t) {
  return e instanceof Me && e.timeZone === t ? e : new Me(e, t);
}
function bn(e, t, n) {
  return Le(e, t);
}
function Yc(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? bn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? bn(r, t) : r) : $o(e) ? {
    ...e,
    from: e.from ? Le(e.from, t) : e.from,
    to: e.to ? Le(e.to, t) : e.to
  } : ei(e) ? {
    before: bn(e.before, t),
    after: bn(e.after, t)
  } : ti(e) ? {
    after: bn(e.after, t)
  } : ni(e) ? {
    before: bn(e.before, t)
  } : e;
}
function Hs(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Yc(r, t)) : Yc(e, t));
}
function BN(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Le(t.today, n)), t.month && (t.month = Le(t.month, n)), t.defaultMonth && (t.defaultMonth = Le(t.defaultMonth, n)), t.startMonth && (t.startMonth = Le(t.startMonth, n)), t.endMonth && (t.endMonth = Le(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Le(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((ie) => Le(ie, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Le(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Le(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Hs(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Hs(t.hidden, n)), t.modifiers)) {
    const ie = {};
    Object.keys(t.modifiers).forEach((fe) => {
      ie[fe] = Hs(t.modifiers?.[fe], n);
    }), t.modifiers = ie;
  }
  const { components: r, formatters: o, labels: s, dateLib: a, locale: i, classNames: c } = ro(() => {
    const ie = { ...Td, ...t.locale }, fe = t.broadcastCalendar ? 1 : t.weekStartsOn, se = t.noonSafe && t.timeZone ? vN(t.timeZone, {
      weekStartsOn: fe,
      locale: ie
    }) : void 0, de = t.dateLib && se ? { ...se, ...t.dateLib } : t.dateLib ?? se, Te = new Ie({
      locale: ie,
      weekStartsOn: fe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, de);
    return {
      dateLib: Te,
      components: ZS(t.components),
      formatters: iN(t.formatters),
      labels: fN(t.labels, Te.options),
      locale: ie,
      classNames: { ...ri(), ...t.classNames }
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
  const { captionLayout: d, mode: f, navLayout: m, numberOfMonths: p = 1, onDayBlur: g, onDayClick: v, onDayFocus: h, onDayKeyDown: b, onDayMouseEnter: x, onDayMouseLeave: y, onNextClick: w, onPrevClick: S, showWeekNumber: N, styles: C } = t, { formatCaption: R, formatDay: E, formatMonthDropdown: P, formatWeekNumber: k, formatWeekNumberHeader: I, formatWeekdayName: Y, formatYearDropdown: q } = o, _ = kN(t, a), { days: B, months: $, navStart: X, navEnd: H, previousMonth: F, nextMonth: T, goToMonth: z } = _, D = qS(B, t, X, H, a), { isSelected: W, select: U, selected: L } = WN(t, a) ?? {}, { blur: Z, focused: O, isFocusTarget: K, moveFocus: Q, setFocused: re } = AN(t, _, D, W ?? (() => !1), a), { labelDayButton: te, labelGridcell: V, labelGrid: ae, labelMonthDropdown: ue, labelNav: we, labelPrevious: Re, labelNext: ke, labelWeekday: dt, labelWeekNumber: Qe, labelWeekNumberHeader: ft, labelYearDropdown: Vt } = s, Hn = ro(() => hN(a, t.ISOWeek, t.broadcastCalendar, t.today), [a, t.ISOWeek, t.broadcastCalendar, t.today]), un = f !== void 0 || v !== void 0, dn = De(() => {
    F && (z(F), S?.(F));
  }, [F, z, S]), fn = De(() => {
    T && (z(T), w?.(T));
  }, [z, T, w]), Cs = De((ie, fe) => (se) => {
    se.preventDefault(), se.stopPropagation(), re(ie), !fe.disabled && (U?.(ie.date, fe, se), v?.(ie.date, fe, se));
  }, [U, v, re]), Vr = De((ie, fe) => (se) => {
    re(ie), h?.(ie.date, fe, se);
  }, [h, re]), Ss = De((ie, fe) => (se) => {
    Z(), g?.(ie.date, fe, se);
  }, [Z, g]), Yn = De((ie, fe) => (se) => {
    const de = {
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
    if (de[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [Te, le] = de[se.key];
      Q(Te, le);
    }
    b?.(ie.date, fe, se);
  }, [Q, b, t.dir]), St = De((ie, fe) => (se) => {
    x?.(ie.date, fe, se);
  }, [x]), Gn = De((ie, fe) => (se) => {
    y?.(ie.date, fe, se);
  }, [y]), Kn = De((ie) => (fe) => {
    const se = Number(fe.target.value), de = a.setMonth(a.startOfMonth(ie), se);
    z(de);
  }, [a, z]), mn = De((ie) => (fe) => {
    const se = Number(fe.target.value), de = a.setYear(a.startOfMonth(ie), se);
    z(de);
  }, [a, z]), { className: Ns, style: Es } = ro(() => ({
    className: [c[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C?.[ne.Root], ...t.style }
  }), [c, t.className, t.style, C]), Rs = QS(t), zr = Ut(null);
  wN(zr, !!t.animate, {
    classNames: c,
    months: $,
    focused: O,
    dateLib: a
  });
  const Ts = {
    dayPickerProps: t,
    selected: L,
    select: U,
    isSelected: W,
    months: $,
    nextMonth: T,
    previousMonth: F,
    goToMonth: z,
    getModifiers: D,
    components: r,
    classNames: c,
    styles: C,
    labels: s,
    formatters: o
  };
  return j.createElement(
    Pd.Provider,
    { value: Ts },
    j.createElement(
      r.Root,
      { rootRef: t.animate ? zr : void 0, className: Ns, style: Es, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Rs },
      j.createElement(
        r.Months,
        { className: c[ne.Months], style: C?.[ne.Months] },
        !t.hideNavigation && !m && j.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[ne.Nav], style: C?.[ne.Nav], "aria-label": we(), onPreviousClick: dn, onNextClick: fn, previousMonth: F, nextMonth: T }),
        $.map((ie, fe) => j.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[ne.Month],
            style: C?.[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: fe,
            displayIndex: fe,
            calendarMonth: ie
          },
          m === "around" && !t.hideNavigation && fe === 0 && j.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[ne.PreviousMonthButton], tabIndex: F ? void 0 : -1, "aria-disabled": F ? void 0 : !0, "aria-label": Re(F), onClick: dn, "data-animated-button": t.animate ? "true" : void 0 },
            j.createElement(r.Chevron, { disabled: F ? void 0 : !0, className: c[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          j.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[ne.MonthCaption], style: C?.[ne.MonthCaption], calendarMonth: ie, displayIndex: fe }, d?.startsWith("dropdown") ? j.createElement(
            r.DropdownNav,
            { className: c[ne.Dropdowns], style: C?.[ne.Dropdowns] },
            (() => {
              const se = d === "dropdown" || d === "dropdown-months" ? j.createElement(r.MonthsDropdown, { key: "month", className: c[ne.MonthsDropdown], "aria-label": ue(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Kn(ie.date), options: mN(ie.date, X, H, o, a), style: C?.[ne.Dropdown], value: a.getMonth(ie.date) }) : j.createElement("span", { key: "month" }, P(ie.date, a)), de = d === "dropdown" || d === "dropdown-years" ? j.createElement(r.YearsDropdown, { key: "year", className: c[ne.YearsDropdown], "aria-label": Vt(a.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: mn(ie.date), options: gN(X, H, o, a, !!t.reverseYears), style: C?.[ne.Dropdown], value: a.getYear(ie.date) }) : j.createElement("span", { key: "year" }, q(ie.date, a));
              return a.getMonthYearOrder() === "year-first" ? [de, se] : [se, de];
            })(),
            j.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, R(ie.date, a.options, a))
          ) : j.createElement(r.CaptionLabel, { className: c[ne.CaptionLabel], role: "status", "aria-live": "polite" }, R(ie.date, a.options, a))),
          m === "around" && !t.hideNavigation && fe === p - 1 && j.createElement(
            r.NextMonthButton,
            { type: "button", className: c[ne.NextMonthButton], tabIndex: T ? void 0 : -1, "aria-disabled": T ? void 0 : !0, "aria-label": ke(T), onClick: fn, "data-animated-button": t.animate ? "true" : void 0 },
            j.createElement(r.Chevron, { disabled: T ? void 0 : !0, className: c[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          fe === p - 1 && m === "after" && !t.hideNavigation && j.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[ne.Nav], style: C?.[ne.Nav], "aria-label": we(), onPreviousClick: dn, onNextClick: fn, previousMonth: F, nextMonth: T }),
          j.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": f === "multiple" || f === "range", "aria-label": ae(ie.date, a.options, a) || void 0, className: c[ne.MonthGrid], style: C?.[ne.MonthGrid] },
            !t.hideWeekdays && j.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[ne.Weekdays], style: C?.[ne.Weekdays] },
              N && j.createElement(r.WeekNumberHeader, { "aria-label": ft(a.options), className: c[ne.WeekNumberHeader], style: C?.[ne.WeekNumberHeader], scope: "col" }, I()),
              Hn.map((se) => j.createElement(r.Weekday, { "aria-label": dt(se, a.options, a), className: c[ne.Weekday], key: String(se), style: C?.[ne.Weekday], scope: "col" }, Y(se, a.options, a)))
            ),
            j.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[ne.Weeks], style: C?.[ne.Weeks] }, ie.weeks.map((se) => j.createElement(
              r.Week,
              { className: c[ne.Week], key: se.weekNumber, style: C?.[ne.Week], week: se },
              N && j.createElement(r.WeekNumber, { week: se, style: C?.[ne.WeekNumber], "aria-label": Qe(se.weekNumber, {
                locale: i
              }), className: c[ne.WeekNumber], scope: "row", role: "rowheader" }, k(se.weekNumber, a)),
              se.days.map((de) => {
                const { date: Te } = de, le = D(de);
                if (le[xe.focused] = !le.hidden && !!O?.isEqualTo(de), le[Ye.selected] = W?.(Te) || le.selected, $o(L)) {
                  const { from: Ps, to: ks } = L;
                  le[Ye.range_start] = !!(Ps && ks && a.isSameDay(Te, Ps)), le[Ye.range_end] = !!(Ps && ks && a.isSameDay(Te, ks)), le[Ye.range_middle] = pt(L, Te, !0, a);
                }
                const Hr = pN(le, C, t.modifiersStyles), Yr = XS(le, c, t.modifiersClassNames), Ms = !un && !le.hidden ? V(Te, le, a.options, a) : void 0;
                return j.createElement(r.Day, { key: `${de.isoDate}_${de.displayMonthId}`, day: de, modifiers: le, className: Yr.join(" "), style: Hr, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": Ms, "data-day": de.isoDate, "data-month": de.outside ? de.dateMonthId : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": de.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && un ? j.createElement(r.DayButton, { className: c[ne.DayButton], style: C?.[ne.DayButton], type: "button", day: de, modifiers: le, disabled: !le.focused && le.disabled || void 0, "aria-disabled": le.focused && le.disabled || void 0, tabIndex: K(de) ? 0 : -1, "aria-label": te(Te, le, a.options, a), onClick: Cs(de, le), onBlur: Ss(de, le), onFocus: Vr(de, le), onKeyDown: Yn(de, le), onMouseEnter: St(de, le), onMouseLeave: Gn(de, le) }, E(Te, a.options, a)) : !le.hidden && E(de.date, a.options, a));
              })
            )))
          )
        ))
      ),
      t.footer && j.createElement(r.Footer, { className: c[ne.Footer], style: C?.[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const VN = "(##) ####-####", zN = "(##) #####-####", HN = "#####-###", YN = "###.###.###-##", GN = "##.###.###/####-##", KN = "###########", UN = "##.###.###-#", qN = "AAA#A##", XN = "###########", ZN = "##############", Hd = (e, t) => {
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
}, y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: zN,
  CNH_MASK: KN,
  CNPJ_MASK: GN,
  CPF_MASK: YN,
  PHONE_MASK: VN,
  PLATE_MASK: qN,
  RENAVAM_MASK: XN,
  RG_MASK: UN,
  RNTRC_MASK: ZN,
  ZIP_CODE_MASK: HN,
  formatMask: Hd
}, Symbol.toStringTag, { value: "Module" })), w_ = [
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
function Yd({
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
  const d = ri();
  return /* @__PURE__ */ l.jsx(
    BN,
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
          Qt({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: M(
          Qt({ variant: o }),
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
        Chevron: ({ className: f, orientation: m, ...p }) => m === "left" ? /* @__PURE__ */ l.jsx(fv, { className: M("cn-rtl-flip size-4", f), ...p }) : m === "right" ? /* @__PURE__ */ l.jsx(mv, { className: M("cn-rtl-flip size-4", f), ...p }) : /* @__PURE__ */ l.jsx(pv, { className: M("size-4", f), ...p }),
        DayButton: ({ ...f }) => /* @__PURE__ */ l.jsx(QN, { locale: s, ...f }),
        WeekNumber: ({ children: f, ...m }) => /* @__PURE__ */ l.jsx("td", { ...m, children: /* @__PURE__ */ l.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) }),
        ...i
      },
      ...c
    }
  );
}
function QN({
  className: e,
  day: t,
  modifiers: n,
  locale: r,
  ...o
}) {
  const s = ri(), a = u.useRef(null);
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
const JN = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
JN.displayName = "Card";
const eE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
eE.displayName = "CardHeader";
const tE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
tE.displayName = "CardTitle";
const nE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "p",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
nE.displayName = "CardDescription";
const rE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("p-4", e), ...t }));
rE.displayName = "CardContent";
const oE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex items-center p-4 pt-0", e),
    ...t
  }
));
oE.displayName = "CardFooter";
function sE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Gc(e) {
  return sE(e) || Array.isArray(e);
}
function aE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ai(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== s ? !1 : n.every((a) => {
    const i = e[a], c = t[a];
    return typeof i == "function" ? `${i}` == `${c}` : !Gc(i) || !Gc(c) ? i === c : ai(i, c);
  });
}
function Kc(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function iE(e, t) {
  if (e.length !== t.length) return !1;
  const n = Kc(e), r = Kc(t);
  return n.every((o, s) => {
    const a = r[s];
    return ai(o, a);
  });
}
function ii(e) {
  return typeof e == "number";
}
function aa(e) {
  return typeof e == "string";
}
function Bo(e) {
  return typeof e == "boolean";
}
function Uc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
  return Math.abs(e);
}
function ci(e) {
  return Math.sign(e);
}
function nr(e, t) {
  return ye(e - t);
}
function cE(e, t) {
  if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
  const n = nr(ye(e), ye(t));
  return ye(n / e);
}
function lE(e) {
  return Math.round(e * 100) / 100;
}
function cr(e) {
  return lr(e).map(Number);
}
function Ge(e) {
  return e[Nr(e)];
}
function Nr(e) {
  return Math.max(0, e.length - 1);
}
function li(e, t) {
  return t === Nr(e);
}
function qc(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function lr(e) {
  return Object.keys(e);
}
function Gd(e, t) {
  return [e, t].reduce((n, r) => (lr(r).forEach((o) => {
    const s = n[o], a = r[o], i = Uc(s) && Uc(a);
    n[o] = i ? Gd(s, a) : a;
  }), n), {});
}
function ia(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function uE(e, t) {
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
    return aa(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: a
  };
}
function ur() {
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
function dE(e, t, n, r) {
  const o = ur(), s = 1e3 / 60;
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
function fE(e, t) {
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
function Jt(e = 0, t = 0) {
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
function Kd(e, t, n) {
  const {
    constrain: r
  } = Jt(0, e), o = e + 1;
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
    return Kd(e, i(), n);
  }
  const m = {
    get: i,
    set: c,
    add: d,
    clone: f
  };
  return m;
}
function mE(e, t, n, r, o, s, a, i, c, d, f, m, p, g, v, h, b, x, y) {
  const {
    cross: w,
    direction: S
  } = e, N = ["INPUT", "SELECT", "TEXTAREA"], C = {
    passive: !1
  }, R = ur(), E = ur(), P = Jt(50, 225).constrain(g.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, Y = v ? 43 : 25;
  let q = !1, _ = 0, B = 0, $ = !1, X = !1, H = !1, F = !1;
  function T(V) {
    if (!y) return;
    function ae(we) {
      (Bo(y) || y(V, we)) && Z(we);
    }
    const ue = t;
    R.add(ue, "dragstart", (we) => we.preventDefault(), C).add(ue, "touchmove", () => {
    }, C).add(ue, "touchend", () => {
    }).add(ue, "touchstart", ae).add(ue, "mousedown", ae).add(ue, "touchcancel", K).add(ue, "contextmenu", K).add(ue, "click", Q, !0);
  }
  function z() {
    R.clear(), E.clear();
  }
  function D() {
    const V = F ? n : t;
    E.add(V, "touchmove", O, C).add(V, "touchend", K).add(V, "mousemove", O, C).add(V, "mouseup", K);
  }
  function W(V) {
    const ae = V.nodeName || "";
    return N.includes(ae);
  }
  function U() {
    return (v ? I : k)[F ? "mouse" : "touch"];
  }
  function L(V, ae) {
    const ue = m.add(ci(V) * -1), we = f.byDistance(V, !v).distance;
    return v || ye(V) < P ? we : b && ae ? we * 0.5 : f.byIndex(ue.get(), 0).distance;
  }
  function Z(V) {
    const ae = ia(V, r);
    F = ae, H = v && ae && !V.buttons && q, q = nr(o.get(), a.get()) >= 2, !(ae && V.button !== 0) && (W(V.target) || ($ = !0, s.pointerDown(V), d.useFriction(0).useDuration(0), o.set(a), D(), _ = s.readPoint(V), B = s.readPoint(V, w), p.emit("pointerDown")));
  }
  function O(V) {
    if (!ia(V, r) && V.touches.length >= 2) return K(V);
    const ue = s.readPoint(V), we = s.readPoint(V, w), Re = nr(ue, _), ke = nr(we, B);
    if (!X && !F && (!V.cancelable || (X = Re > ke, !X)))
      return K(V);
    const dt = s.pointerMove(V);
    Re > h && (H = !0), d.useFriction(0.3).useDuration(0.75), i.start(), o.add(S(dt)), V.preventDefault();
  }
  function K(V) {
    const ue = f.byDistance(0, !1).index !== m.get(), we = s.pointerUp(V) * U(), Re = L(S(we), ue), ke = cE(we, Re), dt = Y - 10 * ke, Qe = x + ke / 50;
    X = !1, $ = !1, E.clear(), d.useDuration(dt).useFriction(Qe), c.distance(Re, !v), F = !1, p.emit("pointerUp");
  }
  function Q(V) {
    H && (V.stopPropagation(), V.preventDefault(), H = !1);
  }
  function re() {
    return $;
  }
  return {
    init: T,
    destroy: z,
    pointerDown: re
  };
}
function pE(e, t) {
  let r, o;
  function s(m) {
    return m.timeStamp;
  }
  function a(m, p) {
    const v = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (ia(m, t) ? m : m.touches[0])[v];
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
function hE() {
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
function gE(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function vE(e, t, n, r, o, s, a) {
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
        const S = w.target === e, N = r.indexOf(w.target), C = S ? d : f[N], R = p(S ? e : r[N]);
        if (ye(R - C) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((y) => {
      (Bo(s) || s(b, y)) && x(y);
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
function bE(e, t, n, r, o, s) {
  let a = 0, i = 0, c = o, d = s, f = e.get(), m = 0;
  function p() {
    const C = r.get() - e.get(), R = !c;
    let E = 0;
    return R ? (a = 0, n.set(r), e.set(r), E = C) : (n.set(e), a += C / c, a *= d, f += a, e.add(a), E = f - m), i = ci(E), m = f, N;
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
function xE(e, t, n, r, o) {
  const s = o.measure(10), a = o.measure(50), i = Jt(0.1, 0.99);
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
function yE(e, t, n, r, o) {
  const s = Jt(-t + e, 0), a = m(), i = f(), c = p();
  function d(v, h) {
    return nr(v, h) <= 1;
  }
  function f() {
    const v = a[0], h = Ge(a), b = a.lastIndexOf(v), x = a.indexOf(h) + 1;
    return Jt(b, x);
  }
  function m() {
    return n.map((v, h) => {
      const {
        min: b,
        max: x
      } = s, y = s.constrain(v), w = !h, S = li(n, h);
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
function wE(e, t, n) {
  const r = t[0], o = n ? r - e : Ge(t);
  return {
    limit: Jt(o, r)
  };
}
function CE(e, t, n, r) {
  const s = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Jt(s, a);
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
function SE(e) {
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
function NE(e, t, n, r, o) {
  const {
    startEdge: s,
    endEdge: a
  } = e, {
    groupSlides: i
  } = o, c = m().map(t.measure), d = p(), f = g();
  function m() {
    return i(r).map((h) => Ge(h)[a] - h[0][s]).map(ye);
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
function EE(e, t, n, r, o, s) {
  const {
    groupSlides: a
  } = o, {
    min: i,
    max: c
  } = r, d = f();
  function f() {
    const p = a(s), g = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : g ? p : p.slice(i, c).map((v, h, b) => {
      const x = !h, y = li(b, h);
      if (x) {
        const w = Ge(b[0]) + 1;
        return qc(w);
      }
      if (y) {
        const w = Nr(s) - Ge(b)[0] + 1;
        return qc(w, Ge(b)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function RE(e, t, n, r, o) {
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
    const x = b.filter((y) => ci(y) === h);
    return x.length ? c(x) : Ge(b) - n;
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
function TE(e, t, n, r, o, s, a) {
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
function ME(e, t, n, r, o, s, a, i) {
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
      ii(y) && (o.useDuration(0), r.index(y, 0), a.emit("slideFocus"));
    }
    s.add(document, "keydown", m, !1), t.forEach((h, b) => {
      s.add(h, "focus", (x) => {
        (Bo(i) || i(g, x)) && v(b);
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
function Jn(e) {
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
    return ii(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: s
  };
}
function Ud(e, t) {
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
    const g = lE(e.direction(p));
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
function PE(e, t, n, r, o, s, a, i, c) {
  const f = cr(o), m = cr(o).reverse(), p = x().concat(y());
  function g(R, E) {
    return R.reduce((P, k) => P - o[k], E);
  }
  function v(R, E) {
    return R.reduce((P, k) => g(P, E) > 0 ? P.concat([k]) : P, []);
  }
  function h(R) {
    return s.map((E, P) => ({
      start: E - r[P] + 0.5 + R,
      end: E + t - 0.5 + R
    }));
  }
  function b(R, E, P) {
    const k = h(E);
    return R.map((I) => {
      const Y = P ? 0 : -n, q = P ? n : 0, _ = P ? "end" : "start", B = k[I][_];
      return {
        index: I,
        loopPoint: B,
        slideLocation: Jn(-1),
        translate: Ud(e, c[I]),
        target: () => i.get() > B ? Y : q
      };
    });
  }
  function x() {
    const R = a[0], E = v(m, R);
    return b(E, n, !1);
  }
  function y() {
    const R = t - a[0] - 1, E = v(f, R);
    return b(E, -n, !0);
  }
  function w() {
    return p.every(({
      index: R
    }) => {
      const E = f.filter((P) => P !== R);
      return g(E, t) <= 0.1;
    });
  }
  function S() {
    p.forEach((R) => {
      const {
        target: E,
        translate: P,
        slideLocation: k
      } = R, I = E();
      I !== k.get() && (P.to(I), k.set(I));
    });
  }
  function N() {
    p.forEach((R) => R.translate.clear());
  }
  return {
    canLoop: w,
    clear: N,
    loop: S,
    loopPoints: p
  };
}
function kE(e, t, n) {
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
      o || (Bo(n) || n(c, f)) && d(f);
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
function DE(e, t, n, r) {
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
    return lr(o).reduce((h, b) => {
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
function _E(e, t, n, r, o, s) {
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
    const y = s.getComputedStyle(Ge(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function b() {
    return n.map((y, w, S) => {
      const N = !w, C = li(S, w);
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
function AE(e, t, n, r, o, s, a, i, c) {
  const {
    startEdge: d,
    endEdge: f,
    direction: m
  } = e, p = ii(n);
  function g(x, y) {
    return cr(x).filter((w) => w % y === 0).map((w) => x.slice(w, w + y));
  }
  function v(x) {
    return x.length ? cr(x).reduce((y, w, S) => {
      const N = Ge(y) || 0, C = N === 0, R = w === Nr(x), E = o[d] - s[N][d], P = o[d] - s[w][f], k = !r && C ? m(a) : 0, I = !r && R ? m(i) : 0, Y = ye(P - I - (E + k));
      return S && Y > t + c && y.push(w), R && y.push(x.length), y;
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
function OE(e, t, n, r, o, s, a) {
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
  } = s, R = 2, E = hE(), P = E.measure(t), k = n.map(E.measure), I = fE(c, d), Y = I.measureSize(P), q = gE(Y), _ = uE(i, Y), B = !m && !!y, $ = m || !!y, {
    slideSizes: X,
    slideSizesWithGaps: H,
    startGap: F,
    endGap: T
  } = _E(I, P, k, n, $, o), z = AE(I, Y, b, m, P, k, F, T, R), {
    snaps: D,
    snapsAligned: W
  } = NE(I, _, P, k, z), U = -Ge(D) + Ge(H), {
    snapsContained: L,
    scrollContainLimit: Z
  } = yE(Y, U, W, y, R), O = B ? L : W, {
    limit: K
  } = wE(U, O, m), Q = Kd(Nr(O), f, m), re = Q.clone(), te = cr(n), V = ({
    dragHandler: St,
    scrollBody: Gn,
    scrollBounds: Kn,
    options: {
      loop: mn
    }
  }) => {
    mn || Kn.constrain(St.pointerDown()), Gn.seek();
  }, ae = ({
    scrollBody: St,
    translate: Gn,
    location: Kn,
    offsetLocation: mn,
    previousLocation: Ns,
    scrollLooper: Es,
    slideLooper: Rs,
    dragHandler: zr,
    animation: Ts,
    eventHandler: ie,
    scrollBounds: fe,
    options: {
      loop: se
    }
  }, de) => {
    const Te = St.settled(), le = !fe.shouldConstrain(), Hr = se ? Te : Te && le, Yr = Hr && !zr.pointerDown();
    Yr && Ts.stop();
    const Ms = Kn.get() * de + Ns.get() * (1 - de);
    mn.set(Ms), se && (Es.loop(St.direction()), Rs.loop()), Gn.to(mn.get()), Yr && ie.emit("settle"), Hr || ie.emit("scroll");
  }, ue = dE(r, o, () => V(Yn), (St) => ae(Yn, St)), we = 0.68, Re = O[Q.get()], ke = Jn(Re), dt = Jn(Re), Qe = Jn(Re), ft = Jn(Re), Vt = bE(ke, Qe, dt, ft, p, we), Hn = RE(m, O, U, K, ft), un = TE(ue, Q, re, Vt, Hn, ft, a), dn = SE(K), fn = ur(), Cs = DE(t, n, a, h), {
    slideRegistry: Vr
  } = EE(B, y, O, Z, z, te), Ss = ME(e, n, Vr, un, Vt, fn, a, C), Yn = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: P,
    slideRects: k,
    animation: ue,
    axis: I,
    dragHandler: mE(I, e, r, o, ft, pE(I, o), ke, ue, un, Vt, Hn, Q, a, q, g, v, x, we, N),
    eventStore: fn,
    percentOfView: q,
    index: Q,
    indexPrevious: re,
    limit: K,
    location: ke,
    offsetLocation: Qe,
    previousLocation: dt,
    options: s,
    resizeHandler: vE(t, a, o, n, I, w, E),
    scrollBody: Vt,
    scrollBounds: xE(K, Qe, ft, Vt, q),
    scrollLooper: CE(U, K, Qe, [ke, Qe, dt, ft]),
    scrollProgress: dn,
    scrollSnapList: O.map(dn.get),
    scrollSnaps: O,
    scrollTarget: Hn,
    scrollTo: un,
    slideLooper: PE(I, Y, U, X, H, D, O, Qe, n),
    slideFocus: Ss,
    slidesHandler: kE(t, a, S),
    slidesInView: Cs,
    slideIndexes: te,
    slideRegistry: Vr,
    slidesToScroll: z,
    target: ft,
    translate: Ud(I, t)
  };
  return Yn;
}
function jE() {
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
const IE = {
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
function FE(e) {
  function t(s, a) {
    return Gd(s, a || {});
  }
  function n(s) {
    const a = s.breakpoints || {}, i = lr(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, d) => t(c, d), {});
    return t(s, i);
  }
  function r(s) {
    return s.map((a) => lr(a.breakpoints || {})).reduce((a, i) => a.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function LE(e) {
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
function go(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, s = FE(o), a = LE(s), i = ur(), c = jE(), {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: m
  } = s, {
    on: p,
    off: g,
    emit: v
  } = c, h = I;
  let b = !1, x, y = d(IE, go.globalOptions), w = d(y), S = [], N, C, R;
  function E() {
    const {
      container: te,
      slides: V
    } = w;
    C = (aa(te) ? e.querySelector(te) : te) || e.children[0];
    const ue = aa(V) ? C.querySelectorAll(V) : V;
    R = [].slice.call(ue || C.children);
  }
  function P(te) {
    const V = OE(e, C, R, r, o, te, c);
    if (te.loop && !V.slideLooper.canLoop()) {
      const ae = Object.assign({}, te, {
        loop: !1
      });
      return P(ae);
    }
    return V;
  }
  function k(te, V) {
    b || (y = d(y, te), w = f(y), S = V || S, E(), x = P(w), m([y, ...S.map(({
      options: ae
    }) => ae)]).forEach((ae) => i.add(ae, "change", I)), w.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(re), x.eventHandler.init(re), x.resizeHandler.init(re), x.slidesHandler.init(re), x.options.loop && x.slideLooper.loop(), C.offsetParent && R.length && x.dragHandler.init(re), N = a.init(re, S)));
  }
  function I(te, V) {
    const ae = z();
    Y(), k(d({
      startIndex: ae
    }, te), V), c.emit("reInit");
  }
  function Y() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), a.destroy(), i.clear();
  }
  function q() {
    b || (b = !0, i.clear(), Y(), c.emit("destroy"), c.clear());
  }
  function _(te, V, ae) {
    !w.active || b || (x.scrollBody.useBaseFriction().useDuration(V === !0 ? 0 : w.duration), x.scrollTo.index(te, ae || 0));
  }
  function B(te) {
    const V = x.index.add(1).get();
    _(V, te, -1);
  }
  function $(te) {
    const V = x.index.add(-1).get();
    _(V, te, 1);
  }
  function X() {
    return x.index.add(1).get() !== z();
  }
  function H() {
    return x.index.add(-1).get() !== z();
  }
  function F() {
    return x.scrollSnapList;
  }
  function T() {
    return x.scrollProgress.get(x.offsetLocation.get());
  }
  function z() {
    return x.index.get();
  }
  function D() {
    return x.indexPrevious.get();
  }
  function W() {
    return x.slidesInView.get();
  }
  function U() {
    return x.slidesInView.get(!1);
  }
  function L() {
    return N;
  }
  function Z() {
    return x;
  }
  function O() {
    return e;
  }
  function K() {
    return C;
  }
  function Q() {
    return R;
  }
  const re = {
    canScrollNext: X,
    canScrollPrev: H,
    containerNode: K,
    internalEngine: Z,
    destroy: q,
    off: g,
    on: p,
    emit: v,
    plugins: L,
    previousScrollSnap: D,
    reInit: h,
    rootNode: O,
    scrollNext: B,
    scrollPrev: $,
    scrollProgress: T,
    scrollSnapList: F,
    scrollTo: _,
    selectedScrollSnap: z,
    slideNodes: Q,
    slidesInView: W,
    slidesNotInView: U
  };
  return k(t, n), setTimeout(() => c.emit("init"), 0), re;
}
go.globalOptions = void 0;
function ui(e = {}, t = []) {
  const n = Ut(e), r = Ut(t), [o, s] = $e(), [a, i] = $e(), c = De(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return gt(() => {
    ai(n.current, e) || (n.current = e, c());
  }, [e, c]), gt(() => {
    iE(r.current, t) || (r.current = t, c());
  }, [t, c]), gt(() => {
    if (aE() && a) {
      go.globalOptions = ui.globalOptions;
      const d = go(a, n.current, r.current);
      return s(d), () => d.destroy();
    } else
      s(void 0);
  }, [a, s]), [i, o];
}
ui.globalOptions = void 0;
const qd = u.createContext(null);
function Vo() {
  const e = u.useContext(qd);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const $E = u.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: s,
    ...a
  }, i) => {
    const [c, d] = ui(
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
      qd.Provider,
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
$E.displayName = "Carousel";
const WE = u.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = Vo();
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
WE.displayName = "CarouselContent";
const BE = u.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = Vo();
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
BE.displayName = "CarouselItem";
const VE = u.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollPrev: a, canScrollPrev: i } = Vo();
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
        /* @__PURE__ */ l.jsx(hv, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
VE.displayName = "CarouselPrevious";
const zE = u.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollNext: a, canScrollNext: i } = Vo();
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
        /* @__PURE__ */ l.jsx(gv, { className: "h-4 w-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
zE.displayName = "CarouselNext";
const HE = { light: "", dark: ".dark" }, Xd = u.createContext(null);
function Zd() {
  const e = u.useContext(Xd);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const YE = u.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, s) => {
  const a = u.useId(), i = `chart-${e || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ l.jsx(Xd.Provider, { value: { config: r }, children: /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(GE, { id: i, config: r }),
        /* @__PURE__ */ l.jsx(ja.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
YE.displayName = "Chart";
const GE = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ l.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(HE).map(
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
}, C_ = ja.Tooltip, KE = u.forwardRef(
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
    const { config: v } = Zd(), h = u.useMemo(() => {
      if (o || !t?.length)
        return null;
      const [x] = t;
      if (!x)
        return null;
      const y = `${p || x.dataKey || x.name || "value"}`, w = ca(v, x, y), S = !p && typeof a == "string" ? v[a]?.label || a : w?.label;
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
            const w = `${m || x.dataKey || x.name || "value"}`, S = ca(v, x, w), N = f || x.payload.fill || x.color;
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
KE.displayName = "ChartTooltip";
const S_ = ja.Legend, UE = u.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, s) => {
    const { config: a } = Zd();
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
          const c = `${o || i.dataKey || "value"}`, d = ca(a, i, c);
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
UE.displayName = "ChartLegend";
function ca(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function Er(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function zo(e) {
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
var Ho = "Checkbox", [qE] = Ne(Ho), [XE, di] = qE(Ho);
function ZE(e) {
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
  } = e, [p, g] = Ce({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Ho
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
    defaultChecked: Mt(o) ? !1 : o,
    isFormControl: w,
    bubbleInput: b,
    setBubbleInput: x
  };
  return /* @__PURE__ */ l.jsx(
    XE,
    {
      scope: t,
      ...S,
      children: QE(m) ? m(S) : r
    }
  );
}
var Qd = "CheckboxTrigger", Jd = u.forwardRef(
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
    } = di(Qd, e), h = oe(o, f), b = u.useRef(c);
    return u.useEffect(() => {
      const x = s?.form;
      if (x) {
        const y = () => m(b.current);
        return x.addEventListener("reset", y), () => x.removeEventListener("reset", y);
      }
    }, [s, m]), /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Mt(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": of(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: h,
        onKeyDown: A(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: A(n, (x) => {
          m((y) => Mt(y) ? !0 : !y), v && g && (p.current = x.isPropagationStopped(), p.current || x.stopPropagation());
        })
      }
    );
  }
);
Jd.displayName = Qd;
var fi = u.forwardRef(
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
      ZE,
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
            Jd,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            rf,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
fi.displayName = Ho;
var ef = "CheckboxIndicator", tf = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = di(ef, n);
    return /* @__PURE__ */ l.jsx(
      ve,
      {
        present: r || Mt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          G.span,
          {
            "data-state": of(s.checked),
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
tf.displayName = ef;
var nf = "CheckboxBubbleInput", rf = u.forwardRef(
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
    } = di(nf, e), v = oe(n, g), h = Er(s), b = zo(r);
    u.useEffect(() => {
      const y = p;
      if (!y) return;
      const w = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        w,
        "checked"
      ).set, C = !o.current;
      if (h !== s && N) {
        const R = new Event("click", { bubbles: C });
        y.indeterminate = Mt(s), N.call(y, Mt(s) ? !1 : s), y.dispatchEvent(R);
      }
    }, [p, h, s, o]);
    const x = u.useRef(Mt(s) ? !1 : s);
    return /* @__PURE__ */ l.jsx(
      G.input,
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
rf.displayName = nf;
function QE(e) {
  return typeof e == "function";
}
function Mt(e) {
  return e === "indeterminate";
}
function of(e) {
  return Mt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const JE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  fi,
  {
    ref: n,
    className: M(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      tf,
      {
        className: M("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ l.jsx(gr, { className: "size-4 h-full" })
      }
    )
  }
));
JE.displayName = fi.displayName;
function N_({
  name: e,
  label: t,
  options: n,
  placeholder: r = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: s = "Nenhum resultado encontrado.",
  disabled: a = !1,
  isLoading: i = !1
}) {
  const { control: c, setValue: d } = _n();
  return /* @__PURE__ */ l.jsx(
    $r,
    {
      control: c,
      name: e,
      render: ({ field: f }) => /* @__PURE__ */ l.jsxs(Wn, { children: [
        !!t && /* @__PURE__ */ l.jsx(Bn, { children: t }),
        /* @__PURE__ */ l.jsx(
          e0,
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
        /* @__PURE__ */ l.jsx(Vn, {})
      ] })
    }
  );
}
function e0({
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
  const [f, m] = $e(!1);
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ l.jsx(is, { children: e }),
    /* @__PURE__ */ l.jsxs(Ar, { open: f, onOpenChange: m, children: [
      /* @__PURE__ */ l.jsx(Or, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
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
              d && /* @__PURE__ */ l.jsx(or, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ l.jsx(Sl, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx($n, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ l.jsxs(Tr, { children: [
        /* @__PURE__ */ l.jsx(Go, { placeholder: s }),
        /* @__PURE__ */ l.jsxs(Ko, { children: [
          /* @__PURE__ */ l.jsx(Uo, { children: a }),
          /* @__PURE__ */ l.jsx(Mr, { children: t.map((p) => /* @__PURE__ */ l.jsxs(
            qt,
            {
              value: p.label,
              onSelect: () => {
                n === p.value ? r(void 0) : r(p.value), m(!1);
              },
              children: [
                /* @__PURE__ */ l.jsx(
                  gr,
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
var Xc = 1, t0 = 0.9, n0 = 0.8, r0 = 0.17, Ys = 0.1, Gs = 0.999, o0 = 0.9999, s0 = 0.99, a0 = /[\\\/_+.#"@\[\(\{&]/, i0 = /[\\\/_+.#"@\[\(\{&]/g, c0 = /[\s-]/, sf = /[\s-]/g;
function la(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? Xc : s0;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), d = n.indexOf(c, o), f = 0, m, p, g, v; d >= 0; ) m = la(e, t, n, r, d + 1, s + 1, a), m > f && (d === o ? m *= Xc : a0.test(e.charAt(d - 1)) ? (m *= n0, g = e.slice(o, d - 1).match(i0), g && o > 0 && (m *= Math.pow(Gs, g.length))) : c0.test(e.charAt(d - 1)) ? (m *= t0, v = e.slice(o, d - 1).match(sf), v && o > 0 && (m *= Math.pow(Gs, v.length))) : (m *= r0, o > 0 && (m *= Math.pow(Gs, d - o))), e.charAt(d) !== t.charAt(s) && (m *= o0)), (m < Ys && n.charAt(d - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(d - 1) !== r.charAt(s)) && (p = la(e, t, n, r, d + 1, s + 2, a), p * Ys > m && (m = p * Ys)), m > f && (f = m), d = n.indexOf(c, d + 1);
  return a[i] = f, f;
}
function Zc(e) {
  return e.toLowerCase().replace(sf, " ");
}
function l0(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, la(e, t, Zc(e), Zc(t), 0, 0, {});
}
var Zn = '[cmdk-group=""]', Ks = '[cmdk-group-items=""]', u0 = '[cmdk-group-heading=""]', af = '[cmdk-item=""]', Qc = `${af}:not([aria-disabled="true"])`, ua = "cmdk-item-select", yn = "data-value", d0 = (e, t, n) => l0(e, t, n), cf = u.createContext(void 0), Rr = () => u.useContext(cf), lf = u.createContext(void 0), mi = () => u.useContext(lf), uf = u.createContext(void 0), df = u.forwardRef((e, t) => {
  let n = wn(() => {
    var D, W;
    return { search: "", value: (W = (D = e.value) != null ? D : e.defaultValue) != null ? W : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = wn(() => /* @__PURE__ */ new Set()), o = wn(() => /* @__PURE__ */ new Map()), s = wn(() => /* @__PURE__ */ new Map()), a = wn(() => /* @__PURE__ */ new Set()), i = ff(e), { label: c, children: d, value: f, onValueChange: m, filter: p, shouldFilter: g, loop: v, disablePointerSelection: h = !1, vimBindings: b = !0, ...x } = e, y = be(), w = be(), S = be(), N = u.useRef(null), C = C0();
  en(() => {
    if (f !== void 0) {
      let D = f.trim();
      n.current.value = D, R.emit();
    }
  }, [f]), en(() => {
    C(6, q);
  }, []);
  let R = u.useMemo(() => ({ subscribe: (D) => (a.current.add(D), () => a.current.delete(D)), snapshot: () => n.current, setState: (D, W, U) => {
    var L, Z, O, K;
    if (!Object.is(n.current[D], W)) {
      if (n.current[D] = W, D === "search") Y(), k(), C(1, I);
      else if (D === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(S);
          Q ? Q.focus() : (L = document.getElementById(y)) == null || L.focus();
        }
        if (C(7, () => {
          var Q;
          n.current.selectedItemId = (Q = _()) == null ? void 0 : Q.id, R.emit();
        }), U || C(5, q), ((Z = i.current) == null ? void 0 : Z.value) !== void 0) {
          let Q = W ?? "";
          (K = (O = i.current).onValueChange) == null || K.call(O, Q);
          return;
        }
      }
      R.emit();
    }
  }, emit: () => {
    a.current.forEach((D) => D());
  } }), []), E = u.useMemo(() => ({ value: (D, W, U) => {
    var L;
    W !== ((L = s.current.get(D)) == null ? void 0 : L.value) && (s.current.set(D, { value: W, keywords: U }), n.current.filtered.items.set(D, P(W, U)), C(2, () => {
      k(), R.emit();
    }));
  }, item: (D, W) => (r.current.add(D), W && (o.current.has(W) ? o.current.get(W).add(D) : o.current.set(W, /* @__PURE__ */ new Set([D]))), C(3, () => {
    Y(), k(), n.current.value || I(), R.emit();
  }), () => {
    s.current.delete(D), r.current.delete(D), n.current.filtered.items.delete(D);
    let U = _();
    C(4, () => {
      Y(), U?.getAttribute("id") === D && I(), R.emit();
    });
  }), group: (D) => (o.current.has(D) || o.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), o.current.delete(D);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: y, inputId: S, labelId: w, listInnerRef: N }), []);
  function P(D, W) {
    var U, L;
    let Z = (L = (U = i.current) == null ? void 0 : U.filter) != null ? L : d0;
    return D ? Z(D, n.current.search, W) : 0;
  }
  function k() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let D = n.current.filtered.items, W = [];
    n.current.filtered.groups.forEach((L) => {
      let Z = o.current.get(L), O = 0;
      Z.forEach((K) => {
        let Q = D.get(K);
        O = Math.max(Q, O);
      }), W.push([L, O]);
    });
    let U = N.current;
    B().sort((L, Z) => {
      var O, K;
      let Q = L.getAttribute("id"), re = Z.getAttribute("id");
      return ((O = D.get(re)) != null ? O : 0) - ((K = D.get(Q)) != null ? K : 0);
    }).forEach((L) => {
      let Z = L.closest(Ks);
      Z ? Z.appendChild(L.parentElement === Z ? L : L.closest(`${Ks} > *`)) : U.appendChild(L.parentElement === U ? L : L.closest(`${Ks} > *`));
    }), W.sort((L, Z) => Z[1] - L[1]).forEach((L) => {
      var Z;
      let O = (Z = N.current) == null ? void 0 : Z.querySelector(`${Zn}[${yn}="${encodeURIComponent(L[0])}"]`);
      O?.parentElement.appendChild(O);
    });
  }
  function I() {
    let D = B().find((U) => U.getAttribute("aria-disabled") !== "true"), W = D?.getAttribute(yn);
    R.setState("value", W || void 0);
  }
  function Y() {
    var D, W, U, L;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Z = 0;
    for (let O of r.current) {
      let K = (W = (D = s.current.get(O)) == null ? void 0 : D.value) != null ? W : "", Q = (L = (U = s.current.get(O)) == null ? void 0 : U.keywords) != null ? L : [], re = P(K, Q);
      n.current.filtered.items.set(O, re), re > 0 && Z++;
    }
    for (let [O, K] of o.current) for (let Q of K) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = Z;
  }
  function q() {
    var D, W, U;
    let L = _();
    L && (((D = L.parentElement) == null ? void 0 : D.firstChild) === L && ((U = (W = L.closest(Zn)) == null ? void 0 : W.querySelector(u0)) == null || U.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function _() {
    var D;
    return (D = N.current) == null ? void 0 : D.querySelector(`${af}[aria-selected="true"]`);
  }
  function B() {
    var D;
    return Array.from(((D = N.current) == null ? void 0 : D.querySelectorAll(Qc)) || []);
  }
  function $(D) {
    let W = B()[D];
    W && R.setState("value", W.getAttribute(yn));
  }
  function X(D) {
    var W;
    let U = _(), L = B(), Z = L.findIndex((K) => K === U), O = L[Z + D];
    (W = i.current) != null && W.loop && (O = Z + D < 0 ? L[L.length - 1] : Z + D === L.length ? L[0] : L[Z + D]), O && R.setState("value", O.getAttribute(yn));
  }
  function H(D) {
    let W = _(), U = W?.closest(Zn), L;
    for (; U && !L; ) U = D > 0 ? y0(U, Zn) : w0(U, Zn), L = U?.querySelector(Qc);
    L ? R.setState("value", L.getAttribute(yn)) : X(D);
  }
  let F = () => $(B().length - 1), T = (D) => {
    D.preventDefault(), D.metaKey ? F() : D.altKey ? H(1) : X(1);
  }, z = (D) => {
    D.preventDefault(), D.metaKey ? $(0) : D.altKey ? H(-1) : X(-1);
  };
  return u.createElement(Fe.div, { ref: t, tabIndex: -1, ...x, "cmdk-root": "", onKeyDown: (D) => {
    var W;
    (W = x.onKeyDown) == null || W.call(x, D);
    let U = D.nativeEvent.isComposing || D.keyCode === 229;
    if (!(D.defaultPrevented || U)) switch (D.key) {
      case "n":
      case "j": {
        b && D.ctrlKey && T(D);
        break;
      }
      case "ArrowDown": {
        T(D);
        break;
      }
      case "p":
      case "k": {
        b && D.ctrlKey && z(D);
        break;
      }
      case "ArrowUp": {
        z(D);
        break;
      }
      case "Home": {
        D.preventDefault(), $(0);
        break;
      }
      case "End": {
        D.preventDefault(), F();
        break;
      }
      case "Enter": {
        D.preventDefault();
        let L = _();
        if (L) {
          let Z = new Event(ua);
          L.dispatchEvent(Z);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: N0 }, c), Yo(e, (D) => u.createElement(lf.Provider, { value: R }, u.createElement(cf.Provider, { value: E }, D))));
}), f0 = u.forwardRef((e, t) => {
  var n, r;
  let o = be(), s = u.useRef(null), a = u.useContext(uf), i = Rr(), c = ff(e), d = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a?.forceMount;
  en(() => {
    if (!d) return i.item(o, a?.id);
  }, [d]);
  let f = mf(o, s, [e.value, e.children, s], e.keywords), m = mi(), p = kt((C) => C.value && C.value === f.current), g = kt((C) => d || i.filter() === !1 ? !0 : C.search ? C.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let C = s.current;
    if (!(!C || e.disabled)) return C.addEventListener(ua, v), () => C.removeEventListener(ua, v);
  }, [g, e.onSelect, e.disabled]);
  function v() {
    var C, R;
    h(), (R = (C = c.current).onSelect) == null || R.call(C, f.current);
  }
  function h() {
    m.setState("value", f.current, !0);
  }
  if (!g) return null;
  let { disabled: b, value: x, onSelect: y, forceMount: w, keywords: S, ...N } = e;
  return u.createElement(Fe.div, { ref: Ke(s, t), ...N, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!p, "data-disabled": !!b, "data-selected": !!p, onPointerMove: b || i.getDisablePointerSelection() ? void 0 : h, onClick: b ? void 0 : v }, e.children);
}), m0 = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = be(), i = u.useRef(null), c = u.useRef(null), d = be(), f = Rr(), m = kt((g) => o || f.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(a) : !0);
  en(() => f.group(a), []), mf(a, i, [e.value, e.heading, c]);
  let p = u.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return u.createElement(Fe.div, { ref: Ke(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Yo(e, (g) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(uf.Provider, { value: p }, g))));
}), p0 = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), s = kt((a) => !a.search);
  return !n && !s ? null : u.createElement(Fe.div, { ref: Ke(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), h0 = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = mi(), a = kt((d) => d.search), i = kt((d) => d.selectedItemId), c = Rr();
  return u.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), u.createElement(Fe.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (d) => {
    o || s.setState("search", d.target.value), n?.(d.target.value);
  } });
}), g0 = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = u.useRef(null), a = u.useRef(null), i = kt((d) => d.selectedItemId), c = Rr();
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
  }, []), u.createElement(Fe.div, { ref: Ke(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Yo(e, (d) => u.createElement("div", { ref: Ke(a, c.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), v0 = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return u.createElement(Fo, { open: n, onOpenChange: r }, u.createElement(Lo, { container: a }, u.createElement(An, { "cmdk-overlay": "", className: o }), u.createElement(On, { "aria-label": e.label, "cmdk-dialog": "", className: s }, u.createElement(df, { ref: t, ...i }))));
}), b0 = u.forwardRef((e, t) => kt((n) => n.filtered.count === 0) ? u.createElement(Fe.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), x0 = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return u.createElement(Fe.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Yo(e, (a) => u.createElement("div", { "aria-hidden": !0 }, a)));
}), _e = Object.assign(df, { List: g0, Item: f0, Input: h0, Group: m0, Separator: p0, Dialog: v0, Empty: b0, Loading: x0 });
function y0(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function w0(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function ff(e) {
  let t = u.useRef(e);
  return en(() => {
    t.current = e;
  }), t;
}
var en = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function wn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function kt(e) {
  let t = mi(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function mf(e, t, n, r = []) {
  let o = u.useRef(), s = Rr();
  return en(() => {
    var a;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), c = r.map((d) => d.trim());
    s.value(e, i, c), (a = t.current) == null || a.setAttribute(yn, i), o.current = i;
  }), o;
}
var C0 = () => {
  let [e, t] = u.useState(), n = wn(() => /* @__PURE__ */ new Map());
  return en(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function S0(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Yo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(S0(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var N0 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Tr = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _e,
  {
    ref: n,
    className: M(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Tr.displayName = _e.displayName;
const E_ = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx(uT, { ...t, children: /* @__PURE__ */ l.jsx(Jf, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ l.jsx(Tr, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Go = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l.jsx(vv, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l.jsx(
    _e.Input,
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
Go.displayName = _e.Input.displayName;
const Ko = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _e.List,
  {
    ref: n,
    className: M("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ko.displayName = _e.List.displayName;
const Uo = u.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  _e.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Uo.displayName = _e.Empty.displayName;
const Mr = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _e.Group,
  {
    ref: n,
    className: M(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Mr.displayName = _e.Group.displayName;
const pf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _e.Separator,
  {
    ref: n,
    className: M("-mx-1 h-px bg-border", e),
    ...t
  }
));
pf.displayName = _e.Separator.displayName;
const qt = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _e.Item,
  {
    ref: n,
    className: M(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
qt.displayName = _e.Item.displayName;
const E0 = ({
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
E0.displayName = "CommandShortcut";
const R0 = ["top", "right", "bottom", "left"], Dt = Math.min, Oe = Math.max, vo = Math.round, to = Math.floor, at = (e) => ({
  x: e,
  y: e
}), T0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function da(e, t, n) {
  return Oe(e, Dt(t, n));
}
function vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function Fn(e) {
  return e.split("-")[1];
}
function pi(e) {
  return e === "x" ? "y" : "x";
}
function hi(e) {
  return e === "y" ? "height" : "width";
}
function st(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function gi(e) {
  return pi(st(e));
}
function M0(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fn(e), o = gi(e), s = hi(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = bo(a)), [a, bo(a)];
}
function P0(e) {
  const t = bo(e);
  return [fa(e), t, fa(t)];
}
function fa(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Jc = ["left", "right"], el = ["right", "left"], k0 = ["top", "bottom"], D0 = ["bottom", "top"];
function _0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? el : Jc : t ? Jc : el;
    case "left":
    case "right":
      return t ? k0 : D0;
    default:
      return [];
  }
}
function A0(e, t, n, r) {
  const o = Fn(e);
  let s = _0(bt(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(fa)))), s;
}
function bo(e) {
  const t = bt(e);
  return T0[t] + e.slice(t.length);
}
function O0(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hf(e) {
  return typeof e != "number" ? O0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xo(e) {
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
function tl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = st(t), a = gi(t), i = hi(a), c = bt(t), d = s === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (Fn(t)) {
    case "start":
      g[a] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      g[a] += p * (n && d ? -1 : 1);
      break;
  }
  return g;
}
async function j0(e, t) {
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
  } = vt(t, e), v = hf(g), b = i[p ? m === "floating" ? "reference" : "floating" : m], x = xo(await s.getClippingRect({
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
  }, N = xo(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const I0 = 50, F0 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: j0
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = tl(d, r, c), p = r, g = 0;
  const v = {};
  for (let h = 0; h < s.length; h++) {
    const b = s[h];
    if (!b)
      continue;
    const {
      name: x,
      fn: y
    } = b, {
      x: w,
      y: S,
      data: N,
      reset: C
    } = await y({
      x: f,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, m = S ?? m, v[x] = {
      ...v[x],
      ...N
    }, C && g < I0 && (g++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = tl(d, p, c)), h = -1);
  }
  return {
    x: f,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: v
  };
}, L0 = (e) => ({
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
    const m = hf(f), p = {
      x: n,
      y: r
    }, g = gi(o), v = hi(g), h = await a.getDimensions(d), b = g === "y", x = b ? "top" : "left", y = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[g] - p[g] - s.floating[v], N = p[g] - s.reference[g], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = C ? C[w] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(C))) && (R = i.floating[w] || s.floating[v]);
    const E = S / 2 - N / 2, P = R / 2 - h[v] / 2 - 1, k = Dt(m[x], P), I = Dt(m[y], P), Y = k, q = R - h[v] - I, _ = R / 2 - h[v] / 2 + E, B = da(Y, _, q), $ = !c.arrow && Fn(o) != null && _ !== B && s.reference[v] / 2 - (_ < Y ? k : I) - h[v] / 2 < 0, X = $ ? _ < Y ? _ - Y : _ - q : 0;
    return {
      [g]: p[g] + X,
      data: {
        [g]: B,
        centerOffset: _ - B - X,
        ...$ && {
          alignmentOffset: X
        }
      },
      reset: $
    };
  }
}), $0 = function(e) {
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
      const x = bt(o), y = st(i), w = bt(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), N = p || (w || !h ? [bo(i)] : P0(i)), C = v !== "none";
      !p && C && N.push(...A0(i, h, v, S));
      const R = [i, ...N], E = await c.detectOverflow(t, b), P = [];
      let k = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(E[x]), m) {
        const _ = M0(o, a, S);
        P.push(E[_[0]], E[_[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: P
      }], !P.every((_) => _ <= 0)) {
        var I, Y;
        const _ = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, B = R[_];
        if (B && (!(m === "alignment" ? y !== st(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((H) => st(H.placement) === y ? H.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: k
            },
            reset: {
              placement: B
            }
          };
        let $ = (Y = k.filter((X) => X.overflows[0] <= 0).sort((X, H) => X.overflows[1] - H.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var q;
              const X = (q = k.filter((H) => {
                if (C) {
                  const F = st(H.placement);
                  return F === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((H) => [H.placement, H.overflows.filter((F) => F > 0).reduce((F, T) => F + T, 0)]).sort((H, F) => H[1] - F[1])[0]) == null ? void 0 : q[0];
              X && ($ = X);
              break;
            }
            case "initialPlacement":
              $ = i;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function nl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rl(e) {
  return R0.some((t) => e[t] >= 0);
}
const W0 = function(e) {
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
      } = vt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), i = nl(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: rl(i)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), i = nl(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: rl(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gf = /* @__PURE__ */ new Set(["left", "top"]);
async function B0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = bt(n), i = Fn(n), c = st(n) === "y", d = gf.has(a) ? -1 : 1, f = s && c ? -1 : 1, m = vt(t, e);
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
const V0 = function(e) {
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
      } = t, c = await B0(t, e);
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
}, z0 = function(e) {
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
              x: y,
              y: w
            } = x;
            return {
              x: y,
              y: w
            };
          }
        },
        ...d
      } = vt(e, t), f = {
        x: n,
        y: r
      }, m = await s.detectOverflow(t, d), p = st(bt(o)), g = pi(p);
      let v = f[g], h = f[p];
      if (a) {
        const x = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", w = v + m[x], S = v - m[y];
        v = da(w, v, S);
      }
      if (i) {
        const x = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = h + m[x], S = h - m[y];
        h = da(w, h, S);
      }
      const b = c.fn({
        ...t,
        [g]: v,
        [p]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: a,
            [p]: i
          }
        }
      };
    }
  };
}, H0 = function(e) {
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
      }, m = st(o), p = pi(m);
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
        const w = p === "y" ? "width" : "height", S = gf.has(bt(o)), N = s.reference[m] - s.floating[w] + (S && ((x = a.offset) == null ? void 0 : x[m]) || 0) + (S ? 0 : b.crossAxis), C = s.reference[m] + s.reference[w] + (S ? 0 : ((y = a.offset) == null ? void 0 : y[m]) || 0) - (S ? b.crossAxis : 0);
        v < N ? v = N : v > C && (v = C);
      }
      return {
        [p]: g,
        [m]: v
      };
    }
  };
}, Y0 = function(e) {
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
      } = vt(e, t), f = await a.detectOverflow(t, d), m = bt(o), p = Fn(o), g = st(o) === "y", {
        width: v,
        height: h
      } = s.floating;
      let b, x;
      m === "top" || m === "bottom" ? (b = m, x = p === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = m, b = p === "end" ? "top" : "bottom");
      const y = h - f.top - f.bottom, w = v - f.left - f.right, S = Dt(h - f[b], y), N = Dt(v - f[x], w), C = !t.middlewareData.shift;
      let R = S, E = N;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = w), (r = t.middlewareData.shift) != null && r.enabled.y && (R = y), C && !p) {
        const k = Oe(f.left, 0), I = Oe(f.right, 0), Y = Oe(f.top, 0), q = Oe(f.bottom, 0);
        g ? E = v - 2 * (k !== 0 || I !== 0 ? k + I : Oe(f.left, f.right)) : R = h - 2 * (Y !== 0 || q !== 0 ? Y + q : Oe(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: R
      });
      const P = await a.getDimensions(i.floating);
      return v !== P.width || h !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function qo() {
  return typeof window < "u";
}
function Ln(e) {
  return vf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lt(e) {
  var t;
  return (t = (vf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vf(e) {
  return qo() ? e instanceof Node || e instanceof je(e).Node : !1;
}
function Ue(e) {
  return qo() ? e instanceof Element || e instanceof je(e).Element : !1;
}
function Ct(e) {
  return qo() ? e instanceof HTMLElement || e instanceof je(e).HTMLElement : !1;
}
function ol(e) {
  return !qo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
function Pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = qe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function G0(e) {
  return /^(table|td|th)$/.test(Ln(e));
}
function Xo(e) {
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
const K0 = /transform|translate|scale|rotate|perspective|filter/, U0 = /paint|layout|strict|content/, Ht = (e) => !!e && e !== "none";
let Us;
function vi(e) {
  const t = Ue(e) ? qe(e) : e;
  return Ht(t.transform) || Ht(t.translate) || Ht(t.scale) || Ht(t.rotate) || Ht(t.perspective) || !bi() && (Ht(t.backdropFilter) || Ht(t.filter)) || K0.test(t.willChange || "") || U0.test(t.contain || "");
}
function q0(e) {
  let t = _t(e);
  for (; Ct(t) && !Tn(t); ) {
    if (vi(t))
      return t;
    if (Xo(t))
      return null;
    t = _t(t);
  }
  return null;
}
function bi() {
  return Us == null && (Us = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Us;
}
function Tn(e) {
  return /^(html|body|#document)$/.test(Ln(e));
}
function qe(e) {
  return je(e).getComputedStyle(e);
}
function Zo(e) {
  return Ue(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _t(e) {
  if (Ln(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ol(e) && e.host || // Fallback.
    lt(e)
  );
  return ol(t) ? t.host : t;
}
function bf(e) {
  const t = _t(e);
  return Tn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && Pr(t) ? t : bf(t);
}
function dr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bf(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = je(o);
  if (s) {
    const i = ma(a);
    return t.concat(a, a.visualViewport || [], Pr(o) ? o : [], i && n ? dr(i) : []);
  } else
    return t.concat(o, dr(o, [], n));
}
function ma(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function xf(e) {
  const t = qe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ct(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = vo(n) !== s || vo(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function xi(e) {
  return Ue(e) ? e : e.contextElement;
}
function En(e) {
  const t = xi(e);
  if (!Ct(t))
    return at(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = xf(t);
  let a = (s ? vo(n.width) : n.width) / r, i = (s ? vo(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const X0 = /* @__PURE__ */ at(0);
function yf(e) {
  const t = je(e);
  return !bi() || !t.visualViewport ? X0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Z0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== je(e) ? !1 : t;
}
function tn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = xi(e);
  let a = at(1);
  t && (r ? Ue(r) && (a = En(r)) : a = En(e));
  const i = Z0(s, n, r) ? yf(s) : at(0);
  let c = (o.left + i.x) / a.x, d = (o.top + i.y) / a.y, f = o.width / a.x, m = o.height / a.y;
  if (s) {
    const p = je(s), g = r && Ue(r) ? je(r) : r;
    let v = p, h = ma(v);
    for (; h && r && g !== v; ) {
      const b = En(h), x = h.getBoundingClientRect(), y = qe(h), w = x.left + (h.clientLeft + parseFloat(y.paddingLeft)) * b.x, S = x.top + (h.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, d *= b.y, f *= b.x, m *= b.y, c += w, d += S, v = je(h), h = ma(v);
    }
  }
  return xo({
    width: f,
    height: m,
    x: c,
    y: d
  });
}
function Qo(e, t) {
  const n = Zo(e).scrollLeft;
  return t ? t.left + n : tn(lt(e)).left + n;
}
function wf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Qo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Q0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = lt(r), i = t ? Xo(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = at(1);
  const f = at(0), m = Ct(r);
  if ((m || !m && !s) && ((Ln(r) !== "body" || Pr(a)) && (c = Zo(r)), m)) {
    const g = tn(r);
    d = En(r), f.x = g.x + r.clientLeft, f.y = g.y + r.clientTop;
  }
  const p = a && !m && !s ? wf(a, c) : at(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - c.scrollTop * d.y + f.y + p.y
  };
}
function J0(e) {
  return Array.from(e.getClientRects());
}
function eR(e) {
  const t = lt(e), n = Zo(e), r = e.ownerDocument.body, o = Oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Qo(e);
  const i = -n.scrollTop;
  return qe(r).direction === "rtl" && (a += Oe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const sl = 25;
function tR(e, t) {
  const n = je(e), r = lt(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = bi();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const d = Qo(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), g = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, v = Math.abs(r.clientWidth - m.clientWidth - g);
    v <= sl && (s -= v);
  } else d <= sl && (s += d);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function nR(e, t) {
  const n = tn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ct(e) ? En(e) : at(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, d = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
function al(e, t, n) {
  let r;
  if (t === "viewport")
    r = tR(e, n);
  else if (t === "document")
    r = eR(lt(e));
  else if (Ue(t))
    r = nR(t, n);
  else {
    const o = yf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return xo(r);
}
function Cf(e, t) {
  const n = _t(e);
  return n === t || !Ue(n) || Tn(n) ? !1 : qe(n).position === "fixed" || Cf(n, t);
}
function rR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dr(e, [], !1).filter((i) => Ue(i) && Ln(i) !== "body"), o = null;
  const s = qe(e).position === "fixed";
  let a = s ? _t(e) : e;
  for (; Ue(a) && !Tn(a); ) {
    const i = qe(a), c = vi(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Pr(a) && !c && Cf(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = _t(a);
  }
  return t.set(e, r), r;
}
function oR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Xo(t) ? [] : rR(t, this._c) : [].concat(n), r], i = al(t, a[0], o);
  let c = i.top, d = i.right, f = i.bottom, m = i.left;
  for (let p = 1; p < a.length; p++) {
    const g = al(t, a[p], o);
    c = Oe(g.top, c), d = Dt(g.right, d), f = Dt(g.bottom, f), m = Oe(g.left, m);
  }
  return {
    width: d - m,
    height: f - c,
    x: m,
    y: c
  };
}
function sR(e) {
  const {
    width: t,
    height: n
  } = xf(e);
  return {
    width: t,
    height: n
  };
}
function aR(e, t, n) {
  const r = Ct(t), o = lt(t), s = n === "fixed", a = tn(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = at(0);
  function d() {
    c.x = Qo(o);
  }
  if (r || !r && !s)
    if ((Ln(t) !== "body" || Pr(o)) && (i = Zo(t)), r) {
      const g = tn(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const f = o && !r && !s ? wf(o, i) : at(0), m = a.left + i.scrollLeft - c.x - f.x, p = a.top + i.scrollTop - c.y - f.y;
  return {
    x: m,
    y: p,
    width: a.width,
    height: a.height
  };
}
function qs(e) {
  return qe(e).position === "static";
}
function il(e, t) {
  if (!Ct(e) || qe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return lt(e) === n && (n = n.ownerDocument.body), n;
}
function Sf(e, t) {
  const n = je(e);
  if (Xo(e))
    return n;
  if (!Ct(e)) {
    let o = _t(e);
    for (; o && !Tn(o); ) {
      if (Ue(o) && !qs(o))
        return o;
      o = _t(o);
    }
    return n;
  }
  let r = il(e, t);
  for (; r && G0(r) && qs(r); )
    r = il(r, t);
  return r && Tn(r) && qs(r) && !vi(r) ? n : r || q0(e) || n;
}
const iR = async function(e) {
  const t = this.getOffsetParent || Sf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: aR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cR(e) {
  return qe(e).direction === "rtl";
}
const lR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Q0,
  getDocumentElement: lt,
  getClippingRect: oR,
  getOffsetParent: Sf,
  getElementRects: iR,
  getClientRects: J0,
  getDimensions: sR,
  getScale: En,
  isElement: Ue,
  isRTL: cR
};
function Nf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function uR(e, t) {
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
    const v = to(m), h = to(o.clientWidth - (f + p)), b = to(o.clientHeight - (m + g)), x = to(f), w = {
      rootMargin: -v + "px " + -h + "px " + -b + "px " + -x + "px",
      threshold: Oe(0, Dt(1, c)) || 1
    };
    let S = !0;
    function N(C) {
      const R = C[0].intersectionRatio;
      if (R !== c) {
        if (!S)
          return a();
        R ? a(!1, R) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !Nf(d, e.getBoundingClientRect()) && a(), S = !1;
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
function dR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = xi(e), f = o || s ? [...d ? dr(d) : [], ...t ? dr(t) : []] : [];
  f.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), s && x.addEventListener("resize", n);
  });
  const m = d && i ? uR(d, n) : null;
  let p = -1, g = null;
  a && (g = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === d && g && t && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), n();
  }), d && !c && g.observe(d), t && g.observe(t));
  let v, h = c ? tn(e) : null;
  c && b();
  function b() {
    const x = tn(e);
    h && !Nf(h, x) && n(), h = x, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), m?.(), (x = g) == null || x.disconnect(), g = null, c && cancelAnimationFrame(v);
  };
}
const fR = V0, mR = z0, pR = $0, hR = Y0, gR = W0, cl = L0, vR = H0, bR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: lR,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return F0(e, t, {
    ...o,
    platform: s
  });
};
var xR = typeof document < "u", yR = function() {
}, ao = xR ? yl : yR;
function yo(e, t) {
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
        if (!yo(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !yo(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ef(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ll(e, t) {
  const n = Ef(e);
  return Math.round(t * n) / n;
}
function Xs(e) {
  const t = u.useRef(e);
  return ao(() => {
    t.current = e;
  }), t;
}
function wR(e) {
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
  yo(p, r) || g(r);
  const [v, h] = u.useState(null), [b, x] = u.useState(null), y = u.useCallback((H) => {
    H !== C.current && (C.current = H, h(H));
  }, []), w = u.useCallback((H) => {
    H !== R.current && (R.current = H, x(H));
  }, []), S = s || v, N = a || b, C = u.useRef(null), R = u.useRef(null), E = u.useRef(f), P = c != null, k = Xs(c), I = Xs(o), Y = Xs(d), q = u.useCallback(() => {
    if (!C.current || !R.current)
      return;
    const H = {
      placement: t,
      strategy: n,
      middleware: p
    };
    I.current && (H.platform = I.current), bR(C.current, R.current, H).then((F) => {
      const T = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      _.current && !yo(E.current, T) && (E.current = T, hr.flushSync(() => {
        m(T);
      }));
    });
  }, [p, t, n, I, Y]);
  ao(() => {
    d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, m((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [d]);
  const _ = u.useRef(!1);
  ao(() => (_.current = !0, () => {
    _.current = !1;
  }), []), ao(() => {
    if (S && (C.current = S), N && (R.current = N), S && N) {
      if (k.current)
        return k.current(S, N, q);
      q();
    }
  }, [S, N, q, k, P]);
  const B = u.useMemo(() => ({
    reference: C,
    floating: R,
    setReference: y,
    setFloating: w
  }), [y, w]), $ = u.useMemo(() => ({
    reference: S,
    floating: N
  }), [S, N]), X = u.useMemo(() => {
    const H = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return H;
    const F = ll($.floating, f.x), T = ll($.floating, f.y);
    return i ? {
      ...H,
      transform: "translate(" + F + "px, " + T + "px)",
      ...Ef($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: T
    };
  }, [n, i, $.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: q,
    refs: B,
    elements: $,
    floatingStyles: X
  }), [f, q, B, $, X]);
}
const CR = (e) => {
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
      return r && t(r) ? r.current != null ? cl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? cl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, SR = (e, t) => {
  const n = fR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, NR = (e, t) => {
  const n = mR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ER = (e, t) => ({
  fn: vR(e).fn,
  options: [e, t]
}), RR = (e, t) => {
  const n = pR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, TR = (e, t) => {
  const n = hR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, MR = (e, t) => {
  const n = gR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, PR = (e, t) => {
  const n = CR(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var kR = "Arrow", Rf = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ l.jsx(
    G.svg,
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
Rf.displayName = kR;
var DR = Rf, yi = "Popper", [Tf, jt] = Ne(yi), [_R, Mf] = Tf(yi), Pf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ l.jsx(_R, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Pf.displayName = yi;
var kf = "PopperAnchor", Df = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Mf(kf, n), a = u.useRef(null), i = oe(t, a), c = u.useRef(null);
    return u.useEffect(() => {
      const d = c.current;
      c.current = r?.current || a.current, d !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ l.jsx(G.div, { ...o, ref: i });
  }
);
Df.displayName = kf;
var wi = "PopperContent", [AR, OR] = Tf(wi), _f = u.forwardRef(
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
    } = e, b = Mf(wi, n), [x, y] = u.useState(null), w = oe(t, (O) => y(O)), [S, N] = u.useState(null), C = zo(S), R = C?.width ?? 0, E = C?.height ?? 0, P = r + (s !== "center" ? "-" + s : ""), k = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, I = Array.isArray(d) ? d : [d], Y = I.length > 0, q = {
      padding: k,
      boundary: I.filter(IR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: _, floatingStyles: B, placement: $, isPositioned: X, middlewareData: H } = wR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...O) => dR(...O, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        SR({ mainAxis: o + E, alignmentAxis: a }),
        c && NR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? ER() : void 0,
          ...q
        }),
        c && RR({ ...q }),
        TR({
          ...q,
          apply: ({ elements: O, rects: K, availableWidth: Q, availableHeight: re }) => {
            const { width: te, height: V } = K.reference, ae = O.floating.style;
            ae.setProperty("--radix-popper-available-width", `${Q}px`), ae.setProperty("--radix-popper-available-height", `${re}px`), ae.setProperty("--radix-popper-anchor-width", `${te}px`), ae.setProperty("--radix-popper-anchor-height", `${V}px`);
          }
        }),
        S && PR({ element: S, padding: i }),
        FR({ arrowWidth: R, arrowHeight: E }),
        p && MR({ strategy: "referenceHidden", ...q })
      ]
    }), [F, T] = jf($), z = me(v);
    ge(() => {
      X && z?.();
    }, [X, z]);
    const D = H.arrow?.x, W = H.arrow?.y, U = H.arrow?.centerOffset !== 0, [L, Z] = u.useState();
    return ge(() => {
      x && Z(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: X ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: L,
          "--radix-popper-transform-origin": [
            H.transformOrigin?.x,
            H.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...H.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          AR,
          {
            scope: n,
            placedSide: F,
            onArrowChange: N,
            arrowX: D,
            arrowY: W,
            shouldHideArrow: U,
            children: /* @__PURE__ */ l.jsx(
              G.div,
              {
                "data-side": F,
                "data-align": T,
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
_f.displayName = wi;
var Af = "PopperArrow", jR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Of = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = OR(Af, r), a = jR[s.placedSide];
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
          DR,
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
Of.displayName = Af;
function IR(e) {
  return e !== null;
}
var FR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, f] = jf(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (o.arrow?.x ?? 0) + i / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let v = "", h = "";
    return d === "bottom" ? (v = a ? m : `${p}px`, h = `${-c}px`) : d === "top" ? (v = a ? m : `${p}px`, h = `${r.floating.height + c}px`) : d === "right" ? (v = `${-c}px`, h = a ? m : `${g}px`) : d === "left" && (v = `${r.floating.width + c}px`, h = a ? m : `${g}px`), { data: { x: v, y: h } };
  }
});
function jf(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var kr = Pf, Dr = Df, Jo = _f, es = Of, ts = "Popover", [If] = Ne(ts, [
  jt
]), _r = jt(), [LR, It] = If(ts), Ff = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = _r(t), c = u.useRef(null), [d, f] = u.useState(!1), [m, p] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ts
  });
  return /* @__PURE__ */ l.jsx(kr, { ...i, children: /* @__PURE__ */ l.jsx(
    LR,
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
Ff.displayName = ts;
var Lf = "PopoverAnchor", $R = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(Lf, n), s = _r(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ l.jsx(Dr, { ...s, ...r, ref: t });
  }
);
$R.displayName = Lf;
var $f = "PopoverTrigger", Wf = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It($f, n), s = _r(n), a = oe(t, o.triggerRef), i = /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yf(o.open),
        ...r,
        ref: a,
        onClick: A(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ l.jsx(Dr, { asChild: !0, ...s, children: i });
  }
);
Wf.displayName = $f;
var Ci = "PopoverPortal", [WR, BR] = If(Ci, {
  forceMount: void 0
}), Bf = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = It(Ci, t);
  return /* @__PURE__ */ l.jsx(WR, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
Bf.displayName = Ci;
var Mn = "PopoverContent", Vf = u.forwardRef(
  (e, t) => {
    const n = BR(Mn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = It(Mn, e.__scopePopover);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(zR, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(HR, { ...o, ref: t }) });
  }
);
Vf.displayName = Mn;
var VR = /* @__PURE__ */ Xt("PopoverContent.RemoveScroll"), zR = u.forwardRef(
  (e, t) => {
    const n = It(Mn, e.__scopePopover), r = u.useRef(null), o = oe(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return jo(a);
    }, []), /* @__PURE__ */ l.jsx(br, { as: VR, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
      zf,
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
), HR = u.forwardRef(
  (e, t) => {
    const n = It(Mn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      zf,
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
), zf = u.forwardRef(
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
    } = e, p = It(Mn, n), g = _r(n);
    return Ao(), /* @__PURE__ */ l.jsx(
      vr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ l.jsx(
          Ot,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ l.jsx(
              Jo,
              {
                "data-state": Yf(p.open),
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
), Hf = "PopoverClose", YR = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(Hf, n);
    return /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
YR.displayName = Hf;
var GR = "PopoverArrow", KR = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _r(n);
    return /* @__PURE__ */ l.jsx(es, { ...o, ...r, ref: t });
  }
);
KR.displayName = GR;
function Yf(e) {
  return e ? "open" : "closed";
}
var UR = Ff, qR = Wf, XR = Bf, Gf = Vf;
const Ar = UR, Or = qR, $n = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l.jsx(XR, { children: /* @__PURE__ */ l.jsx(
  Gf,
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
$n.displayName = Gf.displayName;
function R_({
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
        ot(f.from, "dd/MM/yyyy", { locale: Kt }),
        " -",
        " ",
        ot(f.to, "dd/MM/yyyy", { locale: Kt })
      ] }) : ot(f.from, "dd/MM/yyyy", { locale: Kt }) : /* @__PURE__ */ l.jsx("span", { children: "Selecione uma data" });
    }
    return ot(a, "PPP", { locale: Kt });
  };
  return /* @__PURE__ */ l.jsxs(Ar, { children: [
    /* @__PURE__ */ l.jsx(Or, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
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
            /* @__PURE__ */ l.jsx(bv, { className: "mr-2" }),
            d()
          ] }),
          /* @__PURE__ */ l.jsx(Pt, { className: "shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ l.jsx($n, { className: "w-auto p-0", children: /* @__PURE__ */ l.jsx(
      Yd,
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
function ZR(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function QR(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function JR(e) {
  return /^[0-5][0-9]$/.test(e);
}
function ns(e, { max: t, min: n = 0, loop: r = !1 }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > t && (o = n), o < n && (o = t)) : (o > t && (o = t), o < n && (o = n)), o.toString().padStart(2, "0"));
}
function Kf(e) {
  return ZR(e) ? e : ns(e, { max: 23 });
}
function Uf(e) {
  return QR(e) ? e : ns(e, { min: 1, max: 12 });
}
function wo(e) {
  return JR(e) ? e : ns(e, { max: 59 });
}
function Si(e, { min: t, max: n, step: r }) {
  let o = parseInt(e, 10);
  return Number.isNaN(o) ? "00" : (o += r, ns(String(o), { min: t, max: n, loop: !0 }));
}
function eT(e, t) {
  return Si(e, { min: 0, max: 23, step: t });
}
function tT(e, t) {
  return Si(e, { min: 1, max: 12, step: t });
}
function ul(e, t) {
  return Si(e, { min: 0, max: 59, step: t });
}
function nT(e, t) {
  const n = wo(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function rT(e, t) {
  const n = wo(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function oT(e, t) {
  const n = Kf(t);
  return e.setHours(parseInt(n, 10)), e;
}
function sT(e, t, n) {
  const r = parseInt(Uf(t), 10), o = cT(r, n);
  return e.setHours(o), e;
}
function pa(e, t, n, r) {
  switch (n) {
    case "minutes":
      return nT(e, t);
    case "seconds":
      return rT(e, t);
    case "hours":
      return oT(e, t);
    case "12hours":
      return r ? sT(e, t, r) : e;
    default:
      return e;
  }
}
function aT(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return wo(String(e.getMinutes()));
    case "seconds":
      return wo(String(e.getSeconds()));
    case "hours":
      return Kf(String(e.getHours()));
    case "12hours":
      return Uf(String(qf(e.getHours())));
    default:
      return "00";
  }
}
function iT(e, t, n) {
  switch (n) {
    case "minutes":
      return ul(e, t);
    case "seconds":
      return ul(e, t);
    case "hours":
      return eT(e, t);
    case "12hours":
      return tT(e, t);
    default:
      return "00";
  }
}
function cT(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function qf(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
const Xf = u.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: s }, a) => {
    const i = (d) => {
      d.key === "ArrowRight" && s?.(), d.key === "ArrowLeft" && o?.();
    }, c = (d) => {
      if (t?.(d), n) {
        const f = new Date(n), m = qf(n.getHours());
        r?.(
          pa(
            f,
            m.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ l.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ l.jsxs(
      Yh,
      {
        defaultValue: e,
        onValueChange: (d) => c(d),
        children: [
          /* @__PURE__ */ l.jsx(
            Gi,
            {
              ref: a,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: i,
              children: /* @__PURE__ */ l.jsx(Gh, {})
            }
          ),
          /* @__PURE__ */ l.jsxs(Ki, { children: [
            /* @__PURE__ */ l.jsx(Mo, { value: "AM", children: "AM" }),
            /* @__PURE__ */ l.jsx(Mo, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Xf.displayName = "TimePeriodSelect";
const io = u.forwardRef(
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
    const w = u.useMemo(() => aT(s, d), [s, d]), S = (C) => d === "12hours" && h && w.slice(1, 2) === "1" && x === "0" ? `0${C}` : h ? w.slice(1, 2) + C : `0${C}`, N = (C) => {
      if (C.key !== "Tab") {
        if (C.preventDefault(), C.key === "ArrowRight" && p?.(), C.key === "ArrowLeft" && m?.(), ["ArrowUp", "ArrowDown"].includes(C.key)) {
          const R = C.key === "ArrowUp" ? 1 : -1, E = iT(w, R, d);
          h && b(!1);
          const P = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(pa(P, E, d, f));
        }
        if (C.key >= "0" && C.key <= "9") {
          d === "12hours" && y(C.key);
          const R = S(C.key);
          h && p?.(), b((P) => !P);
          const E = s ? new Date(s) : /* @__PURE__ */ new Date();
          a?.(pa(E, R, d, f));
        }
      }
    };
    return /* @__PURE__ */ l.jsx(
      _i,
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
io.displayName = "TimePickerInput";
const Zf = u.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: r = "second" }, o) => {
    const s = u.useRef(null), a = u.useRef(null), i = u.useRef(null), c = u.useRef(null), [d, f] = u.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return wl(
      o,
      () => ({
        minuteRef: s.current,
        hourRef: a.current,
        secondRef: i.current,
        periodRef: c.current
      }),
      [s, a, i]
    ), /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ l.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ l.jsx(xv, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ l.jsx(
        io,
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
          io,
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
          io,
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
        Xf,
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
Zf.displayName = "TimePicker";
const lT = u.forwardRef(
  ({
    locale: e = Kt,
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
    const [v, h] = u.useState(n ?? t), b = Ut(null), [x, y] = u.useState(
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
      const Y = (k.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), q = Nw(t, {
        days: Math.ceil(Y)
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
    wl(
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
    let C = Kt;
    const { options: R, localize: E, formatLong: P } = e;
    return R && E && P && (C = {
      ...Kt,
      options: R,
      localize: E,
      formatLong: P
    }), /* @__PURE__ */ l.jsxs(Ar, { children: [
      /* @__PURE__ */ l.jsx(Or, { asChild: !0, disabled: a, children: /* @__PURE__ */ l.jsxs(
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
              /* @__PURE__ */ l.jsx(yv, { className: "mr-2 h-4 w-4" }),
              /* @__PURE__ */ l.jsx("span", { className: "truncate block", title: d, children: x ? ot(
                x,
                o === 24 ? N.hour24 : N.hour12,
                {
                  locale: C
                }
              ) : /* @__PURE__ */ l.jsx("span", { children: d }) })
            ] }),
            /* @__PURE__ */ l.jsx(Pt, { className: "shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsxs($n, { className: "w-auto p-0", children: [
        /* @__PURE__ */ l.jsx(
          Yd,
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
          Zf,
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
lT.displayName = "DateTimePicker";
const uT = Fo, T_ = Ka, dT = Lo, M_ = jn, Qf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  An,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Qf.displayName = An.displayName;
const Jf = u.forwardRef(({ className: e, onClose: t, ...n }, r) => /* @__PURE__ */ l.jsxs(dT, { children: [
  /* @__PURE__ */ l.jsx(Qf, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ l.jsxs(
    On,
    {
      ref: r,
      className: M(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(
          jn,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ l.jsxs("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ l.jsx(Oa, { className: "h-4 w-4" }),
              /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Jf.displayName = On.displayName;
const fT = ({
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
fT.displayName = "DialogHeader";
const mT = ({
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
mT.displayName = "DialogFooter";
const pT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xr,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
pT.displayName = xr.displayName;
const hT = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yr,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
hT.displayName = yr.displayName;
var Zs = "rovingFocusGroup.onEntryFocus", gT = { bubbles: !1, cancelable: !0 }, jr = "RovingFocusGroup", [ha, em, vT] = on(jr), [bT, Ft] = Ne(
  jr,
  [vT]
), [xT, yT] = bT(jr), tm = u.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(ha.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(ha.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(wT, { ...e, ref: t }) }) })
);
tm.displayName = jr;
var wT = u.forwardRef((e, t) => {
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
  } = e, p = u.useRef(null), g = oe(t, p), v = xt(s), [h, b] = Ce({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: jr
  }), [x, y] = u.useState(!1), w = me(d), S = em(n), N = u.useRef(!1), [C, R] = u.useState(0);
  return u.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(Zs, w), () => E.removeEventListener(Zs, w);
  }, [w]), /* @__PURE__ */ l.jsx(
    xT,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (E) => b(E),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => y(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => R((E) => E + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => R((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        G.div,
        {
          tabIndex: x || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: A(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: A(e.onFocus, (E) => {
            const P = !N.current;
            if (E.target === E.currentTarget && P && !x) {
              const k = new CustomEvent(Zs, gT);
              if (E.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const I = S().filter(($) => $.focusable), Y = I.find(($) => $.active), q = I.find(($) => $.id === h), B = [Y, q, ...I].filter(
                  Boolean
                ).map(($) => $.ref.current);
                om(B, f);
              }
            }
            N.current = !1;
          }),
          onBlur: A(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), nm = "RovingFocusGroupItem", rm = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = be(), d = s || c, f = yT(nm, n), m = f.currentTabStopId === d, p = em(n), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: h } = f;
    return u.useEffect(() => {
      if (r)
        return g(), () => v();
    }, [r, g, v]), /* @__PURE__ */ l.jsx(
      ha.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          G.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: A(e.onMouseDown, (b) => {
              r ? f.onItemFocus(d) : b.preventDefault();
            }),
            onFocus: A(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: A(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const x = NT(b, f.orientation, f.dir);
              if (x !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let w = p().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const S = w.indexOf(b.currentTarget);
                  w = f.loop ? ET(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => om(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: m, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
rm.displayName = nm;
var CT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ST(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function NT(e, t, n) {
  const r = ST(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return CT[r];
}
function om(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ET(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var rs = tm, os = rm, ga = ["Enter", " "], RT = ["ArrowDown", "PageUp", "Home"], sm = ["ArrowUp", "PageDown", "End"], TT = [...RT, ...sm], MT = {
  ltr: [...ga, "ArrowRight"],
  rtl: [...ga, "ArrowLeft"]
}, PT = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ir = "Menu", [fr, kT, DT] = on(Ir), [cn, am] = Ne(Ir, [
  DT,
  jt,
  Ft
]), Fr = jt(), im = Ft(), [cm, Lt] = cn(Ir), [_T, Lr] = cn(Ir), lm = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = Fr(t), [c, d] = u.useState(null), f = u.useRef(!1), m = me(s), p = xt(o);
  return u.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(kr, { ...i, children: /* @__PURE__ */ l.jsx(
    cm,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        _T,
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
lm.displayName = Ir;
var AT = "MenuAnchor", Ni = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Fr(n);
    return /* @__PURE__ */ l.jsx(Dr, { ...o, ...r, ref: t });
  }
);
Ni.displayName = AT;
var Ei = "MenuPortal", [OT, um] = cn(Ei, {
  forceMount: void 0
}), dm = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Lt(Ei, t);
  return /* @__PURE__ */ l.jsx(OT, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
dm.displayName = Ei;
var We = "MenuContent", [jT, Ri] = cn(We), fm = u.forwardRef(
  (e, t) => {
    const n = um(We, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lt(We, e.__scopeMenu), a = Lr(We, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(fr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(fr.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(IT, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(FT, { ...o, ref: t }) }) }) });
  }
), IT = u.forwardRef(
  (e, t) => {
    const n = Lt(We, e.__scopeMenu), r = u.useRef(null), o = oe(t, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return jo(s);
    }, []), /* @__PURE__ */ l.jsx(
      Ti,
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
), FT = u.forwardRef((e, t) => {
  const n = Lt(We, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    Ti,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), LT = /* @__PURE__ */ Xt("MenuContent.ScrollLock"), Ti = u.forwardRef(
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
    } = e, b = Lt(We, n), x = Lr(We, n), y = Fr(n), w = im(n), S = kT(n), [N, C] = u.useState(null), R = u.useRef(null), E = oe(t, R, b.onContentChange), P = u.useRef(0), k = u.useRef(""), I = u.useRef(0), Y = u.useRef(null), q = u.useRef("right"), _ = u.useRef(0), B = v ? br : u.Fragment, $ = v ? { as: LT, allowPinchZoom: !0 } : void 0, X = (F) => {
      const T = k.current + F, z = S().filter((O) => !O.disabled), D = document.activeElement, W = z.find((O) => O.ref.current === D)?.textValue, U = z.map((O) => O.textValue), L = XT(U, T, W), Z = z.find((O) => O.textValue === L)?.ref.current;
      (function O(K) {
        k.current = K, window.clearTimeout(P.current), K !== "" && (P.current = window.setTimeout(() => O(""), 1e3));
      })(T), Z && setTimeout(() => Z.focus());
    };
    u.useEffect(() => () => window.clearTimeout(P.current), []), Ao();
    const H = u.useCallback((F) => q.current === Y.current?.side && QT(F, Y.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      jT,
      {
        scope: n,
        searchRef: k,
        onItemEnter: u.useCallback(
          (F) => {
            H(F) && F.preventDefault();
          },
          [H]
        ),
        onItemLeave: u.useCallback(
          (F) => {
            H(F) || (R.current?.focus(), C(null));
          },
          [H]
        ),
        onTriggerLeave: u.useCallback(
          (F) => {
            H(F) && F.preventDefault();
          },
          [H]
        ),
        pointerGraceTimerRef: I,
        onPointerGraceIntentChange: u.useCallback((F) => {
          Y.current = F;
        }, []),
        children: /* @__PURE__ */ l.jsx(B, { ...$, children: /* @__PURE__ */ l.jsx(
          vr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: A(s, (F) => {
              F.preventDefault(), R.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              Ot,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: g,
                children: /* @__PURE__ */ l.jsx(
                  rs,
                  {
                    asChild: !0,
                    ...w,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: C,
                    onEntryFocus: A(c, (F) => {
                      x.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      Jo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Pm(b.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...h,
                        ref: E,
                        style: { outline: "none", ...h.style },
                        onKeyDown: A(h.onKeyDown, (F) => {
                          const z = F.target.closest("[data-radix-menu-content]") === F.currentTarget, D = F.ctrlKey || F.altKey || F.metaKey, W = F.key.length === 1;
                          z && (F.key === "Tab" && F.preventDefault(), !D && W && X(F.key));
                          const U = R.current;
                          if (F.target !== U || !TT.includes(F.key)) return;
                          F.preventDefault();
                          const Z = S().filter((O) => !O.disabled).map((O) => O.ref.current);
                          sm.includes(F.key) && Z.reverse(), UT(Z);
                        }),
                        onBlur: A(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(P.current), k.current = "");
                        }),
                        onPointerMove: A(
                          e.onPointerMove,
                          mr((F) => {
                            const T = F.target, z = _.current !== F.clientX;
                            if (F.currentTarget.contains(T) && z) {
                              const D = F.clientX > _.current ? "right" : "left";
                              q.current = D, _.current = F.clientX;
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
fm.displayName = We;
var $T = "MenuGroup", Mi = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(G.div, { role: "group", ...r, ref: t });
  }
);
Mi.displayName = $T;
var WT = "MenuLabel", mm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(G.div, { ...r, ref: t });
  }
);
mm.displayName = WT;
var Co = "MenuItem", dl = "menu.itemSelect", ss = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = u.useRef(null), a = Lr(Co, e.__scopeMenu), i = Ri(Co, e.__scopeMenu), c = oe(t, s), d = u.useRef(!1), f = () => {
      const m = s.current;
      if (!n && m) {
        const p = new CustomEvent(dl, { bubbles: !0, cancelable: !0 });
        m.addEventListener(dl, (g) => r?.(g), { once: !0 }), sr(m, p), p.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      pm,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: A(e.onClick, f),
        onPointerDown: (m) => {
          e.onPointerDown?.(m), d.current = !0;
        },
        onPointerUp: A(e.onPointerUp, (m) => {
          d.current || m.currentTarget?.click();
        }),
        onKeyDown: A(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || ga.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
ss.displayName = Co;
var pm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = Ri(Co, n), i = im(n), c = u.useRef(null), d = oe(t, c), [f, m] = u.useState(!1), [p, g] = u.useState("");
    return u.useEffect(() => {
      const v = c.current;
      v && g((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ l.jsx(
      fr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ l.jsx(os, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ l.jsx(
          G.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: A(
              e.onPointerMove,
              mr((v) => {
                r ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: A(
              e.onPointerLeave,
              mr((v) => a.onItemLeave(v))
            ),
            onFocus: A(e.onFocus, () => m(!0)),
            onBlur: A(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), BT = "MenuCheckboxItem", hm = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(ym, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      ss,
      {
        role: "menuitemcheckbox",
        "aria-checked": So(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Di(n),
        onSelect: A(
          o.onSelect,
          () => r?.(So(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
hm.displayName = BT;
var gm = "MenuRadioGroup", [VT, zT] = cn(
  gm,
  { value: void 0, onValueChange: () => {
  } }
), vm = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = me(r);
    return /* @__PURE__ */ l.jsx(VT, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ l.jsx(Mi, { ...o, ref: t }) });
  }
);
vm.displayName = gm;
var bm = "MenuRadioItem", xm = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = zT(bm, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ l.jsx(ym, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ l.jsx(
      ss,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Di(s),
        onSelect: A(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xm.displayName = bm;
var Pi = "MenuItemIndicator", [ym, HT] = cn(
  Pi,
  { checked: !1 }
), wm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = HT(Pi, n);
    return /* @__PURE__ */ l.jsx(
      ve,
      {
        present: r || So(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          G.span,
          {
            ...o,
            ref: t,
            "data-state": Di(s.checked)
          }
        )
      }
    );
  }
);
wm.displayName = Pi;
var YT = "MenuSeparator", Cm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(
      G.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Cm.displayName = YT;
var GT = "MenuArrow", Sm = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Fr(n);
    return /* @__PURE__ */ l.jsx(es, { ...o, ...r, ref: t });
  }
);
Sm.displayName = GT;
var ki = "MenuSub", [KT, Nm] = cn(ki), Em = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = Lt(ki, t), a = Fr(t), [i, c] = u.useState(null), [d, f] = u.useState(null), m = me(o);
  return u.useEffect(() => (s.open === !1 && m(!1), () => m(!1)), [s.open, m]), /* @__PURE__ */ l.jsx(kr, { ...a, children: /* @__PURE__ */ l.jsx(
    cm,
    {
      scope: t,
      open: r,
      onOpenChange: m,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ l.jsx(
        KT,
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
Em.displayName = ki;
var er = "MenuSubTrigger", Rm = u.forwardRef(
  (e, t) => {
    const n = Lt(er, e.__scopeMenu), r = Lr(er, e.__scopeMenu), o = Nm(er, e.__scopeMenu), s = Ri(er, e.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), c(null);
      };
    }, [i, c]), /* @__PURE__ */ l.jsx(Ni, { asChild: !0, ...d, children: /* @__PURE__ */ l.jsx(
      pm,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Pm(n.open),
        ...e,
        ref: Ke(t, o.onTriggerChange),
        onClick: (m) => {
          e.onClick?.(m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: A(
          e.onPointerMove,
          mr((m) => {
            s.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          mr((m) => {
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
        onKeyDown: A(e.onKeyDown, (m) => {
          const p = s.searchRef.current !== "";
          e.disabled || p && m.key === " " || MT[r.dir].includes(m.key) && (n.onOpenChange(!0), n.content?.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Rm.displayName = er;
var Tm = "MenuSubContent", Mm = u.forwardRef(
  (e, t) => {
    const n = um(We, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lt(We, e.__scopeMenu), a = Lr(We, e.__scopeMenu), i = Nm(Tm, e.__scopeMenu), c = u.useRef(null), d = oe(t, c);
    return /* @__PURE__ */ l.jsx(fr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ve, { present: r || s.open, children: /* @__PURE__ */ l.jsx(fr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      Ti,
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
        onFocusOutside: A(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: A(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: A(e.onKeyDown, (f) => {
          const m = f.currentTarget.contains(f.target), p = PT[a.dir].includes(f.key);
          m && p && (s.onOpenChange(!1), i.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Mm.displayName = Tm;
function Pm(e) {
  return e ? "open" : "closed";
}
function So(e) {
  return e === "indeterminate";
}
function Di(e) {
  return So(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function UT(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function qT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function XT(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = qT(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function ZT(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, f = i.y, m = c.x, p = c.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function QT(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ZT(n, t);
}
function mr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var JT = lm, eM = Ni, tM = dm, nM = fm, rM = Mi, oM = mm, sM = ss, aM = hm, iM = vm, cM = xm, lM = wm, uM = Cm, dM = Sm, fM = Em, mM = Rm, pM = Mm, as = "DropdownMenu", [hM] = Ne(
  as,
  [am]
), Pe = am(), [gM, km] = hM(as), Dm = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Pe(t), d = u.useRef(null), [f, m] = Ce({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: as
  });
  return /* @__PURE__ */ l.jsx(
    gM,
    {
      scope: t,
      triggerId: be(),
      triggerRef: d,
      contentId: be(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(JT, { ...c, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
Dm.displayName = as;
var _m = "DropdownMenuTrigger", Am = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = km(_m, n), a = Pe(n);
    return /* @__PURE__ */ l.jsx(eM, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      G.button,
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
        ref: Ke(t, s.triggerRef),
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
Am.displayName = _m;
var vM = "DropdownMenuPortal", Om = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Pe(t);
  return /* @__PURE__ */ l.jsx(tM, { ...r, ...n });
};
Om.displayName = vM;
var jm = "DropdownMenuContent", Im = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = km(jm, n), s = Pe(n), a = u.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      nM,
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
Im.displayName = jm;
var bM = "DropdownMenuGroup", Fm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(rM, { ...o, ...r, ref: t });
  }
);
Fm.displayName = bM;
var xM = "DropdownMenuLabel", Lm = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(oM, { ...o, ...r, ref: t });
  }
);
Lm.displayName = xM;
var yM = "DropdownMenuItem", $m = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(sM, { ...o, ...r, ref: t });
  }
);
$m.displayName = yM;
var wM = "DropdownMenuCheckboxItem", Wm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(aM, { ...o, ...r, ref: t });
});
Wm.displayName = wM;
var CM = "DropdownMenuRadioGroup", Bm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(iM, { ...o, ...r, ref: t });
});
Bm.displayName = CM;
var SM = "DropdownMenuRadioItem", Vm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(cM, { ...o, ...r, ref: t });
});
Vm.displayName = SM;
var NM = "DropdownMenuItemIndicator", zm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(lM, { ...o, ...r, ref: t });
});
zm.displayName = NM;
var EM = "DropdownMenuSeparator", Hm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(uM, { ...o, ...r, ref: t });
});
Hm.displayName = EM;
var RM = "DropdownMenuArrow", TM = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
    return /* @__PURE__ */ l.jsx(dM, { ...o, ...r, ref: t });
  }
);
TM.displayName = RM;
var MM = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, a = Pe(t), [i, c] = Ce({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l.jsx(fM, { ...a, open: i, onOpenChange: c, children: n });
}, PM = "DropdownMenuSubTrigger", Ym = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(mM, { ...o, ...r, ref: t });
});
Ym.displayName = PM;
var kM = "DropdownMenuSubContent", Gm = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Pe(n);
  return /* @__PURE__ */ l.jsx(
    pM,
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
Gm.displayName = kM;
var DM = Dm, _M = Am, Km = Om, Um = Im, AM = Fm, qm = Lm, Xm = $m, Zm = Wm, OM = Bm, Qm = Vm, Jm = zm, ep = Hm, jM = MM, tp = Ym, np = Gm;
const P_ = DM, k_ = _M, D_ = AM, __ = Km, A_ = jM, O_ = OM, IM = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  tp,
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
IM.displayName = tp.displayName;
const FM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  np,
  {
    ref: n,
    className: M(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
FM.displayName = np.displayName;
const LM = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(Km, { children: /* @__PURE__ */ l.jsx(
  Um,
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
LM.displayName = Um.displayName;
const $M = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Xm,
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
$M.displayName = Xm.displayName;
const WM = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Zm,
  {
    ref: o,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Jm, { children: /* @__PURE__ */ l.jsx(gr, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
WM.displayName = Zm.displayName;
const BM = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Qm,
  {
    ref: r,
    className: M(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Jm, { children: /* @__PURE__ */ l.jsx(El, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
BM.displayName = Qm.displayName;
const VM = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  qm,
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
VM.displayName = qm.displayName;
const zM = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  ep,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
zM.displayName = ep.displayName;
const HM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: M("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
HM.displayName = "DropdownMenuShortcut";
var YM = "Label", rp = u.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  Fe.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
rp.displayName = YM;
var op = rp;
const GM = it(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), is = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  op,
  {
    ref: n,
    className: M(GM(), e),
    ...t
  }
));
is.displayName = op.displayName;
const j_ = Rv, sp = u.createContext(
  {}
), $r = ({
  ...e
}) => /* @__PURE__ */ l.jsx(sp.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(Tv, { ...e }) }), cs = () => {
  const e = u.useContext(sp), t = u.useContext(ap), { getFieldState: n, formState: r } = _n(), o = n(e.name, r);
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
}, ap = u.createContext(
  {}
), Wn = u.forwardRef(({ className: e, ...t }, n) => {
  const r = u.useId();
  return /* @__PURE__ */ l.jsx(ap.Provider, { value: { id: r }, children: /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: n,
      className: M("space-y-1 relative", e),
      ...t
    }
  ) });
});
Wn.displayName = "FormItem";
const Bn = u.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = cs();
  return /* @__PURE__ */ l.jsx(
    is,
    {
      ref: n,
      className: M(r && "text-destructive dark:text-red-400", e),
      htmlFor: o,
      ...t
    }
  );
});
Bn.displayName = "FormLabel";
const ls = u.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: s } = cs();
  return /* @__PURE__ */ l.jsx(
    sd,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${s}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
ls.displayName = "FormControl";
const ip = u.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = cs();
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
ip.displayName = "FormDescription";
const Vn = u.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: s } = cs(), a = o ? String(o?.message) : t;
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
Vn.displayName = "FormMessage";
const KM = it("font-bold tracking-tight", {
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
}), I_ = j.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => {
    const s = t || "h1";
    return /* @__PURE__ */ l.jsx(
      s,
      {
        className: M(KM({ variant: t }), e),
        ref: o,
        ...r,
        children: n
      }
    );
  }
), _i = j.forwardRef(({ className: e, type: t, ...n }, r) => t === "textarea" ? /* @__PURE__ */ l.jsx(
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
)), F_ = ({
  name: e,
  label: t,
  placeholder: n,
  mask: r,
  ...o
}) => {
  const s = _n();
  return /* @__PURE__ */ l.jsx(
    $r,
    {
      control: s.control,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ l.jsxs(Wn, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ l.jsx(Bn, { children: t }),
        /* @__PURE__ */ l.jsx(ls, { children: r ? /* @__PURE__ */ l.jsx(
          yP,
          {
            mask: r,
            placeholder: n,
            ...o,
            ...a
          }
        ) : /* @__PURE__ */ l.jsx(_i, { placeholder: n, ...o, ...a }) }),
        /* @__PURE__ */ l.jsx(Vn, {})
      ] })
    }
  );
};
var cp = Object.freeze({
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
}), UM = "VisuallyHidden", us = u.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(
    G.span,
    {
      ...e,
      ref: t,
      style: { ...cp, ...e.style }
    }
  )
);
us.displayName = UM;
var lp = us, ln = "NavigationMenu", [Ai, up, qM] = on(ln), [va, XM, ZM] = on(ln), [Oi] = Ne(
  ln,
  [qM, ZM]
), [QM, Be] = Oi(ln), [JM, eP] = Oi(ln), dp = u.forwardRef(
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
    } = e, [m, p] = u.useState(null), g = oe(t, (P) => p(P)), v = xt(d), h = u.useRef(0), b = u.useRef(0), x = u.useRef(0), [y, w] = u.useState(!0), [S, N] = Ce({
      prop: r,
      onChange: (P) => {
        const k = P !== "", I = i > 0;
        k ? (window.clearTimeout(x.current), I && w(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
          () => w(!0),
          i
        )), o?.(P);
      },
      defaultProp: s ?? "",
      caller: ln
    }), C = u.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => N(""), 150);
    }, [N]), R = u.useCallback(
      (P) => {
        window.clearTimeout(b.current), N(P);
      },
      [N]
    ), E = u.useCallback(
      (P) => {
        S === P ? window.clearTimeout(b.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(b.current), N(P);
        }, a);
      },
      [S, N, a]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(b.current), window.clearTimeout(x.current);
    }, []), /* @__PURE__ */ l.jsx(
      fp,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: v,
        orientation: c,
        rootNavigationMenu: m,
        onTriggerEnter: (P) => {
          window.clearTimeout(h.current), y ? E(P) : R(P);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), C();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: C,
        onItemSelect: (P) => {
          N((k) => k === P ? "" : P);
        },
        onItemDismiss: () => N(""),
        children: /* @__PURE__ */ l.jsx(
          G.nav,
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
dp.displayName = ln;
var ba = "NavigationMenuSub", tP = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      ...i
    } = e, c = Be(ba, n), [d, f] = Ce({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: ba
    });
    return /* @__PURE__ */ l.jsx(
      fp,
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
        children: /* @__PURE__ */ l.jsx(G.div, { "data-orientation": a, ...i, ref: t })
      }
    );
  }
);
tP.displayName = ba;
var fp = (e) => {
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
    QM,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: i,
      previousValue: Er(i),
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
      children: /* @__PURE__ */ l.jsx(Ai.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(JM, { scope: t, items: b, children: a }) })
    }
  );
}, mp = "NavigationMenuList", pp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Be(mp, n), s = /* @__PURE__ */ l.jsx(G.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ l.jsx(G.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ l.jsx(Ai.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ l.jsx(Np, { asChild: !0, children: s }) : s }) });
  }
);
pp.displayName = mp;
var hp = "NavigationMenuItem", [nP, gp] = Oi(hp), vp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, s = be(), a = r || s || "LEGACY_REACT_AUTO_VALUE", i = u.useRef(null), c = u.useRef(null), d = u.useRef(null), f = u.useRef(() => {
    }), m = u.useRef(!1), p = u.useCallback((v = "start") => {
      if (i.current) {
        f.current();
        const h = ya(i.current);
        h.length && Fi(v === "start" ? h : h.reverse());
      }
    }, []), g = u.useCallback(() => {
      if (i.current) {
        const v = ya(i.current);
        v.length && (f.current = lP(v));
      }
    }, []);
    return /* @__PURE__ */ l.jsx(
      nP,
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
        children: /* @__PURE__ */ l.jsx(G.li, { ...o, ref: t })
      }
    );
  }
);
vp.displayName = hp;
var xa = "NavigationMenuTrigger", bp = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, s = Be(xa, e.__scopeNavigationMenu), a = gp(xa, e.__scopeNavigationMenu), i = u.useRef(null), c = oe(i, a.triggerRef, t), d = Rp(s.baseId, a.value), f = Tp(s.baseId, a.value), m = u.useRef(!1), p = u.useRef(!1), g = a.value === s.value;
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Ai.ItemSlot, { scope: n, value: a.value, children: /* @__PURE__ */ l.jsx(Ep, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      G.button,
      {
        id: d,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Li(g),
        "aria-expanded": g,
        "aria-controls": f,
        ...o,
        ref: c,
        onPointerEnter: A(e.onPointerEnter, () => {
          p.current = !1, a.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: A(
          e.onPointerMove,
          No(() => {
            r || p.current || a.wasEscapeCloseRef.current || m.current || (s.onTriggerEnter(a.value), m.current = !0);
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          No(() => {
            r || (s.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: A(e.onClick, () => {
          s.onItemSelect(a.value), p.current = g;
        }),
        onKeyDown: A(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          g && v.key === b && (a.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        lp,
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
bp.displayName = xa;
var rP = "NavigationMenuLink", fl = "navigationMenu.linkSelect", xp = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...s } = e;
    return /* @__PURE__ */ l.jsx(Ep, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      G.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...s,
        ref: t,
        onClick: A(
          e.onClick,
          (a) => {
            const i = a.target, c = new CustomEvent(fl, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(fl, (d) => o?.(d), { once: !0 }), sr(i, c), !c.defaultPrevented && !a.metaKey) {
              const d = new CustomEvent(co, {
                bubbles: !0,
                cancelable: !0
              });
              sr(i, d);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xp.displayName = rP;
var ji = "NavigationMenuIndicator", yp = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Be(ji, e.__scopeNavigationMenu), s = !!o.value;
  return o.indicatorTrack ? Cl.createPortal(
    /* @__PURE__ */ l.jsx(ve, { present: n || s, children: /* @__PURE__ */ l.jsx(oP, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
yp.displayName = ji;
var oP = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Be(ji, n), s = up(n), [a, i] = u.useState(
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
  return wa(a, p), wa(o.indicatorTrack, p), c ? /* @__PURE__ */ l.jsx(
    G.div,
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
}), Pn = "NavigationMenuContent", wp = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Be(Pn, e.__scopeNavigationMenu), s = gp(Pn, e.__scopeNavigationMenu), a = oe(s.contentRef, t), i = s.value === o.value, c = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ l.jsx(sP, { forceMount: n, ...c, ref: a }) : /* @__PURE__ */ l.jsx(ve, { present: n || i, children: /* @__PURE__ */ l.jsx(
    Cp,
    {
      "data-state": Li(i),
      ...c,
      ref: a,
      onPointerEnter: A(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: A(
        e.onPointerLeave,
        No(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
wp.displayName = Pn;
var sP = u.forwardRef((e, t) => {
  const n = Be(Pn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return ge(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), ge(() => () => o(e.value), [e.value, o]), null;
}), co = "navigationMenu.rootContentDismiss", Cp = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: s,
    wasEscapeCloseRef: a,
    onRootContentClose: i,
    onContentFocusOutside: c,
    ...d
  } = e, f = Be(Pn, n), m = u.useRef(null), p = oe(m, t), g = Rp(f.baseId, r), v = Tp(f.baseId, r), h = up(n), b = u.useRef(null), { onItemDismiss: x } = f;
  u.useEffect(() => {
    const w = m.current;
    if (f.isRootMenu && w) {
      const S = () => {
        x(), i(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(co, S), () => w.removeEventListener(co, S);
    }
  }, [f.isRootMenu, e.value, o, x, i]);
  const y = u.useMemo(() => {
    const S = h().map((k) => k.value);
    f.dir === "rtl" && S.reverse();
    const N = S.indexOf(f.value), C = S.indexOf(f.previousValue), R = r === f.value, E = C === S.indexOf(r);
    if (!R && !E) return b.current;
    const P = (() => {
      if (N !== C) {
        if (R && C !== -1) return N > C ? "from-end" : "from-start";
        if (E && N !== -1) return N > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = P, P;
  }, [f.previousValue, f.value, f.dir, h, r]);
  return /* @__PURE__ */ l.jsx(Np, { asChild: !0, children: /* @__PURE__ */ l.jsx(
    Ot,
    {
      id: v,
      "aria-labelledby": g,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...d,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(co, {
          bubbles: !0,
          cancelable: !0
        });
        m.current?.dispatchEvent(w);
      },
      onFocusOutside: A(e.onFocusOutside, (w) => {
        c();
        const S = w.target;
        f.rootNavigationMenu?.contains(S) && w.preventDefault();
      }),
      onPointerDownOutside: A(e.onPointerDownOutside, (w) => {
        const S = w.target, N = h().some((R) => R.ref.current?.contains(S)), C = f.isRootMenu && f.viewport?.contains(S);
        (N || C || !f.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: A(e.onKeyDown, (w) => {
        const S = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !S) {
          const C = ya(w.currentTarget), R = document.activeElement, E = C.findIndex((I) => I === R), k = w.shiftKey ? C.slice(0, E).reverse() : C.slice(E + 1, C.length);
          Fi(k) ? w.preventDefault() : s.current?.focus();
        }
      }),
      onEscapeKeyDown: A(e.onEscapeKeyDown, (w) => {
        a.current = !0;
      })
    }
  ) });
}), Ii = "NavigationMenuViewport", Sp = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, s = !!Be(Ii, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ l.jsx(ve, { present: n || s, children: /* @__PURE__ */ l.jsx(aP, { ...r, ref: t }) });
});
Sp.displayName = Ii;
var aP = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, s = Be(Ii, n), a = oe(t, s.onViewportChange), i = eP(
    Pn,
    e.__scopeNavigationMenu
  ), [c, d] = u.useState(null), [f, m] = u.useState(null), p = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, v = !!s.value, h = v ? s.value : s.previousValue;
  return wa(f, () => {
    f && d({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ l.jsx(
    G.div,
    {
      "data-state": Li(v),
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
      onPointerEnter: A(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: A(e.onPointerLeave, No(s.onContentLeave)),
      children: Array.from(i.items).map(([x, { ref: y, forceMount: w, ...S }]) => {
        const N = h === x;
        return /* @__PURE__ */ l.jsx(ve, { present: w || N, children: /* @__PURE__ */ l.jsx(
          Cp,
          {
            ...S,
            ref: Ke(y, (C) => {
              N && C && m(C);
            })
          }
        ) }, x);
      })
    }
  );
}), iP = "FocusGroup", Np = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Be(iP, n);
    return /* @__PURE__ */ l.jsx(va.Provider, { scope: n, children: /* @__PURE__ */ l.jsx(va.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(G.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), ml = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], cP = "FocusGroupItem", Ep = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = XM(n), s = Be(cP, n);
    return /* @__PURE__ */ l.jsx(va.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      G.button,
      {
        ...r,
        ref: t,
        onKeyDown: A(e.onKeyDown, (a) => {
          if (["Home", "End", ...ml].includes(a.key)) {
            let c = o().map((m) => m.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && c.reverse(), ml.includes(a.key)) {
              const m = c.indexOf(a.currentTarget);
              c = c.slice(m + 1);
            }
            setTimeout(() => Fi(c)), a.preventDefault();
          }
        })
      }
    ) });
  }
);
function ya(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Fi(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function lP(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function wa(e, t) {
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
function Li(e) {
  return e ? "open" : "closed";
}
function Rp(e, t) {
  return `${e}-trigger-${t}`;
}
function Tp(e, t) {
  return `${e}-content-${t}`;
}
function No(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Mp = dp, Pp = pp, uP = vp, kp = bp, dP = xp, Dp = yp, _p = wp, Ap = Sp;
const fP = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Mp,
  {
    ref: r,
    className: M(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Op, {})
    ]
  }
));
fP.displayName = Mp.displayName;
const mP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Pp,
  {
    ref: n,
    className: M(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
mP.displayName = Pp.displayName;
const L_ = uP, pP = it(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), hP = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  kp,
  {
    ref: r,
    className: M(pP(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ l.jsx(
        Pt,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
hP.displayName = kp.displayName;
const gP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  _p,
  {
    ref: n,
    className: M(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
gP.displayName = _p.displayName;
const vP = dP, Op = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: M("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ l.jsx(
  Ap,
  {
    className: M(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Op.displayName = Ap.displayName;
const bP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Dp,
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
bP.displayName = Dp.displayName;
const xP = j.forwardRef(({ className: e, title: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(vP, { asChild: !0, children: /* @__PURE__ */ l.jsxs(
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
xP.displayName = "ListItem";
function yP({
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
    _i,
    {
      value: Hd(e, t),
      onChange: c,
      ...r
    }
  );
}
const wP = (e, t = 300) => {
  const [n, r] = $e(e);
  return gt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, pl = it(
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
), CP = u.forwardRef(
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
    const [h, b] = u.useState(r), [x, y] = u.useState(!1), [w, S] = u.useState(!1), [N, C] = u.useState(""), R = wP(N, 300);
    gt(() => {
      f && f(R ?? "");
    }, [R]);
    const E = (_) => {
      if (_.key === "Enter")
        y(!0);
      else if (_.key === "Backspace" && !_.currentTarget.value) {
        const B = [...h];
        B.pop(), b(B), t(B);
      }
    }, P = (_) => {
      const B = h.includes(_) ? h.filter(($) => $ !== _) : [...h, _];
      b(B), t(B);
    }, k = () => {
      b([]), t([]);
    }, I = () => {
      y((_) => !_);
    }, Y = () => {
      const _ = h.slice(0, a);
      b(_), t(_);
    }, q = () => {
      if (h.length === e.length)
        k();
      else {
        const _ = e.map((B) => B.value);
        b(_), t(_);
      }
    };
    return /* @__PURE__ */ l.jsxs(
      Ar,
      {
        open: x,
        onOpenChange: y,
        modal: i,
        children: [
          /* @__PURE__ */ l.jsx(Or, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            wt,
            {
              ref: v,
              ...g,
              onClick: I,
              variant: "outline",
              className: M(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ l.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, a).map((_) => {
                    const B = e.find((X) => X.value === _), $ = B?.icon;
                    return /* @__PURE__ */ l.jsxs(
                      _c,
                      {
                        className: M(
                          w ? "animate-bounce" : "",
                          pl({ variant: n })
                        ),
                        style: { animationDuration: `${s}s` },
                        children: [
                          $ && /* @__PURE__ */ l.jsx($, { className: "h-4 w-4 mr-2" }),
                          B?.label,
                          /* @__PURE__ */ l.jsx(
                            nc,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (X) => {
                                X.stopPropagation(), P(_);
                              }
                            }
                          )
                        ]
                      },
                      _
                    );
                  }),
                  h.length > a && /* @__PURE__ */ l.jsxs(
                    _c,
                    {
                      className: M(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        pl({ variant: n })
                      ),
                      style: { animationDuration: `${s}s` },
                      children: [
                        `+ ${h.length - a}`,
                        /* @__PURE__ */ l.jsx(
                          nc,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (_) => {
                              _.stopPropagation(), Y();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between", children: [
                  m && /* @__PURE__ */ l.jsx(or, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ l.jsx(
                    wv,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (_) => {
                        _.stopPropagation(), k();
                      }
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Zh,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(Pt, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ l.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ l.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ l.jsx(Pt, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ l.jsx(
            $n,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => y(!1),
              children: /* @__PURE__ */ l.jsxs(Tr, { shouldFilter: !f, children: [
                /* @__PURE__ */ l.jsx(
                  Go,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: E,
                    onValueChange: C
                  }
                ),
                /* @__PURE__ */ l.jsxs(Ko, { children: [
                  !m && /* @__PURE__ */ l.jsx(Uo, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ l.jsxs(Mr, { children: [
                    !m && !e.length && !!N.length && p && /* @__PURE__ */ l.jsx(
                      qt,
                      {
                        onSelect: p,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ l.jsx(Cv, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ l.jsx("b", { children: N })
                        ] })
                      },
                      "new"
                    ),
                    m && /* @__PURE__ */ l.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ l.jsx(or, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !d && /* @__PURE__ */ l.jsxs(
                      qt,
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
                              children: /* @__PURE__ */ l.jsx(rc, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ l.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((_) => {
                      const B = h.includes(_.value);
                      return /* @__PURE__ */ l.jsxs(
                        qt,
                        {
                          onSelect: () => P(_.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ l.jsx(
                              "div",
                              {
                                className: M(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  B ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ l.jsx(rc, { className: "h-4 w-4" })
                              }
                            ),
                            _.icon && /* @__PURE__ */ l.jsx(_.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ l.jsx("span", { children: _.label })
                          ]
                        },
                        _.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ l.jsx(pf, {})
                ] })
              ] })
            }
          ),
          s > 0 && h.length > 0 && /* @__PURE__ */ l.jsx(
            Sv,
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
CP.displayName = "MultiSelect";
const SP = ({ className: e, ...t }) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: M("mx-auto flex w-full justify-center", e),
    ...t
  }
);
SP.displayName = "Pagination";
const NP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "ul",
  {
    ref: n,
    className: M("flex flex-row items-center gap-1", e),
    ...t
  }
));
NP.displayName = "PaginationContent";
const EP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("li", { ref: n, className: M("", e), ...t }));
EP.displayName = "PaginationItem";
const $i = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: M(
      Qt({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
$i.displayName = "PaginationLink";
const RP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  $i,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(Nv, { className: "h-4 w-4" })
  }
);
RP.displayName = "PaginationPrevious";
const TP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  $i,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: M("gap-1", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(Aa, { className: "h-4 w-4" })
  }
);
TP.displayName = "PaginationNext";
const MP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: M("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(Nl, { className: "h-4 w-4" }),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
MP.displayName = "PaginationEllipsis";
var Wi = "Radio", [PP, jp] = Ne(Wi), [kP, DP] = PP(Wi), Ip = u.forwardRef(
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
    return /* @__PURE__ */ l.jsxs(kP, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ l.jsx(
        G.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Wp(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: g,
          onClick: A(e.onClick, (b) => {
            o || c?.(), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ l.jsx(
        $p,
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
Ip.displayName = Wi;
var Fp = "RadioIndicator", Lp = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = DP(Fp, n);
    return /* @__PURE__ */ l.jsx(ve, { present: r || s.checked, children: /* @__PURE__ */ l.jsx(
      G.span,
      {
        "data-state": Wp(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Lp.displayName = Fp;
var _P = "RadioBubbleInput", $p = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = u.useRef(null), i = oe(a, s), c = Er(n), d = zo(t);
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
      G.input,
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
$p.displayName = _P;
function Wp(e) {
  return e ? "checked" : "unchecked";
}
var AP = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ds = "RadioGroup", [OP] = Ne(ds, [
  Ft,
  jp
]), Bp = Ft(), Vp = jp(), [jP, IP] = OP(ds), zp = u.forwardRef(
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
    } = e, g = Bp(n), v = xt(d), [h, b] = Ce({
      prop: s,
      defaultProp: o ?? null,
      onChange: m,
      caller: ds
    });
    return /* @__PURE__ */ l.jsx(
      jP,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: h,
        onValueChange: b,
        children: /* @__PURE__ */ l.jsx(
          rs,
          {
            asChild: !0,
            ...g,
            orientation: c,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ l.jsx(
              G.div,
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
zp.displayName = ds;
var Hp = "RadioGroupItem", Yp = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = IP(Hp, n), a = s.disabled || r, i = Bp(n), c = Vp(n), d = u.useRef(null), f = oe(t, d), m = s.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const g = (h) => {
        AP.includes(h.key) && (p.current = !0);
      }, v = () => p.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ l.jsx(
      os,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: m,
        children: /* @__PURE__ */ l.jsx(
          Ip,
          {
            disabled: a,
            required: s.required,
            checked: m,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: A((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: A(o.onFocus, () => {
              p.current && d.current?.click();
            })
          }
        )
      }
    );
  }
);
Yp.displayName = Hp;
var FP = "RadioGroupIndicator", Gp = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Vp(n);
    return /* @__PURE__ */ l.jsx(Lp, { ...o, ...r, ref: t });
  }
);
Gp.displayName = FP;
var Kp = zp, Up = Yp, LP = Gp;
const $P = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Kp,
  {
    className: M("grid gap-2", e),
    ...t,
    ref: n
  }
));
$P.displayName = Kp.displayName;
const WP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Up,
  {
    ref: n,
    className: M(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(LP, { className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(El, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
WP.displayName = Up.displayName;
function Ca(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function BP(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Bi = "ScrollArea", [qp] = Ne(Bi), [VP, Ve] = qp(Bi), Xp = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, c] = u.useState(null), [d, f] = u.useState(null), [m, p] = u.useState(null), [g, v] = u.useState(null), [h, b] = u.useState(null), [x, y] = u.useState(0), [w, S] = u.useState(0), [N, C] = u.useState(!1), [R, E] = u.useState(!1), P = oe(t, (I) => c(I)), k = xt(o);
    return /* @__PURE__ */ l.jsx(
      VP,
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
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ l.jsx(
          G.div,
          {
            dir: k,
            ...a,
            ref: P,
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
Xp.displayName = Bi;
var Zp = "ScrollAreaViewport", Qp = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, a = Ve(Zp, n), i = u.useRef(null), c = oe(t, i, a.onViewportChange);
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
        G.div,
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
Qp.displayName = Zp;
var ut = "ScrollAreaScrollbar", Vi = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ve(ut, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o, i = e.orientation === "horizontal";
    return u.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), o.type === "hover" ? /* @__PURE__ */ l.jsx(zP, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l.jsx(HP, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l.jsx(Jp, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l.jsx(zi, { ...r, ref: t }) : null;
  }
);
Vi.displayName = ut;
var zP = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ve(ut, e.__scopeScrollArea), [s, a] = u.useState(!1);
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
    Jp,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), HP = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ve(ut, e.__scopeScrollArea), s = e.orientation === "horizontal", a = ms(() => c("SCROLL_END"), 100), [i, c] = BP("hidden", {
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
    zi,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: A(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: A(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Jp = u.forwardRef((e, t) => {
  const n = Ve(ut, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, a] = u.useState(!1), i = e.orientation === "horizontal", c = ms(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? d : f);
    }
  }, 10);
  return kn(n.viewport, c), kn(n.content, c), /* @__PURE__ */ l.jsx(ve, { present: r || s, children: /* @__PURE__ */ l.jsx(
    zi,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), zi = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ve(ut, e.__scopeScrollArea), s = u.useRef(null), a = u.useRef(0), [i, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = oh(i.viewport, i.content), f = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (p) => a.current = p
  };
  function m(p, g) {
    return XP(p, a.current, i, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    YP,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, g = hl(p, i, o.dir);
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
    GP,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, g = hl(p, i);
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
}), YP = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Ve(ut, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), d = oe(t, c, s.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l.jsx(
    th,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": fs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(p), ah(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Ro(a.paddingLeft),
            paddingEnd: Ro(a.paddingRight)
          }
        });
      }
    }
  );
}), GP = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Ve(ut, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), d = oe(t, c, s.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ l.jsx(
    th,
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
        "--radix-scroll-area-thumb-height": fs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(p), ah(p, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Ro(a.paddingTop),
            paddingEnd: Ro(a.paddingBottom)
          }
        });
      }
    }
  );
}), [KP, eh] = qp(ut), th = u.forwardRef((e, t) => {
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
  } = e, g = Ve(ut, n), [v, h] = u.useState(null), b = oe(t, (P) => h(P)), x = u.useRef(null), y = u.useRef(""), w = g.viewport, S = r.content - r.viewport, N = me(f), C = me(c), R = ms(m, 10);
  function E(P) {
    if (x.current) {
      const k = P.clientX - x.current.left, I = P.clientY - x.current.top;
      d({ x: k, y: I });
    }
  }
  return u.useEffect(() => {
    const P = (k) => {
      const I = k.target;
      v?.contains(I) && N(k, S);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [w, v, S, N]), u.useEffect(C, [r, C]), kn(v, R), kn(g.content, R), /* @__PURE__ */ l.jsx(
    KP,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: me(s),
      onThumbPointerUp: me(a),
      onThumbPositionChange: C,
      onThumbPointerDown: me(i),
      children: /* @__PURE__ */ l.jsx(
        G.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: A(e.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), x.current = v.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), E(P));
          }),
          onPointerMove: A(e.onPointerMove, E),
          onPointerUp: A(e.onPointerUp, (P) => {
            const k = P.target;
            k.hasPointerCapture(P.pointerId) && k.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, g.viewport && (g.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), Eo = "ScrollAreaThumb", nh = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = eh(Eo, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ve, { present: n || o.hasThumb, children: /* @__PURE__ */ l.jsx(UP, { ref: t, ...r }) });
  }
), UP = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = Ve(Eo, n), a = eh(Eo, n), { onThumbPositionChange: i } = a, c = oe(
      t,
      (m) => a.onThumbChange(m)
    ), d = u.useRef(void 0), f = ms(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const m = s.viewport;
      if (m) {
        const p = () => {
          if (f(), !d.current) {
            const g = ZP(m, i);
            d.current = g, i();
          }
        };
        return i(), m.addEventListener("scroll", p), () => m.removeEventListener("scroll", p);
      }
    }, [s.viewport, f, i]), /* @__PURE__ */ l.jsx(
      G.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: A(e.onPointerDownCapture, (m) => {
          const g = m.target.getBoundingClientRect(), v = m.clientX - g.left, h = m.clientY - g.top;
          a.onThumbPointerDown({ x: v, y: h });
        }),
        onPointerUp: A(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
nh.displayName = Eo;
var Hi = "ScrollAreaCorner", rh = u.forwardRef(
  (e, t) => {
    const n = Ve(Hi, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l.jsx(qP, { ...e, ref: t }) : null;
  }
);
rh.displayName = Hi;
var qP = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ve(Hi, n), [s, a] = u.useState(0), [i, c] = u.useState(0), d = !!(s && i);
  return kn(o.scrollbarX, () => {
    const f = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(f), c(f);
  }), kn(o.scrollbarY, () => {
    const f = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(f), a(f);
  }), d ? /* @__PURE__ */ l.jsx(
    G.div,
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
function Ro(e) {
  return e ? parseInt(e, 10) : 0;
}
function oh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function fs(e) {
  const t = oh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function XP(e, t, n, r = "ltr") {
  const o = fs(n), s = o / 2, a = t || s, i = o - a, c = n.scrollbar.paddingStart + a, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, f = n.content - n.viewport, m = r === "ltr" ? [0, f] : [f * -1, 0];
  return sh([c, d], m)(e);
}
function hl(e, t, n = "ltr") {
  const r = fs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, a = t.content - t.viewport, i = s - r, c = n === "ltr" ? [0, a] : [a * -1, 0], d = Ca(e, c);
  return sh([0, a], [0, i])(d);
}
function sh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ah(e, t) {
  return e > 0 && e < t;
}
var ZP = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function ms(e, t) {
  const n = me(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function kn(e, t) {
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
var ih = Xp, QP = Qp, JP = rh;
const ek = j.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  ih,
  {
    ref: r,
    className: M("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(QP, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ l.jsx(ch, {}),
      /* @__PURE__ */ l.jsx(JP, {})
    ]
  }
));
ek.displayName = ih.displayName;
const ch = j.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ l.jsx(
  Vi,
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
    children: /* @__PURE__ */ l.jsx(nh, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
ch.displayName = Vi.displayName;
var tk = [" ", "Enter", "ArrowUp", "ArrowDown"], nk = [" ", "Enter"], nn = "Select", [ps, hs, rk] = on(nn), [zn] = Ne(nn, [
  rk,
  jt
]), gs = jt(), [ok, $t] = zn(nn), [sk, ak] = zn(nn), lh = (e) => {
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
  } = e, h = gs(t), [b, x] = u.useState(null), [y, w] = u.useState(null), [S, N] = u.useState(!1), C = xt(d), [R, E] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: nn
  }), [P, k] = Ce({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: nn
  }), I = u.useRef(null), Y = b ? v || !!b.closest("form") : !0, [q, _] = u.useState(/* @__PURE__ */ new Set()), B = Array.from(q).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ l.jsx(kr, { ...h, children: /* @__PURE__ */ l.jsxs(
    ok,
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
      value: P,
      onValueChange: k,
      open: R,
      onOpenChange: E,
      dir: C,
      triggerPointerDownPosRef: I,
      disabled: p,
      children: [
        /* @__PURE__ */ l.jsx(ps.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          sk,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback(($) => {
              _((X) => new Set(X).add($));
            }, []),
            onNativeOptionRemove: u.useCallback(($) => {
              _((X) => {
                const H = new Set(X);
                return H.delete($), H;
              });
            }, []),
            children: n
          }
        ) }),
        Y ? /* @__PURE__ */ l.jsxs(
          Oh,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: P,
            onChange: ($) => k($.target.value),
            disabled: p,
            form: v,
            children: [
              P === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(q)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
lh.displayName = nn;
var uh = "SelectTrigger", dh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = gs(n), a = $t(uh, n), i = a.disabled || r, c = oe(t, a.onTriggerChange), d = hs(n), f = u.useRef("touch"), [m, p, g] = Ih((h) => {
      const b = d().filter((w) => !w.disabled), x = b.find((w) => w.value === a.value), y = Fh(b, h, x);
      y !== void 0 && a.onValueChange(y.value);
    }), v = (h) => {
      i || (a.onOpenChange(!0), g()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(Dr, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      G.button,
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
        "data-placeholder": jh(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: A(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && v(h);
        }),
        onPointerDown: A(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const b = h.target;
          b.hasPointerCapture(h.pointerId) && b.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: A(o.onKeyDown, (h) => {
          const b = m.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(b && h.key === " ") && tk.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }
);
dh.displayName = uh;
var fh = "SelectValue", mh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = $t(fh, n), { onValueNodeHasChildrenChange: d } = c, f = s !== void 0, m = oe(t, c.onValueNodeChange);
    return ge(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ l.jsx(
      G.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: jh(c.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : s
      }
    );
  }
);
mh.displayName = fh;
var ik = "SelectIcon", ph = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(G.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
ph.displayName = ik;
var ck = "SelectPortal", hh = (e) => /* @__PURE__ */ l.jsx(an, { asChild: !0, ...e });
hh.displayName = ck;
var rn = "SelectContent", gh = u.forwardRef(
  (e, t) => {
    const n = $t(rn, e.__scopeSelect), [r, o] = u.useState();
    if (ge(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? hr.createPortal(
        /* @__PURE__ */ l.jsx(vh, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(ps.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(bh, { ...e, ref: t });
  }
);
gh.displayName = rn;
var He = 10, [vh, Wt] = zn(rn), lk = "SelectContentImpl", uk = /* @__PURE__ */ Xt("SelectContent.RemoveScroll"), bh = u.forwardRef(
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
    } = e, y = $t(rn, n), [w, S] = u.useState(null), [N, C] = u.useState(null), R = oe(t, (O) => S(O)), [E, P] = u.useState(null), [k, I] = u.useState(
      null
    ), Y = hs(n), [q, _] = u.useState(!1), B = u.useRef(!1);
    u.useEffect(() => {
      if (w) return jo(w);
    }, [w]), Ao();
    const $ = u.useCallback(
      (O) => {
        const [K, ...Q] = Y().map((V) => V.ref.current), [re] = Q.slice(-1), te = document.activeElement;
        for (const V of O)
          if (V === te || (V?.scrollIntoView({ block: "nearest" }), V === K && N && (N.scrollTop = 0), V === re && N && (N.scrollTop = N.scrollHeight), V?.focus(), document.activeElement !== te)) return;
      },
      [Y, N]
    ), X = u.useCallback(
      () => $([E, w]),
      [$, E, w]
    );
    u.useEffect(() => {
      q && X();
    }, [q, X]);
    const { onOpenChange: H, triggerPointerDownPosRef: F } = y;
    u.useEffect(() => {
      if (w) {
        let O = { x: 0, y: 0 };
        const K = (re) => {
          O = {
            x: Math.abs(Math.round(re.pageX) - (F.current?.x ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (F.current?.y ?? 0))
          };
        }, Q = (re) => {
          O.x <= 10 && O.y <= 10 ? re.preventDefault() : w.contains(re.target) || H(!1), document.removeEventListener("pointermove", K), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", K), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", K), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, H, F]), u.useEffect(() => {
      const O = () => H(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [H]);
    const [T, z] = Ih((O) => {
      const K = Y().filter((te) => !te.disabled), Q = K.find((te) => te.ref.current === document.activeElement), re = Fh(K, O, Q);
      re && setTimeout(() => re.ref.current.focus());
    }), D = u.useCallback(
      (O, K, Q) => {
        const re = !B.current && !Q;
        (y.value !== void 0 && y.value === K || re) && (P(O), re && (B.current = !0));
      },
      [y.value]
    ), W = u.useCallback(() => w?.focus(), [w]), U = u.useCallback(
      (O, K, Q) => {
        const re = !B.current && !Q;
        (y.value !== void 0 && y.value === K || re) && I(O);
      },
      [y.value]
    ), L = r === "popper" ? Sa : xh, Z = L === Sa ? {
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
      vh,
      {
        scope: n,
        content: w,
        viewport: N,
        onViewportChange: C,
        itemRefCallback: D,
        selectedItem: E,
        onItemLeave: W,
        itemTextRefCallback: U,
        focusSelectedItem: X,
        selectedItemText: k,
        position: r,
        isPositioned: q,
        searchRef: T,
        children: /* @__PURE__ */ l.jsx(br, { as: uk, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          vr,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: A(o, (O) => {
              y.trigger?.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              Ot,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  L,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...x,
                    ...Z,
                    onPlaced: () => _(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: A(x.onKeyDown, (O) => {
                      const K = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !K && O.key.length === 1 && z(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let re = Y().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const te = O.target, V = re.indexOf(te);
                          re = re.slice(V + 1);
                        }
                        setTimeout(() => $(re)), O.preventDefault();
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
bh.displayName = lk;
var dk = "SelectItemAlignedPosition", xh = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = $t(rn, n), a = Wt(rn, n), [i, c] = u.useState(null), [d, f] = u.useState(null), m = oe(t, (R) => f(R)), p = hs(n), g = u.useRef(!1), v = u.useRef(!0), { viewport: h, selectedItem: b, selectedItemText: x, focusSelectedItem: y } = a, w = u.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && b && x) {
      const R = s.trigger.getBoundingClientRect(), E = d.getBoundingClientRect(), P = s.valueNode.getBoundingClientRect(), k = x.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const te = k.left - E.left, V = P.left - te, ae = R.left - V, ue = R.width + ae, we = Math.max(ue, E.width), Re = window.innerWidth - He, ke = Ca(V, [
          He,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(He, Re - we)
        ]);
        i.style.minWidth = ue + "px", i.style.left = ke + "px";
      } else {
        const te = E.right - k.right, V = window.innerWidth - P.right - te, ae = window.innerWidth - R.right - V, ue = R.width + ae, we = Math.max(ue, E.width), Re = window.innerWidth - He, ke = Ca(V, [
          He,
          Math.max(He, Re - we)
        ]);
        i.style.minWidth = ue + "px", i.style.right = ke + "px";
      }
      const I = p(), Y = window.innerHeight - He * 2, q = h.scrollHeight, _ = window.getComputedStyle(d), B = parseInt(_.borderTopWidth, 10), $ = parseInt(_.paddingTop, 10), X = parseInt(_.borderBottomWidth, 10), H = parseInt(_.paddingBottom, 10), F = B + $ + q + H + X, T = Math.min(b.offsetHeight * 5, F), z = window.getComputedStyle(h), D = parseInt(z.paddingTop, 10), W = parseInt(z.paddingBottom, 10), U = R.top + R.height / 2 - He, L = Y - U, Z = b.offsetHeight / 2, O = b.offsetTop + Z, K = B + $ + O, Q = F - K;
      if (K <= U) {
        const te = I.length > 0 && b === I[I.length - 1].ref.current;
        i.style.bottom = "0px";
        const V = d.clientHeight - h.offsetTop - h.offsetHeight, ae = Math.max(
          L,
          Z + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? W : 0) + V + X
        ), ue = K + ae;
        i.style.height = ue + "px";
      } else {
        const te = I.length > 0 && b === I[0].ref.current;
        i.style.top = "0px";
        const ae = Math.max(
          U,
          B + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? D : 0) + Z
        ) + Q;
        i.style.height = ae + "px", h.scrollTop = K - U + h.offsetTop;
      }
      i.style.margin = `${He}px 0`, i.style.minHeight = T + "px", i.style.maxHeight = Y + "px", r?.(), requestAnimationFrame(() => g.current = !0);
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
    (R) => {
      R && v.current === !0 && (w(), y?.(), v.current = !1);
    },
    [w, y]
  );
  return /* @__PURE__ */ l.jsx(
    mk,
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
            G.div,
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
xh.displayName = dk;
var fk = "SelectPopperPosition", Sa = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = He,
    ...s
  } = e, a = gs(n);
  return /* @__PURE__ */ l.jsx(
    Jo,
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
Sa.displayName = fk;
var [mk, Yi] = zn(rn, {}), Na = "SelectViewport", yh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Wt(Na, n), a = Yi(Na, n), i = oe(t, s.onViewportChange), c = u.useRef(0);
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
      /* @__PURE__ */ l.jsx(ps.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
        G.div,
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
yh.displayName = Na;
var wh = "SelectGroup", [pk, hk] = zn(wh), Ch = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = be();
    return /* @__PURE__ */ l.jsx(pk, { scope: n, id: o, children: /* @__PURE__ */ l.jsx(G.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ch.displayName = wh;
var Sh = "SelectLabel", Nh = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hk(Sh, n);
    return /* @__PURE__ */ l.jsx(G.div, { id: o.id, ...r, ref: t });
  }
);
Nh.displayName = Sh;
var To = "SelectItem", [gk, Eh] = zn(To), Rh = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = $t(To, n), c = Wt(To, n), d = i.value === r, [f, m] = u.useState(s ?? ""), [p, g] = u.useState(!1), v = oe(
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
      gk,
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
          ps.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ l.jsx(
              G.div,
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
                onFocus: A(a.onFocus, () => g(!0)),
                onBlur: A(a.onBlur, () => g(!1)),
                onClick: A(a.onClick, () => {
                  b.current !== "mouse" && x();
                }),
                onPointerUp: A(a.onPointerUp, () => {
                  b.current === "mouse" && x();
                }),
                onPointerDown: A(a.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: A(a.onPointerMove, (y) => {
                  b.current = y.pointerType, o ? c.onItemLeave?.() : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: A(a.onPointerLeave, (y) => {
                  y.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: A(a.onKeyDown, (y) => {
                  c.searchRef?.current !== "" && y.key === " " || (nk.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Rh.displayName = To;
var tr = "SelectItemText", Th = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = $t(tr, n), i = Wt(tr, n), c = Eh(tr, n), d = ak(tr, n), [f, m] = u.useState(null), p = oe(
      t,
      (x) => m(x),
      c.onItemTextChange,
      (x) => i.itemTextRefCallback?.(x, c.value, c.disabled)
    ), g = f?.textContent, v = u.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: b } = d;
    return ge(() => (h(v), () => b(v)), [h, b, v]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(G.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? hr.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Th.displayName = tr;
var Mh = "SelectItemIndicator", Ph = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Eh(Mh, n).isSelected ? /* @__PURE__ */ l.jsx(G.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Ph.displayName = Mh;
var Ea = "SelectScrollUpButton", kh = u.forwardRef((e, t) => {
  const n = Wt(Ea, e.__scopeSelect), r = Yi(Ea, e.__scopeSelect), [o, s] = u.useState(!1), a = oe(t, r.onScrollButtonChange);
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
    _h,
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
kh.displayName = Ea;
var Ra = "SelectScrollDownButton", Dh = u.forwardRef((e, t) => {
  const n = Wt(Ra, e.__scopeSelect), r = Yi(Ra, e.__scopeSelect), [o, s] = u.useState(!1), a = oe(t, r.onScrollButtonChange);
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
    _h,
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
Dh.displayName = Ra;
var _h = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Wt("SelectScrollButton", n), a = u.useRef(null), i = hs(n), c = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ge(() => {
    i().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ l.jsx(
    G.div,
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
}), vk = "SelectSeparator", Ah = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(G.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ah.displayName = vk;
var Ta = "SelectArrow", bk = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = gs(n), s = $t(Ta, n), a = Wt(Ta, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(es, { ...o, ...r, ref: t }) : null;
  }
);
bk.displayName = Ta;
var xk = "SelectBubbleInput", Oh = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), s = oe(r, o), a = Er(t);
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
      G.select,
      {
        ...n,
        style: { ...cp, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Oh.displayName = xk;
function jh(e) {
  return e === "" || e === void 0;
}
function Ih(e) {
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
function Fh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = yk(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== n));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function yk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var wk = lh, Lh = dh, Ck = mh, Sk = ph, Nk = hh, $h = gh, Ek = yh, Rk = Ch, Wh = Nh, Bh = Rh, Tk = Th, Mk = Ph, Vh = kh, zh = Dh, Hh = Ah;
const Yh = wk, $_ = Rk, Gh = Ck, Gi = u.forwardRef(({ className: e, children: t, isLoading: n = !1, ...r }, o) => /* @__PURE__ */ l.jsxs(
  Lh,
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
        n && /* @__PURE__ */ l.jsx(or, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ l.jsx(Sk, { asChild: !0, children: /* @__PURE__ */ l.jsx(Pt, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Gi.displayName = Lh.displayName;
const Kh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Vh,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(Ev, { className: "h-4 w-4" })
  }
));
Kh.displayName = Vh.displayName;
const Uh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  zh,
  {
    ref: n,
    className: M(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ l.jsx(Pt, { className: "h-4 w-4" })
  }
));
Uh.displayName = zh.displayName;
const Ki = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ l.jsx(Nk, { children: /* @__PURE__ */ l.jsxs(
  $h,
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
      /* @__PURE__ */ l.jsx(Kh, {}),
      /* @__PURE__ */ l.jsx(
        Ek,
        {
          className: M(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ l.jsx(Uh, {})
    ]
  }
) }));
Ki.displayName = $h.displayName;
const Pk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Wh,
  {
    ref: n,
    className: M("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Pk.displayName = Wh.displayName;
const Mo = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ l.jsxs(
  Bh,
  {
    ref: r,
    className: M(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Mk, { children: /* @__PURE__ */ l.jsx(gr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l.jsx(Tk, { children: t })
    ]
  }
));
Mo.displayName = Bh.displayName;
const kk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Hh,
  {
    ref: n,
    className: M("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kk.displayName = Hh.displayName;
const W_ = ({
  name: e,
  label: t,
  placeholder: n,
  options: r,
  helpText: o,
  isLoading: s,
  ...a
}) => {
  const i = _n();
  return /* @__PURE__ */ l.jsx(
    $r,
    {
      control: i.control,
      name: e,
      render: ({ field: c }) => /* @__PURE__ */ l.jsxs(Wn, { children: [
        !!t && /* @__PURE__ */ l.jsx(Bn, { children: t }),
        /* @__PURE__ */ l.jsxs(
          Yh,
          {
            onValueChange: c.onChange,
            value: c.value,
            defaultValue: c.value,
            ...a,
            children: [
              /* @__PURE__ */ l.jsx(ls, { children: /* @__PURE__ */ l.jsx(Gi, { isLoading: s, children: /* @__PURE__ */ l.jsx(Gh, { placeholder: n }) }) }),
              /* @__PURE__ */ l.jsx(Ki, { children: r.map((d) => /* @__PURE__ */ l.jsx(Mo, { value: d.value, children: d.label }, d.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ l.jsx(ip, { children: o }),
        /* @__PURE__ */ l.jsx(Vn, {})
      ] })
    }
  );
};
var Dk = "Separator", gl = "horizontal", _k = ["horizontal", "vertical"], qh = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = gl, ...o } = e, s = Ak(r) ? r : gl, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    Fe.div,
    {
      "data-orientation": s,
      ...i,
      ...o,
      ref: t
    }
  );
});
qh.displayName = Dk;
function Ak(e) {
  return _k.includes(e);
}
var Xh = qh;
const Zh = u.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l.jsx(
    Xh,
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
Zh.displayName = Xh.displayName;
const B_ = Fo, V_ = Ka, z_ = jn, Ok = Lo, Qh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  An,
  {
    className: M(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Qh.displayName = An.displayName;
const jk = it(
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
), Ik = u.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ l.jsxs(Ok, { children: [
  /* @__PURE__ */ l.jsx(Qh, {}),
  /* @__PURE__ */ l.jsxs(
    On,
    {
      ref: o,
      className: M(jk({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsxs(jn, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ l.jsx(Oa, { className: "h-4 w-4" }),
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ik.displayName = On.displayName;
const Fk = ({
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
Fk.displayName = "SheetHeader";
const Lk = ({
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
Lk.displayName = "SheetFooter";
const $k = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xr,
  {
    ref: n,
    className: M("text-lg font-semibold text-foreground", e),
    ...t
  }
));
$k.displayName = xr.displayName;
const Wk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yr,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Wk.displayName = yr.displayName;
function Bk({
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
var vs = "Switch", [Vk] = Ne(vs), [zk, Hk] = Vk(vs), Jh = u.forwardRef(
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
    } = e, [p, g] = u.useState(null), v = oe(t, (w) => g(w)), h = u.useRef(!1), b = p ? f || !!p.closest("form") : !0, [x, y] = Ce({
      prop: o,
      defaultProp: s ?? !1,
      onChange: d,
      caller: vs
    });
    return /* @__PURE__ */ l.jsxs(zk, { scope: n, checked: x, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        G.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": a,
          "data-state": rg(x),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...m,
          ref: v,
          onClick: A(e.onClick, (w) => {
            y((S) => !S), b && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ l.jsx(
        ng,
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
Jh.displayName = vs;
var eg = "SwitchThumb", tg = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Hk(eg, n);
    return /* @__PURE__ */ l.jsx(
      G.span,
      {
        "data-state": rg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
tg.displayName = eg;
var Yk = "SwitchBubbleInput", ng = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = u.useRef(null), i = oe(a, s), c = Er(n), d = zo(t);
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
ng.displayName = Yk;
function rg(e) {
  return e ? "checked" : "unchecked";
}
var og = Jh, Gk = tg;
const Kk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  og,
  {
    className: M(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ l.jsx(
      Gk,
      {
        className: M(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Kk.displayName = og.displayName;
const Uk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ l.jsx(
  "table",
  {
    ref: n,
    className: M("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Uk.displayName = "Table";
const qk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "thead",
  {
    ref: n,
    className: M("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
qk.displayName = "TableHeader";
const Xk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "tbody",
  {
    ref: n,
    className: M("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Xk.displayName = "TableBody";
const Zk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Zk.displayName = "TableFooter";
const Qk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Qk.displayName = "TableRow";
const Jk = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Jk.displayName = "TableHead";
const eD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
eD.displayName = "TableCell";
const tD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "caption",
  {
    ref: n,
    className: M("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
tD.displayName = "TableCaption";
var bs = "Tabs", [nD] = Ne(bs, [
  Ft
]), sg = Ft(), [rD, Ui] = nD(bs), ag = u.forwardRef(
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
    } = e, f = xt(i), [m, p] = Ce({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: bs
    });
    return /* @__PURE__ */ l.jsx(
      rD,
      {
        scope: n,
        baseId: be(),
        value: m,
        onValueChange: p,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ l.jsx(
          G.div,
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
ag.displayName = bs;
var ig = "TabsList", cg = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ui(ig, n), a = sg(n);
    return /* @__PURE__ */ l.jsx(
      rs,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ l.jsx(
          G.div,
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
cg.displayName = ig;
var lg = "TabsTrigger", ug = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Ui(lg, n), i = sg(n), c = mg(a.baseId, r), d = pg(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ l.jsx(
      os,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ l.jsx(
          G.button,
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
            onMouseDown: A(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? a.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: A(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && a.onValueChange(r);
            }),
            onFocus: A(e.onFocus, () => {
              const m = a.activationMode !== "manual";
              !f && !o && m && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
ug.displayName = lg;
var dg = "TabsContent", fg = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Ui(dg, n), c = mg(i.baseId, r), d = pg(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ l.jsx(ve, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ l.jsx(
      G.div,
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
fg.displayName = dg;
function mg(e, t) {
  return `${e}-trigger-${t}`;
}
function pg(e, t) {
  return `${e}-content-${t}`;
}
var oD = ag, hg = cg, gg = ug, vg = fg;
const H_ = oD, sD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  hg,
  {
    ref: n,
    className: M(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
sD.displayName = hg.displayName;
const aD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  gg,
  {
    ref: n,
    className: M(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
aD.displayName = gg.displayName;
const iD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  vg,
  {
    ref: n,
    className: M(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
iD.displayName = vg.displayName;
const bg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
bg.displayName = "Textarea";
const cD = ({
  name: e,
  label: t,
  placeholder: n,
  ...r
}) => {
  const o = _n();
  return /* @__PURE__ */ l.jsx(
    $r,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ l.jsxs(Wn, { children: [
        !!t && /* @__PURE__ */ l.jsx(Bn, { children: t }),
        /* @__PURE__ */ l.jsx(ls, { children: /* @__PURE__ */ l.jsx(bg, { placeholder: n, ...r, ...s }) }),
        /* @__PURE__ */ l.jsx(Vn, {})
      ] })
    }
  );
};
cD.displayName = "TextareaForm";
var qi = "ToastProvider", [Xi, lD, uD] = on("Toast"), [xg] = Ne("Toast", [uD]), [dD, xs] = xg(qi), yg = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${qi}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l.jsx(Xi.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
    dD,
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
yg.displayName = qi;
var wg = "ToastViewport", fD = ["F8"], Ma = "toast.viewportPause", Pa = "toast.viewportResume", Cg = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = fD,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = xs(wg, n), i = lD(n), c = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = oe(t, m, a.onViewportChange), g = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
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
            const C = new CustomEvent(Pa);
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
          const S = w.ref.current, N = [S, ...ED(S)];
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
            const P = h({ tabbingDirection: C ? "backwards" : "forwards" }), k = P.findIndex((I) => I === N);
            Qs(P.slice(k + 1)) ? y.preventDefault() : C ? d.current?.focus() : f.current?.focus();
          }
        };
        return b.addEventListener("keydown", x), () => b.removeEventListener("keydown", x);
      }
    }, [i, h]), /* @__PURE__ */ l.jsxs(
      gx,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ l.jsx(
            ka,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const b = h({
                  tabbingDirection: "forwards"
                });
                Qs(b);
              }
            }
          ),
          /* @__PURE__ */ l.jsx(Xi.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(G.ol, { tabIndex: -1, ...s, ref: p }) }),
          v && /* @__PURE__ */ l.jsx(
            ka,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = h({
                  tabbingDirection: "backwards"
                });
                Qs(b);
              }
            }
          )
        ]
      }
    );
  }
);
Cg.displayName = wg;
var Sg = "ToastFocusProxy", ka = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = xs(Sg, n);
    return /* @__PURE__ */ l.jsx(
      us,
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
ka.displayName = Sg;
var Wr = "Toast", mD = "toast.swipeStart", pD = "toast.swipeMove", hD = "toast.swipeCancel", gD = "toast.swipeEnd", Ng = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = Ce({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: Wr
    });
    return /* @__PURE__ */ l.jsx(ve, { present: n || i, children: /* @__PURE__ */ l.jsx(
      xD,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: me(e.onPause),
        onResume: me(e.onResume),
        onSwipeStart: A(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: A(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: A(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: A(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), c(!1);
        })
      }
    ) });
  }
);
Ng.displayName = Wr;
var [vD, bD] = xg(Wr, {
  onClose() {
  }
}), xD = u.forwardRef(
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
    } = e, h = xs(Wr, n), [b, x] = u.useState(null), y = oe(t, (_) => x(_)), w = u.useRef(null), S = u.useRef(null), N = o || h.duration, C = u.useRef(0), R = u.useRef(N), E = u.useRef(0), { onToastAdd: P, onToastRemove: k } = h, I = me(() => {
      b?.contains(document.activeElement) && h.viewport?.focus(), a();
    }), Y = u.useCallback(
      (_) => {
        !_ || _ === 1 / 0 || (window.clearTimeout(E.current), C.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(I, _));
      },
      [I]
    );
    u.useEffect(() => {
      const _ = h.viewport;
      if (_) {
        const B = () => {
          Y(R.current), d?.();
        }, $ = () => {
          const X = (/* @__PURE__ */ new Date()).getTime() - C.current;
          R.current = R.current - X, window.clearTimeout(E.current), c?.();
        };
        return _.addEventListener(Ma, $), _.addEventListener(Pa, B), () => {
          _.removeEventListener(Ma, $), _.removeEventListener(Pa, B);
        };
      }
    }, [h.viewport, N, c, d, Y]), u.useEffect(() => {
      s && !h.isClosePausedRef.current && Y(N);
    }, [s, N, h.isClosePausedRef, Y]), u.useEffect(() => (P(), () => k()), [P, k]);
    const q = u.useMemo(() => b ? Dg(b) : null, [b]);
    return h.viewport ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      q && /* @__PURE__ */ l.jsx(
        yD,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: q
        }
      ),
      /* @__PURE__ */ l.jsx(vD, { scope: n, onClose: I, children: hr.createPortal(
        /* @__PURE__ */ l.jsx(Xi.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
          hx,
          {
            asChild: !0,
            onEscapeKeyDown: A(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || I(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ l.jsx(
              G.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...v,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: A(e.onKeyDown, (_) => {
                  _.key === "Escape" && (i?.(_.nativeEvent), _.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, I()));
                }),
                onPointerDown: A(e.onPointerDown, (_) => {
                  _.button === 0 && (w.current = { x: _.clientX, y: _.clientY });
                }),
                onPointerMove: A(e.onPointerMove, (_) => {
                  if (!w.current) return;
                  const B = _.clientX - w.current.x, $ = _.clientY - w.current.y, X = !!S.current, H = ["left", "right"].includes(h.swipeDirection), F = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, T = H ? F(0, B) : 0, z = H ? 0 : F(0, $), D = _.pointerType === "touch" ? 10 : 2, W = { x: T, y: z }, U = { originalEvent: _, delta: W };
                  X ? (S.current = W, no(pD, m, U, {
                    discrete: !1
                  })) : vl(W, h.swipeDirection, D) ? (S.current = W, no(mD, f, U, {
                    discrete: !1
                  }), _.target.setPointerCapture(_.pointerId)) : (Math.abs(B) > D || Math.abs($) > D) && (w.current = null);
                }),
                onPointerUp: A(e.onPointerUp, (_) => {
                  const B = S.current, $ = _.target;
                  if ($.hasPointerCapture(_.pointerId) && $.releasePointerCapture(_.pointerId), S.current = null, w.current = null, B) {
                    const X = _.currentTarget, H = { originalEvent: _, delta: B };
                    vl(B, h.swipeDirection, h.swipeThreshold) ? no(gD, g, H, {
                      discrete: !0
                    }) : no(
                      hD,
                      p,
                      H,
                      {
                        discrete: !0
                      }
                    ), X.addEventListener("click", (F) => F.preventDefault(), {
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
), yD = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = xs(Wr, t), [s, a] = u.useState(!1), [i, c] = u.useState(!1);
  return SD(() => a(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ l.jsx(an, { asChild: !0, children: /* @__PURE__ */ l.jsx(us, { ...r, children: s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, wD = "ToastTitle", Eg = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(G.div, { ...r, ref: t });
  }
);
Eg.displayName = wD;
var CD = "ToastDescription", Rg = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(G.div, { ...r, ref: t });
  }
);
Rg.displayName = CD;
var Tg = "ToastAction", Mg = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ l.jsx(kg, { altText: n, asChild: !0, children: /* @__PURE__ */ l.jsx(Zi, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Tg}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Mg.displayName = Tg;
var Pg = "ToastClose", Zi = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = bD(Pg, n);
    return /* @__PURE__ */ l.jsx(kg, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      G.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: A(e.onClick, o.onClose)
      }
    ) });
  }
);
Zi.displayName = Pg;
var kg = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ l.jsx(
    G.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Dg(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), ND(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Dg(r));
    }
  }), t;
}
function no(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? sr(o, s) : o.dispatchEvent(s);
}
var vl = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function SD(e = () => {
}) {
  const t = me(e);
  ge(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function ND(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ED(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qs(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var RD = yg, _g = Cg, Ag = Ng, Og = Eg, jg = Rg, Ig = Mg, Fg = Zi;
const TD = RD, MD = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, Lg = u.forwardRef(({ className: e, position: t = "bottom-right", ...n }, r) => /* @__PURE__ */ l.jsx(
  _g,
  {
    ref: r,
    className: M(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${MD[t]}`,
      e
    ),
    ...n
  }
));
Lg.displayName = _g.displayName;
const PD = it(
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
), $g = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ l.jsx(
  Ag,
  {
    ref: r,
    className: M(PD({ variant: t }), e),
    ...n
  }
));
$g.displayName = Ag.displayName;
const kD = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Ig,
  {
    ref: n,
    className: M(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
kD.displayName = Ig.displayName;
const Wg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Fg,
  {
    ref: n,
    className: M(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l.jsx(Oa, { className: "h-4 w-4" })
  }
));
Wg.displayName = Fg.displayName;
const Bg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Og,
  {
    ref: n,
    className: M("text-sm font-semibold", e),
    ...t
  }
));
Bg.displayName = Og.displayName;
const Vg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  jg,
  {
    ref: n,
    className: M("text-sm opacity-90", e),
    ...t
  }
));
Vg.displayName = jg.displayName;
const DD = 5, _D = 1e4;
let Js = 0;
function AD() {
  return Js = (Js + 1) % Number.MAX_SAFE_INTEGER, Js.toString();
}
const ea = /* @__PURE__ */ new Map(), bl = (e) => {
  if (ea.has(e))
    return;
  const t = setTimeout(() => {
    ea.delete(e), rr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, _D);
  ea.set(e, t);
}, OD = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, DD)
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
      return n ? bl(n) : e.toasts.forEach((r) => {
        bl(r.id);
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
}, lo = [];
let uo = { toasts: [] };
function rr(e) {
  uo = OD(uo, e), lo.forEach((t) => {
    t(uo);
  });
}
function jD({ ...e }) {
  const t = AD(), n = (o) => rr({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => rr({ type: "DISMISS_TOAST", toastId: t });
  return rr({
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
function ID() {
  const [e, t] = u.useState(uo);
  return u.useEffect(() => (lo.push(t), () => {
    const n = lo.indexOf(t);
    n > -1 && lo.splice(n, 1);
  }), [e]), {
    ...e,
    toast: jD,
    dismiss: (n) => rr({ type: "DISMISS_TOAST", toastId: n })
  };
}
function Y_() {
  const { toasts: e } = ID();
  return /* @__PURE__ */ l.jsxs(TD, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...s }) {
      return /* @__PURE__ */ l.jsxs($g, { ...s, className: "mt-2", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ l.jsx(Bg, { children: n }),
          r && /* @__PURE__ */ l.jsx(Vg, { children: r })
        ] }),
        o,
        /* @__PURE__ */ l.jsx(Wg, {})
      ] }, t);
    }),
    /* @__PURE__ */ l.jsx(Lg, {})
  ] });
}
var zg = "Toggle", Qi = u.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...s } = e, [a, i] = Ce({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: zg
  });
  return /* @__PURE__ */ l.jsx(
    G.button,
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
Qi.displayName = zg;
var Hg = Qi;
const Yg = it(
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
), FD = u.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ l.jsx(
  Hg,
  {
    ref: o,
    className: M(Yg({ variant: t, size: n, className: e })),
    ...r
  }
));
FD.displayName = Hg.displayName;
var Bt = "ToggleGroup", [Gg] = Ne(Bt, [
  Ft
]), Kg = Ft(), Ji = j.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ l.jsx(LD, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ l.jsx($D, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Bt}\``);
});
Ji.displayName = Bt;
var [Ug, qg] = Gg(Bt), LD = j.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Ce({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Bt
  });
  return /* @__PURE__ */ l.jsx(
    Ug,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: j.useMemo(() => a ? [a] : [], [a]),
      onItemActivate: i,
      onItemDeactivate: j.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ l.jsx(Xg, { ...s, ref: t })
    }
  );
}), $D = j.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Ce({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Bt
  }), c = j.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = j.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    Ug,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l.jsx(Xg, { ...s, ref: t })
    }
  );
});
Ji.displayName = Bt;
var [WD, BD] = Gg(Bt), Xg = j.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: s,
      dir: a,
      loop: i = !0,
      ...c
    } = e, d = Kg(n), f = xt(a), m = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ l.jsx(WD, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ l.jsx(
      rs,
      {
        asChild: !0,
        ...d,
        orientation: s,
        dir: f,
        loop: i,
        children: /* @__PURE__ */ l.jsx(G.div, { ...m, ref: t })
      }
    ) : /* @__PURE__ */ l.jsx(G.div, { ...m, ref: t }) });
  }
), Po = "ToggleGroupItem", Zg = j.forwardRef(
  (e, t) => {
    const n = qg(Po, e.__scopeToggleGroup), r = BD(Po, e.__scopeToggleGroup), o = Kg(e.__scopeToggleGroup), s = n.value.includes(e.value), a = r.disabled || e.disabled, i = { ...e, pressed: s, disabled: a }, c = j.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l.jsx(
      os,
      {
        asChild: !0,
        ...o,
        focusable: !a,
        active: s,
        ref: c,
        children: /* @__PURE__ */ l.jsx(xl, { ...i, ref: t })
      }
    ) : /* @__PURE__ */ l.jsx(xl, { ...i, ref: t });
  }
);
Zg.displayName = Po;
var xl = j.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, s = qg(Po, n), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, i = s.type === "single" ? a : void 0;
    return /* @__PURE__ */ l.jsx(
      Qi,
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
), Qg = Ji, Jg = Zg;
const ev = u.createContext({
  size: "default",
  variant: "default"
}), VD = u.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, s) => /* @__PURE__ */ l.jsx(
  Qg,
  {
    ref: s,
    className: M("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ l.jsx(ev.Provider, { value: { variant: t, size: n }, children: r })
  }
));
VD.displayName = Qg.displayName;
const zD = u.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, s) => {
  const a = u.useContext(ev);
  return /* @__PURE__ */ l.jsx(
    Jg,
    {
      ref: s,
      className: M(
        Yg({
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
zD.displayName = Jg.displayName;
var [ys] = Ne("Tooltip", [
  jt
]), ws = jt(), tv = "TooltipProvider", HD = 700, Da = "tooltip.open", [YD, ec] = ys(tv), nv = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = HD,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = u.useRef(!0), i = u.useRef(!1), c = u.useRef(0);
  return u.useEffect(() => {
    const d = c.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ l.jsx(
    YD,
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
nv.displayName = tv;
var pr = "Tooltip", [GD, Br] = ys(pr), rv = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = ec(pr, e.__scopeTooltip), d = ws(t), [f, m] = u.useState(null), p = be(), g = u.useRef(0), v = a ?? c.disableHoverableContent, h = i ?? c.delayDuration, b = u.useRef(!1), [x, y] = Ce({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (R) => {
      R ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Da))) : c.onClose(), s?.(R);
    },
    caller: pr
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
  }, []), /* @__PURE__ */ l.jsx(kr, { ...d, children: /* @__PURE__ */ l.jsx(
    GD,
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
rv.displayName = pr;
var _a = "TooltipTrigger", ov = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Br(_a, n), s = ec(_a, n), a = ws(n), i = u.useRef(null), c = oe(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ l.jsx(Dr, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      G.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: A(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: A(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: A(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
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
ov.displayName = _a;
var tc = "TooltipPortal", [KD, UD] = ys(tc, {
  forceMount: void 0
}), sv = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = Br(tc, t);
  return /* @__PURE__ */ l.jsx(KD, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ve, { present: n || s.open, children: /* @__PURE__ */ l.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
sv.displayName = tc;
var Dn = "TooltipContent", av = u.forwardRef(
  (e, t) => {
    const n = UD(Dn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = Br(Dn, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(ve, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(iv, { side: o, ...s, ref: t }) : /* @__PURE__ */ l.jsx(qD, { side: o, ...s, ref: t }) });
  }
), qD = u.forwardRef((e, t) => {
  const n = Br(Dn, e.__scopeTooltip), r = ec(Dn, e.__scopeTooltip), o = u.useRef(null), s = oe(t, o), [a, i] = u.useState(null), { trigger: c, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), g = u.useCallback(
    (v, h) => {
      const b = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = e_(x, b.getBoundingClientRect()), w = t_(x, y), S = n_(h.getBoundingClientRect()), N = o_([...w, ...S]);
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
        const b = h.target, x = { x: h.clientX, y: h.clientY }, y = c?.contains(b) || f?.contains(b), w = !r_(x, a);
        y ? p() : w && (p(), d());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, f, a, d, p]), /* @__PURE__ */ l.jsx(iv, { ...e, ref: s });
}), [XD, ZD] = ys(pr, { isInside: !1 }), QD = /* @__PURE__ */ Tl("TooltipContent"), iv = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = Br(Dn, n), d = ws(n), { onClose: f } = c;
    return u.useEffect(() => (document.addEventListener(Da, f), () => document.removeEventListener(Da, f)), [f]), u.useEffect(() => {
      if (c.trigger) {
        const m = (p) => {
          p.target?.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ l.jsx(
      Ot,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ l.jsxs(
          Jo,
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
              /* @__PURE__ */ l.jsx(QD, { children: r }),
              /* @__PURE__ */ l.jsx(XD, { scope: n, isInside: !0, children: /* @__PURE__ */ l.jsx(lp, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
av.displayName = Dn;
var cv = "TooltipArrow", JD = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ws(n);
    return ZD(
      cv,
      n
    ).isInside ? null : /* @__PURE__ */ l.jsx(es, { ...o, ...r, ref: t });
  }
);
JD.displayName = cv;
function e_(e, t) {
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
function t_(e, t, n = 5) {
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
function n_(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function r_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], d = i.x, f = i.y, m = c.x, p = c.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function o_(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), s_(t);
}
function s_(e) {
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
var a_ = nv, i_ = rv, c_ = ov, l_ = sv, lv = av;
const G_ = a_, K_ = i_, U_ = c_, u_ = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ l.jsx(l_, { children: /* @__PURE__ */ l.jsx(
  lv,
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
u_.displayName = lv.displayName;
export {
  g_ as Accordion,
  rx as AccordionContent,
  tx as AccordionItem,
  nx as AccordionTrigger,
  sx as Alert,
  ix as AlertDescription,
  v_ as AlertDialog,
  Ly as AlertDialogAction,
  $y as AlertDialogCancel,
  Ay as AlertDialogContent,
  Fy as AlertDialogDescription,
  jy as AlertDialogFooter,
  Oy as AlertDialogHeader,
  nd as AlertDialogOverlay,
  _y as AlertDialogPortal,
  Iy as AlertDialogTitle,
  b_ as AlertDialogTrigger,
  ax as AlertTitle,
  Wy as AsyncSelect,
  x_ as AsyncSelectForm,
  iw as Avatar,
  lw as AvatarFallback,
  cw as AvatarImage,
  _c as Badge,
  dw as Breadcrumb,
  vw as BreadcrumbEllipsis,
  mw as BreadcrumbItem,
  pw as BreadcrumbLink,
  fw as BreadcrumbList,
  hw as BreadcrumbPage,
  gw as BreadcrumbSeparator,
  wt as Button,
  Yd as Calendar,
  QN as CalendarDayButton,
  JN as Card,
  rE as CardContent,
  nE as CardDescription,
  oE as CardFooter,
  eE as CardHeader,
  tE as CardTitle,
  $E as Carousel,
  WE as CarouselContent,
  BE as CarouselItem,
  zE as CarouselNext,
  VE as CarouselPrevious,
  YE as ChartContainer,
  S_ as ChartLegend,
  UE as ChartLegendContent,
  GE as ChartStyle,
  C_ as ChartTooltip,
  KE as ChartTooltipContent,
  JE as Checkbox,
  e0 as Combobox,
  N_ as ComboboxForm,
  Tr as Command,
  E_ as CommandDialog,
  Uo as CommandEmpty,
  Mr as CommandGroup,
  Go as CommandInput,
  qt as CommandItem,
  Ko as CommandList,
  pf as CommandSeparator,
  E0 as CommandShortcut,
  R_ as DatePicker,
  lT as DateTimePicker,
  uT as Dialog,
  M_ as DialogClose,
  Jf as DialogContent,
  hT as DialogDescription,
  mT as DialogFooter,
  fT as DialogHeader,
  Qf as DialogOverlay,
  dT as DialogPortal,
  pT as DialogTitle,
  T_ as DialogTrigger,
  P_ as DropdownMenu,
  WM as DropdownMenuCheckboxItem,
  LM as DropdownMenuContent,
  D_ as DropdownMenuGroup,
  $M as DropdownMenuItem,
  VM as DropdownMenuLabel,
  __ as DropdownMenuPortal,
  O_ as DropdownMenuRadioGroup,
  BM as DropdownMenuRadioItem,
  zM as DropdownMenuSeparator,
  HM as DropdownMenuShortcut,
  A_ as DropdownMenuSub,
  FM as DropdownMenuSubContent,
  IM as DropdownMenuSubTrigger,
  k_ as DropdownMenuTrigger,
  j_ as Form,
  ls as FormControl,
  ip as FormDescription,
  $r as FormField,
  Wn as FormItem,
  Bn as FormLabel,
  Vn as FormMessage,
  I_ as Heading,
  _i as Input,
  F_ as InputForm,
  is as Label,
  xP as ListItem,
  yP as MaskedInput,
  CP as MultiSelect,
  fP as NavigationMenu,
  gP as NavigationMenuContent,
  bP as NavigationMenuIndicator,
  L_ as NavigationMenuItem,
  vP as NavigationMenuLink,
  mP as NavigationMenuList,
  hP as NavigationMenuTrigger,
  Op as NavigationMenuViewport,
  SP as Pagination,
  NP as PaginationContent,
  MP as PaginationEllipsis,
  EP as PaginationItem,
  $i as PaginationLink,
  TP as PaginationNext,
  RP as PaginationPrevious,
  Ar as Popover,
  $n as PopoverContent,
  Or as PopoverTrigger,
  $P as RadioGroup,
  WP as RadioGroupItem,
  ek as ScrollArea,
  ch as ScrollBar,
  Yh as Select,
  Ki as SelectContent,
  W_ as SelectForm,
  $_ as SelectGroup,
  Mo as SelectItem,
  Pk as SelectLabel,
  Uh as SelectScrollDownButton,
  Kh as SelectScrollUpButton,
  kk as SelectSeparator,
  Gi as SelectTrigger,
  Gh as SelectValue,
  Zh as Separator,
  B_ as Sheet,
  z_ as SheetClose,
  Ik as SheetContent,
  Wk as SheetDescription,
  Lk as SheetFooter,
  Fk as SheetHeader,
  Qh as SheetOverlay,
  Ok as SheetPortal,
  $k as SheetTitle,
  V_ as SheetTrigger,
  Bk as Skeleton,
  Kk as Switch,
  Uk as Table,
  Xk as TableBody,
  tD as TableCaption,
  eD as TableCell,
  Zk as TableFooter,
  Jk as TableHead,
  qk as TableHeader,
  Qk as TableRow,
  H_ as Tabs,
  iD as TabsContent,
  sD as TabsList,
  aD as TabsTrigger,
  bg as Textarea,
  cD as TextareaForm,
  Zf as TimePicker,
  io as TimePickerInput,
  $g as Toast,
  kD as ToastAction,
  Wg as ToastClose,
  Vg as ToastDescription,
  TD as ToastProvider,
  Bg as ToastTitle,
  Lg as ToastViewport,
  Y_ as Toaster,
  FD as Toggle,
  VD as ToggleGroup,
  zD as ToggleGroupItem,
  K_ as Tooltip,
  u_ as TooltipContent,
  G_ as TooltipProvider,
  U_ as TooltipTrigger,
  uw as badgeVariants,
  w_ as brazillianStates,
  Qt as buttonVariants,
  M as cn,
  y_ as mask,
  pP as navigationMenuTriggerStyle,
  OD as reducer,
  jD as toast,
  Yg as toggleVariants,
  cs as useFormField,
  ID as useToast
};
