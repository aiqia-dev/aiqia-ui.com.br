var tl = (t) => {
  throw TypeError(t);
};
var nl = (t, e, n) => e.has(t) || tl("Cannot " + n);
var He = (t, e, n) => (nl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rl = (t, e, n) => e.has(t) ? tl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), pa = (t, e, n, r) => (nl(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
import * as l from "react";
import X, { useState as at, useEffect as Wt, useCallback as qe, createContext as wg, useContext as yg, useRef as Tt, useLayoutEffect as Ru, useMemo as zo, useImperativeHandle as Eu } from "react";
import * as Fn from "react-dom";
import { ChevronDown as lr, ChevronsUpDown as Mu, Loader2 as Vr, Check as ro, MoreHorizontal as ku, ChevronRight as wi, ChevronLeftIcon as Cg, ChevronRightIcon as Sg, ChevronDownIcon as Pg, ArrowLeft as Tg, ArrowRight as Rg, Search as Eg, CalendarIcon as Mg, Clock as kg, Calendar as Dg, X as yi, Circle as Du, XCircle as ol, XIcon as Ng, Plus as _g, CheckIcon as sl, WandSparkles as Ig, ChevronLeft as Og, ChevronUp as Ag } from "lucide-react";
import { useFormContext as ln, FormProvider as jg, Controller as Fg } from "react-hook-form";
import { Link as Lg } from "react-router-dom";
import * as Ci from "recharts";
var Do = { exports: {} }, _r = {};
var al;
function $g() {
  if (al) return _r;
  al = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), e = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: t,
      type: r,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return _r.Fragment = e, _r.jsx = n, _r.jsxs = n, _r;
}
var Ir = {};
var il;
function Wg() {
  return il || (il = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === D ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case h:
          return "Fragment";
        case x:
          return "Profiler";
        case g:
          return "StrictMode";
        case P:
          return "Suspense";
        case S:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case b:
            return "Portal";
          case w:
            return (E.displayName || "Context") + ".Provider";
          case y:
            return (E._context.displayName || "Context") + ".Consumer";
          case C:
            var H = E.render;
            return E = E.displayName, E || (E = H.displayName || H.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case T:
            return H = E.displayName || null, H !== null ? H : t(E.type) || "Memo";
          case R:
            H = E._payload, E = E._init;
            try {
              return t(E(H));
            } catch {
            }
        }
      return null;
    }
    function e(E) {
      return "" + E;
    }
    function n(E) {
      try {
        e(E);
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var N = H.error, B = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return N.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), e(E);
      }
    }
    function r(E) {
      if (E === h) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === R)
        return "<...>";
      try {
        var H = t(E);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = I.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(E) {
      if (O.call(E, "key")) {
        var H = Object.getOwnPropertyDescriptor(E, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function i(E, H) {
      function N() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: N,
        configurable: !0
      });
    }
    function c() {
      var E = t(this.type);
      return j[E] || (j[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, H, N, B, q, L, Q, ee) {
      return N = L.ref, E = {
        $$typeof: v,
        type: E,
        key: H,
        props: L,
        _owner: q
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function m(E, H, N, B, q, L, Q, ee) {
      var F = H.children;
      if (F !== void 0)
        if (B)
          if ($(F)) {
            for (B = 0; B < F.length; B++)
              f(F[B]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(F);
      if (O.call(H, "key")) {
        F = t(E);
        var U = Object.keys(H).filter(function(ne) {
          return ne !== "key";
        });
        B = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", K[F + B] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          F,
          U,
          F
        ), K[F + B] = !0);
      }
      if (F = null, N !== void 0 && (n(N), F = "" + N), a(H) && (n(H.key), F = "" + H.key), "key" in H) {
        N = {};
        for (var ae in H)
          ae !== "key" && (N[ae] = H[ae]);
      } else N = H;
      return F && i(
        N,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        F,
        L,
        q,
        o(),
        N,
        Q,
        ee
      );
    }
    function f(E) {
      typeof E == "object" && E !== null && E.$$typeof === v && E._store && (E._store.validated = 1);
    }
    var p = X, v = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), g = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), y = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.suspense_list"), T = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), D = /* @__PURE__ */ Symbol.for("react.client.reference"), I = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, $ = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var W, j = {}, V = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), G = _(r(s)), K = {};
    Ir.Fragment = h, Ir.jsx = function(E, H, N, B, q) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        E,
        H,
        N,
        !1,
        B,
        q,
        L ? Error("react-stack-top-frame") : V,
        L ? _(r(E)) : G
      );
    }, Ir.jsxs = function(E, H, N, B, q) {
      var L = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        E,
        H,
        N,
        !0,
        B,
        q,
        L ? Error("react-stack-top-frame") : V,
        L ? _(r(E)) : G
      );
    };
  })()), Ir;
}
var cl;
function Bg() {
  return cl || (cl = 1, process.env.NODE_ENV === "production" ? Do.exports = $g() : Do.exports = Wg()), Do.exports;
}
var d = Bg(), Vg = Object.defineProperty, st = (t, e) => Vg(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Hg(t, e) {
  const n = l.createContext(e);
  n.displayName = t + "Context";
  const r = /* @__PURE__ */ st((s) => {
    const { children: a, ...i } = s, c = l.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d.jsx(n.Provider, { value: c, children: a });
  }, "Provider");
  r.displayName = t + "Provider";
  function o(s, a = {}) {
    const { optional: i = !1 } = a, c = l.useContext(n);
    if (c) return c;
    if (e !== void 0) return e;
    if (!i)
      throw new Error(`\`${s}\` must be used within \`${t}\``);
  }
  return st(o, "useContext"), [r, o];
}
st(Hg, "createContext");
// @__NO_SIDE_EFFECTS__
function Me(t, e = []) {
  let n = [];
  function r(s, a) {
    const i = l.createContext(a);
    i.displayName = s + "Context";
    const c = n.length;
    n = [...n, a];
    const u = /* @__PURE__ */ st((f) => {
      const { scope: p, children: v, ...b } = f, h = p?.[t]?.[c] || i, g = l.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ d.jsx(h.Provider, { value: g, children: v });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(f, p, v = {}) {
      const { optional: b = !1 } = v, h = p?.[t]?.[c] || i, g = l.useContext(h);
      if (g) return g;
      if (a !== void 0) return a;
      if (!b)
        throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return st(m, "useContext"), [u, m];
  }
  st(r, "createContext");
  const o = /* @__PURE__ */ st(() => {
    const s = n.map((a) => l.createContext(a));
    return /* @__PURE__ */ st(function(i) {
      const c = i?.[t] || s;
      return l.useMemo(
        () => ({ [`__scope${t}`]: { ...i, [t]: c } }),
        [i, c]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = t, [r, Nu(o, ...e)];
}
st(Me, "createContextScope");
function Nu(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = /* @__PURE__ */ st(() => {
    const r = t.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ st(function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: u }) => {
        const f = c(s)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return l.useMemo(() => ({ [`__scope${e.scopeName}`]: a }), [a]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = e.scopeName, n;
}
st(Nu, "composeContextScopes");
var zg = Object.defineProperty, Si = (t, e) => zg(t, "name", { value: e, configurable: !0 });
function Fa(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
Si(Fa, "setRef");
function Mn(...t) {
  return (e) => {
    let n = !1;
    const r = t.map((o) => {
      const s = Fa(o, e);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Fa(t[o], null);
        }
      };
  };
}
Si(Mn, "composeRefs");
function te(...t) {
  return l.useCallback(Mn(...t), t);
}
Si(te, "useComposedRefs");
var Yg = Object.defineProperty, pt = (t, e) => Yg(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function mt(t) {
  const e = l.forwardRef((n, r) => {
    let { children: o, ...s } = n, a = null, i = !1;
    const c = [];
    La(o) && typeof No == "function" && (o = No(o._payload)), l.Children.forEach(o, (p) => {
      if (Fu(p)) {
        i = !0;
        const v = p;
        let b = "child" in v.props ? v.props.child : v.props.children;
        La(b) && typeof No == "function" && (b = No(b._payload)), a = Gg(v, b), c.push(a?.props?.children);
      } else
        c.push(p);
    }), a ? a = l.cloneElement(a, void 0, c) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !i && l.Children.count(o) === 1 && l.isValidElement(o) && (a = o)
    );
    const u = a ? ju(a) : void 0, m = te(r, u);
    if (!a) {
      if (o || o === 0)
        throw new Error(
          i ? qg(t) : Kg(t)
        );
      return o;
    }
    const f = Au(s, a.props ?? {});
    return a.type !== l.Fragment && (f.ref = r ? m : u), l.cloneElement(a, f);
  });
  return e.displayName = `${t}.Slot`, e;
}
pt(mt, "createSlot");
var _u = /* @__PURE__ */ mt("Slot"), Iu = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Ou(t) {
  const e = /* @__PURE__ */ pt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return e.displayName = `${t}.Slottable`, e.__radixId = Iu, e;
}
pt(Ou, "createSlottable");
var Gg = /* @__PURE__ */ pt((t, e) => {
  if ("child" in t.props) {
    const n = t.props.child;
    return l.isValidElement(n) ? l.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
  }
  return l.isValidElement(e) ? e : null;
}, "getSlottableElementFromSlottable");
function Au(t, e) {
  const n = { ...e };
  for (const r in e) {
    const o = t[r], s = e[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
pt(Au, "mergeProps");
function ju(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
pt(ju, "getElementRef");
function Fu(t) {
  return l.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Iu;
}
pt(Fu, "isSlottable");
var Ug = /* @__PURE__ */ Symbol.for("react.lazy");
function La(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === Ug && "_payload" in t && Lu(t._payload);
}
pt(La, "isLazyComponent");
function Lu(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
pt(Lu, "isPromiseLike");
var Kg = /* @__PURE__ */ pt((t) => `${t} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), qg = /* @__PURE__ */ pt((t) => `${t} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), No = l[" use ".trim().toString()], Xg = Object.defineProperty, $e = (t, e) => Xg(t, "name", { value: e, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function un(t) {
  const e = t + "CollectionProvider", [n, r] = /* @__PURE__ */ Me(e), [o, s] = n(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = /* @__PURE__ */ $e((h) => {
    const { scope: g, children: x } = h, y = l.useRef(null), w = l.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: g, itemMap: w, collectionRef: y, children: x });
  }, "CollectionProvider");
  a.displayName = e;
  const i = t + "CollectionSlot", c = /* @__PURE__ */ mt(i), u = l.forwardRef(
    (h, g) => {
      const { scope: x, children: y } = h, w = s(i, x), C = te(g, w.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: C, children: y });
    }
  );
  u.displayName = i;
  const m = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ mt(m), v = l.forwardRef(
    (h, g) => {
      const { scope: x, children: y, ...w } = h, C = l.useRef(null), P = te(g, C), S = s(m, x);
      return l.useEffect(() => (S.itemMap.set(C, { ref: C, ...w }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ d.jsx(p, { [f]: "", ref: P, children: y });
    }
  );
  v.displayName = m;
  function b(h) {
    const g = s(t + "CollectionConsumer", h);
    return l.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (S, T) => w.indexOf(S.ref.current) - w.indexOf(T.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return $e(b, "useCollection"), [
    { Provider: a, Slot: u, ItemSlot: v },
    b,
    r
  ];
}
$e(un, "createCollection");
var ll = /* @__PURE__ */ new WeakMap(), je, et, ha = (et = class extends Map {
  constructor(n) {
    super(n);
    rl(this, je);
    pa(this, je, [...super.keys()]), ll.set(this, !0);
  }
  set(n, r) {
    return ll.get(this) && (this.has(n) ? He(this, je)[He(this, je).indexOf(n)] = n : He(this, je).push(n)), super.set(n, r), this;
  }
  insert(n, r, o) {
    const s = this.has(r), a = He(this, je).length, i = Pi(n);
    let c = i >= 0 ? i : a + i;
    const u = c < 0 || c >= a ? -1 : c;
    if (u === this.size || s && u === this.size - 1 || u === -1)
      return this.set(r, o), this;
    const m = this.size + (s ? 0 : 1);
    i < 0 && c++;
    const f = [...He(this, je)];
    let p, v = !1;
    for (let b = c; b < m; b++)
      if (c === b) {
        let h = f[b];
        f[b] === r && (h = f[b + 1]), s && this.delete(r), p = this.get(h), this.set(r, o);
      } else {
        !v && f[b - 1] === r && (v = !0);
        const h = f[v ? b : b - 1], g = p;
        p = this.get(h), this.delete(h), this.set(h, g);
      }
    return this;
  }
  with(n, r, o) {
    const s = new et(this);
    return s.insert(n, r, o), s;
  }
  before(n) {
    const r = He(this, je).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = He(this, je).indexOf(n);
    return s === -1 ? this : this.insert(s, r, o);
  }
  after(n) {
    let r = He(this, je).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = He(this, je).indexOf(n);
    return s === -1 ? this : this.insert(s + 1, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return pa(this, je, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && He(this, je).splice(He(this, je).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = Yo(He(this, je), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = Yo(He(this, je), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return He(this, je).indexOf(n);
  }
  keyAt(n) {
    return Yo(He(this, je), n);
  }
  from(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.at(s);
  }
  keyFrom(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.keyAt(s);
  }
  find(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return s;
      o++;
    }
  }
  findIndex(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return o;
      o++;
    }
    return -1;
  }
  filter(n, r) {
    const o = [];
    let s = 0;
    for (const a of this)
      Reflect.apply(n, r, [a, s, this]) && o.push(a), s++;
    return new et(o);
  }
  map(n, r) {
    const o = [];
    let s = 0;
    for (const a of this)
      o.push([a[0], Reflect.apply(n, r, [a, s, this])]), s++;
    return new et(o);
  }
  reduce(...n) {
    const [r, o] = n;
    let s = 0, a = o ?? this.at(0);
    for (const i of this)
      s === 0 && n.length === 1 ? a = i : a = Reflect.apply(r, this, [a, i, s, this]), s++;
    return a;
  }
  reduceRight(...n) {
    const [r, o] = n;
    let s = o ?? this.at(-1);
    for (let a = this.size - 1; a >= 0; a--) {
      const i = this.at(a);
      a === this.size - 1 && n.length === 1 ? s = i : s = Reflect.apply(r, this, [s, i, a, this]);
    }
    return s;
  }
  toSorted(n) {
    const r = [...this.entries()].sort(n);
    return new et(r);
  }
  toReversed() {
    const n = new et();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), s = this.get(o);
      n.set(o, s);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new et(r);
  }
  slice(n, r) {
    const o = new et();
    let s = this.size - 1;
    if (n === void 0)
      return o;
    n < 0 && (n = n + this.size), r !== void 0 && r > 0 && (s = r - 1);
    for (let a = n; a <= s; a++) {
      const i = this.keyAt(a), c = this.get(i);
      o.set(i, c);
    }
    return o;
  }
  every(n, r) {
    let o = 0;
    for (const s of this) {
      if (!Reflect.apply(n, r, [s, o, this]))
        return !1;
      o++;
    }
    return !0;
  }
  some(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return !0;
      o++;
    }
    return !1;
  }
}, je = new WeakMap(), $e(et, "OrderedDict"), et);
function Yo(t, e) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(t, e);
  const n = $u(t, e);
  return n === -1 ? void 0 : t[n];
}
$e(Yo, "at");
function $u(t, e) {
  const n = t.length, r = Pi(e), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
$e($u, "toSafeIndex");
function Pi(t) {
  return t !== t || t === 0 ? 0 : Math.trunc(t);
}
$e(Pi, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Qg(t) {
  const e = t + "CollectionProvider", [n, r] = /* @__PURE__ */ Me(e), [o, s] = n(
    e,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new ha(),
      setItemMap: /* @__PURE__ */ $e(() => {
      }, "setItemMap")
    }
  ), a = /* @__PURE__ */ $e(({ state: w, ...C }) => w ? /* @__PURE__ */ d.jsx(c, { ...C, state: w }) : /* @__PURE__ */ d.jsx(i, { ...C }), "CollectionProvider");
  a.displayName = e;
  const i = /* @__PURE__ */ $e((w) => {
    const C = g();
    return /* @__PURE__ */ d.jsx(c, { ...w, state: C });
  }, "CollectionInit");
  i.displayName = e + "Init";
  const c = /* @__PURE__ */ $e((w) => {
    const { scope: C, children: P, state: S } = w, T = l.useRef(null), [R, M] = l.useState(
      null
    ), D = te(T, M), [I, O] = S;
    return l.useEffect(() => {
      if (!R) return;
      const $ = Vu(() => {
      });
      return $.observe(R, {
        childList: !0,
        subtree: !0
      }), () => {
        $.disconnect();
      };
    }, [R]), /* @__PURE__ */ d.jsx(
      o,
      {
        scope: C,
        itemMap: I,
        setItemMap: O,
        collectionRef: D,
        collectionRefObject: T,
        collectionElement: R,
        children: P
      }
    );
  }, "CollectionProviderImpl");
  c.displayName = e + "Impl";
  const u = t + "CollectionSlot", m = /* @__PURE__ */ mt(u), f = l.forwardRef(
    (w, C) => {
      const { scope: P, children: S } = w, T = s(u, P), R = te(C, T.collectionRef);
      return /* @__PURE__ */ d.jsx(m, { ref: R, children: S });
    }
  );
  f.displayName = u;
  const p = t + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ mt(p), h = l.forwardRef(
    (w, C) => {
      const { scope: P, children: S, ...T } = w, R = l.useRef(null), [M, D] = l.useState(null), I = te(C, R, D), O = s(p, P), { setItemMap: $ } = O, _ = l.useRef(T);
      Wu(_.current, T) || (_.current = T);
      const W = _.current;
      return l.useEffect(() => {
        const j = W;
        return $((V) => M ? V.has(M) ? V.set(M, { ...j, element: M }).toSorted($a) : (V.set(M, { ...j, element: M }), V.toSorted($a)) : V), () => {
          $((V) => !M || !V.has(M) ? V : (V.delete(M), new ha(V)));
        };
      }, [M, W, $]), /* @__PURE__ */ d.jsx(b, { [v]: "", ref: I, children: S });
    }
  );
  h.displayName = p;
  function g() {
    return l.useState(new ha());
  }
  $e(g, "useInitCollection");
  function x(w) {
    const { itemMap: C } = s(t + "CollectionConsumer", w);
    return C;
  }
  return $e(x, "useCollection"), [
    { Provider: a, Slot: f, ItemSlot: h },
    {
      createCollectionScope: r,
      useCollection: x,
      useInitCollection: g
    }
  ];
}
$e(Qg, "createCollection");
function Wu(t, e) {
  if (t === e) return !0;
  if (typeof t != "object" || typeof e != "object" || t == null || e == null) return !1;
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(e, o) || t[o] !== e[o]) return !1;
  return !0;
}
$e(Wu, "shallowEqual");
function Bu(t, e) {
  return !!(e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING);
}
$e(Bu, "isElementPreceding");
function $a(t, e) {
  return !t[1].element || !e[1].element ? 0 : Bu(t[1].element, e[1].element) ? -1 : 1;
}
$e($a, "sortByDocumentPosition");
function Vu(t) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        t();
        return;
      }
  });
}
$e(Vu, "getChildListObserver");
var Zg = Object.defineProperty, mr = (t, e) => Zg(t, "name", { value: e, configurable: !0 }), Hu = !!(typeof window < "u" && window.document && window.document.createElement);
function A(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ mr(function(o) {
    if (t?.(o), n === !1 || !o || !o.defaultPrevented)
      return e?.(o);
  }, "handleEvent");
}
mr(A, "composeEventHandlers");
function Jg(t) {
  if (!Hu)
    throw new Error("Cannot access window outside of the DOM");
  return t?.ownerDocument?.defaultView ?? window;
}
mr(Jg, "getOwnerWindow");
function Wa(t) {
  if (!Hu)
    throw new Error("Cannot access document outside of the DOM");
  return t?.ownerDocument ?? document;
}
mr(Wa, "getOwnerDocument");
function zu(t, e = !1) {
  const { activeElement: n } = Wa(t);
  if (!n?.nodeName)
    return null;
  if (Yu(n) && n.contentDocument)
    return zu(n.contentDocument.body, e);
  if (e) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Wa(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
mr(zu, "getActiveElement");
function Yu(t) {
  return t.tagName === "IFRAME";
}
mr(Yu, "isFrame");
var we = globalThis?.document ? l.useLayoutEffect : () => {
}, ev = Object.defineProperty, tv = (t, e) => ev(t, "name", { value: e, configurable: !0 }), ul = l[" useEffectEvent ".trim().toString()], dl = l[" useInsertionEffect ".trim().toString()];
function Gu(t) {
  if (typeof ul == "function")
    return ul(t);
  const e = l.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof dl == "function" ? dl(() => {
    e.current = t;
  }) : we(() => {
    e.current = t;
  }), l.useMemo(() => ((...n) => e.current?.(...n)), []);
}
tv(Gu, "useEffectEvent");
var nv = Object.defineProperty, oo = (t, e) => nv(t, "name", { value: e, configurable: !0 }), rv = l[" useInsertionEffect ".trim().toString()] || we;
function Ae({
  prop: t,
  defaultProp: e,
  onChange: n = /* @__PURE__ */ oo(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, a] = Uu({
    defaultProp: e,
    onChange: n
  }), i = t !== void 0, c = i ? t : o, u = l.useCallback(
    (m) => {
      if (i) {
        const f = Ku(m) ? m(t) : m;
        f !== t && a.current?.(f);
      } else
        s(m);
    },
    [i, t, s, a]
  );
  return [c, u];
}
oo(Ae, "useControllableState");
function Uu({
  defaultProp: t,
  onChange: e
}) {
  const [n, r] = l.useState(t), o = l.useRef(n), s = l.useRef(e);
  return rv(() => {
    s.current = e;
  }, [e]), l.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
oo(Uu, "useUncontrolledState");
function Ku(t) {
  return typeof t == "function";
}
oo(Ku, "isFunction");
var fl = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function ov(t, e, n, r) {
  const { prop: o, defaultProp: s, onChange: a, caller: i } = e, c = o !== void 0, u = Gu(a), m = [{ ...n, state: s }];
  r && m.push(r);
  const [f, p] = l.useReducer(
    (g, x) => {
      if (x.type === fl)
        return { ...g, state: x.state };
      const y = t(g, x);
      return c && !Object.is(y.state, g.state) && u(y.state), y;
    },
    ...m
  ), v = f.state, b = l.useRef(v);
  l.useEffect(() => {
    b.current !== v && (b.current = v, c || u(v));
  }, [v, b, c]);
  const h = l.useMemo(() => o !== void 0 ? { ...f, state: o } : f, [f, o]);
  return l.useEffect(() => {
    c && !Object.is(o, f.state) && p({ type: fl, state: o });
  }, [o, f.state, c]), [h, p];
}
oo(ov, "useControllableStateReducer");
var sv = Object.defineProperty, av = (t, e) => sv(t, "name", { value: e, configurable: !0 }), iv = [
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
], z = iv.reduce((t, e) => {
  const n = /* @__PURE__ */ mt(`Primitive.${e}`), r = l.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : e;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${e}`, { ...t, [e]: r };
}, {});
function ur(t, e) {
  t && Fn.flushSync(() => t.dispatchEvent(e));
}
av(ur, "dispatchDiscreteCustomEvent");
var cv = Object.defineProperty, zt = (t, e) => cv(t, "name", { value: e, configurable: !0 });
function qu(t, e) {
  return l.useReducer((n, r) => e[n][r] ?? n, t);
}
zt(qu, "useStateMachine");
var Ee = /* @__PURE__ */ zt((t) => {
  const { present: e, children: n } = t, r = Xu(e), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), s = Qu(r.ref, Zu(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: s }) : null;
}, "Presence");
function Xu(t) {
  const [e, n] = l.useState(), r = l.useRef(null), o = l.useRef(t), s = l.useRef("none"), a = l.useRef(void 0), i = t ? "mounted" : "unmounted", [c, u] = qu(i, {
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
    c === "mounted" ? (s.current = a.current ?? rr(r.current), a.current = void 0) : s.current = "none";
  }, [c]), we(() => {
    const m = r.current, f = o.current;
    if (f !== t) {
      const v = s.current, b = rr(m);
      t ? (a.current = b, u("MOUNT")) : b === "none" || m?.display === "none" ? u("UNMOUNT") : u(f && v !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = t;
    }
  }, [t, u]), we(() => {
    if (e) {
      let m;
      const f = e.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ zt((b) => {
        const g = rr(r.current).includes(CSS.escape(b.animationName));
        if (b.target === e && g && (u("ANIMATION_END"), !o.current)) {
          const x = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", m = f.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = x);
          });
        }
      }, "handleAnimationEnd"), v = /* @__PURE__ */ zt((b) => {
        b.target === e && (s.current = rr(r.current));
      }, "handleAnimationStart");
      return e.addEventListener("animationstart", v), e.addEventListener("animationcancel", p), e.addEventListener("animationend", p), () => {
        f.clearTimeout(m), e.removeEventListener("animationstart", v), e.removeEventListener("animationcancel", p), e.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [e, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: l.useCallback((m) => {
      if (m) {
        const f = getComputedStyle(m);
        r.current = f, a.current = rr(f);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
zt(Xu, "usePresence");
function Ba(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
zt(Ba, "setRef");
function Qu(...t) {
  const e = l.useRef(t);
  return e.current = t, l.useCallback((n) => {
    const r = e.current;
    let o = !1;
    const s = r.map((a) => {
      const i = Ba(a, n);
      return !o && typeof i == "function" && (o = !0), i;
    });
    if (o)
      return () => {
        for (let a = 0; a < s.length; a++) {
          const i = s[a];
          typeof i == "function" ? i() : Ba(r[a], null);
        }
      };
  }, []);
}
zt(Qu, "useStableComposedRefs");
function rr(t) {
  return t?.animationName || "none";
}
zt(rr, "getAnimationName");
function Zu(t) {
  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
zt(Zu, "getElementRef");
var lv = Object.defineProperty, uv = (t, e) => lv(t, "name", { value: e, configurable: !0 }), dv = l[" useId ".trim().toString()] || (() => {
}), fv = 0;
function Re(t) {
  const [e, n] = l.useState(dv());
  return we(() => {
    t || n((r) => r ?? String(fv++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
uv(Re, "useId");
var mv = Object.defineProperty, so = (t, e) => mv(t, "name", { value: e, configurable: !0 }), Ti = "Collapsible", [pv, Ju] = /* @__PURE__ */ Me(Ti), [hv, Ri] = pv(Ti), gv = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ so(function(e, n) {
    const {
      __scopeCollapsible: r,
      open: o,
      defaultOpen: s,
      disabled: a,
      onOpenChange: i,
      ...c
    } = e, [u, m] = Ae({
      prop: o,
      defaultProp: s ?? !1,
      onChange: i,
      caller: Ti
    });
    return /* @__PURE__ */ d.jsx(
      hv,
      {
        scope: r,
        disabled: a,
        contentId: Re(),
        open: u,
        onOpenToggle: l.useCallback(() => m((f) => !f), [m]),
        children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            "data-state": hs(u),
            "data-disabled": a ? "" : void 0,
            ...c,
            ref: n
          }
        )
      }
    );
  }, "Collapsible")
), vv = "CollapsibleTrigger", bv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ so(function(e, n) {
    const { __scopeCollapsible: r, ...o } = e, s = Ri(vv, r);
    return /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open || !1,
        "data-state": hs(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...o,
        ref: n,
        onClick: A(e.onClick, s.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), ed = "CollapsibleContent", xv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ so(function(e, n) {
    const { forceMount: r, ...o } = e, s = Ri(ed, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(Ee, { present: r || s.open, children: ({ present: a }) => /* @__PURE__ */ d.jsx(wv, { ...o, ref: n, present: a }) });
  }, "CollapsibleContent")
), wv = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ so(function(e, n) {
  const { __scopeCollapsible: r, present: o, children: s, ...a } = e, i = Ri(ed, r), [c, u] = l.useState(o), m = l.useRef(null), f = te(n, m), p = l.useRef(0), v = p.current, b = l.useRef(0), h = b.current, g = i.open || c, x = l.useRef(g), y = l.useRef(void 0);
  return l.useEffect(() => {
    const w = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), we(() => {
    const w = m.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const C = w.getBoundingClientRect();
      p.current = C.height, b.current = C.width, x.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), u(o);
    }
  }, [i.open, o]), /* @__PURE__ */ d.jsx(
    z.div,
    {
      "data-state": hs(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !g,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": v ? `${v}px` : void 0,
        "--radix-collapsible-content-width": h ? `${h}px` : void 0,
        ...e.style
      },
      children: g && s
    }
  );
}, "CollapsibleContentImpl"));
function hs(t) {
  return t ? "open" : "closed";
}
so(hs, "getState");
var yv = gv, Cv = bv, Sv = xv, Pv = Object.defineProperty, Tv = (t, e) => Pv(t, "name", { value: e, configurable: !0 }), Rv = l.createContext(void 0);
function Dt(t) {
  const e = l.useContext(Rv);
  return t || e || "ltr";
}
Tv(Dt, "useDirection");
var Ev = Object.defineProperty, tt = (t, e) => Ev(t, "name", { value: e, configurable: !0 }), Nt = "Accordion", Mv = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Ei, kv, Dv] = /* @__PURE__ */ un(Nt), [gs, mO] = /* @__PURE__ */ Me(Nt, [
  Dv,
  Ju
]), Mi = Ju(), Nv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(e, n) {
    const { type: r, ...o } = e, s = o, a = o;
    return /* @__PURE__ */ d.jsx(Ei.Provider, { scope: e.__scopeAccordion, children: r === "multiple" ? /* @__PURE__ */ d.jsx(Av, { ...a, ref: n }) : /* @__PURE__ */ d.jsx(Ov, { ...s, ref: n }) });
  }, "Accordion")
), [td, _v] = gs(Nt), [nd, Iv] = gs(
  Nt,
  { collapsible: !1 }
), Ov = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(e, n) {
    const {
      value: r,
      defaultValue: o,
      onValueChange: s = /* @__PURE__ */ tt(() => {
      }, "onValueChange"),
      collapsible: a = !1,
      ...i
    } = e, [c, u] = Ae({
      prop: r,
      defaultProp: o ?? "",
      onChange: s,
      caller: Nt
    });
    return /* @__PURE__ */ d.jsx(
      td,
      {
        scope: e.__scopeAccordion,
        value: l.useMemo(() => c ? [c] : [], [c]),
        onItemOpen: u,
        onItemClose: l.useCallback(() => a && u(""), [a, u]),
        children: /* @__PURE__ */ d.jsx(nd, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ d.jsx(rd, { ...i, ref: n }) })
      }
    );
  }, "AccordionImplSingle")
), Av = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ tt(function(e, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: s = /* @__PURE__ */ tt(() => {
    }, "onValueChange"),
    ...a
  } = e, [i, c] = Ae({
    prop: r,
    defaultProp: o ?? [],
    onChange: s,
    caller: Nt
  }), u = l.useCallback(
    (f) => c((p = []) => [...p, f]),
    [c]
  ), m = l.useCallback(
    (f) => c((p = []) => p.filter((v) => v !== f)),
    [c]
  );
  return /* @__PURE__ */ d.jsx(
    td,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: u,
      onItemClose: m,
      children: /* @__PURE__ */ d.jsx(nd, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(rd, { ...a, ref: n }) })
    }
  );
}, "AccordionImplMultiple")), [jv, vs] = gs(Nt), rd = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ tt(function(e, n) {
    const { __scopeAccordion: r, disabled: o, dir: s, orientation: a = "vertical", ...i } = e, c = l.useRef(null), u = te(c, n), m = kv(r), p = Dt(s) === "ltr", v = A(e.onKeyDown, (b) => {
      if (!Mv.includes(b.key)) return;
      const h = b.target, g = m().filter((M) => !M.ref.current?.disabled), x = g.findIndex((M) => M.ref.current === h), y = g.length;
      if (x === -1) return;
      b.preventDefault();
      let w = x;
      const C = 0, P = y - 1, S = /* @__PURE__ */ tt(() => {
        w = x + 1, w > P && (w = C);
      }, "moveNext"), T = /* @__PURE__ */ tt(() => {
        w = x - 1, w < C && (w = P);
      }, "movePrev");
      switch (b.key) {
        case "Home":
          w = C;
          break;
        case "End":
          w = P;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? S() : T());
          break;
        case "ArrowDown":
          a === "vertical" && S();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? T() : S());
          break;
        case "ArrowUp":
          a === "vertical" && T();
          break;
      }
      const R = w % y;
      g[R].ref.current?.focus();
    });
    return /* @__PURE__ */ d.jsx(
      jv,
      {
        scope: r,
        disabled: o,
        direction: s,
        orientation: a,
        children: /* @__PURE__ */ d.jsx(Ei.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            ...i,
            "data-orientation": a,
            ref: u,
            onKeyDown: o ? void 0 : v
          }
        ) })
      }
    );
  }, "AccordionImpl")
), Va = "AccordionItem", [Fv, ki] = gs(Va), Lv = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ tt(function(e, n) {
    const { __scopeAccordion: r, value: o, ...s } = e, a = vs(Va, r), i = _v(Va, r), c = Mi(r), u = Re(), m = o && i.value.includes(o) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ d.jsx(
      Fv,
      {
        scope: r,
        open: m,
        disabled: f,
        triggerId: u,
        children: /* @__PURE__ */ d.jsx(
          yv,
          {
            "data-orientation": a.orientation,
            "data-state": Di(m),
            ...c,
            ...s,
            ref: n,
            disabled: f,
            open: m,
            onOpenChange: (p) => {
              p ? i.onItemOpen(o) : i.onItemClose(o);
            }
          }
        )
      }
    );
  }, "AccordionItem")
), $v = "AccordionHeader", Wv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(e, n) {
    const { __scopeAccordion: r, ...o } = e, s = vs(Nt, r), a = ki($v, r);
    return /* @__PURE__ */ d.jsx(
      z.h3,
      {
        "data-orientation": s.orientation,
        "data-state": Di(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "AccordionHeader")
), ml = "AccordionTrigger", Bv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(e, n) {
    const { __scopeAccordion: r, ...o } = e, s = vs(Nt, r), a = ki(ml, r), i = Iv(ml, r), c = Mi(r);
    return /* @__PURE__ */ d.jsx(Ei.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
      Cv,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": s.orientation,
        id: a.triggerId,
        ...c,
        ...o,
        ref: n
      }
    ) });
  }, "AccordionTrigger")
), Vv = "AccordionContent", Hv = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ tt(function(e, n) {
    const { __scopeAccordion: r, ...o } = e, s = vs(Nt, r), a = ki(Vv, r), i = Mi(r);
    return /* @__PURE__ */ d.jsx(
      Sv,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": s.orientation,
        ...i,
        ...o,
        ref: n,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }, "AccordionContent")
);
function Di(t) {
  return t ? "open" : "closed";
}
tt(Di, "getState");
var zv = Nv, Yv = Lv, Gv = Wv, od = Bv, sd = Hv;
function ad(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (e = 0; e < o; e++) t[e] && (n = ad(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function id() {
  for (var t, e, n = 0, r = "", o = arguments.length; n < o; n++) (t = arguments[n]) && (e = ad(t)) && (r && (r += " "), r += e);
  return r;
}
const Uv = (t, e) => {
  const n = new Array(t.length + e.length);
  for (let r = 0; r < t.length; r++)
    n[r] = t[r];
  for (let r = 0; r < e.length; r++)
    n[t.length + r] = e[r];
  return n;
}, Kv = (t, e) => ({
  classGroupId: t,
  validator: e
}), cd = (t = /* @__PURE__ */ new Map(), e = null, n) => ({
  nextPart: t,
  validators: e,
  classGroupId: n
}), es = "-", pl = [], qv = "arbitrary..", Xv = (t) => {
  const e = Zv(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Qv(a);
      const i = a.split(es), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ld(i, c, e);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = r[a], u = n[a];
        return c ? u ? Uv(u, c) : c : u || pl;
      }
      return n[a] || pl;
    }
  };
}, ld = (t, e, n) => {
  if (t.length - e === 0)
    return n.classGroupId;
  const o = t[e], s = n.nextPart.get(o);
  if (s) {
    const u = ld(t, e + 1, s);
    if (u) return u;
  }
  const a = n.validators;
  if (a === null)
    return;
  const i = e === 0 ? t.join(es) : t.slice(e).join(es), c = a.length;
  for (let u = 0; u < c; u++) {
    const m = a[u];
    if (m.validator(i))
      return m.classGroupId;
  }
}, Qv = (t) => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = t.slice(1, -1), n = e.indexOf(":"), r = e.slice(0, n);
  return r ? qv + r : void 0;
})(), Zv = (t) => {
  const {
    theme: e,
    classGroups: n
  } = t;
  return Jv(n, e);
}, Jv = (t, e) => {
  const n = cd();
  for (const r in t) {
    const o = t[r];
    Ni(o, n, r, e);
  }
  return n;
}, Ni = (t, e, n, r) => {
  const o = t.length;
  for (let s = 0; s < o; s++) {
    const a = t[s];
    eb(a, e, n, r);
  }
}, eb = (t, e, n, r) => {
  if (typeof t == "string") {
    tb(t, e, n);
    return;
  }
  if (typeof t == "function") {
    nb(t, e, n, r);
    return;
  }
  rb(t, e, n, r);
}, tb = (t, e, n) => {
  const r = t === "" ? e : ud(e, t);
  r.classGroupId = n;
}, nb = (t, e, n, r) => {
  if (ob(t)) {
    Ni(t(r), e, n, r);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(Kv(n, t));
}, rb = (t, e, n, r) => {
  const o = Object.entries(t), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    Ni(c, ud(e, i), n, r);
  }
}, ud = (t, e) => {
  let n = t;
  const r = e.split(es), o = r.length;
  for (let s = 0; s < o; s++) {
    const a = r[s];
    let i = n.nextPart.get(a);
    i || (i = cd(), n.nextPart.set(a, i)), n = i;
  }
  return n;
}, ob = (t) => "isThemeGetter" in t && t.isThemeGetter === !0, sb = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    n[s] = a, e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ Object.create(null));
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
}, Ha = "!", hl = ":", ab = [], gl = (t, e, n, r, o) => ({
  modifiers: t,
  hasImportantModifier: e,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), ib = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: n
  } = t;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, u;
    const m = o.length;
    for (let h = 0; h < m; h++) {
      const g = o[h];
      if (a === 0 && i === 0) {
        if (g === hl) {
          s.push(o.slice(c, h)), c = h + 1;
          continue;
        }
        if (g === "/") {
          u = h;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? i++ : g === ")" && i--;
    }
    const f = s.length === 0 ? o : o.slice(c);
    let p = f, v = !1;
    f.endsWith(Ha) ? (p = f.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Ha) && (p = f.slice(1), v = !0)
    );
    const b = u && u > c ? u - c : void 0;
    return gl(s, v, p, b);
  };
  if (e) {
    const o = e + hl, s = r;
    r = (a) => a.startsWith(o) ? s(a.slice(o.length)) : gl(ab, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, cb = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.orderSensitiveModifiers.forEach((n, r) => {
    e.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], i = a[0] === "[", c = e.has(a);
      i || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, lb = (t) => ({
  cache: sb(t.cacheSize),
  parseClassName: ib(t),
  sortModifiers: cb(t),
  postfixLookupClassGroupIds: ub(t),
  ...Xv(t)
}), ub = (t) => {
  const e = /* @__PURE__ */ Object.create(null), n = t.postfixLookupClassGroups;
  if (n)
    for (let r = 0; r < n.length; r++)
      e[n[r]] = !0;
  return e;
}, db = /\s+/, fb = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s,
    postfixLookupClassGroupIds: a
  } = e, i = [], c = t.trim().split(db);
  let u = "";
  for (let m = c.length - 1; m >= 0; m -= 1) {
    const f = c[m], {
      isExternal: p,
      modifiers: v,
      hasImportantModifier: b,
      baseClassName: h,
      maybePostfixModifierPosition: g
    } = n(f);
    if (p) {
      u = f + (u.length > 0 ? " " + u : u);
      continue;
    }
    let x = !!g, y;
    if (x) {
      const T = h.substring(0, g);
      y = r(T);
      const R = y && a[y] ? r(h) : void 0;
      R && R !== y && (y = R, x = !1);
    } else
      y = r(h);
    if (!y) {
      if (!x) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = r(h), !y) {
        u = f + (u.length > 0 ? " " + u : u);
        continue;
      }
      x = !1;
    }
    const w = v.length === 0 ? "" : v.length === 1 ? v[0] : s(v).join(":"), C = b ? w + Ha : w, P = C + y;
    if (i.indexOf(P) > -1)
      continue;
    i.push(P);
    const S = o(y, x);
    for (let T = 0; T < S.length; ++T) {
      const R = S[T];
      i.push(C + R);
    }
    u = f + (u.length > 0 ? " " + u : u);
  }
  return u;
}, mb = (...t) => {
  let e = 0, n, r, o = "";
  for (; e < t.length; )
    (n = t[e++]) && (r = dd(n)) && (o && (o += " "), o += r);
  return o;
}, dd = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = dd(t[r])) && (n && (n += " "), n += e);
  return n;
}, pb = (t, ...e) => {
  let n, r, o, s;
  const a = (c) => {
    const u = e.reduce((m, f) => f(m), t());
    return n = lb(u), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }, i = (c) => {
    const u = r(c);
    if (u)
      return u;
    const m = fb(c, n);
    return o(c, m), m;
  };
  return s = a, (...c) => s(mb(...c));
}, hb = [], Fe = (t) => {
  const e = (n) => n[t] || hb;
  return e.isThemeGetter = !0, e;
}, fd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, md = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gb = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, vb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, xb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, wb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, en = (t) => gb.test(t), ce = (t) => !!t && !Number.isNaN(Number(t)), bt = (t) => !!t && Number.isInteger(Number(t)), ga = (t) => t.endsWith("%") && ce(t.slice(0, -1)), At = (t) => vb.test(t), pd = () => !0, Cb = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  bb.test(t) && !xb.test(t)
), _i = () => !1, Sb = (t) => wb.test(t), Pb = (t) => yb.test(t), Tb = (t) => !Z(t) && !J(t), Rb = (t) => t.startsWith("@container") && (t[10] === "/" && t[11] !== void 0 || t[11] === "s" && t[16] !== void 0 && t.startsWith("-size/", 10) || t[11] === "n" && t[18] !== void 0 && t.startsWith("-normal/", 10)), Eb = (t) => dn(t, vd, _i), Z = (t) => fd.test(t), Cn = (t) => dn(t, bd, Cb), vl = (t) => dn(t, Ab, ce), Mb = (t) => dn(t, wd, pd), kb = (t) => dn(t, xd, _i), bl = (t) => dn(t, hd, _i), Db = (t) => dn(t, gd, Pb), _o = (t) => dn(t, yd, Sb), J = (t) => md.test(t), Or = (t) => Ln(t, bd), Nb = (t) => Ln(t, xd), xl = (t) => Ln(t, hd), _b = (t) => Ln(t, vd), Ib = (t) => Ln(t, gd), Io = (t) => Ln(t, yd, !0), Ob = (t) => Ln(t, wd, !0), dn = (t, e, n) => {
  const r = fd.exec(t);
  return r ? r[1] ? e(r[1]) : n(r[2]) : !1;
}, Ln = (t, e, n = !1) => {
  const r = md.exec(t);
  return r ? r[1] ? e(r[1]) : n : !1;
}, hd = (t) => t === "position" || t === "percentage", gd = (t) => t === "image" || t === "url", vd = (t) => t === "length" || t === "size" || t === "bg-size", bd = (t) => t === "length", Ab = (t) => t === "number", xd = (t) => t === "family-name", wd = (t) => t === "number" || t === "weight", yd = (t) => t === "shadow", jb = () => {
  const t = Fe("color"), e = Fe("font"), n = Fe("text"), r = Fe("font-weight"), o = Fe("tracking"), s = Fe("leading"), a = Fe("breakpoint"), i = Fe("container"), c = Fe("spacing"), u = Fe("radius"), m = Fe("shadow"), f = Fe("inset-shadow"), p = Fe("text-shadow"), v = Fe("drop-shadow"), b = Fe("blur"), h = Fe("perspective"), g = Fe("aspect"), x = Fe("ease"), y = Fe("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], P = () => [...C(), J, Z], S = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], R = () => [J, Z, c], M = () => [en, "full", "auto", ...R()], D = () => [bt, "none", "subgrid", J, Z], I = () => ["auto", {
    span: ["full", bt, J, Z]
  }, bt, J, Z], O = () => [bt, "auto", J, Z], $ = () => ["auto", "min", "max", "fr", J, Z], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], j = () => ["auto", ...R()], V = () => [en, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], G = () => [en, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...R()], K = () => [en, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...R()], E = () => [t, J, Z], H = () => [...C(), xl, bl, {
    position: [J, Z]
  }], N = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", _b, Eb, {
    size: [J, Z]
  }], q = () => [ga, Or, Cn], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    J,
    Z
  ], Q = () => ["", ce, Or, Cn], ee = () => ["solid", "dashed", "dotted", "double"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [ce, ga, xl, bl], ae = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    J,
    Z
  ], ne = () => ["none", ce, J, Z], Y = () => ["none", ce, J, Z], oe = () => [ce, J, Z], le = () => [en, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [At],
      breakpoint: [At],
      color: [pd],
      container: [At],
      "drop-shadow": [At],
      ease: ["in", "out", "in-out"],
      font: [Tb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [At],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [At],
      shadow: [At],
      spacing: ["px", ce],
      text: [At],
      "text-shadow": [At],
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
        aspect: ["auto", "square", en, Z, J, g]
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
        "@container": ["", "normal", "size", J, Z]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Rb],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ce, Z, J, i]
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
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        inset: M()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": M(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: M()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": M(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: M()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": M()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
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
        z: [bt, "auto", J, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [en, "full", "auto", i, ...R()]
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
        flex: [ce, en, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, J, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, J, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [bt, "first", "last", "none", J, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
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
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
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
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
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
        justify: [..._(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
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
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
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
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
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
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: R()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: R()
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
        m: j()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: j()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: j()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: j()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: j()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: j()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: j()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: j()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: j()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: j()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: j()
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
        size: V()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...G()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...G()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...G()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...K()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...K()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...K()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...V()]
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
          ...V()
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
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Or, Cn]
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
        font: [r, Ob, Mb]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ga, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nb, kb, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [Z]
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
        "line-clamp": [ce, "none", J, vl]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", J, Cn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", J, Z]
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
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [bt, J, Z]
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
        bg: H()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: N()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: B()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, bt, J, Z],
          radial: ["", J, Z],
          conic: [bt, J, Z]
        }, Ib, Db]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: q()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: q()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: q()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
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
        border: Q()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Q()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Q()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Q()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Q()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Q()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Q()
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
        "divide-y": Q()
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
        border: [...ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": E()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ee(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, J, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Or, Cn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          Io,
          _o
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Io, _o]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Q()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ce, Cn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, Io, _o]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, J, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-conic": [ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: H()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: N()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: B()
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
        blur: ae()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, J, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, J, Z]
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
          Io,
          _o
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, J, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, J, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, J, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, J, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, J, Z]
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
        "backdrop-blur": ae()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, J, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, J, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, J, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, J, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, J, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, J, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, J, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, J, Z]
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
        duration: [ce, "initial", J, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, J, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, J, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, J, Z]
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
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Y()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Y()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Y()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Y()
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
        skew: oe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": oe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": oe()
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
        origin: P()
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
        translate: le()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": le()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": le()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": le()
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
        zoom: [bt, J, Z]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: E()
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
        caret: E()
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
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": E()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": E()
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": R()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": R()
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
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": R()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": R()
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
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Or, Cn, vl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, Fb = /* @__PURE__ */ pb(jb);
function k(...t) {
  return Fb(id(t));
}
const pO = zv, Lb = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Yv,
  {
    ref: n,
    className: k("border-b", t),
    ...e
  }
));
Lb.displayName = "AccordionItem";
const $b = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsx(Gv, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  od,
  {
    ref: r,
    className: k(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...n,
    children: [
      e,
      /* @__PURE__ */ d.jsx(lr, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
$b.displayName = od.displayName;
const Wb = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsx(
  sd,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ d.jsx("div", { className: k("pb-4 pt-0", t), children: e })
  }
));
Wb.displayName = sd.displayName;
const wl = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, yl = id, _t = (t, e) => (n) => {
  var r;
  if (e?.variants == null) return yl(t, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = e, a = Object.keys(o).map((u) => {
    const m = n?.[u], f = s?.[u];
    if (m === null) return null;
    const p = wl(m) || wl(f);
    return o[u][p];
  }), i = n && Object.entries(n).reduce((u, m) => {
    let [f, p] = m;
    return p === void 0 || (u[f] = p), u;
  }, {}), c = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, m) => {
    let { class: f, className: p, ...v } = m;
    return Object.entries(v).every((b) => {
      let [h, g] = b;
      return Array.isArray(g) ? g.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === g;
    }) ? [
      ...u,
      f,
      p
    ] : u;
  }, []);
  return yl(t, a, c, n?.class, n?.className);
}, Bb = _t(
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
), Vb = l.forwardRef(({ className: t, variant: e, ...n }, r) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: k(Bb({ variant: e }), t),
    ...n
  }
));
Vb.displayName = "Alert";
const Hb = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "h5",
  {
    ref: n,
    className: k("mb-1 font-medium leading-none tracking-tight", t),
    ...e
  }
));
Hb.displayName = "AlertTitle";
const zb = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k("text-sm [&_p]:leading-relaxed", t),
    ...e
  }
));
zb.displayName = "AlertDescription";
var Yb = Object.defineProperty, Gb = (t, e) => Yb(t, "name", { value: e, configurable: !0 });
function ge(t) {
  const e = l.useRef(t);
  return l.useEffect(() => {
    e.current = t;
  }), l.useMemo(() => ((...n) => e.current?.(...n)), []);
}
Gb(ge, "useCallbackRef");
var Ub = Object.defineProperty, Le = (t, e) => Ub(t, "name", { value: e, configurable: !0 }), za = "dismissableLayer.update", Kb = "dismissableLayer.pointerDownOutside", qb = "dismissableLayer.focusOutside", Cl, Ii = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), $n = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Le(function(e, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      onFocusOutside: i,
      onInteractOutside: c,
      onDismiss: u,
      ...m
    } = e, f = l.useContext(Ii), [p, v] = l.useState(null), b = p?.ownerDocument ?? globalThis?.document, [, h] = l.useState({}), g = te(n, v), x = Array.from(f.layers), [y] = [
      ...f.layersWithOutsidePointerEventsDisabled
    ].slice(-1), w = y ? x.indexOf(y) : -1, C = p ? x.indexOf(p) : -1, P = f.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= w, T = l.useRef(!1), R = Sd(
      (O) => {
        a?.(O), c?.(O), O.defaultPrevented || u?.();
      },
      {
        ownerDocument: b,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: T,
        dismissableSurfaces: f.dismissableSurfaces,
        shouldHandlePointerDownOutside: l.useCallback(
          (O) => {
            if (!(O instanceof Node))
              return !1;
            const $ = [...f.branches].some(
              (_) => _.contains(O)
            );
            return S && !$;
          },
          [f.branches, S]
        )
      }
    ), M = Pd((O) => {
      if (o && T.current)
        return;
      const $ = O.target;
      [...f.branches].some((W) => W.contains($)) || (i?.(O), c?.(O), O.defaultPrevented || u?.());
    }, b), D = p ? C === x.length - 1 : !1, I = ge((O) => {
      O.key === "Escape" && (s?.(O), !O.defaultPrevented && u && (O.preventDefault(), u()));
    });
    return l.useEffect(() => {
      if (D)
        return b.addEventListener("keydown", I, { capture: !0 }), () => b.removeEventListener("keydown", I, { capture: !0 });
    }, [b, D, I]), l.useEffect(() => {
      if (p)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Cl = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), Ya(), () => {
          r && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (b.body.style.pointerEvents = Cl));
        };
    }, [p, b, r, f]), l.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), Ya());
    }, [p, f]), l.useEffect(() => {
      const O = /* @__PURE__ */ Le(() => h({}), "handleUpdate");
      return document.addEventListener(za, O), () => document.removeEventListener(za, O);
    }, []), /* @__PURE__ */ d.jsx(
      z.div,
      {
        ...m,
        ref: g,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: A(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), Xb = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Le(function(e, n) {
  const r = l.useContext(Ii), o = l.useRef(null), s = te(n, o);
  return l.useEffect(() => {
    const a = o.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(z.div, { ...e, ref: s });
}, "DismissableLayerBranch"));
function Cd() {
  const t = l.useContext(Ii), [e, n] = l.useState(null);
  return l.useEffect(() => {
    if (e)
      return t.dismissableSurfaces.add(e), () => {
        t.dismissableSurfaces.delete(e);
      };
  }, [e, t.dismissableSurfaces]), n;
}
Le(Cd, "useDismissableLayerSurface");
var Qb = /* @__PURE__ */ Le(() => !0, "IS_TRUE");
function Sd(t, e) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: a = Qb
  } = e, i = ge(t), c = l.useRef(!1), u = l.useRef(!1), m = l.useRef(/* @__PURE__ */ new Map()), f = l.useRef(() => {
  });
  return l.useEffect(() => {
    function p() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    Le(p, "resetOutsideInteraction");
    function v() {
      return Array.from(m.current.values()).some(Boolean);
    }
    Le(v, "isOutsideInteractionIntercepted");
    function b(w) {
      if (!u.current)
        return;
      const C = w.target;
      C instanceof Node && [...s].some((S) => S.contains(C)) || m.current.set(w.type, !0), w.type === "click" && window.setTimeout(() => {
        u.current && f.current();
      }, 0);
    }
    Le(b, "handleInteractionCapture");
    function h(w) {
      u.current && m.current.set(w.type, !1);
    }
    Le(h, "handleInteractionBubble");
    const g = /* @__PURE__ */ Le((w) => {
      if (w.target && !c.current) {
        let C = function() {
          n.removeEventListener("click", f.current);
          const S = v();
          p(), S || Oi(
            Kb,
            i,
            P,
            { discrete: !0 }
          );
        };
        if (Le(C, "handleAndDispatchPointerDownOutsideEvent"), !a(w.target)) {
          n.removeEventListener("click", f.current), p(), c.current = !1;
          return;
        }
        const P = { originalEvent: w };
        u.current = !0, o.current = r && w.button === 0, m.current.clear(), !r || w.button !== 0 ? C() : (n.removeEventListener("click", f.current), f.current = C, n.addEventListener("click", f.current, { once: !0 }));
      } else
        n.removeEventListener("click", f.current), p();
      c.current = !1;
    }, "handlePointerDown"), x = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const w of x)
      n.addEventListener(w, b, !0), n.addEventListener(w, h);
    const y = window.setTimeout(() => {
      n.addEventListener("pointerdown", g);
    }, 0);
    return () => {
      window.clearTimeout(y), n.removeEventListener("pointerdown", g), n.removeEventListener("click", f.current);
      for (const w of x)
        n.removeEventListener(w, b, !0), n.removeEventListener(w, h);
    };
  }, [
    n,
    i,
    r,
    o,
    s,
    a
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Le(() => c.current = !0, "onPointerDownCapture")
  };
}
Le(Sd, "usePointerDownOutside");
function Pd(t, e = globalThis?.document) {
  const n = ge(t), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = /* @__PURE__ */ Le((s) => {
      s.target && !r.current && Oi(qb, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return e.addEventListener("focusin", o), () => e.removeEventListener("focusin", o);
  }, [e, n]), {
    onFocusCapture: /* @__PURE__ */ Le(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Le(() => r.current = !1, "onBlurCapture")
  };
}
Le(Pd, "useFocusOutside");
function Ya() {
  const t = new CustomEvent(za);
  document.dispatchEvent(t);
}
Le(Ya, "dispatchUpdate");
function Oi(t, e, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
  e && o.addEventListener(t, e, { once: !0 }), r ? ur(o, s) : o.dispatchEvent(s);
}
Le(Oi, "handleAndDispatchCustomEvent");
var Zb = $n, Jb = Xb, ex = Object.defineProperty, Ge = (t, e) => ex(t, "name", { value: e, configurable: !0 }), va = "focusScope.autoFocusOnMount", ba = "focusScope.autoFocusOnUnmount", Sl = { bubbles: !1, cancelable: !0 }, bs = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Ge(function(e, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      onMountAutoFocus: s,
      onUnmountAutoFocus: a,
      ...i
    } = e, [c, u] = l.useState(null), m = ge(s), f = ge(a), p = l.useRef(null), v = te(n, u), b = l.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    l.useEffect(() => {
      if (o) {
        let g = function(C) {
          if (b.paused || !c) return;
          const P = C.target;
          c.contains(P) ? p.current = P : jt(p.current, { select: !0 });
        }, x = function(C) {
          if (b.paused || !c) return;
          const P = C.relatedTarget;
          P !== null && (c.contains(P) || jt(p.current, { select: !0 }));
        }, y = function(C) {
          if (document.activeElement === document.body)
            for (const S of C)
              S.removedNodes.length > 0 && jt(c);
        };
        Ge(g, "handleFocusIn"), Ge(x, "handleFocusOut"), Ge(y, "handleMutations"), document.addEventListener("focusin", g), document.addEventListener("focusout", x);
        const w = new MutationObserver(y);
        return c && w.observe(c, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", g), document.removeEventListener("focusout", x), w.disconnect();
        };
      }
    }, [o, c, b.paused]), l.useEffect(() => {
      if (c) {
        Pl.add(b);
        const g = document.activeElement;
        if (!c.contains(g)) {
          const y = new CustomEvent(va, Sl);
          c.addEventListener(va, m), c.dispatchEvent(y), y.defaultPrevented || (Td(Dd(Ai(c)), { select: !0 }), document.activeElement === g && jt(c));
        }
        return () => {
          c.removeEventListener(va, m), setTimeout(() => {
            const y = new CustomEvent(ba, Sl);
            c.addEventListener(ba, f), c.dispatchEvent(y), y.defaultPrevented || jt(g ?? document.body, { select: !0 }), c.removeEventListener(ba, f), Pl.remove(b);
          }, 0);
        };
      }
    }, [c, m, f, b]);
    const h = l.useCallback(
      (g) => {
        if (!r && !o || b.paused) return;
        const x = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
        if (x && y) {
          const w = g.currentTarget, [C, P] = Rd(w);
          C && P ? !g.shiftKey && y === P ? (g.preventDefault(), r && jt(C, { select: !0 })) : g.shiftKey && y === C && (g.preventDefault(), r && jt(P, { select: !0 })) : y === w && g.preventDefault();
        }
      },
      [r, o, b.paused]
    );
    return /* @__PURE__ */ d.jsx(z.div, { tabIndex: -1, ...i, ref: v, onKeyDown: h });
  }, "FocusScope")
);
function Td(t, { select: e = !1 } = {}) {
  const n = document.activeElement;
  for (const r of t)
    if (jt(r, { select: e }), document.activeElement !== n) return;
}
Ge(Td, "focusFirst");
function Rd(t) {
  const e = Ai(t), n = Ga(e, t), r = Ga(e.reverse(), t);
  return [n, r];
}
Ge(Rd, "getTabbableEdges");
function Ai(t) {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Ge((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
Ge(Ai, "getTabbableCandidates");
function Ga(t, e) {
  const n = typeof e.checkVisibility == "function" && e.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of t)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ed(r, { upTo: e })))
      return r;
}
Ge(Ga, "findVisible");
function Ed(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
Ge(Ed, "isHidden");
function Md(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
Ge(Md, "isSelectableInput");
function jt(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const n = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== n && Md(t) && e && t.select();
  }
}
Ge(jt, "focus");
var Pl = kd();
function kd() {
  let t = [];
  return {
    add(e) {
      const n = t[0];
      e !== n && n?.pause(), t = Ua(t, e), t.unshift(e);
    },
    remove(e) {
      t = Ua(t, e), t[0]?.resume();
    }
  };
}
Ge(kd, "createFocusScopesStack");
function Ua(t, e) {
  const n = [...t], r = n.indexOf(e);
  return r !== -1 && n.splice(r, 1), n;
}
Ge(Ua, "arrayRemove");
function Dd(t) {
  return t.filter((e) => e.tagName !== "A");
}
Ge(Dd, "removeLinks");
var tx = Object.defineProperty, nx = (t, e) => tx(t, "name", { value: e, configurable: !0 }), pr = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ nx(function(e, n) {
    const { container: r, ...o } = e, [s, a] = l.useState(!1);
    we(() => a(!0), []);
    const i = r || s && globalThis?.document?.body;
    return i ? Fn.createPortal(/* @__PURE__ */ d.jsx(z.div, { ...o, ref: n }), i) : null;
  }, "Portal")
), rx = Object.defineProperty, ji = (t, e) => rx(t, "name", { value: e, configurable: !0 }), Oo = 0, Qn = null;
function ox(t) {
  return hr(), t.children;
}
ji(ox, "FocusGuards");
function hr() {
  l.useEffect(() => {
    Qn || (Qn = { start: Ka(), end: Ka() });
    const { start: t, end: e } = Qn;
    return document.body.firstElementChild !== t && document.body.insertAdjacentElement("afterbegin", t), document.body.lastElementChild !== e && document.body.insertAdjacentElement("beforeend", e), Oo++, () => {
      Oo === 1 && (Qn?.start.remove(), Qn?.end.remove(), Qn = null), Oo = Math.max(0, Oo - 1);
    };
  }, []);
}
ji(hr, "useFocusGuards");
function Ka() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
ji(Ka, "createFocusGuard");
var wt = function() {
  return wt = Object.assign || function(e) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, wt.apply(this, arguments);
};
function Nd(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
  return n;
}
function sx(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, o = e.length, s; r < o; r++)
    (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
}
var Go = "right-scroll-bar-position", Uo = "width-before-scroll-bar", ax = "with-scroll-bars-hidden", ix = "--removed-body-scroll-bar-size";
function xa(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function cx(t, e) {
  var n = at(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
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
  return n.callback = e, n.facade;
}
var lx = typeof window < "u" ? l.useLayoutEffect : l.useEffect, Tl = /* @__PURE__ */ new WeakMap();
function ux(t, e) {
  var n = cx(null, function(r) {
    return t.forEach(function(o) {
      return xa(o, r);
    });
  });
  return lx(function() {
    var r = Tl.get(n);
    if (r) {
      var o = new Set(r), s = new Set(t), a = n.current;
      o.forEach(function(i) {
        s.has(i) || xa(i, null);
      }), s.forEach(function(i) {
        o.has(i) || xa(i, a);
      });
    }
    Tl.set(n, t);
  }, [t]), n;
}
function dx(t) {
  return t;
}
function fx(t, e) {
  e === void 0 && (e = dx);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : t;
    },
    useMedium: function(s) {
      var a = e(s, r);
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
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(m) {
          a.push(m), u();
        },
        filter: function(m) {
          return a = a.filter(m), n;
        }
      };
    }
  };
  return o;
}
function mx(t) {
  t === void 0 && (t = {});
  var e = fx(null);
  return e.options = wt({ async: !0, ssr: !1 }, t), e;
}
var _d = function(t) {
  var e = t.sideCar, n = Nd(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = e.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, wt({}, n));
};
_d.isSideCarExport = !0;
function px(t, e) {
  return t.useMedium(e), _d;
}
var Id = mx(), wa = function() {
}, xs = l.forwardRef(function(t, e) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: wa,
    onWheelCapture: wa,
    onTouchMoveCapture: wa
  }), o = r[0], s = r[1], a = t.forwardProps, i = t.children, c = t.className, u = t.removeScrollBar, m = t.enabled, f = t.shards, p = t.sideCar, v = t.noRelative, b = t.noIsolation, h = t.inert, g = t.allowPinchZoom, x = t.as, y = x === void 0 ? "div" : x, w = t.gapMode, C = Nd(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = p, S = ux([n, e]), T = wt(wt({}, C), o);
  return l.createElement(
    l.Fragment,
    null,
    m && l.createElement(P, { sideCar: Id, removeScrollBar: u, shards: f, noRelative: v, noIsolation: b, inert: h, setCallbacks: s, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    a ? l.cloneElement(l.Children.only(i), wt(wt({}, T), { ref: S })) : l.createElement(y, wt({}, T, { className: c, ref: S }), i)
  );
});
xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xs.classNames = {
  fullWidth: Uo,
  zeroRight: Go
};
var hx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gx() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = hx();
  return e && t.setAttribute("nonce", e), t;
}
function vx(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function bx(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var xx = function() {
  var t = 0, e = null;
  return {
    add: function(n) {
      t == 0 && (e = gx()) && (vx(e, n), bx(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, wx = function() {
  var t = xx();
  return function(e, n) {
    l.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && n]);
  };
}, Od = function() {
  var t = wx(), e = function(n) {
    var r = n.styles, o = n.dynamic;
    return t(r, o), null;
  };
  return e;
}, yx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ya = function(t) {
  return parseInt(t || "", 10) || 0;
}, Cx = function(t) {
  var e = window.getComputedStyle(document.body), n = e[t === "padding" ? "paddingLeft" : "marginLeft"], r = e[t === "padding" ? "paddingTop" : "marginTop"], o = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [ya(n), ya(r), ya(o)];
}, Sx = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return yx;
  var e = Cx(t), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, r - n + e[2] - e[0])
  };
}, Px = Od(), ar = "data-scroll-locked", Tx = function(t, e, n, r) {
  var o = t.left, s = t.top, a = t.right, i = t.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ax, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ar, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(r, ";"),
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
  
  .`).concat(Go, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Uo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Go, " .").concat(Go, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Uo, " .").concat(Uo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ar, `] {
    `).concat(ix, ": ").concat(i, `px;
  }
`);
}, Rl = function() {
  var t = parseInt(document.body.getAttribute(ar) || "0", 10);
  return isFinite(t) ? t : 0;
}, Rx = function() {
  l.useEffect(function() {
    return document.body.setAttribute(ar, (Rl() + 1).toString()), function() {
      var t = Rl() - 1;
      t <= 0 ? document.body.removeAttribute(ar) : document.body.setAttribute(ar, t.toString());
    };
  }, []);
}, Ex = function(t) {
  var e = t.noRelative, n = t.noImportant, r = t.gapMode, o = r === void 0 ? "margin" : r;
  Rx();
  var s = l.useMemo(function() {
    return Sx(o);
  }, [o]);
  return l.createElement(Px, { styles: Tx(s, !e, o, n ? "" : "!important") });
}, qa = !1;
if (typeof window < "u")
  try {
    var Ao = Object.defineProperty({}, "passive", {
      get: function() {
        return qa = !0, !0;
      }
    });
    window.addEventListener("test", Ao, Ao), window.removeEventListener("test", Ao, Ao);
  } catch {
    qa = !1;
  }
var Zn = qa ? { passive: !1 } : !1, Mx = function(t) {
  return t.tagName === "TEXTAREA";
}, Ad = function(t, e) {
  if (!(t instanceof Element))
    return !1;
  var n = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    n[e] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Mx(t) && n[e] === "visible")
  );
}, kx = function(t) {
  return Ad(t, "overflowY");
}, Dx = function(t) {
  return Ad(t, "overflowX");
}, El = function(t, e) {
  var n = e.ownerDocument, r = e;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = jd(t, r);
    if (o) {
      var s = Fd(t, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Nx = function(t) {
  var e = t.scrollTop, n = t.scrollHeight, r = t.clientHeight;
  return [
    e,
    n,
    r
  ];
}, _x = function(t) {
  var e = t.scrollLeft, n = t.scrollWidth, r = t.clientWidth;
  return [
    e,
    n,
    r
  ];
}, jd = function(t, e) {
  return t === "v" ? kx(e) : Dx(e);
}, Fd = function(t, e) {
  return t === "v" ? Nx(e) : _x(e);
}, Ix = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, Ox = function(t, e, n, r, o) {
  var s = Ix(t, window.getComputedStyle(e).direction), a = s * r, i = n.target, c = e.contains(i), u = !1, m = a > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var v = Fd(t, i), b = v[0], h = v[1], g = v[2], x = h - g - s * b;
    (b || x) && jd(t, i) && (f += x, p += b);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (e.contains(i) || e === i)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(p) < 1) && (u = !0), u;
}, jo = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, Ml = function(t) {
  return [t.deltaX, t.deltaY];
}, kl = function(t) {
  return t && "current" in t ? t.current : t;
}, Ax = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, jx = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, Fx = 0, Jn = [];
function Lx(t) {
  var e = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(Fx++)[0], s = l.useState(Od)[0], a = l.useRef(t);
  l.useEffect(function() {
    a.current = t;
  }, [t]), l.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = sx([t.lockRef.current], (t.shards || []).map(kl), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var i = l.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var x = jo(h), y = n.current, w = "deltaX" in h ? h.deltaX : y[0] - x[0], C = "deltaY" in h ? h.deltaY : y[1] - x[1], P, S = h.target, T = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && T === "h" && S.type === "range")
      return !1;
    var R = window.getSelection(), M = R && R.anchorNode, D = M ? M === S || M.contains(S) : !1;
    if (D)
      return !1;
    var I = El(T, S);
    if (!I)
      return !0;
    if (I ? P = T : (P = T === "v" ? "h" : "v", I = El(T, S)), !I)
      return !1;
    if (!r.current && "changedTouches" in h && (w || C) && (r.current = P), !P)
      return !0;
    var O = r.current || P;
    return Ox(O, g, h, O === "h" ? w : C);
  }, []), c = l.useCallback(function(h) {
    var g = h;
    if (!(!Jn.length || Jn[Jn.length - 1] !== s)) {
      var x = "deltaY" in g ? Ml(g) : jo(g), y = e.current.filter(function(P) {
        return P.name === g.type && (P.target === g.target || g.target === P.shadowParent) && Ax(P.delta, x);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var w = (a.current.shards || []).map(kl).filter(Boolean).filter(function(P) {
          return P.contains(g.target);
        }), C = w.length > 0 ? i(g, w[0]) : !a.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = l.useCallback(function(h, g, x, y) {
    var w = { name: h, delta: g, target: x, should: y, shadowParent: $x(x) };
    e.current.push(w), setTimeout(function() {
      e.current = e.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), m = l.useCallback(function(h) {
    n.current = jo(h), r.current = void 0;
  }, []), f = l.useCallback(function(h) {
    u(h.type, Ml(h), h.target, i(h, t.lockRef.current));
  }, []), p = l.useCallback(function(h) {
    u(h.type, jo(h), h.target, i(h, t.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Jn.push(s), t.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Zn), document.addEventListener("touchmove", c, Zn), document.addEventListener("touchstart", m, Zn), function() {
      Jn = Jn.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, Zn), document.removeEventListener("touchmove", c, Zn), document.removeEventListener("touchstart", m, Zn);
    };
  }, []);
  var v = t.removeScrollBar, b = t.inert;
  return l.createElement(
    l.Fragment,
    null,
    b ? l.createElement(s, { styles: jx(o) }) : null,
    v ? l.createElement(Ex, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function $x(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const Wx = px(Id, Lx);
var ao = l.forwardRef(function(t, e) {
  return l.createElement(xs, wt({}, t, { ref: e, sideCar: Wx }));
});
ao.classNames = xs.classNames;
var Bx = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, er = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Lo = {}, Ca = 0, Ld = function(t) {
  return t && (t.host || Ld(t.parentNode));
}, Vx = function(t, e) {
  return e.map(function(n) {
    if (t.contains(n))
      return n;
    var r = Ld(n);
    return r && t.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Hx = function(t, e, n, r) {
  var o = Vx(e, Array.isArray(t) ? t : [t]);
  Lo[n] || (Lo[n] = /* @__PURE__ */ new WeakMap());
  var s = Lo[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || i.has(f) || (i.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var m = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        m(p);
      else
        try {
          var v = p.getAttribute(r), b = v !== null && v !== "false", h = (er.get(p) || 0) + 1, g = (s.get(p) || 0) + 1;
          er.set(p, h), s.set(p, g), a.push(p), h === 1 && b && Fo.set(p, !0), g === 1 && p.setAttribute(n, "true"), b || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return m(e), i.clear(), Ca++, function() {
    a.forEach(function(f) {
      var p = er.get(f) - 1, v = s.get(f) - 1;
      er.set(f, p), s.set(f, v), p || (Fo.has(f) || f.removeAttribute(r), Fo.delete(f)), v || f.removeAttribute(n);
    }), Ca--, Ca || (er = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), Fo = /* @__PURE__ */ new WeakMap(), Lo = {});
  };
}, ws = function(t, e, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(t) ? t : [t]), o = Bx(t);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Hx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, zx = Object.defineProperty, rt = (t, e) => zx(t, "name", { value: e, configurable: !0 }), Fi = "Dialog", [$d, Wd] = /* @__PURE__ */ Me(Fi), [Yx, ht] = $d(Fi), ys = /* @__PURE__ */ rt((t) => {
  const {
    __scopeDialog: e,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = t, i = l.useRef(null), c = l.useRef(null), [u, m] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Fi
  }), [f, p] = l.useState(0), [v, b] = l.useState(0);
  return /* @__PURE__ */ d.jsx(
    Yx,
    {
      scope: e,
      triggerRef: i,
      contentRef: c,
      contentId: Re(),
      titleId: Re(),
      descriptionId: Re(),
      titlePresent: f > 0,
      descriptionPresent: v > 0,
      setTitleCount: p,
      setDescriptionCount: b,
      open: u,
      onOpenChange: m,
      onOpenToggle: l.useCallback(() => m((h) => !h), [m]),
      modal: a,
      children: n
    }
  );
}, "Dialog"), Gx = "DialogTrigger", Li = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, ...o } = e, s = ht(Gx, r), a = te(n, s.triggerRef);
    return /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": Ss(s.open),
        ...o,
        ref: a,
        onClick: A(e.onClick, s.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), Bd = "DialogPortal", [Ux, Vd] = $d(Bd, {
  forceMount: void 0
}), Cs = /* @__PURE__ */ rt((t) => {
  const { __scopeDialog: e, forceMount: n, children: r, container: o } = t, s = ht(Bd, e);
  return /* @__PURE__ */ d.jsx(Ux, { scope: e, forceMount: n, children: l.Children.map(r, (a) => /* @__PURE__ */ d.jsx(Ee, { present: n || s.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: a }) })) });
}, "DialogPortal"), Xa = "DialogOverlay", gr = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ rt(function(e, n) {
    const r = Vd(Xa, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, a = ht(Xa, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(Ee, { present: o || a.open, children: /* @__PURE__ */ d.jsx(qx, { ...s, ref: n }) }) : null;
  }, "DialogOverlay")
), Kx = /* @__PURE__ */ mt("DialogOverlay.RemoveScroll"), qx = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, ...o } = e, s = ht(Xa, r), a = Cd(), i = te(n, a);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(ao, { as: Kx, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ d.jsx(
        z.div,
        {
          "data-state": Ss(s.open),
          ...o,
          ref: i,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Hr = "DialogContent", vr = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ rt(function(e, n) {
    const r = Vd(Hr, e.__scopeDialog), { forceMount: o = r.forceMount, ...s } = e, a = ht(Hr, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(Ee, { present: o || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(Xx, { ...s, ref: n }) : /* @__PURE__ */ d.jsx(Qx, { ...s, ref: n }) });
  }, "DialogContent")
), Xx = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rt(function(e, n) {
    const r = ht(Hr, e.__scopeDialog), o = l.useRef(null), s = te(n, r.contentRef, o);
    return l.useEffect(() => {
      const a = o.current;
      if (a) return ws(a);
    }, []), /* @__PURE__ */ d.jsx(
      Hd,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: A(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || c) && a.preventDefault();
        }),
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), Qx = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rt(function(e, n) {
    const r = ht(Hr, e.__scopeDialog), o = l.useRef(!1), s = l.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Hd,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (o.current || r.triggerRef.current?.focus(), a.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && s.current && a.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), Hd = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, trapFocus: o, onOpenAutoFocus: s, onCloseAutoFocus: a, ...i } = e, c = ht(Hr, r);
    return hr(), /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
      bs,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: s,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          $n,
          {
            role: "dialog",
            id: c.contentId,
            "aria-describedby": c.descriptionPresent ? c.descriptionId : void 0,
            "aria-labelledby": c.titlePresent ? c.titleId : void 0,
            "data-state": Ss(c.open),
            ...i,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => c.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), Zx = "DialogTitle", io = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, ...o } = e, s = ht(Zx, r), { setTitleCount: a } = s;
    return we(() => (a((i) => i + 1), () => a((i) => i - 1)), [a]), /* @__PURE__ */ d.jsx(z.h2, { id: s.titleId, ...o, ref: n });
  }, "DialogTitle")
), Jx = "DialogDescription", co = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, ...o } = e, s = ht(Jx, r), { setDescriptionCount: a } = s;
    return we(() => (a((i) => i + 1), () => a((i) => i - 1)), [a]), /* @__PURE__ */ d.jsx(z.p, { id: s.descriptionId, ...o, ref: n });
  }, "DialogDescription")
), ew = "DialogClose", br = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ rt(function(e, n) {
    const { __scopeDialog: r, ...o } = e, s = ht(ew, r);
    return /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: A(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function Ss(t) {
  return t ? "open" : "closed";
}
rt(Ss, "getState");
var tw = Object.defineProperty, qt = (t, e) => tw(t, "name", { value: e, configurable: !0 }), nw = "AlertDialog", [rw, hO] = /* @__PURE__ */ Me(nw, [
  Wd
]), Xt = Wd(), ow = /* @__PURE__ */ qt((t) => {
  const { __scopeAlertDialog: e, ...n } = t, r = Xt(e);
  return /* @__PURE__ */ d.jsx(ys, { ...r, ...n, modal: !0 });
}, "AlertDialog"), sw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, ...o } = e, s = Xt(r);
    return /* @__PURE__ */ d.jsx(Li, { ...s, ...o, ref: n });
  }, "AlertDialogTrigger")
), aw = /* @__PURE__ */ qt((t) => {
  const { __scopeAlertDialog: e, ...n } = t, r = Xt(e);
  return /* @__PURE__ */ d.jsx(Cs, { ...r, ...n });
}, "AlertDialogPortal"), iw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, ...o } = e, s = Xt(r);
    return /* @__PURE__ */ d.jsx(gr, { ...s, ...o, ref: n });
  }, "AlertDialogOverlay")
), cw = "AlertDialogContent", [lw, uw] = rw(cw), dw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, children: o, ...s } = e, a = Xt(r), i = l.useRef(null), c = te(n, i), u = l.useRef(null);
    return /* @__PURE__ */ d.jsx(lw, { scope: r, cancelRef: u, children: /* @__PURE__ */ d.jsx(
      vr,
      {
        role: "alertdialog",
        ...a,
        ...s,
        ref: c,
        onOpenAutoFocus: A(s.onOpenAutoFocus, (m) => {
          m.preventDefault(), u.current?.focus({ preventScroll: !0 });
        }),
        onPointerDownOutside: (m) => m.preventDefault(),
        onInteractOutside: (m) => m.preventDefault(),
        children: o
      }
    ) });
  }, "AlertDialogContent")
), fw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, ...o } = e, s = Xt(r);
    return /* @__PURE__ */ d.jsx(io, { ...s, ...o, ref: n });
  }, "AlertDialogTitle")
), mw = l.forwardRef(/* @__PURE__ */ qt(function(e, n) {
  const { __scopeAlertDialog: r, ...o } = e, s = Xt(r);
  return /* @__PURE__ */ d.jsx(co, { ...s, ...o, ref: n });
}, "AlertDialogDescription")), pw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, ...o } = e, s = Xt(r);
    return /* @__PURE__ */ d.jsx(br, { ...s, ...o, ref: n });
  }, "AlertDialogAction")
), hw = "AlertDialogCancel", gw = l.forwardRef(
  /* @__PURE__ */ qt(function(e, n) {
    const { __scopeAlertDialog: r, ...o } = e, { cancelRef: s } = uw(hw, r), a = Xt(r), i = te(n, s);
    return /* @__PURE__ */ d.jsx(br, { ...a, ...o, ref: i });
  }, "AlertDialogCancel")
), vw = ow, bw = sw, xw = aw, zd = iw, Yd = dw, Gd = pw, Ud = gw, Kd = fw, qd = mw;
const gO = vw, vO = bw, ww = xw, Xd = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  zd,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: n
  }
));
Xd.displayName = zd.displayName;
const yw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsxs(ww, { children: [
  /* @__PURE__ */ d.jsx(Xd, {}),
  /* @__PURE__ */ d.jsx(
    Yd,
    {
      ref: n,
      className: k(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        t
      ),
      ...e
    }
  )
] }));
yw.displayName = Yd.displayName;
const Cw = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
Cw.displayName = "AlertDialogHeader";
const Sw = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
Sw.displayName = "AlertDialogFooter";
const Pw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Kd,
  {
    ref: n,
    className: k("text-lg font-semibold", t),
    ...e
  }
));
Pw.displayName = Kd.displayName;
const Tw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  qd,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", t),
    ...e
  }
));
Tw.displayName = qd.displayName;
const Rw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Gd,
  {
    ref: n,
    className: k(kn(), t),
    ...e
  }
));
Rw.displayName = Gd.displayName;
const Ew = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Ud,
  {
    ref: n,
    className: k(
      kn({ variant: "outline" }),
      "mt-2 sm:mt-0",
      t
    ),
    ...e
  }
));
Ew.displayName = Ud.displayName;
function Mw({
  options: t,
  isLoading: e,
  renderOption: n,
  getOptionValue: r,
  getDisplayValue: o,
  label: s,
  placeholder: a = "Selecione...",
  value: i,
  onChange: c,
  onSearchChange: u,
  disabled: m = !1,
  triggerClassName: f,
  noResultsMessage: p,
  clearable: v = !0,
  error: b
}) {
  const [h, g] = at(!1), [x, y] = at(i), [w, C] = at(null), [P, S] = at("");
  Wt(() => {
    y(i);
  }, [i]), Wt(() => {
    if (i && t.length > 0) {
      const R = t.find((M) => r(M) === i);
      R && C(R);
    }
  }, [i, t, r]);
  const T = qe(
    (R) => {
      const M = v && R === x ? "" : R;
      i && y(M), C(
        t.find((D) => r(D) === M) || null
      ), c(M), g(!1);
    },
    [x, c, v, t, r, i]
  );
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-1", children: [
    !!s && /* @__PURE__ */ d.jsx(qs, { className: k(b && "text-destructive"), children: s }),
    /* @__PURE__ */ d.jsxs(xo, { open: h, onOpenChange: g, children: [
      /* @__PURE__ */ d.jsx(wo, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
        Wn,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": h,
          className: k(
            "justify-between w-full hover:bg-input bg-input font-normal",
            m && "opacity-50 cursor-not-allowed",
            !i && "text-muted-foreground",
            f
          ),
          disabled: m,
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "truncate", children: i && w ? o(w) : a }),
            /* @__PURE__ */ d.jsx(Mu, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ d.jsx(Sr, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ d.jsxs(go, { shouldFilter: !1, children: [
        /* @__PURE__ */ d.jsxs("div", { className: "relative border-b", children: [
          /* @__PURE__ */ d.jsx(
            Ns,
            {
              placeholder: "Buscar",
              value: P,
              onValueChange: (R) => {
                S(R), u(R);
              }
            }
          ),
          e && t.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ d.jsx(Vr, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ d.jsxs(_s, { children: [
          e && t.length === 0 && /* @__PURE__ */ d.jsx(kw, {}),
          !e && t.length === 0 && /* @__PURE__ */ d.jsx(Is, { children: /* @__PURE__ */ d.jsx("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: p ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ d.jsx(vo, { children: t.map((R) => /* @__PURE__ */ d.jsxs(
            En,
            {
              value: r(R),
              onSelect: T,
              children: [
                /* @__PURE__ */ d.jsx(
                  ro,
                  {
                    className: k(
                      "mr-2 size-4 shrink-0",
                      x === r(R) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ d.jsx("div", { className: "w-0 flex-1", children: n(R) })
              ]
            },
            r(R)
          )) })
        ] })
      ] }) })
    ] }),
    !!b && /* @__PURE__ */ d.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: b })
  ] });
}
function kw() {
  return /* @__PURE__ */ d.jsx(vo, { children: [1, 2, 3].map((t) => /* @__PURE__ */ d.jsx(En, { disabled: !0, className: "p-0", children: /* @__PURE__ */ d.jsx(x_, { className: "w-full h-8 my-0.5" }) }, t)) });
}
const bO = ({
  name: t,
  label: e,
  disabled: n,
  isLoading: r,
  options: o,
  placeholder: s = "Selecione",
  onSearchChange: a,
  getDisplayValue: i,
  getOptionValue: c,
  renderOption: u
}) => {
  const { control: m } = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      name: t,
      control: m,
      render: ({ field: f }) => /* @__PURE__ */ d.jsxs(vn, { children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(
          Mw,
          {
            options: o,
            value: f.value,
            placeholder: s,
            onSearchChange: a,
            getDisplayValue: i,
            getOptionValue: c,
            renderOption: u,
            onChange: (p) => f.onChange(p),
            isLoading: r,
            disabled: n
          }
        ),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
};
var Dw = Object.defineProperty, Yt = (t, e) => Dw(t, "name", { value: e, configurable: !0 }), Qd = "Avatar", [Nw, xO] = /* @__PURE__ */ Me(Qd), _w = [
  0,
  () => {
  }
], [Iw, Zd] = Nw(Qd), Jd = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Yt(function(e, n) {
    const { __scopeAvatar: r, ...o } = e, [s, a] = l.useState("idle"), [i, c] = rf();
    return /* @__PURE__ */ d.jsx(
      Iw,
      {
        scope: r,
        imageLoadingStatus: s,
        setImageLoadingStatus: a,
        imageCount: i,
        setImageCount: c,
        children: /* @__PURE__ */ d.jsx(z.span, { ...o, ref: n })
      }
    );
  }, "Avatar")
), Ow = "AvatarImage", ef = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Yt(function(e, n) {
    const { __scopeAvatar: r, src: o, onLoadingStatusChange: s, ...a } = e, i = Zd(Ow, r);
    i.setImageCount;
    const c = nf(o, {
      referrerPolicy: a.referrerPolicy,
      crossOrigin: a.crossOrigin,
      loadingStatus: i.imageLoadingStatus,
      setLoadingStatus: i.setImageLoadingStatus
    }), u = ge((f) => {
      s?.(f);
    }), m = l.useRef(c);
    return we(() => {
      const f = m.current;
      m.current = c, c !== f && u(c);
    }, [c, u]), c === "loaded" ? /* @__PURE__ */ d.jsx(z.img, { ...a, ref: n, src: o }) : null;
  }, "AvatarImage")
), Aw = "AvatarFallback", tf = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Yt(function(e, n) {
    const { __scopeAvatar: r, delayMs: o, ...s } = e, a = Zd(Aw, r), [i, c] = l.useState(o === void 0);
    return l.useEffect(() => {
      if (o !== void 0) {
        const u = window.setTimeout(() => c(!0), o);
        return () => window.clearTimeout(u);
      }
    }, [o]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ d.jsx(z.span, { ...s, ref: n }) : null;
  }, "AvatarFallback")
);
function nf(t, {
  loadingStatus: e,
  setLoadingStatus: n,
  referrerPolicy: r,
  crossOrigin: o
}) {
  return we(() => {
    if (!t) {
      n("error");
      return;
    }
    const s = new window.Image(), a = /* @__PURE__ */ Yt((c) => {
      const u = c.currentTarget;
      n(Qa(u));
    }, "handleLoad"), i = /* @__PURE__ */ Yt(() => n("error"), "handleError");
    return s.addEventListener("load", a), s.addEventListener("error", i), r && (s.referrerPolicy = r), s.crossOrigin = o ?? null, s.src = t, n(Qa(s)), () => {
      s.removeEventListener("load", a), s.removeEventListener("error", i), n("idle");
    };
  }, [t, o, r, n]), e;
}
Yt(nf, "useImageLoadingStatus");
function Qa(t) {
  return t.complete ? t.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
Yt(Qa, "getImageLoadingStatus");
function rf() {
  return _w;
}
Yt(rf, "useImageCount");
function jw(t) {
}
Yt(jw, "useUpdateImageCount");
const Fw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Jd,
  {
    ref: n,
    className: k(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...e
  }
));
Fw.displayName = Jd.displayName;
const Lw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  ef,
  {
    ref: n,
    className: k("aspect-square h-full w-full", t),
    ...e
  }
));
Lw.displayName = ef.displayName;
const $w = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  tf,
  {
    ref: n,
    className: k(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...e
  }
));
$w.displayName = tf.displayName;
const Ww = _t(
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
function Dl({ className: t, variant: e, ...n }) {
  return /* @__PURE__ */ d.jsx("div", { className: k(Ww({ variant: e }), t), ...n });
}
const Bw = l.forwardRef(({ ...t }, e) => /* @__PURE__ */ d.jsx("nav", { ref: e, "aria-label": "breadcrumb", ...t }));
Bw.displayName = "Breadcrumb";
const Vw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "ol",
  {
    ref: n,
    className: k(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      t
    ),
    ...e
  }
));
Vw.displayName = "BreadcrumbList";
const Hw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "li",
  {
    ref: n,
    className: k("inline-flex items-center gap-1.5", t),
    ...e
  }
));
Hw.displayName = "BreadcrumbItem";
const zw = l.forwardRef(({ asChild: t, className: e, ...n }, r) => {
  const o = t ? _u : "a";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      ref: r,
      className: k("transition-colors hover:text-foreground", e),
      ...n
    }
  );
});
zw.displayName = "BreadcrumbLink";
const Yw = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: k("font-normal text-foreground", t),
    ...e
  }
));
Yw.displayName = "BreadcrumbPage";
const Gw = ({
  children: t,
  className: e,
  ...n
}) => /* @__PURE__ */ d.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("[&>svg]:w-3.5 [&>svg]:h-3.5", e),
    ...n,
    children: t ?? /* @__PURE__ */ d.jsx(wi, {})
  }
);
Gw.displayName = "BreadcrumbSeparator";
const Uw = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("flex h-9 w-9 items-center justify-center relative", t),
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(ku, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Uw.displayName = "BreadcrumbElipssis";
const Kw = {
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
}, kn = _t(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: Kw,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Wn = l.forwardRef(({ className: t, variant: e, size: n, disabled: r, href: o, ...s }, a) => /* @__PURE__ */ d.jsx(d.Fragment, { children: o ? /* @__PURE__ */ d.jsx(
  Lg,
  {
    className: k(kn({ variant: e, size: n, className: t })),
    ref: a,
    to: o,
    ...s
  }
) : /* @__PURE__ */ d.jsx(
  "button",
  {
    className: k(kn({ variant: e, size: n, className: t })),
    ref: a,
    disabled: r,
    ...s
  }
) }));
Wn.displayName = "Button";
function qw(t, e, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: t,
    timeZoneName: n
  }).format(e).split(/\s/g).slice(2).join(" ");
}
const Xw = {}, Fr = {};
function Ft(t, e) {
  try {
    const r = (Xw[t] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: t,
      timeZoneName: "longOffset"
    }).format)(e).split("GMT")[1];
    return r in Fr ? Fr[r] : Nl(r, r.split(":"));
  } catch {
    if (t in Fr) return Fr[t];
    const n = t?.match(Qw);
    return n ? Nl(t, n.slice(1)) : NaN;
  }
}
const Qw = /([+-]\d\d):?(\d\d)?/;
function Nl(t, e) {
  const n = +(e[0] || 0), r = +(e[1] || 0), o = +(e[2] || 0) / 60;
  return Fr[t] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Rt extends Date {
  //#region static
  constructor(...e) {
    super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Ft(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), of(this, e)) : this.setTime(Date.now());
  }
  static tz(e, ...n) {
    return n.length ? new Rt(...n, e) : new Rt(Date.now(), e);
  }
  //#endregion
  //#region time zone
  withTimeZone(e) {
    return new Rt(+this, e);
  }
  getTimezoneOffset() {
    const e = -Ft(this.timeZone, this);
    return e > 0 ? Math.floor(e) : Math.ceil(e);
  }
  //#endregion
  //#region time
  setTime(e) {
    return Date.prototype.setTime.apply(this, arguments), ts(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](e) {
    return new Rt(+new Date(e), this.timeZone);
  }
  //#endregion
}
const _l = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
  if (!_l.test(t)) return;
  const e = t.replace(_l, "$1UTC");
  Rt.prototype[e] && (t.startsWith("get") ? Rt.prototype[t] = function() {
    return this.internal[e]();
  } : (Rt.prototype[t] = function() {
    return Date.prototype[e].apply(this.internal, arguments), Zw(this), +this;
  }, Rt.prototype[e] = function() {
    return Date.prototype[e].apply(this, arguments), ts(this), +this;
  }));
});
function ts(t) {
  t.internal.setTime(+t), t.internal.setUTCSeconds(t.internal.getUTCSeconds() - // Round after converting minutes to seconds to avoid fractional offset
  // precision errors from historical offsets.
  Math.round(-Ft(t.timeZone, t) * 60));
}
function Zw(t) {
  Date.prototype.setFullYear.call(t, t.internal.getUTCFullYear(), t.internal.getUTCMonth(), t.internal.getUTCDate()), Date.prototype.setHours.call(t, t.internal.getUTCHours(), t.internal.getUTCMinutes(), t.internal.getUTCSeconds(), t.internal.getUTCMilliseconds()), of(t);
}
function of(t, e) {
  const n = Array.isArray(e) ? Jw(e) : +t.internal, r = Ft(t.timeZone, t), o = r > 0 ? Math.floor(r) : Math.ceil(r), s = /* @__PURE__ */ new Date(+t);
  s.setUTCHours(s.getUTCHours() - 1);
  const a = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset(), i = -(/* @__PURE__ */ new Date(+s)).getTimezoneOffset(), c = a - i;
  let u = a;
  if (c && a !== o) {
    const M = Date.prototype.getHours.apply(t), D = Array.isArray(e) ? e[3] || 0 : t.internal.getUTCHours();
    if (M !== D) {
      const I = /* @__PURE__ */ new Date(+t), O = a - o;
      O && I.setUTCMinutes(I.getUTCMinutes() + O);
      const $ = Ft(t.timeZone, I);
      ($ > 0 ? Math.floor($) : Math.ceil($)) === o && (u = i);
    }
  }
  const m = u - o;
  m && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + m);
  const f = /* @__PURE__ */ new Date(+t);
  f.setUTCSeconds(0);
  const p = a > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, v = Math.round(-(Ft(t.timeZone, t) * 60)) % 60;
  (v || p) && Date.prototype.setUTCSeconds.call(t, Date.prototype.getUTCSeconds.call(t) + v + p);
  const b = Ft(t.timeZone, t), h = b > 0 ? Math.floor(b) : Math.ceil(b), x = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset() - h, y = h !== o, w = x - m, C = h - o, P = n - h * 60 * 1e3, S = C > 0 && Il(t) - n === C * 60 * 1e3 && Il(t, P) !== n;
  if (y && w && !S) {
    Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + w);
    const M = Ft(t.timeZone, t), D = M > 0 ? Math.floor(M) : Math.ceil(M), I = h - D;
    I && w < 0 && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + I);
  }
  ts(t);
  const R = (e ? n : n + v * 1e3) - +t.internal;
  R && Math.abs(R) < 1800 * 1e3 && (Date.prototype.setTime.call(t, +t + R), ts(t));
}
function Jw(t) {
  return Date.UTC(t[0], t.length > 1 ? t[1] : 0, t.length > 2 ? t[2] : 1, ...t.slice(3));
}
function Il(t, e) {
  const n = new Date(e ?? +t);
  return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-Ft(t.timeZone, n) * 60)), +n;
}
class Pe extends Rt {
  //#region static
  static tz(e, ...n) {
    return n.length ? new Pe(...n, e) : new Pe(Date.now(), e);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [e, n, r] = this.tzComponents(), o = `${e}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [e, n, r, o] = this.internal.toUTCString().split(" ");
    return `${e?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const e = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${e} GMT${n}${r}${o} (${qw(this.timeZone, this)})`;
  }
  toLocaleString(e, n) {
    return Date.prototype.toLocaleString.call(this, e, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(e, n) {
    return Date.prototype.toLocaleDateString.call(this, e, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(e, n) {
    return Date.prototype.toLocaleTimeString.call(this, e, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const e = this.getTimezoneOffset(), n = e > 0 ? "-" : "+", r = String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"), o = String(Math.abs(e) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(e) {
    return new Pe(+this, e);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](e) {
    return new Pe(+new Date(e), this.timeZone);
  }
  //#endregion
}
const sf = 6048e5, ey = 864e5, ty = 6e4, ny = 36e5, ry = 1e3, Ol = /* @__PURE__ */ Symbol.for("constructDateFrom");
function ye(t, e) {
  return typeof t == "function" ? t(e) : t && typeof t == "object" && Ol in t ? t[Ol](e) : t instanceof Date ? new t.constructor(e) : new Date(e);
}
function de(t, e) {
  return ye(e || t, t);
}
function lo(t, e, n) {
  const r = de(t, n?.in);
  return isNaN(e) ? ye(n?.in || t, NaN) : (e && r.setDate(r.getDate() + e), r);
}
function $i(t, e, n) {
  const r = de(t, n?.in);
  if (isNaN(e)) return ye(t, NaN);
  if (!e)
    return r;
  const o = r.getDate(), s = ye(t, r.getTime());
  s.setMonth(r.getMonth() + e + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
function oy(t, e, n) {
  const {
    years: r = 0,
    months: o = 0,
    weeks: s = 0,
    days: a = 0,
    hours: i = 0,
    minutes: c = 0,
    seconds: u = 0
  } = e, m = de(t, n?.in), f = o || r ? $i(m, o + r * 12) : m, p = a || s ? lo(f, a + s * 7) : f, v = c + i * 60, h = (u + v * 60) * 1e3;
  return ye(t, +p + h);
}
let sy = {};
function Bn() {
  return sy;
}
function Gt(t, e) {
  const n = Bn(), r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = de(t, e?.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Dn(t, e) {
  return Gt(t, { ...e, weekStartsOn: 1 });
}
function af(t, e) {
  const n = de(t, e?.in), r = n.getFullYear(), o = ye(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Dn(o), a = ye(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Dn(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function ns(t) {
  const e = de(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function xr(t, ...e) {
  const n = ye.bind(
    null,
    e.find((r) => typeof r == "object")
  );
  return e.map(n);
}
function zr(t, e) {
  const n = de(t, e?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Wi(t, e, n) {
  const [r, o] = xr(
    n?.in,
    t,
    e
  ), s = zr(r), a = zr(o), i = +s - ns(s), c = +a - ns(a);
  return Math.round((i - c) / ey);
}
function ay(t, e) {
  const n = af(t, e), r = ye(t, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Dn(r);
}
function iy(t, e, n) {
  return lo(t, e * 7, n);
}
function cy(t, e, n) {
  return $i(t, e * 12, n);
}
function ly(t, e) {
  let n, r = e?.in;
  return t.forEach((o) => {
    !r && typeof o == "object" && (r = ye.bind(null, o));
    const s = de(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), ye(r, n || NaN);
}
function uy(t, e) {
  let n, r = e?.in;
  return t.forEach((o) => {
    !r && typeof o == "object" && (r = ye.bind(null, o));
    const s = de(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), ye(r, n || NaN);
}
function dy(t, e, n) {
  const [r, o] = xr(
    n?.in,
    t,
    e
  );
  return +zr(r) == +zr(o);
}
function cf(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Bi(t) {
  return !(!cf(t) && typeof t != "number" || isNaN(+de(t)));
}
function lf(t, e, n) {
  const [r, o] = xr(
    n?.in,
    t,
    e
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function fy(t, e) {
  const n = de(t, e?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function uf(t, e) {
  const [n, r] = xr(t, e.start, e.end);
  return { start: n, end: r };
}
function my(t, e) {
  const { start: n, end: r } = uf(e?.in, t);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(ye(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function py(t, e) {
  const n = de(t, e?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function hy(t, e) {
  const n = de(t, e?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function df(t, e) {
  const n = de(t, e?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function gy(t, e) {
  const { start: n, end: r } = uf(e?.in, t);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(ye(n, a)), a.setFullYear(a.getFullYear() + i);
  return o ? c.reverse() : c;
}
function ff(t, e) {
  const n = Bn(), r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = de(t, e?.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function vy(t, e) {
  return ff(t, { ...e, weekStartsOn: 1 });
}
const by = {
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
}, xy = (t, e, n) => {
  let r;
  const o = by[t];
  return typeof o == "string" ? r = o : e === 1 ? r = o.one : r = o.other.replace("{{count}}", e.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ir(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const wy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, yy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Cy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Sy = {
  date: ir({
    formats: wy,
    defaultWidth: "full"
  }),
  time: ir({
    formats: yy,
    defaultWidth: "full"
  }),
  dateTime: ir({
    formats: Cy,
    defaultWidth: "full"
  })
}, Py = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ty = (t, e, n, r) => Py[t];
function yt(t) {
  return (e, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && t.formattingValues) {
      const a = t.defaultFormattingWidth || t.defaultWidth, i = n?.width ? String(n.width) : a;
      o = t.formattingValues[i] || t.formattingValues[a];
    } else {
      const a = t.defaultWidth, i = n?.width ? String(n.width) : t.defaultWidth;
      o = t.values[i] || t.values[a];
    }
    const s = t.argumentCallback ? t.argumentCallback(e) : e;
    return o[s];
  };
}
const Ry = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ey = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, My = {
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
}, ky = {
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
}, Dy = {
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
}, Ny = {
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
}, _y = (t, e) => {
  const n = Number(t), r = n % 100;
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
}, Iy = {
  ordinalNumber: _y,
  era: yt({
    values: Ry,
    defaultWidth: "wide"
  }),
  quarter: yt({
    values: Ey,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: yt({
    values: My,
    defaultWidth: "wide"
  }),
  day: yt({
    values: ky,
    defaultWidth: "wide"
  }),
  dayPeriod: yt({
    values: Dy,
    defaultWidth: "wide",
    formattingValues: Ny,
    defaultFormattingWidth: "wide"
  })
};
function Ct(t) {
  return (e, n = {}) => {
    const r = n.width, o = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], s = e.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(i) ? Ay(i, (f) => f.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Oy(i, (f) => f.test(a))
    );
    let u;
    u = t.valueCallback ? t.valueCallback(c) : c, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const m = e.slice(a.length);
    return { value: u, rest: m };
  };
}
function Oy(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function Ay(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function mf(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const o = r[0], s = e.match(t.parsePattern);
    if (!s) return null;
    let a = t.valueCallback ? t.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = e.slice(o.length);
    return { value: a, rest: i };
  };
}
const jy = /^(\d+)(th|st|nd|rd)?/i, Fy = /\d+/i, Ly = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $y = {
  any: [/^b/i, /^(a|c)/i]
}, Wy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, By = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Vy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hy = {
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
}, zy = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Yy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Gy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Uy = {
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
}, Ky = {
  ordinalNumber: mf({
    matchPattern: jy,
    parsePattern: Fy,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ct({
    matchPatterns: Ly,
    defaultMatchWidth: "wide",
    parsePatterns: $y,
    defaultParseWidth: "any"
  }),
  quarter: Ct({
    matchPatterns: Wy,
    defaultMatchWidth: "wide",
    parsePatterns: By,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ct({
    matchPatterns: Vy,
    defaultMatchWidth: "wide",
    parsePatterns: Hy,
    defaultParseWidth: "any"
  }),
  day: Ct({
    matchPatterns: zy,
    defaultMatchWidth: "wide",
    parsePatterns: Yy,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ct({
    matchPatterns: Gy,
    defaultMatchWidth: "any",
    parsePatterns: Uy,
    defaultParseWidth: "any"
  })
}, Tn = {
  code: "en-US",
  formatDistance: xy,
  formatLong: Sy,
  formatRelative: Ty,
  localize: Iy,
  match: Ky,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function qy(t, e) {
  const n = de(t, e?.in);
  return Wi(n, df(n)) + 1;
}
function Ps(t, e) {
  const n = de(t, e?.in), r = +Dn(n) - +ay(n);
  return Math.round(r / sf) + 1;
}
function Vi(t, e) {
  const n = de(t, e?.in), r = n.getFullYear(), o = Bn(), s = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = ye(e?.in || t, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = Gt(a, e), c = ye(e?.in || t, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const u = Gt(c, e);
  return +n >= +i ? r + 1 : +n >= +u ? r : r - 1;
}
function Xy(t, e) {
  const n = Bn(), r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Vi(t, e), s = ye(e?.in || t, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Gt(s, e);
}
function Ts(t, e) {
  const n = de(t, e?.in), r = +Gt(n, e) - +Xy(n, e);
  return Math.round(r / sf) + 1;
}
function Ce(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const tn = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ce(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : Ce(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return Ce(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
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
  h(t, e) {
    return Ce(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return Ce(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return Ce(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return Ce(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ce(o, e.length);
  }
}, tr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Al = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
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
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return tn.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const o = Vi(t, r), s = o > 0 ? o : 1 - o;
    if (e === "YY") {
      const a = s % 100;
      return Ce(a, 2);
    }
    return e === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ce(s, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = af(t);
    return Ce(n, e.length);
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
  u: function(t, e) {
    const n = t.getFullYear();
    return Ce(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ce(r, 2);
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
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ce(r, 2);
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
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return tn.M(t, e);
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
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ce(r + 1, 2);
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
  w: function(t, e, n, r) {
    const o = Ts(t, r);
    return e === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ce(o, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = Ps(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ce(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : tn.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = qy(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ce(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
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
  e: function(t, e, n, r) {
    const o = t.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return Ce(s, 2);
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
  c: function(t, e, n, r) {
    const o = t.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return Ce(s, e.length);
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
  i: function(t, e, n) {
    const r = t.getDay(), o = r === 0 ? 7 : r;
    switch (e) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ce(o, e.length);
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
  a: function(t, e, n) {
    const o = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
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
  b: function(t, e, n) {
    const r = t.getHours();
    let o;
    switch (r === 12 ? o = tr.noon : r === 0 ? o = tr.midnight : o = r / 12 >= 1 ? "pm" : "am", e) {
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
  B: function(t, e, n) {
    const r = t.getHours();
    let o;
    switch (r >= 17 ? o = tr.evening : r >= 12 ? o = tr.afternoon : r >= 4 ? o = tr.morning : o = tr.night, e) {
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
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return tn.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : tn.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ce(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : tn.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : tn.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return tn.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      // Hours and optional minutes
      case "X":
        return Fl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Pn(r);
      // Hours and minutes with `:` delimiter
      default:
        return Pn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Hours and optional minutes
      case "x":
        return Fl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Pn(r);
      // Hours and minutes with `:` delimiter
      default:
        return Pn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + jl(r, ":");
      default:
        return "GMT" + Pn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + jl(r, ":");
      default:
        return "GMT" + Pn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(+t / 1e3);
    return Ce(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    return Ce(+t, e.length);
  }
};
function jl(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + e + Ce(s, 2);
}
function Fl(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + Ce(Math.abs(t) / 60, 2) : Pn(t, e);
}
function Pn(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), o = Ce(Math.trunc(r / 60), 2), s = Ce(r % 60, 2);
  return n + o + e + s;
}
const Ll = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    default:
      return e.date({ width: "full" });
  }
}, pf = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    default:
      return e.time({ width: "full" });
  }
}, Qy = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ll(t, e);
  let s;
  switch (r) {
    case "P":
      s = e.dateTime({ width: "short" });
      break;
    case "PP":
      s = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = e.dateTime({ width: "long" });
      break;
    default:
      s = e.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Ll(r, e)).replace("{{time}}", pf(o, e));
}, Za = {
  p: pf,
  P: Qy
}, Zy = /^D+$/, Jy = /^Y+$/, eC = ["D", "DD", "YY", "YYYY"];
function hf(t) {
  return Zy.test(t);
}
function gf(t) {
  return Jy.test(t);
}
function Ja(t, e, n) {
  const r = tC(t, e, n);
  if (console.warn(r), eC.includes(t)) throw new RangeError(r);
}
function tC(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const nC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, oC = /^'([^]*?)'?$/, sC = /''/g, aC = /[a-zA-Z]/;
function Rn(t, e, n) {
  const r = Bn(), o = n?.locale ?? r.locale ?? Tn, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = de(t, n?.in);
  if (!Bi(i))
    throw new RangeError("Invalid time value");
  let c = e.match(rC).map((m) => {
    const f = m[0];
    if (f === "p" || f === "P") {
      const p = Za[f];
      return p(m, o.formatLong);
    }
    return m;
  }).join("").match(nC).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const f = m[0];
    if (f === "'")
      return { isToken: !1, value: iC(m) };
    if (Al[f])
      return { isToken: !0, value: m };
    if (f.match(aC))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: m };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((m) => {
    if (!m.isToken) return m.value;
    const f = m.value;
    (!n?.useAdditionalWeekYearTokens && gf(f) || !n?.useAdditionalDayOfYearTokens && hf(f)) && Ja(f, e, String(t));
    const p = Al[f[0]];
    return p(i, f, o.localize, u);
  }).join("");
}
function iC(t) {
  const e = t.match(oC);
  return e ? e[1].replace(sC, "'") : t;
}
function cC(t, e) {
  const n = de(t, e?.in), r = n.getFullYear(), o = n.getMonth(), s = ye(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function lC() {
  return Object.assign({}, Bn());
}
function uC(t, e) {
  const n = de(t, e?.in).getDay();
  return n === 0 ? 7 : n;
}
function dC(t, e) {
  return de(t, e?.in).getMonth();
}
function fC(t, e) {
  return de(t, e?.in).getFullYear();
}
function mC(t, e) {
  return +de(t) > +de(e);
}
function pC(t, e) {
  return +de(t) < +de(e);
}
function hC(t, e) {
  const n = gC(e) ? new e(0) : ye(e, 0);
  return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), n;
}
function gC(t) {
  return typeof t == "function" && t.prototype?.constructor === t;
}
const vC = 10;
class vf {
  subPriority = 0;
  validate(e, n) {
    return !0;
  }
}
class bC extends vf {
  constructor(e, n, r, o, s) {
    super(), this.value = e, this.validateValue = n, this.setValue = r, this.priority = o, s && (this.subPriority = s);
  }
  validate(e, n) {
    return this.validateValue(e, this.value, n);
  }
  set(e, n, r) {
    return this.setValue(e, n, this.value, r);
  }
}
class xC extends vf {
  priority = vC;
  subPriority = -1;
  constructor(e, n) {
    super(), this.context = e || ((r) => ye(n, r));
  }
  set(e, n) {
    return n.timestampIsSet ? e : ye(e, hC(e, this.context));
  }
}
class xe {
  run(e, n, r, o) {
    const s = this.parse(e, n, r, o);
    return s ? {
      setter: new bC(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(e, n, r) {
    return !0;
  }
}
class wC extends xe {
  priority = 140;
  parse(e, n, r) {
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(e, { width: "abbreviated" }) || r.era(e, { width: "narrow" });
      // A, B
      case "GGGGG":
        return r.era(e, { width: "narrow" });
      default:
        return r.era(e, { width: "wide" }) || r.era(e, { width: "abbreviated" }) || r.era(e, { width: "narrow" });
    }
  }
  set(e, n, r) {
    return n.era = r, e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
  incompatibleTokens = ["R", "u", "t", "T"];
}
const Ie = {
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
}, St = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Oe(t, e) {
  return t && {
    value: e(t.value),
    rest: t.rest
  };
}
function De(t, e) {
  const n = e.match(t);
  return n ? {
    value: parseInt(n[0], 10),
    rest: e.slice(n[0].length)
  } : null;
}
function Pt(t, e) {
  const n = e.match(t);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: e.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, s = n[3] ? parseInt(n[3], 10) : 0, a = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * ny + s * ty + a * ry),
    rest: e.slice(n[0].length)
  };
}
function bf(t) {
  return De(Ie.anyDigitsSigned, t);
}
function _e(t, e) {
  switch (t) {
    case 1:
      return De(Ie.singleDigit, e);
    case 2:
      return De(Ie.twoDigits, e);
    case 3:
      return De(Ie.threeDigits, e);
    case 4:
      return De(Ie.fourDigits, e);
    default:
      return De(new RegExp("^\\d{1," + t + "}"), e);
  }
}
function rs(t, e) {
  switch (t) {
    case 1:
      return De(Ie.singleDigitSigned, e);
    case 2:
      return De(Ie.twoDigitsSigned, e);
    case 3:
      return De(Ie.threeDigitsSigned, e);
    case 4:
      return De(Ie.fourDigitsSigned, e);
    default:
      return De(new RegExp("^-?\\d{1," + t + "}"), e);
  }
}
function Hi(t) {
  switch (t) {
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
function xf(t, e) {
  const n = e > 0, r = n ? e : 1 - e;
  let o;
  if (r <= 50)
    o = t || 100;
  else {
    const s = r + 50, a = Math.trunc(s / 100) * 100, i = t >= s % 100;
    o = t + a - (i ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function wf(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
class yC extends xe {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
  parse(e, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "yy"
    });
    switch (n) {
      case "y":
        return Oe(_e(4, e), o);
      case "yo":
        return Oe(
          r.ordinalNumber(e, {
            unit: "year"
          }),
          o
        );
      default:
        return Oe(_e(n.length, e), o);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, r) {
    const o = e.getFullYear();
    if (r.isTwoDigitYear) {
      const a = xf(
        r.year,
        o
      );
      return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const s = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class CC extends xe {
  priority = 130;
  parse(e, n, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: n === "YY"
    });
    switch (n) {
      case "Y":
        return Oe(_e(4, e), o);
      case "Yo":
        return Oe(
          r.ordinalNumber(e, {
            unit: "year"
          }),
          o
        );
      default:
        return Oe(_e(n.length, e), o);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, r, o) {
    const s = Vi(e, o);
    if (r.isTwoDigitYear) {
      const i = xf(
        r.year,
        s
      );
      return e.setFullYear(
        i,
        0,
        o.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), Gt(e, o);
    }
    const a = !("era" in n) || n.era === 1 ? r.year : 1 - r.year;
    return e.setFullYear(a, 0, o.firstWeekContainsDate), e.setHours(0, 0, 0, 0), Gt(e, o);
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
class SC extends xe {
  priority = 130;
  parse(e, n) {
    return rs(n === "R" ? 4 : n.length, e);
  }
  set(e, n, r) {
    const o = ye(e, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), Dn(o);
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
class PC extends xe {
  priority = 130;
  parse(e, n) {
    return rs(n === "u" ? 4 : n.length, e);
  }
  set(e, n, r) {
    return e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
class TC extends xe {
  priority = 120;
  parse(e, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ":
        return _e(n.length, e);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, r) {
    return e.setMonth((r - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
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
class RC extends xe {
  priority = 120;
  parse(e, n, r) {
    switch (n) {
      // 1, 2, 3, 4
      case "q":
      case "qq":
        return _e(n.length, e);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(e, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, r) {
    return e.setMonth((r - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
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
class EC extends xe {
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
  parse(e, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "M":
        return Oe(
          De(Ie.month, e),
          o
        );
      // 01, 02, ..., 12
      case "MM":
        return Oe(_e(2, e), o);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return Oe(
          r.ordinalNumber(e, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, { width: "narrow", context: "formatting" });
      // J, F, ..., D
      case "MMMMM":
        return r.month(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(e, { width: "wide", context: "formatting" }) || r.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, r) {
    return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class MC extends xe {
  priority = 110;
  parse(e, n, r) {
    const o = (s) => s - 1;
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return Oe(
          De(Ie.month, e),
          o
        );
      // 01, 02, ..., 12
      case "LL":
        return Oe(_e(2, e), o);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return Oe(
          r.ordinalNumber(e, {
            unit: "month"
          }),
          o
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, { width: "narrow", context: "standalone" });
      // J, F, ..., D
      case "LLLLL":
        return r.month(e, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(e, { width: "wide", context: "standalone" }) || r.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, r) {
    return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e;
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
function kC(t, e, n) {
  const r = de(t, n?.in), o = Ts(r, n) - e;
  return r.setDate(r.getDate() - o * 7), de(r, n?.in);
}
class DC extends xe {
  priority = 100;
  parse(e, n, r) {
    switch (n) {
      case "w":
        return De(Ie.week, e);
      case "wo":
        return r.ordinalNumber(e, { unit: "week" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, r, o) {
    return Gt(kC(e, r, o), o);
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
function NC(t, e, n) {
  const r = de(t, n?.in), o = Ps(r, n) - e;
  return r.setDate(r.getDate() - o * 7), r;
}
class _C extends xe {
  priority = 100;
  parse(e, n, r) {
    switch (n) {
      case "I":
        return De(Ie.week, e);
      case "Io":
        return r.ordinalNumber(e, { unit: "week" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, r) {
    return Dn(NC(e, r));
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
const IC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], OC = [
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
class AC extends xe {
  priority = 90;
  subPriority = 1;
  parse(e, n, r) {
    switch (n) {
      case "d":
        return De(Ie.date, e);
      case "do":
        return r.ordinalNumber(e, { unit: "date" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    const r = e.getFullYear(), o = wf(r), s = e.getMonth();
    return o ? n >= 1 && n <= OC[s] : n >= 1 && n <= IC[s];
  }
  set(e, n, r) {
    return e.setDate(r), e.setHours(0, 0, 0, 0), e;
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
class jC extends xe {
  priority = 90;
  subpriority = 1;
  parse(e, n, r) {
    switch (n) {
      case "D":
      case "DD":
        return De(Ie.dayOfYear, e);
      case "Do":
        return r.ordinalNumber(e, { unit: "date" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    const r = e.getFullYear();
    return wf(r) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(e, n, r) {
    return e.setMonth(0, r), e.setHours(0, 0, 0, 0), e;
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
function zi(t, e, n) {
  const r = Bn(), o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = de(t, n?.in), a = s.getDay(), c = (e % 7 + 7) % 7, u = 7 - o, m = e < 0 || e > 6 ? e - (a + u) % 7 : (c + u) % 7 - (a + u) % 7;
  return lo(s, m, n);
}
class FC extends xe {
  priority = 90;
  parse(e, n, r) {
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // T
      case "EEEEE":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      default:
        return r.day(e, { width: "wide", context: "formatting" }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, r, o) {
    return e = zi(e, r, o), e.setHours(0, 0, 0, 0), e;
  }
  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}
class LC extends xe {
  priority = 90;
  parse(e, n, r, o) {
    const s = (a) => {
      const i = Math.floor((a - 1) / 7) * 7;
      return (a + o.weekStartsOn + 6) % 7 + i;
    };
    switch (n) {
      // 3
      case "e":
      case "ee":
        return Oe(_e(n.length, e), s);
      // 3rd
      case "eo":
        return Oe(
          r.ordinalNumber(e, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "eee":
        return r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      // T
      case "eeeee":
        return r.day(e, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
      default:
        return r.day(e, { width: "wide", context: "formatting" }) || r.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(e, { width: "short", context: "formatting" }) || r.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, r, o) {
    return e = zi(e, r, o), e.setHours(0, 0, 0, 0), e;
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
class $C extends xe {
  priority = 90;
  parse(e, n, r, o) {
    const s = (a) => {
      const i = Math.floor((a - 1) / 7) * 7;
      return (a + o.weekStartsOn + 6) % 7 + i;
    };
    switch (n) {
      // 3
      case "c":
      case "cc":
        return Oe(_e(n.length, e), s);
      // 3rd
      case "co":
        return Oe(
          r.ordinalNumber(e, {
            unit: "day"
          }),
          s
        );
      // Tue
      case "ccc":
        return r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
      // T
      case "ccccc":
        return r.day(e, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
      default:
        return r.day(e, { width: "wide", context: "standalone" }) || r.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(e, { width: "short", context: "standalone" }) || r.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, r, o) {
    return e = zi(e, r, o), e.setHours(0, 0, 0, 0), e;
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
function WC(t, e, n) {
  const r = de(t, n?.in), o = uC(r, n), s = e - o;
  return lo(r, s, n);
}
class BC extends xe {
  priority = 90;
  parse(e, n, r) {
    const o = (s) => s === 0 ? 7 : s;
    switch (n) {
      // 2
      case "i":
      case "ii":
        return _e(n.length, e);
      // 2nd
      case "io":
        return r.ordinalNumber(e, { unit: "day" });
      // Tue
      case "iii":
        return Oe(
          r.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // T
      case "iiiii":
        return Oe(
          r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      // Tu
      case "iiiiii":
        return Oe(
          r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      default:
        return Oe(
          r.day(e, {
            width: "wide",
            context: "formatting"
          }) || r.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(e, {
            width: "short",
            context: "formatting"
          }) || r.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 7;
  }
  set(e, n, r) {
    return e = WC(e, r), e.setHours(0, 0, 0, 0), e;
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
class VC extends xe {
  priority = 80;
  parse(e, n, r) {
    switch (n) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, r) {
    return e.setHours(Hi(r), 0, 0, 0), e;
  }
  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}
class HC extends xe {
  priority = 80;
  parse(e, n, r) {
    switch (n) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, r) {
    return e.setHours(Hi(r), 0, 0, 0), e;
  }
  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}
class zC extends xe {
  priority = 80;
  parse(e, n, r) {
    switch (n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, n, r) {
    return e.setHours(Hi(r), 0, 0, 0), e;
  }
  incompatibleTokens = ["a", "b", "t", "T"];
}
class YC extends xe {
  priority = 70;
  parse(e, n, r) {
    switch (n) {
      case "h":
        return De(Ie.hour12h, e);
      case "ho":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 12;
  }
  set(e, n, r) {
    const o = e.getHours() >= 12;
    return o && r < 12 ? e.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(r, 0, 0, 0), e;
  }
  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
class GC extends xe {
  priority = 70;
  parse(e, n, r) {
    switch (n) {
      case "H":
        return De(Ie.hour23h, e);
      case "Ho":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 23;
  }
  set(e, n, r) {
    return e.setHours(r, 0, 0, 0), e;
  }
  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}
class UC extends xe {
  priority = 70;
  parse(e, n, r) {
    switch (n) {
      case "K":
        return De(Ie.hour11h, e);
      case "Ko":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, r) {
    return e.getHours() >= 12 && r < 12 ? e.setHours(r + 12, 0, 0, 0) : e.setHours(r, 0, 0, 0), e;
  }
  incompatibleTokens = ["h", "H", "k", "t", "T"];
}
class KC extends xe {
  priority = 70;
  parse(e, n, r) {
    switch (n) {
      case "k":
        return De(Ie.hour24h, e);
      case "ko":
        return r.ordinalNumber(e, { unit: "hour" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 24;
  }
  set(e, n, r) {
    const o = r <= 24 ? r % 24 : r;
    return e.setHours(o, 0, 0, 0), e;
  }
  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}
class qC extends xe {
  priority = 60;
  parse(e, n, r) {
    switch (n) {
      case "m":
        return De(Ie.minute, e);
      case "mo":
        return r.ordinalNumber(e, { unit: "minute" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, r) {
    return e.setMinutes(r, 0, 0), e;
  }
  incompatibleTokens = ["t", "T"];
}
class XC extends xe {
  priority = 50;
  parse(e, n, r) {
    switch (n) {
      case "s":
        return De(Ie.second, e);
      case "so":
        return r.ordinalNumber(e, { unit: "second" });
      default:
        return _e(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, r) {
    return e.setSeconds(r, 0), e;
  }
  incompatibleTokens = ["t", "T"];
}
class QC extends xe {
  priority = 30;
  parse(e, n) {
    const r = (o) => Math.trunc(o * Math.pow(10, -n.length + 3));
    return Oe(_e(n.length, e), r);
  }
  set(e, n, r) {
    return e.setMilliseconds(r), e;
  }
  incompatibleTokens = ["t", "T"];
}
class ZC extends xe {
  priority = 10;
  parse(e, n) {
    switch (n) {
      case "X":
        return Pt(
          St.basicOptionalMinutes,
          e
        );
      case "XX":
        return Pt(St.basic, e);
      case "XXXX":
        return Pt(
          St.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return Pt(
          St.extendedOptionalSeconds,
          e
        );
      default:
        return Pt(St.extended, e);
    }
  }
  set(e, n, r) {
    return n.timestampIsSet ? e : ye(
      e,
      e.getTime() - ns(e) - r
    );
  }
  incompatibleTokens = ["t", "T", "x"];
}
class JC extends xe {
  priority = 10;
  parse(e, n) {
    switch (n) {
      case "x":
        return Pt(
          St.basicOptionalMinutes,
          e
        );
      case "xx":
        return Pt(St.basic, e);
      case "xxxx":
        return Pt(
          St.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return Pt(
          St.extendedOptionalSeconds,
          e
        );
      default:
        return Pt(St.extended, e);
    }
  }
  set(e, n, r) {
    return n.timestampIsSet ? e : ye(
      e,
      e.getTime() - ns(e) - r
    );
  }
  incompatibleTokens = ["t", "T", "X"];
}
class eS extends xe {
  priority = 40;
  parse(e) {
    return bf(e);
  }
  set(e, n, r) {
    return [ye(e, r * 1e3), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
class tS extends xe {
  priority = 20;
  parse(e) {
    return bf(e);
  }
  set(e, n, r) {
    return [ye(e, r), { timestampIsSet: !0 }];
  }
  incompatibleTokens = "*";
}
const nS = {
  G: new wC(),
  y: new yC(),
  Y: new CC(),
  R: new SC(),
  u: new PC(),
  Q: new TC(),
  q: new RC(),
  M: new EC(),
  L: new MC(),
  w: new DC(),
  I: new _C(),
  d: new AC(),
  D: new jC(),
  E: new FC(),
  e: new LC(),
  c: new $C(),
  i: new BC(),
  a: new VC(),
  b: new HC(),
  B: new zC(),
  h: new YC(),
  H: new GC(),
  K: new UC(),
  k: new KC(),
  m: new qC(),
  s: new XC(),
  S: new QC(),
  X: new ZC(),
  x: new JC(),
  t: new eS(),
  T: new tS()
}, rS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, sS = /^'([^]*?)'?$/, aS = /''/g, iS = /\S/, cS = /[a-zA-Z]/;
function yf(t, e, n, r) {
  const o = () => ye(n, NaN), s = lC(), a = s.locale ?? Tn, i = s.firstWeekContainsDate ?? s.locale?.options?.firstWeekContainsDate ?? 1, c = s.weekStartsOn ?? s.locale?.options?.weekStartsOn ?? 0;
  if (!e)
    return t ? o() : de(n, r?.in);
  const u = {
    firstWeekContainsDate: i,
    weekStartsOn: c,
    locale: a
  }, m = [new xC(r?.in, n)], f = e.match(oS).map((g) => {
    const x = g[0];
    if (x in Za) {
      const y = Za[x];
      return y(g, a.formatLong);
    }
    return g;
  }).join("").match(rS), p = [];
  for (let g of f) {
    gf(g) && Ja(g, e, t), hf(g) && Ja(g, e, t);
    const x = g[0], y = nS[x];
    if (y) {
      const { incompatibleTokens: w } = y;
      if (Array.isArray(w)) {
        const P = p.find(
          (S) => w.includes(S.token) || S.token === x
        );
        if (P)
          throw new RangeError(
            `The format string mustn't contain \`${P.fullToken}\` and \`${g}\` at the same time`
          );
      } else if (y.incompatibleTokens === "*" && p.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${g}\` and any other token at the same time`
        );
      p.push({ token: x, fullToken: g });
      const C = y.run(
        t,
        g,
        a.match,
        u
      );
      if (!C)
        return o();
      m.push(C.setter), t = C.rest;
    } else {
      if (x.match(cS))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + x + "`"
        );
      if (g === "''" ? g = "'" : x === "'" && (g = lS(g)), t.indexOf(g) === 0)
        t = t.slice(g.length);
      else
        return o();
    }
  }
  if (t.length > 0 && iS.test(t))
    return o();
  const v = m.map((g) => g.priority).sort((g, x) => x - g).filter((g, x, y) => y.indexOf(g) === x).map(
    (g) => m.filter((x) => x.priority === g).sort((x, y) => y.subPriority - x.subPriority)
  ).map((g) => g[0]);
  let b = de(n, r?.in);
  if (isNaN(+b)) return o();
  const h = {};
  for (const g of v) {
    if (!g.validate(b, u))
      return o();
    const x = g.set(b, h, u);
    Array.isArray(x) ? (b = x[0], Object.assign(h, x[1])) : b = x;
  }
  return b;
}
function lS(t) {
  return t.match(sS)[1].replace(aS, "'");
}
function uS(t, e, n) {
  const [r, o] = xr(
    n?.in,
    t,
    e
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function dS(t, e, n) {
  const [r, o] = xr(
    n?.in,
    t,
    e
  );
  return r.getFullYear() === o.getFullYear();
}
function fS(t, e, n) {
  const r = de(t, n?.in), o = r.getFullYear(), s = r.getDate(), a = ye(t, 0);
  a.setFullYear(o, e, 15), a.setHours(0, 0, 0, 0);
  const i = cC(a);
  return r.setMonth(e, Math.min(s, i)), r;
}
function mS(t, e, n) {
  const r = de(t, n?.in);
  return isNaN(+r) ? ye(t, NaN) : (r.setFullYear(e), r);
}
const $l = 5, pS = 4;
function hS(t, e) {
  const n = e.startOfMonth(t), r = n.getDay() > 0 ? n.getDay() : 7, o = e.addDays(t, -r + 1), s = e.addDays(o, $l * 7 - 1);
  return e.getMonth(t) === e.getMonth(s) ? $l : pS;
}
function Cf(t, e) {
  const n = e.startOfMonth(t), r = n.getDay();
  return r === 1 ? n : r === 0 ? e.addDays(n, -6) : e.addDays(n, -1 * (r - 1));
}
function gS(t, e) {
  const n = Cf(t, e), r = hS(t, e);
  return e.addDays(n, r * 7 - 1);
}
const vS = {
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
}, bS = (t, e, n) => {
  let r;
  const o = vS[t];
  return typeof o == "string" ? r = o : e === 1 ? r = o.one : r = o.other.replace("{{count}}", String(e)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, xS = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, wS = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, yS = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, CS = {
  date: ir({
    formats: xS,
    defaultWidth: "full"
  }),
  time: ir({
    formats: wS,
    defaultWidth: "full"
  }),
  dateTime: ir({
    formats: yS,
    defaultWidth: "full"
  })
}, SS = {
  lastWeek: (t) => {
    const e = t.getDay();
    return "'" + (e === 0 || e === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, PS = (t, e, n, r) => {
  const o = SS[t];
  return typeof o == "function" ? o(e) : o;
}, TS = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, RS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, ES = {
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
}, MS = {
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
}, kS = {
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
}, DS = {
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
}, NS = (t, e) => {
  const n = Number(t);
  return e?.unit === "week" ? n + "ª" : n + "º";
}, _S = {
  ordinalNumber: NS,
  era: yt({
    values: TS,
    defaultWidth: "wide"
  }),
  quarter: yt({
    values: RS,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: yt({
    values: ES,
    defaultWidth: "wide"
  }),
  day: yt({
    values: MS,
    defaultWidth: "wide"
  }),
  dayPeriod: yt({
    values: kS,
    defaultWidth: "wide",
    formattingValues: DS,
    defaultFormattingWidth: "wide"
  })
}, IS = /^(\d+)[ºªo]?/i, OS = /\d+/i, AS = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, jS = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, FS = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, LS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $S = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, WS = {
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
}, BS = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, VS = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, HS = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, zS = {
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
}, YS = {
  ordinalNumber: mf({
    matchPattern: IS,
    parsePattern: OS,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ct({
    matchPatterns: AS,
    defaultMatchWidth: "wide",
    parsePatterns: jS,
    defaultParseWidth: "any"
  }),
  quarter: Ct({
    matchPatterns: FS,
    defaultMatchWidth: "wide",
    parsePatterns: LS,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ct({
    matchPatterns: $S,
    defaultMatchWidth: "wide",
    parsePatterns: WS,
    defaultParseWidth: "any"
  }),
  day: Ct({
    matchPatterns: BS,
    defaultMatchWidth: "wide",
    parsePatterns: VS,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ct({
    matchPatterns: HS,
    defaultMatchWidth: "any",
    parsePatterns: zS,
    defaultParseWidth: "any"
  })
}, Sf = {
  code: "pt-BR",
  formatDistance: bS,
  formatLong: CS,
  formatRelative: PS,
  localize: _S,
  match: YS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Pf = {
  ...Tn,
  labels: {
    labelDayButton: (t, e, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => Rn(a, i, { locale: Tn, ...n });
      let s = o(t, "PPPP");
      return e.today && (s = `Today, ${s}`), e.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (t) => `Week ${t}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (t, e, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Rn(o, s, { locale: Tn, ...e }), r(t, "LLLL yyyy");
    },
    labelGridcell: (t, e, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => Rn(a, i, { locale: Tn, ...n });
      let s = o(t, "PPPP");
      return e?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (t, e, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Rn(o, s, { locale: Tn, ...e }), r(t, "cccc");
    }
  }
};
class nt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(e, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Pe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Pe(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : lo(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : $i(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : iy(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : cy(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Wi(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : lf(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : my(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : gy(r), s = new Set(o.map((i) => this.getYear(i)));
      if (s.size === o.length)
        return o;
      const a = [];
      return s.forEach((i) => {
        a.push(new Date(i, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : gS(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : vy(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : fy(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : ff(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : hy(r), this.format = (r, o, s) => {
      const a = this.overrides?.format ? this.overrides.format(r, o, this.options) : Rn(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Ps(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : dC(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : fC(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Ts(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : mC(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : pC(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : cf(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : dy(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : uS(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : dS(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : ly(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : uy(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : fS(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : mS(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Cf(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : zr(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Dn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : py(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Gt(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : df(r), this.options = { locale: Pf, ...e }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: e = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: e
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
  replaceDigits(e) {
    const n = this.getDigitMap();
    return e.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(e) {
    return this.replaceDigits(e.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const e = this.options.locale?.code;
    return e && nt.yearFirstLocales.has(e) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(e) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && nt.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(e);
      } catch {
      }
    const a = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(e, a);
  }
}
nt.yearFirstLocales = /* @__PURE__ */ new Set([
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
const It = new nt();
class Tf {
  constructor(e, n, r = It) {
    this.date = e, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(e, n)), this.dateLib = r, this.isoDate = r.format(e, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(e, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(e) {
    return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
  }
}
class GS {
  constructor(e, n) {
    this.date = e, this.weeks = n;
  }
}
class US {
  constructor(e, n) {
    this.days = n, this.weekNumber = e;
  }
}
function KS(t) {
  return X.createElement("button", { ...t });
}
function qS(t) {
  return X.createElement("span", { ...t });
}
function XS(t) {
  const { size: e = 24, orientation: n = "left", className: r } = t;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    X.createElement(
      "svg",
      { className: r, width: e, height: e, viewBox: "0 0 24 24" },
      n === "up" && X.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && X.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && X.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && X.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function QS(t) {
  const { day: e, modifiers: n, ...r } = t;
  return X.createElement("td", { ...r });
}
function ZS(t) {
  const { day: e, modifiers: n, ...r } = t, o = X.useRef(null);
  return X.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), X.createElement("button", { ref: o, ...r });
}
var re;
(function(t) {
  t.Root = "root", t.Chevron = "chevron", t.Day = "day", t.DayButton = "day_button", t.CaptionLabel = "caption_label", t.Dropdowns = "dropdowns", t.Dropdown = "dropdown", t.DropdownRoot = "dropdown_root", t.Footer = "footer", t.MonthGrid = "month_grid", t.MonthCaption = "month_caption", t.MonthsDropdown = "months_dropdown", t.Month = "month", t.Months = "months", t.Nav = "nav", t.NextMonthButton = "button_next", t.PreviousMonthButton = "button_previous", t.Week = "week", t.Weeks = "weeks", t.Weekday = "weekday", t.Weekdays = "weekdays", t.WeekNumber = "week_number", t.WeekNumberHeader = "week_number_header", t.YearsDropdown = "years_dropdown";
})(re || (re = {}));
var ke;
(function(t) {
  t.disabled = "disabled", t.hidden = "hidden", t.outside = "outside", t.focused = "focused", t.today = "today";
})(ke || (ke = {}));
var ut;
(function(t) {
  t.range_end = "range_end", t.range_middle = "range_middle", t.range_start = "range_start", t.selected = "selected";
})(ut || (ut = {}));
var Je;
(function(t) {
  t.weeks_before_enter = "weeks_before_enter", t.weeks_before_exit = "weeks_before_exit", t.weeks_after_enter = "weeks_after_enter", t.weeks_after_exit = "weeks_after_exit", t.caption_after_enter = "caption_after_enter", t.caption_after_exit = "caption_after_exit", t.caption_before_enter = "caption_before_enter", t.caption_before_exit = "caption_before_exit";
})(Je || (Je = {}));
function JS(t) {
  const { options: e, className: n, components: r, classNames: o, ...s } = t, a = [o[re.Dropdown], n].join(" "), i = e?.find(({ value: c }) => c === s.value);
  return X.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[re.DropdownRoot] },
    X.createElement(r.Select, { className: a, ...s }, e?.map(({ value: c, label: u, disabled: m }) => X.createElement(r.Option, { key: c, value: c, disabled: m }, u))),
    X.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      X.createElement(r.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function e0(t) {
  return X.createElement("div", { ...t });
}
function t0(t) {
  return X.createElement("div", { ...t });
}
function n0(t) {
  const { calendarMonth: e, displayIndex: n, ...r } = t;
  return X.createElement("div", { ...r }, t.children);
}
function r0(t) {
  const { calendarMonth: e, displayIndex: n, ...r } = t;
  return X.createElement("div", { ...r });
}
function o0(t) {
  return X.createElement("table", { ...t });
}
function s0(t) {
  return X.createElement("div", { ...t });
}
const Rf = wg(void 0);
function uo() {
  const t = yg(Rf);
  if (t === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return t;
}
function a0(t) {
  const { components: e } = uo();
  return X.createElement(e.Dropdown, { ...t });
}
function i0(t) {
  const { onPreviousClick: e, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = t, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: u } } = uo(), m = qe((p) => {
    o && n?.(p);
  }, [o, n]), f = qe((p) => {
    r && e?.(p);
  }, [r, e]);
  return X.createElement(
    "nav",
    { ...s },
    X.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[re.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      X.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[re.Chevron], orientation: "left" })
    ),
    X.createElement(
      a.NextMonthButton,
      { type: "button", className: i[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": u(o), onClick: m },
      X.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[re.Chevron] })
    )
  );
}
function c0(t) {
  const { components: e } = uo();
  return X.createElement(e.Button, { ...t });
}
function l0(t) {
  return X.createElement("option", { ...t });
}
function u0(t) {
  const { components: e } = uo();
  return X.createElement(e.Button, { ...t });
}
function d0(t) {
  const { rootRef: e, ...n } = t;
  return X.createElement("div", { ...n, ref: e });
}
function f0(t) {
  return X.createElement("select", { ...t });
}
function m0(t) {
  const { week: e, ...n } = t;
  return X.createElement("tr", { ...n });
}
function p0(t) {
  return X.createElement("th", { ...t });
}
function h0(t) {
  return X.createElement(
    "thead",
    { "aria-hidden": !0 },
    X.createElement("tr", { ...t })
  );
}
function g0(t) {
  const { week: e, ...n } = t;
  return X.createElement("th", { ...n });
}
function v0(t) {
  return X.createElement("th", { ...t });
}
function b0(t) {
  return X.createElement("tbody", { ...t });
}
function x0(t) {
  const { components: e } = uo();
  return X.createElement(e.Dropdown, { ...t });
}
const w0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: KS,
  CaptionLabel: qS,
  Chevron: XS,
  Day: QS,
  DayButton: ZS,
  Dropdown: JS,
  DropdownNav: e0,
  Footer: t0,
  Month: n0,
  MonthCaption: r0,
  MonthGrid: o0,
  Months: s0,
  MonthsDropdown: a0,
  Nav: i0,
  NextMonthButton: c0,
  Option: l0,
  PreviousMonthButton: u0,
  Root: d0,
  Select: f0,
  Week: m0,
  WeekNumber: g0,
  WeekNumberHeader: v0,
  Weekday: p0,
  Weekdays: h0,
  Weeks: b0,
  YearsDropdown: x0
}, Symbol.toStringTag, { value: "Module" }));
function Lt(t, e, n = !1, r = It) {
  let { from: o, to: s } = t;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(e, o) >= (n ? 1 : 0) && a(s, e) >= (n ? 1 : 0)) : !n && s ? i(s, e) : !n && o ? i(o, e) : !1;
}
function Yi(t) {
  return !!(t && typeof t == "object" && "before" in t && "after" in t);
}
function Rs(t) {
  return !!(t && typeof t == "object" && "from" in t);
}
function Gi(t) {
  return !!(t && typeof t == "object" && "after" in t);
}
function Ui(t) {
  return !!(t && typeof t == "object" && "before" in t);
}
function Ef(t) {
  return !!(t && typeof t == "object" && "dayOfWeek" in t);
}
function Mf(t, e) {
  return Array.isArray(t) && t.every(e.isDate);
}
function $t(t, e, n = It) {
  const r = Array.isArray(e) ? e : [e], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(t, i);
    if (Mf(i, n))
      return i.some((c) => o(t, c));
    if (Rs(i))
      return Lt(i, t, !1, n);
    if (Ef(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(t.getDay()) : i.dayOfWeek === t.getDay();
    if (Yi(i)) {
      const c = s(i.before, t), u = s(i.after, t), m = c > 0, f = u < 0;
      return a(i.before, i.after) ? f && m : m || f;
    }
    return Gi(i) ? s(t, i.after) > 0 : Ui(i) ? s(i.before, t) > 0 : typeof i == "function" ? i(t) : !1;
  });
}
function y0(t, e, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: u, today: m = o.today() } = e, { isSameDay: f, isSameMonth: p, startOfMonth: v, isBefore: b, endOfMonth: h, isAfter: g } = o, x = n && v(n), y = r && h(r), w = {
    [ke.focused]: [],
    [ke.outside]: [],
    [ke.disabled]: [],
    [ke.hidden]: [],
    [ke.today]: []
  }, C = {};
  for (const P of t) {
    const { date: S, displayMonth: T } = P, R = !!(T && !p(S, T)), M = !!(x && b(S, x)), D = !!(y && g(S, y)), I = !!(s && $t(S, s, o)), O = !!(a && $t(S, a, o)) || M || D || // Broadcast calendar will show outside days as default
    !u && !c && R || u && c === !1 && R, $ = f(S, m);
    R && w.outside.push(P), I && w.disabled.push(P), O && w.hidden.push(P), $ && w.today.push(P), i && Object.keys(i).forEach((_) => {
      const W = i?.[_];
      W && $t(S, W, o) && (C[_] ? C[_].push(P) : C[_] = [P]);
    });
  }
  return (P) => {
    const S = {
      [ke.focused]: !1,
      [ke.disabled]: !1,
      [ke.hidden]: !1,
      [ke.outside]: !1,
      [ke.today]: !1
    }, T = {};
    for (const R in w) {
      const M = w[R];
      S[R] = M.some((D) => D === P);
    }
    for (const R in C)
      T[R] = C[R].some((M) => M === P);
    return {
      ...S,
      // custom modifiers should override all the previous ones
      ...T
    };
  };
}
function C0(t, e, n = {}) {
  return Object.entries(t).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : e[ke[s]] ? o.push(e[ke[s]]) : e[ut[s]] && o.push(e[ut[s]]), o), [e[re.Day]]);
}
function S0(t) {
  return {
    ...w0,
    ...t
  };
}
function P0(t) {
  const e = {
    "data-mode": t.mode ?? void 0,
    "data-required": "required" in t ? t.required : void 0,
    "data-multiple-months": t.numberOfMonths && t.numberOfMonths > 1 || void 0,
    "data-week-numbers": t.showWeekNumber || void 0,
    "data-broadcast-calendar": t.broadcastCalendar || void 0,
    "data-nav-layout": t.navLayout || void 0
  };
  return Object.entries(t).forEach(([n, r]) => {
    n.startsWith("data-") && (e[n] = r);
  }), e;
}
function Ki() {
  const t = {};
  for (const e in re)
    t[re[e]] = `rdp-${re[e]}`;
  for (const e in ke)
    t[ke[e]] = `rdp-${ke[e]}`;
  for (const e in ut)
    t[ut[e]] = `rdp-${ut[e]}`;
  for (const e in Je)
    t[Je[e]] = `rdp-${Je[e]}`;
  return t;
}
function kf(t, e, n) {
  return (n ?? new nt(e)).formatMonthYear(t);
}
const T0 = kf;
function R0(t, e, n) {
  return (n ?? new nt(e)).format(t, "d");
}
function E0(t, e = It) {
  return e.format(t, "LLLL");
}
function M0(t, e, n) {
  return (n ?? new nt(e)).format(t, "cccccc");
}
function k0(t, e = It) {
  return t < 10 ? e.formatNumber(`0${t.toLocaleString()}`) : e.formatNumber(`${t.toLocaleString()}`);
}
function D0() {
  return "";
}
function Df(t, e = It) {
  return e.format(t, "yyyy");
}
const N0 = Df, _0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: kf,
  formatDay: R0,
  formatMonthCaption: T0,
  formatMonthDropdown: E0,
  formatWeekNumber: k0,
  formatWeekNumberHeader: D0,
  formatWeekdayName: M0,
  formatYearCaption: N0,
  formatYearDropdown: Df
}, Symbol.toStringTag, { value: "Module" }));
function I0(t) {
  return t?.formatMonthCaption && !t.formatCaption && (t.formatCaption = t.formatMonthCaption), t?.formatYearCaption && !t.formatYearDropdown && (t.formatYearDropdown = t.formatYearCaption), {
    ..._0,
    ...t
  };
}
function qi(t, e, n, r) {
  let o = (r ?? new nt(n)).format(t, "PPPP");
  return e.today && (o = `Today, ${o}`), e.selected && (o = `${o}, selected`), o;
}
const O0 = qi;
function Xi(t, e, n) {
  return (n ?? new nt(e)).formatMonthYear(t);
}
const A0 = Xi;
function Nf(t, e, n, r) {
  let o = (r ?? new nt(n)).format(t, "PPPP");
  return e?.today && (o = `Today, ${o}`), o;
}
function _f(t) {
  return "Choose the Month";
}
function If() {
  return "";
}
const j0 = "Go to the Next Month";
function Of(t, e) {
  return j0;
}
function Af(t) {
  return "Go to the Previous Month";
}
function jf(t, e, n) {
  return (n ?? new nt(e)).format(t, "cccc");
}
function Ff(t, e) {
  return `Week ${t}`;
}
function Lf(t) {
  return "Week Number";
}
function $f(t) {
  return "Choose the Year";
}
const F0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: A0,
  labelDay: O0,
  labelDayButton: qi,
  labelGrid: Xi,
  labelGridcell: Nf,
  labelMonthDropdown: _f,
  labelNav: If,
  labelNext: Of,
  labelPrevious: Af,
  labelWeekNumber: Ff,
  labelWeekNumberHeader: Lf,
  labelWeekday: jf,
  labelYearDropdown: $f
}, Symbol.toStringTag, { value: "Module" })), ct = (t, e, n) => e || (n ? typeof n == "function" ? n : (...r) => n : t);
function L0(t, e) {
  const n = e.locale?.labels ?? {};
  return {
    ...F0,
    ...t ?? {},
    labelDayButton: ct(qi, t?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ct(_f, t?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ct(Of, t?.labelNext, n.labelNext),
    labelPrevious: ct(Af, t?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ct(Ff, t?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ct($f, t?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ct(Xi, t?.labelGrid, n.labelGrid),
    labelGridcell: ct(Nf, t?.labelGridcell, n.labelGridcell),
    labelNav: ct(If, t?.labelNav, n.labelNav),
    labelWeekNumberHeader: ct(Lf, t?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ct(jf, t?.labelWeekday, n.labelWeekday)
  };
}
function $0(t, e, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: u } = o;
  return c({
    start: a(t),
    end: i(t)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), b = u(p), h = e && p < s(e) || n && p > s(n) || !1;
    return { value: b, label: v, disabled: h };
  });
}
function W0(t, e = {}, n = {}) {
  let r = { ...e?.[re.Day] };
  return Object.entries(t).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function B0(t, e, n, r) {
  const o = r ?? t.today(), s = n ? t.startOfBroadcastWeek(o, t) : e ? t.startOfISOWeek(o) : t.startOfWeek(o), a = [];
  for (let i = 0; i < 7; i++) {
    const c = t.addDays(s, i);
    a.push(c);
  }
  return a;
}
function V0(t, e, n, r, o = !1) {
  if (!t || !e)
    return;
  const { startOfYear: s, endOfYear: a, eachYearOfInterval: i, getYear: c } = r, u = s(t), m = a(e), f = i({ start: u, end: m });
  return o && f.reverse(), f.map((p) => {
    const v = n.formatYearDropdown(p, r);
    return {
      value: c(p),
      label: v,
      disabled: !1
    };
  });
}
function H0(t, e = {}) {
  const { weekStartsOn: n, locale: r } = e, o = n ?? r?.options?.weekStartsOn ?? 0, s = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new Pe(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, t);
  }, a = (i) => {
    const c = s(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Pe.tz(t)),
    newDate: (i, c, u) => new Pe(i, c, u, 12, 0, 0, t),
    startOfDay: (i) => s(i),
    startOfWeek: (i, c) => {
      const u = s(i), m = c?.weekStartsOn ?? o, f = (u.getDay() - m + 7) % 7;
      return u.setDate(u.getDate() - f), u;
    },
    startOfISOWeek: (i) => {
      const c = s(i), u = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - u), c;
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
      const u = s(i), p = (((c?.weekStartsOn ?? o) + 6) % 7 - u.getDay() + 7) % 7;
      return u.setDate(u.getDate() + p), u;
    },
    endOfISOWeek: (i) => {
      const c = s(i), u = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + u), c;
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
      const c = s(i.start), u = s(i.end), m = [], f = new Pe(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, t), p = u.getFullYear() * 12 + u.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= p; )
        m.push(new Pe(f, t)), f.setMonth(f.getMonth() + 1, 1);
      return m;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (i, c) => {
      const u = s(i);
      return u.setDate(u.getDate() + c), u;
    },
    addWeeks: (i, c) => {
      const u = s(i);
      return u.setDate(u.getDate() + c * 7), u;
    },
    addMonths: (i, c) => {
      const u = s(i);
      return u.setMonth(u.getMonth() + c), u;
    },
    addYears: (i, c) => {
      const u = s(i);
      return u.setFullYear(u.getFullYear() + c), u;
    },
    eachYearOfInterval: (i) => {
      const c = s(i.start), u = s(i.end), m = [], f = new Pe(c.getFullYear(), 0, 1, 12, 0, 0, t);
      for (; f.getFullYear() <= u.getFullYear(); )
        m.push(new Pe(f, t)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (i, c) => {
      const u = a(i);
      return Ts(u, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = a(i);
      return Ps(c);
    },
    differenceInCalendarDays: (i, c) => {
      const u = a(i), m = a(c);
      return Wi(u, m);
    },
    differenceInCalendarMonths: (i, c) => {
      const u = a(i), m = a(c);
      return lf(u, m);
    }
  };
}
const fo = (t) => t instanceof HTMLElement ? t : null, Sa = (t) => [
  ...t.querySelectorAll("[data-animated-month]") ?? []
], z0 = (t) => fo(t.querySelector("[data-animated-month]")), Pa = (t) => fo(t.querySelector("[data-animated-caption]")), Ta = (t) => fo(t.querySelector("[data-animated-weeks]")), Y0 = (t) => fo(t.querySelector("[data-animated-nav]")), G0 = (t) => fo(t.querySelector("[data-animated-weekdays]"));
function U0(t, e, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = Tt(null), i = Tt(r), c = Tt(!1);
  Ru(() => {
    const u = i.current;
    if (i.current = r, !e || !t.current || // safety check because the ref can be set to anything by consumers
    !(t.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const m = s.isSameMonth(r[0].date, u[0].date), f = s.isAfter(r[0].date, u[0].date), p = f ? n[Je.caption_after_enter] : n[Je.caption_before_enter], v = f ? n[Je.weeks_after_enter] : n[Je.weeks_before_enter], b = a.current, h = t.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Sa(h).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const C = z0(w);
      C && w.contains(C) && w.removeChild(C);
      const P = Pa(w);
      P && P.classList.remove(p);
      const S = Ta(w);
      S && S.classList.remove(v);
    }), a.current = h) : a.current = null, c.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = b instanceof HTMLElement ? Sa(b) : [], x = Sa(t.current);
    if (x?.every((y) => y instanceof HTMLElement) && g && g.every((y) => y instanceof HTMLElement)) {
      c.current = !0, t.current.style.isolation = "isolate";
      const y = Y0(t.current);
      y && (y.style.zIndex = "1"), x.forEach((w, C) => {
        const P = g[C];
        if (!P)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const S = Pa(w);
        S && S.classList.add(p);
        const T = Ta(w);
        T && T.classList.add(v);
        const R = () => {
          c.current = !1, t.current && (t.current.style.isolation = ""), y && (y.style.zIndex = ""), S && S.classList.remove(p), T && T.classList.remove(v), w.style.position = "", w.style.overflow = "", w.contains(P) && w.removeChild(P);
        };
        P.style.pointerEvents = "none", P.style.position = "absolute", P.style.overflow = "hidden", P.setAttribute("aria-hidden", "true");
        const M = G0(P);
        M && (M.style.opacity = "0");
        const D = Pa(P);
        D && (D.classList.add(f ? n[Je.caption_before_exit] : n[Je.caption_after_exit]), D.addEventListener("animationend", R));
        const I = Ta(P);
        I && I.classList.add(f ? n[Je.weeks_before_exit] : n[Je.weeks_after_exit]), w.insertBefore(P, w.firstChild);
      });
    }
  });
}
function K0(t, e, n, r) {
  const o = t[0], s = t[t.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: u, differenceInCalendarDays: m, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: b, endOfWeek: h, isAfter: g, startOfBroadcastWeek: x, startOfISOWeek: y, startOfWeek: w } = r, C = c ? x(o, r) : a ? y(o) : w(o), P = c ? p(s) : a ? v(b(s)) : h(b(s)), S = e && (c ? p(e) : a ? v(e) : h(e)), T = S && g(P, S) ? S : P, R = m(T, C), M = f(s, o) + 1, D = [];
  for (let $ = 0; $ <= R; $++) {
    const _ = u(C, $);
    D.push(_);
  }
  const O = (c ? 35 : 42) * M;
  if (i && D.length < O) {
    const $ = O - D.length;
    for (let _ = 0; _ < $; _++) {
      const W = u(D[D.length - 1], 1);
      D.push(W);
    }
  }
  return D;
}
function q0(t) {
  const e = [];
  return t.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), e.slice());
    return n.concat(o.slice());
  }, e.slice());
}
function X0(t, e, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(t, a);
    if (e && i > e)
      break;
    s.push(i);
  }
  return s;
}
function Wl(t, e, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = t;
  let c = o || s || a;
  const { differenceInCalendarMonths: u, addMonths: m, startOfMonth: f } = r;
  if (n && u(n, c) < i - 1) {
    const p = -1 * (i - 1);
    c = m(n, p);
  }
  return e && u(c, e) < 0 && (c = e), f(c);
}
function Q0(t, e, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: u, getWeek: m, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: v } = r, b = t.reduce((h, g) => {
    const x = n.broadcastCalendar ? f(g, r) : n.ISOWeek ? p(g) : v(g), y = n.broadcastCalendar ? s(g) : n.ISOWeek ? a(i(g)) : c(i(g)), w = e.filter((T) => T >= x && T <= y), C = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < C) {
      const T = e.filter((R) => {
        const M = C - w.length;
        return R > y && R <= o(y, M);
      });
      w.push(...T);
    }
    const P = w.reduce((T, R) => {
      const M = n.ISOWeek ? u(R) : m(R), D = T.find((O) => O.weekNumber === M), I = new Tf(R, g, r);
      return D ? D.days.push(I) : T.push(new US(M, [I])), T;
    }, []), S = new GS(g, P);
    return h.push(S), h;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function Z0(t, e) {
  let { startMonth: n, endMonth: r } = t;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: u, newDate: m, today: f } = e, { fromYear: p, toYear: v, fromMonth: b, toMonth: h } = t;
  !n && b && (n = b), !n && p && (n = e.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = m(v, 11, 31));
  const g = t.captionLayout === "dropdown" || t.captionLayout === "dropdown-years";
  return n ? n = a(n) : p ? n = m(p, 0, 1) : !n && g && (n = o(c(t.today ?? f(), -100))), r ? r = i(r) : v ? r = m(v, 11, 31) : !r && g && (r = u(t.today ?? f())), [
    n && s(n),
    r && s(r)
  ];
}
function J0(t, e, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, u = o ? s : 1, m = a(t);
  if (!e)
    return i(m, u);
  if (!(c(e, t) < s))
    return i(m, u);
}
function eP(t, e, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, u = o ? s ?? 1 : 1, m = a(t);
  if (!e)
    return i(m, -u);
  if (!(c(m, e) <= 0))
    return i(m, -u);
}
function tP(t) {
  const e = [];
  return t.reduce((n, r) => n.concat(r.weeks.slice()), e.slice());
}
function Es(t, e) {
  const [n, r] = at(t);
  return [e === void 0 ? n : e, r];
}
function nP(t, e) {
  const [n, r] = Z0(t, e), { startOfMonth: o, endOfMonth: s } = e, a = Wl(t, n, r, e), [i, c] = Es(
    a,
    // initialMonth is always computed from props.month if provided
    t.month ? a : void 0
  );
  Wt(() => {
    const C = Wl(t, n, r, e);
    c(C);
  }, [t.timeZone]);
  const { months: u, weeks: m, days: f, previousMonth: p, nextMonth: v } = zo(() => {
    const C = X0(i, r, { numberOfMonths: t.numberOfMonths }, e), P = K0(C, t.endMonth ? s(t.endMonth) : void 0, {
      ISOWeek: t.ISOWeek,
      fixedWeeks: t.fixedWeeks,
      broadcastCalendar: t.broadcastCalendar
    }, e), S = Q0(C, P, {
      broadcastCalendar: t.broadcastCalendar,
      fixedWeeks: t.fixedWeeks,
      ISOWeek: t.ISOWeek,
      reverseMonths: t.reverseMonths
    }, e), T = tP(S), R = q0(S), M = eP(i, n, t, e), D = J0(i, r, t, e);
    return {
      months: S,
      weeks: T,
      days: R,
      previousMonth: M,
      nextMonth: D
    };
  }, [
    e,
    i.getTime(),
    r?.getTime(),
    n?.getTime(),
    t.disableNavigation,
    t.broadcastCalendar,
    t.endMonth?.getTime(),
    t.fixedWeeks,
    t.ISOWeek,
    t.numberOfMonths,
    t.pagedNavigation,
    t.reverseMonths
  ]), { disableNavigation: b, onMonthChange: h } = t, g = (C) => m.some((P) => P.days.some((S) => S.isEqualTo(C))), x = (C) => {
    if (b)
      return;
    let P = o(C);
    n && P < o(n) && (P = o(n)), r && P > o(r) && (P = o(r)), c(P), h?.(P);
  };
  return {
    months: u,
    weeks: m,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: p,
    nextMonth: v,
    goToMonth: x,
    goToDay: (C) => {
      g(C) || x(C.date);
    }
  };
}
var xt;
(function(t) {
  t[t.Today = 0] = "Today", t[t.Selected = 1] = "Selected", t[t.LastFocused = 2] = "LastFocused", t[t.FocusedModifier = 3] = "FocusedModifier";
})(xt || (xt = {}));
function Bl(t) {
  return !t[ke.disabled] && !t[ke.hidden] && !t[ke.outside];
}
function rP(t, e, n, r) {
  let o, s = -1;
  for (const a of t) {
    const i = e(a);
    Bl(i) && (i[ke.focused] && s < xt.FocusedModifier ? (o = a, s = xt.FocusedModifier) : r?.isEqualTo(a) && s < xt.LastFocused ? (o = a, s = xt.LastFocused) : n(a.date) && s < xt.Selected ? (o = a, s = xt.Selected) : i[ke.today] && s < xt.Today && (o = a, s = xt.Today));
  }
  return o || (o = t.find((a) => Bl(e(a)))), o;
}
function oP(t, e, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: u, addMonths: m, addWeeks: f, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: b, endOfWeek: h, max: g, min: x, startOfBroadcastWeek: y, startOfISOWeek: w, startOfWeek: C } = a;
  let S = {
    day: u,
    week: f,
    month: m,
    year: p,
    startOfWeek: (T) => c ? y(T, a) : i ? w(T) : C(T),
    endOfWeek: (T) => c ? v(T) : i ? b(T) : h(T)
  }[t](n, e === "after" ? 1 : -1);
  return e === "before" && r ? S = g([r, S]) : e === "after" && o && (S = x([o, S])), S;
}
function Wf(t, e, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = oP(t, e, n.date, r, o, s, a), u = !!(s.disabled && $t(c, s.disabled, a)), m = !!(s.hidden && $t(c, s.hidden, a)), f = c, p = new Tf(c, f, a);
  return !u && !m ? p : Wf(t, e, p, r, o, s, a, i + 1);
}
function sP(t, e, n, r, o) {
  const { autoFocus: s } = t, [a, i] = at(), c = rP(e.days, n, r || (() => !1), a), [u, m] = at(s ? c : void 0);
  return {
    isFocusTarget: (h) => !!c?.isEqualTo(h),
    setFocused: m,
    focused: u,
    blur: () => {
      i(u), m(void 0);
    },
    moveFocus: (h, g) => {
      if (!u)
        return;
      const x = Wf(h, g, u, e.navStart, e.navEnd, t, o);
      x && (t.disableNavigation && !e.days.some((w) => w.isEqualTo(x)) || (e.goToDay(x), m(x)));
    }
  };
}
function aP(t, e) {
  const { selected: n, required: r, onSelect: o } = t, [s, a] = Es(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = e, u = (v) => i?.some((b) => c(b, v)) ?? !1, { min: m, max: f } = t;
  return {
    selected: i,
    select: (v, b, h) => {
      let g = [...i ?? []];
      if (u(v)) {
        if (i?.length === m || r && i?.length === 1)
          return;
        g = i?.filter((x) => !c(x, v));
      } else
        i?.length === f ? g = [v] : g = [...g, v];
      return o || a(g), o?.(g, v, b, h), g;
    },
    isSelected: u
  };
}
function iP(t, e, n = 0, r = 0, o = !1, s = It) {
  const { from: a, to: i } = e || {}, { isSameDay: c, isAfter: u, isBefore: m } = s;
  let f;
  if (!a && !i)
    f = { from: t, to: n > 0 ? void 0 : t };
  else if (a && !i)
    c(a, t) ? n === 0 ? f = { from: a, to: t } : o ? f = { from: a, to: void 0 } : f = void 0 : m(t, a) ? f = { from: t, to: a } : f = { from: a, to: t };
  else if (a && i)
    if (c(a, t) && c(i, t))
      o ? f = { from: a, to: i } : f = void 0;
    else if (c(a, t))
      f = { from: a, to: n > 0 ? void 0 : t };
    else if (c(i, t))
      f = { from: t, to: n > 0 ? void 0 : t };
    else if (m(t, a))
      f = { from: t, to: i };
    else if (u(t, a))
      f = { from: a, to: t };
    else if (u(t, i))
      f = { from: a, to: t };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const p = s.differenceInCalendarDays(f.to, f.from);
    r > 0 && p > r ? f = { from: t, to: void 0 } : n > 1 && p < n && (f = { from: t, to: void 0 });
  }
  return f;
}
function cP(t, e, n = It) {
  const r = Array.isArray(e) ? e : [e];
  let o = t.from;
  const s = n.differenceInCalendarDays(t.to, t.from), a = Math.min(s, 6);
  for (let i = 0; i <= a; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Vl(t, e, n = It) {
  return Lt(t, e.from, !1, n) || Lt(t, e.to, !1, n) || Lt(e, t.from, !1, n) || Lt(e, t.to, !1, n);
}
function lP(t, e, n = It) {
  const r = Array.isArray(e) ? e : [e];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Lt(t, i, !1, n) : Mf(i, n) ? i.some((c) => Lt(t, c, !1, n)) : Rs(i) ? i.from && i.to ? Vl(t, { from: i.from, to: i.to }, n) : !1 : Ef(i) ? cP(t, i.dayOfWeek, n) : Yi(i) ? n.isAfter(i.before, i.after) ? Vl(t, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : $t(t.from, i, n) || $t(t.to, i, n) : Gi(i) || Ui(i) ? $t(t.from, i, n) || $t(t.to, i, n) : !1))
    return !0;
  const a = r.filter((i) => typeof i == "function");
  if (a.length) {
    let i = t.from;
    const c = n.differenceInCalendarDays(t.to, t.from);
    for (let u = 0; u <= c; u++) {
      if (a.some((m) => m(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function uP(t, e) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = t, [i, c] = Es(o, a ? o : void 0), u = a ? o : i;
  return {
    selected: u,
    select: (p, v, b) => {
      const { min: h, max: g } = t, x = p ? iP(p, u, h, g, s, e) : void 0;
      return r && n && x?.from && x.to && lP({ from: x.from, to: x.to }, n, e) && (x.from = p, x.to = void 0), a || c(x), a?.(x, p, v, b), x;
    },
    isSelected: (p) => u && Lt(u, p, !1, e)
  };
}
function dP(t, e) {
  const { selected: n, required: r, onSelect: o } = t, [s, a] = Es(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = e;
  return {
    selected: i,
    select: (f, p, v) => {
      let b = f;
      return !r && i && i && c(f, i) && (b = void 0), o || a(b), o?.(b, f, p, v), b;
    },
    isSelected: (f) => i ? c(i, f) : !1
  };
}
function fP(t, e) {
  const n = dP(t, e), r = aP(t, e), o = uP(t, e);
  switch (t.mode) {
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
function ot(t, e) {
  return t instanceof Pe && t.timeZone === e ? t : new Pe(t, e);
}
function nr(t, e, n) {
  return ot(t, e);
}
function Hl(t, e, n) {
  return typeof t == "boolean" || typeof t == "function" ? t : t instanceof Date ? nr(t, e) : Array.isArray(t) ? t.map((r) => r instanceof Date ? nr(r, e) : r) : Rs(t) ? {
    ...t,
    from: t.from ? ot(t.from, e) : t.from,
    to: t.to ? ot(t.to, e) : t.to
  } : Yi(t) ? {
    before: nr(t.before, e),
    after: nr(t.after, e)
  } : Gi(t) ? {
    after: nr(t.after, e)
  } : Ui(t) ? {
    before: nr(t.before, e)
  } : t;
}
function Ra(t, e, n) {
  return t && (Array.isArray(t) ? t.map((r) => Hl(r, e)) : Hl(t, e));
}
function mP(t) {
  let e = t;
  const n = e.timeZone;
  if (n && (e = {
    ...t,
    timeZone: n
  }, e.today && (e.today = ot(e.today, n)), e.month && (e.month = ot(e.month, n)), e.defaultMonth && (e.defaultMonth = ot(e.defaultMonth, n)), e.startMonth && (e.startMonth = ot(e.startMonth, n)), e.endMonth && (e.endMonth = ot(e.endMonth, n)), e.mode === "single" && e.selected ? e.selected = ot(e.selected, n) : e.mode === "multiple" && e.selected ? e.selected = e.selected?.map((ie) => ot(ie, n)) : e.mode === "range" && e.selected && (e.selected = {
    from: e.selected.from ? ot(e.selected.from, n) : e.selected.from,
    to: e.selected.to ? ot(e.selected.to, n) : e.selected.to
  }), e.disabled !== void 0 && (e.disabled = Ra(e.disabled, n)), e.hidden !== void 0 && (e.hidden = Ra(e.hidden, n)), e.modifiers)) {
    const ie = {};
    Object.keys(e.modifiers).forEach((ve) => {
      ie[ve] = Ra(e.modifiers?.[ve], n);
    }), e.modifiers = ie;
  }
  const { components: r, formatters: o, labels: s, dateLib: a, locale: i, classNames: c } = zo(() => {
    const ie = { ...Pf, ...e.locale }, ve = e.broadcastCalendar ? 1 : e.weekStartsOn, se = e.noonSafe && e.timeZone ? H0(e.timeZone, {
      weekStartsOn: ve,
      locale: ie
    }) : void 0, he = e.dateLib && se ? { ...se, ...e.dateLib } : e.dateLib ?? se, Ve = new nt({
      locale: ie,
      weekStartsOn: ve,
      firstWeekContainsDate: e.firstWeekContainsDate,
      useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
      timeZone: e.timeZone,
      numerals: e.numerals
    }, he);
    return {
      dateLib: Ve,
      components: S0(e.components),
      formatters: I0(e.formatters),
      labels: L0(e.labels, Ve.options),
      locale: ie,
      classNames: { ...Ki(), ...e.classNames }
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
    e.noonSafe,
    e.components,
    e.formatters,
    e.labels,
    e.classNames
  ]);
  e.today || (e = { ...e, today: a.today() });
  const { captionLayout: u, mode: m, navLayout: f, numberOfMonths: p = 1, onDayBlur: v, onDayClick: b, onDayFocus: h, onDayKeyDown: g, onDayMouseEnter: x, onDayMouseLeave: y, onNextClick: w, onPrevClick: C, showWeekNumber: P, styles: S } = e, { formatCaption: T, formatDay: R, formatMonthDropdown: M, formatWeekNumber: D, formatWeekNumberHeader: I, formatWeekdayName: O, formatYearDropdown: $ } = o, _ = nP(e, a), { days: W, months: j, navStart: V, navEnd: G, previousMonth: K, nextMonth: E, goToMonth: H } = _, N = y0(W, e, V, G, a), { isSelected: B, select: q, selected: L } = fP(e, a) ?? {}, { blur: Q, focused: ee, isFocusTarget: F, moveFocus: U, setFocused: ae } = sP(e, _, N, B ?? (() => !1), a), { labelDayButton: ne, labelGridcell: Y, labelGrid: oe, labelMonthDropdown: le, labelNav: be, labelPrevious: Be, labelNext: Ye, labelWeekday: Ze, labelWeekNumber: vt, labelWeekNumberHeader: Ot, labelYearDropdown: yn } = s, Mr = zo(() => B0(a, e.ISOWeek, e.broadcastCalendar, e.today), [a, e.ISOWeek, e.broadcastCalendar, e.today]), Un = m !== void 0 || b !== void 0, Kn = qe(() => {
    K && (H(K), C?.(K));
  }, [K, H, C]), qn = qe(() => {
    E && (H(E), w?.(E));
  }, [H, E, w]), sa = qe((ie, ve) => (se) => {
    se.preventDefault(), se.stopPropagation(), ae(ie), !ve.disabled && (q?.(ie.date, ve, se), b?.(ie.date, ve, se));
  }, [q, b, ae]), Ro = qe((ie, ve) => (se) => {
    ae(ie), h?.(ie.date, ve, se);
  }, [h, ae]), aa = qe((ie, ve) => (se) => {
    Q(), v?.(ie.date, ve, se);
  }, [Q, v]), kr = qe((ie, ve) => (se) => {
    const he = {
      ArrowLeft: [
        se.shiftKey ? "month" : "day",
        e.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        se.shiftKey ? "month" : "day",
        e.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [se.shiftKey ? "year" : "week", "after"],
      ArrowUp: [se.shiftKey ? "year" : "week", "before"],
      PageUp: [se.shiftKey ? "year" : "month", "before"],
      PageDown: [se.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (he[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [Ve, fe] = he[se.key];
      U(Ve, fe);
    }
    g?.(ie.date, ve, se);
  }, [U, g, e.dir]), Jt = qe((ie, ve) => (se) => {
    x?.(ie.date, ve, se);
  }, [x]), Dr = qe((ie, ve) => (se) => {
    y?.(ie.date, ve, se);
  }, [y]), Nr = qe((ie) => (ve) => {
    const se = Number(ve.target.value), he = a.setMonth(a.startOfMonth(ie), se);
    H(he);
  }, [a, H]), Xn = qe((ie) => (ve) => {
    const se = Number(ve.target.value), he = a.setYear(a.startOfMonth(ie), se);
    H(he);
  }, [a, H]), { className: ia, style: ca } = zo(() => ({
    className: [c[re.Root], e.className].filter(Boolean).join(" "),
    style: { ...S?.[re.Root], ...e.style }
  }), [c, e.className, e.style, S]), la = P0(e), Eo = Tt(null);
  U0(Eo, !!e.animate, {
    classNames: c,
    months: j,
    focused: ee,
    dateLib: a
  });
  const ua = {
    dayPickerProps: e,
    selected: L,
    select: q,
    isSelected: B,
    months: j,
    nextMonth: E,
    previousMonth: K,
    goToMonth: H,
    getModifiers: N,
    components: r,
    classNames: c,
    styles: S,
    labels: s,
    formatters: o
  };
  return X.createElement(
    Rf.Provider,
    { value: ua },
    X.createElement(
      r.Root,
      { rootRef: e.animate ? Eo : void 0, className: ia, style: ca, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], "aria-labelledby": e["aria-labelledby"], ...la },
      X.createElement(
        r.Months,
        { className: c[re.Months], style: S?.[re.Months] },
        !e.hideNavigation && !f && X.createElement(r.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: c[re.Nav], style: S?.[re.Nav], "aria-label": be(), onPreviousClick: Kn, onNextClick: qn, previousMonth: K, nextMonth: E }),
        j.map((ie, ve) => X.createElement(
          r.Month,
          {
            "data-animated-month": e.animate ? "true" : void 0,
            className: c[re.Month],
            style: S?.[re.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ve,
            displayIndex: ve,
            calendarMonth: ie
          },
          f === "around" && !e.hideNavigation && ve === 0 && X.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[re.PreviousMonthButton], tabIndex: K ? void 0 : -1, "aria-disabled": K ? void 0 : !0, "aria-label": Be(K), onClick: Kn, "data-animated-button": e.animate ? "true" : void 0 },
            X.createElement(r.Chevron, { disabled: K ? void 0 : !0, className: c[re.Chevron], orientation: e.dir === "rtl" ? "right" : "left" })
          ),
          X.createElement(r.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: c[re.MonthCaption], style: S?.[re.MonthCaption], calendarMonth: ie, displayIndex: ve }, u?.startsWith("dropdown") ? X.createElement(
            r.DropdownNav,
            { className: c[re.Dropdowns], style: S?.[re.Dropdowns] },
            (() => {
              const se = u === "dropdown" || u === "dropdown-months" ? X.createElement(r.MonthsDropdown, { key: "month", className: c[re.MonthsDropdown], "aria-label": le(), classNames: c, components: r, disabled: !!e.disableNavigation, onChange: Nr(ie.date), options: $0(ie.date, V, G, o, a), style: S?.[re.Dropdown], value: a.getMonth(ie.date) }) : X.createElement("span", { key: "month" }, M(ie.date, a)), he = u === "dropdown" || u === "dropdown-years" ? X.createElement(r.YearsDropdown, { key: "year", className: c[re.YearsDropdown], "aria-label": yn(a.options), classNames: c, components: r, disabled: !!e.disableNavigation, onChange: Xn(ie.date), options: V0(V, G, o, a, !!e.reverseYears), style: S?.[re.Dropdown], value: a.getYear(ie.date) }) : X.createElement("span", { key: "year" }, $(ie.date, a));
              return a.getMonthYearOrder() === "year-first" ? [he, se] : [se, he];
            })(),
            X.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, T(ie.date, a.options, a))
          ) : X.createElement(r.CaptionLabel, { className: c[re.CaptionLabel], role: "status", "aria-live": "polite" }, T(ie.date, a.options, a))),
          f === "around" && !e.hideNavigation && ve === p - 1 && X.createElement(
            r.NextMonthButton,
            { type: "button", className: c[re.NextMonthButton], tabIndex: E ? void 0 : -1, "aria-disabled": E ? void 0 : !0, "aria-label": Ye(E), onClick: qn, "data-animated-button": e.animate ? "true" : void 0 },
            X.createElement(r.Chevron, { disabled: E ? void 0 : !0, className: c[re.Chevron], orientation: e.dir === "rtl" ? "left" : "right" })
          ),
          ve === p - 1 && f === "after" && !e.hideNavigation && X.createElement(r.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: c[re.Nav], style: S?.[re.Nav], "aria-label": be(), onPreviousClick: Kn, onNextClick: qn, previousMonth: K, nextMonth: E }),
          X.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": oe(ie.date, a.options, a) || void 0, className: c[re.MonthGrid], style: S?.[re.MonthGrid] },
            !e.hideWeekdays && X.createElement(
              r.Weekdays,
              { "data-animated-weekdays": e.animate ? "true" : void 0, className: c[re.Weekdays], style: S?.[re.Weekdays] },
              P && X.createElement(r.WeekNumberHeader, { "aria-label": Ot(a.options), className: c[re.WeekNumberHeader], style: S?.[re.WeekNumberHeader], scope: "col" }, I()),
              Mr.map((se) => X.createElement(r.Weekday, { "aria-label": Ze(se, a.options, a), className: c[re.Weekday], key: String(se), style: S?.[re.Weekday], scope: "col" }, O(se, a.options, a)))
            ),
            X.createElement(r.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: c[re.Weeks], style: S?.[re.Weeks] }, ie.weeks.map((se) => X.createElement(
              r.Week,
              { className: c[re.Week], key: se.weekNumber, style: S?.[re.Week], week: se },
              P && X.createElement(r.WeekNumber, { week: se, style: S?.[re.WeekNumber], "aria-label": vt(se.weekNumber, {
                locale: i
              }), className: c[re.WeekNumber], scope: "row", role: "rowheader" }, D(se.weekNumber, a)),
              se.days.map((he) => {
                const { date: Ve } = he, fe = N(he);
                if (fe[ke.focused] = !fe.hidden && !!ee?.isEqualTo(he), fe[ut.selected] = B?.(Ve) || fe.selected, Rs(L)) {
                  const { from: fa, to: ma } = L;
                  fe[ut.range_start] = !!(fa && ma && a.isSameDay(Ve, fa)), fe[ut.range_end] = !!(fa && ma && a.isSameDay(Ve, ma)), fe[ut.range_middle] = Lt(L, Ve, !0, a);
                }
                const Mo = W0(fe, S, e.modifiersStyles), ko = C0(fe, c, e.modifiersClassNames), da = !Un && !fe.hidden ? Y(Ve, fe, a.options, a) : void 0;
                return X.createElement(r.Day, { key: `${he.isoDate}_${he.displayMonthId}`, day: he, modifiers: fe, className: ko.join(" "), style: Mo, role: "gridcell", "aria-selected": fe.selected || void 0, "aria-label": da, "data-day": he.isoDate, "data-month": he.outside ? he.dateMonthId : void 0, "data-selected": fe.selected || void 0, "data-disabled": fe.disabled || void 0, "data-hidden": fe.hidden || void 0, "data-outside": he.outside || void 0, "data-focused": fe.focused || void 0, "data-today": fe.today || void 0 }, !fe.hidden && Un ? X.createElement(r.DayButton, { className: c[re.DayButton], style: S?.[re.DayButton], type: "button", day: he, modifiers: fe, disabled: !fe.focused && fe.disabled || void 0, "aria-disabled": fe.focused && fe.disabled || void 0, tabIndex: F(he) ? 0 : -1, "aria-label": ne(Ve, fe, a.options, a), onClick: sa(he, fe), onBlur: aa(he, fe), onFocus: Ro(he, fe), onKeyDown: kr(he, fe), onMouseEnter: Jt(he, fe), onMouseLeave: Dr(he, fe) }, R(Ve, a.options, a)) : !fe.hidden && R(he.date, a.options, a));
              })
            )))
          )
        ))
      ),
      e.footer && X.createElement(r.Footer, { className: c[re.Footer], style: S?.[re.Footer], role: "status", "aria-live": "polite" }, e.footer)
    )
  );
}
const pP = "(##) ####-####", hP = "(##) #####-####", gP = "#####-###", vP = "###.###.###-##", bP = "##.###.###/####-##", xP = "###########", wP = "##.###.###-#", yP = "AAA#A##", CP = "###########", SP = "##############", Bf = (t, e) => {
  let n = "", r = 0;
  for (let o = 0; o < e.length; o++) {
    const s = t[r];
    if (s === void 0)
      break;
    switch (e[o]) {
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
        /[a-zA-Z0-9]/.test(s) && (n += t[r]), r++;
        break;
      default:
        n += e[o], e[o] === s && r++;
    }
  }
  return n;
}, wO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: hP,
  CNH_MASK: xP,
  CNPJ_MASK: bP,
  CPF_MASK: vP,
  PHONE_MASK: pP,
  PLATE_MASK: yP,
  RENAVAM_MASK: CP,
  RG_MASK: wP,
  RNTRC_MASK: SP,
  ZIP_CODE_MASK: gP,
  formatMask: Bf
}, Symbol.toStringTag, { value: "Module" })), yO = [
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
function Vf({
  className: t,
  classNames: e,
  showOutsideDays: n = !0,
  captionLayout: r = "dropdown",
  buttonVariant: o = "ghost",
  locale: s = Sf,
  formatters: a,
  components: i,
  startMonth: c,
  endMonth: u,
  timeZone: m = "America/Sao_Paulo",
  ...f
}) {
  const p = new Pe(/* @__PURE__ */ new Date(), m), v = new Pe(p.getFullYear() - 100, 0, 1, m), b = new Pe(p.getFullYear() + 10, 11, 31, m), h = Ki();
  return /* @__PURE__ */ d.jsx(
    mP,
    {
      showOutsideDays: n,
      timeZone: m,
      className: k(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        t
      ),
      captionLayout: r,
      startMonth: c ?? v,
      endMonth: u ?? b,
      locale: s,
      formatters: {
        formatMonthDropdown: (g) => g.toLocaleString(s?.code, { month: "short" }),
        ...a
      },
      classNames: {
        root: k("w-fit", h.root),
        months: k(
          "flex gap-4 flex-col md:flex-row relative",
          h.months
        ),
        month: k("flex flex-col w-full gap-4", h.month),
        nav: k(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          h.nav
        ),
        button_previous: k(
          kn({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_previous
        ),
        button_next: k(
          kn({ variant: o }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          h.button_next
        ),
        month_caption: k(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          h.month_caption
        ),
        dropdowns: k(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          h.dropdowns
        ),
        dropdown_root: k(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          h.dropdown_root
        ),
        dropdown: k(
          "absolute bg-popover inset-0 opacity-0",
          h.dropdown
        ),
        caption_label: k(
          "select-none font-medium",
          r === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          h.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: k("flex", h.weekdays),
        weekday: k(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          h.weekday
        ),
        week: k("flex w-full mt-2", h.week),
        week_number_header: k(
          "select-none w-(--cell-size)",
          h.week_number_header
        ),
        week_number: k(
          "text-[0.8rem] select-none text-muted-foreground",
          h.week_number
        ),
        day: k(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          f.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          h.day
        ),
        range_start: k(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          h.range_start
        ),
        range_middle: k("rounded-none", h.range_middle),
        range_end: k(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          h.range_end
        ),
        today: k(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          h.today
        ),
        outside: k(
          "text-muted-foreground aria-selected:text-muted-foreground",
          h.outside
        ),
        disabled: k(
          "text-muted-foreground opacity-50",
          h.disabled
        ),
        hidden: k("invisible", h.hidden),
        ...e
      },
      components: {
        Root: ({ className: g, rootRef: x, ...y }) => /* @__PURE__ */ d.jsx(
          "div",
          {
            "data-slot": "calendar",
            ref: x,
            className: k(g),
            ...y
          }
        ),
        Chevron: ({ className: g, orientation: x, ...y }) => x === "left" ? /* @__PURE__ */ d.jsx(Cg, { className: k("cn-rtl-flip size-4", g), ...y }) : x === "right" ? /* @__PURE__ */ d.jsx(Sg, { className: k("cn-rtl-flip size-4", g), ...y }) : /* @__PURE__ */ d.jsx(Pg, { className: k("size-4", g), ...y }),
        DayButton: ({ ...g }) => /* @__PURE__ */ d.jsx(PP, { locale: s, ...g }),
        WeekNumber: ({ children: g, ...x }) => /* @__PURE__ */ d.jsx("td", { ...x, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: g }) }),
        ...i
      },
      ...f
    }
  );
}
function PP({
  className: t,
  day: e,
  modifiers: n,
  locale: r,
  ...o
}) {
  const s = Ki(), a = l.useRef(null);
  return l.useEffect(() => {
    n.focused && a.current?.focus();
  }, [n.focused]), /* @__PURE__ */ d.jsx(
    Wn,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": e.date.toLocaleDateString(r?.code),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: k(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        s.day,
        t
      ),
      ...o
    }
  );
}
const TP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      t
    ),
    ...e
  }
));
TP.displayName = "Card";
const RP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k("flex flex-col space-y-1.5 p-4 pb-0", t),
    ...e
  }
));
RP.displayName = "CardHeader";
const EP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: n,
    className: k(
      "text-xl font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
EP.displayName = "CardTitle";
const MP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: n,
    className: k("text-sm text-muted-foreground", t),
    ...e
  }
));
MP.displayName = "CardDescription";
const kP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: k("p-4", t), ...e }));
kP.displayName = "CardContent";
const DP = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k("flex items-center p-4 pt-0", t),
    ...e
  }
));
DP.displayName = "CardFooter";
function NP(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function zl(t) {
  return NP(t) || Array.isArray(t);
}
function _P() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qi(t, e) {
  const n = Object.keys(t), r = Object.keys(e);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(t.breakpoints || {})), s = JSON.stringify(Object.keys(e.breakpoints || {}));
  return o !== s ? !1 : n.every((a) => {
    const i = t[a], c = e[a];
    return typeof i == "function" ? `${i}` == `${c}` : !zl(i) || !zl(c) ? i === c : Qi(i, c);
  });
}
function Yl(t) {
  return t.concat().sort((e, n) => e.name > n.name ? 1 : -1).map((e) => e.options);
}
function IP(t, e) {
  if (t.length !== e.length) return !1;
  const n = Yl(t), r = Yl(e);
  return n.every((o, s) => {
    const a = r[s];
    return Qi(o, a);
  });
}
function Zi(t) {
  return typeof t == "number";
}
function ei(t) {
  return typeof t == "string";
}
function Ms(t) {
  return typeof t == "boolean";
}
function Gl(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Ne(t) {
  return Math.abs(t);
}
function Ji(t) {
  return Math.sign(t);
}
function Wr(t, e) {
  return Ne(t - e);
}
function OP(t, e) {
  if (t === 0 || e === 0 || Ne(t) <= Ne(e)) return 0;
  const n = Wr(Ne(t), Ne(e));
  return Ne(n / t);
}
function AP(t) {
  return Math.round(t * 100) / 100;
}
function Yr(t) {
  return Gr(t).map(Number);
}
function dt(t) {
  return t[mo(t)];
}
function mo(t) {
  return Math.max(0, t.length - 1);
}
function ec(t, e) {
  return e === mo(t);
}
function Ul(t, e = 0) {
  return Array.from(Array(t), (n, r) => e + r);
}
function Gr(t) {
  return Object.keys(t);
}
function Hf(t, e) {
  return [t, e].reduce((n, r) => (Gr(r).forEach((o) => {
    const s = n[o], a = r[o], i = Gl(s) && Gl(a);
    n[o] = i ? Hf(s, a) : a;
  }), n), {});
}
function ti(t, e) {
  return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent;
}
function jP(t, e) {
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
    return e - c;
  }
  function a(c, u) {
    return ei(t) ? n[t](c) : t(e, c, u);
  }
  return {
    measure: a
  };
}
function Ur() {
  let t = [];
  function e(o, s, a, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(s, a, i), c = () => o.removeEventListener(s, a, i);
    else {
      const u = o;
      u.addListener(a), c = () => u.removeListener(a);
    }
    return t.push(c), r;
  }
  function n() {
    t = t.filter((o) => o());
  }
  const r = {
    add: e,
    clear: n
  };
  return r;
}
function FP(t, e, n, r) {
  const o = Ur(), s = 1e3 / 60;
  let a = null, i = 0, c = 0;
  function u() {
    o.add(t, "visibilitychange", () => {
      t.hidden && b();
    });
  }
  function m() {
    v(), o.clear();
  }
  function f(g) {
    if (!c) return;
    a || (a = g, n(), n());
    const x = g - a;
    for (a = g, i += x; i >= s; )
      n(), i -= s;
    const y = i / s;
    r(y), c && (c = e.requestAnimationFrame(f));
  }
  function p() {
    c || (c = e.requestAnimationFrame(f));
  }
  function v() {
    e.cancelAnimationFrame(c), a = null, i = 0, c = 0;
  }
  function b() {
    a = null, i = 0;
  }
  return {
    init: u,
    destroy: m,
    start: p,
    stop: v,
    update: n,
    render: r
  };
}
function LP(t, e) {
  const n = e === "rtl", r = t === "y", o = r ? "y" : "x", s = r ? "x" : "y", a = !r && n ? -1 : 1, i = m(), c = f();
  function u(b) {
    const {
      height: h,
      width: g
    } = b;
    return r ? h : g;
  }
  function m() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(b) {
    return b * a;
  }
  return {
    scroll: o,
    cross: s,
    startEdge: i,
    endEdge: c,
    measureSize: u,
    direction: p
  };
}
function Nn(t = 0, e = 0) {
  const n = Ne(t - e);
  function r(u) {
    return u < t;
  }
  function o(u) {
    return u > e;
  }
  function s(u) {
    return r(u) || o(u);
  }
  function a(u) {
    return s(u) ? r(u) ? t : e : u;
  }
  function i(u) {
    return n ? u - n * Math.ceil((u - e) / n) : u;
  }
  return {
    length: n,
    max: e,
    min: t,
    constrain: a,
    reachedAny: s,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function zf(t, e, n) {
  const {
    constrain: r
  } = Nn(0, t), o = t + 1;
  let s = a(e);
  function a(p) {
    return n ? Ne((o + p) % o) : r(p);
  }
  function i() {
    return s;
  }
  function c(p) {
    return s = a(p), f;
  }
  function u(p) {
    return m().set(i() + p);
  }
  function m() {
    return zf(t, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: u,
    clone: m
  };
  return f;
}
function $P(t, e, n, r, o, s, a, i, c, u, m, f, p, v, b, h, g, x, y) {
  const {
    cross: w,
    direction: C
  } = t, P = ["INPUT", "SELECT", "TEXTAREA"], S = {
    passive: !1
  }, T = Ur(), R = Ur(), M = Nn(50, 225).constrain(v.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, O = b ? 43 : 25;
  let $ = !1, _ = 0, W = 0, j = !1, V = !1, G = !1, K = !1;
  function E(Y) {
    if (!y) return;
    function oe(be) {
      (Ms(y) || y(Y, be)) && Q(be);
    }
    const le = e;
    T.add(le, "dragstart", (be) => be.preventDefault(), S).add(le, "touchmove", () => {
    }, S).add(le, "touchend", () => {
    }).add(le, "touchstart", oe).add(le, "mousedown", oe).add(le, "touchcancel", F).add(le, "contextmenu", F).add(le, "click", U, !0);
  }
  function H() {
    T.clear(), R.clear();
  }
  function N() {
    const Y = K ? n : e;
    R.add(Y, "touchmove", ee, S).add(Y, "touchend", F).add(Y, "mousemove", ee, S).add(Y, "mouseup", F);
  }
  function B(Y) {
    const oe = Y.nodeName || "";
    return P.includes(oe);
  }
  function q() {
    return (b ? I : D)[K ? "mouse" : "touch"];
  }
  function L(Y, oe) {
    const le = f.add(Ji(Y) * -1), be = m.byDistance(Y, !b).distance;
    return b || Ne(Y) < M ? be : g && oe ? be * 0.5 : m.byIndex(le.get(), 0).distance;
  }
  function Q(Y) {
    const oe = ti(Y, r);
    K = oe, G = b && oe && !Y.buttons && $, $ = Wr(o.get(), a.get()) >= 2, !(oe && Y.button !== 0) && (B(Y.target) || (j = !0, s.pointerDown(Y), u.useFriction(0).useDuration(0), o.set(a), N(), _ = s.readPoint(Y), W = s.readPoint(Y, w), p.emit("pointerDown")));
  }
  function ee(Y) {
    if (!ti(Y, r) && Y.touches.length >= 2) return F(Y);
    const le = s.readPoint(Y), be = s.readPoint(Y, w), Be = Wr(le, _), Ye = Wr(be, W);
    if (!V && !K && (!Y.cancelable || (V = Be > Ye, !V)))
      return F(Y);
    const Ze = s.pointerMove(Y);
    Be > h && (G = !0), u.useFriction(0.3).useDuration(0.75), i.start(), o.add(C(Ze)), Y.preventDefault();
  }
  function F(Y) {
    const le = m.byDistance(0, !1).index !== f.get(), be = s.pointerUp(Y) * q(), Be = L(C(be), le), Ye = OP(be, Be), Ze = O - 10 * Ye, vt = x + Ye / 50;
    V = !1, j = !1, R.clear(), u.useDuration(Ze).useFriction(vt), c.distance(Be, !b), K = !1, p.emit("pointerUp");
  }
  function U(Y) {
    G && (Y.stopPropagation(), Y.preventDefault(), G = !1);
  }
  function ae() {
    return j;
  }
  return {
    init: E,
    destroy: H,
    pointerDown: ae
  };
}
function WP(t, e) {
  let r, o;
  function s(f) {
    return f.timeStamp;
  }
  function a(f, p) {
    const b = `client${(p || t.scroll) === "x" ? "X" : "Y"}`;
    return (ti(f, e) ? f : f.touches[0])[b];
  }
  function i(f) {
    return r = f, o = f, a(f);
  }
  function c(f) {
    const p = a(f) - a(o), v = s(f) - s(r) > 170;
    return o = f, v && (r = f), p;
  }
  function u(f) {
    if (!r || !o) return 0;
    const p = a(o) - a(r), v = s(f) - s(r), b = s(f) - s(o) > 170, h = p / v;
    return v && !b && Ne(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: u,
    readPoint: a
  };
}
function BP() {
  function t(n) {
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
    measure: t
  };
}
function VP(t) {
  function e(r) {
    return t * (r / 100);
  }
  return {
    measure: e
  };
}
function HP(t, e, n, r, o, s, a) {
  const i = [t].concat(r);
  let c, u, m = [], f = !1;
  function p(g) {
    return o.measureSize(a.measure(g));
  }
  function v(g) {
    if (!s) return;
    u = p(t), m = r.map(p);
    function x(y) {
      for (const w of y) {
        if (f) return;
        const C = w.target === t, P = r.indexOf(w.target), S = C ? u : m[P], T = p(C ? t : r[P]);
        if (Ne(T - S) >= 0.5) {
          g.reInit(), e.emit("resize");
          break;
        }
      }
    }
    c = new ResizeObserver((y) => {
      (Ms(s) || s(g, y)) && x(y);
    }), n.requestAnimationFrame(() => {
      i.forEach((y) => c.observe(y));
    });
  }
  function b() {
    f = !0, c && c.disconnect();
  }
  return {
    init: v,
    destroy: b
  };
}
function zP(t, e, n, r, o, s) {
  let a = 0, i = 0, c = o, u = s, m = t.get(), f = 0;
  function p() {
    const S = r.get() - t.get(), T = !c;
    let R = 0;
    return T ? (a = 0, n.set(r), t.set(r), R = S) : (n.set(t), a += S / c, a *= u, m += a, t.add(a), R = m - f), i = Ji(R), f = m, P;
  }
  function v() {
    const S = r.get() - e.get();
    return Ne(S) < 1e-3;
  }
  function b() {
    return c;
  }
  function h() {
    return i;
  }
  function g() {
    return a;
  }
  function x() {
    return w(o);
  }
  function y() {
    return C(s);
  }
  function w(S) {
    return c = S, P;
  }
  function C(S) {
    return u = S, P;
  }
  const P = {
    direction: h,
    duration: b,
    velocity: g,
    seek: p,
    settled: v,
    useBaseFriction: y,
    useBaseDuration: x,
    useFriction: C,
    useDuration: w
  };
  return P;
}
function YP(t, e, n, r, o) {
  const s = o.measure(10), a = o.measure(50), i = Nn(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !t.reachedAny(n.get()) || !t.reachedAny(e.get()));
  }
  function m(v) {
    if (!u()) return;
    const b = t.reachedMin(e.get()) ? "min" : "max", h = Ne(t[b] - e.get()), g = n.get() - e.get(), x = i.constrain(h / a);
    n.subtract(g * x), !v && Ne(g) < s && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(v) {
    c = !v;
  }
  return {
    shouldConstrain: u,
    constrain: m,
    toggleActive: f
  };
}
function GP(t, e, n, r, o) {
  const s = Nn(-e + t, 0), a = f(), i = m(), c = p();
  function u(b, h) {
    return Wr(b, h) <= 1;
  }
  function m() {
    const b = a[0], h = dt(a), g = a.lastIndexOf(b), x = a.indexOf(h) + 1;
    return Nn(g, x);
  }
  function f() {
    return n.map((b, h) => {
      const {
        min: g,
        max: x
      } = s, y = s.constrain(b), w = !h, C = ec(n, h);
      return w ? x : C || u(g, y) ? g : u(x, y) ? x : y;
    }).map((b) => parseFloat(b.toFixed(3)));
  }
  function p() {
    if (e <= t + o) return [s.max];
    if (r === "keepSnaps") return a;
    const {
      min: b,
      max: h
    } = i;
    return a.slice(b, h);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function UP(t, e, n) {
  const r = e[0], o = n ? r - t : dt(e);
  return {
    limit: Nn(o, r)
  };
}
function KP(t, e, n, r) {
  const s = e.min + 0.1, a = e.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = Nn(s, a);
  function u(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function m(p) {
    if (!u(p)) return;
    const v = t * (p * -1);
    r.forEach((b) => b.add(v));
  }
  return {
    loop: m
  };
}
function qP(t) {
  const {
    max: e,
    length: n
  } = t;
  function r(s) {
    const a = s - e;
    return n ? a / -n : 0;
  }
  return {
    get: r
  };
}
function XP(t, e, n, r, o) {
  const {
    startEdge: s,
    endEdge: a
  } = t, {
    groupSlides: i
  } = o, c = f().map(e.measure), u = p(), m = v();
  function f() {
    return i(r).map((h) => dt(h)[a] - h[0][s]).map(Ne);
  }
  function p() {
    return r.map((h) => n[s] - h[s]).map((h) => -Ne(h));
  }
  function v() {
    return i(u).map((h) => h[0]).map((h, g) => h + c[g]);
  }
  return {
    snaps: u,
    snapsAligned: m
  };
}
function QP(t, e, n, r, o, s) {
  const {
    groupSlides: a
  } = o, {
    min: i,
    max: c
  } = r, u = m();
  function m() {
    const p = a(s), v = !t || e === "keepSnaps";
    return n.length === 1 ? [s] : v ? p : p.slice(i, c).map((b, h, g) => {
      const x = !h, y = ec(g, h);
      if (x) {
        const w = dt(g[0]) + 1;
        return Ul(w);
      }
      if (y) {
        const w = mo(s) - dt(g)[0] + 1;
        return Ul(w, dt(g)[0]);
      }
      return b;
    });
  }
  return {
    slideRegistry: u
  };
}
function ZP(t, e, n, r, o) {
  const {
    reachedAny: s,
    removeOffset: a,
    constrain: i
  } = r;
  function c(b) {
    return b.concat().sort((h, g) => Ne(h) - Ne(g))[0];
  }
  function u(b) {
    const h = t ? a(b) : i(b), g = e.map((y, w) => ({
      diff: m(y - h, 0),
      index: w
    })).sort((y, w) => Ne(y.diff) - Ne(w.diff)), {
      index: x
    } = g[0];
    return {
      index: x,
      distance: h
    };
  }
  function m(b, h) {
    const g = [b, b + n, b - n];
    if (!t) return b;
    if (!h) return c(g);
    const x = g.filter((y) => Ji(y) === h);
    return x.length ? c(x) : dt(g) - n;
  }
  function f(b, h) {
    const g = e[b] - o.get(), x = m(g, h);
    return {
      index: b,
      distance: x
    };
  }
  function p(b, h) {
    const g = o.get() + b, {
      index: x,
      distance: y
    } = u(g), w = !t && s(g);
    if (!h || w) return {
      index: x,
      distance: b
    };
    const C = e[x] - y, P = b + m(C, 0);
    return {
      index: x,
      distance: P
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: m
  };
}
function JP(t, e, n, r, o, s, a) {
  function i(f) {
    const p = f.distance, v = f.index !== e.get();
    s.add(p), p && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), v && (n.set(e.get()), e.set(f.index), a.emit("select"));
  }
  function c(f, p) {
    const v = o.byDistance(f, p);
    i(v);
  }
  function u(f, p) {
    const v = e.clone().set(f), b = o.byIndex(v.get(), p);
    i(b);
  }
  return {
    distance: c,
    index: u
  };
}
function eT(t, e, n, r, o, s, a, i) {
  const c = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function m(v) {
    if (!i) return;
    function b(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      a.emit("slideFocusStart"), t.scrollLeft = 0;
      const y = n.findIndex((w) => w.includes(h));
      Zi(y) && (o.useDuration(0), r.index(y, 0), a.emit("slideFocus"));
    }
    s.add(document, "keydown", f, !1), e.forEach((h, g) => {
      s.add(h, "focus", (x) => {
        (Ms(i) || i(v, x)) && b(g);
      }, c);
    });
  }
  function f(v) {
    v.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: m
  };
}
function Lr(t) {
  let e = t;
  function n() {
    return e;
  }
  function r(c) {
    e = a(c);
  }
  function o(c) {
    e += a(c);
  }
  function s(c) {
    e -= a(c);
  }
  function a(c) {
    return Zi(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: s
  };
}
function Yf(t, e) {
  const n = t.scroll === "x" ? a : i, r = e.style;
  let o = null, s = !1;
  function a(p) {
    return `translate3d(${p}px,0px,0px)`;
  }
  function i(p) {
    return `translate3d(0px,${p}px,0px)`;
  }
  function c(p) {
    if (s) return;
    const v = AP(t.direction(p));
    v !== o && (r.transform = n(v), o = v);
  }
  function u(p) {
    s = !p;
  }
  function m() {
    s || (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"));
  }
  return {
    clear: m,
    to: c,
    toggleActive: u
  };
}
function tT(t, e, n, r, o, s, a, i, c) {
  const m = Yr(o), f = Yr(o).reverse(), p = x().concat(y());
  function v(T, R) {
    return T.reduce((M, D) => M - o[D], R);
  }
  function b(T, R) {
    return T.reduce((M, D) => v(M, R) > 0 ? M.concat([D]) : M, []);
  }
  function h(T) {
    return s.map((R, M) => ({
      start: R - r[M] + 0.5 + T,
      end: R + e - 0.5 + T
    }));
  }
  function g(T, R, M) {
    const D = h(R);
    return T.map((I) => {
      const O = M ? 0 : -n, $ = M ? n : 0, _ = M ? "end" : "start", W = D[I][_];
      return {
        index: I,
        loopPoint: W,
        slideLocation: Lr(-1),
        translate: Yf(t, c[I]),
        target: () => i.get() > W ? O : $
      };
    });
  }
  function x() {
    const T = a[0], R = b(f, T);
    return g(R, n, !1);
  }
  function y() {
    const T = e - a[0] - 1, R = b(m, T);
    return g(R, -n, !0);
  }
  function w() {
    return p.every(({
      index: T
    }) => {
      const R = m.filter((M) => M !== T);
      return v(R, e) <= 0.1;
    });
  }
  function C() {
    p.forEach((T) => {
      const {
        target: R,
        translate: M,
        slideLocation: D
      } = T, I = R();
      I !== D.get() && (M.to(I), D.set(I));
    });
  }
  function P() {
    p.forEach((T) => T.translate.clear());
  }
  return {
    canLoop: w,
    clear: P,
    loop: C,
    loopPoints: p
  };
}
function nT(t, e, n) {
  let r, o = !1;
  function s(c) {
    if (!n) return;
    function u(m) {
      for (const f of m)
        if (f.type === "childList") {
          c.reInit(), e.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((m) => {
      o || (Ms(n) || n(c, m)) && u(m);
    }), r.observe(t, {
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
function rT(t, e, n, r) {
  const o = {};
  let s = null, a = null, i, c = !1;
  function u() {
    i = new IntersectionObserver((b) => {
      c || (b.forEach((h) => {
        const g = e.indexOf(h.target);
        o[g] = h;
      }), s = null, a = null, n.emit("slidesInView"));
    }, {
      root: t.parentElement,
      threshold: r
    }), e.forEach((b) => i.observe(b));
  }
  function m() {
    i && i.disconnect(), c = !0;
  }
  function f(b) {
    return Gr(o).reduce((h, g) => {
      const x = parseInt(g), {
        isIntersecting: y
      } = o[x];
      return (b && y || !b && !y) && h.push(x), h;
    }, []);
  }
  function p(b = !0) {
    if (b && s) return s;
    if (!b && a) return a;
    const h = f(b);
    return b && (s = h), b || (a = h), h;
  }
  return {
    init: u,
    destroy: m,
    get: p
  };
}
function oT(t, e, n, r, o, s) {
  const {
    measureSize: a,
    startEdge: i,
    endEdge: c
  } = t, u = n[0] && o, m = b(), f = h(), p = n.map(a), v = g();
  function b() {
    if (!u) return 0;
    const y = n[0];
    return Ne(e[i] - y[i]);
  }
  function h() {
    if (!u) return 0;
    const y = s.getComputedStyle(dt(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((y, w, C) => {
      const P = !w, S = ec(C, w);
      return P ? p[w] + m : S ? p[w] + f : C[w + 1][i] - y[i];
    }).map(Ne);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: v,
    startGap: m,
    endGap: f
  };
}
function sT(t, e, n, r, o, s, a, i, c) {
  const {
    startEdge: u,
    endEdge: m,
    direction: f
  } = t, p = Zi(n);
  function v(x, y) {
    return Yr(x).filter((w) => w % y === 0).map((w) => x.slice(w, w + y));
  }
  function b(x) {
    return x.length ? Yr(x).reduce((y, w, C) => {
      const P = dt(y) || 0, S = P === 0, T = w === mo(x), R = o[u] - s[P][u], M = o[u] - s[w][m], D = !r && S ? f(a) : 0, I = !r && T ? f(i) : 0, O = Ne(M - I - (R + D));
      return C && O > e + c && y.push(w), T && y.push(x.length), y;
    }, []).map((y, w, C) => {
      const P = Math.max(C[w - 1] || 0);
      return x.slice(P, y);
    }) : [];
  }
  function h(x) {
    return p ? v(x, n) : b(x);
  }
  return {
    groupSlides: h
  };
}
function aT(t, e, n, r, o, s, a) {
  const {
    align: i,
    axis: c,
    direction: u,
    startIndex: m,
    loop: f,
    duration: p,
    dragFree: v,
    dragThreshold: b,
    inViewThreshold: h,
    slidesToScroll: g,
    skipSnaps: x,
    containScroll: y,
    watchResize: w,
    watchSlides: C,
    watchDrag: P,
    watchFocus: S
  } = s, T = 2, R = BP(), M = R.measure(e), D = n.map(R.measure), I = LP(c, u), O = I.measureSize(M), $ = VP(O), _ = jP(i, O), W = !f && !!y, j = f || !!y, {
    slideSizes: V,
    slideSizesWithGaps: G,
    startGap: K,
    endGap: E
  } = oT(I, M, D, n, j, o), H = sT(I, O, g, f, M, D, K, E, T), {
    snaps: N,
    snapsAligned: B
  } = XP(I, _, M, D, H), q = -dt(N) + dt(G), {
    snapsContained: L,
    scrollContainLimit: Q
  } = GP(O, q, B, y, T), ee = W ? L : B, {
    limit: F
  } = UP(q, ee, f), U = zf(mo(ee), m, f), ae = U.clone(), ne = Yr(n), Y = ({
    dragHandler: Jt,
    scrollBody: Dr,
    scrollBounds: Nr,
    options: {
      loop: Xn
    }
  }) => {
    Xn || Nr.constrain(Jt.pointerDown()), Dr.seek();
  }, oe = ({
    scrollBody: Jt,
    translate: Dr,
    location: Nr,
    offsetLocation: Xn,
    previousLocation: ia,
    scrollLooper: ca,
    slideLooper: la,
    dragHandler: Eo,
    animation: ua,
    eventHandler: ie,
    scrollBounds: ve,
    options: {
      loop: se
    }
  }, he) => {
    const Ve = Jt.settled(), fe = !ve.shouldConstrain(), Mo = se ? Ve : Ve && fe, ko = Mo && !Eo.pointerDown();
    ko && ua.stop();
    const da = Nr.get() * he + ia.get() * (1 - he);
    Xn.set(da), se && (ca.loop(Jt.direction()), la.loop()), Dr.to(Xn.get()), ko && ie.emit("settle"), Mo || ie.emit("scroll");
  }, le = FP(r, o, () => Y(kr), (Jt) => oe(kr, Jt)), be = 0.68, Be = ee[U.get()], Ye = Lr(Be), Ze = Lr(Be), vt = Lr(Be), Ot = Lr(Be), yn = zP(Ye, vt, Ze, Ot, p, be), Mr = ZP(f, ee, q, F, Ot), Un = JP(le, U, ae, yn, Mr, Ot, a), Kn = qP(F), qn = Ur(), sa = rT(e, n, a, h), {
    slideRegistry: Ro
  } = QP(W, y, ee, Q, H, ne), aa = eT(t, n, Ro, Un, yn, qn, a, S), kr = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: a,
    containerRect: M,
    slideRects: D,
    animation: le,
    axis: I,
    dragHandler: $P(I, t, r, o, Ot, WP(I, o), Ye, le, Un, yn, Mr, U, a, $, v, b, x, be, P),
    eventStore: qn,
    percentOfView: $,
    index: U,
    indexPrevious: ae,
    limit: F,
    location: Ye,
    offsetLocation: vt,
    previousLocation: Ze,
    options: s,
    resizeHandler: HP(e, a, o, n, I, w, R),
    scrollBody: yn,
    scrollBounds: YP(F, vt, Ot, yn, $),
    scrollLooper: KP(q, F, vt, [Ye, vt, Ze, Ot]),
    scrollProgress: Kn,
    scrollSnapList: ee.map(Kn.get),
    scrollSnaps: ee,
    scrollTarget: Mr,
    scrollTo: Un,
    slideLooper: tT(I, O, q, V, G, N, ee, vt, n),
    slideFocus: aa,
    slidesHandler: nT(e, a, C),
    slidesInView: sa,
    slideIndexes: ne,
    slideRegistry: Ro,
    slidesToScroll: H,
    target: Ot,
    translate: Yf(I, e)
  };
  return kr;
}
function iT() {
  let t = {}, e;
  function n(u) {
    e = u;
  }
  function r(u) {
    return t[u] || [];
  }
  function o(u) {
    return r(u).forEach((m) => m(e, u)), c;
  }
  function s(u, m) {
    return t[u] = r(u).concat([m]), c;
  }
  function a(u, m) {
    return t[u] = r(u).filter((f) => f !== m), c;
  }
  function i() {
    t = {};
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
const cT = {
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
function lT(t) {
  function e(s, a) {
    return Hf(s, a || {});
  }
  function n(s) {
    const a = s.breakpoints || {}, i = Gr(a).filter((c) => t.matchMedia(c).matches).map((c) => a[c]).reduce((c, u) => e(c, u), {});
    return e(s, i);
  }
  function r(s) {
    return s.map((a) => Gr(a.breakpoints || {})).reduce((a, i) => a.concat(i), []).map(t.matchMedia);
  }
  return {
    mergeOptions: e,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function uT(t) {
  let e = [];
  function n(s, a) {
    return e = a.filter(({
      options: i
    }) => t.optionsAtMedia(i).active !== !1), e.forEach((i) => i.init(s, t)), a.reduce((i, c) => Object.assign(i, {
      [c.name]: c
    }), {});
  }
  function r() {
    e = e.filter((s) => s.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function os(t, e, n) {
  const r = t.ownerDocument, o = r.defaultView, s = lT(o), a = uT(s), i = Ur(), c = iT(), {
    mergeOptions: u,
    optionsAtMedia: m,
    optionsMediaQueries: f
  } = s, {
    on: p,
    off: v,
    emit: b
  } = c, h = I;
  let g = !1, x, y = u(cT, os.globalOptions), w = u(y), C = [], P, S, T;
  function R() {
    const {
      container: ne,
      slides: Y
    } = w;
    S = (ei(ne) ? t.querySelector(ne) : ne) || t.children[0];
    const le = ei(Y) ? S.querySelectorAll(Y) : Y;
    T = [].slice.call(le || S.children);
  }
  function M(ne) {
    const Y = aT(t, S, T, r, o, ne, c);
    if (ne.loop && !Y.slideLooper.canLoop()) {
      const oe = Object.assign({}, ne, {
        loop: !1
      });
      return M(oe);
    }
    return Y;
  }
  function D(ne, Y) {
    g || (y = u(y, ne), w = m(y), C = Y || C, R(), x = M(w), f([y, ...C.map(({
      options: oe
    }) => oe)]).forEach((oe) => i.add(oe, "change", I)), w.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(ae), x.eventHandler.init(ae), x.resizeHandler.init(ae), x.slidesHandler.init(ae), x.options.loop && x.slideLooper.loop(), S.offsetParent && T.length && x.dragHandler.init(ae), P = a.init(ae, C)));
  }
  function I(ne, Y) {
    const oe = H();
    O(), D(u({
      startIndex: oe
    }, ne), Y), c.emit("reInit");
  }
  function O() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), a.destroy(), i.clear();
  }
  function $() {
    g || (g = !0, i.clear(), O(), c.emit("destroy"), c.clear());
  }
  function _(ne, Y, oe) {
    !w.active || g || (x.scrollBody.useBaseFriction().useDuration(Y === !0 ? 0 : w.duration), x.scrollTo.index(ne, oe || 0));
  }
  function W(ne) {
    const Y = x.index.add(1).get();
    _(Y, ne, -1);
  }
  function j(ne) {
    const Y = x.index.add(-1).get();
    _(Y, ne, 1);
  }
  function V() {
    return x.index.add(1).get() !== H();
  }
  function G() {
    return x.index.add(-1).get() !== H();
  }
  function K() {
    return x.scrollSnapList;
  }
  function E() {
    return x.scrollProgress.get(x.offsetLocation.get());
  }
  function H() {
    return x.index.get();
  }
  function N() {
    return x.indexPrevious.get();
  }
  function B() {
    return x.slidesInView.get();
  }
  function q() {
    return x.slidesInView.get(!1);
  }
  function L() {
    return P;
  }
  function Q() {
    return x;
  }
  function ee() {
    return t;
  }
  function F() {
    return S;
  }
  function U() {
    return T;
  }
  const ae = {
    canScrollNext: V,
    canScrollPrev: G,
    containerNode: F,
    internalEngine: Q,
    destroy: $,
    off: v,
    on: p,
    emit: b,
    plugins: L,
    previousScrollSnap: N,
    reInit: h,
    rootNode: ee,
    scrollNext: W,
    scrollPrev: j,
    scrollProgress: E,
    scrollSnapList: K,
    scrollTo: _,
    selectedScrollSnap: H,
    slideNodes: U,
    slidesInView: B,
    slidesNotInView: q
  };
  return D(e, n), setTimeout(() => c.emit("init"), 0), ae;
}
os.globalOptions = void 0;
function tc(t = {}, e = []) {
  const n = Tt(t), r = Tt(e), [o, s] = at(), [a, i] = at(), c = qe(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return Wt(() => {
    Qi(n.current, t) || (n.current = t, c());
  }, [t, c]), Wt(() => {
    IP(r.current, e) || (r.current = e, c());
  }, [e, c]), Wt(() => {
    if (_P() && a) {
      os.globalOptions = tc.globalOptions;
      const u = os(a, n.current, r.current);
      return s(u), () => u.destroy();
    } else
      s(void 0);
  }, [a, s]), [i, o];
}
tc.globalOptions = void 0;
const Gf = l.createContext(null);
function ks() {
  const t = l.useContext(Gf);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const dT = l.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: e,
    setApi: n,
    plugins: r,
    className: o,
    children: s,
    ...a
  }, i) => {
    const [c, u] = tc(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      r
    ), [m, f] = l.useState(!1), [p, v] = l.useState(!1), b = l.useCallback((y) => {
      y && (f(y.canScrollPrev()), v(y.canScrollNext()));
    }, []), h = l.useCallback(() => {
      u?.scrollPrev();
    }, [u]), g = l.useCallback(() => {
      u?.scrollNext();
    }, [u]), x = l.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), g());
      },
      [h, g]
    );
    return l.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), l.useEffect(() => {
      if (u)
        return b(u), u.on("reInit", b), u.on("select", b), () => {
          u?.off("select", b);
        };
    }, [u, b]), /* @__PURE__ */ d.jsx(
      Gf.Provider,
      {
        value: {
          carouselRef: c,
          api: u,
          opts: e,
          orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: g,
          canScrollPrev: m,
          canScrollNext: p
        },
        children: /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: k("relative", o),
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
dT.displayName = "Carousel";
const fT = l.forwardRef(({ className: t, ...e }, n) => {
  const { carouselRef: r, orientation: o } = ks();
  return /* @__PURE__ */ d.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: k(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        t
      ),
      ...e
    }
  ) });
});
fT.displayName = "CarouselContent";
const mT = l.forwardRef(({ className: t, ...e }, n) => {
  const { orientation: r } = ks();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: k(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
});
mT.displayName = "CarouselItem";
const pT = l.forwardRef(({ className: t, variant: e = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollPrev: a, canScrollPrev: i } = ks();
  return /* @__PURE__ */ d.jsxs(
    Wn,
    {
      ref: o,
      variant: e,
      size: n,
      className: k(
        "absolute  h-8 w-8 rounded-full",
        s === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(Tg, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
pT.displayName = "CarouselPrevious";
const hT = l.forwardRef(({ className: t, variant: e = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: s, scrollNext: a, canScrollNext: i } = ks();
  return /* @__PURE__ */ d.jsxs(
    Wn,
    {
      ref: o,
      variant: e,
      size: n,
      className: k(
        "absolute h-8 w-8 rounded-full",
        s === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !i,
      onClick: a,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(Rg, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
hT.displayName = "CarouselNext";
const gT = { light: "", dark: ".dark" }, Uf = l.createContext(null);
function Kf() {
  const t = l.useContext(Uf);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const vT = l.forwardRef(({ id: t, className: e, children: n, config: r, ...o }, s) => {
  const a = l.useId(), i = `chart-${t || a.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(Uf.Provider, { value: { config: r }, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-chart": i,
      ref: s,
      className: k(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(bT, { id: i, config: r }),
        /* @__PURE__ */ d.jsx(Ci.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
vT.displayName = "Chart";
const bT = ({ id: t, config: e }) => {
  const n = Object.entries(e).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(gT).map(
          ([r, o]) => `
${o} [data-chart=${t}] {
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
}, CO = Ci.Tooltip, xT = l.forwardRef(
  ({
    active: t,
    payload: e,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: s = !1,
    label: a,
    labelFormatter: i,
    labelClassName: c,
    formatter: u,
    color: m,
    nameKey: f,
    labelKey: p
  }, v) => {
    const { config: b } = Kf(), h = l.useMemo(() => {
      if (o || !e?.length)
        return null;
      const [x] = e;
      if (!x)
        return null;
      const y = `${p || x.dataKey || x.name || "value"}`, w = ni(b, x, y), C = !p && typeof a == "string" ? b[a]?.label || a : w?.label;
      return i ? /* @__PURE__ */ d.jsx("div", { className: k("font-medium", c), children: i(C, e) }) : C ? /* @__PURE__ */ d.jsx("div", { className: k("font-medium", c), children: C }) : null;
    }, [
      a,
      i,
      e,
      o,
      c,
      b,
      p
    ]);
    if (!t || !e?.length)
      return null;
    const g = e.length === 1 && r !== "dot";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: v,
        className: k(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: e.map((x, y) => {
            if (!x)
              return null;
            const w = `${f || x.dataKey || x.name || "value"}`, C = ni(b, x, w), P = m || x.payload.fill || x.color;
            return /* @__PURE__ */ d.jsx(
              "div",
              {
                className: k(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: u && x?.value !== void 0 && x.name ? u(x.value, x.name, x, y, x.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  C?.icon ? /* @__PURE__ */ d.jsx(C.icon, {}) : !s && /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      className: k(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": g && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": P,
                        "--color-border": P
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: k(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? h : null,
                          /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: C?.label || x.name })
                        ] }),
                        x.value && /* @__PURE__ */ d.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: x.value.toLocaleString() })
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
xT.displayName = "ChartTooltip";
const SO = Ci.Legend, wT = l.forwardRef(
  ({ className: t, hideIcon: e = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, s) => {
    const { config: a } = Kf();
    return n?.length ? /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: s,
        className: k(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          t
        ),
        children: n.map((i) => {
          if (!i)
            return null;
          const c = `${o || i.dataKey || "value"}`, u = ni(a, i, c);
          return /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: k(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                u?.icon && !e ? /* @__PURE__ */ d.jsx(u.icon, {}) : /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: i.color
                    }
                  }
                ),
                u?.label
              ]
            },
            i.value
          );
        })
      }
    ) : null;
  }
);
wT.displayName = "ChartLegend";
function ni(t, e, n) {
  if (typeof e != "object" || e === null)
    return;
  const r = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let o = n;
  return n in e && typeof e[n] == "string" ? o = e[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in t ? t[o] : t[n];
}
var yT = Object.defineProperty, CT = (t, e) => yT(t, "name", { value: e, configurable: !0 });
function po(t) {
  const [e, n] = l.useState(void 0);
  return we(() => {
    if (t) {
      n({ width: t.offsetWidth, height: t.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          a = u.inlineSize, i = u.blockSize;
        } else
          a = t.offsetWidth, i = t.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(t, { box: "border-box" }), () => r.unobserve(t);
    } else
      n(void 0);
  }, [t]), e;
}
CT(po, "useSize");
var ST = Object.defineProperty, Ut = (t, e) => ST(t, "name", { value: e, configurable: !0 }), nc = "Checkbox", [PT, PO] = /* @__PURE__ */ Me(nc), [TT, rc] = PT(nc);
function qf(t) {
  const {
    __scopeCheckbox: e,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: u,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = t, [p, v] = Ae({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: nc
  }), [b, h] = l.useState(null), [g, x] = l.useState(null), y = l.useRef(!1), [w, C] = l.useReducer(
    (T) => T + 1,
    0
  ), P = b ? !!a || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    disabled: s,
    setChecked: v,
    control: b,
    setControl: h,
    name: i,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: w,
    onUserInteraction: C,
    required: u,
    defaultChecked: Bt(o) ? !1 : o,
    isFormControl: P,
    bubbleInput: g,
    setBubbleInput: x
  };
  return /* @__PURE__ */ d.jsx(
    TT,
    {
      scope: e,
      ...S,
      children: Qf(f) ? f(S) : r
    }
  );
}
Ut(qf, "CheckboxProvider");
var RT = "CheckboxTrigger", ET = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Ut(function({ __scopeCheckbox: e, onKeyDown: n, onClick: r, ...o }, s) {
    const {
      control: a,
      value: i,
      disabled: c,
      checked: u,
      required: m,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: v,
      onUserInteraction: b,
      isFormControl: h,
      bubbleInput: g
    } = rc(RT, e), x = te(s, f), y = l.useRef(u);
    return l.useEffect(() => {
      const w = a?.form;
      if (w) {
        const C = /* @__PURE__ */ Ut(() => p(y.current), "reset");
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [a, p]), /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Bt(u) ? "mixed" : u,
        "aria-required": m,
        "data-state": oc(u),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: i,
        ...o,
        ref: x,
        onKeyDown: A(n, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: A(r, (w) => {
          b(), p((C) => Bt(C) ? !0 : !C), g && h && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
        })
      }
    );
  }, "CheckboxTrigger")
), Xf = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ut(function(e, n) {
    const {
      __scopeCheckbox: r,
      name: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: u,
      onCheckedChange: m,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ d.jsx(
      qf,
      {
        __scopeCheckbox: r,
        checked: s,
        defaultChecked: a,
        disabled: c,
        required: i,
        onCheckedChange: m,
        name: o,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: v }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            ET,
            {
              ...p,
              ref: n,
              __scopeCheckbox: r
            }
          ),
          v && /* @__PURE__ */ d.jsx(
            NT,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }, "Checkbox")
), MT = "CheckboxIndicator", kT = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ut(function(e, n) {
    const { __scopeCheckbox: r, forceMount: o, ...s } = e, a = rc(MT, r);
    return /* @__PURE__ */ d.jsx(
      Ee,
      {
        present: o || Bt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          z.span,
          {
            "data-state": oc(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...s,
            ref: n,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }, "CheckboxIndicator")
), DT = "CheckboxBubbleInput", NT = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ut(function({ __scopeCheckbox: e, onClick: n, ...r }, o) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: a,
      userInteractionCount: i,
      checked: c,
      defaultChecked: u,
      required: m,
      disabled: f,
      name: p,
      value: v,
      form: b,
      bubbleInput: h,
      setBubbleInput: g
    } = rc(DT, e), x = te(o, g), y = po(s), w = l.useRef(!1), C = l.useRef(c), P = l.useRef(i);
    l.useEffect(() => {
      const T = h;
      if (!T) return;
      const R = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, I = i !== P.current;
      P.current = i;
      const O = C.current !== c;
      C.current = c;
      const $ = !(I && a.current);
      if (O && D) {
        w.current = !I;
        const _ = new Event("click", { bubbles: $ });
        T.indeterminate = Bt(c), D.call(T, Bt(c) ? !1 : c), T.dispatchEvent(_), w.current = !1;
      }
    }, [h, c, a, i]);
    const S = l.useRef(Bt(c) ? !1 : c);
    return /* @__PURE__ */ d.jsx(
      z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? S.current,
        required: m,
        disabled: f,
        name: p,
        value: v,
        form: b,
        ...r,
        tabIndex: -1,
        ref: x,
        onClick: A(n, (T) => {
          w.current && T.stopPropagation();
        }),
        style: {
          ...r.style,
          ...y,
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
  }, "CheckboxBubbleInput")
);
function Qf(t) {
  return typeof t == "function";
}
Ut(Qf, "isFunction");
function Bt(t) {
  return t === "indeterminate";
}
Ut(Bt, "isIndeterminate");
function oc(t) {
  return Bt(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
Ut(oc, "getState");
const _T = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Xf,
  {
    ref: n,
    className: k(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...e,
    children: /* @__PURE__ */ d.jsx(
      kT,
      {
        className: k("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d.jsx(ro, { className: "size-4 h-full" })
      }
    )
  }
));
_T.displayName = Xf.displayName;
function TO({
  name: t,
  label: e,
  options: n,
  placeholder: r = "Selecione uma opção",
  searchPlaceholder: o = "Buscar...",
  emptyMessage: s = "Nenhum resultado encontrado.",
  disabled: a = !1,
  isLoading: i = !1
}) {
  const { control: c, setValue: u } = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: c,
      name: t,
      render: ({ field: m }) => /* @__PURE__ */ d.jsxs(vn, { children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(
          IT,
          {
            placeholder: r,
            searchPlaceholder: o,
            emptyMessage: s,
            options: n,
            selected: m.value,
            onSelect: (f) => u(t, f, { shouldValidate: !0 }),
            disabled: a,
            isLoading: i
          }
        ),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
}
function IT({
  label: t,
  options: e,
  selected: n,
  onSelect: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: a = "Nenhum resultado encontrado.",
  error: i,
  disabled: c = !1,
  isLoading: u = !1
}) {
  const [m, f] = at(!1);
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-1", children: [
    !!t && /* @__PURE__ */ d.jsx(qs, { children: t }),
    /* @__PURE__ */ d.jsxs(xo, { open: m, onOpenChange: f, children: [
      /* @__PURE__ */ d.jsx(wo, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
        Wn,
        {
          variant: "outline",
          disabled: c,
          className: k(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ d.jsx("div", { className: "truncate", children: n ? e.find((p) => p.value === n)?.label : o }),
            /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-1", children: [
              u && /* @__PURE__ */ d.jsx(Vr, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ d.jsx(Mu, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ d.jsx(Sr, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ d.jsxs(go, { children: [
        /* @__PURE__ */ d.jsx(Ns, { placeholder: s }),
        /* @__PURE__ */ d.jsxs(_s, { children: [
          /* @__PURE__ */ d.jsx(Is, { children: a }),
          /* @__PURE__ */ d.jsx(vo, { children: e.map((p) => /* @__PURE__ */ d.jsxs(
            En,
            {
              value: p.label,
              onSelect: () => {
                n === p.value ? r(void 0) : r(p.value), f(!1);
              },
              children: [
                /* @__PURE__ */ d.jsx(
                  ro,
                  {
                    className: k(
                      "mr-2 size-4",
                      n === p.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ d.jsx("div", { className: "w-0 flex-1", children: p.label })
              ]
            },
            p.value
          )) })
        ] })
      ] }) })
    ] }),
    !!i && /* @__PURE__ */ d.jsx("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: i })
  ] });
}
var Kl = 1, OT = 0.9, AT = 0.8, jT = 0.17, Ea = 0.1, Ma = 0.999, FT = 0.9999, LT = 0.99, $T = /[\\\/_+.#"@\[\(\{&]/, WT = /[\\\/_+.#"@\[\(\{&]/g, BT = /[\s-]/, Zf = /[\s-]/g;
function ri(t, e, n, r, o, s, a) {
  if (s === e.length) return o === t.length ? Kl : LT;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), u = n.indexOf(c, o), m = 0, f, p, v, b; u >= 0; ) f = ri(t, e, n, r, u + 1, s + 1, a), f > m && (u === o ? f *= Kl : $T.test(t.charAt(u - 1)) ? (f *= AT, v = t.slice(o, u - 1).match(WT), v && o > 0 && (f *= Math.pow(Ma, v.length))) : BT.test(t.charAt(u - 1)) ? (f *= OT, b = t.slice(o, u - 1).match(Zf), b && o > 0 && (f *= Math.pow(Ma, b.length))) : (f *= jT, o > 0 && (f *= Math.pow(Ma, u - o))), t.charAt(u) !== e.charAt(s) && (f *= FT)), (f < Ea && n.charAt(u - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(u - 1) !== r.charAt(s)) && (p = ri(t, e, n, r, u + 1, s + 2, a), p * Ea > f && (f = p * Ea)), f > m && (m = f), u = n.indexOf(c, u + 1);
  return a[i] = m, m;
}
function ql(t) {
  return t.toLowerCase().replace(Zf, " ");
}
function VT(t, e, n) {
  return t = n && n.length > 0 ? `${t + " " + n.join(" ")}` : t, ri(t, e, ql(t), ql(e), 0, 0, {});
}
var Ar = '[cmdk-group=""]', ka = '[cmdk-group-items=""]', HT = '[cmdk-group-heading=""]', Jf = '[cmdk-item=""]', Xl = `${Jf}:not([aria-disabled="true"])`, oi = "cmdk-item-select", or = "data-value", zT = (t, e, n) => VT(t, e, n), em = l.createContext(void 0), ho = () => l.useContext(em), tm = l.createContext(void 0), sc = () => l.useContext(tm), nm = l.createContext(void 0), rm = l.forwardRef((t, e) => {
  let n = sr(() => {
    var N, B;
    return { search: "", value: (B = (N = t.value) != null ? N : t.defaultValue) != null ? B : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = sr(() => /* @__PURE__ */ new Set()), o = sr(() => /* @__PURE__ */ new Map()), s = sr(() => /* @__PURE__ */ new Map()), a = sr(() => /* @__PURE__ */ new Set()), i = om(t), { label: c, children: u, value: m, onValueChange: f, filter: p, shouldFilter: v, loop: b, disablePointerSelection: h = !1, vimBindings: g = !0, ...x } = t, y = Re(), w = Re(), C = Re(), P = l.useRef(null), S = tR();
  _n(() => {
    if (m !== void 0) {
      let N = m.trim();
      n.current.value = N, T.emit();
    }
  }, [m]), _n(() => {
    S(6, $);
  }, []);
  let T = l.useMemo(() => ({ subscribe: (N) => (a.current.add(N), () => a.current.delete(N)), snapshot: () => n.current, setState: (N, B, q) => {
    var L, Q, ee, F;
    if (!Object.is(n.current[N], B)) {
      if (n.current[N] = B, N === "search") O(), D(), S(1, I);
      else if (N === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let U = document.getElementById(C);
          U ? U.focus() : (L = document.getElementById(y)) == null || L.focus();
        }
        if (S(7, () => {
          var U;
          n.current.selectedItemId = (U = _()) == null ? void 0 : U.id, T.emit();
        }), q || S(5, $), ((Q = i.current) == null ? void 0 : Q.value) !== void 0) {
          let U = B ?? "";
          (F = (ee = i.current).onValueChange) == null || F.call(ee, U);
          return;
        }
      }
      T.emit();
    }
  }, emit: () => {
    a.current.forEach((N) => N());
  } }), []), R = l.useMemo(() => ({ value: (N, B, q) => {
    var L;
    B !== ((L = s.current.get(N)) == null ? void 0 : L.value) && (s.current.set(N, { value: B, keywords: q }), n.current.filtered.items.set(N, M(B, q)), S(2, () => {
      D(), T.emit();
    }));
  }, item: (N, B) => (r.current.add(N), B && (o.current.has(B) ? o.current.get(B).add(N) : o.current.set(B, /* @__PURE__ */ new Set([N]))), S(3, () => {
    O(), D(), n.current.value || I(), T.emit();
  }), () => {
    s.current.delete(N), r.current.delete(N), n.current.filtered.items.delete(N);
    let q = _();
    S(4, () => {
      O(), q?.getAttribute("id") === N && I(), T.emit();
    });
  }), group: (N) => (o.current.has(N) || o.current.set(N, /* @__PURE__ */ new Set()), () => {
    s.current.delete(N), o.current.delete(N);
  }), filter: () => i.current.shouldFilter, label: c || t["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: y, inputId: C, labelId: w, listInnerRef: P }), []);
  function M(N, B) {
    var q, L;
    let Q = (L = (q = i.current) == null ? void 0 : q.filter) != null ? L : zT;
    return N ? Q(N, n.current.search, B) : 0;
  }
  function D() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let N = n.current.filtered.items, B = [];
    n.current.filtered.groups.forEach((L) => {
      let Q = o.current.get(L), ee = 0;
      Q.forEach((F) => {
        let U = N.get(F);
        ee = Math.max(U, ee);
      }), B.push([L, ee]);
    });
    let q = P.current;
    W().sort((L, Q) => {
      var ee, F;
      let U = L.getAttribute("id"), ae = Q.getAttribute("id");
      return ((ee = N.get(ae)) != null ? ee : 0) - ((F = N.get(U)) != null ? F : 0);
    }).forEach((L) => {
      let Q = L.closest(ka);
      Q ? Q.appendChild(L.parentElement === Q ? L : L.closest(`${ka} > *`)) : q.appendChild(L.parentElement === q ? L : L.closest(`${ka} > *`));
    }), B.sort((L, Q) => Q[1] - L[1]).forEach((L) => {
      var Q;
      let ee = (Q = P.current) == null ? void 0 : Q.querySelector(`${Ar}[${or}="${encodeURIComponent(L[0])}"]`);
      ee?.parentElement.appendChild(ee);
    });
  }
  function I() {
    let N = W().find((q) => q.getAttribute("aria-disabled") !== "true"), B = N?.getAttribute(or);
    T.setState("value", B || void 0);
  }
  function O() {
    var N, B, q, L;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let Q = 0;
    for (let ee of r.current) {
      let F = (B = (N = s.current.get(ee)) == null ? void 0 : N.value) != null ? B : "", U = (L = (q = s.current.get(ee)) == null ? void 0 : q.keywords) != null ? L : [], ae = M(F, U);
      n.current.filtered.items.set(ee, ae), ae > 0 && Q++;
    }
    for (let [ee, F] of o.current) for (let U of F) if (n.current.filtered.items.get(U) > 0) {
      n.current.filtered.groups.add(ee);
      break;
    }
    n.current.filtered.count = Q;
  }
  function $() {
    var N, B, q;
    let L = _();
    L && (((N = L.parentElement) == null ? void 0 : N.firstChild) === L && ((q = (B = L.closest(Ar)) == null ? void 0 : B.querySelector(HT)) == null || q.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function _() {
    var N;
    return (N = P.current) == null ? void 0 : N.querySelector(`${Jf}[aria-selected="true"]`);
  }
  function W() {
    var N;
    return Array.from(((N = P.current) == null ? void 0 : N.querySelectorAll(Xl)) || []);
  }
  function j(N) {
    let B = W()[N];
    B && T.setState("value", B.getAttribute(or));
  }
  function V(N) {
    var B;
    let q = _(), L = W(), Q = L.findIndex((F) => F === q), ee = L[Q + N];
    (B = i.current) != null && B.loop && (ee = Q + N < 0 ? L[L.length - 1] : Q + N === L.length ? L[0] : L[Q + N]), ee && T.setState("value", ee.getAttribute(or));
  }
  function G(N) {
    let B = _(), q = B?.closest(Ar), L;
    for (; q && !L; ) q = N > 0 ? JT(q, Ar) : eR(q, Ar), L = q?.querySelector(Xl);
    L ? T.setState("value", L.getAttribute(or)) : V(N);
  }
  let K = () => j(W().length - 1), E = (N) => {
    N.preventDefault(), N.metaKey ? K() : N.altKey ? G(1) : V(1);
  }, H = (N) => {
    N.preventDefault(), N.metaKey ? j(0) : N.altKey ? G(-1) : V(-1);
  };
  return l.createElement(z.div, { ref: e, tabIndex: -1, ...x, "cmdk-root": "", onKeyDown: (N) => {
    var B;
    (B = x.onKeyDown) == null || B.call(x, N);
    let q = N.nativeEvent.isComposing || N.keyCode === 229;
    if (!(N.defaultPrevented || q)) switch (N.key) {
      case "n":
      case "j": {
        g && N.ctrlKey && E(N);
        break;
      }
      case "ArrowDown": {
        E(N);
        break;
      }
      case "p":
      case "k": {
        g && N.ctrlKey && H(N);
        break;
      }
      case "ArrowUp": {
        H(N);
        break;
      }
      case "Home": {
        N.preventDefault(), j(0);
        break;
      }
      case "End": {
        N.preventDefault(), K();
        break;
      }
      case "Enter": {
        N.preventDefault();
        let L = _();
        if (L) {
          let Q = new Event(oi);
          L.dispatchEvent(Q);
        }
      }
    }
  } }, l.createElement("label", { "cmdk-label": "", htmlFor: R.inputId, id: R.labelId, style: rR }, c), Ds(t, (N) => l.createElement(tm.Provider, { value: T }, l.createElement(em.Provider, { value: R }, N))));
}), YT = l.forwardRef((t, e) => {
  var n, r;
  let o = Re(), s = l.useRef(null), a = l.useContext(nm), i = ho(), c = om(t), u = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a?.forceMount;
  _n(() => {
    if (!u) return i.item(o, a?.id);
  }, [u]);
  let m = sm(o, s, [t.value, t.children, s], t.keywords), f = sc(), p = rn((S) => S.value && S.value === m.current), v = rn((S) => u || i.filter() === !1 ? !0 : S.search ? S.filtered.items.get(o) > 0 : !0);
  l.useEffect(() => {
    let S = s.current;
    if (!(!S || t.disabled)) return S.addEventListener(oi, b), () => S.removeEventListener(oi, b);
  }, [v, t.onSelect, t.disabled]);
  function b() {
    var S, T;
    h(), (T = (S = c.current).onSelect) == null || T.call(S, m.current);
  }
  function h() {
    f.setState("value", m.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: x, onSelect: y, forceMount: w, keywords: C, ...P } = t;
  return l.createElement(z.div, { ref: Mn(s, e), ...P, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : b }, t.children);
}), GT = l.forwardRef((t, e) => {
  let { heading: n, children: r, forceMount: o, ...s } = t, a = Re(), i = l.useRef(null), c = l.useRef(null), u = Re(), m = ho(), f = rn((v) => o || m.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(a) : !0);
  _n(() => m.group(a), []), sm(a, i, [t.value, t.heading, c]);
  let p = l.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return l.createElement(z.div, { ref: Mn(i, e), ...s, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && l.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), Ds(t, (v) => l.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, l.createElement(nm.Provider, { value: p }, v))));
}), UT = l.forwardRef((t, e) => {
  let { alwaysRender: n, ...r } = t, o = l.useRef(null), s = rn((a) => !a.search);
  return !n && !s ? null : l.createElement(z.div, { ref: Mn(o, e), ...r, "cmdk-separator": "", role: "separator" });
}), KT = l.forwardRef((t, e) => {
  let { onValueChange: n, ...r } = t, o = t.value != null, s = sc(), a = rn((u) => u.search), i = rn((u) => u.selectedItemId), c = ho();
  return l.useEffect(() => {
    t.value != null && s.setState("search", t.value);
  }, [t.value]), l.createElement(z.input, { ref: e, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? t.value : a, onChange: (u) => {
    o || s.setState("search", u.target.value), n?.(u.target.value);
  } });
}), qT = l.forwardRef((t, e) => {
  let { children: n, label: r = "Suggestions", ...o } = t, s = l.useRef(null), a = l.useRef(null), i = rn((u) => u.selectedItemId), c = ho();
  return l.useEffect(() => {
    if (a.current && s.current) {
      let u = a.current, m = s.current, f, p = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let v = u.offsetHeight;
          m.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(u), () => {
        cancelAnimationFrame(f), p.unobserve(u);
      };
    }
  }, []), l.createElement(z.div, { ref: Mn(s, e), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Ds(t, (u) => l.createElement("div", { ref: Mn(a, c.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), XT = l.forwardRef((t, e) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = t;
  return l.createElement(ys, { open: n, onOpenChange: r }, l.createElement(Cs, { container: a }, l.createElement(gr, { "cmdk-overlay": "", className: o }), l.createElement(vr, { "aria-label": t.label, "cmdk-dialog": "", className: s }, l.createElement(rm, { ref: e, ...i }))));
}), QT = l.forwardRef((t, e) => rn((n) => n.filtered.count === 0) ? l.createElement(z.div, { ref: e, ...t, "cmdk-empty": "", role: "presentation" }) : null), ZT = l.forwardRef((t, e) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = t;
  return l.createElement(z.div, { ref: e, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ds(t, (a) => l.createElement("div", { "aria-hidden": !0 }, a)));
}), Qe = Object.assign(rm, { List: qT, Item: YT, Input: KT, Group: GT, Separator: UT, Dialog: XT, Empty: QT, Loading: ZT });
function JT(t, e) {
  let n = t.nextElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.nextElementSibling;
  }
}
function eR(t, e) {
  let n = t.previousElementSibling;
  for (; n; ) {
    if (n.matches(e)) return n;
    n = n.previousElementSibling;
  }
}
function om(t) {
  let e = l.useRef(t);
  return _n(() => {
    e.current = t;
  }), e;
}
var _n = typeof window > "u" ? l.useEffect : l.useLayoutEffect;
function sr(t) {
  let e = l.useRef();
  return e.current === void 0 && (e.current = t()), e;
}
function rn(t) {
  let e = sc(), n = () => t(e.snapshot());
  return l.useSyncExternalStore(e.subscribe, n, n);
}
function sm(t, e, n, r = []) {
  let o = l.useRef(), s = ho();
  return _n(() => {
    var a;
    let i = (() => {
      var u;
      for (let m of n) {
        if (typeof m == "string") return m.trim();
        if (typeof m == "object" && "current" in m) return m.current ? (u = m.current.textContent) == null ? void 0 : u.trim() : o.current;
      }
    })(), c = r.map((u) => u.trim());
    s.value(t, i, c), (a = e.current) == null || a.setAttribute(or, i), o.current = i;
  }), o;
}
var tR = () => {
  let [t, e] = l.useState(), n = sr(() => /* @__PURE__ */ new Map());
  return _n(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [t]), (r, o) => {
    n.current.set(r, o), e({});
  };
};
function nR(t) {
  let e = t.type;
  return typeof e == "function" ? e(t.props) : "render" in e ? e.render(t.props) : t;
}
function Ds({ asChild: t, children: e }, n) {
  return t && l.isValidElement(e) ? l.cloneElement(nR(e), { ref: e.ref }, n(e.props.children)) : n(e);
}
var rR = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const go = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Qe,
  {
    ref: n,
    className: k(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...e
  }
));
go.displayName = Qe.displayName;
const RO = ({ children: t, ...e }) => /* @__PURE__ */ d.jsx(XE, { ...e, children: /* @__PURE__ */ d.jsx(Am, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d.jsx(go, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t }) }) }), Ns = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d.jsx(Eg, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d.jsx(
    Qe.Input,
    {
      ref: n,
      className: k(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
] }));
Ns.displayName = Qe.Input.displayName;
const _s = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Qe.List,
  {
    ref: n,
    className: k("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
_s.displayName = Qe.List.displayName;
const Is = l.forwardRef((t, e) => /* @__PURE__ */ d.jsx(
  Qe.Empty,
  {
    ref: e,
    className: "py-6 text-center text-sm",
    ...t
  }
));
Is.displayName = Qe.Empty.displayName;
const vo = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Qe.Group,
  {
    ref: n,
    className: k(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...e
  }
));
vo.displayName = Qe.Group.displayName;
const am = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Qe.Separator,
  {
    ref: n,
    className: k("-mx-1 h-px bg-border", t),
    ...e
  }
));
am.displayName = Qe.Separator.displayName;
const En = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Qe.Item,
  {
    ref: n,
    className: k(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t
    ),
    ...e
  }
));
En.displayName = Qe.Item.displayName;
const oR = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...e
  }
);
oR.displayName = "CommandShortcut";
const sR = ["top", "right", "bottom", "left"], on = Math.min, Vt = Math.max, ss = Math.round, $o = Math.floor, Ht = (t) => ({
  x: t,
  y: t
}), aR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function im(t, e, n) {
  return Vt(t, on(e, n));
}
function Kt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function sn(t) {
  return t.split("-")[0];
}
function wr(t) {
  return t.split("-")[1];
}
function ac(t) {
  return t === "x" ? "y" : "x";
}
function ic(t) {
  return t === "y" ? "height" : "width";
}
function Et(t) {
  const e = t[0];
  return e === "t" || e === "b" ? "y" : "x";
}
function cc(t) {
  return ac(Et(t));
}
function iR(t, e, n) {
  n === void 0 && (n = !1);
  const r = wr(t), o = cc(t), s = ic(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (a = as(a)), [a, as(a)];
}
function cR(t) {
  const e = as(t);
  return [si(t), e, si(e)];
}
function si(t) {
  return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start");
}
const Ql = ["left", "right"], Zl = ["right", "left"], lR = ["top", "bottom"], uR = ["bottom", "top"];
function dR(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? Zl : Ql : e ? Ql : Zl;
    case "left":
    case "right":
      return e ? lR : uR;
    default:
      return [];
  }
}
function fR(t, e, n, r) {
  const o = wr(t);
  let s = dR(sn(t), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), e && (s = s.concat(s.map(si)))), s;
}
function as(t) {
  const e = sn(t);
  return aR[e] + t.slice(e.length);
}
function mR(t) {
  var e, n, r, o;
  return {
    top: (e = t.top) != null ? e : 0,
    right: (n = t.right) != null ? n : 0,
    bottom: (r = t.bottom) != null ? r : 0,
    left: (o = t.left) != null ? o : 0
  };
}
function cm(t) {
  return typeof t != "number" ? mR(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function is(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Jl(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const s = Et(e), a = cc(e), i = ic(a), c = sn(e), u = s === "y", m = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  const b = wr(e);
  return b && (v[a] += p * (b === "end" ? 1 : -1) * (n && u ? -1 : 1)), v;
}
async function pR(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Kt(e, t), b = cm(v), g = i[p ? f === "floating" ? "reference" : "floating" : f], x = is(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: m,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), C = await (s.isElement == null ? void 0 : s.isElement(w)) && await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  }, P = is(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: w,
    strategy: c
  }) : y);
  return {
    top: (x.top - P.top + b.top) / C.y,
    bottom: (P.bottom - x.bottom + b.bottom) / C.y,
    left: (x.left - P.left + b.left) / C.x,
    right: (P.right - x.right + b.right) / C.x
  };
}
const hR = 50, gR = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: pR
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let u = await a.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: m,
    y: f
  } = Jl(u, r, c), p = r, v = 0;
  const b = {};
  for (let h = 0; h < s.length; h++) {
    const g = s[h];
    if (!g)
      continue;
    const {
      name: x,
      fn: y
    } = g, {
      x: w,
      y: C,
      data: P,
      reset: S
    } = await y({
      x: m,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: b,
      rects: u,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    m = w ?? m, f = C ?? f, b[x] = {
      ...b[x],
      ...P
    }, S && v < hR && (v++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await a.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : S.rects), {
      x: m,
      y: f
    } = Jl(u, p, c)), h = -1);
  }
  return {
    x: m,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: b
  };
}, vR = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = e, {
      element: u,
      padding: m = 0
    } = Kt(t, e) || {};
    if (u == null)
      return {};
    const f = cm(m), p = {
      x: n,
      y: r
    }, v = cc(o), b = ic(v), h = await a.getDimensions(u), g = v === "y", x = g ? "top" : "left", y = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", C = s.reference[b] + s.reference[v] - p[v] - s.floating[b], P = p[v] - s.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let T = S ? S[w] : 0;
    (!T || !await (a.isElement == null ? void 0 : a.isElement(S))) && (T = i.floating[w] || s.floating[b]);
    const R = C / 2 - P / 2, M = T / 2 - h[b] / 2 - 1, D = on(f[x], M), I = on(f[y], M), O = T - h[b] - I, $ = T / 2 - h[b] / 2 + R, _ = im(D, $, O), W = !c.arrow && wr(o) != null && $ !== _ && s.reference[b] / 2 - ($ < D ? D : I) - h[b] / 2 < 0, j = W ? $ < D ? $ - D : $ - O : 0;
    return {
      [v]: p[v] + j,
      data: {
        [v]: _,
        centerOffset: $ - _ - j,
        ...W && {
          alignmentOffset: j
        }
      },
      reset: W
    };
  }
}), bR = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: u
      } = e, {
        mainAxis: m = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...g
      } = Kt(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = sn(o), y = Et(i), w = sn(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), P = p || (w || !h ? [as(i)] : cR(i)), S = b !== "none";
      !p && S && P.push(...fR(i, h, b, C));
      const T = [i, ...P], R = await c.detectOverflow(e, g), M = [];
      let D = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && M.push(R[x]), f) {
        const _ = iR(o, a, C);
        M.push(R[_[0]], R[_[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: M
      }], !M.every((_) => _ <= 0)) {
        var I, O;
        const _ = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, W = T[_];
        if (W && (!(f === "alignment" ? y !== Et(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((G) => Et(G.placement) === y ? G.overflows[0] > 0 : !0)))
          return {
            data: {
              index: _,
              overflows: D
            },
            reset: {
              placement: W
            }
          };
        let j = (O = D.filter((V) => V.overflows[0] <= 0).sort((V, G) => V.overflows[1] - G.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!j)
          switch (v) {
            case "bestFit": {
              var $;
              const V = ($ = D.filter((G) => {
                if (S) {
                  const K = Et(G.placement);
                  return K === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  K === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((K) => K > 0).reduce((K, E) => K + E, 0)]).sort((G, K) => G[1] - K[1])[0]) == null ? void 0 : $[0];
              V && (j = V);
              break;
            }
            case "initialPlacement":
              j = i;
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
function eu(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function tu(t) {
  return sR.some((e) => t[e] >= 0);
}
const xR = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n,
        platform: r
      } = e, {
        strategy: o = "referenceHidden",
        ...s
      } = Kt(t, e);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(e, {
            ...s,
            elementContext: "reference"
          }), i = eu(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: tu(i)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(e, {
            ...s,
            altBoundary: !0
          }), i = eu(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: tu(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, lm = /* @__PURE__ */ new Set(["left", "top"]);
async function wR(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = sn(n), i = wr(n), c = Et(n) === "y", u = lm.has(a) ? -1 : 1, m = s && c ? -1 : 1, f = Kt(e, t);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof b == "number" && (v = i === "end" ? b * -1 : b), c ? {
    x: v * m,
    y: p * u
  } : {
    x: p * u,
    y: v * m
  };
}
const yR = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = e, c = await wR(e, t);
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
}, CR = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = e, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: C
            } = y;
            return {
              x: w,
              y: C
            };
          }
        },
        ...u
      } = Kt(t, e), m = {
        x: n,
        y: r
      }, f = await s.detectOverflow(e, u), p = Et(o), v = ac(p);
      let b = m[v], h = m[p];
      const g = (y, w) => im(w + f[y === "y" ? "top" : "left"], w, w - f[y === "y" ? "bottom" : "right"]);
      a && (b = g(v, b)), i && (h = g(p, h));
      const x = c.fn({
        ...e,
        [v]: b,
        [p]: h
      });
      return {
        ...x,
        data: {
          x: x.x - n,
          y: x.y - r,
          enabled: {
            [v]: a,
            [p]: i
          }
        }
      };
    }
  };
}, SR = function(t) {
  return t === void 0 && (t = {}), {
    options: t,
    fn(e) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        rects: i,
        middlewareData: c
      } = e, {
        offset: u = 0,
        mainAxis: m = !0,
        crossAxis: f = !0
      } = Kt(t, e), p = {
        x: o,
        y: s
      }, v = Et(a), b = ac(v);
      let h = p[b], g = p[v];
      const x = Kt(u, e), y = typeof x == "number" ? {
        mainAxis: x,
        crossAxis: 0
      } : {
        mainAxis: (n = x.mainAxis) != null ? n : 0,
        crossAxis: (r = x.crossAxis) != null ? r : 0
      };
      if (m) {
        const P = b === "y" ? "height" : "width", S = i.reference[b] - i.floating[P] + y.mainAxis, T = i.reference[b] + i.reference[P] - y.mainAxis;
        h < S ? h = S : h > T && (h = T);
      }
      if (f) {
        var w, C;
        const P = b === "y" ? "width" : "height", S = lm.has(sn(a)), T = i.reference[v] - i.floating[P] + (S && ((w = c.offset) == null ? void 0 : w[v]) || 0) + (S ? 0 : y.crossAxis), R = i.reference[v] + i.reference[P] + (S ? 0 : ((C = c.offset) == null ? void 0 : C[v]) || 0) - (S ? y.crossAxis : 0);
        g < T ? g = T : g > R && (g = R);
      }
      return {
        [b]: h,
        [v]: g
      };
    }
  };
}, PR = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = e, {
        apply: a = () => {
        },
        ...i
      } = Kt(t, e), c = await o.detectOverflow(e, i), u = sn(n), m = wr(n), f = Et(n) === "y", {
        width: p,
        height: v
      } = r.floating;
      let b, h;
      u === "top" || u === "bottom" ? (b = u, h = m === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = u, b = m === "end" ? "top" : "bottom");
      const g = v - c.top - c.bottom, x = p - c.left - c.right, y = on(v - c[b], g), w = on(p - c[h], x), C = e.middlewareData.shift, P = !C;
      let S = y, T = w;
      C != null && C.enabled.x && (T = x), C != null && C.enabled.y && (S = g), P && !m && (f ? T = p - 2 * Vt(c.left, c.right) : S = v - 2 * Vt(c.top, c.bottom)), await a({
        ...e,
        availableWidth: T,
        availableHeight: S
      });
      const R = await o.getDimensions(s.floating);
      return p !== R.width || v !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Os() {
  return typeof window < "u";
}
function yr(t) {
  return um(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Xe(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Qt(t) {
  var e;
  return (e = (um(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function um(t) {
  return Os() ? t instanceof Node || t instanceof Xe(t).Node : !1;
}
function Mt(t) {
  return Os() ? t instanceof Element || t instanceof Xe(t).Element : !1;
}
function fn(t) {
  return Os() ? t instanceof HTMLElement || t instanceof Xe(t).HTMLElement : !1;
}
function nu(t) {
  return !Os() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Xe(t).ShadowRoot;
}
function As(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = kt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && o !== "inline" && o !== "contents";
}
function TR(t) {
  return /^(table|td|th)$/.test(yr(t));
}
function js(t) {
  try {
    if (t.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const RR = /transform|translate|scale|rotate|perspective|filter/, ER = /paint|layout|strict|content/, Sn = (t) => !!t && t !== "none";
let Da;
function lc(t) {
  const e = Mt(t) ? kt(t) : t;
  return Sn(e.transform) || Sn(e.translate) || Sn(e.scale) || Sn(e.rotate) || Sn(e.perspective) || !uc() && (Sn(e.backdropFilter) || Sn(e.filter)) || RR.test(e.willChange || "") || ER.test(e.contain || "");
}
function MR(t) {
  let e = In(t);
  for (; fn(e) && !Kr(e); ) {
    if (lc(e))
      return e;
    if (js(e))
      return null;
    e = In(e);
  }
  return null;
}
function uc() {
  return Da == null && (Da = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Da;
}
function Kr(t) {
  return /^(html|body|#document)$/.test(yr(t));
}
function kt(t) {
  return Xe(t).getComputedStyle(t);
}
function Fs(t) {
  return Mt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function In(t) {
  if (yr(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    nu(t) && t.host || // Fallback.
    Qt(t)
  );
  return nu(e) ? e.host : e;
}
function dm(t) {
  const e = In(t);
  return Kr(e) ? (t.ownerDocument || t).body : fn(e) && As(e) ? e : dm(e);
}
function qr(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = dm(t), s = o === ((r = t.ownerDocument) == null ? void 0 : r.body), a = Xe(o);
  if (s) {
    const i = ai(a);
    return e.concat(a, a.visualViewport || [], As(o) ? o : [], i && n ? qr(i) : []);
  } else
    return e.concat(o, qr(o, [], n));
}
function ai(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function fm(t) {
  const e = kt(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = fn(t), s = o ? t.offsetWidth : n, a = o ? t.offsetHeight : r, i = ss(n) !== s || ss(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function dc(t) {
  return Mt(t) ? t : t.contextElement;
}
function cr(t) {
  const e = dc(t);
  if (!fn(e))
    return Ht(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = fm(e);
  let a = (s ? ss(n.width) : n.width) / r, i = (s ? ss(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const kR = /* @__PURE__ */ Ht(0);
function mm(t) {
  const e = Xe(t);
  return !uc() || !e.visualViewport ? kR : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function DR(t, e, n) {
  return e === void 0 && (e = !1), !!n && e && n === Xe(t);
}
function On(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = dc(t);
  let a = Ht(1);
  e && (r ? Mt(r) && (a = cr(r)) : a = cr(t));
  const i = DR(s, n, r) ? mm(s) : Ht(0);
  let c = (o.left + i.x) / a.x, u = (o.top + i.y) / a.y, m = o.width / a.x, f = o.height / a.y;
  if (s && r) {
    const p = Xe(s), v = Mt(r) ? Xe(r) : r;
    let b = p, h = ai(b);
    for (; h && v !== b; ) {
      const g = cr(h), x = h.getBoundingClientRect(), y = kt(h), w = x.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x, C = x.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, u *= g.y, m *= g.x, f *= g.y, c += w, u += C, b = Xe(h), h = ai(b);
    }
  }
  return is({
    width: m,
    height: f,
    x: c,
    y: u
  });
}
function Ls(t, e) {
  const n = Fs(t).scrollLeft;
  return e ? e.left + n : On(Qt(t)).left + n;
}
function pm(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Ls(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function NR(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const s = o === "fixed", a = Qt(r), i = e ? js(e.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ht(1);
  const m = Ht(0), f = fn(r);
  if ((f || !s) && ((yr(r) !== "body" || As(a)) && (c = Fs(r)), f)) {
    const v = On(r);
    u = cr(r), m.x = v.x + r.clientLeft, m.y = v.y + r.clientTop;
  }
  const p = a && !f && !s ? pm(a, c) : Ht(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + m.x + p.x,
    y: n.y * u.y - c.scrollTop * u.y + m.y + p.y
  };
}
function _R(t) {
  return t.getClientRects ? Array.from(t.getClientRects()) : [];
}
function IR(t) {
  const e = Fs(t), n = t.ownerDocument.body, r = Vt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = Vt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -e.scrollLeft + Ls(t);
  const a = -e.scrollTop;
  return kt(n).direction === "rtl" && (s += Vt(t.clientWidth, n.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: a
  };
}
const OR = 25;
function AR(t, e, n) {
  n === void 0 && (n = "viewport");
  const r = n === "layoutViewport", o = Xe(t), s = Qt(t), a = o.visualViewport;
  let i = s.clientWidth, c = s.clientHeight, u = 0, m = 0;
  if (a) {
    const p = !uc() || e === "fixed";
    r ? p || (u = -a.offsetLeft, m = -a.offsetTop) : (i = a.width, c = a.height, p && (u = a.offsetLeft, m = a.offsetTop));
  }
  if (Ls(s) <= 0) {
    const p = s.ownerDocument, v = p.body, b = getComputedStyle(v), h = p.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, g = Math.abs(s.clientWidth - v.clientWidth - h), x = getComputedStyle(s).scrollbarGutter === "stable both-edges" ? g / 2 : g;
    x <= OR && (i -= x);
  }
  return {
    width: i,
    height: c,
    x: u,
    y: m
  };
}
function jR(t, e) {
  const n = On(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, s = cr(t), a = t.clientWidth * s.x, i = t.clientHeight * s.y, c = o * s.x, u = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: u
  };
}
function ru(t, e, n) {
  let r;
  if (e === "viewport" || e === "layoutViewport")
    r = AR(t, n, e);
  else if (e === "document")
    r = IR(Qt(t));
  else if (Mt(e))
    r = jR(e, n);
  else {
    const o = mm(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return is(r);
}
function FR(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = qr(t, [], !1).filter((i) => Mt(i) && yr(i) !== "body"), o = null;
  const s = kt(t).position === "fixed";
  let a = s ? In(t) : t;
  for (; Mt(a) && !Kr(a); ) {
    const i = kt(a), c = lc(a), u = o ? o.position : s ? "fixed" : "";
    !c && (u === "fixed" || u === "absolute" && i.position === "static") ? r = r.filter((f) => f !== a) : o = i, a = In(a);
  }
  return e.set(t, r), r;
}
function LR(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const a = [...n === "clippingAncestors" ? js(e) ? [] : FR(e, this._c) : [].concat(n), r], i = ru(e, a[0], o);
  let c = i.top, u = i.right, m = i.bottom, f = i.left;
  for (let p = 1; p < a.length; p++) {
    const v = ru(e, a[p], o);
    c = Vt(v.top, c), u = on(v.right, u), m = on(v.bottom, m), f = Vt(v.left, f);
  }
  return {
    width: u - f,
    height: m - c,
    x: f,
    y: c
  };
}
function $R(t) {
  const {
    width: e,
    height: n
  } = fm(t);
  return {
    width: e,
    height: n
  };
}
function WR(t, e, n) {
  const r = fn(e), o = Qt(e), s = n === "fixed", a = On(t, !0, s, e);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ht(0);
  if ((r || !s) && ((yr(e) !== "body" || As(o)) && (i = Fs(e)), r)) {
    const p = On(e, !0, s, e);
    c.x = p.x + e.clientLeft, c.y = p.y + e.clientTop;
  }
  !r && o && (c.x = Ls(o));
  const u = o && !r && !s ? pm(o, i) : Ht(0), m = a.left + i.scrollLeft - c.x - u.x, f = a.top + i.scrollTop - c.y - u.y;
  return {
    x: m,
    y: f,
    width: a.width,
    height: a.height
  };
}
function Na(t) {
  return kt(t).position === "static";
}
function ou(t, e) {
  if (!fn(t) || kt(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return Qt(t) === n && (n = n.ownerDocument.body), n;
}
function hm(t, e) {
  const n = Xe(t);
  if (js(t))
    return n;
  if (!fn(t)) {
    let o = In(t);
    for (; o && !Kr(o); ) {
      if (Mt(o) && !Na(o))
        return o;
      o = In(o);
    }
    return n;
  }
  let r = ou(t, e);
  for (; r && TR(r) && Na(r); )
    r = ou(r, e);
  return r && Kr(r) && Na(r) && !lc(r) ? n : r || MR(t) || n;
}
const BR = async function(t) {
  const e = this.getOffsetParent || hm, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: WR(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function VR(t) {
  return kt(t).direction === "rtl";
}
const HR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NR,
  getDocumentElement: Qt,
  getClippingRect: LR,
  getOffsetParent: hm,
  getElementRects: BR,
  getClientRects: _R,
  getDimensions: $R,
  getScale: cr,
  isElement: Mt,
  isRTL: VR
};
function gm(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function zR(t, e, n) {
  let r = null, o;
  const s = Qt(t);
  function a() {
    var m;
    clearTimeout(o), (m = r) == null || m.disconnect(), r = null;
  }
  function i(m, f) {
    m === void 0 && (m = !1), f === void 0 && (f = 1), a();
    const p = t.getBoundingClientRect(), {
      left: v,
      top: b,
      width: h,
      height: g
    } = p;
    if (m || e(), !h || !g)
      return;
    const x = $o(b), y = $o(s.clientWidth - (v + h)), w = $o(s.clientHeight - (b + g)), C = $o(v), S = {
      rootMargin: -x + "px " + -y + "px " + -w + "px " + -C + "px",
      threshold: Vt(0, on(1, f)) || 1
    };
    let T = !0;
    function R(M) {
      const D = M[0].intersectionRatio;
      if (!gm(p, t.getBoundingClientRect()))
        return i();
      if (D !== f) {
        if (!T)
          return i();
        D ? i(!1, D) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      T = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ...S,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, S);
    }
    r.observe(t);
  }
  const c = Xe(t), u = () => i(n);
  return c.addEventListener("resize", u), i(!0), () => {
    c.removeEventListener("resize", u), a();
  };
}
function YR(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = dc(t), m = o || s ? [...u ? qr(u) : [], ...e ? qr(e) : []] : [];
  m.forEach((x) => {
    o && x.addEventListener("scroll", n), s && x.addEventListener("resize", n);
  });
  const f = u && i ? zR(u, n, s) : null;
  let p = -1, v = null;
  a && (v = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === u && v && e && (v.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(e);
    })), n();
  }), u && !c && v.observe(u), e && v.observe(e));
  let b, h = c ? On(t) : null;
  c && g();
  function g() {
    const x = On(t);
    h && !gm(h, x) && n(), h = x, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var x;
    m.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f?.(), (x = v) == null || x.disconnect(), v = null, c && cancelAnimationFrame(b);
  };
}
const GR = yR, UR = CR, KR = bR, qR = PR, XR = xR, su = vR, QR = SR, ZR = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = n ?? {}, s = {
    ...HR,
    ...o.platform,
    _c: r
  };
  return gR(t, e, {
    ...o,
    platform: s
  });
};
var JR = typeof document < "u", eE = function() {
}, Ko = JR ? Ru : eE;
function cs(t, e) {
  if (t === e)
    return !0;
  if (typeof t != typeof e)
    return !1;
  if (typeof t == "function" && t.toString() === e.toString())
    return !0;
  let n, r, o;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (n = t.length, n !== e.length) return !1;
      for (r = n; r-- !== 0; )
        if (!cs(t[r], e[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(t), n = o.length, n !== Object.keys(e).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && t.$$typeof) && !cs(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function vm(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function au(t, e) {
  const n = vm(t);
  return Math.round(e * n) / n;
}
function _a(t) {
  const e = l.useRef(t);
  return Ko(() => {
    e.current = t;
  }), e;
}
function tE(t) {
  t === void 0 && (t = {});
  const {
    placement: e = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: u
  } = t, [m, f] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = l.useState(r);
  cs(p, r) || v(r);
  const [b, h] = l.useState(null), [g, x] = l.useState(null), y = l.useCallback((G) => {
    G !== S.current && (S.current = G, h(G));
  }, []), w = l.useCallback((G) => {
    G !== T.current && (T.current = G, x(G));
  }, []), C = s || b, P = a || g, S = l.useRef(null), T = l.useRef(null), R = l.useRef(m), M = c != null, D = _a(c), I = _a(o), O = _a(u), $ = l.useCallback(() => {
    if (!S.current || !T.current)
      return;
    const G = {
      placement: e,
      strategy: n,
      middleware: p
    };
    I.current && (G.platform = I.current), ZR(S.current, T.current, G).then((K) => {
      const E = {
        ...K,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      _.current && !cs(R.current, E) && (R.current = E, Fn.flushSync(() => {
        f(E);
      }));
    });
  }, [p, e, n, I, O]);
  Ko(() => {
    u === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((G) => ({
      ...G,
      isPositioned: !1
    })));
  }, [u]);
  const _ = l.useRef(!1);
  Ko(() => (_.current = !0, () => {
    _.current = !1;
  }), []), Ko(() => {
    if (C && (S.current = C), P && (T.current = P), C && P) {
      if (D.current)
        return D.current(C, P, $);
      $();
    }
  }, [C, P, $, D, M]);
  const W = l.useMemo(() => ({
    reference: S,
    floating: T,
    setReference: y,
    setFloating: w
  }), [y, w]), j = l.useMemo(() => ({
    reference: C,
    floating: P
  }), [C, P]), V = l.useMemo(() => {
    const G = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return G;
    const K = au(j.floating, m.x), E = au(j.floating, m.y);
    return i ? {
      ...G,
      transform: "translate(" + K + "px, " + E + "px)",
      ...vm(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: K,
      top: E
    };
  }, [n, i, j.floating, m.x, m.y]);
  return l.useMemo(() => ({
    ...m,
    update: $,
    refs: W,
    elements: j,
    floatingStyles: V
  }), [m, $, W, j, V]);
}
const nE = (t) => {
  function e(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: t,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof t == "function" ? t(n) : t;
      return r && e(r) ? r.current != null ? su({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? su({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, rE = (t, e) => {
  const n = GR(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, oE = (t, e) => {
  const n = UR(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, sE = (t, e) => ({
  fn: QR(t).fn,
  options: [t, e]
}), aE = (t, e) => {
  const n = KR(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, iE = (t, e) => {
  const n = qR(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, cE = (t, e) => {
  const n = XR(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
}, lE = (t, e) => {
  const n = nE(t);
  return {
    name: n.name,
    fn: n.fn,
    options: [t, e]
  };
};
var uE = Object.defineProperty, nn = (t, e) => uE(t, "name", { value: e, configurable: !0 }), bm = "Popper", [xm, mn] = /* @__PURE__ */ Me(bm), [dE, wm] = xm(bm), fE = /* @__PURE__ */ nn((t) => {
  const { __scopePopper: e, children: n } = t, [r, o] = l.useState(null), [s, a] = l.useState(void 0);
  return /* @__PURE__ */ d.jsx(
    dE,
    {
      scope: e,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: a,
      children: n
    }
  );
}, "Popper"), mE = "PopperAnchor", pE = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ nn(function(e, n) {
    const { __scopePopper: r, virtualRef: o, ...s } = e, a = wm(mE, r), i = l.useRef(null), c = a.onAnchorChange, u = l.useCallback(
      (h) => {
        i.current = h, h && c(h);
      },
      [c]
    ), m = te(n, u), f = l.useRef(null);
    l.useEffect(() => {
      if (!o)
        return;
      const h = f.current;
      f.current = o.current, h !== f.current && c(f.current);
    });
    const p = a.placementState && $s(a.placementState), v = p?.[0], b = p?.[1];
    return o ? null : /* @__PURE__ */ d.jsx(
      z.div,
      {
        "data-radix-popper-side": v,
        "data-radix-popper-align": b,
        ...s,
        ref: m
      }
    );
  }, "PopperAnchor")
), ym = "PopperContent", [hE, EO] = xm(ym), gE = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ nn(function(e, n) {
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: u = !0,
      collisionBoundary: m = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: h,
      ...g
    } = e, x = wm(ym, r), [y, w] = l.useState(null), C = te(n, w), [P, S] = l.useState(null), T = po(P), R = T?.width ?? 0, M = T?.height ?? 0, D = o + (a !== "center" ? "-" + a : ""), I = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(m) ? m : [m], $ = O.length > 0, _ = {
      padding: I,
      boundary: O.filter(Cm),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: W, floatingStyles: j, placement: V, isPositioned: G, middlewareData: K } = tE({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: /* @__PURE__ */ nn((...U) => YR(...U, {
        animationFrame: b === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: x.anchor
      },
      middleware: [
        rE({ mainAxis: s + M, alignmentAxis: i }),
        u && oE({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? sE() : void 0,
          ..._
        }),
        u && aE({ ..._ }),
        iE({
          ..._,
          apply: /* @__PURE__ */ nn(({ elements: U, rects: ae, availableWidth: ne, availableHeight: Y }) => {
            const { width: oe, height: le } = ae.reference, be = U.floating.style;
            be.setProperty("--radix-popper-available-width", `${ne}px`), be.setProperty("--radix-popper-available-height", `${Y}px`), be.setProperty("--radix-popper-anchor-width", `${oe}px`), be.setProperty("--radix-popper-anchor-height", `${le}px`);
          }, "apply")
        }),
        P && lE({ element: P, padding: c }),
        vE({ arrowWidth: R, arrowHeight: M }),
        v && cE({
          strategy: "referenceHidden",
          ..._,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: $ ? _.boundary : void 0
        })
      ]
    }), E = x.setPlacementState;
    we(() => (E(V), () => {
      E(void 0);
    }), [V, E]);
    const [H, N] = $s(V), B = ge(h);
    we(() => {
      G && B?.();
    }, [G, B]);
    const q = K.arrow?.x, L = K.arrow?.y, Q = K.arrow?.centerOffset !== 0, [ee, F] = l.useState();
    return we(() => {
      y && F(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...j,
          transform: G ? j.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ee,
          "--radix-popper-transform-origin": [
            K.transformOrigin?.x,
            K.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...K.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          hE,
          {
            scope: r,
            placedSide: H,
            placedAlign: N,
            onArrowChange: S,
            arrowX: q,
            arrowY: L,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ d.jsx(
              z.div,
              {
                "data-side": H,
                "data-align": N,
                ...g,
                ref: C,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: G ? g.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Cm(t) {
  return t !== null;
}
nn(Cm, "isNotNull");
var vE = /* @__PURE__ */ nn((t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    const { placement: n, rects: r, middlewareData: o } = e, a = o.arrow?.centerOffset !== 0, i = a ? 0 : t.arrowWidth, c = a ? 0 : t.arrowHeight, [u, m] = $s(n), f = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + i / 2, v = (o.arrow?.y ?? 0) + c / 2;
    let b = "", h = "";
    return u === "bottom" ? (b = a ? f : `${p}px`, h = `${-c}px`) : u === "top" ? (b = a ? f : `${p}px`, h = `${r.floating.height + c}px`) : u === "right" ? (b = `${-c}px`, h = a ? f : `${v}px`) : u === "left" && (b = `${r.floating.width + c}px`, h = a ? f : `${v}px`), { data: { x: b, y: h } };
  }
}), "transformOrigin");
function $s(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
nn($s, "getSideAndAlignFromPlacement");
var bo = fE, Ws = pE, Bs = gE, bE = Object.defineProperty, pn = (t, e) => bE(t, "name", { value: e, configurable: !0 }), fc = "Popover", [Sm, MO] = /* @__PURE__ */ Me(fc, [
  mn
]), mc = mn(), [xE, Cr] = Sm(fc), wE = /* @__PURE__ */ pn((t) => {
  const {
    __scopePopover: e,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = t, i = mc(e), c = l.useRef(null), [u, m] = l.useState(!1), [f, p] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: fc
  });
  return /* @__PURE__ */ d.jsx(bo, { ...i, children: /* @__PURE__ */ d.jsx(
    xE,
    {
      scope: e,
      contentId: Re(),
      triggerRef: c,
      open: f,
      onOpenChange: p,
      onOpenToggle: l.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: l.useCallback(() => m(!0), []),
      onCustomAnchorRemove: l.useCallback(() => m(!1), []),
      modal: a,
      children: n
    }
  ) });
}, "Popover"), yE = "PopoverTrigger", CE = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pn(function(e, n) {
    const { __scopePopover: r, ...o } = e, s = Cr(yE, r), a = mc(r), i = te(n, s.triggerRef), c = /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": pc(s.open),
        ...o,
        ref: i,
        onClick: A(e.onClick, s.onOpenToggle)
      }
    );
    return s.hasCustomAnchor ? c : /* @__PURE__ */ d.jsx(Ws, { asChild: !0, ...a, children: c });
  }, "PopoverTrigger")
), Pm = "PopoverPortal", [SE, PE] = Sm(Pm, {
  forceMount: void 0
}), TE = /* @__PURE__ */ pn((t) => {
  const { __scopePopover: e, forceMount: n, children: r, container: o } = t, s = Cr(Pm, e);
  return /* @__PURE__ */ d.jsx(SE, { scope: e, forceMount: n, children: /* @__PURE__ */ d.jsx(Ee, { present: n || s.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
}, "PopoverPortal"), Xr = "PopoverContent", RE = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(e, n) {
    const r = PE(Xr, e.__scopePopover), { forceMount: o = r.forceMount, ...s } = e, a = Cr(Xr, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(Ee, { present: o || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(ME, { ...s, ref: n }) : /* @__PURE__ */ d.jsx(kE, { ...s, ref: n }) });
  }, "PopoverContent")
), EE = /* @__PURE__ */ mt("PopoverContent.RemoveScroll"), ME = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(e, n) {
    const r = Cr(Xr, e.__scopePopover), o = l.useRef(null), s = te(n, o), a = l.useRef(!1);
    return l.useEffect(() => {
      const i = o.current;
      if (i) return ws(i);
    }, []), /* @__PURE__ */ d.jsx(ao, { as: EE, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      Tm,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: A(
          e.onPointerDownOutside,
          (i) => {
            const c = i.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, m = c.button === 2 || u;
            a.current = m;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: A(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "PopoverContentModal")
), kE = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(e, n) {
    const r = Cr(Xr, e.__scopePopover), o = l.useRef(!1), s = l.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Tm,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (o.current || r.triggerRef.current?.focus(), a.preventDefault()), o.current = !1, s.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const i = a.target;
          r.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && s.current && a.preventDefault();
        }
      }
    );
  }, "PopoverContentNonModal")
), Tm = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(e, n) {
    const {
      __scopePopover: r,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: m,
      onInteractOutside: f,
      ...p
    } = e, v = Cr(Xr, r), b = mc(r);
    return hr(), /* @__PURE__ */ d.jsx(
      bs,
      {
        asChild: !0,
        loop: !0,
        trapped: o,
        onMountAutoFocus: s,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          $n,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: m,
            onDismiss: () => v.onOpenChange(!1),
            deferPointerDownOutside: !0,
            children: /* @__PURE__ */ d.jsx(
              Bs,
              {
                "data-state": pc(v.open),
                role: "dialog",
                id: v.contentId,
                ...b,
                ...p,
                ref: n,
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
  }, "PopoverContentImpl")
);
function pc(t) {
  return t ? "open" : "closed";
}
pn(pc, "getState");
var DE = wE, NE = CE, _E = TE, Rm = RE;
const xo = DE, wo = NE, Sr = l.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(_E, { children: /* @__PURE__ */ d.jsx(
  Rm,
  {
    ref: o,
    align: e,
    sideOffset: n,
    className: k(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
Sr.displayName = Rm.displayName;
function IE(t) {
  const e = t.replace(/\D/g, "");
  let n = "";
  for (let r = 0; r < e.length && r < 8; r++)
    (r === 2 || r === 4) && (n += "/"), n += e[r];
  return n;
}
function OE(t) {
  const e = t.replace(/\D/g, "");
  let n = "";
  for (let r = 0; r < e.length && r < 16; r++)
    (r === 2 || r === 4) && (n += "/"), r === 8 && (n += " - "), (r === 10 || r === 12) && (n += "/"), n += e[r];
  return n;
}
function ls(t) {
  if (t.length < 10) return null;
  const e = yf(
    t.slice(0, 10),
    "dd/MM/yyyy",
    new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Bi(e) ? e : null;
}
function iu(t) {
  const e = t.split(" - "), n = ls(e[0] ?? "");
  if (!n) return null;
  const r = e[1] ? ls(e[1]) : void 0;
  return { from: n, to: r ?? void 0 };
}
function Wo(t) {
  return Rn(t, "dd/MM/yyyy");
}
function Bo(t, e) {
  if (!t) return "";
  if (e === "range") {
    const n = t;
    return n.from ? n.to ? `${Wo(n.from)} - ${Wo(n.to)}` : Wo(n.from) : "";
  }
  return Wo(t);
}
function cu(t) {
  if (t)
    return t instanceof Date ? t : t.from;
}
function AE({
  value: t,
  onChange: e,
  disabled: n,
  disabledDates: r,
  mode: o = "single",
  ...s
}) {
  const [a, i] = l.useState(t), [c, u] = l.useState(
    cu(t)
  ), [m, f] = l.useState(
    Bo(t, o)
  ), [p, v] = l.useState(!1), b = l.useRef(null), h = l.useRef(
    Bo(t, o)
  ), g = l.useRef(!1);
  l.useEffect(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const P = Bo(t, o);
    i(t), f(P), h.current = P;
    const S = cu(t);
    S && u(S);
  }, [t]);
  function x(P) {
    g.current = !0;
    const S = Bo(P, o);
    i(P), f(S), h.current = S, e?.(P), o !== "range" && v(!1);
  }
  function y(P) {
    const S = P.target.value;
    if (S.replace(/\D/g, "") === "") {
      f(""), h.current = "", g.current = !0, i(void 0), u(void 0), e?.(void 0);
      return;
    }
    const T = P.target.selectionStart ?? S.length, R = S.slice(0, T).replace(/\D/g, "").length, M = o === "range" ? OE(S) : IE(S);
    if (f(M), requestAnimationFrame(() => {
      if (b.current) {
        let D = 0, I = M.length;
        for (let O = 0; O < M.length; O++)
          if (/\d/.test(M[O]) && D++, D === R) {
            I = O + 1;
            break;
          }
        b.current.setSelectionRange(I, I);
      }
    }), o === "range") {
      const D = iu(M);
      D && (g.current = !0, i(D), h.current = M, D.from && u(D.from), e?.(D));
    } else {
      const D = ls(M);
      D && (g.current = !0, i(D), u(D), h.current = M, e?.(D));
    }
  }
  function w() {
    !(o === "range" ? iu(m) !== null : ls(m) !== null) && m !== "" && f(h.current);
  }
  const C = o === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ d.jsxs(xo, { open: p, onOpenChange: v, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: k(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          n && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              ref: b,
              value: m,
              onChange: y,
              onBlur: w,
              placeholder: C,
              disabled: n,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ d.jsx(wo, { asChild: !0, disabled: n, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              disabled: n,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ d.jsx(Mg, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx(Sr, { className: "w-auto p-0", children: /* @__PURE__ */ d.jsx(
      Vf,
      {
        mode: o,
        selected: a,
        onSelect: x,
        disabled: r,
        month: c,
        onMonthChange: u,
        timeZone: "America/Sao_Paulo",
        ...s
      }
    ) })
  ] });
}
const kO = ({
  name: t,
  label: e,
  ...n
}) => {
  const r = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: r.control,
      name: t,
      render: ({ field: o }) => /* @__PURE__ */ d.jsxs(vn, { className: "flex-1", children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(Pr, { children: /* @__PURE__ */ d.jsx(
          AE,
          {
            value: o.value,
            onChange: o.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
};
function jE(t) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(t);
}
function FE(t) {
  return /^(0[1-9]|1[0-2])$/.test(t);
}
function LE(t) {
  return /^[0-5][0-9]$/.test(t);
}
function Vs(t, { max: e, min: n = 0, loop: r = !1 }) {
  let o = parseInt(t, 10);
  return Number.isNaN(o) ? "00" : (r ? (o > e && (o = n), o < n && (o = e)) : (o > e && (o = e), o < n && (o = n)), o.toString().padStart(2, "0"));
}
function Em(t) {
  return jE(t) ? t : Vs(t, { max: 23 });
}
function Mm(t) {
  return FE(t) ? t : Vs(t, { min: 1, max: 12 });
}
function us(t) {
  return LE(t) ? t : Vs(t, { max: 59 });
}
function hc(t, { min: e, max: n, step: r }) {
  let o = parseInt(t, 10);
  return Number.isNaN(o) ? "00" : (o += r, Vs(String(o), { min: e, max: n, loop: !0 }));
}
function $E(t, e) {
  return hc(t, { min: 0, max: 23, step: e });
}
function WE(t, e) {
  return hc(t, { min: 1, max: 12, step: e });
}
function lu(t, e) {
  return hc(t, { min: 0, max: 59, step: e });
}
function BE(t, e) {
  const n = us(e);
  return t.setMinutes(parseInt(n, 10)), t;
}
function VE(t, e) {
  const n = us(e);
  return t.setSeconds(parseInt(n, 10)), t;
}
function HE(t, e) {
  const n = Em(e);
  return t.setHours(parseInt(n, 10)), t;
}
function zE(t, e, n) {
  const r = parseInt(Mm(e), 10), o = UE(r, n);
  return t.setHours(o), t;
}
function ii(t, e, n, r) {
  switch (n) {
    case "minutes":
      return BE(t, e);
    case "seconds":
      return VE(t, e);
    case "hours":
      return HE(t, e);
    case "12hours":
      return r ? zE(t, e, r) : t;
    default:
      return t;
  }
}
function YE(t, e) {
  if (!t) return "00";
  switch (e) {
    case "minutes":
      return us(String(t.getMinutes()));
    case "seconds":
      return us(String(t.getSeconds()));
    case "hours":
      return Em(String(t.getHours()));
    case "12hours":
      return Mm(String(km(t.getHours())));
    default:
      return "00";
  }
}
function GE(t, e, n) {
  switch (n) {
    case "minutes":
      return lu(t, e);
    case "seconds":
      return lu(t, e);
    case "hours":
      return $E(t, e);
    case "12hours":
      return WE(t, e);
    default:
      return "00";
  }
}
function UE(t, e) {
  return e === "PM" ? t <= 11 ? t + 12 : t : e === "AM" && t === 12 ? 0 : t;
}
function km(t) {
  return t === 0 || t === 12 ? "12" : t >= 22 ? `${t - 12}` : t % 12 > 9 ? `${t}` : `0${t % 12}`;
}
function Dm(t) {
  switch (t) {
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
function KE(t) {
  switch (t) {
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
function qE(t, e) {
  const n = t.replace(/\D/g, ""), r = KE(e);
  let o = "";
  for (let s = 0; s < n.length && s < r; s++)
    (s === 2 || s === 4) && (o += "/"), s === 8 && (o += " "), (s === 10 || s === 12) && (o += ":"), o += n[s];
  return o;
}
function uu(t, e) {
  const n = Dm(e);
  if (t.length < n.length) return null;
  const r = yf(t.slice(0, n.length), n, new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Bi(r) ? r : null;
}
function jr(t, e) {
  return Rn(t, Dm(e));
}
const Nm = l.forwardRef(
  ({ period: t, setPeriod: e, date: n, onDateChange: r, onLeftFocus: o, onRightFocus: s }, a) => {
    const i = (u) => {
      u.key === "ArrowRight" && s?.(), u.key === "ArrowLeft" && o?.();
    }, c = (u) => {
      if (e?.(u), n) {
        const m = new Pe(n, "America/Sao_Paulo"), f = km(n.getHours());
        r?.(
          ii(
            m,
            f.toString(),
            "12hours",
            t === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ d.jsx("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ d.jsxs(
      bh,
      {
        defaultValue: t,
        onValueChange: (u) => c(u),
        children: [
          /* @__PURE__ */ d.jsx(
            Bc,
            {
              ref: a,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: i,
              children: /* @__PURE__ */ d.jsx(xh, {})
            }
          ),
          /* @__PURE__ */ d.jsxs(Vc, { children: [
            /* @__PURE__ */ d.jsx(ps, { value: "AM", children: "AM" }),
            /* @__PURE__ */ d.jsx(ps, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Nm.displayName = "TimePeriodSelect";
const qo = l.forwardRef(
  ({
    className: t,
    type: e = "tel",
    value: n,
    id: r,
    name: o,
    date: s = (() => {
      const h = new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return h.setHours(0, 0, 0, 0), h;
    })(),
    onDateChange: a,
    onChange: i,
    onKeyDown: c,
    picker: u,
    period: m,
    onLeftFocus: f,
    onRightFocus: p,
    ...v
  }, b) => {
    const [h, g] = l.useState(!1), [x, y] = l.useState("0");
    l.useEffect(() => {
      if (h) {
        const S = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(S);
      }
    }, [h]);
    const w = l.useMemo(() => YE(s, u), [s, u]), C = (S) => u === "12hours" && h && w.slice(1, 2) === "1" && x === "0" ? `0${S}` : h ? w.slice(1, 2) + S : `0${S}`, P = (S) => {
      if (S.key !== "Tab") {
        if (S.preventDefault(), S.key === "ArrowRight" && p?.(), S.key === "ArrowLeft" && f?.(), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const T = S.key === "ArrowUp" ? 1 : -1, R = GE(w, T, u);
          h && g(!1);
          const M = s ? new Pe(s, "America/Sao_Paulo") : new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          a?.(ii(M, R, u, m));
        }
        if (S.key >= "0" && S.key <= "9") {
          u === "12hours" && y(S.key);
          const T = C(S.key);
          h && p?.(), g((M) => !M);
          const R = s ? new Pe(s, "America/Sao_Paulo") : new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          a?.(ii(R, T, u, m));
        }
      }
    };
    return /* @__PURE__ */ d.jsx(
      Sc,
      {
        ref: b,
        id: r || u,
        name: o || u,
        className: k(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          t
        ),
        value: n || w,
        onChange: (S) => {
          S.preventDefault(), i?.(S);
        },
        type: e,
        inputMode: "decimal",
        onKeyDown: (S) => {
          c?.(S), P(S);
        },
        ...v
      }
    );
  }
);
qo.displayName = "TimePickerInput";
const _m = l.forwardRef(
  ({ date: t, onChange: e, hourCycle: n = 24, granularity: r = "second" }, o) => {
    const s = l.useRef(null), a = l.useRef(null), i = l.useRef(null), c = l.useRef(null), [u, m] = l.useState(
      t && t.getHours() >= 12 ? "PM" : "AM"
    );
    return Eu(
      o,
      () => ({
        minuteRef: s.current,
        hourRef: a.current,
        secondRef: i.current,
        periodRef: c.current
      }),
      [s, a, i]
    ), /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ d.jsx("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ d.jsx(kg, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ d.jsx(
        qo,
        {
          picker: n === 24 ? "hours" : "12hours",
          date: t,
          id: "datetime-picker-hour-input",
          onDateChange: e,
          ref: a,
          period: u,
          onRightFocus: () => s?.current?.focus()
        }
      ),
      (r === "minute" || r === "second") && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        ":",
        /* @__PURE__ */ d.jsx(
          qo,
          {
            picker: "minutes",
            date: t,
            onDateChange: e,
            ref: s,
            onLeftFocus: () => a?.current?.focus(),
            onRightFocus: () => i?.current?.focus()
          }
        )
      ] }),
      r === "second" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        ":",
        /* @__PURE__ */ d.jsx(
          qo,
          {
            picker: "seconds",
            date: t,
            onDateChange: e,
            ref: i,
            onLeftFocus: () => s?.current?.focus(),
            onRightFocus: () => c?.current?.focus()
          }
        )
      ] }),
      n === 12 && /* @__PURE__ */ d.jsx("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ d.jsx(
        Nm,
        {
          period: u,
          setPeriod: m,
          date: t,
          onDateChange: (f) => {
            e?.(f), f && f?.getHours() >= 12 ? m("PM") : m("AM");
          },
          ref: c,
          onLeftFocus: () => i?.current?.focus()
        }
      ) })
    ] });
  }
);
_m.displayName = "TimePicker";
const Im = l.forwardRef(
  ({
    locale: t = Sf,
    defaultPopupValue: e = (() => {
      const b = new Pe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return b.setHours(0, 0, 0, 0), b;
    })(),
    value: n,
    onChange: r,
    hourCycle: o = 24,
    yearRange: s = 50,
    disabled: a = !1,
    displayFormat: i,
    granularity: c = "minute",
    placeholder: u = "dd/mm/aaaa - hh:mm",
    className: m,
    disabledDates: f,
    ...p
  }, v) => {
    const [b, h] = l.useState(n ?? e), g = Tt(null), x = Tt(null), [y, w] = l.useState(n), [C, P] = l.useState(!1), [S, T] = l.useState(
      n ? jr(n, c) : ""
    ), R = Tt(!1), M = Tt(
      n ? jr(n, c) : ""
    ), D = (_) => {
      if (!_)
        return;
      if (!e) {
        _.setHours(
          b?.getHours() ?? 0,
          b?.getMinutes() ?? 0,
          b?.getSeconds() ?? 0
        ), r?.(_), h(_);
        return;
      }
      const j = (_.getTime() - e.getTime()) / (1e3 * 60 * 60 * 24), V = oy(e, {
        days: Math.ceil(j)
      });
      V.setHours(
        b?.getHours() ?? 0,
        b?.getMinutes() ?? 0,
        b?.getSeconds() ?? 0
      ), r?.(V), h(V);
    };
    Wt(() => {
      if (R.current) {
        R.current = !1;
        return;
      }
      const _ = n ? jr(n, c) : "";
      n ? (w(n), h(n)) : w(void 0), T(_), M.current = _;
    }, [n, c]);
    const I = (_) => {
      if (!_)
        return;
      R.current = !0;
      const W = jr(_, c);
      r?.(_), h(_), w(_), T(W), M.current = W;
    };
    Eu(
      v,
      () => ({
        ...g.current,
        value: y
      }),
      [y]
    );
    function O(_) {
      const W = _.target.value;
      if (W.replace(/\D/g, "") === "") {
        T(""), M.current = "", R.current = !0, w(void 0), r?.(void 0);
        return;
      }
      const j = _.target.selectionStart ?? W.length, V = W.slice(0, j).replace(/\D/g, "").length, G = qE(W, c);
      T(G), requestAnimationFrame(() => {
        if (x.current) {
          let E = 0, H = G.length;
          for (let N = 0; N < G.length; N++)
            if (/\d/.test(G[N]) && E++, E === V) {
              H = N + 1;
              break;
            }
          x.current.setSelectionRange(H, H);
        }
      });
      const K = uu(G, c);
      K && (R.current = !0, M.current = G, r?.(K), w(K), h(K));
    }
    function $() {
      !(uu(S, c) !== null) && S !== "" && T(M.current);
    }
    return /* @__PURE__ */ d.jsxs(xo, { open: C, onOpenChange: P, children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: k(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            a && "cursor-not-allowed opacity-50",
            m
          ),
          children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                ref: x,
                value: S,
                onChange: O,
                onBlur: $,
                placeholder: u,
                disabled: a,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ d.jsx(wo, { asChild: !0, disabled: a, children: /* @__PURE__ */ d.jsx(
              "button",
              {
                ref: g,
                type: "button",
                disabled: a,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ d.jsx(Dg, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs(Sr, { className: "w-auto p-0", children: [
        /* @__PURE__ */ d.jsx(
          Vf,
          {
            selected: y,
            onSelect: (_) => {
              _ && (_.setHours(
                b?.getHours() ?? 0,
                b?.getMinutes() ?? 0,
                b?.getSeconds() ?? 0
              ), I(_));
            },
            onMonthChange: D,
            month: y ?? b,
            locale: t,
            disabled: f,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...p,
            mode: "single"
          }
        ),
        c !== "day" && /* @__PURE__ */ d.jsx("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ d.jsx(
          _m,
          {
            onChange: (_) => {
              if (R.current = !0, r?.(_), w(_), _) {
                h(_);
                const W = jr(_, c);
                T(W), M.current = W;
              }
            },
            date: b,
            hourCycle: o,
            granularity: c
          }
        ) })
      ] })
    ] });
  }
);
Im.displayName = "DateTimePicker";
const DO = ({
  name: t,
  label: e,
  ...n
}) => {
  const r = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: r.control,
      name: t,
      render: ({ field: o }) => /* @__PURE__ */ d.jsxs(vn, { className: "flex-1", children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(Pr, { children: /* @__PURE__ */ d.jsx(
          Im,
          {
            value: o.value,
            onChange: o.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
}, XE = ys, NO = Li, QE = Cs, _O = br, Om = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  gr,
  {
    ref: n,
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
Om.displayName = gr.displayName;
const Am = l.forwardRef(({ className: t, onClose: e, ...n }, r) => /* @__PURE__ */ d.jsxs(QE, { children: [
  /* @__PURE__ */ d.jsx(Om, { onClick: (o) => o.stopPropagation() }),
  /* @__PURE__ */ d.jsxs(
    vr,
    {
      ref: r,
      className: k(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        t
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(
          br,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ d.jsxs("button", { onClick: e, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ d.jsx(yi, { className: "h-4 w-4" }),
              /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Am.displayName = vr.displayName;
const ZE = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      t
    ),
    ...e
  }
);
ZE.displayName = "DialogHeader";
const JE = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
JE.displayName = "DialogFooter";
const eM = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  io,
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      t
    ),
    ...e
  }
));
eM.displayName = io.displayName;
const tM = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  co,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", t),
    ...e
  }
));
tM.displayName = co.displayName;
var nM = Object.defineProperty, gc = (t, e) => nM(t, "name", { value: e, configurable: !0 }), Ia = !1;
function jm() {
  const [t, e] = l.useState(Ia);
  return l.useEffect(() => {
    Ia || (Ia = !0, e(!0));
  }, []), t;
}
gc(jm, "useIsHydrated");
var Fm = l[" useSyncExternalStore ".trim().toString()];
function Lm() {
  return () => {
  };
}
gc(Lm, "subscribe");
function $m() {
  return Fm(
    Lm,
    () => !0,
    () => !1
  );
}
gc($m, "useIsHydratedModern");
var rM = typeof Fm == "function" ? $m : jm, oM = Object.defineProperty, Vn = (t, e) => oM(t, "name", { value: e, configurable: !0 }), Oa = "rovingFocusGroup.onEntryFocus", sM = { bubbles: !1, cancelable: !0 }, Hs = "RovingFocusGroup", [ci, Wm, aM] = /* @__PURE__ */ un(Hs), [iM, hn] = /* @__PURE__ */ Me(
  Hs,
  [aM]
), [cM, lM] = iM(Hs), uM = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Vn(function(e, n) {
    return /* @__PURE__ */ d.jsx(ci.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(ci.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(dM, { ...e, ref: n }) }) });
  }, "RovingFocusGroup")
), dM = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Vn(function(e, n) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: o,
    loop: s = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: u,
    onEntryFocus: m,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, v = l.useRef(null), b = te(n, v), h = Dt(a), [g, x] = Ae({
    prop: i,
    defaultProp: c ?? null,
    onChange: u,
    caller: Hs
  }), [y, w] = l.useState(!1), C = ge(m), P = Wm(r), S = l.useRef(!1), [T, R] = l.useState(0);
  return l.useEffect(() => {
    const M = v.current;
    if (M)
      return M.addEventListener(Oa, C), () => M.removeEventListener(Oa, C);
  }, [C]), /* @__PURE__ */ d.jsx(
    cM,
    {
      scope: r,
      orientation: o,
      dir: h,
      loop: s,
      currentTabStopId: g,
      onItemFocus: l.useCallback(
        (M) => x(M),
        [x]
      ),
      onItemShiftTab: l.useCallback(() => w(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => R((M) => M + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => R((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        z.div,
        {
          tabIndex: y || T === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: A(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: A(e.onFocus, (M) => {
            const D = !S.current;
            if (M.target === M.currentTarget && D && !y) {
              const I = new CustomEvent(Oa, sM);
              if (M.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const O = P().filter((V) => V.focusable), $ = O.find((V) => V.active), _ = O.find((V) => V.id === g), j = [$, _, ...O].filter(
                  Boolean
                ).map((V) => V.ref.current);
                vc(j, f);
              }
            }
            S.current = !1;
          }),
          onBlur: A(e.onBlur, () => w(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), fM = "RovingFocusGroupItem", mM = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Vn(function(e, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: s = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, u = Re(), m = a || u, f = lM(fM, r), p = f.currentTabStopId === m, v = Wm(r), { onFocusableItemAdd: b, onFocusableItemRemove: h, currentTabStopId: g } = f, x = rM();
    return we(() => {
      if (!(!x || !o))
        return b(), () => h();
    }, [x, o, b, h]), l.useEffect(() => {
      if (!(x || !o))
        return b(), () => h();
    }, [x, o, b, h]), /* @__PURE__ */ d.jsx(
      ci.ItemSlot,
      {
        scope: r,
        id: m,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ d.jsx(
          z.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: n,
            onMouseDown: A(e.onMouseDown, (y) => {
              o ? f.onItemFocus(m) : y.preventDefault();
            }),
            onFocus: A(e.onFocus, () => f.onItemFocus(m)),
            onKeyDown: A(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = Vm(y, f.orientation, f.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let P = v().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") P.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && P.reverse();
                  const S = P.indexOf(y.currentTarget);
                  P = f.loop ? Hm(P, S + 1) : P.slice(S + 1);
                }
                setTimeout(() => vc(P));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: g != null }) : i
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), pM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Bm(t, e) {
  return e !== "rtl" ? t : t === "ArrowLeft" ? "ArrowRight" : t === "ArrowRight" ? "ArrowLeft" : t;
}
Vn(Bm, "getDirectionAwareKey");
function Vm(t, e, n) {
  const r = Bm(t.key, n);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return pM[r];
}
Vn(Vm, "getFocusIntent");
function vc(t, e = !1) {
  const n = document.activeElement;
  for (const r of t)
    if (r === n || (r.focus({ preventScroll: e }), document.activeElement !== n)) return;
}
Vn(vc, "focusFirst");
function Hm(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
Vn(Hm, "wrapArray");
var zs = uM, Ys = mM, hM = Object.defineProperty, pe = (t, e) => hM(t, "name", { value: e, configurable: !0 }), li = ["Enter", " "], gM = ["ArrowDown", "PageUp", "Home"], zm = ["ArrowUp", "PageDown", "End"], vM = [...gM, ...zm], bM = {
  ltr: [...li, "ArrowRight"],
  rtl: [...li, "ArrowLeft"]
}, xM = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Gs = "Menu", [Qr, wM, yM] = /* @__PURE__ */ un(Gs), [Hn, Ym] = /* @__PURE__ */ Me(Gs, [
  yM,
  mn,
  hn
]), Us = mn(), Gm = hn(), [Um, gn] = Hn(Gs), [CM, yo] = Hn(Gs), SM = /* @__PURE__ */ pe((t) => {
  const { __scopeMenu: e, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = t, i = Us(e), [c, u] = l.useState(null), m = l.useRef(!1), f = ge(s), p = Dt(o);
  return l.useEffect(() => {
    const v = /* @__PURE__ */ pe(() => {
      m.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, "handleKeyDown"), b = /* @__PURE__ */ pe(() => m.current = !1, "handlePointer");
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), l.useEffect(() => {
    if (!n)
      return;
    const v = /* @__PURE__ */ pe(() => f(!1), "handleBlur");
    return window.addEventListener("blur", v), () => window.removeEventListener("blur", v);
  }, [n, f]), /* @__PURE__ */ d.jsx(bo, { ...i, children: /* @__PURE__ */ d.jsx(
    Um,
    {
      scope: e,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ d.jsx(
        CM,
        {
          scope: e,
          onClose: l.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: m,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
}, "Menu"), Km = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, ...o } = e, s = Us(r);
    return /* @__PURE__ */ d.jsx(Ws, { ...s, ...o, ref: n });
  }, "MenuAnchor")
), qm = "MenuPortal", [PM, Xm] = Hn(qm, {
  forceMount: void 0
}), TM = /* @__PURE__ */ pe((t) => {
  const { __scopeMenu: e, forceMount: n, children: r, container: o } = t, s = gn(qm, e);
  return /* @__PURE__ */ d.jsx(PM, { scope: e, forceMount: n, children: /* @__PURE__ */ d.jsx(Ee, { present: n || s.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), ft = "MenuContent", [RM, bc] = Hn(ft), EM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const r = Xm(ft, e.__scopeMenu), { forceMount: o = r.forceMount, ...s } = e, a = gn(ft, e.__scopeMenu), i = yo(ft, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(Qr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(Ee, { present: o || a.open, children: /* @__PURE__ */ d.jsx(Qr.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx(MM, { ...s, ref: n }) : /* @__PURE__ */ d.jsx(kM, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), MM = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(e, n) {
    const r = gn(ft, e.__scopeMenu), o = l.useRef(null), s = te(n, o);
    return l.useEffect(() => {
      const a = o.current;
      if (a) return ws(a);
    }, []), /* @__PURE__ */ d.jsx(
      xc,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), kM = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ pe(function(e, n) {
  const r = gn(ft, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    xc,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), DM = /* @__PURE__ */ mt("MenuContent.ScrollLock"), xc = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(e, n) {
    const {
      __scopeMenu: r,
      loop: o = !1,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: u,
      onEscapeKeyDown: m,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: v,
      onDismiss: b,
      disableOutsideScroll: h,
      ...g
    } = e, x = gn(ft, r), y = yo(ft, r), w = Us(r), C = Gm(r), P = wM(r), [S, T] = l.useState(null), R = l.useRef(null), M = te(n, R, x.onContentChange), D = l.useRef(0), I = l.useRef(""), O = l.useRef(0), $ = l.useRef(null), _ = l.useRef("right"), W = l.useRef(0), j = h ? ao : l.Fragment, V = h ? { as: DM, allowPinchZoom: !0 } : void 0, G = /* @__PURE__ */ pe((E) => {
      const H = I.current + E, N = P().filter((F) => !F.disabled), B = document.activeElement, q = N.find((F) => F.ref.current === B)?.textValue, L = N.map((F) => F.textValue), Q = sp(L, H, q), ee = N.find((F) => F.textValue === Q)?.ref.current;
      (/* @__PURE__ */ pe((function F(U) {
        I.current = U, window.clearTimeout(D.current), U !== "" && (D.current = window.setTimeout(() => F(""), 1e3));
      }), "updateSearch"))(H), ee && setTimeout(() => ee.focus());
    }, "handleTypeaheadSearch");
    l.useEffect(() => () => window.clearTimeout(D.current), []), hr();
    const K = l.useCallback((E) => _.current === $.current?.side && ip(E, $.current?.area), []);
    return /* @__PURE__ */ d.jsx(
      RM,
      {
        scope: r,
        searchRef: I,
        onItemEnter: l.useCallback(
          (E) => {
            K(E) && E.preventDefault();
          },
          [K]
        ),
        onItemLeave: l.useCallback(
          (E) => {
            K(E) || (R.current?.focus(), T(null));
          },
          [K]
        ),
        onTriggerLeave: l.useCallback(
          (E) => {
            K(E) && E.preventDefault();
          },
          [K]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: l.useCallback((E) => {
          $.current = E;
        }, []),
        children: /* @__PURE__ */ d.jsx(j, { ...V, children: /* @__PURE__ */ d.jsx(
          bs,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: A(a, (E) => {
              E.preventDefault(), R.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              $n,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: m,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: v,
                onDismiss: b,
                children: /* @__PURE__ */ d.jsx(
                  zs,
                  {
                    asChild: !0,
                    ...C,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: T,
                    onEntryFocus: A(u, (E) => {
                      y.isUsingKeyboardRef.current || E.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      Bs,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": yc(x.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...g,
                        ref: M,
                        style: { outline: "none", ...g.style },
                        onKeyDown: A(g.onKeyDown, (E) => {
                          const N = E.target.closest("[data-radix-menu-content]") === E.currentTarget, B = E.ctrlKey || E.altKey || E.metaKey, q = E.key.length === 1;
                          N && (E.key === "Tab" && E.preventDefault(), !B && q && G(E.key));
                          const L = R.current;
                          if (E.target !== L || !vM.includes(E.key)) return;
                          E.preventDefault();
                          const ee = P().filter((F) => !F.disabled).map((F) => F.ref.current);
                          zm.includes(E.key) && ee.reverse(), rp(ee);
                        }),
                        onBlur: A(e.onBlur, (E) => {
                          E.currentTarget.contains(E.target) || (window.clearTimeout(D.current), I.current = "");
                        }),
                        onPointerMove: A(
                          e.onPointerMove,
                          dr((E) => {
                            const H = E.target, N = W.current !== E.clientX;
                            if (E.currentTarget.contains(H) && N) {
                              const B = E.clientX > W.current ? "right" : "left";
                              _.current = B, W.current = E.clientX;
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
  }, "MenuContentImpl")
), Qm = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(z.div, { role: "group", ...o, ref: n });
  }, "MenuGroup")
), NM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(z.div, { ...o, ref: n });
  }, "MenuLabel")
), ui = "MenuItem", du = "menu.itemSelect", wc = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(e, n) {
    const { disabled: r = !1, onSelect: o, ...s } = e, a = l.useRef(null), i = yo(ui, e.__scopeMenu), c = bc(ui, e.__scopeMenu), u = te(n, a), m = l.useRef(!1), f = /* @__PURE__ */ pe(() => {
      const p = a.current;
      if (!r && p) {
        const v = new CustomEvent(du, { bubbles: !0, cancelable: !0 });
        p.addEventListener(du, (b) => o?.(b), { once: !0 }), ur(p, v), v.defaultPrevented ? m.current = !1 : i.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ d.jsx(
      Zm,
      {
        ...s,
        ref: u,
        disabled: r,
        onClick: A(e.onClick, f),
        onPointerDown: (p) => {
          e.onPointerDown?.(p), m.current = !0;
        },
        onPointerUp: A(e.onPointerUp, (p) => {
          m.current || p.currentTarget?.click();
        }),
        onKeyDown: A(e.onKeyDown, (p) => {
          r || p.target !== p.currentTarget || c.searchRef.current !== "" && p.key === " " || li.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), Zm = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: s, ...a } = e, i = bc(ui, r), c = Gm(r), u = l.useRef(null), m = te(n, u), [f, p] = l.useState(!1), [v, b] = l.useState("");
    return l.useEffect(() => {
      const h = u.current;
      h && b((h.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d.jsx(
      Qr.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: s ?? v,
        children: /* @__PURE__ */ d.jsx(Ys, { asChild: !0, ...c, focusable: !o, children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: m,
            onPointerMove: A(
              e.onPointerMove,
              dr((h) => {
                o ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: A(
              e.onPointerLeave,
              dr((h) => i.onItemLeave(h))
            ),
            onFocus: A(e.onFocus, () => p(!0)),
            onBlur: A(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), _M = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(e, n) {
    const { checked: r = !1, onCheckedChange: o, ...s } = e;
    return /* @__PURE__ */ d.jsx(ep, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ d.jsx(
      wc,
      {
        role: "menuitemcheckbox",
        "aria-checked": Zr(r) ? "mixed" : r,
        ...s,
        ref: n,
        "data-state": Ks(r),
        onSelect: A(
          s.onSelect,
          () => o?.(Zr(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), IM = "MenuRadioGroup", [OM, AM] = Hn(
  IM,
  { value: void 0, onValueChange: /* @__PURE__ */ pe(() => {
  }, "onValueChange") }
), jM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { value: r, onValueChange: o, ...s } = e, a = ge(o);
    return /* @__PURE__ */ d.jsx(OM, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ d.jsx(Qm, { ...s, ref: n }) });
  }, "MenuRadioGroup")
), FM = "MenuRadioItem", LM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { value: r, ...o } = e, s = AM(FM, e.__scopeMenu), a = r === s.value;
    return /* @__PURE__ */ d.jsx(ep, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d.jsx(
      wc,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...o,
        ref: n,
        "data-state": Ks(a),
        onSelect: A(
          o.onSelect,
          () => s.onValueChange?.(r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), Jm = "MenuItemIndicator", [ep, $M] = Hn(
  Jm,
  { checked: !1 }
), WM = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, forceMount: o, ...s } = e, a = $M(Jm, r);
    return /* @__PURE__ */ d.jsx(
      Ee,
      {
        present: o || Zr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          z.span,
          {
            ...s,
            ref: n,
            "data-state": Ks(a.checked)
          }
        )
      }
    );
  }, "MenuItemIndicator")
), BM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const { __scopeMenu: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(
      z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), tp = "MenuSub", [VM, np] = Hn(tp), HM = /* @__PURE__ */ pe((t) => {
  const { __scopeMenu: e, children: n, open: r = !1, onOpenChange: o } = t, s = gn(tp, e), a = Us(e), [i, c] = l.useState(null), [u, m] = l.useState(null), f = ge(o);
  return l.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ d.jsx(bo, { ...a, children: /* @__PURE__ */ d.jsx(
    Um,
    {
      scope: e,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: m,
      children: /* @__PURE__ */ d.jsx(
        VM,
        {
          scope: e,
          contentId: Re(),
          triggerId: Re(),
          trigger: i,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
}, "MenuSub"), Vo = "MenuSubTrigger", zM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const r = gn(Vo, e.__scopeMenu), o = yo(Vo, e.__scopeMenu), s = np(Vo, e.__scopeMenu), a = bc(Vo, e.__scopeMenu), i = l.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = a, m = { __scopeMenu: e.__scopeMenu }, f = l.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    l.useEffect(() => f, [f]), l.useEffect(() => {
      const v = c.current;
      return () => {
        window.clearTimeout(v), u(null);
      };
    }, [c, u]);
    const p = te(n, s.onTriggerChange);
    return /* @__PURE__ */ d.jsx(Km, { asChild: !0, ...m, children: /* @__PURE__ */ d.jsx(
      Zm,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": r.open ? s.contentId : void 0,
        "data-state": yc(r.open),
        ...e,
        ref: p,
        onClick: (v) => {
          e.onClick?.(v), !(e.disabled || v.defaultPrevented) && (v.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: A(
          e.onPointerMove,
          dr((v) => {
            a.onItemEnter(v), !v.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          dr((v) => {
            f();
            const b = r.content?.getBoundingClientRect();
            if (b) {
              const h = r.content?.dataset.side, g = h === "right", x = g ? -5 : 5, y = b[g ? "left" : "right"], w = b[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: v.clientX + x, y: v.clientY },
                  { x: y, y: b.top },
                  { x: w, y: b.top },
                  { x: w, y: b.bottom },
                  { x: y, y: b.bottom }
                ],
                side: h
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(v), v.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: A(e.onKeyDown, (v) => {
          e.disabled || v.target !== v.currentTarget || a.searchRef.current !== "" && v.key === " " || bM[o.dir].includes(v.key) && (r.onOpenChange(!0), r.content?.focus(), v.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), YM = "MenuSubContent", GM = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ pe(function(e, n) {
    const r = Xm(ft, e.__scopeMenu), { forceMount: o = r.forceMount, align: s = "start", ...a } = e, i = gn(ft, e.__scopeMenu), c = yo(ft, e.__scopeMenu), u = np(YM, e.__scopeMenu), m = l.useRef(null), f = te(n, m);
    return /* @__PURE__ */ d.jsx(Qr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(Ee, { present: o || i.open, children: /* @__PURE__ */ d.jsx(Qr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      xc,
      {
        id: u.contentId,
        "aria-labelledby": u.triggerId,
        ...a,
        ref: f,
        align: s,
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          c.isUsingKeyboardRef.current && m.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: A(e.onFocusOutside, (p) => {
          p.target !== u.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: A(e.onEscapeKeyDown, (p) => {
          c.onClose(), p.preventDefault();
        }),
        onKeyDown: A(e.onKeyDown, (p) => {
          const v = p.currentTarget.contains(p.target), b = xM[c.dir].includes(p.key);
          v && b && (i.onOpenChange(!1), u.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function yc(t) {
  return t ? "open" : "closed";
}
pe(yc, "getOpenState");
function Zr(t) {
  return t === "indeterminate";
}
pe(Zr, "isIndeterminate");
function Ks(t) {
  return Zr(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
pe(Ks, "getCheckedState");
function rp(t) {
  const e = document.activeElement;
  for (const n of t)
    if (n === e || (n.focus(), document.activeElement !== e)) return;
}
pe(rp, "focusFirst");
function op(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
pe(op, "wrapArray");
function sp(t, e, n) {
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, s = n ? t.indexOf(n) : -1;
  let a = op(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
pe(sp, "getNextMatch");
function ap(t, e) {
  const { x: n, y: r } = t;
  let o = !1;
  for (let s = 0, a = e.length - 1; s < e.length; a = s++) {
    const i = e[s], c = e[a], u = i.x, m = i.y, f = c.x, p = c.y;
    m > r != p > r && n < (f - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
pe(ap, "isPointInPolygon");
function ip(t, e) {
  if (!e) return !1;
  const n = { x: t.clientX, y: t.clientY };
  return ap(n, e);
}
pe(ip, "isPointerInGraceArea");
function dr(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
pe(dr, "whenMouse");
var UM = SM, KM = Km, qM = TM, XM = EM, QM = Qm, ZM = NM, JM = wc, ek = _M, tk = jM, nk = LM, rk = WM, ok = BM, sk = HM, ak = zM, ik = GM, ck = Object.defineProperty, Ue = (t, e) => ck(t, "name", { value: e, configurable: !0 }), Cc = "DropdownMenu", [lk, IO] = /* @__PURE__ */ Me(
  Cc,
  [Ym]
), Ke = Ym(), [uk, cp] = lk(Cc), dk = /* @__PURE__ */ Ue((t) => {
  const {
    __scopeDropdownMenu: e,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = t, c = Ke(e), u = l.useRef(null), [m, f] = Ae({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: Cc
  });
  return /* @__PURE__ */ d.jsx(
    uk,
    {
      scope: e,
      triggerId: Re(),
      triggerRef: u,
      contentId: Re(),
      open: m,
      onOpenChange: f,
      onOpenToggle: l.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ d.jsx(UM, { ...c, open: m, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
}, "DropdownMenu"), fk = "DropdownMenuTrigger", mk = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(e, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...s } = e, a = cp(fk, r), i = Ke(r), c = te(n, a.triggerRef);
    return /* @__PURE__ */ d.jsx(KM, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...s,
        ref: c,
        onPointerDown: A(e.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (a.onOpenToggle(), a.open || u.preventDefault());
        }),
        onKeyDown: A(e.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && a.onOpenToggle(), u.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), pk = /* @__PURE__ */ Ue((t) => {
  const { __scopeDropdownMenu: e, ...n } = t, r = Ke(e);
  return /* @__PURE__ */ d.jsx(qM, { ...r, ...n });
}, "DropdownMenuPortal"), hk = "DropdownMenuContent", gk = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(e, n) {
    const { __scopeDropdownMenu: r, ...o } = e, s = cp(hk, r), a = Ke(r), i = l.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      XM,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...a,
        ...o,
        ref: n,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (c) => {
          i.current || s.triggerRef.current?.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: A(e.onInteractOutside, (c) => {
          const u = c.detail.originalEvent, m = u.button === 0 && u.ctrlKey === !0, f = u.button === 2 || m;
          (!s.modal || f) && (i.current = !0);
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
  }, "DropdownMenuContent")
), vk = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(e, n) {
    const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
    return /* @__PURE__ */ d.jsx(QM, { ...s, ...o, ref: n });
  }, "DropdownMenuGroup")
), bk = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(e, n) {
    const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
    return /* @__PURE__ */ d.jsx(ZM, { ...s, ...o, ref: n });
  }, "DropdownMenuLabel")
), xk = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ue(function(e, n) {
    const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
    return /* @__PURE__ */ d.jsx(JM, { ...s, ...o, ref: n });
  }, "DropdownMenuItem")
), wk = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(ek, { ...s, ...o, ref: n });
}, "DropdownMenuCheckboxItem")), yk = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(tk, { ...s, ...o, ref: n });
}, "DropdownMenuRadioGroup")), Ck = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(nk, { ...s, ...o, ref: n });
}, "DropdownMenuRadioItem")), Sk = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(rk, { ...s, ...o, ref: n });
}, "DropdownMenuItemIndicator")), Pk = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(ok, { ...s, ...o, ref: n });
}, "DropdownMenuSeparator")), Tk = /* @__PURE__ */ Ue((t) => {
  const { __scopeDropdownMenu: e, children: n, open: r, onOpenChange: o, defaultOpen: s } = t, a = Ke(e), [i, c] = Ae({
    prop: r,
    defaultProp: s ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ d.jsx(sk, { ...a, open: i, onOpenChange: c, children: n });
}, "DropdownMenuSub"), Rk = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(ak, { ...s, ...o, ref: n });
}, "DropdownMenuSubTrigger")), Ek = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Ue(function(e, n) {
  const { __scopeDropdownMenu: r, ...o } = e, s = Ke(r);
  return /* @__PURE__ */ d.jsx(
    ik,
    {
      ...s,
      ...o,
      ref: n,
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
}, "DropdownMenuSubContent")), Mk = dk, kk = mk, lp = pk, up = gk, Dk = vk, dp = bk, fp = xk, mp = wk, Nk = yk, pp = Ck, hp = Sk, gp = Pk, _k = Tk, vp = Rk, bp = Ek;
const OO = Mk, AO = kk, jO = Dk, FO = lp, LO = _k, $O = Nk, Ik = l.forwardRef(({ className: t, inset: e, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  vp,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      e && "pl-8",
      t
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(wi, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ik.displayName = vp.displayName;
const Ok = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  bp,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Ok.displayName = bp.displayName;
const Ak = l.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ d.jsx(lp, { children: /* @__PURE__ */ d.jsx(
  up,
  {
    ref: r,
    sideOffset: e,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
Ak.displayName = up.displayName;
const jk = l.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ d.jsx(
  fp,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...n
  }
));
jk.displayName = fp.displayName;
const Fk = l.forwardRef(({ className: t, children: e, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  mp,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(hp, { children: /* @__PURE__ */ d.jsx(ro, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Fk.displayName = mp.displayName;
const Lk = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsxs(
  pp,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(hp, { children: /* @__PURE__ */ d.jsx(Du, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Lk.displayName = pp.displayName;
const $k = l.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ d.jsx(
  dp,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...n
  }
));
$k.displayName = dp.displayName;
const Wk = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  gp,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Wk.displayName = gp.displayName;
const Bk = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k("ml-auto text-xs tracking-widest opacity-60", t),
    ...e
  }
);
Bk.displayName = "DropdownMenuShortcut";
var Vk = Object.defineProperty, Hk = (t, e) => Vk(t, "name", { value: e, configurable: !0 }), zk = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Hk(function(e, n) {
    return /* @__PURE__ */ d.jsx(
      z.label,
      {
        ...e,
        ref: n,
        onMouseDown: (r) => {
          r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
        }
      }
    );
  }, "Label")
), xp = zk;
const Yk = _t(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), qs = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  xp,
  {
    ref: n,
    className: k(Yk(), t),
    ...e
  }
));
qs.displayName = xp.displayName;
const WO = jg, wp = l.createContext(
  {}
), zn = ({
  ...t
}) => /* @__PURE__ */ d.jsx(wp.Provider, { value: { name: t.name }, children: /* @__PURE__ */ d.jsx(Fg, { ...t }) }), Xs = () => {
  const t = l.useContext(wp), e = l.useContext(yp), { getFieldState: n, formState: r } = ln(), o = n(t.name, r);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = e;
  return {
    id: s,
    name: t.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...o
  };
}, yp = l.createContext(
  {}
), vn = l.forwardRef(({ className: t, ...e }, n) => {
  const r = l.useId();
  return /* @__PURE__ */ d.jsx(yp.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: k("space-y-1 relative", t),
      ...e
    }
  ) });
});
vn.displayName = "FormItem";
const bn = l.forwardRef(({ className: t, ...e }, n) => {
  const { error: r, formItemId: o } = Xs();
  return /* @__PURE__ */ d.jsx(
    qs,
    {
      ref: n,
      className: k(r && "text-destructive dark:text-red-400", t),
      htmlFor: o,
      ...e
    }
  );
});
bn.displayName = "FormLabel";
const Pr = l.forwardRef(({ ...t }, e) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: s } = Xs();
  return /* @__PURE__ */ d.jsx(
    _u,
    {
      ref: e,
      id: r,
      "aria-describedby": n ? `${o} ${s}` : `${o}`,
      "aria-invalid": !!n,
      ...t
    }
  );
});
Pr.displayName = "FormControl";
const Cp = l.forwardRef(({ className: t, ...e }, n) => {
  const { formDescriptionId: r } = Xs();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: k("text-sm text-muted-foreground", t),
      ...e
    }
  );
});
Cp.displayName = "FormDescription";
const xn = l.forwardRef(({ className: t, children: e, ...n }, r) => {
  const { error: o, formMessageId: s } = Xs(), a = o ? String(o?.message) : e;
  return a ? /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: r,
      id: s,
      className: k(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        t
      ),
      ...n,
      children: a
    }
  ) : null;
});
xn.displayName = "FormMessage";
const Gk = _t("font-bold tracking-tight", {
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
}), BO = X.forwardRef(
  ({ className: t, variant: e, children: n, ...r }, o) => {
    const s = e || "h1";
    return /* @__PURE__ */ d.jsx(
      s,
      {
        className: k(Gk({ variant: e }), t),
        ref: o,
        ...r,
        children: n
      }
    );
  }
), Sc = X.forwardRef(({ className: t, type: e, ...n }, r) => e === "textarea" ? /* @__PURE__ */ d.jsx(
  "textarea",
  {
    rows: 1,
    ref: r,
    className: k(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ...n
  }
) : /* @__PURE__ */ d.jsx(
  "input",
  {
    ref: r,
    type: e,
    className: k(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      t
    ),
    ...n
  }
)), VO = ({
  name: t,
  label: e,
  placeholder: n,
  mask: r,
  ...o
}) => {
  const s = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: s.control,
      name: t,
      render: ({ field: a }) => /* @__PURE__ */ d.jsxs(vn, { className: "flex-1", children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(Pr, { children: r ? /* @__PURE__ */ d.jsx(
          _D,
          {
            mask: r,
            placeholder: n,
            ...o,
            ...a
          }
        ) : /* @__PURE__ */ d.jsx(Sc, { placeholder: n, ...o, ...a }) }),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
};
var Uk = Object.defineProperty, Kk = (t, e) => Uk(t, "name", { value: e, configurable: !0 });
function Pc(t) {
  const e = l.useRef({ value: t, previous: t });
  return l.useMemo(() => (e.current.value !== t && (e.current.previous = e.current.value, e.current.value = t), e.current.previous), [t]);
}
Kk(Pc, "usePrevious");
var qk = Object.defineProperty, Xk = (t, e) => qk(t, "name", { value: e, configurable: !0 }), Sp = Object.freeze({
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
}), Tc = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Xk(function(e, n) {
    return /* @__PURE__ */ d.jsx(
      z.span,
      {
        ...e,
        ref: n,
        style: { ...Sp, ...e.style }
      }
    );
  }, "VisuallyHidden")
), Pp = Tc, Qk = Object.defineProperty, Se = (t, e) => Qk(t, "name", { value: e, configurable: !0 }), Tr = "NavigationMenu", [Rc, Tp, Zk] = /* @__PURE__ */ un(Tr), [di, Jk, eD] = /* @__PURE__ */ un(Tr), [Ec, HO] = /* @__PURE__ */ Me(
  Tr,
  [Zk, eD]
), [tD, gt] = Ec(Tr), [nD, rD] = Ec(Tr), oD = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Se(function(e, n) {
    const {
      __scopeNavigationMenu: r,
      value: o,
      onValueChange: s,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: c = 300,
      orientation: u = "horizontal",
      dir: m,
      ...f
    } = e, [p, v] = l.useState(null), b = te(n, v), h = Dt(m), g = l.useRef(0), x = l.useRef(0), y = l.useRef(0), [w, C] = l.useState(!0), [P, S] = Ae({
      prop: o,
      onChange: /* @__PURE__ */ Se((D) => {
        const I = D !== "", O = c > 0;
        I ? (window.clearTimeout(y.current), O && C(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => C(!0),
          c
        )), s?.(D);
      }, "onChange"),
      defaultProp: a ?? "",
      caller: Tr
    }), T = l.useCallback(() => {
      window.clearTimeout(x.current), x.current = window.setTimeout(() => S(""), 150);
    }, [S]), R = l.useCallback(
      (D) => {
        window.clearTimeout(x.current), S(D);
      },
      [S]
    ), M = l.useCallback(
      (D) => {
        P === D ? window.clearTimeout(x.current) : g.current = window.setTimeout(() => {
          window.clearTimeout(x.current), S(D);
        }, i);
      },
      [P, S, i]
    );
    return l.useEffect(() => () => {
      window.clearTimeout(g.current), window.clearTimeout(x.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ d.jsx(
      sD,
      {
        scope: r,
        isRootMenu: !0,
        value: P,
        dir: h,
        orientation: u,
        rootNavigationMenu: p,
        onTriggerEnter: (D) => {
          window.clearTimeout(g.current), w ? M(D) : R(D);
        },
        onTriggerLeave: () => {
          window.clearTimeout(g.current), T();
        },
        onContentEnter: () => window.clearTimeout(x.current),
        onContentLeave: T,
        onItemSelect: (D) => {
          S((I) => I === D ? "" : D);
        },
        onItemDismiss: () => S(""),
        children: /* @__PURE__ */ d.jsx(
          z.nav,
          {
            "aria-label": "Main",
            "data-orientation": u,
            dir: h,
            ...f,
            ref: b
          }
        )
      }
    );
  }, "NavigationMenu")
), sD = /* @__PURE__ */ Se((t) => {
  const {
    scope: e,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: s,
    children: a,
    value: i,
    onItemSelect: c,
    onItemDismiss: u,
    onTriggerEnter: m,
    onTriggerLeave: f,
    onContentEnter: p,
    onContentLeave: v
  } = t, [b, h] = l.useState(null), [g, x] = l.useState(/* @__PURE__ */ new Map()), [y, w] = l.useState(null);
  return /* @__PURE__ */ d.jsx(
    tD,
    {
      scope: e,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: i,
      previousValue: Pc(i),
      baseId: Re(),
      dir: o,
      orientation: s,
      viewport: b,
      onViewportChange: h,
      indicatorTrack: y,
      onIndicatorTrackChange: w,
      onTriggerEnter: ge(m),
      onTriggerLeave: ge(f),
      onContentEnter: ge(p),
      onContentLeave: ge(v),
      onItemSelect: ge(c),
      onItemDismiss: ge(u),
      onViewportContentChange: l.useCallback((C, P) => {
        x((S) => (S.set(C, P), new Map(S)));
      }, []),
      onViewportContentRemove: l.useCallback((C) => {
        x((P) => P.has(C) ? (P.delete(C), new Map(P)) : P);
      }, []),
      children: /* @__PURE__ */ d.jsx(Rc.Provider, { scope: e, children: /* @__PURE__ */ d.jsx(nD, { scope: e, items: g, children: a }) })
    }
  );
}, "NavigationMenuProvider"), aD = "NavigationMenuList", iD = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(e, n) {
    const { __scopeNavigationMenu: r, ...o } = e, s = gt(aD, r), a = /* @__PURE__ */ d.jsx(z.ul, { "data-orientation": s.orientation, ...o, ref: n });
    return /* @__PURE__ */ d.jsx(z.div, { style: { position: "relative" }, ref: s.onIndicatorTrackChange, children: /* @__PURE__ */ d.jsx(Rc.Slot, { scope: r, children: s.isRootMenu ? /* @__PURE__ */ d.jsx(Dp, { asChild: !0, children: a }) : a }) });
  }, "NavigationMenuList")
), cD = "NavigationMenuItem", [lD, Rp] = Ec(cD), uD = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(e, n) {
    const { __scopeNavigationMenu: r, value: o, ...s } = e, a = Re(), i = o || a || "LEGACY_REACT_AUTO_VALUE", c = l.useRef(null), u = l.useRef(null), m = l.useRef(null), f = l.useRef(() => {
    }), p = l.useRef(!1), v = l.useCallback((h = "start") => {
      if (c.current) {
        f.current();
        const g = ds(c.current);
        g.length && Qs(h === "start" ? g : g.reverse());
      }
    }, []), b = l.useCallback(() => {
      if (c.current) {
        const h = ds(c.current);
        h.length && (f.current = _p(h));
      }
    }, []);
    return /* @__PURE__ */ d.jsx(
      lD,
      {
        scope: r,
        value: i,
        triggerRef: u,
        contentRef: c,
        focusProxyRef: m,
        wasEscapeCloseRef: p,
        onEntryKeyDown: v,
        onFocusProxyEnter: v,
        onRootContentClose: b,
        onContentFocusOutside: b,
        children: /* @__PURE__ */ d.jsx(z.li, { ...s, ref: n })
      }
    );
  }, "NavigationMenuItem")
), fu = "NavigationMenuTrigger", dD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { __scopeNavigationMenu: r, disabled: o, ...s } = e, a = gt(fu, e.__scopeNavigationMenu), i = Rp(fu, e.__scopeNavigationMenu), c = l.useRef(null), u = te(c, i.triggerRef, n), m = Mc(a.baseId, i.value), f = kc(a.baseId, i.value), p = l.useRef(!1), v = l.useRef(!1), b = i.value === a.value;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Rc.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ d.jsx(Np, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        id: m,
        disabled: o,
        "data-disabled": o ? "" : void 0,
        "data-state": Zs(b),
        "aria-expanded": b,
        "aria-controls": b ? f : void 0,
        ...s,
        ref: u,
        onPointerEnter: A(e.onPointerEnter, () => {
          v.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: A(
          e.onPointerMove,
          eo(() => {
            o || v.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          eo(() => {
            o || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: A(e.onClick, () => {
          a.onItemSelect(i.value), v.current = b;
        }),
        onKeyDown: A(e.onKeyDown, (h) => {
          const x = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          b && h.key === x && (i.onEntryKeyDown(), h.preventDefault());
        })
      }
    ) }) }),
    b && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Pp,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (h) => {
            const g = i.contentRef.current, x = h.relatedTarget, y = x === c.current, w = g?.contains(x);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ d.jsx("span", { "aria-owns": f })
    ] })
  ] });
}, "NavigationMenuTrigger")), mu = "navigationMenu.linkSelect", fD = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(e, n) {
    const { __scopeNavigationMenu: r, active: o, onSelect: s, ...a } = e;
    return /* @__PURE__ */ d.jsx(Np, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      z.a,
      {
        "data-active": o ? "" : void 0,
        "aria-current": o ? "page" : void 0,
        ...a,
        ref: n,
        onClick: A(
          e.onClick,
          (i) => {
            const c = i.target, u = new CustomEvent(mu, {
              bubbles: !0,
              cancelable: !0
            });
            if (c.addEventListener(mu, (m) => s?.(m), { once: !0 }), ur(c, u), !u.defaultPrevented && !i.metaKey) {
              const m = new CustomEvent(Xo, {
                bubbles: !0,
                cancelable: !0
              });
              ur(c, m);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "NavigationMenuLink")
), Ep = "NavigationMenuIndicator", mD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { forceMount: r, ...o } = e, s = gt(Ep, e.__scopeNavigationMenu), a = !!s.value;
  return s.indicatorTrack ? Fn.createPortal(
    /* @__PURE__ */ d.jsx(Ee, { present: r || a, children: /* @__PURE__ */ d.jsx(pD, { ...o, ref: n }) }),
    s.indicatorTrack
  ) : null;
}, "NavigationMenuIndicator")), pD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { __scopeNavigationMenu: r, ...o } = e, s = gt(Ep, r), a = Tp(r), [i, c] = l.useState(
    null
  ), [u, m] = l.useState(null), f = s.orientation === "horizontal", p = !!s.value;
  l.useEffect(() => {
    const h = a().find((g) => g.value === s.value)?.ref.current;
    h && c(h);
  }, [a, s.value]);
  const v = /* @__PURE__ */ Se(() => {
    i && m({
      size: f ? i.offsetWidth : i.offsetHeight,
      offset: f ? i.offsetLeft : i.offsetTop
    });
  }, "handlePositionChange");
  return fs(i, v), fs(s.indicatorTrack, v), u ? /* @__PURE__ */ d.jsx(
    z.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": s.orientation,
      ...o,
      ref: n,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: u.size + "px",
          transform: `translateX(${u.offset}px)`,
          "--radix-navigation-menu-indicator-translate-x": `${u.offset}px`
        } : {
          top: 0,
          height: u.size + "px",
          transform: `translateY(${u.offset}px)`,
          "--radix-navigation-menu-indicator-translate-y": `${u.offset}px`
        },
        ...o.style
      }
    }
  ) : null;
}, "NavigationMenuIndicatorImpl")), Jr = "NavigationMenuContent", hD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { forceMount: r, ...o } = e, s = gt(Jr, e.__scopeNavigationMenu), a = Rp(Jr, e.__scopeNavigationMenu), i = te(a.contentRef, n), c = a.value === s.value, u = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...o
  };
  return s.viewport ? /* @__PURE__ */ d.jsx(gD, { forceMount: r, ...u, ref: i }) : /* @__PURE__ */ d.jsx(Ee, { present: r || c, children: /* @__PURE__ */ d.jsx(
    Mp,
    {
      "data-state": Zs(c),
      ...u,
      ref: i,
      onPointerEnter: A(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: A(
        e.onPointerLeave,
        eo(s.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !c && s.isRootMenu ? "none" : void 0,
        ...u.style
      }
    }
  ) });
}, "NavigationMenuContent")), gD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const r = gt(Jr, e.__scopeNavigationMenu), { onViewportContentChange: o, onViewportContentRemove: s } = r;
  return we(() => {
    o(e.value, {
      ref: n,
      ...e
    });
  }, [e, n, o]), we(() => () => s(e.value), [e.value, s]), null;
}, "ViewportContentMounter")), Xo = "navigationMenu.rootContentDismiss", Mp = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const {
    __scopeNavigationMenu: r,
    value: o,
    triggerRef: s,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: c,
    onContentFocusOutside: u,
    ...m
  } = e, f = gt(Jr, r), p = l.useRef(null), v = te(p, n), b = Mc(f.baseId, o), h = kc(f.baseId, o), g = Tp(r), x = l.useRef(null), { onItemDismiss: y } = f;
  l.useEffect(() => {
    const C = p.current;
    if (f.isRootMenu && C) {
      const P = /* @__PURE__ */ Se(() => {
        y(), c(), C.contains(document.activeElement) && s.current?.focus();
      }, "handleClose");
      return C.addEventListener(Xo, P), () => C.removeEventListener(Xo, P);
    }
  }, [f.isRootMenu, e.value, s, y, c]);
  const w = l.useMemo(() => {
    const P = g().map((I) => I.value);
    f.dir === "rtl" && P.reverse();
    const S = P.indexOf(f.value), T = P.indexOf(f.previousValue), R = o === f.value, M = T === P.indexOf(o);
    if (!R && !M) return x.current;
    const D = (() => {
      if (S !== T) {
        if (R && T !== -1) return S > T ? "from-end" : "from-start";
        if (M && S !== -1) return S > T ? "to-start" : "to-end";
      }
      return null;
    })();
    return x.current = D, D;
  }, [f.previousValue, f.value, f.dir, g, o]);
  return /* @__PURE__ */ d.jsx(Dp, { asChild: !0, children: /* @__PURE__ */ d.jsx(
    $n,
    {
      id: h,
      "aria-labelledby": b,
      "data-motion": w,
      "data-orientation": f.orientation,
      ...m,
      ref: v,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const C = new Event(Xo, {
          bubbles: !0,
          cancelable: !0
        });
        p.current?.dispatchEvent(C);
      },
      onFocusOutside: A(e.onFocusOutside, (C) => {
        u();
        const P = C.target;
        f.rootNavigationMenu?.contains(P) && C.preventDefault();
      }),
      onPointerDownOutside: A(e.onPointerDownOutside, (C) => {
        const P = C.target, S = g().some((R) => R.ref.current?.contains(P)), T = f.isRootMenu && f.viewport?.contains(P);
        (S || T || !f.isRootMenu) && C.preventDefault();
      }),
      onKeyDown: A(e.onKeyDown, (C) => {
        const P = C.altKey || C.ctrlKey || C.metaKey;
        if (C.key === "Tab" && !P) {
          const T = ds(C.currentTarget), R = document.activeElement, M = T.findIndex((O) => O === R), I = C.shiftKey ? T.slice(0, M).reverse() : T.slice(M + 1, T.length);
          Qs(I) ? C.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: A(e.onEscapeKeyDown, (C) => {
        i.current = !0;
      })
    }
  ) });
}, "NavigationMenuContentImpl")), kp = "NavigationMenuViewport", vD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { forceMount: r, ...o } = e, a = !!gt(kp, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ d.jsx(Ee, { present: r || a, children: /* @__PURE__ */ d.jsx(bD, { ...o, ref: n }) });
}, "NavigationMenuViewport")), bD = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Se(function(e, n) {
  const { __scopeNavigationMenu: r, children: o, ...s } = e, a = gt(kp, r), i = te(n, a.onViewportChange), c = rD(
    Jr,
    e.__scopeNavigationMenu
  ), [u, m] = l.useState(null), [f, p] = l.useState(null), v = u ? u?.width + "px" : void 0, b = u ? u?.height + "px" : void 0, h = !!a.value, g = h ? a.value : a.previousValue;
  return fs(f, /* @__PURE__ */ Se(() => {
    f && m({ width: f.offsetWidth, height: f.offsetHeight });
  }, "handleSizeChange")), /* @__PURE__ */ d.jsx(
    z.div,
    {
      "data-state": Zs(h),
      "data-orientation": a.orientation,
      ...s,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !h && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": v,
        "--radix-navigation-menu-viewport-height": b,
        ...s.style
      },
      onPointerEnter: A(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: A(e.onPointerLeave, eo(a.onContentLeave)),
      children: Array.from(c.items).map(([y, { ref: w, forceMount: C, ...P }]) => {
        const S = g === y;
        return /* @__PURE__ */ d.jsx(Ee, { present: C || S, children: /* @__PURE__ */ d.jsx(
          xD,
          {
            ...P,
            contentRef: w,
            isActive: S,
            onActiveContentChange: p
          }
        ) }, y);
      })
    }
  );
}, "NavigationMenuViewportImpl")), xD = /* @__PURE__ */ Se(({
  contentRef: t,
  isActive: e,
  onActiveContentChange: n,
  ...r
}) => {
  const o = l.useCallback(
    (a) => {
      e && a && n(a);
    },
    [e, n]
  ), s = te(t, o);
  return /* @__PURE__ */ d.jsx(Mp, { ...r, ref: s });
}, "NavigationMenuViewportItem"), wD = "FocusGroup", Dp = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Se(function(e, n) {
    const { __scopeNavigationMenu: r, ...o } = e, s = gt(wD, r);
    return /* @__PURE__ */ d.jsx(di.Provider, { scope: r, children: /* @__PURE__ */ d.jsx(di.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(z.div, { dir: s.dir, ...o, ref: n }) }) });
  }, "FocusGroup")
), pu = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], yD = "FocusGroupItem", Np = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Se(function(e, n) {
    const { __scopeNavigationMenu: r, ...o } = e, s = Jk(r), a = gt(yD, r);
    return /* @__PURE__ */ d.jsx(di.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        ...o,
        ref: n,
        onKeyDown: A(e.onKeyDown, (i) => {
          if (["Home", "End", ...pu].includes(i.key)) {
            let u = s().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && u.reverse(), pu.includes(i.key)) {
              const p = u.indexOf(i.currentTarget);
              u = u.slice(p + 1);
            }
            setTimeout(() => Qs(u)), i.preventDefault();
          }
        })
      }
    ) });
  }, "FocusGroupItem")
);
function ds(t) {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Se((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
Se(ds, "getTabbableCandidates");
function Qs(t) {
  const e = document.activeElement;
  return t.some((n) => n === e ? !0 : (n.focus(), document.activeElement !== e));
}
Se(Qs, "focusFirst");
function _p(t) {
  return t.forEach((e) => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
  }), () => {
    t.forEach((e) => {
      const n = e.dataset.tabindex;
      e.setAttribute("tabindex", n);
    });
  };
}
Se(_p, "removeFromTabOrder");
function fs(t, e) {
  const n = ge(e);
  we(() => {
    let r = 0;
    if (t) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(t), () => {
        window.cancelAnimationFrame(r), o.unobserve(t);
      };
    }
  }, [t, n]);
}
Se(fs, "useResizeObserver");
function Zs(t) {
  return t ? "open" : "closed";
}
Se(Zs, "getOpenState");
function Mc(t, e) {
  return `${t}-trigger-${e}`;
}
Se(Mc, "makeTriggerId");
function kc(t, e) {
  return `${t}-content-${e}`;
}
Se(kc, "makeContentId");
function eo(t) {
  return (e) => e.pointerType === "mouse" ? t(e) : void 0;
}
Se(eo, "whenMouse");
var Ip = oD, Op = iD, CD = uD, Ap = dD, SD = fD, jp = mD, Fp = hD, Lp = vD;
const PD = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ip,
  {
    ref: r,
    className: k(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      t
    ),
    ...n,
    children: [
      e,
      /* @__PURE__ */ d.jsx($p, {})
    ]
  }
));
PD.displayName = Ip.displayName;
const TD = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Op,
  {
    ref: n,
    className: k(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      t
    ),
    ...e
  }
));
TD.displayName = Op.displayName;
const zO = CD, RD = _t(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), ED = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ap,
  {
    ref: r,
    className: k(RD(), "group", t),
    ...n,
    children: [
      e,
      " ",
      /* @__PURE__ */ d.jsx(
        lr,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ED.displayName = Ap.displayName;
const MD = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Fp,
  {
    ref: n,
    className: k(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      t
    ),
    ...e
  }
));
MD.displayName = Fp.displayName;
const kD = SD, $p = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx("div", { className: k("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d.jsx(
  Lp,
  {
    className: k(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      t
    ),
    ref: n,
    ...e
  }
) }));
$p.displayName = Lp.displayName;
const DD = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  jp,
  {
    ref: n,
    className: k(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      t
    ),
    ...e,
    children: /* @__PURE__ */ d.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
DD.displayName = jp.displayName;
const ND = X.forwardRef(({ className: t, title: e, children: n, ...r }, o) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(kD, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
  "a",
  {
    ref: o,
    className: k(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("div", { className: "text-sm font-medium leading-none", children: e }),
      /* @__PURE__ */ d.jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: n })
    ]
  }
) }) }));
ND.displayName = "ListItem";
function _D({
  value: t,
  mask: e,
  onChange: n,
  ...r
}) {
  const o = e.split("#").length - 1, s = e.split("A").length - 1, a = e.split("*").length - 1, i = o + s + a;
  function c(u) {
    const f = u.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, i);
    n(f);
  }
  return /* @__PURE__ */ d.jsx(
    Sc,
    {
      value: Bf(t, e),
      onChange: c,
      ...r
    }
  );
}
const ID = (t, e = 300) => {
  const [n, r] = at(t);
  return Wt(() => {
    const o = setTimeout(() => {
      r(t);
    }, e);
    return () => {
      clearTimeout(o);
    };
  }, [t, e]), n;
}, hu = _t(
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
), OD = l.forwardRef(
  ({
    options: t,
    onValueChange: e,
    variant: n,
    defaultValue: r = [],
    placeholder: o = "Select options",
    animation: s = 0,
    maxCount: a = 3,
    modalPopover: i = !1,
    className: c,
    preventSelectAll: u = !1,
    onSearchChange: m,
    isLoading: f,
    onCreate: p,
    ...v
  }, b) => {
    const [h, g] = l.useState(r), [x, y] = l.useState(!1), [w, C] = l.useState(!1), [P, S] = l.useState(""), T = ID(P, 300);
    Wt(() => {
      m && m(T ?? "");
    }, [T]);
    const R = (_) => {
      if (_.key === "Enter")
        y(!0);
      else if (_.key === "Backspace" && !_.currentTarget.value) {
        const W = [...h];
        W.pop(), g(W), e(W);
      }
    }, M = (_) => {
      const W = h.includes(_) ? h.filter((j) => j !== _) : [...h, _];
      g(W), e(W);
    }, D = () => {
      g([]), e([]);
    }, I = () => {
      y((_) => !_);
    }, O = () => {
      const _ = h.slice(0, a);
      g(_), e(_);
    }, $ = () => {
      if (h.length === t.length)
        D();
      else {
        const _ = t.map((W) => W.value);
        g(_), e(_);
      }
    };
    return /* @__PURE__ */ d.jsxs(
      xo,
      {
        open: x,
        onOpenChange: y,
        modal: i,
        children: [
          /* @__PURE__ */ d.jsx(wo, { asChild: !0, children: /* @__PURE__ */ d.jsx(
            Wn,
            {
              ref: b,
              ...v,
              onClick: I,
              variant: "outline",
              className: k(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                c
              ),
              children: h.length > 0 ? /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center", children: [
                  h.slice(0, a).map((_) => {
                    const W = t.find((V) => V.value === _), j = W?.icon;
                    return /* @__PURE__ */ d.jsxs(
                      Dl,
                      {
                        className: k(
                          w ? "animate-bounce" : "",
                          hu({ variant: n })
                        ),
                        style: { animationDuration: `${s}s` },
                        children: [
                          j && /* @__PURE__ */ d.jsx(j, { className: "h-4 w-4 mr-2" }),
                          W?.label,
                          /* @__PURE__ */ d.jsx(
                            ol,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (V) => {
                                V.stopPropagation(), M(_);
                              }
                            }
                          )
                        ]
                      },
                      _
                    );
                  }),
                  h.length > a && /* @__PURE__ */ d.jsxs(
                    Dl,
                    {
                      className: k(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        w ? "animate-bounce" : "",
                        hu({ variant: n })
                      ),
                      style: { animationDuration: `${s}s` },
                      children: [
                        `+ ${h.length - a}`,
                        /* @__PURE__ */ d.jsx(
                          ol,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (_) => {
                              _.stopPropagation(), O();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
                  f && /* @__PURE__ */ d.jsx(Vr, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ d.jsx(
                    Ng,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (_) => {
                        _.stopPropagation(), D();
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
                    Th,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ d.jsx(lr, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ d.jsx("span", { className: "text-sm text-muted-foreground mx-3", children: o }),
                /* @__PURE__ */ d.jsx(lr, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ d.jsx(
            Sr,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => y(!1),
              children: /* @__PURE__ */ d.jsxs(go, { shouldFilter: !m, children: [
                /* @__PURE__ */ d.jsx(
                  Ns,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: R,
                    onValueChange: S
                  }
                ),
                /* @__PURE__ */ d.jsxs(_s, { children: [
                  !f && /* @__PURE__ */ d.jsx(Is, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ d.jsxs(vo, { children: [
                    !f && !t.length && !!P.length && p && /* @__PURE__ */ d.jsx(
                      En,
                      {
                        onSelect: p,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ d.jsx(_g, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ d.jsx("b", { children: P })
                        ] })
                      },
                      "new"
                    ),
                    f && /* @__PURE__ */ d.jsx("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ d.jsx(Vr, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !u && /* @__PURE__ */ d.jsxs(
                      En,
                      {
                        onSelect: $,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              className: k(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                h.length === t.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ d.jsx(sl, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ d.jsx("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    t.map((_) => {
                      const W = h.includes(_.value);
                      return /* @__PURE__ */ d.jsxs(
                        En,
                        {
                          onSelect: () => M(_.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: k(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  W ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ d.jsx(sl, { className: "h-4 w-4" })
                              }
                            ),
                            _.icon && /* @__PURE__ */ d.jsx(_.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ d.jsx("span", { children: _.label })
                          ]
                        },
                        _.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ d.jsx(am, {})
                ] })
              ] })
            }
          ),
          s > 0 && h.length > 0 && /* @__PURE__ */ d.jsx(
            Ig,
            {
              className: k(
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
OD.displayName = "MultiSelect";
const AD = ({ className: t, ...e }) => /* @__PURE__ */ d.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: k("mx-auto flex w-full justify-center", t),
    ...e
  }
);
AD.displayName = "Pagination";
const jD = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "ul",
  {
    ref: n,
    className: k("flex flex-row items-center gap-1", t),
    ...e
  }
));
jD.displayName = "PaginationContent";
const FD = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx("li", { ref: n, className: k("", t), ...e }));
FD.displayName = "PaginationItem";
const Dc = ({
  className: t,
  isActive: e,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ d.jsx(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: k(
      kn({
        variant: e ? "outline" : "ghost",
        size: n
      }),
      t
    ),
    ...r
  }
);
Dc.displayName = "PaginationLink";
const LD = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  Dc,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: k("gap-1", t),
    ...e,
    children: /* @__PURE__ */ d.jsx(Og, { className: "h-4 w-4" })
  }
);
LD.displayName = "PaginationPrevious";
const $D = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  Dc,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: k("gap-1", t),
    ...e,
    children: /* @__PURE__ */ d.jsx(wi, { className: "h-4 w-4" })
  }
);
$D.displayName = "PaginationNext";
const WD = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: k("flex h-9 w-9 items-center justify-center relative", t),
    ...e,
    children: [
      /* @__PURE__ */ d.jsx(ku, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
WD.displayName = "PaginationEllipsis";
var BD = Object.defineProperty, ze = (t, e) => BD(t, "name", { value: e, configurable: !0 }), Wp = "Radio", [VD, Bp] = /* @__PURE__ */ Me(Wp), [HD, Js] = VD(Wp);
function Vp(t) {
  const {
    __scopeRadio: e,
    checked: n = !1,
    children: r,
    disabled: o,
    form: s,
    name: a,
    onCheck: i,
    required: c,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = t, [f, p] = l.useState(null), [v, b] = l.useState(null), h = l.useRef(!1), [g, x] = l.useReducer(
    (C) => C + 1,
    0
  ), y = f ? !!s || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: n,
    disabled: o,
    required: c,
    name: a,
    form: s,
    value: u,
    control: f,
    setControl: p,
    hasConsumerStoppedPropagationRef: h,
    userInteractionCount: g,
    onUserInteraction: x,
    isFormControl: y,
    bubbleInput: v,
    setBubbleInput: b,
    onCheck: /* @__PURE__ */ ze(() => i?.(), "onCheck")
  };
  return /* @__PURE__ */ d.jsx(HD, { scope: e, ...w, children: Hp(m) ? m(w) : r });
}
ze(Vp, "RadioProvider");
var zD = "RadioTrigger", YD = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ze(function({ __scopeRadio: e, onClick: n, ...r }, o) {
    const {
      checked: s,
      disabled: a,
      value: i,
      setControl: c,
      onCheck: u,
      hasConsumerStoppedPropagationRef: m,
      onUserInteraction: f,
      isFormControl: p,
      bubbleInput: v
    } = Js(zD, e), b = te(o, c);
    return /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        role: "radio",
        "aria-checked": s,
        "data-state": Nc(s),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: i,
        ...r,
        ref: b,
        onClick: A(n, (h) => {
          s || (f(), u()), v && p && (m.current = h.isPropagationStopped(), m.current || h.stopPropagation());
        })
      }
    );
  }, "RadioTrigger")
), GD = "RadioIndicator", UD = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ze(function(e, n) {
    const { __scopeRadio: r, forceMount: o, ...s } = e, a = Js(GD, r);
    return /* @__PURE__ */ d.jsx(Ee, { present: o || a.checked, children: /* @__PURE__ */ d.jsx(
      z.span,
      {
        "data-state": Nc(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...s,
        ref: n
      }
    ) });
  }, "RadioIndicator")
), KD = "RadioBubbleInput", qD = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ze(function({ __scopeRadio: e, onClick: n, ...r }, o) {
    const {
      control: s,
      checked: a,
      required: i,
      disabled: c,
      name: u,
      value: m,
      form: f,
      bubbleInput: p,
      setBubbleInput: v,
      hasConsumerStoppedPropagationRef: b,
      userInteractionCount: h
    } = Js(KD, e), g = te(o, v), x = po(s), y = l.useRef(!1), w = l.useRef(a), C = l.useRef(h);
    l.useEffect(() => {
      const S = p;
      if (!S) return;
      const T = window.HTMLInputElement.prototype, M = Object.getOwnPropertyDescriptor(
        T,
        "checked"
      ).set, D = h !== C.current;
      C.current = h;
      const I = w.current !== a;
      w.current = a;
      const O = !(D && b.current);
      if (I && M) {
        y.current = !D;
        const $ = new Event("click", { bubbles: O });
        M.call(S, a), S.dispatchEvent($), y.current = !1;
      }
    }, [p, a, b, h]);
    const P = l.useRef(a);
    return /* @__PURE__ */ d.jsx(
      z.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: P.current,
        required: i,
        disabled: c,
        name: u,
        value: m,
        form: f,
        ...r,
        tabIndex: -1,
        ref: g,
        onClick: A(n, (S) => {
          y.current && S.stopPropagation();
        }),
        style: {
          ...r.style,
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
  }, "RadioBubbleInput")
);
function Hp(t) {
  return typeof t == "function";
}
ze(Hp, "isFunction");
function Nc(t) {
  return t ? "checked" : "unchecked";
}
ze(Nc, "getState");
var XD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], _c = "RadioGroup", [QD, YO] = /* @__PURE__ */ Me(_c, [
  hn,
  Bp
]), zp = hn(), ea = Bp(), [ZD, JD] = QD(_c), Yp = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ze(function(e, n) {
    const {
      __scopeRadioGroup: r,
      name: o,
      form: s,
      defaultValue: a,
      value: i,
      required: c = !1,
      disabled: u = !1,
      orientation: m,
      dir: f,
      loop: p = !0,
      onValueChange: v,
      ...b
    } = e, h = zp(r), g = Dt(f), [x, y] = Ae({
      prop: i,
      defaultProp: a ?? null,
      onChange: v,
      caller: _c
    }), [w, C] = l.useState(null), P = te(n, C), S = l.useRef(x);
    return l.useEffect(() => {
      const T = s ? w?.ownerDocument.getElementById(s) : w?.closest("form");
      if (T instanceof HTMLFormElement) {
        const R = /* @__PURE__ */ ze(() => y(S.current), "reset");
        return T.addEventListener("reset", R), () => T.removeEventListener("reset", R);
      }
    }, [w, s, y]), /* @__PURE__ */ d.jsx(
      ZD,
      {
        scope: r,
        name: o,
        form: s,
        required: c,
        disabled: u,
        value: x,
        onValueChange: y,
        children: /* @__PURE__ */ d.jsx(
          zs,
          {
            asChild: !0,
            ...h,
            orientation: m,
            dir: g,
            loop: p,
            children: /* @__PURE__ */ d.jsx(
              z.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": m,
                "data-disabled": u ? "" : void 0,
                dir: g,
                ...b,
                ref: P
              }
            )
          }
        )
      }
    );
  }, "RadioGroup")
), eN = "RadioGroupItemProvider", tN = "RadioGroupItemTrigger";
function Gp(t) {
  const {
    __scopeRadioGroup: e,
    value: n,
    disabled: r,
    children: o,
    // @ts-expect-error
    internal_do_not_use_render: s
  } = t, a = JD(eN, e), i = ea(e), c = a.disabled || r;
  return /* @__PURE__ */ d.jsx(
    Vp,
    {
      ...i,
      checked: a.value === n,
      disabled: c,
      required: a.required,
      name: a.name,
      form: a.form,
      value: n,
      onCheck: () => a.onValueChange(n),
      internal_do_not_use_render: s,
      children: o
    }
  );
}
ze(Gp, "RadioGroupItemProvider");
var nN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ze(function(e, n) {
  const { __scopeRadioGroup: r, ...o } = e, s = zp(r), a = ea(r), { checked: i, disabled: c } = Js(tN, a.__scopeRadio), u = l.useRef(null), m = te(n, u), f = l.useRef(!1);
  return l.useEffect(() => {
    const p = /* @__PURE__ */ ze((b) => {
      XD.includes(b.key) && (f.current = !0);
    }, "handleKeyDown"), v = /* @__PURE__ */ ze(() => f.current = !1, "handleKeyUp");
    return document.addEventListener("keydown", p), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ d.jsx(
    Ys,
    {
      asChild: !0,
      ...s,
      focusable: !c,
      active: i,
      children: /* @__PURE__ */ d.jsx(
        YD,
        {
          ...a,
          ...o,
          ref: m,
          onKeyDown: A(o.onKeyDown, (p) => {
            p.key === "Enter" && p.preventDefault();
          }),
          onFocus: A(o.onFocus, () => {
            f.current && u.current?.click();
          })
        }
      )
    }
  );
}, "RadioGroupItemTrigger")), Up = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ze(function(e, n) {
    const { __scopeRadioGroup: r, value: o, disabled: s, ...a } = e;
    return /* @__PURE__ */ d.jsx(
      Gp,
      {
        __scopeRadioGroup: r,
        value: o,
        disabled: s,
        internal_do_not_use_render: ({ isFormControl: i }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            nN,
            {
              ...a,
              ref: n,
              __scopeRadioGroup: r
            }
          ),
          i && /* @__PURE__ */ d.jsx(
            rN,
            {
              __scopeRadioGroup: r
            }
          )
        ] })
      }
    );
  }, "RadioGroupItem")
), rN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ze(function(e, n) {
  const { __scopeRadioGroup: r, ...o } = e, s = ea(r);
  return /* @__PURE__ */ d.jsx(qD, { ...s, ...o, ref: n });
}, "RadioGroupItemBubbleInput")), oN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ze(function(e, n) {
    const { __scopeRadioGroup: r, ...o } = e, s = ea(r);
    return /* @__PURE__ */ d.jsx(UD, { ...s, ...o, ref: n });
  }, "RadioGroupIndicator")
);
const sN = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Yp,
  {
    className: k("grid gap-2", t),
    ...e,
    ref: n
  }
));
sN.displayName = Yp.displayName;
const aN = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Up,
  {
    ref: n,
    className: k(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    children: /* @__PURE__ */ d.jsx(oN, { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsx(Du, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
aN.displayName = Up.displayName;
var iN = Object.defineProperty, cN = (t, e) => iN(t, "name", { value: e, configurable: !0 });
function ms(t, [e, n]) {
  return Math.min(n, Math.max(e, t));
}
cN(ms, "clamp");
var lN = Object.defineProperty, ue = (t, e) => lN(t, "name", { value: e, configurable: !0 });
function Kp(t, e) {
  return l.useReducer((n, r) => e[n][r] ?? n, t);
}
ue(Kp, "useStateMachine");
var qp = "ScrollArea", [Xp, GO] = /* @__PURE__ */ Me(qp), [uN, it] = Xp(qp), dN = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ ue(function(e, n) {
    const {
      __scopeScrollArea: r,
      type: o = "hover",
      dir: s,
      scrollHideDelay: a = 600,
      ...i
    } = e, [c, u] = l.useState(null), [m, f] = l.useState(null), [p, v] = l.useState(null), [b, h] = l.useState(null), [g, x] = l.useState(null), [y, w] = l.useState(0), [C, P] = l.useState(0), [S, T] = l.useState(!1), [R, M] = l.useState(!1), D = te(n, u), I = Dt(s);
    return /* @__PURE__ */ d.jsx(
      uN,
      {
        scope: r,
        type: o,
        dir: I,
        scrollHideDelay: a,
        scrollArea: c,
        viewport: m,
        onViewportChange: f,
        content: p,
        onContentChange: v,
        scrollbarX: b,
        onScrollbarXChange: h,
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: T,
        scrollbarY: g,
        onScrollbarYChange: x,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: M,
        onCornerWidthChange: w,
        onCornerHeightChange: P,
        children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            dir: I,
            ...i,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }, "ScrollArea")
), fN = "ScrollAreaViewport", mN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ue(function(e, n) {
    const { __scopeScrollArea: r, children: o, nonce: s, ...a } = e, i = it(fN, r), c = l.useRef(null), u = te(n, c, i.onViewportChange);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(pN, { nonce: s }),
      /* @__PURE__ */ d.jsx(
        z.div,
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
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ d.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }, "ScrollAreaViewport")
), pN = /* @__PURE__ */ l.memo(
  /* @__PURE__ */ ue(function({ nonce: e }) {
    return /* @__PURE__ */ d.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
        },
        nonce: e
      }
    );
  }, "ScrollAreaViewportStyle"),
  (t, e) => t.nonce === e.nonce
), Zt = "ScrollAreaScrollbar", Qp = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ue(function(e, n) {
    const { forceMount: r, ...o } = e, s = it(Zt, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = s, c = e.orientation === "horizontal";
    return l.useEffect(() => (c ? a(!0) : i(!0), () => {
      c ? a(!1) : i(!1);
    }), [c, a, i]), s.type === "hover" ? /* @__PURE__ */ d.jsx(hN, { ...o, ref: n, forceMount: r }) : s.type === "scroll" ? /* @__PURE__ */ d.jsx(gN, { ...o, ref: n, forceMount: r }) : s.type === "auto" ? /* @__PURE__ */ d.jsx(Zp, { ...o, ref: n, forceMount: r }) : s.type === "always" ? /* @__PURE__ */ d.jsx(Ic, { ...o, ref: n, "data-state": "visible" }) : null;
  }, "ScrollAreaScrollbar")
), hN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { forceMount: r, ...o } = e, s = it(Zt, e.__scopeScrollArea), [a, i] = l.useState(!1);
  return l.useEffect(() => {
    const c = s.scrollArea;
    let u = 0;
    if (c) {
      const m = /* @__PURE__ */ ue(() => {
        window.clearTimeout(u), i(!0);
      }, "handlePointerEnter"), f = /* @__PURE__ */ ue(() => {
        u = window.setTimeout(() => i(!1), s.scrollHideDelay);
      }, "handlePointerLeave");
      return c.addEventListener("pointerenter", m), c.addEventListener("pointerleave", f), () => {
        window.clearTimeout(u), c.removeEventListener("pointerenter", m), c.removeEventListener("pointerleave", f);
      };
    }
  }, [s.scrollArea, s.scrollHideDelay]), /* @__PURE__ */ d.jsx(Ee, { present: r || a, children: /* @__PURE__ */ d.jsx(
    Zp,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: n
    }
  ) });
}, "ScrollAreaScrollbarHover")), gN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { forceMount: r, ...o } = e, s = it(Zt, e.__scopeScrollArea), a = e.orientation === "horizontal", i = So(() => u("SCROLL_END"), 100), [c, u] = Kp("hidden", {
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
      const m = window.setTimeout(() => u("HIDE"), s.scrollHideDelay);
      return () => window.clearTimeout(m);
    }
  }, [c, s.scrollHideDelay, u]), l.useEffect(() => {
    const m = s.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (m) {
      let p = m[f];
      const v = /* @__PURE__ */ ue(() => {
        const b = m[f];
        p !== b && (u("SCROLL"), i()), p = b;
      }, "handleScroll");
      return m.addEventListener("scroll", v), () => m.removeEventListener("scroll", v);
    }
  }, [s.viewport, a, u, i]), /* @__PURE__ */ d.jsx(Ee, { present: r || c !== "hidden", children: /* @__PURE__ */ d.jsx(
    Ic,
    {
      "data-state": c === "hidden" ? "hidden" : "visible",
      ...o,
      ref: n,
      onPointerEnter: A(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: A(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}, "ScrollAreaScrollbarScroll")), Zp = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const r = it(Zt, e.__scopeScrollArea), { forceMount: o, ...s } = e, [a, i] = l.useState(!1), c = e.orientation === "horizontal", u = So(() => {
    if (r.viewport) {
      const m = r.viewport.offsetWidth < r.viewport.scrollWidth, f = r.viewport.offsetHeight < r.viewport.scrollHeight;
      i(c ? m : f);
    }
  }, 10);
  return An(r.viewport, u), An(r.content, u), /* @__PURE__ */ d.jsx(Ee, { present: o || a, children: /* @__PURE__ */ d.jsx(
    Ic,
    {
      "data-state": a ? "visible" : "hidden",
      ...s,
      ref: n
    }
  ) });
}, "ScrollAreaScrollbarAuto")), Ic = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { orientation: r = "vertical", ...o } = e, s = it(Zt, e.__scopeScrollArea), a = l.useRef(null), i = l.useRef(0), [c, u] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), m = Oc(c.viewport, c.content), f = {
    ...o,
    sizes: c,
    onSizesChange: u,
    hasThumb: m > 0 && m < 1,
    onThumbChange: /* @__PURE__ */ ue((v) => a.current = v, "onThumbChange"),
    onThumbPointerUp: /* @__PURE__ */ ue(() => i.current = 0, "onThumbPointerUp"),
    onThumbPointerDown: /* @__PURE__ */ ue((v) => i.current = v, "onThumbPointerDown")
  };
  function p(v, b) {
    return nh(v, i.current, c, b);
  }
  return ue(p, "getScrollPosition"), r === "horizontal" ? /* @__PURE__ */ d.jsx(
    vN,
    {
      ...f,
      ref: n,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const v = s.viewport.scrollLeft, b = mi(v, c, s.dir);
          a.current.style.transform = `translate3d(${b}px, 0, 0)`;
        }
      },
      onWheelScroll: (v) => {
        s.viewport && (s.viewport.scrollLeft = v);
      },
      onDragScroll: (v) => {
        s.viewport && (s.viewport.scrollLeft = p(v, s.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ d.jsx(
    bN,
    {
      ...f,
      ref: n,
      onThumbPositionChange: () => {
        if (s.viewport && a.current) {
          const v = s.viewport.scrollTop, b = mi(v, c);
          a.current.style.transform = `translate3d(0, ${b}px, 0)`;
        }
      },
      onWheelScroll: (v) => {
        s.viewport && (s.viewport.scrollTop = v);
      },
      onDragScroll: (v) => {
        s.viewport && (s.viewport.scrollTop = p(v));
      }
    }
  ) : null;
}, "ScrollAreaScrollbarVisible")), vN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { sizes: r, onSizesChange: o, ...s } = e, a = it(Zt, e.__scopeScrollArea), [i, c] = l.useState(), u = l.useRef(null), m = te(n, u, a.onScrollbarXChange);
  return l.useEffect(() => {
    u.current && c(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ d.jsx(
    eh,
    {
      "data-orientation": "horizontal",
      ...s,
      ref: m,
      sizes: r,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Co(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const v = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(v), jc(v, p) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && a.viewport && i && o({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: to(i.paddingLeft),
            paddingEnd: to(i.paddingRight)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarX")), bN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { sizes: r, onSizesChange: o, ...s } = e, a = it(Zt, e.__scopeScrollArea), [i, c] = l.useState(), u = l.useRef(null), m = te(n, u, a.onScrollbarYChange);
  return l.useEffect(() => {
    u.current && c(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ d.jsx(
    eh,
    {
      "data-orientation": "vertical",
      ...s,
      ref: m,
      sizes: r,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Co(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const v = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(v), jc(v, p) && f.preventDefault();
        }
      },
      onResize: () => {
        u.current && a.viewport && i && o({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: to(i.paddingTop),
            paddingEnd: to(i.paddingBottom)
          }
        });
      }
    }
  );
}, "ScrollAreaScrollbarY")), [xN, Jp] = Xp(Zt), eh = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const {
    __scopeScrollArea: r,
    sizes: o,
    hasThumb: s,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: c,
    onThumbPositionChange: u,
    onDragScroll: m,
    onWheelScroll: f,
    onResize: p,
    ...v
  } = e, b = it(Zt, r), [h, g] = l.useState(null), x = te(n, g), y = l.useRef(null), w = l.useRef(""), C = b.viewport, P = o.content - o.viewport, S = ge(f), T = ge(u), R = So(p, 10);
  function M(D) {
    if (y.current) {
      const I = D.clientX - y.current.left, O = D.clientY - y.current.top;
      m({ x: I, y: O });
    }
  }
  return ue(M, "handleDragScroll"), l.useEffect(() => {
    const D = /* @__PURE__ */ ue((I) => {
      const O = I.target;
      h?.contains(O) && S(I, P);
    }, "handleWheel");
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [C, h, P, S]), l.useEffect(T, [o, T]), An(h, R), An(b.content, R), /* @__PURE__ */ d.jsx(
    xN,
    {
      scope: r,
      scrollbar: h,
      hasThumb: s,
      onThumbChange: ge(a),
      onThumbPointerUp: ge(i),
      onThumbPositionChange: T,
      onThumbPointerDown: ge(c),
      children: /* @__PURE__ */ d.jsx(
        z.div,
        {
          ...v,
          ref: x,
          style: { position: "absolute", ...v.style },
          onPointerDown: A(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), y.current = h.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), M(D));
          }),
          onPointerMove: A(e.onPointerMove, M),
          onPointerUp: A(e.onPointerUp, (D) => {
            const I = D.target;
            I.hasPointerCapture(D.pointerId) && I.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = w.current, b.viewport && (b.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}, "ScrollAreaScrollbarImpl")), fi = "ScrollAreaThumb", wN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ue(function(e, n) {
    const { forceMount: r, ...o } = e, s = Jp(fi, e.__scopeScrollArea);
    return /* @__PURE__ */ d.jsx(Ee, { present: r || s.hasThumb, children: /* @__PURE__ */ d.jsx(yN, { ref: n, ...o }) });
  }, "ScrollAreaThumb")
), yN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ue(function(e, n) {
    const { __scopeScrollArea: r, style: o, ...s } = e, a = it(fi, r), i = Jp(fi, r), { onThumbPositionChange: c } = i, u = te(n, i.onThumbChange), m = l.useRef(void 0), f = So(() => {
      m.current && (m.current(), m.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const v = /* @__PURE__ */ ue(() => {
          if (f(), !m.current) {
            const b = PN(p, c);
            m.current = b, c();
          }
        }, "handleScroll");
        return c(), p.addEventListener("scroll", v), () => p.removeEventListener("scroll", v);
      }
    }, [a.viewport, f, c]), /* @__PURE__ */ d.jsx(
      z.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...s,
        ref: u,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: A(e.onPointerDownCapture, (p) => {
          const b = p.target.getBoundingClientRect(), h = p.clientX - b.left, g = p.clientY - b.top;
          i.onThumbPointerDown({ x: h, y: g });
        }),
        onPointerUp: A(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }, "ScrollAreaThumbImpl")
), th = "ScrollAreaCorner", CN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ue(function(e, n) {
    const r = it(th, e.__scopeScrollArea), o = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && o ? /* @__PURE__ */ d.jsx(SN, { ...e, ref: n }) : null;
  }, "ScrollAreaCorner")
), SN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ ue(function(e, n) {
  const { __scopeScrollArea: r, ...o } = e, s = it(th, r), [a, i] = l.useState(0), [c, u] = l.useState(0), m = !!(a && c), { onCornerWidthChange: f, onCornerHeightChange: p } = s;
  return An(s.scrollbarX, () => {
    const v = s.scrollbarX?.offsetHeight || 0;
    s.onCornerHeightChange(v), u(v);
  }), An(s.scrollbarY, () => {
    const v = s.scrollbarY?.offsetWidth || 0;
    s.onCornerWidthChange(v), i(v);
  }), l.useEffect(() => () => {
    f(0), p(0);
  }, [f, p]), m ? /* @__PURE__ */ d.jsx(
    z.div,
    {
      ...o,
      ref: n,
      style: {
        width: a,
        height: c,
        position: "absolute",
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
}, "ScrollAreaCornerImpl"));
function to(t) {
  return t ? parseInt(t, 10) : 0;
}
ue(to, "toInt");
function Oc(t, e) {
  const n = t / e;
  return isNaN(n) ? 0 : n;
}
ue(Oc, "getThumbRatio");
function Co(t) {
  const e = Oc(t.viewport, t.content), n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, r = (t.scrollbar.size - n) * e;
  return Math.max(r, 18);
}
ue(Co, "getThumbSize");
function nh(t, e, n, r = "ltr") {
  const o = Co(n), s = o / 2, a = e || s, i = o - a, c = n.scrollbar.paddingStart + a, u = n.scrollbar.size - n.scrollbar.paddingEnd - i, m = n.content - n.viewport, f = r === "ltr" ? [0, m] : [m * -1, 0];
  return Ac([c, u], f)(t);
}
ue(nh, "getScrollPositionFromPointer");
function mi(t, e, n = "ltr") {
  const r = Co(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, s = e.scrollbar.size - o, a = e.content - e.viewport, i = s - r, c = n === "ltr" ? [0, a] : [a * -1, 0], u = ms(t, c);
  return Ac([0, a], [0, i])(u);
}
ue(mi, "getThumbOffsetFromScroll");
function Ac(t, e) {
  return (n) => {
    if (t[0] === t[1] || e[0] === e[1]) return e[0];
    const r = (e[1] - e[0]) / (t[1] - t[0]);
    return e[0] + r * (n - t[0]);
  };
}
ue(Ac, "linearScale");
function jc(t, e) {
  return t > 0 && t < e;
}
ue(jc, "isScrollingWithinScrollbarBounds");
var PN = /* @__PURE__ */ ue((t, e = () => {
}) => {
  let n = { left: t.scrollLeft, top: t.scrollTop }, r = 0;
  return (/* @__PURE__ */ ue((function o() {
    const s = { left: t.scrollLeft, top: t.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && e(), n = s, r = window.requestAnimationFrame(o);
  }), "loop"))(), () => window.cancelAnimationFrame(r);
}, "addUnlinkedScrollListener");
function So(t, e) {
  const n = ge(t), r = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), l.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, e);
  }, [n, e]);
}
ue(So, "useDebounceCallback");
function An(t, e) {
  const n = ge(e);
  we(() => {
    let r = 0;
    if (t) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(t), () => {
        window.cancelAnimationFrame(r), o.unobserve(t);
      };
    }
  }, [t, n]);
}
ue(An, "useResizeObserver");
var rh = dN, TN = mN, RN = CN;
const EN = X.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsxs(
  rh,
  {
    ref: r,
    className: k("relative overflow-hidden", t),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx(TN, { className: "h-full w-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ d.jsx(oh, {}),
      /* @__PURE__ */ d.jsx(RN, {})
    ]
  }
));
EN.displayName = rh.displayName;
const oh = X.forwardRef(({ className: t, orientation: e = "vertical", ...n }, r) => /* @__PURE__ */ d.jsx(
  Qp,
  {
    ref: r,
    orientation: e,
    className: k(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(wN, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
oh.displayName = Qp.displayName;
var MN = Object.defineProperty, me = (t, e) => MN(t, "name", { value: e, configurable: !0 }), kN = [" ", "Enter", "ArrowUp", "ArrowDown"], DN = [" ", "Enter"], fr = "Select", [ta, na, NN] = /* @__PURE__ */ un(fr), [Yn, UO] = /* @__PURE__ */ Me(fr, [
  NN,
  mn
]), Fc = mn(), [_N, wn] = Yn(fr), [IN, ON] = Yn(fr);
function sh(t) {
  const {
    __scopeSelect: e,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: u,
    name: m,
    autoComplete: f,
    disabled: p,
    required: v,
    form: b,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: h
  } = t, g = Fc(e), [x, y] = l.useState(null), [w, C] = l.useState(null), [P, S] = l.useState(!1), T = Dt(u), [R, M] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: fr
  }), [D, I] = Ae({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: fr
  }), O = l.useRef(null), $ = l.useRef(D);
  l.useEffect(() => {
    const N = b ? x?.ownerDocument.getElementById(b) : x?.form;
    if (N instanceof HTMLFormElement) {
      const B = /* @__PURE__ */ me(() => I($.current), "reset");
      return N.addEventListener("reset", B), () => N.removeEventListener("reset", B);
    }
  }, [b, x, I]);
  const _ = x ? !!b || !!x.closest("form") : !0, [W, j] = l.useState(/* @__PURE__ */ new Set()), V = Re(), G = Array.from(W).map((N) => N.props.value).join(";"), K = l.useCallback((N) => {
    j((B) => new Set(B).add(N));
  }, []), E = l.useCallback((N) => {
    j((B) => {
      const q = new Set(B);
      return q.delete(N), q;
    });
  }, []), H = {
    required: v,
    trigger: x,
    onTriggerChange: y,
    valueNode: w,
    onValueNodeChange: C,
    valueNodeHasChildren: P,
    onValueNodeHasChildrenChange: S,
    contentId: V,
    value: D,
    onValueChange: I,
    open: R,
    onOpenChange: M,
    dir: T,
    triggerPointerDownPosRef: O,
    disabled: p,
    name: m,
    autoComplete: f,
    form: b,
    nativeOptions: W,
    nativeSelectKey: G,
    isFormControl: _
  };
  return /* @__PURE__ */ d.jsx(bo, { ...g, children: /* @__PURE__ */ d.jsx(_N, { scope: e, ...H, children: /* @__PURE__ */ d.jsx(ta.Provider, { scope: e, children: /* @__PURE__ */ d.jsx(
    IN,
    {
      scope: e,
      onNativeOptionAdd: K,
      onNativeOptionRemove: E,
      children: gh(h) ? h(H) : n
    }
  ) }) }) });
}
me(sh, "SelectProvider");
var AN = /* @__PURE__ */ me((t) => {
  const { __scopeSelect: e, children: n, ...r } = t;
  return /* @__PURE__ */ d.jsx(
    sh,
    {
      __scopeSelect: e,
      ...r,
      internal_do_not_use_render: ({ isFormControl: o }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        n,
        o ? /* @__PURE__ */ d.jsx(
          a_,
          {
            __scopeSelect: e
          }
        ) : null
      ] })
    }
  );
}, "Select"), jN = "SelectTrigger", ah = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, disabled: o = !1, ...s } = e, a = Fc(r), i = wn(jN, r), c = i.disabled || o, u = te(n, i.onTriggerChange), m = na(r), f = l.useRef("touch"), [p, v, b] = $c((g) => {
      const x = m().filter((C) => !C.disabled), y = x.find((C) => C.value === i.value), w = Wc(x, g, y);
      w !== void 0 && i.onValueChange(w.value);
    }), h = /* @__PURE__ */ me((g) => {
      c || (i.onOpenChange(!0), b()), g && (i.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ d.jsx(Ws, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": Po(i.value) ? "" : void 0,
        ...s,
        ref: u,
        onClick: A(s.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && h(g);
        }),
        onPointerDown: A(s.onPointerDown, (g) => {
          f.current = g.pointerType;
          const x = g.target;
          x.hasPointerCapture(g.pointerId) && x.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (h(g), g.preventDefault());
        }),
        onKeyDown: A(s.onKeyDown, (g) => {
          const x = p.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && v(g.key), !(x && g.key === " ") && kN.includes(g.key) && (h(), g.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), FN = "SelectValue", LN = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, className: o, style: s, children: a, placeholder: i = "", ...c } = e, u = wn(FN, r), { onValueNodeHasChildrenChange: m } = u, f = a !== void 0, p = te(n, u.onValueNodeChange);
    we(() => {
      m(f);
    }, [m, f]);
    const v = Po(u.value);
    return /* @__PURE__ */ d.jsx(
      z.span,
      {
        ...c,
        asChild: v ? !1 : c.asChild,
        ref: p,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ d.jsx(l.Fragment, { children: v ? i : a }, v ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), $N = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, children: o, ...s } = e;
    return /* @__PURE__ */ d.jsx(z.span, { "aria-hidden": !0, ...s, ref: n, children: o || "▼" });
  }, "SelectIcon")
), WN = "SelectPortal", [BN, VN] = Yn(WN, {
  forceMount: void 0
}), HN = /* @__PURE__ */ me((t) => {
  const { __scopeSelect: e, forceMount: n, ...r } = t;
  return /* @__PURE__ */ d.jsx(BN, { scope: t.__scopeSelect, forceMount: n, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, ...r }) });
}, "SelectPortal"), jn = "SelectContent", ih = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const r = VN(jn, e.__scopeSelect), { forceMount: o = r.forceMount, ...s } = e, a = wn(jn, e.__scopeSelect), [i, c] = l.useState();
    return we(() => {
      c(new DocumentFragment());
    }, []), /* @__PURE__ */ d.jsx(Ee, { present: o || a.open, children: ({ present: u }) => u ? /* @__PURE__ */ d.jsx(GN, { ...s, ref: n }) : /* @__PURE__ */ d.jsx(zN, { ...s, fragment: i }) });
  }, "SelectContent")
), zN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const { __scopeSelect: r, children: o, fragment: s } = e;
  return s ? Fn.createPortal(
    /* @__PURE__ */ d.jsx(ch, { scope: r, children: /* @__PURE__ */ d.jsx(ta.Slot, { scope: r, children: /* @__PURE__ */ d.jsx("div", { ref: n, children: o }) }) }),
    s
  ) : null;
}, "SelectContentFragment")), lt = 10, [ch, Gn] = Yn(jn), YN = /* @__PURE__ */ mt("SelectContent.RemoveScroll"), GN = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r } = e, {
      position: o = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: c,
      sideOffset: u,
      align: m,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: v,
      collisionPadding: b,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: x,
      //
      ...y
    } = e, w = wn(jn, r), [C, P] = l.useState(null), [S, T] = l.useState(null), R = te(n, P), [M, D] = l.useState(null), [I, O] = l.useState(
      null
    ), $ = na(r), [_, W] = l.useState(!1), j = l.useRef(!1);
    l.useEffect(() => {
      if (C) return ws(C);
    }, [C]), hr();
    const V = l.useCallback(
      (F) => {
        const [U, ...ae] = $().map((oe) => oe.ref.current), [ne] = ae.slice(-1), Y = document.activeElement;
        for (const oe of F)
          if (oe === Y || (oe?.scrollIntoView({ block: "nearest" }), oe === U && S && (S.scrollTop = 0), oe === ne && S && (S.scrollTop = S.scrollHeight), oe?.focus(), document.activeElement !== Y)) return;
      },
      [$, S]
    ), G = l.useCallback(
      () => V([M, C]),
      [V, M, C]
    );
    l.useEffect(() => {
      _ && G();
    }, [_, G]);
    const { onOpenChange: K, triggerPointerDownPosRef: E } = w;
    l.useEffect(() => {
      if (C) {
        let F = { x: 0, y: 0 };
        const U = /* @__PURE__ */ me((ne) => {
          F = {
            x: Math.abs(Math.round(ne.pageX) - (E.current?.x ?? 0)),
            y: Math.abs(Math.round(ne.pageY) - (E.current?.y ?? 0))
          };
        }, "handlePointerMove"), ae = /* @__PURE__ */ me((ne) => {
          F.x <= 10 && F.y <= 10 ? ne.preventDefault() : ne.composedPath().includes(C) || K(!1), document.removeEventListener("pointermove", U), E.current = null;
        }, "handlePointerUp");
        return E.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", ae, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", ae, { capture: !0 });
        };
      }
    }, [C, K, E]), l.useEffect(() => {
      const F = /* @__PURE__ */ me(() => K(!1), "close");
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [K]);
    const [H, N] = $c((F) => {
      const U = $().filter((Y) => !Y.disabled), ae = U.find((Y) => Y.ref.current === document.activeElement), ne = Wc(U, F, ae);
      ne && setTimeout(() => ne.ref.current?.focus());
    }), B = l.useCallback(
      (F, U, ae) => {
        const ne = !j.current && !ae;
        (w.value !== void 0 && w.value === U || ne) && (D(F), ne && (j.current = !0));
      },
      [w.value]
    ), q = l.useCallback(() => C?.focus(), [C]), L = l.useCallback(
      (F, U, ae) => {
        const ne = !j.current && !ae;
        (w.value !== void 0 && w.value === U || ne) && O(F);
      },
      [w.value]
    ), Q = o === "popper" ? gu : UN, ee = Q === gu ? {
      side: c,
      sideOffset: u,
      align: m,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: v,
      collisionPadding: b,
      sticky: h,
      hideWhenDetached: g,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ d.jsx(
      ch,
      {
        scope: r,
        content: C,
        viewport: S,
        onViewportChange: T,
        itemRefCallback: B,
        selectedItem: M,
        onItemLeave: q,
        itemTextRefCallback: L,
        focusSelectedItem: G,
        selectedItemText: I,
        position: o,
        isPositioned: _,
        searchRef: H,
        children: /* @__PURE__ */ d.jsx(ao, { as: YN, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          bs,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: A(s, (F) => {
              w.trigger?.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              $n,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  Q,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...y,
                    ...ee,
                    onPlaced: () => W(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: A(y.onKeyDown, (F) => {
                      const U = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !U && F.key.length === 1 && N(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let ne = $().filter((Y) => !Y.disabled).map((Y) => Y.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (ne = ne.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const Y = F.target, oe = ne.indexOf(Y);
                          ne = ne.slice(oe + 1);
                        }
                        setTimeout(() => V(ne)), F.preventDefault();
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
  }, "SelectContentImpl")
), UN = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const { __scopeSelect: r, onPlaced: o, ...s } = e, a = wn(jn, r), i = Gn(jn, r), [c, u] = l.useState(null), [m, f] = l.useState(null), p = te(n, f), v = na(r), b = l.useRef(!1), h = l.useRef(!0), { viewport: g, selectedItem: x, selectedItemText: y, focusSelectedItem: w } = i, C = l.useCallback(() => {
    if (a.trigger && a.valueNode && c && m && g && x && y) {
      const R = a.trigger.getBoundingClientRect(), M = m.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), I = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const Y = I.left - M.left, oe = D.left - Y, le = R.left - oe, be = R.width + le, Be = Math.max(be, M.width), Ye = window.innerWidth - lt, Ze = ms(oe, [
          lt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(lt, Ye - Be)
        ]);
        c.style.minWidth = be + "px", c.style.left = Ze + "px";
      } else {
        const Y = M.right - I.right, oe = window.innerWidth - D.right - Y, le = window.innerWidth - R.right - oe, be = R.width + le, Be = Math.max(be, M.width), Ye = window.innerWidth - lt, Ze = ms(oe, [
          lt,
          Math.max(lt, Ye - Be)
        ]);
        c.style.minWidth = be + "px", c.style.right = Ze + "px";
      }
      const O = v(), $ = window.innerHeight - lt * 2, _ = g.scrollHeight, W = window.getComputedStyle(m), j = parseInt(W.borderTopWidth, 10), V = parseInt(W.paddingTop, 10), G = parseInt(W.borderBottomWidth, 10), K = parseInt(W.paddingBottom, 10), E = j + V + _ + K + G, H = Math.min(x.offsetHeight * 5, E), N = window.getComputedStyle(g), B = parseInt(N.paddingTop, 10), q = parseInt(N.paddingBottom, 10), L = R.top + R.height / 2 - lt, Q = $ - L, ee = x.offsetHeight / 2, F = x.offsetTop + ee, U = j + V + F, ae = E - U;
      if (U <= L) {
        const Y = O.length > 0 && x === O[O.length - 1].ref.current;
        c.style.bottom = "0px";
        const oe = m.clientHeight - g.offsetTop - g.offsetHeight, le = Math.max(
          Q,
          ee + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Y ? q : 0) + oe + G
        ), be = U + le;
        c.style.height = be + "px";
      } else {
        const Y = O.length > 0 && x === O[0].ref.current;
        c.style.top = "0px";
        const le = Math.max(
          L,
          j + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Y ? B : 0) + ee
        ) + ae;
        c.style.height = le + "px", g.scrollTop = U - L + g.offsetTop;
      }
      c.style.margin = `${lt}px 0`, c.style.minHeight = H + "px", c.style.maxHeight = $ + "px", o?.(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    v,
    a.trigger,
    a.valueNode,
    c,
    m,
    g,
    x,
    y,
    a.dir,
    o
  ]);
  we(() => C(), [C]);
  const [P, S] = l.useState();
  we(() => {
    m && S(window.getComputedStyle(m).zIndex);
  }, [m]);
  const T = l.useCallback(
    (R) => {
      R && h.current === !0 && (C(), w?.(), h.current = !1);
    },
    [C, w]
  );
  return /* @__PURE__ */ d.jsx(
    KN,
    {
      scope: r,
      contentWrapper: c,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: T,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P
          },
          children: /* @__PURE__ */ d.jsx(
            z.div,
            {
              ...s,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), gu = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const {
    __scopeSelect: r,
    align: o = "start",
    collisionPadding: s = lt,
    ...a
  } = e, i = Fc(r);
  return /* @__PURE__ */ d.jsx(
    Bs,
    {
      ...i,
      ...a,
      ref: n,
      align: o,
      collisionPadding: s,
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
}, "SelectPopperPosition")), [KN, Lc] = Yn(jn, {}), vu = "SelectViewport", qN = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, nonce: o, ...s } = e, a = Gn(vu, r), i = Lc(vu, r), c = te(n, a.onViewportChange), u = l.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d.jsx(ta.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
        z.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
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
            ...s.style
          },
          onScroll: A(s.onScroll, (m) => {
            const f = m.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: v } = i;
            if (v?.current && p) {
              const b = Math.abs(u.current - f.scrollTop);
              if (b > 0) {
                const h = window.innerHeight - lt * 2, g = parseFloat(p.style.minHeight), x = parseFloat(p.style.height), y = Math.max(g, x);
                if (y < h) {
                  const w = y + b, C = Math.min(h, w), P = w - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (f.scrollTop = P > 0 ? P : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), XN = "SelectGroup", [QN, ZN] = Yn(XN), JN = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, ...o } = e, s = Re();
    return /* @__PURE__ */ d.jsx(QN, { scope: r, id: s, children: /* @__PURE__ */ d.jsx(z.div, { role: "group", "aria-labelledby": s, ...o, ref: n }) });
  }, "SelectGroup")
), e_ = "SelectLabel", lh = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, ...o } = e, s = ZN(e_, r);
    return /* @__PURE__ */ d.jsx(z.div, { id: s.id, ...o, ref: n });
  }, "SelectLabel")
), pi = "SelectItem", [t_, uh] = Yn(pi), dh = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const {
      __scopeSelect: r,
      value: o,
      disabled: s = !1,
      textValue: a,
      ...i
    } = e, c = wn(pi, r), u = Gn(pi, r), m = c.value === o, [f, p] = l.useState(a ?? ""), [v, b] = l.useState(!1), h = ge(
      (C) => u.itemRefCallback?.(C, o, s)
    ), g = te(n, h), x = Re(), y = l.useRef("touch"), w = /* @__PURE__ */ me(() => {
      s || (c.onValueChange(o), c.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ d.jsx(
      t_,
      {
        scope: r,
        value: o,
        disabled: s,
        textId: x,
        isSelected: m,
        onItemTextChange: l.useCallback((C) => {
          p((P) => P || (C?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          ta.ItemSlot,
          {
            scope: r,
            value: o,
            disabled: s,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              z.div,
              {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": m && v,
                "data-state": m ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: A(i.onFocus, () => b(!0)),
                onBlur: A(i.onBlur, () => b(!1)),
                onClick: A(i.onClick, () => {
                  y.current !== "mouse" && w();
                }),
                onPointerUp: A(i.onPointerUp, () => {
                  y.current === "mouse" && w();
                }),
                onPointerDown: A(i.onPointerDown, (C) => {
                  y.current = C.pointerType;
                }),
                onPointerMove: A(i.onPointerMove, (C) => {
                  y.current = C.pointerType, s ? u.onItemLeave?.() : y.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: A(i.onPointerLeave, (C) => {
                  C.currentTarget === document.activeElement && u.onItemLeave?.();
                }),
                onKeyDown: A(i.onKeyDown, (C) => {
                  s || C.target !== C.currentTarget || u.searchRef?.current !== "" && C.key === " " || (DN.includes(C.key) && w(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), Ho = "SelectItemText", n_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, className: o, style: s, ...a } = e, i = wn(Ho, r), c = Gn(Ho, r), u = uh(Ho, r), m = ON(Ho, r), [f, p] = l.useState(null), v = ge(
      (w) => c.itemTextRefCallback?.(w, u.value, u.disabled)
    ), b = te(
      n,
      p,
      u.onItemTextChange,
      v
    ), h = f?.textContent, g = l.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: u.value, disabled: u.disabled, children: h }, u.value),
      [u.disabled, u.value, h]
    ), { onNativeOptionAdd: x, onNativeOptionRemove: y } = m;
    return we(() => (x(g), () => y(g)), [x, y, g]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(z.span, { id: u.textId, ...a, ref: b }),
      u.isSelected && i.valueNode && !i.valueNodeHasChildren && !Po(i.value) ? Fn.createPortal(a.children, i.valueNode) : null
    ] });
  }, "SelectItemText")
), r_ = "SelectItemIndicator", o_ = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, ...o } = e;
    return uh(r_, r).isSelected ? /* @__PURE__ */ d.jsx(z.span, { "aria-hidden": !0, ...o, ref: n }) : null;
  }, "SelectItemIndicator")
), bu = "SelectScrollUpButton", fh = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const r = Gn(bu, e.__scopeSelect), o = Lc(bu, e.__scopeSelect), [s, a] = l.useState(!1), i = te(n, o.onScrollButtonChange);
  return we(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const m = u.scrollTop > 0;
        a(m);
      };
      me(c, "handleScroll");
      const u = r.viewport;
      return c(), u.addEventListener("scroll", c), () => u.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    ph,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: u } = r;
        c && u && (c.scrollTop = c.scrollTop - u.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), xu = "SelectScrollDownButton", mh = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const r = Gn(xu, e.__scopeSelect), o = Lc(xu, e.__scopeSelect), [s, a] = l.useState(!1), i = te(n, o.onScrollButtonChange);
  return we(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const m = u.scrollHeight - u.clientHeight, f = Math.ceil(u.scrollTop) < m;
        a(f);
      };
      me(c, "handleScroll");
      const u = r.viewport;
      return c(), u.addEventListener("scroll", c), () => u.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    ph,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: u } = r;
        c && u && (c.scrollTop = c.scrollTop + u.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), ph = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ me(function(e, n) {
  const { __scopeSelect: r, onAutoScroll: o, ...s } = e, a = Gn("SelectScrollButton", r), i = l.useRef(null), c = na(r), u = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => u(), [u]), we(() => {
    c().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ d.jsx(
    z.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: n,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: A(s.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerMove: A(s.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(o, 50));
      }),
      onPointerLeave: A(s.onPointerLeave, () => {
        u();
      })
    }
  );
}, "SelectScrollButtonImpl")), hh = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function(e, n) {
    const { __scopeSelect: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(z.div, { "aria-hidden": !0, ...o, ref: n });
  }, "SelectSeparator")
), s_ = "SelectBubbleInput", a_ = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ me(function({ __scopeSelect: e, ...n }, r) {
    const o = wn(s_, e), { value: s, onValueChange: a, required: i, disabled: c, name: u, autoComplete: m, form: f } = o, { nativeOptions: p, nativeSelectKey: v } = o, b = l.useRef(null), h = te(r, b), g = s ?? "", x = Pc(g), y = Array.from(p).some(
      (w) => (w.props.value ?? "") === ""
    );
    return l.useEffect(() => {
      const w = b.current;
      if (!w) return;
      const C = window.HTMLSelectElement.prototype, S = Object.getOwnPropertyDescriptor(
        C,
        "value"
      ).set;
      if (x !== g && S) {
        const T = new Event("change", { bubbles: !0 });
        S.call(w, g), w.dispatchEvent(T);
      }
    }, [x, g]), /* @__PURE__ */ d.jsxs(
      z.select,
      {
        "aria-hidden": !0,
        required: i,
        tabIndex: -1,
        name: u,
        autoComplete: m,
        disabled: c,
        form: f,
        onChange: (w) => a(w.target.value),
        ...n,
        style: { ...Sp, ...n.style },
        ref: h,
        defaultValue: g,
        children: [
          Po(s) && !y ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
          Array.from(p)
        ]
      },
      v
    );
  }, "SelectBubbleInput")
);
function gh(t) {
  return typeof t == "function";
}
me(gh, "isFunction");
function Po(t) {
  return t === "" || t === void 0;
}
me(Po, "shouldShowPlaceholder");
function $c(t) {
  const e = ge(t), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (a) => {
      const i = n.current + a;
      e(i), (/* @__PURE__ */ me((function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }), "updateSearch"))(i);
    },
    [e]
  ), s = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
me($c, "useTypeaheadSearch");
function Wc(t, e, n) {
  const o = e.length > 1 && Array.from(e).every((u) => u === e[0]) ? e[0] : e, s = n ? t.indexOf(n) : -1;
  let a = vh(t, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
me(Wc, "findNextItem");
function vh(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
me(vh, "wrapArray");
const bh = AN, KO = JN, xh = LN, Bc = l.forwardRef(({ className: t, children: e, isLoading: n = !1, ...r }, o) => /* @__PURE__ */ d.jsxs(
  ah,
  {
    ref: o,
    className: k(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...r,
    children: [
      e,
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-1", children: [
        n && /* @__PURE__ */ d.jsx(Vr, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ d.jsx($N, { asChild: !0, children: /* @__PURE__ */ d.jsx(lr, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Bc.displayName = ah.displayName;
const wh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  fh,
  {
    ref: n,
    className: k(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ d.jsx(Ag, { className: "h-4 w-4" })
  }
));
wh.displayName = fh.displayName;
const yh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  mh,
  {
    ref: n,
    className: k(
      "flex cursor-default items-center justify-center py-1",
      t
    ),
    ...e,
    children: /* @__PURE__ */ d.jsx(lr, { className: "h-4 w-4" })
  }
));
yh.displayName = mh.displayName;
const Vc = l.forwardRef(({ className: t, children: e, position: n = "popper", ...r }, o) => /* @__PURE__ */ d.jsx(HN, { children: /* @__PURE__ */ d.jsxs(
  ih,
  {
    ref: o,
    className: k(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx(wh, {}),
      /* @__PURE__ */ d.jsx(
        qN,
        {
          className: k(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ d.jsx(yh, {})
    ]
  }
) }));
Vc.displayName = ih.displayName;
const i_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  lh,
  {
    ref: n,
    className: k("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...e
  }
));
i_.displayName = lh.displayName;
const ps = l.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ d.jsxs(
  dh,
  {
    ref: r,
    className: k(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(o_, { children: /* @__PURE__ */ d.jsx(ro, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d.jsx(n_, { children: e })
    ]
  }
));
ps.displayName = dh.displayName;
const c_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  hh,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
c_.displayName = hh.displayName;
const qO = ({
  name: t,
  label: e,
  placeholder: n,
  options: r,
  helpText: o,
  isLoading: s,
  ...a
}) => {
  const i = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: i.control,
      name: t,
      render: ({ field: c }) => /* @__PURE__ */ d.jsxs(vn, { children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsxs(
          bh,
          {
            onValueChange: c.onChange,
            value: c.value,
            defaultValue: c.value,
            ...a,
            children: [
              /* @__PURE__ */ d.jsx(Pr, { children: /* @__PURE__ */ d.jsx(Bc, { isLoading: s, children: /* @__PURE__ */ d.jsx(xh, { placeholder: n }) }) }),
              /* @__PURE__ */ d.jsx(Vc, { children: r.map((u) => /* @__PURE__ */ d.jsx(ps, { value: u.value, children: u.label }, u.value)) })
            ]
          }
        ),
        !!o && /* @__PURE__ */ d.jsx(Cp, { children: o }),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
};
var l_ = Object.defineProperty, Ch = (t, e) => l_(t, "name", { value: e, configurable: !0 }), wu = "horizontal", u_ = ["horizontal", "vertical"], d_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Ch(function(e, n) {
    const { decorative: r, orientation: o = wu, ...s } = e, a = Sh(o) ? o : wu, c = r ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
    return /* @__PURE__ */ d.jsx(
      z.div,
      {
        "data-orientation": a,
        ...c,
        ...s,
        ref: n
      }
    );
  }, "Separator")
);
function Sh(t) {
  return u_.includes(t);
}
Ch(Sh, "isValidOrientation");
var Ph = d_;
const Th = l.forwardRef(
  ({ className: t, orientation: e = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d.jsx(
    Ph,
    {
      ref: o,
      decorative: n,
      orientation: e,
      className: k(
        "shrink-0 bg-border",
        e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...r
    }
  )
);
Th.displayName = Ph.displayName;
const XO = ys, QO = Li, ZO = br, f_ = Cs, Rh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  gr,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: n
  }
));
Rh.displayName = gr.displayName;
const m_ = _t(
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
), p_ = l.forwardRef(({ side: t = "right", className: e, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(f_, { children: [
  /* @__PURE__ */ d.jsx(Rh, {}),
  /* @__PURE__ */ d.jsxs(
    vr,
    {
      ref: o,
      className: k(m_({ side: t }), e),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsxs(br, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ d.jsx(yi, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
p_.displayName = vr.displayName;
const h_ = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      t
    ),
    ...e
  }
);
h_.displayName = "SheetHeader";
const g_ = ({
  className: t,
  ...e
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...e
  }
);
g_.displayName = "SheetFooter";
const v_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  io,
  {
    ref: n,
    className: k("text-lg font-semibold text-foreground", t),
    ...e
  }
));
v_.displayName = io.displayName;
const b_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  co,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", t),
    ...e
  }
));
b_.displayName = co.displayName;
function x_({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: k("animate-pulse rounded-md bg-muted", t),
      ...e
    }
  );
}
var w_ = Object.defineProperty, an = (t, e) => w_(t, "name", { value: e, configurable: !0 }), Hc = "Switch", [y_, JO] = /* @__PURE__ */ Me(Hc), [C_, zc] = y_(Hc);
function Eh(t) {
  const {
    __scopeSwitch: e,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: u,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = t, [p, v] = Ae({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Hc
  }), [b, h] = l.useState(null), [g, x] = l.useState(null), y = l.useRef(!1), [w, C] = l.useReducer(
    (T) => T + 1,
    0
  ), P = b ? !!a || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: p,
    setChecked: v,
    disabled: s,
    control: b,
    setControl: h,
    name: i,
    form: a,
    value: m,
    hasConsumerStoppedPropagationRef: y,
    userInteractionCount: w,
    onUserInteraction: C,
    required: u,
    defaultChecked: o,
    isFormControl: P,
    bubbleInput: g,
    setBubbleInput: x
  };
  return /* @__PURE__ */ d.jsx(C_, { scope: e, ...S, children: kh(f) ? f(S) : r });
}
an(Eh, "SwitchProvider");
var S_ = "SwitchTrigger", P_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ an(function({ __scopeSwitch: e, onClick: n, ...r }, o) {
    const {
      control: s,
      form: a,
      value: i,
      disabled: c,
      checked: u,
      required: m,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: v,
      onUserInteraction: b,
      isFormControl: h,
      bubbleInput: g
    } = zc(S_, e), x = te(o, f), y = l.useRef(u);
    return l.useEffect(() => {
      const w = a ? s?.ownerDocument.getElementById(a) : s?.form;
      if (w instanceof HTMLFormElement) {
        const C = /* @__PURE__ */ an(() => p(y.current), "reset");
        return w.addEventListener("reset", C), () => w.removeEventListener("reset", C);
      }
    }, [s, a, p]), /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-required": m,
        "data-state": Yc(u),
        "data-disabled": c ? "" : void 0,
        disabled: c,
        value: i,
        ...r,
        ref: x,
        onClick: A(n, (w) => {
          b(), p((C) => !C), g && h && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
        })
      }
    );
  }, "SwitchTrigger")
), Mh = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ an(function(e, n) {
    const {
      __scopeSwitch: r,
      name: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: u,
      onCheckedChange: m,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ d.jsx(
      Eh,
      {
        __scopeSwitch: r,
        checked: s,
        defaultChecked: a,
        disabled: c,
        required: i,
        onCheckedChange: m,
        name: o,
        form: f,
        value: u,
        internal_do_not_use_render: ({ isFormControl: v }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            P_,
            {
              ...p,
              ref: n,
              __scopeSwitch: r
            }
          ),
          v && /* @__PURE__ */ d.jsx(
            M_,
            {
              __scopeSwitch: r
            }
          )
        ] })
      }
    );
  }, "Switch")
), T_ = "SwitchThumb", R_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ an(function(e, n) {
    const { __scopeSwitch: r, ...o } = e, s = zc(T_, r);
    return /* @__PURE__ */ d.jsx(
      z.span,
      {
        "data-state": Yc(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "SwitchThumb")
), E_ = "SwitchBubbleInput", M_ = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ an(function({ __scopeSwitch: e, onClick: n, ...r }, o) {
    const {
      control: s,
      hasConsumerStoppedPropagationRef: a,
      userInteractionCount: i,
      checked: c,
      defaultChecked: u,
      required: m,
      disabled: f,
      name: p,
      value: v,
      form: b,
      bubbleInput: h,
      setBubbleInput: g
    } = zc(E_, e), x = te(o, g), y = po(s), w = l.useRef(!1), C = l.useRef(c), P = l.useRef(i);
    l.useEffect(() => {
      const T = h;
      if (!T) return;
      const R = window.HTMLInputElement.prototype, D = Object.getOwnPropertyDescriptor(
        R,
        "checked"
      ).set, I = i !== P.current;
      P.current = i;
      const O = C.current !== c;
      C.current = c;
      const $ = !(I && a.current);
      if (O && D) {
        w.current = !I;
        const _ = new Event("click", { bubbles: $ });
        D.call(T, c), T.dispatchEvent(_), w.current = !1;
      }
    }, [h, c, a, i]);
    const S = l.useRef(c);
    return /* @__PURE__ */ d.jsx(
      z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: u ?? S.current,
        required: m,
        disabled: f,
        name: p,
        value: v,
        form: b,
        ...r,
        tabIndex: -1,
        ref: x,
        onClick: A(n, (T) => {
          w.current && T.stopPropagation();
        }),
        style: {
          ...r.style,
          ...y,
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
  }, "SwitchBubbleInput")
);
function kh(t) {
  return typeof t == "function";
}
an(kh, "isFunction");
function Yc(t) {
  return t ? "checked" : "unchecked";
}
an(Yc, "getState");
const k_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Mh,
  {
    className: k(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      t
    ),
    ...e,
    ref: n,
    children: /* @__PURE__ */ d.jsx(
      R_,
      {
        className: k(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
k_.displayName = Mh.displayName;
const D_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: n,
    className: k("w-full caption-bottom text-sm", t),
    ...e
  }
) }));
D_.displayName = "Table";
const N_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "thead",
  {
    ref: n,
    className: k("[&_tr]:border-b bg-muted/50", t),
    ...e
  }
));
N_.displayName = "TableHeader";
const __ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: n,
    className: k("[&_tr:last-child]:border-0", t),
    ...e
  }
));
__.displayName = "TableBody";
const I_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: k(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      t
    ),
    ...e
  }
));
I_.displayName = "TableFooter";
const O_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: n,
    className: k(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      t
    ),
    ...e
  }
));
O_.displayName = "TableRow";
const A_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: n,
    className: k(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t
    ),
    ...e
  }
));
A_.displayName = "TableHead";
const j_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: n,
    className: k(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t
    ),
    ...e
  }
));
j_.displayName = "TableCell";
const F_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: k("mt-4 text-sm text-muted-foreground", t),
    ...e
  }
));
F_.displayName = "TableCaption";
var L_ = Object.defineProperty, Rr = (t, e) => L_(t, "name", { value: e, configurable: !0 }), Gc = "Tabs", [$_, eA] = /* @__PURE__ */ Me(Gc, [
  hn
]), Dh = hn(), [W_, Uc] = $_(Gc), B_ = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rr(function(e, n) {
    const {
      __scopeTabs: r,
      value: o,
      onValueChange: s,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: c,
      activationMode: u = "automatic",
      ...m
    } = e, f = Dt(c), [p, v] = Ae({
      prop: o,
      onChange: s,
      defaultProp: a ?? "",
      caller: Gc
    });
    return /* @__PURE__ */ d.jsx(
      W_,
      {
        scope: r,
        baseId: Re(),
        value: p,
        onValueChange: v,
        orientation: i,
        dir: f,
        activationMode: u,
        children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            dir: f,
            "data-orientation": i,
            ...m,
            ref: n
          }
        )
      }
    );
  }, "Tabs")
), V_ = "TabsList", H_ = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Rr(function(e, n) {
    const { __scopeTabs: r, loop: o = !0, ...s } = e, a = Uc(V_, r), i = Dh(r);
    return /* @__PURE__ */ d.jsx(
      zs,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ d.jsx(
          z.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...s,
            ref: n
          }
        )
      }
    );
  }, "TabsList")
), z_ = "TabsTrigger", Y_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Rr(function(e, n) {
    const { __scopeTabs: r, value: o, disabled: s = !1, ...a } = e, i = Uc(z_, r), c = Dh(r), u = Kc(i.baseId, o), m = qc(i.baseId, o), f = o === i.value;
    return /* @__PURE__ */ d.jsx(
      Ys,
      {
        asChild: !0,
        ...c,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ d.jsx(
          z.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": m,
            "data-state": f ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: u,
            ...a,
            ref: n,
            onMouseDown: A(e.onMouseDown, (p) => {
              !s && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(o) : p.preventDefault();
            }),
            onKeyDown: A(e.onKeyDown, (p) => {
              s || p.target !== p.currentTarget || [" ", "Enter"].includes(p.key) && i.onValueChange(o);
            }),
            onFocus: A(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !f && !s && p && i.onValueChange(o);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), G_ = "TabsContent", U_ = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Rr(function(e, n) {
    const { __scopeTabs: r, value: o, forceMount: s, children: a, ...i } = e, c = Uc(G_, r), u = Kc(c.baseId, o), m = qc(c.baseId, o), f = o === c.value, p = l.useRef(f);
    return l.useEffect(() => {
      const v = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(v);
    }, []), /* @__PURE__ */ d.jsx(Ee, { present: s || f, children: ({ present: v }) => /* @__PURE__ */ d.jsx(
      z.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !v,
        id: m,
        tabIndex: 0,
        ...i,
        ref: n,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: v && a
      }
    ) });
  }, "TabsContent")
);
function Kc(t, e) {
  return `${t}-trigger-${e}`;
}
Rr(Kc, "makeTriggerId");
function qc(t, e) {
  return `${t}-content-${e}`;
}
Rr(qc, "makeContentId");
var K_ = B_, Nh = H_, _h = Y_, Ih = U_;
const tA = K_, q_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Nh,
  {
    ref: n,
    className: k(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
q_.displayName = Nh.displayName;
const X_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  _h,
  {
    ref: n,
    className: k(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
X_.displayName = _h.displayName;
const Q_ = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Ih,
  {
    ref: n,
    className: k(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
Q_.displayName = Ih.displayName;
const Oh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  "textarea",
  {
    className: k(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: n,
    ...e
  }
));
Oh.displayName = "Textarea";
const Z_ = ({
  name: t,
  label: e,
  placeholder: n,
  ...r
}) => {
  const o = ln();
  return /* @__PURE__ */ d.jsx(
    zn,
    {
      control: o.control,
      name: t,
      render: ({ field: s }) => /* @__PURE__ */ d.jsxs(vn, { children: [
        !!e && /* @__PURE__ */ d.jsx(bn, { children: e }),
        /* @__PURE__ */ d.jsx(Pr, { children: /* @__PURE__ */ d.jsx(Oh, { placeholder: n, ...r, ...s }) }),
        /* @__PURE__ */ d.jsx(xn, {})
      ] })
    }
  );
};
Z_.displayName = "TextareaForm";
var J_ = Object.defineProperty, Te = (t, e) => J_(t, "name", { value: e, configurable: !0 }), Ah = "ToastProvider", [Xc, jh, eI] = /* @__PURE__ */ un("Toast"), [Fh, nA] = /* @__PURE__ */ Me("Toast", [eI]), [tI, ra] = Fh(Ah), nI = /* @__PURE__ */ Te((t) => {
  const {
    __scopeToast: e,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    announcerContainer: a,
    children: i
  } = t, [c, u] = l.useState(null), [m, f] = l.useState(0), p = l.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Ah}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(Xc.Provider, { scope: e, children: /* @__PURE__ */ d.jsx(
    tI,
    {
      scope: e,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: m,
      viewport: c,
      onViewportChange: u,
      onToastAdd: l.useCallback(() => f((v) => v + 1), []),
      onToastRemove: l.useCallback(() => f((v) => v - 1), []),
      isClosePausedRef: p,
      announcerContainer: a,
      children: i
    }
  ) });
}, "ToastProvider"), rI = "ToastViewport", oI = ["F8"], hi = "toast.viewportPause", gi = "toast.viewportResume", sI = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Te(function(e, n) {
    const {
      __scopeToast: r,
      hotkey: o = oI,
      label: s = "Notifications ({hotkey})",
      ...a
    } = e, i = ra(rI, r), c = jh(r), u = l.useRef(null), m = l.useRef(null), f = l.useRef(null), p = l.useRef(null), v = te(n, p, i.onViewportChange), b = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = i.toastCount > 0;
    l.useEffect(() => {
      const x = /* @__PURE__ */ Te((y) => {
        o.length !== 0 && o.every((C) => y[C] || y.code === C) && p.current?.focus();
      }, "handleKeyDown");
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [o]), l.useEffect(() => {
      const x = u.current, y = p.current;
      if (h && x && y) {
        const w = /* @__PURE__ */ Te(() => {
          if (!i.isClosePausedRef.current) {
            const T = new CustomEvent(hi);
            y.dispatchEvent(T), i.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ Te(() => {
          if (i.isClosePausedRef.current) {
            const T = new CustomEvent(gi);
            y.dispatchEvent(T), i.isClosePausedRef.current = !1;
          }
        }, "handleResume"), P = /* @__PURE__ */ Te((T) => {
          !x.contains(T.relatedTarget) && C();
        }, "handleFocusOutResume"), S = /* @__PURE__ */ Te(() => {
          x.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return x.addEventListener("focusin", w), x.addEventListener("focusout", P), x.addEventListener("pointermove", w), x.addEventListener("pointerleave", S), window.addEventListener("blur", w), window.addEventListener("focus", C), () => {
          x.removeEventListener("focusin", w), x.removeEventListener("focusout", P), x.removeEventListener("pointermove", w), x.removeEventListener("pointerleave", S), window.removeEventListener("blur", w), window.removeEventListener("focus", C);
        };
      }
    }, [h, i.isClosePausedRef]);
    const g = l.useCallback(
      ({ tabbingDirection: x }) => {
        const w = c().map((C) => {
          const P = C.ref.current, S = [P, ...Vh(P)];
          return x === "forwards" ? S : S.reverse();
        });
        return (x === "forwards" ? w.reverse() : w).flat();
      },
      [c]
    );
    return l.useEffect(() => {
      const x = p.current;
      if (x) {
        const y = /* @__PURE__ */ Te((w) => {
          const C = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !C) {
            const S = document.activeElement, T = w.shiftKey;
            if (w.target === x && T) {
              m.current?.focus();
              return;
            }
            const D = g({ tabbingDirection: T ? "backwards" : "forwards" }), I = D.findIndex((O) => O === S);
            Qo(D.slice(I + 1)) ? w.preventDefault() : T ? m.current?.focus() : f.current?.focus();
          }
        }, "handleKeyDown");
        return x.addEventListener("keydown", y), () => x.removeEventListener("keydown", y);
      }
    }, [c, g]), /* @__PURE__ */ d.jsxs(
      Jb,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", b),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h && /* @__PURE__ */ d.jsx(
            yu,
            {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const x = g({
                  tabbingDirection: "forwards"
                });
                Qo(x);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(Xc.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(z.ol, { tabIndex: -1, ...a, ref: v }) }),
          h && /* @__PURE__ */ d.jsx(
            yu,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const x = g({
                  tabbingDirection: "backwards"
                });
                Qo(x);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), aI = "ToastFocusProxy", yu = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Te(function(e, n) {
    const { __scopeToast: r, onFocusFromOutsideViewport: o, ...s } = e, a = ra(aI, r);
    return /* @__PURE__ */ d.jsx(
      Tc,
      {
        tabIndex: 0,
        ...s,
        ref: n,
        style: { position: "fixed" },
        onFocus: (i) => {
          const c = i.relatedTarget;
          !a.viewport?.contains(c) && o();
        }
      }
    );
  }, "ToastFocusProxy")
), oa = "Toast", iI = "toast.swipeStart", cI = "toast.swipeMove", lI = "toast.swipeCancel", uI = "toast.swipeEnd", dI = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Te(function(e, n) {
    const { forceMount: r, open: o, defaultOpen: s, onOpenChange: a, ...i } = e, [c, u] = Ae({
      prop: o,
      defaultProp: s ?? !0,
      onChange: a,
      caller: oa
    });
    return /* @__PURE__ */ d.jsx(Ee, { present: r || c, children: /* @__PURE__ */ d.jsx(
      pI,
      {
        open: c,
        ...i,
        ref: n,
        onClose: () => u(!1),
        onPause: ge(e.onPause),
        onResume: ge(e.onResume),
        onSwipeStart: A(e.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: A(e.onSwipeMove, (m) => {
          const { x: f, y: p } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: A(e.onSwipeCancel, (m) => {
          m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: A(e.onSwipeEnd, (m) => {
          const { x: f, y: p } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), u(!1);
        })
      }
    ) });
  }, "Toast")
), [fI, mI] = Fh(oa, {
  onClose() {
  }
}), pI = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Te(function(e, n) {
    const {
      __scopeToast: r,
      type: o = "foreground",
      duration: s,
      open: a,
      onClose: i,
      onEscapeKeyDown: c,
      onPause: u,
      onResume: m,
      onSwipeStart: f,
      onSwipeMove: p,
      onSwipeCancel: v,
      onSwipeEnd: b,
      ...h
    } = e, g = ra(oa, r), x = jh(r), [y, w] = l.useState(null), C = te(n, w), P = l.useRef(null), S = l.useRef(null), T = s || g.duration, R = l.useRef(0), M = l.useRef(T), D = l.useRef(0), { onToastAdd: I, onToastRemove: O } = g, $ = ge(() => {
      y?.contains(document.activeElement) && g.viewport?.focus(), i();
    }), _ = l.useCallback(
      (j) => {
        !j || j === 1 / 0 || (window.clearTimeout(D.current), R.current = (/* @__PURE__ */ new Date()).getTime(), D.current = window.setTimeout($, j));
      },
      [$]
    );
    l.useEffect(() => {
      const j = g.viewport;
      if (j) {
        const V = /* @__PURE__ */ Te(() => {
          _(M.current), m?.();
        }, "handleResume"), G = /* @__PURE__ */ Te(() => {
          const K = (/* @__PURE__ */ new Date()).getTime() - R.current;
          M.current = M.current - K, window.clearTimeout(D.current), u?.();
        }, "handlePause");
        return j.addEventListener(hi, G), j.addEventListener(gi, V), () => {
          j.removeEventListener(hi, G), j.removeEventListener(gi, V);
        };
      }
    }, [g.viewport, T, u, m, _]), l.useEffect(() => {
      a && !g.isClosePausedRef.current && _(T);
    }, [a, T, g.isClosePausedRef, _]), l.useEffect(() => () => {
      window.clearTimeout(D.current);
    }, []), l.useEffect(() => (I(), () => O()), [I, O]);
    const W = l.useMemo(() => y ? Qc(y) : null, [y]);
    return g.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      W && /* @__PURE__ */ d.jsx(
        hI,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": o === "foreground" ? "assertive" : "polite",
          children: W
        }
      ),
      /* @__PURE__ */ d.jsx(fI, { scope: r, onClose: $, children: Fn.createPortal(
        /* @__PURE__ */ d.jsx(Xc.ItemSlot, { scope: r, children: /* @__PURE__ */ d.jsx(
          Zb,
          {
            asChild: !0,
            onEscapeKeyDown: A(c, (j) => {
              x().some(
                (G) => G.ref.current?.contains(j.target)
              ) || $();
            }),
            children: /* @__PURE__ */ d.jsx(
              z.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": g.swipeDirection,
                ...h,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: A(e.onKeyDown, (j) => {
                  j.key === "Escape" && (c?.(j.nativeEvent), j.nativeEvent.defaultPrevented || $());
                }),
                onPointerDown: A(e.onPointerDown, (j) => {
                  j.button === 0 && (P.current = { x: j.clientX, y: j.clientY });
                }),
                onPointerMove: A(e.onPointerMove, (j) => {
                  if (!P.current) return;
                  const V = j.clientX - P.current.x, G = j.clientY - P.current.y, K = !!S.current, E = ["left", "right"].includes(g.swipeDirection), H = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, N = E ? H(0, V) : 0, B = E ? 0 : H(0, G), q = j.pointerType === "touch" ? 10 : 2, L = { x: N, y: B }, Q = { originalEvent: j, delta: L };
                  K ? (S.current = L, $r(cI, p, Q, {
                    discrete: !1
                  })) : Cu(L, g.swipeDirection, q) ? (S.current = L, $r(iI, f, Q, {
                    discrete: !1
                  }), j.target.setPointerCapture(j.pointerId)) : (Math.abs(V) > q || Math.abs(G) > q) && (P.current = null);
                }),
                onPointerUp: A(e.onPointerUp, (j) => {
                  const V = S.current, G = j.target;
                  if (G.hasPointerCapture(j.pointerId) && G.releasePointerCapture(j.pointerId), S.current = null, P.current = null, V) {
                    const K = j.currentTarget, E = { originalEvent: j, delta: V };
                    Cu(V, g.swipeDirection, g.swipeThreshold) ? $r(uI, b, E, {
                      discrete: !0
                    }) : $r(
                      lI,
                      v,
                      E,
                      {
                        discrete: !0
                      }
                    ), K.addEventListener("click", (H) => H.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        g.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), hI = /* @__PURE__ */ Te((t) => {
  const { __scopeToast: e, children: n, ...r } = t, o = ra(oa, e), [s, a] = l.useState(!1), [i, c] = l.useState(!1);
  return Wh(() => a(!0)), l.useEffect(() => {
    const u = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), i ? null : /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ d.jsx(Tc, { ...r, children: s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), gI = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Te(function(e, n) {
    const { __scopeToast: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(z.div, { ...o, ref: n });
  }, "ToastTitle")
), vI = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Te(function(e, n) {
    const { __scopeToast: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(z.div, { ...o, ref: n });
  }, "ToastDescription")
), bI = "ToastAction", xI = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Te(function(e, n) {
    const { altText: r, ...o } = e;
    return r.trim() ? /* @__PURE__ */ d.jsx($h, { altText: r, asChild: !0, children: /* @__PURE__ */ d.jsx(Lh, { ...o, ref: n }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${bI}\`. Expected non-empty \`string\`.`
    ), null);
  }, "ToastAction")
), wI = "ToastClose", Lh = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ Te(function(e, n) {
    const { __scopeToast: r, ...o } = e, s = mI(wI, r);
    return /* @__PURE__ */ d.jsx($h, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: A(e.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), $h = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ Te(function(e, n) {
  const { __scopeToast: r, altText: o, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    z.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": o || void 0,
      ...s,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function Qc(t) {
  const e = [];
  return Array.from(t.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && e.push(r.textContent), Bh(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && e.push(a);
        } else
          e.push(...Qc(r));
    }
  }), e;
}
Te(Qc, "getAnnounceTextContent");
function $r(t, e, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: n });
  e && o.addEventListener(t, e, { once: !0 }), r ? ur(o, s) : o.dispatchEvent(s);
}
Te($r, "handleAndDispatchCustomEvent");
var Cu = /* @__PURE__ */ Te((t, e, n = 0) => {
  const r = Math.abs(t.x), o = Math.abs(t.y), s = r > o;
  return e === "left" || e === "right" ? s && r > n : !s && o > n;
}, "isDeltaInDirection");
function Wh(t = () => {
}) {
  const e = ge(t);
  we(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(e)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [e]);
}
Te(Wh, "useNextFrame");
function Bh(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
Te(Bh, "isHTMLElement");
function Vh(t) {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Te((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) e.push(n.currentNode);
  return e;
}
Te(Vh, "getTabbableCandidates");
function Qo(t) {
  const e = document.activeElement;
  return t.some((n) => n === e ? !0 : (n.focus(), document.activeElement !== e));
}
Te(Qo, "focusFirst");
var yI = nI, Hh = sI, zh = dI, Yh = gI, Gh = vI, Uh = xI, Kh = Lh;
const CI = yI, SI = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, qh = l.forwardRef(({ className: t, position: e = "bottom-right", ...n }, r) => /* @__PURE__ */ d.jsx(
  Hh,
  {
    ref: r,
    className: k(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${SI[e]}`,
      t
    ),
    ...n
  }
));
qh.displayName = Hh.displayName;
const PI = _t(
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
), Xh = l.forwardRef(({ className: t, variant: e, ...n }, r) => /* @__PURE__ */ d.jsx(
  zh,
  {
    ref: r,
    className: k(PI({ variant: e }), t),
    ...n
  }
));
Xh.displayName = zh.displayName;
const TI = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Uh,
  {
    ref: n,
    className: k(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...e
  }
));
TI.displayName = Uh.displayName;
const Qh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Kh,
  {
    ref: n,
    className: k(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ d.jsx(yi, { className: "h-4 w-4" })
  }
));
Qh.displayName = Kh.displayName;
const Zh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Yh,
  {
    ref: n,
    className: k("text-sm font-semibold", t),
    ...e
  }
));
Zh.displayName = Yh.displayName;
const Jh = l.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ d.jsx(
  Gh,
  {
    ref: n,
    className: k("text-sm opacity-90", t),
    ...e
  }
));
Jh.displayName = Gh.displayName;
const RI = 5, EI = 1e4;
let Aa = 0;
function MI() {
  return Aa = (Aa + 1) % Number.MAX_SAFE_INTEGER, Aa.toString();
}
const ja = /* @__PURE__ */ new Map(), Su = (t) => {
  if (ja.has(t))
    return;
  const e = setTimeout(() => {
    ja.delete(t), Br({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, EI);
  ja.set(t, e);
}, kI = (t, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, RI)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map(
          (n) => n.id === e.toast.id ? { ...n, ...e.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = e;
      return n ? Su(n) : t.toasts.forEach((r) => {
        Su(r.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((n) => n.id !== e.toastId)
      };
  }
}, Zo = [];
let Jo = { toasts: [] };
function Br(t) {
  Jo = kI(Jo, t), Zo.forEach((e) => {
    e(Jo);
  });
}
function DI({ ...t }) {
  const e = MI(), n = (o) => Br({
    type: "UPDATE_TOAST",
    toast: { ...o, id: e }
  }), r = () => Br({ type: "DISMISS_TOAST", toastId: e });
  return Br({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: e,
    dismiss: r,
    update: n
  };
}
function NI() {
  const [t, e] = l.useState(Jo);
  return l.useEffect(() => (Zo.push(e), () => {
    const n = Zo.indexOf(e);
    n > -1 && Zo.splice(n, 1);
  }), [t]), {
    ...t,
    toast: DI,
    dismiss: (n) => Br({ type: "DISMISS_TOAST", toastId: n })
  };
}
function rA() {
  const { toasts: t } = NI();
  return /* @__PURE__ */ d.jsxs(CI, { children: [
    t.map(function({ id: e, title: n, description: r, action: o, ...s }) {
      return /* @__PURE__ */ d.jsxs(Xh, { ...s, className: "mt-2", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ d.jsx(Zh, { children: n }),
          r && /* @__PURE__ */ d.jsx(Jh, { children: r })
        ] }),
        o,
        /* @__PURE__ */ d.jsx(Qh, {})
      ] }, e);
    }),
    /* @__PURE__ */ d.jsx(qh, {})
  ] });
}
var _I = Object.defineProperty, II = (t, e) => _I(t, "name", { value: e, configurable: !0 }), OI = "Toggle", eg = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ II(function(e, n) {
    const { pressed: r, defaultPressed: o, onPressedChange: s, ...a } = e, [i, c] = Ae({
      prop: r,
      onChange: s,
      defaultProp: o ?? !1,
      caller: OI
    });
    return /* @__PURE__ */ d.jsx(
      z.button,
      {
        type: "button",
        "aria-pressed": i,
        "data-state": i ? "on" : "off",
        "data-disabled": e.disabled ? "" : void 0,
        ...a,
        ref: n,
        onClick: A(e.onClick, () => {
          e.disabled || c(!i);
        })
      }
    );
  }, "Toggle")
), tg = eg;
const ng = _t(
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
), AI = l.forwardRef(({ className: t, variant: e, size: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  tg,
  {
    ref: o,
    className: k(ng({ variant: e, size: n, className: t })),
    ...r
  }
));
AI.displayName = tg.displayName;
var jI = Object.defineProperty, cn = (t, e) => jI(t, "name", { value: e, configurable: !0 }), Er = "ToggleGroup", [rg, oA] = /* @__PURE__ */ Me(Er, [
  hn
]), og = hn(), sg = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ cn(function(e, n) {
  const { type: r, ...o } = e;
  if (r === "single") {
    const s = o;
    return /* @__PURE__ */ d.jsx(FI, { role: "radiogroup", ...s, ref: n });
  }
  if (r === "multiple") {
    const s = o;
    return /* @__PURE__ */ d.jsx(LI, { role: "toolbar", ...s, ref: n });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Er}\``);
}, "ToggleGroup")), [ag, ig] = rg(Er), FI = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ cn(function(e, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: s = /* @__PURE__ */ cn(() => {
    }, "onValueChange"),
    ...a
  } = e, [i, c] = Ae({
    prop: r,
    defaultProp: o ?? "",
    onChange: s,
    caller: Er
  });
  return /* @__PURE__ */ d.jsx(
    ag,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: l.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: c,
      onItemDeactivate: l.useCallback(() => c(""), [c]),
      children: /* @__PURE__ */ d.jsx(cg, { ...a, ref: n })
    }
  );
}, "ToggleGroupImplSingle")), LI = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ cn(function(e, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: s = /* @__PURE__ */ cn(() => {
    }, "onValueChange"),
    ...a
  } = e, [i, c] = Ae({
    prop: r,
    defaultProp: o ?? [],
    onChange: s,
    caller: Er
  }), u = l.useCallback(
    (f) => c((p = []) => [...p, f]),
    [c]
  ), m = l.useCallback(
    (f) => c((p = []) => p.filter((v) => v !== f)),
    [c]
  );
  return /* @__PURE__ */ d.jsx(
    ag,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: u,
      onItemDeactivate: m,
      children: /* @__PURE__ */ d.jsx(cg, { ...a, ref: n })
    }
  );
}, "ToggleGroupImplMultiple")), [$I, WI] = rg(Er), cg = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(e, n) {
    const {
      __scopeToggleGroup: r,
      disabled: o = !1,
      rovingFocus: s = !0,
      orientation: a,
      dir: i,
      loop: c = !0,
      ...u
    } = e, m = og(r), f = Dt(i), p = { dir: f, ...u };
    return /* @__PURE__ */ d.jsx($I, { scope: r, rovingFocus: s, disabled: o, children: s ? /* @__PURE__ */ d.jsx(
      zs,
      {
        asChild: !0,
        ...m,
        orientation: a,
        dir: f,
        loop: c,
        children: /* @__PURE__ */ d.jsx(z.div, { ...p, ref: n })
      }
    ) : /* @__PURE__ */ d.jsx(z.div, { ...p, ref: n }) });
  }, "ToggleGroupImpl")
), vi = "ToggleGroupItem", lg = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(e, n) {
    const r = ig(vi, e.__scopeToggleGroup), o = WI(vi, e.__scopeToggleGroup), s = og(e.__scopeToggleGroup), a = r.value.includes(e.value), i = o.disabled || e.disabled, c = { ...e, pressed: a, disabled: i }, u = l.useRef(null);
    return o.rovingFocus ? /* @__PURE__ */ d.jsx(
      Ys,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: a,
        ref: u,
        children: /* @__PURE__ */ d.jsx(Pu, { ...c, ref: n })
      }
    ) : /* @__PURE__ */ d.jsx(Pu, { ...c, ref: n });
  }, "ToggleGroupItem")
), Pu = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ cn(function(e, n) {
    const { __scopeToggleGroup: r, value: o, ...s } = e, a = ig(vi, r), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, c = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ d.jsx(
      eg,
      {
        ...c,
        ...s,
        ref: n,
        onPressedChange: (u) => {
          u ? a.onItemActivate(o) : a.onItemDeactivate(o);
        }
      }
    );
  }, "ToggleGroupItemImpl")
);
const ug = l.createContext({
  size: "default",
  variant: "default"
}), BI = l.forwardRef(({ className: t, variant: e, size: n, children: r, ...o }, s) => /* @__PURE__ */ d.jsx(
  sg,
  {
    ref: s,
    className: k("flex items-center justify-center gap-1", t),
    ...o,
    children: /* @__PURE__ */ d.jsx(ug.Provider, { value: { variant: e, size: n }, children: r })
  }
));
BI.displayName = sg.displayName;
const VI = l.forwardRef(({ className: t, children: e, variant: n, size: r, ...o }, s) => {
  const a = l.useContext(ug);
  return /* @__PURE__ */ d.jsx(
    lg,
    {
      ref: s,
      className: k(
        ng({
          variant: a.variant || n,
          size: a.size || r
        }),
        t
      ),
      ...o,
      children: e
    }
  );
});
VI.displayName = lg.displayName;
var HI = Object.defineProperty, We = (t, e) => HI(t, "name", { value: e, configurable: !0 }), [Zc, sA] = /* @__PURE__ */ Me("Tooltip", [
  mn
]), Jc = mn(), zI = "TooltipProvider", YI = 700, bi = "tooltip.open", [GI, el] = Zc(zI), UI = /* @__PURE__ */ We((t) => {
  const {
    __scopeTooltip: e,
    delayDuration: n = YI,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = t, a = l.useRef(!0), i = l.useRef(!1), c = l.useRef(0);
  return l.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ d.jsx(
    GI,
    {
      scope: e,
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
      onPointerInTransitChange: l.useCallback((u) => {
        i.current = u;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
}, "TooltipProvider"), xi = "Tooltip", [KI, To] = Zc(xi), qI = /* @__PURE__ */ We((t) => {
  const {
    __scopeTooltip: e,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = t, c = el(xi, t.__scopeTooltip), u = Jc(e), [m, f] = l.useState(null), [p, v] = l.useState(void 0), b = Re(), h = l.useRef(0), g = a ?? c.disableHoverableContent, x = i ?? c.delayDuration, y = l.useRef(!1), [w, C] = Ae({
    prop: r,
    defaultProp: o ?? !1,
    onChange: /* @__PURE__ */ We((D) => {
      D ? (c.onOpen(), document.dispatchEvent(new CustomEvent(bi))) : c.onClose(), s?.(D);
    }, "onChange"),
    caller: xi
  }), P = l.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), S = l.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, y.current = !1, C(!0);
  }, [C]), T = l.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, C(!1);
  }, [C]), R = l.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      y.current = !0, C(!0), h.current = 0;
    }, x);
  }, [x, C]);
  l.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []);
  const M = p ?? b;
  return /* @__PURE__ */ d.jsx(bo, { ...u, children: /* @__PURE__ */ d.jsx(
    KI,
    {
      scope: e,
      contentId: M,
      setContentId: v,
      open: w,
      stateAttribute: P,
      trigger: m,
      onTriggerChange: f,
      onTriggerEnter: l.useCallback(() => {
        c.isOpenDelayedRef.current ? R() : S();
      }, [c.isOpenDelayedRef, R, S]),
      onTriggerLeave: l.useCallback(() => {
        g ? T() : (window.clearTimeout(h.current), h.current = 0);
      }, [T, g]),
      onOpen: S,
      onClose: T,
      disableHoverableContent: g,
      children: n
    }
  ) });
}, "Tooltip"), Tu = "TooltipTrigger", XI = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ We(function(e, n) {
    const { __scopeTooltip: r, ...o } = e, s = To(Tu, r), a = el(Tu, r), i = Jc(r), c = l.useRef(null), u = te(n, c, s.onTriggerChange), m = l.useRef(!1), f = l.useRef(!1), p = l.useCallback(() => m.current = !1, []);
    return l.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d.jsx(Ws, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      z.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...o,
        ref: u,
        onPointerMove: A(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (s.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: A(e.onPointerLeave, () => {
          s.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: A(e.onPointerDown, () => {
          s.open && s.onClose(), m.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: A(e.onFocus, () => {
          m.current || s.onOpen();
        }),
        onBlur: A(e.onBlur, s.onClose),
        onClick: A(e.onClick, s.onClose)
      }
    ) });
  }, "TooltipTrigger")
), dg = "TooltipPortal", [QI, ZI] = Zc(dg, {
  forceMount: void 0
}), JI = /* @__PURE__ */ We((t) => {
  const { __scopeTooltip: e, forceMount: n, children: r, container: o } = t, s = To(dg, e);
  return /* @__PURE__ */ d.jsx(QI, { scope: e, forceMount: n, children: /* @__PURE__ */ d.jsx(Ee, { present: n || s.open, children: /* @__PURE__ */ d.jsx(pr, { asChild: !0, container: o, children: r }) }) });
}, "TooltipPortal"), no = "TooltipContent", eO = /* @__PURE__ */ l.forwardRef(
  /* @__PURE__ */ We(function(e, n) {
    const r = ZI(no, e.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...a } = e, i = To(no, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(Ee, { present: o || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(fg, { side: s, ...a, ref: n }) : /* @__PURE__ */ d.jsx(tO, { side: s, ...a, ref: n }) });
  }, "TooltipContent")
), tO = /* @__PURE__ */ l.forwardRef(/* @__PURE__ */ We(function(e, n) {
  const r = To(no, e.__scopeTooltip), o = el(no, e.__scopeTooltip), s = l.useRef(null), a = te(n, s), [i, c] = l.useState(null), { trigger: u, onClose: m } = r, f = s.current, { onPointerInTransitChange: p } = o, v = l.useCallback(() => {
    c(null), p(!1);
  }, [p]), b = l.useCallback(
    (h, g) => {
      const x = h.currentTarget, y = { x: h.clientX, y: h.clientY }, w = mg(y, x.getBoundingClientRect()), C = pg(y, w), P = hg(g.getBoundingClientRect()), S = vg([...C, ...P]);
      c(S), p(!0);
    },
    [p]
  );
  return l.useEffect(() => () => v(), [v]), l.useEffect(() => {
    if (u && f) {
      const h = /* @__PURE__ */ We((x) => b(x, f), "handleTriggerLeave"), g = /* @__PURE__ */ We((x) => b(x, u), "handleContentLeave");
      return u.addEventListener("pointerleave", h), f.addEventListener("pointerleave", g), () => {
        u.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", g);
      };
    }
  }, [u, f, b, v]), l.useEffect(() => {
    if (i) {
      const h = /* @__PURE__ */ We((g) => {
        const x = g.target, y = { x: g.clientX, y: g.clientY }, w = u?.contains(x) || f?.contains(x), C = !gg(y, i);
        w ? v() : C && (v(), m());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [u, f, i, m, v]), /* @__PURE__ */ d.jsx(fg, { ...e, ref: a });
}, "TooltipContentHoverable")), nO = /* @__PURE__ */ Ou("TooltipContent"), fg = /* @__PURE__ */ l.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ We(function(e, n) {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      id: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      ...u
    } = e, m = To(no, r), f = Jc(r), { onClose: p } = m;
    l.useEffect(() => (document.addEventListener(bi, p), () => document.removeEventListener(bi, p)), [p]), l.useEffect(() => {
      if (m.trigger) {
        const b = /* @__PURE__ */ We((h) => {
          h.target instanceof Node && h.target.contains(m.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", b, { capture: !0 }), () => window.removeEventListener("scroll", b, { capture: !0 });
      }
    }, [m.trigger, p]);
    const { setContentId: v } = m;
    return we(() => (v(a), () => {
      v(void 0);
    }), [a, v]), /* @__PURE__ */ d.jsx(
      $n,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: c,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ d.jsxs(
          Bs,
          {
            "data-state": m.stateAttribute,
            role: s ? void 0 : "tooltip",
            id: s ? void 0 : m.contentId,
            ...f,
            ...u,
            ref: n,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d.jsx(nO, { children: o }),
              s ? /* @__PURE__ */ d.jsx(Pp, { id: m.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
function mg(t, e) {
  const n = Math.abs(e.top - t.y), r = Math.abs(e.bottom - t.y), o = Math.abs(e.right - t.x), s = Math.abs(e.left - t.x);
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
We(mg, "getExitSideFromRect");
function pg(t, e, n = 5) {
  const r = [];
  switch (e) {
    case "top":
      r.push(
        { x: t.x - n, y: t.y + n },
        { x: t.x + n, y: t.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: t.x - n, y: t.y - n },
        { x: t.x + n, y: t.y - n }
      );
      break;
    case "left":
      r.push(
        { x: t.x + n, y: t.y - n },
        { x: t.x + n, y: t.y + n }
      );
      break;
    case "right":
      r.push(
        { x: t.x - n, y: t.y - n },
        { x: t.x - n, y: t.y + n }
      );
      break;
  }
  return r;
}
We(pg, "getPaddedExitPoints");
function hg(t) {
  const { top: e, right: n, bottom: r, left: o } = t;
  return [
    { x: o, y: e },
    { x: n, y: e },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
We(hg, "getPointsFromRect");
function gg(t, e) {
  const { x: n, y: r } = t;
  let o = !1;
  for (let s = 0, a = e.length - 1; s < e.length; a = s++) {
    const i = e[s], c = e[a], u = i.x, m = i.y, f = c.x, p = c.y;
    m > r != p > r && n < (f - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
We(gg, "isPointInPolygon");
function vg(t) {
  const e = t.slice();
  return e.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), bg(e);
}
We(vg, "getHull");
function bg(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], a = e[e.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) e.pop();
      else break;
    }
    e.push(o);
  }
  e.pop();
  const n = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const o = t[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n);
}
We(bg, "getHullPresorted");
var rO = UI, oO = qI, sO = XI, aO = JI, xg = eO;
const aA = rO, iA = oO, cA = sO, iO = l.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ d.jsx(aO, { children: /* @__PURE__ */ d.jsx(
  xg,
  {
    ref: r,
    sideOffset: e,
    className: k(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
iO.displayName = xg.displayName;
export {
  pO as Accordion,
  Wb as AccordionContent,
  Lb as AccordionItem,
  $b as AccordionTrigger,
  Vb as Alert,
  zb as AlertDescription,
  gO as AlertDialog,
  Rw as AlertDialogAction,
  Ew as AlertDialogCancel,
  yw as AlertDialogContent,
  Tw as AlertDialogDescription,
  Sw as AlertDialogFooter,
  Cw as AlertDialogHeader,
  Xd as AlertDialogOverlay,
  ww as AlertDialogPortal,
  Pw as AlertDialogTitle,
  vO as AlertDialogTrigger,
  Hb as AlertTitle,
  Mw as AsyncSelect,
  bO as AsyncSelectForm,
  Fw as Avatar,
  $w as AvatarFallback,
  Lw as AvatarImage,
  Dl as Badge,
  Bw as Breadcrumb,
  Uw as BreadcrumbEllipsis,
  Hw as BreadcrumbItem,
  zw as BreadcrumbLink,
  Vw as BreadcrumbList,
  Yw as BreadcrumbPage,
  Gw as BreadcrumbSeparator,
  Wn as Button,
  Vf as Calendar,
  PP as CalendarDayButton,
  TP as Card,
  kP as CardContent,
  MP as CardDescription,
  DP as CardFooter,
  RP as CardHeader,
  EP as CardTitle,
  dT as Carousel,
  fT as CarouselContent,
  mT as CarouselItem,
  hT as CarouselNext,
  pT as CarouselPrevious,
  vT as ChartContainer,
  SO as ChartLegend,
  wT as ChartLegendContent,
  bT as ChartStyle,
  CO as ChartTooltip,
  xT as ChartTooltipContent,
  _T as Checkbox,
  IT as Combobox,
  TO as ComboboxForm,
  go as Command,
  RO as CommandDialog,
  Is as CommandEmpty,
  vo as CommandGroup,
  Ns as CommandInput,
  En as CommandItem,
  _s as CommandList,
  am as CommandSeparator,
  oR as CommandShortcut,
  AE as DatePicker,
  kO as DatePickerForm,
  Im as DateTimePicker,
  DO as DateTimePickerForm,
  XE as Dialog,
  _O as DialogClose,
  Am as DialogContent,
  tM as DialogDescription,
  JE as DialogFooter,
  ZE as DialogHeader,
  Om as DialogOverlay,
  QE as DialogPortal,
  eM as DialogTitle,
  NO as DialogTrigger,
  OO as DropdownMenu,
  Fk as DropdownMenuCheckboxItem,
  Ak as DropdownMenuContent,
  jO as DropdownMenuGroup,
  jk as DropdownMenuItem,
  $k as DropdownMenuLabel,
  FO as DropdownMenuPortal,
  $O as DropdownMenuRadioGroup,
  Lk as DropdownMenuRadioItem,
  Wk as DropdownMenuSeparator,
  Bk as DropdownMenuShortcut,
  LO as DropdownMenuSub,
  Ok as DropdownMenuSubContent,
  Ik as DropdownMenuSubTrigger,
  AO as DropdownMenuTrigger,
  WO as Form,
  Pr as FormControl,
  Cp as FormDescription,
  zn as FormField,
  vn as FormItem,
  bn as FormLabel,
  xn as FormMessage,
  BO as Heading,
  Sc as Input,
  VO as InputForm,
  qs as Label,
  ND as ListItem,
  _D as MaskedInput,
  OD as MultiSelect,
  PD as NavigationMenu,
  MD as NavigationMenuContent,
  DD as NavigationMenuIndicator,
  zO as NavigationMenuItem,
  kD as NavigationMenuLink,
  TD as NavigationMenuList,
  ED as NavigationMenuTrigger,
  $p as NavigationMenuViewport,
  AD as Pagination,
  jD as PaginationContent,
  WD as PaginationEllipsis,
  FD as PaginationItem,
  Dc as PaginationLink,
  $D as PaginationNext,
  LD as PaginationPrevious,
  xo as Popover,
  Sr as PopoverContent,
  wo as PopoverTrigger,
  sN as RadioGroup,
  aN as RadioGroupItem,
  EN as ScrollArea,
  oh as ScrollBar,
  bh as Select,
  Vc as SelectContent,
  qO as SelectForm,
  KO as SelectGroup,
  ps as SelectItem,
  i_ as SelectLabel,
  yh as SelectScrollDownButton,
  wh as SelectScrollUpButton,
  c_ as SelectSeparator,
  Bc as SelectTrigger,
  xh as SelectValue,
  Th as Separator,
  XO as Sheet,
  ZO as SheetClose,
  p_ as SheetContent,
  b_ as SheetDescription,
  g_ as SheetFooter,
  h_ as SheetHeader,
  Rh as SheetOverlay,
  f_ as SheetPortal,
  v_ as SheetTitle,
  QO as SheetTrigger,
  x_ as Skeleton,
  k_ as Switch,
  D_ as Table,
  __ as TableBody,
  F_ as TableCaption,
  j_ as TableCell,
  I_ as TableFooter,
  A_ as TableHead,
  N_ as TableHeader,
  O_ as TableRow,
  tA as Tabs,
  Q_ as TabsContent,
  q_ as TabsList,
  X_ as TabsTrigger,
  Oh as Textarea,
  Z_ as TextareaForm,
  _m as TimePicker,
  qo as TimePickerInput,
  Xh as Toast,
  TI as ToastAction,
  Qh as ToastClose,
  Jh as ToastDescription,
  CI as ToastProvider,
  Zh as ToastTitle,
  qh as ToastViewport,
  rA as Toaster,
  AI as Toggle,
  BI as ToggleGroup,
  VI as ToggleGroupItem,
  iA as Tooltip,
  iO as TooltipContent,
  aA as TooltipProvider,
  cA as TooltipTrigger,
  Ww as badgeVariants,
  yO as brazillianStates,
  kn as buttonVariants,
  k as cn,
  wO as mask,
  RD as navigationMenuTriggerStyle,
  kI as reducer,
  DI as toast,
  ng as toggleVariants,
  Xs as useFormField,
  NI as useToast
};
