import * as e from "react";
import t, { createContext as n, useCallback as r, useContext as i, useEffect as a, useImperativeHandle as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import * as d from "react-dom";
import f from "react-dom";
import { ArrowLeft as p, ArrowRight as m, Calendar as h, CalendarIcon as g, Check as _, CheckIcon as v, ChevronDown as y, ChevronDownIcon as b, ChevronLeft as x, ChevronLeftIcon as S, ChevronRight as C, ChevronRightIcon as w, ChevronUp as T, ChevronsUpDown as E, Circle as D, Clock as O, Loader2 as k, MoreHorizontal as A, Plus as j, Search as M, WandSparkles as N, X as P, XCircle as F, XIcon as I } from "lucide-react";
import { Controller as ee, FormProvider as te, useFormContext as ne } from "react-hook-form";
import { Link as re } from "react-router-dom";
import * as L from "recharts";
//#region \0rolldown/runtime.js
var R = Object.defineProperty, ie = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ae = (e, t) => {
	let n = {};
	for (var r in e) R(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || R(n, Symbol.toStringTag, { value: "Module" }), n;
}, z = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), oe = /* @__PURE__ */ ie(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), se = /* @__PURE__ */ ie(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === D ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case g: return "Fragment";
				case v: return "Profiler";
				case _: return "StrictMode";
				case S: return "Suspense";
				case C: return "SuspenseList";
				case E: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case h: return "Portal";
				case b: return (e.displayName || "Context") + ".Provider";
				case y: return (e._context.displayName || "Context") + ".Consumer";
				case x:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case w: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case T:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === g) return "<>";
			if (typeof e == "object" && e && e.$$typeof === T) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = O.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (k.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				M || (M = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return N[e] || (N[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a, o, s) {
			return n = a.ref, e = {
				$$typeof: m,
				type: e,
				key: t,
				props: a,
				_owner: i
			}, (n === void 0 ? null : n) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: o
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: s
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d, p, m) {
			var h = n.children;
			if (h !== void 0) if (o) if (A(h)) {
				for (o = 0; o < h.length; o++) f(h[o]);
				Object.freeze && Object.freeze(h);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(h);
			if (k.call(n, "key")) {
				h = t(e);
				var g = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", I[h + o] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, h, g, h), I[h + o] = !0);
			}
			if (h = null, i !== void 0 && (r(i), h = "" + i), s(n) && (r(n.key), h = "" + n.key), "key" in n) for (var _ in i = {}, n) _ !== "key" && (i[_] = n[_]);
			else i = n;
			return h && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, h, d, l, a(), i, p, m);
		}
		function f(e) {
			typeof e == "object" && e && e.$$typeof === m && e._store && (e._store.validated = 1);
		}
		var p = z("react"), m = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, A = Array.isArray, j = console.createTask ? console.createTask : function() {
			return null;
		};
		p = { "react-stack-bottom-frame": function(e) {
			return e();
		} };
		var M, N = {}, P = p["react-stack-bottom-frame"].bind(p, o)(), F = j(i(o)), I = {};
		e.Fragment = g, e.jsx = function(e, t, n, r, a) {
			var o = 1e4 > O.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r, a, o ? Error("react-stack-top-frame") : P, o ? j(i(e)) : F);
		}, e.jsxs = function(e, t, n, r, a) {
			var o = 1e4 > O.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r, a, o ? Error("react-stack-top-frame") : P, o ? j(i(e)) : F);
		};
	})();
})), B = (/* @__PURE__ */ ie(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = oe() : t.exports = se();
})))();
function ce(t, n) {
	let r = e.createContext(n), i = (t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ (0, B.jsx)(r.Provider, {
			value: a,
			children: n
		});
	};
	i.displayName = t + "Provider";
	function a(i) {
		let a = e.useContext(r);
		if (a) return a;
		if (n !== void 0) return n;
		throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return [i, a];
}
function V(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i), o = r.length;
		r = [...r, i];
		let s = (n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, B.jsx)(c.Provider, {
				value: l,
				children: i
			});
		};
		s.displayName = n + "Provider";
		function c(r, s) {
			let c = s?.[t]?.[o] || a, l = e.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [s, c];
	}
	let a = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = t, [i, le(a, ...n)];
}
function le(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-compose-ref_809eb34918f5e9fc3812a259571a34a0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function ue(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function de(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = ue(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : ue(e[t], null);
			}
		};
	};
}
function H(...t) {
	return e.useCallback(de(...t), t);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs
/* @__NO_SIDE_EFFECTS__ */
function fe(t) {
	let n = /* @__PURE__ */ pe(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t, o = e.Children.toArray(i), s = o.find(ge);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, B.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, B.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
/* @__NO_SIDE_EFFECTS__ */
function pe(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (e.isValidElement(r)) {
			let t = ve(r), a = _e(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? de(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var me = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function he(e) {
	let t = ({ children: e }) => /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = me, t;
}
function ge(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === me;
}
function _e(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function ve(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collection@_e0738efcfa428c24e81e84562184105a/node_modules/@radix-ui/react-collection/dist/index.mjs
function ye(e) {
	let n = e + "CollectionProvider", [r, i] = V(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: n, children: r } = e, i = t.useRef(null), o = t.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, B.jsx)(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	};
	s.displayName = n;
	let c = e + "CollectionSlot", l = /* @__PURE__ */ fe(c), u = t.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, B.jsx)(l, {
			ref: H(t, o(c, n).collectionRef),
			children: r
		});
	});
	u.displayName = c;
	let d = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ fe(d), m = t.forwardRef((e, n) => {
		let { scope: r, children: i, ...a } = e, s = t.useRef(null), c = H(n, s), l = o(d, r);
		return t.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ (0, B.jsx)(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(e + "CollectionConsumer", n);
		return t.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
typeof window < "u" && window.document && window.document.createElement;
function U(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-layout-_4852ebf38d555ddc3ce095ac4fabc6e7/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var W = globalThis?.document ? e.useLayoutEffect : () => {}, be = e.useInsertionEffect || W;
function xe({ prop: t, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = Se({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0, l = c ? t : a;
	{
		let n = e.useRef(t !== void 0);
		e.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, e.useCallback((e) => {
		if (c) {
			let n = Ce(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
function Se({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return be(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function Ce(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-primitive@2_942dc95da45a8d26a65e8b93069343a1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var G = [
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
].reduce((t, n) => {
	let r = /* @__PURE__ */ fe(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, B.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function we(e, t) {
	e && d.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-presence@1._b7372a6a4c3688be8a5cd1f201df5832/node_modules/@radix-ui/react-presence/dist/index.mjs
function Te(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var Ee = (t) => {
	let { present: n, children: r } = t, i = De(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = H(i.ref, ke(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
};
Ee.displayName = "Presence";
function De(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), [s, c] = Te(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		let e = Oe(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), W(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Oe(e);
			t ? c("MOUNT") : i === "none" || e?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, c]), W(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = Oe(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = Oe(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: e.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function Oe(e) {
	return e?.animationName || "none";
}
function ke(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.14_react@19.1.0/node_modules/@radix-ui/react-id/dist/index.mjs
var Ae = e.useId || (() => void 0), je = 0;
function Me(t) {
	let [n, r] = e.useState(Ae());
	return W(() => {
		t || r((e) => e ?? String(je++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-collapsible_b2e9d08cba6e06f2f74dcd612a392d0b/node_modules/@radix-ui/react-collapsible/dist/index.mjs
var Ne = "Collapsible", [Pe, Fe] = V(Ne), [Ie, Le] = Pe(Ne), Re = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, open: i, defaultOpen: a, disabled: o, onOpenChange: s, ...c } = t, [l, u] = xe({
		prop: i,
		defaultProp: a ?? !1,
		onChange: s,
		caller: Ne
	});
	return /* @__PURE__ */ (0, B.jsx)(Ie, {
		scope: r,
		disabled: o,
		contentId: Me(),
		open: l,
		onOpenToggle: e.useCallback(() => u((e) => !e), [u]),
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			"data-state": We(l),
			"data-disabled": o ? "" : void 0,
			...c,
			ref: n
		})
	});
});
Re.displayName = Ne;
var ze = "CollapsibleTrigger", Be = e.forwardRef((e, t) => {
	let { __scopeCollapsible: n, ...r } = e, i = Le(ze, n);
	return /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		"aria-controls": i.contentId,
		"aria-expanded": i.open || !1,
		"data-state": We(i.open),
		"data-disabled": i.disabled ? "" : void 0,
		disabled: i.disabled,
		...r,
		ref: t,
		onClick: U(e.onClick, i.onOpenToggle)
	});
});
Be.displayName = ze;
var Ve = "CollapsibleContent", He = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = Le(Ve, e.__scopeCollapsible);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ (0, B.jsx)(Ue, {
			...r,
			ref: t,
			present: e
		})
	});
});
He.displayName = Ve;
var Ue = e.forwardRef((t, n) => {
	let { __scopeCollapsible: r, present: i, children: a, ...o } = t, s = Le(Ve, r), [c, l] = e.useState(i), u = e.useRef(null), d = H(n, u), f = e.useRef(0), p = f.current, m = e.useRef(0), h = m.current, g = s.open || c, _ = e.useRef(g), v = e.useRef(void 0);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => _.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), W(() => {
		let e = u.current;
		if (e) {
			v.current = v.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			f.current = t.height, m.current = t.width, _.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), l(i);
		}
	}, [s.open, i]), /* @__PURE__ */ (0, B.jsx)(G.div, {
		"data-state": We(s.open),
		"data-disabled": s.disabled ? "" : void 0,
		id: s.contentId,
		hidden: !g,
		...o,
		ref: d,
		style: {
			"--radix-collapsible-content-height": p ? `${p}px` : void 0,
			"--radix-collapsible-content-width": h ? `${h}px` : void 0,
			...t.style
		},
		children: g && a
	});
});
function We(e) {
	return e ? "open" : "closed";
}
var Ge = Re, Ke = Be, qe = He, Je = e.createContext(void 0);
function Ye(t) {
	let n = e.useContext(Je);
	return t || n || "ltr";
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-accordion@1_5d739927d94d01dd2696ffe6af8edfd6/node_modules/@radix-ui/react-accordion/dist/index.mjs
var Xe = "Accordion", Ze = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
], [Qe, $e, et] = ye(Xe), [tt, nt] = V(Xe, [et, Fe]), rt = Fe(), it = t.forwardRef((e, t) => {
	let { type: n, ...r } = e, i = r, a = r;
	return /* @__PURE__ */ (0, B.jsx)(Qe.Provider, {
		scope: e.__scopeAccordion,
		children: n === "multiple" ? /* @__PURE__ */ (0, B.jsx)(ut, {
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, B.jsx)(lt, {
			...i,
			ref: t
		})
	});
});
it.displayName = Xe;
var [at, ot] = tt(Xe), [st, ct] = tt(Xe, { collapsible: !1 }), lt = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, collapsible: o = !1, ...s } = e, [c, l] = xe({
		prop: r,
		defaultProp: i ?? "",
		onChange: a,
		caller: Xe
	});
	return /* @__PURE__ */ (0, B.jsx)(at, {
		scope: e.__scopeAccordion,
		value: t.useMemo(() => c ? [c] : [], [c]),
		onItemOpen: l,
		onItemClose: t.useCallback(() => o && l(""), [o, l]),
		children: /* @__PURE__ */ (0, B.jsx)(st, {
			scope: e.__scopeAccordion,
			collapsible: o,
			children: /* @__PURE__ */ (0, B.jsx)(pt, {
				...s,
				ref: n
			})
		})
	});
}), ut = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = xe({
		prop: r,
		defaultProp: i ?? [],
		onChange: a,
		caller: Xe
	}), l = t.useCallback((e) => c((t = []) => [...t, e]), [c]), u = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ (0, B.jsx)(at, {
		scope: e.__scopeAccordion,
		value: s,
		onItemOpen: l,
		onItemClose: u,
		children: /* @__PURE__ */ (0, B.jsx)(st, {
			scope: e.__scopeAccordion,
			collapsible: !0,
			children: /* @__PURE__ */ (0, B.jsx)(pt, {
				...o,
				ref: n
			})
		})
	});
}), [dt, ft] = tt(Xe), pt = t.forwardRef((e, n) => {
	let { __scopeAccordion: r, disabled: i, dir: a, orientation: o = "vertical", ...s } = e, c = H(t.useRef(null), n), l = $e(r), u = Ye(a) === "ltr", d = U(e.onKeyDown, (e) => {
		if (!Ze.includes(e.key)) return;
		let t = e.target, n = l().filter((e) => !e.ref.current?.disabled), r = n.findIndex((e) => e.ref.current === t), i = n.length;
		if (r === -1) return;
		e.preventDefault();
		let a = r, s = i - 1, c = () => {
			a = r + 1, a > s && (a = 0);
		}, d = () => {
			a = r - 1, a < 0 && (a = s);
		};
		switch (e.key) {
			case "Home":
				a = 0;
				break;
			case "End":
				a = s;
				break;
			case "ArrowRight":
				o === "horizontal" && (u ? c() : d());
				break;
			case "ArrowDown":
				o === "vertical" && c();
				break;
			case "ArrowLeft":
				o === "horizontal" && (u ? d() : c());
				break;
			case "ArrowUp":
				o === "vertical" && d();
				break;
		}
		n[a % i].ref.current?.focus();
	});
	return /* @__PURE__ */ (0, B.jsx)(dt, {
		scope: r,
		disabled: i,
		direction: a,
		orientation: o,
		children: /* @__PURE__ */ (0, B.jsx)(Qe.Slot, {
			scope: r,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				...s,
				"data-orientation": o,
				ref: c,
				onKeyDown: i ? void 0 : d
			})
		})
	});
}), mt = "AccordionItem", [ht, gt] = tt(mt), _t = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, value: r, ...i } = e, a = ft(mt, n), o = ot(mt, n), s = rt(n), c = Me(), l = r && o.value.includes(r) || !1, u = a.disabled || e.disabled;
	return /* @__PURE__ */ (0, B.jsx)(ht, {
		scope: n,
		open: l,
		disabled: u,
		triggerId: c,
		children: /* @__PURE__ */ (0, B.jsx)(Ge, {
			"data-orientation": a.orientation,
			"data-state": wt(l),
			...s,
			...i,
			ref: t,
			disabled: u,
			open: l,
			onOpenChange: (e) => {
				e ? o.onItemOpen(r) : o.onItemClose(r);
			}
		})
	});
});
_t.displayName = mt;
var vt = "AccordionHeader", yt = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = ft(Xe, n), a = gt(vt, n);
	return /* @__PURE__ */ (0, B.jsx)(G.h3, {
		"data-orientation": i.orientation,
		"data-state": wt(a.open),
		"data-disabled": a.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
yt.displayName = vt;
var bt = "AccordionTrigger", xt = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = ft(Xe, n), a = gt(bt, n), o = ct(bt, n), s = rt(n);
	return /* @__PURE__ */ (0, B.jsx)(Qe.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, B.jsx)(Ke, {
			"aria-disabled": a.open && !o.collapsible || void 0,
			"data-orientation": i.orientation,
			id: a.triggerId,
			...s,
			...r,
			ref: t
		})
	});
});
xt.displayName = bt;
var St = "AccordionContent", Ct = t.forwardRef((e, t) => {
	let { __scopeAccordion: n, ...r } = e, i = ft(Xe, n), a = gt(St, n), o = rt(n);
	return /* @__PURE__ */ (0, B.jsx)(qe, {
		role: "region",
		"aria-labelledby": a.triggerId,
		"data-orientation": i.orientation,
		...o,
		...r,
		ref: t,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...e.style
		}
	});
});
Ct.displayName = St;
function wt(e) {
	return e ? "open" : "closed";
}
var Tt = it, Et = _t, Dt = yt, Ot = xt, kt = Ct;
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function At(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = At(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function jt() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = At(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Mt = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Nt = (e, t) => ({
	classGroupId: e,
	validator: t
}), Pt = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), Ft = "-", It = [], Lt = "arbitrary..", Rt = (e) => {
	let t = Vt(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Bt(e);
			let n = e.split(Ft);
			return zt(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Mt(i, t) : t : i || It;
			}
			return n[e] || It;
		}
	};
}, zt = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = zt(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(Ft) : e.slice(t).join(Ft), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Bt = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Lt + r : void 0;
})(), Vt = (e) => {
	let { theme: t, classGroups: n } = e;
	return Ht(n, t);
}, Ht = (e, t) => {
	let n = Pt();
	for (let r in e) {
		let i = e[r];
		Ut(i, n, r, t);
	}
	return n;
}, Ut = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Wt(i, t, n, r);
	}
}, Wt = (e, t, n, r) => {
	if (typeof e == "string") {
		Gt(e, t, n);
		return;
	}
	if (typeof e == "function") {
		Kt(e, t, n, r);
		return;
	}
	qt(e, t, n, r);
}, Gt = (e, t, n) => {
	let r = e === "" ? t : Jt(t, e);
	r.classGroupId = n;
}, Kt = (e, t, n, r) => {
	if (Yt(e)) {
		Ut(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Nt(n, e));
}, qt = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Ut(o, Jt(t, a), n, r);
	}
}, Jt = (e, t) => {
	let n = e, r = t.split(Ft), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Pt(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Yt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Xt = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, Zt = "!", Qt = ":", $t = [], en = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), tn = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Qt) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(Zt) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Zt) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return en(t, l, c, u);
	};
	if (t) {
		let e = t + Qt, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : en($t, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, nn = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, rn = (e) => ({
	cache: Xt(e.cacheSize),
	parseClassName: tn(e),
	sortModifiers: nn(e),
	...Rt(e)
}), an = /\s+/, on = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(an), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + Zt : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let y = i(h, m);
		for (let e = 0; e < y.length; ++e) {
			let t = y[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, sn = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = cn(n)) && (i && (i += " "), i += r);
	return i;
}, cn = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = cn(e[r])) && (n && (n += " "), n += t);
	return n;
}, ln = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = rn(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = on(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(sn(...e));
}, un = [], dn = (e) => {
	let t = (t) => t[e] || un;
	return t.isThemeGetter = !0, t;
}, fn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, mn = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, hn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _n = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, bn = (e) => mn.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), xn = (e) => !!e && Number.isInteger(Number(e)), Sn = (e) => e.endsWith("%") && K(e.slice(0, -1)), Cn = (e) => hn.test(e), wn = () => !0, Tn = (e) => gn.test(e) && !_n.test(e), En = () => !1, Dn = (e) => vn.test(e), On = (e) => yn.test(e), kn = (e) => !q(e) && !J(e), An = (e) => Gn(e, Yn, En), q = (e) => fn.test(e), jn = (e) => Gn(e, Xn, Tn), Mn = (e) => Gn(e, Zn, K), Nn = (e) => Gn(e, $n, wn), Pn = (e) => Gn(e, Qn, En), Fn = (e) => Gn(e, qn, En), In = (e) => Gn(e, Jn, On), Ln = (e) => Gn(e, er, Dn), J = (e) => pn.test(e), Rn = (e) => Kn(e, Xn), zn = (e) => Kn(e, Qn), Bn = (e) => Kn(e, qn), Vn = (e) => Kn(e, Yn), Hn = (e) => Kn(e, Jn), Un = (e) => Kn(e, er, !0), Wn = (e) => Kn(e, $n, !0), Gn = (e, t, n) => {
	let r = fn.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Kn = (e, t, n = !1) => {
	let r = pn.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, qn = (e) => e === "position" || e === "percentage", Jn = (e) => e === "image" || e === "url", Yn = (e) => e === "length" || e === "size" || e === "bg-size", Xn = (e) => e === "length", Zn = (e) => e === "number", Qn = (e) => e === "family-name", $n = (e) => e === "number" || e === "weight", er = (e) => e === "shadow", tr = /* @__PURE__ */ ln(() => {
	let e = dn("color"), t = dn("font"), n = dn("text"), r = dn("font-weight"), i = dn("tracking"), a = dn("leading"), o = dn("breakpoint"), s = dn("container"), c = dn("spacing"), l = dn("radius"), u = dn("shadow"), d = dn("inset-shadow"), f = dn("text-shadow"), p = dn("drop-shadow"), m = dn("blur"), h = dn("perspective"), g = dn("aspect"), _ = dn("ease"), v = dn("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		J,
		q
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		J,
		q,
		c
	], T = () => [
		bn,
		"full",
		"auto",
		...w()
	], E = () => [
		xn,
		"none",
		"subgrid",
		J,
		q
	], D = () => [
		"auto",
		{ span: [
			"full",
			xn,
			J,
			q
		] },
		xn,
		J,
		q
	], O = () => [
		xn,
		"auto",
		J,
		q
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		J,
		q
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		bn,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		bn,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		bn,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		J,
		q
	], ee = () => [
		...b(),
		Bn,
		Fn,
		{ position: [J, q] }
	], te = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ne = () => [
		"auto",
		"cover",
		"contain",
		Vn,
		An,
		{ size: [J, q] }
	], re = () => [
		Sn,
		Rn,
		jn
	], L = () => [
		"",
		"none",
		"full",
		l,
		J,
		q
	], R = () => [
		"",
		K,
		Rn,
		jn
	], ie = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ae = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], z = () => [
		K,
		Sn,
		Bn,
		Fn
	], oe = () => [
		"",
		"none",
		m,
		J,
		q
	], se = () => [
		"none",
		K,
		J,
		q
	], B = () => [
		"none",
		K,
		J,
		q
	], ce = () => [
		K,
		J,
		q
	], V = () => [
		bn,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [Cn],
			breakpoint: [Cn],
			color: [wn],
			container: [Cn],
			"drop-shadow": [Cn],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [kn],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [Cn],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [Cn],
			shadow: [Cn],
			spacing: ["px", K],
			text: [Cn],
			"text-shadow": [Cn],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				bn,
				q,
				J,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				K,
				q,
				J,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				xn,
				"auto",
				J,
				q
			] }],
			basis: [{ basis: [
				bn,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				K,
				bn,
				"auto",
				"initial",
				"none",
				q
			] }],
			grow: [{ grow: [
				"",
				K,
				J,
				q
			] }],
			shrink: [{ shrink: [
				"",
				K,
				J,
				q
			] }],
			order: [{ order: [
				xn,
				"first",
				"last",
				"none",
				J,
				q
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Rn,
				jn
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Wn,
				Nn
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Sn,
				q
			] }],
			"font-family": [{ font: [
				zn,
				Pn,
				t
			] }],
			"font-features": [{ "font-features": [q] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				J,
				q
			] }],
			"line-clamp": [{ "line-clamp": [
				K,
				"none",
				J,
				Mn
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				J,
				q
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				J,
				q
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				K,
				"from-font",
				"auto",
				J,
				jn
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				K,
				"auto",
				J,
				q
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				J,
				q
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				J,
				q
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ee() }],
			"bg-repeat": [{ bg: te() }],
			"bg-size": [{ bg: ne() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						xn,
						J,
						q
					],
					radial: [
						"",
						J,
						q
					],
					conic: [
						xn,
						J,
						q
					]
				},
				Hn,
				In
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: re() }],
			"gradient-via-pos": [{ via: re() }],
			"gradient-to-pos": [{ to: re() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: L() }],
			"rounded-s": [{ "rounded-s": L() }],
			"rounded-e": [{ "rounded-e": L() }],
			"rounded-t": [{ "rounded-t": L() }],
			"rounded-r": [{ "rounded-r": L() }],
			"rounded-b": [{ "rounded-b": L() }],
			"rounded-l": [{ "rounded-l": L() }],
			"rounded-ss": [{ "rounded-ss": L() }],
			"rounded-se": [{ "rounded-se": L() }],
			"rounded-ee": [{ "rounded-ee": L() }],
			"rounded-es": [{ "rounded-es": L() }],
			"rounded-tl": [{ "rounded-tl": L() }],
			"rounded-tr": [{ "rounded-tr": L() }],
			"rounded-br": [{ "rounded-br": L() }],
			"rounded-bl": [{ "rounded-bl": L() }],
			"border-w": [{ border: R() }],
			"border-w-x": [{ "border-x": R() }],
			"border-w-y": [{ "border-y": R() }],
			"border-w-s": [{ "border-s": R() }],
			"border-w-e": [{ "border-e": R() }],
			"border-w-bs": [{ "border-bs": R() }],
			"border-w-be": [{ "border-be": R() }],
			"border-w-t": [{ "border-t": R() }],
			"border-w-r": [{ "border-r": R() }],
			"border-w-b": [{ "border-b": R() }],
			"border-w-l": [{ "border-l": R() }],
			"divide-x": [{ "divide-x": R() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": R() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ie(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ie(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...ie(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				K,
				J,
				q
			] }],
			"outline-w": [{ outline: [
				"",
				K,
				Rn,
				jn
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Un,
				Ln
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Un,
				Ln
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: R() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [K, jn] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": R() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Un,
				Ln
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				K,
				J,
				q
			] }],
			"mix-blend": [{ "mix-blend": [
				...ae(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ae() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [K] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": z() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": z() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": z() }],
			"mask-image-t-to-pos": [{ "mask-t-to": z() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": z() }],
			"mask-image-r-to-pos": [{ "mask-r-to": z() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": z() }],
			"mask-image-b-to-pos": [{ "mask-b-to": z() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": z() }],
			"mask-image-l-to-pos": [{ "mask-l-to": z() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": z() }],
			"mask-image-x-to-pos": [{ "mask-x-to": z() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": z() }],
			"mask-image-y-to-pos": [{ "mask-y-to": z() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [J, q] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": z() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": z() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [K] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": z() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": z() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ee() }],
			"mask-repeat": [{ mask: te() }],
			"mask-size": [{ mask: ne() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				J,
				q
			] }],
			filter: [{ filter: [
				"",
				"none",
				J,
				q
			] }],
			blur: [{ blur: oe() }],
			brightness: [{ brightness: [
				K,
				J,
				q
			] }],
			contrast: [{ contrast: [
				K,
				J,
				q
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Un,
				Ln
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				K,
				J,
				q
			] }],
			"hue-rotate": [{ "hue-rotate": [
				K,
				J,
				q
			] }],
			invert: [{ invert: [
				"",
				K,
				J,
				q
			] }],
			saturate: [{ saturate: [
				K,
				J,
				q
			] }],
			sepia: [{ sepia: [
				"",
				K,
				J,
				q
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				J,
				q
			] }],
			"backdrop-blur": [{ "backdrop-blur": oe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				K,
				J,
				q
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				K,
				J,
				q
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				K,
				J,
				q
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				K,
				J,
				q
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				K,
				J,
				q
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				K,
				J,
				q
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				K,
				J,
				q
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				K,
				J,
				q
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				J,
				q
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				K,
				"initial",
				J,
				q
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				J,
				q
			] }],
			delay: [{ delay: [
				K,
				J,
				q
			] }],
			animate: [{ animate: [
				"none",
				v,
				J,
				q
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				J,
				q
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: se() }],
			"rotate-x": [{ "rotate-x": se() }],
			"rotate-y": [{ "rotate-y": se() }],
			"rotate-z": [{ "rotate-z": se() }],
			scale: [{ scale: B() }],
			"scale-x": [{ "scale-x": B() }],
			"scale-y": [{ "scale-y": B() }],
			"scale-z": [{ "scale-z": B() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ce() }],
			"skew-x": [{ "skew-x": ce() }],
			"skew-y": [{ "skew-y": ce() }],
			transform: [{ transform: [
				J,
				q,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: V() }],
			"translate-x": [{ "translate-x": V() }],
			"translate-y": [{ "translate-y": V() }],
			"translate-z": [{ "translate-z": V() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				J,
				q
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				J,
				q
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				K,
				Rn,
				jn,
				Mn
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region lib/utils/utils.ts
function Y(...e) {
	return tr(jt(e));
}
//#endregion
//#region lib/components/accordion/accordion.component.tsx
var nr = Tt, rr = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Et, {
	ref: n,
	className: Y("border-b", e),
	...t
}));
rr.displayName = "AccordionItem";
var ir = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(Dt, {
	className: "flex",
	children: /* @__PURE__ */ (0, B.jsxs)(Ot, {
		ref: r,
		className: Y("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", e),
		...n,
		children: [t, /* @__PURE__ */ (0, B.jsx)(y, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
ir.displayName = Ot.displayName;
var ar = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(kt, {
	ref: r,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...n,
	children: /* @__PURE__ */ (0, B.jsx)("div", {
		className: Y("pb-4 pt-0", e),
		children: t
	})
}));
ar.displayName = kt.displayName;
//#endregion
//#region node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var or = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, sr = jt, cr = (e, t) => (n) => {
	if (t?.variants == null) return sr(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = or(t) || or(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return sr(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, lr = cr("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
		secondary: "bg-secondary text-secondary-foreground",
		ghost: "bg-transparent text-foreground",
		outline: "border border-foreground bg-transparent text-foreground"
	} },
	defaultVariants: { variant: "default" }
}), ur = e.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: r,
	role: "alert",
	className: Y(lr({ variant: t }), e),
	...n
}));
ur.displayName = "Alert";
var dr = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("h5", {
	ref: n,
	className: Y("mb-1 font-medium leading-none tracking-tight", e),
	...t
}));
dr.displayName = "AlertTitle";
var fr = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: n,
	className: Y("text-sm [&_p]:leading-relaxed", e),
	...t
}));
fr.displayName = "AlertDescription";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-callbac_3895b187df7437085f3310b92fda2d1e/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function X(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-escape-_608f657c02478d59c0fcfa762af93c2d/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function pr(t, n = globalThis?.document) {
	let r = X(t);
	e.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-dismissable_adba7072b53bb6c0a22054d9f64a7dd2/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var mr = "DismissableLayer", hr = "dismissableLayer.update", gr = "dismissableLayer.pointerDownOutside", _r = "dismissableLayer.focusOutside", vr, yr = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), br = e.forwardRef((t, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = t, u = e.useContext(yr), [d, f] = e.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = e.useState({}), h = H(n, (e) => f(e)), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(_), y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = Cr((e) => {
		let t = e.target, n = [...u.branches].some((e) => e.contains(t));
		!x || n || (a?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), C = wr((e) => {
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p);
	return pr((e) => {
		y === u.layers.size - 1 && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	}, p), e.useEffect(() => {
		if (d) return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vr = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Tr(), () => {
			r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = vr);
		};
	}, [
		d,
		p,
		r,
		u
	]), e.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Tr());
	}, [d, u]), e.useEffect(() => {
		let e = () => m({});
		return document.addEventListener(hr, e), () => document.removeEventListener(hr, e);
	}, []), /* @__PURE__ */ (0, B.jsx)(G.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: U(t.onFocusCapture, C.onFocusCapture),
		onBlurCapture: U(t.onBlurCapture, C.onBlurCapture),
		onPointerDownCapture: U(t.onPointerDownCapture, S.onPointerDownCapture)
	});
});
br.displayName = mr;
var xr = "DismissableLayerBranch", Sr = e.forwardRef((t, n) => {
	let r = e.useContext(yr), i = e.useRef(null), a = H(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ (0, B.jsx)(G.div, {
		...t,
		ref: a
	});
});
Sr.displayName = xr;
function Cr(t, n = globalThis?.document) {
	let r = X(t), i = e.useRef(!1), a = e.useRef(() => {});
	return e.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					Er(gr, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function wr(t, n = globalThis?.document) {
	let r = X(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && Er(_r, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function Tr() {
	let e = new CustomEvent(hr);
	document.dispatchEvent(e);
}
function Er(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? we(i, a) : i.dispatchEvent(a);
}
var Dr = br, Or = Sr, kr = "focusScope.autoFocusOnMount", Ar = "focusScope.autoFocusOnUnmount", jr = {
	bubbles: !1,
	cancelable: !0
}, Mr = "FocusScope", Nr = e.forwardRef((t, n) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = t, [c, l] = e.useState(null), u = X(a), d = X(o), f = e.useRef(null), p = H(n, (e) => l(e)), m = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (m.paused || !c) return;
				let t = e.target;
				c.contains(t) ? f.current = t : Br(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || Br(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Br(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		c,
		m.paused
	]), e.useEffect(() => {
		if (c) {
			Vr.add(m);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(kr, jr);
				c.addEventListener(kr, u), c.dispatchEvent(t), t.defaultPrevented || (Pr(Wr(Ir(c)), { select: !0 }), document.activeElement === e && Br(c));
			}
			return () => {
				c.removeEventListener(kr, u), setTimeout(() => {
					let t = new CustomEvent(Ar, jr);
					c.addEventListener(Ar, d), c.dispatchEvent(t), t.defaultPrevented || Br(e ?? document.body, { select: !0 }), c.removeEventListener(Ar, d), Vr.remove(m);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		m
	]);
	let h = e.useCallback((e) => {
		if (!r && !i || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Fr(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Br(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Br(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		m.paused
	]);
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: h
	});
});
Nr.displayName = Mr;
function Pr(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Br(r, { select: t }), document.activeElement !== n) return;
}
function Fr(e) {
	let t = Ir(e);
	return [Lr(t, e), Lr(t.reverse(), e)];
}
function Ir(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Lr(e, t) {
	for (let n of e) if (!Rr(n, { upTo: t })) return n;
}
function Rr(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function zr(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Br(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && zr(e) && t && e.select();
	}
}
var Vr = Hr();
function Hr() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Ur(e, t), e.unshift(t);
		},
		remove(t) {
			e = Ur(e, t), e[0]?.resume();
		}
	};
}
function Ur(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Wr(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-portal@1.1._07cab11bf901f9677d738ea79913cccd/node_modules/@radix-ui/react-portal/dist/index.mjs
var Gr = "Portal", Kr = e.forwardRef((t, n) => {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	W(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? f.createPortal(/* @__PURE__ */ (0, B.jsx)(G.div, {
		...i,
		ref: n
	}), s) : null;
});
Kr.displayName = Gr;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-focus-guard_94a9a7c53a2836a074d94dcf072d0477/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var qr = 0;
function Jr() {
	e.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? Yr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Yr()), qr++, () => {
			qr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), qr--;
		};
	}, []);
}
function Yr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var Xr = function() {
	return Xr = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Xr.apply(this, arguments);
};
function Zr(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Qr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3_f4ade3611e222627629d8a9469bc261e/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var $r = "right-scroll-bar-position", ei = "width-before-scroll-bar", ti = "with-scroll-bars-hidden", ni = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.1.0/node_modules/use-callback-ref/dist/es2015/assignRef.js
function ri(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.1.0/node_modules/use-callback-ref/dist/es2015/useRef.js
function ii(e, t) {
	var n = u(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.1.0/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var ai = typeof window < "u" ? e.useLayoutEffect : e.useEffect, oi = /* @__PURE__ */ new WeakMap();
function si(e, t) {
	var n = ii(t || null, function(t) {
		return e.forEach(function(e) {
			return ri(e, t);
		});
	});
	return ai(function() {
		var t = oi.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || ri(e, null);
			}), i.forEach(function(e) {
				r.has(e) || ri(e, a);
			});
		}
		oi.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.1.0/node_modules/use-sidecar/dist/es2015/medium.js
function ci(e) {
	return e;
}
function li(e, t) {
	t === void 0 && (t = ci);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function ui(e) {
	e === void 0 && (e = {});
	var t = li(null);
	return t.options = Xr({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.1.0/node_modules/use-sidecar/dist/es2015/exports.js
var di = function(t) {
	var n = t.sideCar, r = Zr(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Xr({}, r));
};
di.isSideCarExport = !0;
function fi(e, t) {
	return e.useMedium(t), di;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.1.0/node_modules/react-remove-scroll/dist/es2015/medium.js
var pi = ui(), mi = function() {}, hi = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: mi,
		onWheelCapture: mi,
		onTouchMoveCapture: mi
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Zr(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = si([r, n]), w = Xr(Xr({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: pi,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Xr(Xr({}, w), { ref: C })) : e.createElement(y, Xr({}, w, {
		className: l,
		ref: C
	}), c));
});
hi.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, hi.classNames = {
	fullWidth: ei,
	zeroRight: $r
};
//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var gi, _i = function() {
	if (gi) return gi;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_e8bb61ecaeadeaf6ae2681db1f2e4d4d/node_modules/react-style-singleton/dist/es2015/singleton.js
function vi() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = _i();
	return t && e.setAttribute("nonce", t), e;
}
function yi(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bi(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var xi = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = vi()) && (yi(t, n), bi(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Si = function() {
	var t = xi();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Ci = function() {
	var e = Si();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, wi = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Ti = function(e) {
	return parseInt(e || "", 10) || 0;
}, Ei = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Ti(n),
		Ti(r),
		Ti(i)
	];
}, Di = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return wi;
	var t = Ei(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Oi = Ci(), ki = "data-scroll-locked", Ai = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ti} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${ki}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${$r} {
    right: ${s}px ${r};
  }
  
  .${ei} {
    margin-right: ${s}px ${r};
  }
  
  .${$r} .${$r} {
    right: 0 ${r};
  }
  
  .${ei} .${ei} {
    margin-right: 0 ${r};
  }
  
  body[${ki}] {
    ${ni}: ${s}px;
  }
`;
}, ji = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Mi = function() {
	e.useEffect(function() {
		return document.body.setAttribute(ki, (ji() + 1).toString()), function() {
			var e = ji() - 1;
			e <= 0 ? document.body.removeAttribute(ki) : document.body.setAttribute(ki, e.toString());
		};
	}, []);
}, Ni = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	Mi();
	var o = e.useMemo(function() {
		return Di(a);
	}, [a]);
	return e.createElement(Oi, { styles: Ai(o, !n, a, r ? "" : "!important") });
}, Pi = !1;
if (typeof window < "u") try {
	var Fi = Object.defineProperty({}, "passive", { get: function() {
		return Pi = !0, !0;
	} });
	window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
} catch {
	Pi = !1;
}
var Ii = Pi ? { passive: !1 } : !1, Li = function(e) {
	return e.tagName === "TEXTAREA";
}, Ri = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Li(e) && n[t] === "visible");
}, zi = function(e) {
	return Ri(e, "overflowY");
}, Bi = function(e) {
	return Ri(e, "overflowX");
}, Vi = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Wi(e, r)) {
			var i = Gi(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Hi = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ui = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, Wi = function(e, t) {
	return e === "v" ? zi(t) : Bi(t);
}, Gi = function(e, t) {
	return e === "v" ? Hi(t) : Ui(t);
}, Ki = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, qi = function(e, t, n, r, i) {
	var a = Ki(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Gi(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && Wi(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Ji = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yi = function(e) {
	return [e.deltaX, e.deltaY];
}, Xi = function(e) {
	return e && "current" in e ? e.current : e;
}, Zi = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, Qi = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, $i = 0, ea = [];
function ta(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState($i++)[0], o = e.useState(Ci)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = Qr([t.lockRef.current], (t.shards || []).map(Xi), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = Ji(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Vi(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Vi(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return qi(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!ea.length || ea[ea.length - 1] !== o)) {
			var r = "deltaY" in t ? Yi(t) : Ji(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Zi(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Xi).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: na(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Ji(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Yi(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Ji(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return ea.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Ii), document.addEventListener("touchmove", l, Ii), document.addEventListener("touchstart", d, Ii), function() {
			ea = ea.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Ii), document.removeEventListener("touchmove", l, Ii), document.removeEventListener("touchstart", d, Ii);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: Qi(a) }) : null, m ? e.createElement(Ni, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function na(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.1.0/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var ra = fi(pi, ta), ia = e.forwardRef(function(t, n) {
	return e.createElement(hi, Xr({}, t, {
		ref: n,
		sideCar: ra
	}));
});
ia.classNames = hi.classNames;
//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var aa = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, oa = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ca = {}, la = 0, ua = function(e) {
	return e && (e.host || ua(e.parentNode));
}, da = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ua(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, fa = function(e, t, n, r) {
	var i = da(t, Array.isArray(e) ? e : [e]);
	ca[n] || (ca[n] = /* @__PURE__ */ new WeakMap());
	var a = ca[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (oa.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				oa.set(e, c), a.set(e, l), o.push(e), c === 1 && i && sa.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), la++, function() {
		o.forEach(function(e) {
			var t = oa.get(e) - 1, i = a.get(e) - 1;
			oa.set(e, t), a.set(e, i), t || (sa.has(e) || e.removeAttribute(r), sa.delete(e)), i || e.removeAttribute(n);
		}), la--, la || (oa = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ca = {});
	};
}, pa = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || aa(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), fa(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, ma = "Dialog", [ha, ga] = V(ma), [_a, va] = ha(ma), ya = (t) => {
	let { __scopeDialog: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !0 } = t, c = e.useRef(null), l = e.useRef(null), [u, d] = xe({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: ma
	});
	return /* @__PURE__ */ (0, B.jsx)(_a, {
		scope: n,
		triggerRef: c,
		contentRef: l,
		contentId: Me(),
		titleId: Me(),
		descriptionId: Me(),
		open: u,
		onOpenChange: d,
		onOpenToggle: e.useCallback(() => d((e) => !e), [d]),
		modal: s,
		children: r
	});
};
ya.displayName = ma;
var ba = "DialogTrigger", xa = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = va(ba, n), a = H(t, i.triggerRef);
	return /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Va(i.open),
		...r,
		ref: a,
		onClick: U(e.onClick, i.onOpenToggle)
	});
});
xa.displayName = ba;
var Sa = "DialogPortal", [Ca, wa] = ha(Sa, { forceMount: void 0 }), Ta = (t) => {
	let { __scopeDialog: n, forceMount: r, children: i, container: a } = t, o = va(Sa, n);
	return /* @__PURE__ */ (0, B.jsx)(Ca, {
		scope: n,
		forceMount: r,
		children: e.Children.map(i, (e) => /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: r || o.open,
			children: /* @__PURE__ */ (0, B.jsx)(Kr, {
				asChild: !0,
				container: a,
				children: e
			})
		}))
	});
};
Ta.displayName = Sa;
var Ea = "DialogOverlay", Da = e.forwardRef((e, t) => {
	let n = wa(Ea, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = va(Ea, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, B.jsx)(ka, {
			...i,
			ref: t
		})
	}) : null;
});
Da.displayName = Ea;
var Oa = /* @__PURE__ */ fe("DialogOverlay.RemoveScroll"), ka = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = va(Ea, n);
	return /* @__PURE__ */ (0, B.jsx)(ia, {
		as: Oa,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			"data-state": Va(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), Aa = "DialogContent", ja = e.forwardRef((e, t) => {
	let n = wa(Aa, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = va(Aa, e.__scopeDialog);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, B.jsx)(Ma, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, B.jsx)(Na, {
			...i,
			ref: t
		})
	});
});
ja.displayName = Aa;
var Ma = e.forwardRef((t, n) => {
	let r = va(Aa, t.__scopeDialog), i = e.useRef(null), a = H(n, r.contentRef, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return pa(e);
	}, []), /* @__PURE__ */ (0, B.jsx)(Pa, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
			e.preventDefault(), r.triggerRef.current?.focus();
		}),
		onPointerDownOutside: U(t.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault())
	});
}), Na = e.forwardRef((t, n) => {
	let r = va(Aa, t.__scopeDialog), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ (0, B.jsx)(Pa, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), Pa = e.forwardRef((t, n) => {
	let { __scopeDialog: r, trapFocus: i, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = t, c = va(Aa, r), l = e.useRef(null), u = H(n, l);
	return Jr(), /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(Nr, {
		asChild: !0,
		loop: !0,
		trapped: i,
		onMountAutoFocus: a,
		onUnmountAutoFocus: o,
		children: /* @__PURE__ */ (0, B.jsx)(br, {
			role: "dialog",
			id: c.contentId,
			"aria-describedby": c.descriptionId,
			"aria-labelledby": c.titleId,
			"data-state": Va(c.open),
			...s,
			ref: u,
			onDismiss: () => c.onOpenChange(!1)
		})
	}), /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(Ga, { titleId: c.titleId }), /* @__PURE__ */ (0, B.jsx)(qa, {
		contentRef: l,
		descriptionId: c.descriptionId
	})] })] });
}), Fa = "DialogTitle", Ia = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = va(Fa, n);
	return /* @__PURE__ */ (0, B.jsx)(G.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
Ia.displayName = Fa;
var La = "DialogDescription", Ra = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = va(La, n);
	return /* @__PURE__ */ (0, B.jsx)(G.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
Ra.displayName = La;
var za = "DialogClose", Ba = e.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = va(za, n);
	return /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		...r,
		ref: t,
		onClick: U(e.onClick, () => i.onOpenChange(!1))
	});
});
Ba.displayName = za;
function Va(e) {
	return e ? "open" : "closed";
}
var Ha = "DialogTitleWarning", [Ua, Wa] = ce(Ha, {
	contentName: Aa,
	titleName: Fa,
	docsSlug: "dialog"
}), Ga = ({ titleId: t }) => {
	let n = Wa(Ha), r = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
	return e.useEffect(() => {
		t && (document.getElementById(t) || console.error(r));
	}, [r, t]), null;
}, Ka = "DialogDescriptionWarning", qa = ({ contentRef: t, descriptionId: n }) => {
	let r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Wa(Ka).contentName}}.`;
	return e.useEffect(() => {
		let e = t.current?.getAttribute("aria-describedby");
		n && e && (document.getElementById(n) || console.warn(r));
	}, [
		r,
		t,
		n
	]), null;
}, Ja = ya, Ya = xa, Xa = Ta, Za = Da, Qa = ja, $a = Ia, eo = Ra, to = Ba, no = "AlertDialog", [ro, io] = V(no, [ga]), ao = ga(), oo = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = ao(t);
	return /* @__PURE__ */ (0, B.jsx)(Ja, {
		...r,
		...n,
		modal: !0
	});
};
oo.displayName = no;
var so = "AlertDialogTrigger", co = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = ao(n);
	return /* @__PURE__ */ (0, B.jsx)(Ya, {
		...i,
		...r,
		ref: t
	});
});
co.displayName = so;
var lo = "AlertDialogPortal", uo = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = ao(t);
	return /* @__PURE__ */ (0, B.jsx)(Xa, {
		...r,
		...n
	});
};
uo.displayName = lo;
var fo = "AlertDialogOverlay", po = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = ao(n);
	return /* @__PURE__ */ (0, B.jsx)(Za, {
		...i,
		...r,
		ref: t
	});
});
po.displayName = fo;
var mo = "AlertDialogContent", [ho, go] = ro(mo), _o = /* @__PURE__ */ he("AlertDialogContent"), vo = e.forwardRef((t, n) => {
	let { __scopeAlertDialog: r, children: i, ...a } = t, o = ao(r), s = e.useRef(null), c = H(n, s), l = e.useRef(null);
	return /* @__PURE__ */ (0, B.jsx)(Ua, {
		contentName: mo,
		titleName: yo,
		docsSlug: "alert-dialog",
		children: /* @__PURE__ */ (0, B.jsx)(ho, {
			scope: r,
			cancelRef: l,
			children: /* @__PURE__ */ (0, B.jsxs)(Qa, {
				role: "alertdialog",
				...o,
				...a,
				ref: c,
				onOpenAutoFocus: U(a.onOpenAutoFocus, (e) => {
					e.preventDefault(), l.current?.focus({ preventScroll: !0 });
				}),
				onPointerDownOutside: (e) => e.preventDefault(),
				onInteractOutside: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ (0, B.jsx)(_o, { children: i }), /* @__PURE__ */ (0, B.jsx)(Do, { contentRef: s })]
			})
		})
	});
});
vo.displayName = mo;
var yo = "AlertDialogTitle", bo = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = ao(n);
	return /* @__PURE__ */ (0, B.jsx)($a, {
		...i,
		...r,
		ref: t
	});
});
bo.displayName = yo;
var xo = "AlertDialogDescription", So = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = ao(n);
	return /* @__PURE__ */ (0, B.jsx)(eo, {
		...i,
		...r,
		ref: t
	});
});
So.displayName = xo;
var Co = "AlertDialogAction", wo = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = ao(n);
	return /* @__PURE__ */ (0, B.jsx)(to, {
		...i,
		...r,
		ref: t
	});
});
wo.displayName = Co;
var To = "AlertDialogCancel", Eo = e.forwardRef((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = go(To, n), a = ao(n), o = H(t, i);
	return /* @__PURE__ */ (0, B.jsx)(to, {
		...a,
		...r,
		ref: o
	});
});
Eo.displayName = To;
var Do = ({ contentRef: t }) => {
	let n = `\`${mo}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${mo}\` by passing a \`${xo}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${mo}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
	return e.useEffect(() => {
		document.getElementById(t.current?.getAttribute("aria-describedby")) || console.warn(n);
	}, [n, t]), null;
}, Oo = oo, ko = co, Ao = uo, jo = po, Mo = vo, No = wo, Po = Eo, Fo = bo, Io = So, Lo = Oo, Ro = ko, zo = Ao, Bo = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(jo, {
	className: Y("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
Bo.displayName = jo.displayName;
var Vo = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsxs)(zo, { children: [/* @__PURE__ */ (0, B.jsx)(Bo, {}), /* @__PURE__ */ (0, B.jsx)(Mo, {
	ref: n,
	className: Y("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
	...t
})] }));
Vo.displayName = Mo.displayName;
var Ho = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
Ho.displayName = "AlertDialogHeader";
var Uo = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
Uo.displayName = "AlertDialogFooter";
var Wo = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Fo, {
	ref: n,
	className: Y("text-lg font-semibold", e),
	...t
}));
Wo.displayName = Fo.displayName;
var Go = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Io, {
	ref: n,
	className: Y("text-sm text-muted-foreground", e),
	...t
}));
Go.displayName = Io.displayName;
var Ko = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(No, {
	ref: n,
	className: Y(Us(), e),
	...t
}));
Ko.displayName = No.displayName;
var qo = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Po, {
	ref: n,
	className: Y(Us({ variant: "outline" }), "mt-2 sm:mt-0", e),
	...t
}));
qo.displayName = Po.displayName;
//#endregion
//#region lib/components/async-select/async-select.component.tsx
function Jo({ options: e, isLoading: t, renderOption: n, getOptionValue: i, getDisplayValue: o, label: s, placeholder: c = "Selecione...", value: l, onChange: d, onSearchChange: f, disabled: p = !1, triggerClassName: m, noResultsMessage: h, clearable: g = !0, error: v }) {
	let [y, b] = u(!1), [x, S] = u(l), [C, w] = u(null), [T, D] = u("");
	a(() => {
		S(l);
	}, [l]), a(() => {
		if (l && e.length > 0) {
			let t = e.find((e) => i(e) === l);
			t && w(t);
		}
	}, [
		l,
		e,
		i
	]);
	let O = r((t) => {
		let n = g && t === x ? "" : t;
		l && S(n), w(e.find((e) => i(e) === n) || null), d(n), b(!1);
	}, [
		x,
		d,
		g,
		e,
		i,
		l
	]);
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "space-y-1",
		children: [
			!!s && /* @__PURE__ */ (0, B.jsx)(IS, {
				className: Y(v && "text-destructive"),
				children: s
			}),
			/* @__PURE__ */ (0, B.jsxs)(Nv, {
				open: y,
				onOpenChange: b,
				children: [/* @__PURE__ */ (0, B.jsx)(Pv, {
					asChild: !0,
					children: /* @__PURE__ */ (0, B.jsxs)(Ws, {
						variant: "outline",
						role: "combobox",
						"aria-expanded": y,
						className: Y("justify-between w-full hover:bg-input bg-input font-normal", p && "opacity-50 cursor-not-allowed", !l && "text-muted-foreground", m),
						disabled: p,
						children: [/* @__PURE__ */ (0, B.jsx)("div", {
							className: "truncate",
							children: l && C ? o(C) : c
						}), /* @__PURE__ */ (0, B.jsx)(E, {
							className: "opacity-50",
							size: 10
						})]
					})
				}), /* @__PURE__ */ (0, B.jsx)(Fv, {
					className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]",
					children: /* @__PURE__ */ (0, B.jsxs)(dh, {
						shouldFilter: !1,
						children: [/* @__PURE__ */ (0, B.jsxs)("div", {
							className: "relative border-b",
							children: [/* @__PURE__ */ (0, B.jsx)(ph, {
								placeholder: "Buscar",
								value: T,
								onValueChange: (e) => {
									D(e), f(e);
								}
							}), t && e.length > 0 && /* @__PURE__ */ (0, B.jsx)("div", {
								className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center",
								children: /* @__PURE__ */ (0, B.jsx)(k, { className: "h-4 w-4 animate-spin" })
							})]
						}), /* @__PURE__ */ (0, B.jsxs)(mh, { children: [
							t && e.length === 0 && /* @__PURE__ */ (0, B.jsx)(Yo, {}),
							!t && e.length === 0 && /* @__PURE__ */ (0, B.jsx)(hh, { children: /* @__PURE__ */ (0, B.jsx)("div", {
								className: "py-2 text-center text-sm text-muted-foreground italic",
								children: h ?? "Nenhum resultado encontrado."
							}) }),
							/* @__PURE__ */ (0, B.jsx)(gh, { children: e.map((e) => /* @__PURE__ */ (0, B.jsxs)(vh, {
								value: i(e),
								onSelect: O,
								children: [/* @__PURE__ */ (0, B.jsx)(_, { className: Y("mr-2 size-4 shrink-0", x === i(e) ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, B.jsx)("div", {
									className: "w-0 flex-1",
									children: n(e)
								})]
							}, i(e))) })
						] })]
					})
				})]
			}),
			!!v && /* @__PURE__ */ (0, B.jsx)("p", {
				className: "text-destructive dark:text-red-400 text-[0.8rem]",
				children: v
			})
		]
	});
}
function Yo() {
	return /* @__PURE__ */ (0, B.jsx)(gh, { children: [
		1,
		2,
		3
	].map((e) => /* @__PURE__ */ (0, B.jsx)(vh, {
		disabled: !0,
		className: "p-0",
		children: /* @__PURE__ */ (0, B.jsx)(JD, { className: "w-full h-8 my-0.5" })
	}, e)) });
}
//#endregion
//#region lib/components/async-select-form/async-select-form.component.tsx
var Xo = ({ name: e, label: t, disabled: n, isLoading: r, options: i, placeholder: a = "Selecione", onSearchChange: o, getDisplayValue: s, getOptionValue: c, renderOption: l }) => {
	let { control: u } = ne();
	return /* @__PURE__ */ (0, B.jsx)(zS, {
		name: e,
		control: u,
		render: ({ field: e }) => /* @__PURE__ */ (0, B.jsxs)(HS, { children: [
			!!t && /* @__PURE__ */ (0, B.jsx)(US, { children: t }),
			/* @__PURE__ */ (0, B.jsx)(Jo, {
				options: i,
				value: e.value,
				placeholder: a,
				onSearchChange: o,
				getDisplayValue: s,
				getOptionValue: c,
				renderOption: l,
				onChange: (t) => e.onChange(t),
				isLoading: r,
				disabled: n
			}),
			/* @__PURE__ */ (0, B.jsx)(KS, {})
		] })
	});
};
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-context@1.1_d36b6dd1fc4371e84d7f573fac008dc2/node_modules/@radix-ui/react-context/dist/index.mjs
function Zo(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = (n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, B.jsx)(c.Provider, {
				value: l,
				children: i
			});
		};
		s.displayName = n + "Provider";
		function c(r, s) {
			let c = s?.[t]?.[o] || a, l = e.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [s, c];
	}
	let a = () => {
		let n = r.map((t) => e.createContext(t));
		return function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = t, [i, Qo(a, ...n)];
}
function Qo(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = () => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs
var $o = Symbol.for("react.lazy"), es = e.use;
function ts(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function ns(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === $o && "_payload" in e && ts(e._payload);
}
/* @__NO_SIDE_EFFECTS__ */
function rs(t) {
	let n = /* @__PURE__ */ as(t), r = e.forwardRef((t, r) => {
		let { children: i, ...a } = t;
		ns(i) && typeof es == "function" && (i = es(i._payload));
		let o = e.Children.toArray(i), s = o.find(ss);
		if (s) {
			let t = s.props.children, i = o.map((n) => n === s ? e.Children.count(t) > 1 ? e.Children.only(null) : e.isValidElement(t) ? t.props.children : null : n);
			return /* @__PURE__ */ (0, B.jsx)(n, {
				...a,
				ref: r,
				children: e.isValidElement(t) ? e.cloneElement(t, void 0, i) : null
			});
		}
		return /* @__PURE__ */ (0, B.jsx)(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${t}.Slot`, r;
}
var is = /* @__PURE__ */ rs("Slot");
/* @__NO_SIDE_EFFECTS__ */
function as(t) {
	let n = e.forwardRef((t, n) => {
		let { children: r, ...i } = t;
		if (ns(r) && typeof es == "function" && (r = es(r._payload)), e.isValidElement(r)) {
			let t = ls(r), a = cs(i, r.props);
			return r.type !== e.Fragment && (a.ref = n ? de(n, t) : t), e.cloneElement(r, a);
		}
		return e.Children.count(r) > 1 ? e.Children.only(null) : null;
	});
	return n.displayName = `${t}.SlotClone`, n;
}
var os = Symbol("radix.slottable");
function ss(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === os;
}
function cs(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function ls(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-primitive@2_31968672578c38bb0d2d7d0e9bfe46f1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var us = [
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
].reduce((t, n) => {
	let r = /* @__PURE__ */ rs(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, B.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {}), ds = /* @__PURE__ */ ie(((e) => {
	var t = z("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), fs = /* @__PURE__ */ ie(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = z("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), ps = (/* @__PURE__ */ ie(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ds() : t.exports = fs();
})))();
function ms() {
	return (0, ps.useSyncExternalStore)(hs, () => !0, () => !1);
}
function hs() {
	return () => {};
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-avatar@1.1._6ec17df92404235cee01ed10ac55b0e7/node_modules/@radix-ui/react-avatar/dist/index.mjs
var gs = "Avatar", [_s, vs] = Zo(gs), [ys, bs] = _s(gs), xs = e.forwardRef((t, n) => {
	let { __scopeAvatar: r, ...i } = t, [a, o] = e.useState("idle");
	return /* @__PURE__ */ (0, B.jsx)(ys, {
		scope: r,
		imageLoadingStatus: a,
		onImageLoadingStatusChange: o,
		children: /* @__PURE__ */ (0, B.jsx)(us.span, {
			...i,
			ref: n
		})
	});
});
xs.displayName = gs;
var Ss = "AvatarImage", Cs = e.forwardRef((e, t) => {
	let { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {}, ...a } = e, o = bs(Ss, n), s = Ds(r, a), c = X((e) => {
		i(e), o.onImageLoadingStatusChange(e);
	});
	return W(() => {
		s !== "idle" && c(s);
	}, [s, c]), s === "loaded" ? /* @__PURE__ */ (0, B.jsx)(us.img, {
		...a,
		ref: t,
		src: r
	}) : null;
});
Cs.displayName = Ss;
var ws = "AvatarFallback", Ts = e.forwardRef((t, n) => {
	let { __scopeAvatar: r, delayMs: i, ...a } = t, o = bs(ws, r), [s, c] = e.useState(i === void 0);
	return e.useEffect(() => {
		if (i !== void 0) {
			let e = window.setTimeout(() => c(!0), i);
			return () => window.clearTimeout(e);
		}
	}, [i]), s && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, B.jsx)(us.span, {
		...a,
		ref: n
	}) : null;
});
Ts.displayName = ws;
function Es(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Ds(t, { referrerPolicy: n, crossOrigin: r }) {
	let i = ms(), a = e.useRef(null), o = i ? (a.current ||= new window.Image(), a.current) : null, [s, c] = e.useState(() => Es(o, t));
	return W(() => {
		c(Es(o, t));
	}, [o, t]), W(() => {
		let e = (e) => () => {
			c(e);
		};
		if (!o) return;
		let t = e("loaded"), i = e("error");
		return o.addEventListener("load", t), o.addEventListener("error", i), n && (o.referrerPolicy = n), typeof r == "string" && (o.crossOrigin = r), () => {
			o.removeEventListener("load", t), o.removeEventListener("error", i);
		};
	}, [
		o,
		r,
		n
	]), s;
}
var Os = xs, ks = Cs, As = Ts, js = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Os, {
	ref: n,
	className: Y("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
	...t
}));
js.displayName = Os.displayName;
var Ms = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(ks, {
	ref: n,
	className: Y("aspect-square h-full w-full", e),
	...t
}));
Ms.displayName = ks.displayName;
var Ns = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(As, {
	ref: n,
	className: Y("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
	...t
}));
Ns.displayName = As.displayName;
//#endregion
//#region lib/components/badge/badge.component.tsx
var Ps = cr("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Fs({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ (0, B.jsx)("div", {
		className: Y(Ps({ variant: t }), e),
		...n
	});
}
//#endregion
//#region lib/components/breadcrumb/breadcrumb.component.tsx
var Is = e.forwardRef(({ ...e }, t) => /* @__PURE__ */ (0, B.jsx)("nav", {
	ref: t,
	"aria-label": "breadcrumb",
	...e
}));
Is.displayName = "Breadcrumb";
var Ls = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("ol", {
	ref: n,
	className: Y("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", e),
	...t
}));
Ls.displayName = "BreadcrumbList";
var Rs = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("li", {
	ref: n,
	className: Y("inline-flex items-center gap-1.5", e),
	...t
}));
Rs.displayName = "BreadcrumbItem";
var zs = e.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(e ? is : "a", {
	ref: r,
	className: Y("transition-colors hover:text-foreground", t),
	...n
}));
zs.displayName = "BreadcrumbLink";
var Bs = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("span", {
	ref: n,
	role: "link",
	"aria-disabled": "true",
	"aria-current": "page",
	className: Y("font-normal text-foreground", e),
	...t
}));
Bs.displayName = "BreadcrumbPage";
var Vs = ({ children: e, className: t, ...n }) => /* @__PURE__ */ (0, B.jsx)("li", {
	role: "presentation",
	"aria-hidden": "true",
	className: Y("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
	...n,
	children: e ?? /* @__PURE__ */ (0, B.jsx)(C, {})
});
Vs.displayName = "BreadcrumbSeparator";
var Hs = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsxs)("span", {
	role: "presentation",
	"aria-hidden": "true",
	className: Y("flex h-9 w-9 items-center justify-center relative", e),
	...t,
	children: [/* @__PURE__ */ (0, B.jsx)(A, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
		className: "sr-only",
		children: "More"
	})]
});
Hs.displayName = "BreadcrumbElipssis";
//#endregion
//#region lib/components/button/button.component.tsx
var Us = cr("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer", {
	variants: {
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
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Ws = e.forwardRef(({ className: e, variant: t, size: n, disabled: r, href: i, ...a }, o) => /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: i ? /* @__PURE__ */ (0, B.jsx)(re, {
	className: Y(Us({
		variant: t,
		size: n,
		className: e
	})),
	ref: o,
	to: i,
	...a
}) : /* @__PURE__ */ (0, B.jsx)("button", {
	className: Y(Us({
		variant: t,
		size: n,
		className: e
	})),
	ref: o,
	disabled: r,
	...a
}) }));
Ws.displayName = "Button";
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzName/index.js
function Gs(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzOffset/index.js
var Ks = {}, qs = {};
function Js(e, t) {
	try {
		let n = (Ks[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in qs ? qs[n] : Xs(n, n.split(":"));
	} catch {
		if (e in qs) return qs[e];
		let t = e?.match(Ys);
		return t ? Xs(e, t.slice(1)) : NaN;
	}
}
var Ys = /([+-]\d\d):?(\d\d)?/;
function Xs(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return qs[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/mini.js
var Zs = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Js(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), tc(this, NaN), $s(this)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Js(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), $s(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Qs = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Qs.test(e)) return;
	let t = e.replace(Qs, "$1UTC");
	Zs.prototype[t] && (e.startsWith("get") ? Zs.prototype[e] = function() {
		return this.internal[t]();
	} : (Zs.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), ec(this), +this;
	}, Zs.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), $s(this), +this;
	}));
});
function $s(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Js(e.timeZone, e) * 60));
}
function ec(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), tc(e);
}
function tc(e) {
	let t = Js(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let i = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = i - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	let s = i - n;
	s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
	let c = /* @__PURE__ */ new Date(+e);
	c.setUTCSeconds(0);
	let l = i > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, u = Math.round(-(Js(e.timeZone, e) * 60)) % 60;
	(u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
	let d = Js(e.timeZone, e), f = d > 0 ? Math.floor(d) : Math.ceil(d), p = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - f, m = f !== n, h = p - s;
	if (m && h) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + h);
		let t = Js(e.timeZone, e), n = f - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + n), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n));
	}
}
//#endregion
//#region node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/index.js
var nc = class e extends Zs {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${Gs(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, rc = 365.2425, ic = 6048e5, ac = 864e5, oc = 3600 * 24;
oc * 7, oc * rc / 12 * 3;
var sc = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
function cc(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && sc in e ? e[sc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
function Z(e, t) {
	return cc(t || e, e);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js
function lc(e, t, n) {
	let r = Z(e, n?.in);
	return isNaN(t) ? cc(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js
function uc(e, t, n) {
	let r = Z(e, n?.in);
	if (isNaN(t)) return cc(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = cc(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/add.js
function dc(e, t, n) {
	let { years: r = 0, months: i = 0, weeks: a = 0, days: o = 0, hours: s = 0, minutes: c = 0, seconds: l = 0 } = t, u = Z(e, n?.in), d = i || r ? uc(u, i + r * 12) : u, f = o || a ? lc(d, o + a * 7) : d, p = (l + (c + s * 60) * 60) * 1e3;
	return cc(n?.in || e, +f + p);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var fc = {};
function pc() {
	return fc;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
function mc(e, t) {
	let n = pc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Z(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
function hc(e, t) {
	return mc(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeekYear.js
function gc(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear(), i = cc(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = hc(i), o = cc(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = hc(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function _c(e) {
	let t = Z(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
function vc(e, ...t) {
	let n = cc.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
function yc(e, t) {
	let n = Z(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
function bc(e, t, n) {
	let [r, i] = vc(n?.in, e, t), a = yc(r), o = yc(i), s = +a - _c(a), c = +o - _c(o);
	return Math.round((s - c) / ac);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeekYear.js
function xc(e, t) {
	let n = gc(e, t), r = cc(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), hc(r);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js
function Sc(e, t, n) {
	return lc(e, t * 7, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js
function Cc(e, t, n) {
	return uc(e, t * 12, n);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/max.js
function wc(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = cc.bind(null, e));
		let t = Z(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), cc(r, n || NaN);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/min.js
function Tc(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = cc.bind(null, e));
		let t = Z(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), cc(r, n || NaN);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameDay.js
function Ec(e, t, n) {
	let [r, i] = vc(n?.in, e, t);
	return +yc(r) == +yc(i);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
function Dc(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
function Oc(e) {
	return !(!Dc(e) && typeof e != "number" || isNaN(+Z(e)));
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarMonths.js
function kc(e, t, n) {
	let [r, i] = vc(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js
function Ac(e, t) {
	let n = Z(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeInterval.js
function jc(e, t) {
	let [n, r] = vc(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMonthOfInterval.js
function Mc(e, t) {
	let { start: n, end: r } = jc(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(cc(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js
function Nc(e, t) {
	let n = Z(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfYear.js
function Pc(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
function Fc(e, t) {
	let n = Z(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachYearOfInterval.js
function Ic(e, t) {
	let { start: n, end: r } = jc(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(cc(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js
function Lc(e, t) {
	let n = pc(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Z(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfISOWeek.js
function Rc(e, t) {
	return Lc(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var zc = {
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
}, Bc = (e, t, n) => {
	let r, i = zc[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Vc(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Hc = {
	date: Vc({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Vc({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Vc({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Uc = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, Wc = (e, t, n, r) => Uc[e];
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function Gc(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var Kc = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: Gc({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: Gc({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: Gc({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
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
		},
		defaultWidth: "wide"
	}),
	day: Gc({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: Gc({
		values: {
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
		},
		defaultWidth: "wide",
		formattingValues: {
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
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js
function qc(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Yc(s, (e) => e.test(o)) : Jc(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Jc(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Yc(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function Xc(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js
var Zc = {
	code: "en-US",
	formatDistance: Bc,
	formatLong: Hc,
	formatRelative: Wc,
	localize: Kc,
	match: {
		ordinalNumber: Xc({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: qc({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: qc({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: qc({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
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
			},
			defaultParseWidth: "any"
		}),
		day: qc({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: qc({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDayOfYear.js
function Qc(e, t) {
	let n = Z(e, t?.in);
	return bc(n, Fc(n)) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
function $c(e, t) {
	let n = Z(e, t?.in), r = hc(n) - +xc(n);
	return Math.round(r / ic) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeekYear.js
function el(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear(), i = pc(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = cc(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = mc(o, t), c = cc(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = mc(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeekYear.js
function tl(e, t) {
	let n = pc(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = el(e, t), a = cc(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), mc(a, t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
function nl(e, t) {
	let n = Z(e, t?.in), r = mc(n, t) - +tl(n, t);
	return Math.round(r / ic) + 1;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/addLeadingZeros.js
function Q(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/lightFormatters.js
var rl = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Q(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Q(n + 1, 2);
	},
	d(e, t) {
		return Q(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return Q(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Q(e.getHours(), t.length);
	},
	m(e, t) {
		return Q(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Q(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Q(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, il = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, al = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return rl.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = el(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Q(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Q(a, t.length);
	},
	R: function(e, t) {
		return Q(gc(e), t.length);
	},
	u: function(e, t) {
		return Q(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Q(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return Q(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return rl.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return Q(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = nl(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Q(i, t.length);
	},
	I: function(e, t, n) {
		let r = $c(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Q(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : rl.d(e, t);
	},
	D: function(e, t, n) {
		let r = Qc(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Q(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return Q(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return Q(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return Q(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? il.noon : r === 0 ? il.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? il.evening : r >= 12 ? il.afternoon : r >= 4 ? il.morning : il.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return rl.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : rl.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Q(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : rl.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : rl.s(e, t);
	},
	S: function(e, t) {
		return rl.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return sl(r);
			case "XXXX":
			case "XX": return cl(r);
			default: return cl(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return sl(r);
			case "xxxx":
			case "xx": return cl(r);
			default: return cl(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + ol(r, ":");
			default: return "GMT" + cl(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + ol(r, ":");
			default: return "GMT" + cl(r, ":");
		}
	},
	t: function(e, t, n) {
		return Q(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Q(+e, t.length);
	}
};
function ol(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Q(a, 2);
}
function sl(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Q(Math.abs(e) / 60, 2) : cl(e, t);
}
function cl(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Q(Math.trunc(r / 60), 2), a = Q(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/format/longFormatters.js
var ll = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, ul = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, dl = {
	p: ul,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return ll(e, t);
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
			default:
				a = t.dateTime({ width: "full" });
				break;
		}
		return a.replace("{{date}}", ll(r, t)).replace("{{time}}", ul(i, t));
	}
}, fl = /^D+$/, pl = /^Y+$/, ml = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function hl(e) {
	return fl.test(e);
}
function gl(e) {
	return pl.test(e);
}
function _l(e, t, n) {
	let r = vl(e, t, n);
	if (console.warn(r), ml.includes(e)) throw RangeError(r);
}
function vl(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var yl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xl = /^'([^]*?)'?$/, Sl = /''/g, Cl = /[a-zA-Z]/;
function wl(e, t, n) {
	let r = pc(), i = n?.locale ?? r.locale ?? Zc, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Z(e, n?.in);
	if (!Oc(s)) throw RangeError("Invalid time value");
	let c = t.match(bl).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = dl[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(yl).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Tl(e)
		};
		if (al[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Cl)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && gl(a) || !n?.useAdditionalDayOfYearTokens && hl(a)) && _l(a, t, String(e));
		let o = al[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Tl(e) {
	let t = e.match(xl);
	return t ? t[1].replace(Sl, "'") : e;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDaysInMonth.js
function El(e, t) {
	let n = Z(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = cc(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMonth.js
function Dl(e, t) {
	return Z(e, t?.in).getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
function Ol(e, t) {
	return Z(e, t?.in).getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isAfter.js
function kl(e, t) {
	return +Z(e) > +Z(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
function Al(e, t) {
	return +Z(e) < +Z(t);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMonth.js
function jl(e, t, n) {
	let [r, i] = vc(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameYear.js
function Ml(e, t, n) {
	let [r, i] = vc(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMonth.js
function Nl(e, t, n) {
	let r = Z(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = cc(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = El(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setYear.js
function Pl(e, t, n) {
	let r = Z(e, n?.in);
	return isNaN(+r) ? cc(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var Fl = 5, Il = 4;
function Ll(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, Fl * 7 - 1);
	return t.getMonth(e) === t.getMonth(a) ? Fl : Il;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function Rl(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function zl(e, t) {
	let n = Rl(e, t), r = Ll(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/pt-BR/_lib/formatDistance.js
var Bl = {
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
}, Vl = (e, t, n) => {
	let r, i = Bl[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r;
}, Hl = {
	date: Vc({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Vc({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: Vc({
		formats: {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Ul = {
	lastWeek: (e) => {
		let t = e.getDay();
		return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
	},
	yesterday: "'ontem às' p",
	today: "'hoje às' p",
	tomorrow: "'amanhã às' p",
	nextWeek: "eeee 'às' p",
	other: "P"
}, Wl = {
	code: "pt-BR",
	formatDistance: Vl,
	formatLong: Hl,
	formatRelative: (e, t, n, r) => {
		let i = Ul[e];
		return typeof i == "function" ? i(t) : i;
	},
	localize: {
		ordinalNumber: (e, t) => {
			let n = Number(e);
			return t?.unit === "week" ? n + "ª" : n + "º";
		},
		era: Gc({
			values: {
				narrow: ["AC", "DC"],
				abbreviated: ["AC", "DC"],
				wide: ["antes de cristo", "depois de cristo"]
			},
			defaultWidth: "wide"
		}),
		quarter: Gc({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4"
				],
				abbreviated: [
					"T1",
					"T2",
					"T3",
					"T4"
				],
				wide: [
					"1º trimestre",
					"2º trimestre",
					"3º trimestre",
					"4º trimestre"
				]
			},
			defaultWidth: "wide",
			argumentCallback: (e) => e - 1
		}),
		month: Gc({
			values: {
				narrow: [
					"j",
					"f",
					"m",
					"a",
					"m",
					"j",
					"j",
					"a",
					"s",
					"o",
					"n",
					"d"
				],
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
			},
			defaultWidth: "wide"
		}),
		day: Gc({
			values: {
				narrow: [
					"D",
					"S",
					"T",
					"Q",
					"Q",
					"S",
					"S"
				],
				short: [
					"dom",
					"seg",
					"ter",
					"qua",
					"qui",
					"sex",
					"sab"
				],
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
			},
			defaultWidth: "wide"
		}),
		dayPeriod: Gc({
			values: {
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
			},
			defaultWidth: "wide",
			formattingValues: {
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
			},
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: Xc({
			matchPattern: /^(\d+)[ºªo]?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: qc({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
				wide: /^(antes de cristo|depois de cristo)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^antes de cristo/i, /^depois de cristo/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: qc({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: qc({
			matchPatterns: {
				narrow: /^[jfmajsond]/i,
				abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
				wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
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
			},
			defaultParseWidth: "any"
		}),
		day: qc({
			matchPatterns: {
				narrow: /^(dom|[23456]ª?|s[aá]b)/i,
				short: /^(dom|[23456]ª?|s[aá]b)/i,
				abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
				wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				short: [
					/^d/i,
					/^2/i,
					/^3/i,
					/^4/i,
					/^5/i,
					/^6/i,
					/^s[aá]/i
				],
				narrow: [
					/^d/i,
					/^2/i,
					/^3/i,
					/^4/i,
					/^5/i,
					/^6/i,
					/^s[aá]/i
				],
				any: [
					/^d/i,
					/^seg/i,
					/^t/i,
					/^qua/i,
					/^qui/i,
					/^sex/i,
					/^s[aá]b/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: qc({
			matchPatterns: {
				narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
				any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn|^meia[-\s]noite/i,
				noon: /^md|^meio[-\s]dia/i,
				morning: /manhã/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noite/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
}, Gl = {
	...Zc,
	labels: {
		labelDayButton: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => wl(e, t, {
				locale: Zc,
				...n
			});
			let a = i(e, "PPPP");
			return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
		},
		labelMonthDropdown: "Choose the Month",
		labelNext: "Go to the Next Month",
		labelPrevious: "Go to the Previous Month",
		labelWeekNumber: (e) => `Week ${e}`,
		labelYearDropdown: "Choose the Year",
		labelGrid: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => wl(e, n, {
				locale: Zc,
				...t
			}), r(e, "LLLL yyyy");
		},
		labelGridcell: (e, t, n, r) => {
			let i;
			i = r && typeof r.format == "function" ? r.format.bind(r) : (e, t) => wl(e, t, {
				locale: Zc,
				...n
			});
			let a = i(e, "PPPP");
			return t?.today && (a = `Today, ${a}`), a;
		},
		labelNav: "Navigation bar",
		labelWeekNumberHeader: "Week Number",
		labelWeekday: (e, t, n) => {
			let r;
			return r = n && typeof n.format == "function" ? n.format.bind(n) : (e, n) => wl(e, n, {
				locale: Zc,
				...t
			}), r(e, "cccc");
		}
	}
}, Kl = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? nc.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new nc(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : lc(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : uc(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : Sc(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : Cc(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : bc(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : kc(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : Mc(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : Ic(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : zl(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : Rc(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : Ac(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : Lc(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : Pc(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : wl(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : $c(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : Dl(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : Ol(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : nl(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : kl(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : Al(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : Dc(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : Ec(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : jl(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : Ml(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : wc(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : Tc(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : Nl(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : Pl(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : Rl(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : yc(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : hc(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : Nc(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : mc(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : Fc(e), this.options = {
			locale: Gl,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
	getMonthYearOrder() {
		let t = this.options.locale?.code;
		return t && e.yearFirstLocales.has(t) ? "year-first" : "month-first";
	}
	formatMonthYear(t) {
		let { locale: n, timeZone: r, numerals: i } = this.options, a = n?.code;
		if (a && e.yearFirstLocales.has(a)) try {
			return new Intl.DateTimeFormat(a, {
				month: "long",
				year: "numeric",
				timeZone: r,
				numberingSystem: i
			}).format(t);
		} catch {}
		let o = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(t, o);
	}
};
Kl.yearFirstLocales = new Set([
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
var ql = new Kl(), Jl = class {
	constructor(e, t, n = ql) {
		this.date = e, this.displayMonth = t, this.outside = !!(t && !n.isSameMonth(e, t)), this.dateLib = n, this.isoDate = n.format(e, "yyyy-MM-dd"), this.displayMonthId = n.format(t, "yyyy-MM"), this.dateMonthId = n.format(e, "yyyy-MM");
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, Yl = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, Xl = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Button.js
function Zl(e) {
	return t.createElement("button", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function Ql(e) {
	return t.createElement("span", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Chevron.js
function $l(e) {
	let { size: n = 24, orientation: r = "left", className: i } = e;
	return t.createElement("svg", {
		className: i,
		width: n,
		height: n,
		viewBox: "0 0 24 24"
	}, r === "up" && t.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), r === "down" && t.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), r === "left" && t.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), r === "right" && t.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Day.js
function eu(e) {
	let { day: n, modifiers: r, ...i } = e;
	return t.createElement("td", { ...i });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/DayButton.js
function tu(e) {
	let { day: n, modifiers: r, ...i } = e, a = t.useRef(null);
	return t.useEffect(() => {
		r.focused && a.current?.focus();
	}, [r.focused]), t.createElement("button", {
		ref: a,
		...i
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/UI.js
var $;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})($ ||= {});
var nu;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(nu ||= {});
var ru;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(ru ||= {});
var iu;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(iu ||= {});
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Dropdown.js
function au(e) {
	let { options: n, className: r, components: i, classNames: a, ...o } = e, s = [a[$.Dropdown], r].join(" "), c = n?.find(({ value: e }) => e === o.value);
	return t.createElement("span", {
		"data-disabled": o.disabled,
		className: a[$.DropdownRoot]
	}, t.createElement(i.Select, {
		className: s,
		...o
	}, n?.map(({ value: e, label: n, disabled: r }) => t.createElement(i.Option, {
		key: e,
		value: e,
		disabled: r
	}, n))), t.createElement("span", {
		className: a[$.CaptionLabel],
		"aria-hidden": !0
	}, c?.label, t.createElement(i.Chevron, {
		orientation: "down",
		size: 18,
		className: a[$.Chevron]
	})));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function ou(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Footer.js
function su(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Month.js
function cu(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i }, e.children);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function lu(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function uu(e) {
	return t.createElement("table", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Months.js
function du(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/useDayPicker.js
var fu = n(void 0);
function pu() {
	let e = i(fu);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function mu(e) {
	let { components: n } = pu();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Nav.js
function hu(e) {
	let { onPreviousClick: n, onNextClick: i, previousMonth: a, nextMonth: o, ...s } = e, { components: c, classNames: l, labels: { labelPrevious: u, labelNext: d } } = pu(), f = r((e) => {
		o && i?.(e);
	}, [o, i]), p = r((e) => {
		a && n?.(e);
	}, [a, n]);
	return t.createElement("nav", { ...s }, t.createElement(c.PreviousMonthButton, {
		type: "button",
		className: l[$.PreviousMonthButton],
		tabIndex: a ? void 0 : -1,
		"aria-disabled": a ? void 0 : !0,
		"aria-label": u(a),
		onClick: p
	}, t.createElement(c.Chevron, {
		disabled: a ? void 0 : !0,
		className: l[$.Chevron],
		orientation: "left"
	})), t.createElement(c.NextMonthButton, {
		type: "button",
		className: l[$.NextMonthButton],
		tabIndex: o ? void 0 : -1,
		"aria-disabled": o ? void 0 : !0,
		"aria-label": d(o),
		onClick: f
	}, t.createElement(c.Chevron, {
		disabled: o ? void 0 : !0,
		orientation: "right",
		className: l[$.Chevron]
	})));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function gu(e) {
	let { components: n } = pu();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Option.js
function _u(e) {
	return t.createElement("option", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function vu(e) {
	let { components: n } = pu();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Root.js
function yu(e) {
	let { rootRef: n, ...r } = e;
	return t.createElement("div", {
		...r,
		ref: n
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Select.js
function bu(e) {
	return t.createElement("select", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Week.js
function xu(e) {
	let { week: n, ...r } = e;
	return t.createElement("tr", { ...r });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Weekday.js
function Su(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Weekdays.js
function Cu(e) {
	return t.createElement("thead", { "aria-hidden": !0 }, t.createElement("tr", { ...e }));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function wu(e) {
	let { week: n, ...r } = e;
	return t.createElement("th", { ...r });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function Tu(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/Weeks.js
function Eu(e) {
	return t.createElement("tbody", { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function Du(e) {
	let { components: n } = pu();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/components/custom-components.js
var Ou = /* @__PURE__ */ ae({
	Button: () => Zl,
	CaptionLabel: () => Ql,
	Chevron: () => $l,
	Day: () => eu,
	DayButton: () => tu,
	Dropdown: () => au,
	DropdownNav: () => ou,
	Footer: () => su,
	Month: () => cu,
	MonthCaption: () => lu,
	MonthGrid: () => uu,
	Months: () => du,
	MonthsDropdown: () => mu,
	Nav: () => hu,
	NextMonthButton: () => gu,
	Option: () => _u,
	PreviousMonthButton: () => vu,
	Root: () => yu,
	Select: () => bu,
	Week: () => xu,
	WeekNumber: () => wu,
	WeekNumberHeader: () => Tu,
	Weekday: () => Su,
	Weekdays: () => Cu,
	Weeks: () => Eu,
	YearsDropdown: () => Du
});
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function ku(e, t, n = !1, r = ql) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/typeguards.js
function Au(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ju(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function Mu(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function Nu(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function Pu(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Fu(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function Iu(e, t, n = ql) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (Fu(t, n)) return t.some((t) => i(e, t));
		if (ju(t)) return ku(t, e, !1, n);
		if (Pu(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (Au(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return Mu(t) ? a(e, t.after) > 0 : Nu(t) ? a(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function Lu(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u = i.today() } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[nu.focused]: [],
		[nu.outside]: [],
		[nu.disabled]: [],
		[nu.hidden]: [],
		[nu.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !!(n && !f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && Iu(e, a, i)), S = !!(o && Iu(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u);
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && Iu(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[nu.focused]: !1,
			[nu.disabled]: !1,
			[nu.hidden]: !1,
			[nu.outside]: !1,
			[nu.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function Ru(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[nu[r]] ? e.push(t[nu[r]]) : t[ru[r]] && e.push(t[ru[r]]), e), [t[$.Day]]);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function zu(e) {
	return {
		...Ou,
		...e
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function Bu(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function Vu() {
	let e = {};
	for (let t in $) e[$[t]] = `rdp-${$[t]}`;
	for (let t in nu) e[nu[t]] = `rdp-${nu[t]}`;
	for (let t in ru) e[ru[t]] = `rdp-${ru[t]}`;
	for (let t in iu) e[iu[t]] = `rdp-${iu[t]}`;
	return e;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function Hu(e, t, n) {
	return (n ?? new Kl(t)).formatMonthYear(e);
}
var Uu = Hu;
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function Wu(e, t, n) {
	return (n ?? new Kl(t)).format(e, "d");
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function Gu(e, t = ql) {
	return t.format(e, "LLLL");
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function Ku(e, t, n) {
	return (n ?? new Kl(t)).format(e, "cccccc");
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function qu(e, t = ql) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function Ju() {
	return "";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function Yu(e, t = ql) {
	return t.format(e, "yyyy");
}
var Xu = Yu, Zu = /* @__PURE__ */ ae({
	formatCaption: () => Hu,
	formatDay: () => Wu,
	formatMonthCaption: () => Uu,
	formatMonthDropdown: () => Gu,
	formatWeekNumber: () => qu,
	formatWeekNumberHeader: () => Ju,
	formatWeekdayName: () => Ku,
	formatYearCaption: () => Xu,
	formatYearDropdown: () => Yu
});
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function Qu(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...Zu,
		...e
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function $u(e, t, n, r) {
	let i = (r ?? new Kl(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var ed = $u;
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function td(e, t, n) {
	return (n ?? new Kl(t)).formatMonthYear(e);
}
var nd = td;
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function rd(e, t, n, r) {
	let i = (r ?? new Kl(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function id(e) {
	return "Choose the Month";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelNav.js
function ad() {
	return "";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelNext.js
var od = "Go to the Next Month";
function sd(e, t) {
	return od;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function cd(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function ld(e, t, n) {
	return (n ?? new Kl(t)).format(e, "cccc");
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function ud(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function dd(e) {
	return "Week Number";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function fd(e) {
	return "Choose the Year";
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/labels/index.js
var pd = /* @__PURE__ */ ae({
	labelCaption: () => nd,
	labelDay: () => ed,
	labelDayButton: () => $u,
	labelGrid: () => td,
	labelGridcell: () => rd,
	labelMonthDropdown: () => id,
	labelNav: () => ad,
	labelNext: () => sd,
	labelPrevious: () => cd,
	labelWeekNumber: () => ud,
	labelWeekNumberHeader: () => dd,
	labelWeekday: () => ld,
	labelYearDropdown: () => fd
}), md = (e, t, n) => t || (n ? typeof n == "function" ? n : (...e) => n : e);
function hd(e, t) {
	let n = t.locale?.labels ?? {};
	return {
		...pd,
		...e ?? {},
		labelDayButton: md($u, e?.labelDayButton, n.labelDayButton),
		labelMonthDropdown: md(id, e?.labelMonthDropdown, n.labelMonthDropdown),
		labelNext: md(sd, e?.labelNext, n.labelNext),
		labelPrevious: md(cd, e?.labelPrevious, n.labelPrevious),
		labelWeekNumber: md(ud, e?.labelWeekNumber, n.labelWeekNumber),
		labelYearDropdown: md(fd, e?.labelYearDropdown, n.labelYearDropdown),
		labelGrid: md(td, e?.labelGrid, n.labelGrid),
		labelGridcell: md(rd, e?.labelGridcell, n.labelGridcell),
		labelNav: md(ad, e?.labelNav, n.labelNav),
		labelWeekNumberHeader: md(dd, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
		labelWeekday: md(ld, e?.labelWeekday, n.labelWeekday)
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function gd(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function _d(e, t = {}, n = {}) {
	let r = { ...t?.[$.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function vd(e, t, n, r) {
	let i = r ?? e.today(), a = n ? e.startOfBroadcastWeek(i, e) : t ? e.startOfISOWeek(i) : e.startOfWeek(i), o = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(a, t);
		o.push(n);
	}
	return o;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function yd(e, t, n, r, i = !1) {
	if (!e || !t) return;
	let { startOfYear: a, endOfYear: o, eachYearOfInterval: s, getYear: c } = r, l = s({
		start: a(e),
		end: o(t)
	});
	return i && l.reverse(), l.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: c(e),
			label: t,
			disabled: !1
		};
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/noonDateLib.js
function bd(e, t = {}) {
	let { weekStartsOn: n, locale: r } = t, i = n ?? r?.options?.weekStartsOn ?? 0, a = (t) => {
		let n = typeof t == "number" || typeof t == "string" ? new Date(t) : t;
		return new nc(n.getFullYear(), n.getMonth(), n.getDate(), 12, 0, 0, e);
	}, o = (e) => {
		let t = a(e);
		return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
	};
	return {
		today: () => a(nc.tz(e)),
		newDate: (t, n, r) => new nc(t, n, r, 12, 0, 0, e),
		startOfDay: (e) => a(e),
		startOfWeek: (e, t) => {
			let n = a(e), r = t?.weekStartsOn ?? i, o = (n.getDay() - r + 7) % 7;
			return n.setDate(n.getDate() - o), n;
		},
		startOfISOWeek: (e) => {
			let t = a(e), n = (t.getDay() - 1 + 7) % 7;
			return t.setDate(t.getDate() - n), t;
		},
		startOfMonth: (e) => {
			let t = a(e);
			return t.setDate(1), t;
		},
		startOfYear: (e) => {
			let t = a(e);
			return t.setMonth(0, 1), t;
		},
		endOfWeek: (e, t) => {
			let n = a(e), r = (((t?.weekStartsOn ?? i) + 6) % 7 - n.getDay() + 7) % 7;
			return n.setDate(n.getDate() + r), n;
		},
		endOfISOWeek: (e) => {
			let t = a(e), n = (7 - t.getDay()) % 7;
			return t.setDate(t.getDate() + n), t;
		},
		endOfMonth: (e) => {
			let t = a(e);
			return t.setMonth(t.getMonth() + 1, 0), t;
		},
		endOfYear: (e) => {
			let t = a(e);
			return t.setMonth(11, 31), t;
		},
		eachMonthOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new nc(n.getFullYear(), n.getMonth(), 1, 12, 0, 0, e), s = r.getFullYear() * 12 + r.getMonth();
			for (; o.getFullYear() * 12 + o.getMonth() <= s;) i.push(new nc(o, e)), o.setMonth(o.getMonth() + 1, 1);
			return i;
		},
		addDays: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t), n;
		},
		addWeeks: (e, t) => {
			let n = a(e);
			return n.setDate(n.getDate() + t * 7), n;
		},
		addMonths: (e, t) => {
			let n = a(e);
			return n.setMonth(n.getMonth() + t), n;
		},
		addYears: (e, t) => {
			let n = a(e);
			return n.setFullYear(n.getFullYear() + t), n;
		},
		eachYearOfInterval: (t) => {
			let n = a(t.start), r = a(t.end), i = [], o = new nc(n.getFullYear(), 0, 1, 12, 0, 0, e);
			for (; o.getFullYear() <= r.getFullYear();) i.push(new nc(o, e)), o.setFullYear(o.getFullYear() + 1, 0, 1);
			return i;
		},
		getWeek: (e, t) => nl(o(e), {
			weekStartsOn: t?.weekStartsOn ?? i,
			firstWeekContainsDate: t?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
		}),
		getISOWeek: (e) => $c(o(e)),
		differenceInCalendarDays: (e, t) => bc(o(e), o(t)),
		differenceInCalendarMonths: (e, t) => kc(o(e), o(t))
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/useAnimation.js
var xd = (e) => e instanceof HTMLElement ? e : null, Sd = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], Cd = (e) => xd(e.querySelector("[data-animated-month]")), wd = (e) => xd(e.querySelector("[data-animated-caption]")), Td = (e) => xd(e.querySelector("[data-animated-weeks]")), Ed = (e) => xd(e.querySelector("[data-animated-nav]")), Dd = (e) => xd(e.querySelector("[data-animated-weekdays]"));
function Od(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = l(null), c = l(r), u = l(!1);
	s(() => {
		let s = c.current;
		if (c.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || s.length === 0 || r.length !== s.length) return;
		let l = a.isSameMonth(r[0].date, s[0].date), d = a.isAfter(r[0].date, s[0].date), f = d ? n[iu.caption_after_enter] : n[iu.caption_before_enter], p = d ? n[iu.weeks_after_enter] : n[iu.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (Sd(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = Cd(e);
			t && e.contains(t) && e.removeChild(t);
			let n = wd(e);
			n && n.classList.remove(f);
			let r = Td(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, u.current || l || i) return;
		let g = m instanceof HTMLElement ? Sd(m) : [], _ = Sd(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			u.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = Ed(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = wd(i);
				s && s.classList.add(f);
				let c = Td(i);
				c && c.classList.add(p);
				let l = () => {
					u.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), c && c.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(l), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = Dd(o);
				m && (m.style.opacity = "0");
				let h = wd(o);
				h && (h.classList.add(d ? n[iu.caption_before_exit] : n[iu.caption_after_exit]), h.addEventListener("animationend", l));
				let _ = Td(o);
				_ && _.classList.add(d ? n[iu.weeks_before_exit] : n[iu.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getDates.js
function kd(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = c ? f(a) : o ? p(m(a)) : h(m(a)), S = t && (c ? f(t) : o ? p(t) : h(t)), C = u(S && g(x, S) ? S : x, b), w = d(a, i) + 1, T = [];
	for (let e = 0; e <= C; e++) {
		let t = l(b, e);
		T.push(t);
	}
	let E = (c ? 35 : 42) * w;
	if (s && T.length < E) {
		let e = E - T.length;
		for (let t = 0; t < e; t++) {
			let e = l(T[T.length - 1], 1);
			T.push(e);
		}
	}
	return T;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getDays.js
function Ad(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function jd(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function Md(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function Nd(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new Yl(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new Jl(t, m, r);
			return a ? a.days.push(o) : e.push(new Xl(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function Pd(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function Fd(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function Id(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function Ld(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function Rd(e, t) {
	let [n, r] = u(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/useCalendar.js
function zd(e, t) {
	let [n, r] = Pd(e, t), { startOfMonth: i, endOfMonth: o } = t, s = Md(e, n, r, t), [l, u] = Rd(s, e.month ? s : void 0);
	a(() => {
		u(Md(e, n, r, t));
	}, [e.timeZone]);
	let { months: d, weeks: f, days: p, previousMonth: m, nextMonth: h } = c(() => {
		let i = jd(l, r, { numberOfMonths: e.numberOfMonths }, t), a = Nd(i, kd(i, e.endMonth ? o(e.endMonth) : void 0, {
			ISOWeek: e.ISOWeek,
			fixedWeeks: e.fixedWeeks,
			broadcastCalendar: e.broadcastCalendar
		}, t), {
			broadcastCalendar: e.broadcastCalendar,
			fixedWeeks: e.fixedWeeks,
			ISOWeek: e.ISOWeek,
			reverseMonths: e.reverseMonths
		}, t);
		return {
			months: a,
			weeks: Ld(a),
			days: Ad(a),
			previousMonth: Id(l, n, e, t),
			nextMonth: Fd(l, r, e, t)
		};
	}, [
		t,
		l.getTime(),
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
	]), { disableNavigation: g, onMonthChange: _ } = e, v = (e) => f.some((t) => t.days.some((t) => t.isEqualTo(e))), y = (e) => {
		if (g) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), u(t), _?.(t);
	};
	return {
		months: d,
		weeks: f,
		days: p,
		navStart: n,
		navEnd: r,
		previousMonth: m,
		nextMonth: h,
		goToMonth: y,
		goToDay: (e) => {
			v(e) || y(e.date);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var Bd;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Bd ||= {});
function Vd(e) {
	return !e[nu.disabled] && !e[nu.hidden] && !e[nu.outside];
}
function Hd(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		Vd(e) && (e[nu.focused] && a < Bd.FocusedModifier ? (i = o, a = Bd.FocusedModifier) : r?.isEqualTo(o) && a < Bd.LastFocused ? (i = o, a = Bd.LastFocused) : n(o.date) && a < Bd.Selected ? (i = o, a = Bd.Selected) : e[nu.today] && a < Bd.Today && (i = o, a = Bd.Today));
	}
	return i ||= e.find((e) => Vd(t(e))), i;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function Ud(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function Wd(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = Ud(e, t, n.date, r, i, a, o), l = !!(a.disabled && Iu(c, a.disabled, o)), u = !!(a.hidden && Iu(c, a.hidden, o)), d = new Jl(c, c, o);
	return !l && !u ? d : Wd(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/useFocus.js
function Gd(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = u(), c = Hd(t.days, n, r || (() => !1), o), [l, d] = u(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: d,
		focused: l,
		blur: () => {
			s(l), d(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = Wd(n, r, l, t.navStart, t.navEnd, e, i);
			a && (e.disableNavigation && !t.days.some((e) => e.isEqualTo(a)) || (t.goToDay(a), d(a)));
		}
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/selection/useMulti.js
function Kd(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Rd(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/addToRange.js
function qd(e, t, n = 0, r = 0, i = !1, a = ql) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? n === 0 ? {
		from: o,
		to: e
	} : i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) if (c(o, e) && c(s, e)) d = i ? {
		from: o,
		to: s
	} : void 0;
	else if (c(o, e)) d = {
		from: o,
		to: n > 0 ? void 0 : e
	};
	else if (c(s, e)) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (u(e, o)) d = {
		from: e,
		to: s
	};
	else if (l(e, o)) d = {
		from: o,
		to: e
	};
	else if (l(e, s)) d = {
		from: o,
		to: e
	};
	else throw Error("Invalid range");
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function Jd(e, t, n = ql) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function Yd(e, t, n = ql) {
	return ku(e, t.from, !1, n) || ku(e, t.to, !1, n) || ku(t, e.from, !1, n) || ku(t, e.to, !1, n);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function Xd(e, t, n = ql) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? ku(e, t, !1, n) : Fu(t, n) ? t.some((t) => ku(e, t, !1, n)) : ju(t) ? t.from && t.to ? Yd(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : Pu(t) ? Jd(e, t.dayOfWeek, n) : Au(t) ? n.isAfter(t.before, t.after) ? Yd(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : Iu(e.from, t, n) || Iu(e.to, t, n) : Mu(t) || Nu(t) ? Iu(e.from, t, n) || Iu(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/selection/useRange.js
function Zd(e, t) {
	let { disabled: n, excludeDisabled: r, selected: i, required: a, onSelect: o } = e, [s, c] = Rd(i, o ? i : void 0), l = o ? i : s;
	return {
		selected: l,
		select: (i, s, u) => {
			let { min: d, max: f } = e, p = i ? qd(i, l, d, f, a, t) : void 0;
			return r && n && p?.from && p.to && Xd({
				from: p.from,
				to: p.to
			}, n, t) && (p.from = i, p.to = void 0), o || c(p), o?.(p, i, s, u), p;
		},
		isSelected: (e) => l && ku(l, e, !1, t)
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/selection/useSingle.js
function Qd(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Rd(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/useSelection.js
function $d(e, t) {
	let n = Qd(e, t), r = Kd(e, t), i = Zd(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
function ef(e, t) {
	return e instanceof nc && e.timeZone === t ? e : new nc(e, t);
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function tf(e, t, n) {
	if (!n) return ef(e, t);
	let r = ef(e, t), i = new nc(r.getFullYear(), r.getMonth(), r.getDate(), 12, 0, 0, t);
	return new Date(i.getTime());
}
function nf(e, t, n) {
	return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? tf(e, t, n) : Array.isArray(e) ? e.map((e) => e instanceof Date ? tf(e, t, n) : e) : ju(e) ? {
		...e,
		from: e.from ? ef(e.from, t) : e.from,
		to: e.to ? ef(e.to, t) : e.to
	} : Au(e) ? {
		before: tf(e.before, t, n),
		after: tf(e.after, t, n)
	} : Mu(e) ? { after: tf(e.after, t, n) } : Nu(e) ? { before: tf(e.before, t, n) } : e;
}
function rf(e, t, n) {
	return e && (Array.isArray(e) ? e.map((e) => nf(e, t, n)) : nf(e, t, n));
}
//#endregion
//#region node_modules/.pnpm/react-day-picker@9.13.2_react@19.1.0/node_modules/react-day-picker/dist/esm/DayPicker.js
function af(e) {
	let n = e, i = n.timeZone;
	if (i && (n = {
		...e,
		timeZone: i
	}, n.today &&= ef(n.today, i), n.month &&= ef(n.month, i), n.defaultMonth &&= ef(n.defaultMonth, i), n.startMonth &&= ef(n.startMonth, i), n.endMonth &&= ef(n.endMonth, i), n.mode === "single" && n.selected ? n.selected = ef(n.selected, i) : n.mode === "multiple" && n.selected ? n.selected = n.selected?.map((e) => ef(e, i)) : n.mode === "range" && n.selected && (n.selected = {
		from: n.selected.from ? ef(n.selected.from, i) : n.selected.from,
		to: n.selected.to ? ef(n.selected.to, i) : n.selected.to
	}), n.disabled !== void 0 && (n.disabled = rf(n.disabled, i)), n.hidden !== void 0 && (n.hidden = rf(n.hidden, i)), n.modifiers)) {
		let e = {};
		Object.keys(n.modifiers).forEach((t) => {
			e[t] = rf(n.modifiers?.[t], i);
		}), n.modifiers = e;
	}
	let { components: a, formatters: o, labels: s, dateLib: u, locale: d, classNames: f } = c(() => {
		let e = {
			...Gl,
			...n.locale
		}, t = n.broadcastCalendar ? 1 : n.weekStartsOn, r = n.noonSafe && n.timeZone ? bd(n.timeZone, {
			weekStartsOn: t,
			locale: e
		}) : void 0, i = n.dateLib && r ? {
			...r,
			...n.dateLib
		} : n.dateLib ?? r, a = new Kl({
			locale: e,
			weekStartsOn: t,
			firstWeekContainsDate: n.firstWeekContainsDate,
			useAdditionalWeekYearTokens: n.useAdditionalWeekYearTokens,
			useAdditionalDayOfYearTokens: n.useAdditionalDayOfYearTokens,
			timeZone: n.timeZone,
			numerals: n.numerals
		}, i);
		return {
			dateLib: a,
			components: zu(n.components),
			formatters: Qu(n.formatters),
			labels: hd(n.labels, a.options),
			locale: e,
			classNames: {
				...Vu(),
				...n.classNames
			}
		};
	}, [
		n.locale,
		n.broadcastCalendar,
		n.weekStartsOn,
		n.firstWeekContainsDate,
		n.useAdditionalWeekYearTokens,
		n.useAdditionalDayOfYearTokens,
		n.timeZone,
		n.numerals,
		n.dateLib,
		n.noonSafe,
		n.components,
		n.formatters,
		n.labels,
		n.classNames
	]);
	n.today || (n = {
		...n,
		today: u.today()
	});
	let { captionLayout: p, mode: m, navLayout: h, numberOfMonths: g = 1, onDayBlur: _, onDayClick: v, onDayFocus: y, onDayKeyDown: b, onDayMouseEnter: x, onDayMouseLeave: S, onNextClick: C, onPrevClick: w, showWeekNumber: T, styles: E } = n, { formatCaption: D, formatDay: O, formatMonthDropdown: k, formatWeekNumber: A, formatWeekNumberHeader: j, formatWeekdayName: M, formatYearDropdown: N } = o, P = zd(n, u), { days: F, months: I, navStart: ee, navEnd: te, previousMonth: ne, nextMonth: re, goToMonth: L } = P, R = Lu(F, n, ee, te, u), { isSelected: ie, select: ae, selected: z } = $d(n, u) ?? {}, { blur: oe, focused: se, isFocusTarget: B, moveFocus: ce, setFocused: V } = Gd(n, P, R, ie ?? (() => !1), u), { labelDayButton: le, labelGridcell: ue, labelGrid: de, labelMonthDropdown: H, labelNav: fe, labelPrevious: pe, labelNext: me, labelWeekday: he, labelWeekNumber: ge, labelWeekNumberHeader: _e, labelYearDropdown: ve } = s, ye = c(() => vd(u, n.ISOWeek, n.broadcastCalendar, n.today), [
		u,
		n.ISOWeek,
		n.broadcastCalendar,
		n.today
	]), U = m !== void 0 || v !== void 0, W = r(() => {
		ne && (L(ne), w?.(ne));
	}, [
		ne,
		L,
		w
	]), be = r(() => {
		re && (L(re), C?.(re));
	}, [
		L,
		re,
		C
	]), xe = r((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), V(e), !t.disabled && (ae?.(e.date, t, n), v?.(e.date, t, n));
	}, [
		ae,
		v,
		V
	]), Se = r((e, t) => (n) => {
		V(e), y?.(e.date, t, n);
	}, [y, V]), Ce = r((e, t) => (n) => {
		oe(), _?.(e.date, t, n);
	}, [oe, _]), G = r((e, t) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			ce(e, t);
		}
		b?.(e.date, t, r);
	}, [
		ce,
		b,
		n.dir
	]), we = r((e, t) => (n) => {
		x?.(e.date, t, n);
	}, [x]), Te = r((e, t) => (n) => {
		S?.(e.date, t, n);
	}, [S]), Ee = r((e) => (t) => {
		let n = Number(t.target.value);
		L(u.setMonth(u.startOfMonth(e), n));
	}, [u, L]), De = r((e) => (t) => {
		let n = Number(t.target.value);
		L(u.setYear(u.startOfMonth(e), n));
	}, [u, L]), { className: Oe, style: ke } = c(() => ({
		className: [f[$.Root], n.className].filter(Boolean).join(" "),
		style: {
			...E?.[$.Root],
			...n.style
		}
	}), [
		f,
		n.className,
		n.style,
		E
	]), Ae = Bu(n), je = l(null);
	Od(je, !!n.animate, {
		classNames: f,
		months: I,
		focused: se,
		dateLib: u
	});
	let Me = {
		dayPickerProps: n,
		selected: z,
		select: ae,
		isSelected: ie,
		months: I,
		nextMonth: re,
		previousMonth: ne,
		goToMonth: L,
		getModifiers: R,
		components: a,
		classNames: f,
		styles: E,
		labels: s,
		formatters: o
	};
	return t.createElement(fu.Provider, { value: Me }, t.createElement(a.Root, {
		rootRef: n.animate ? je : void 0,
		className: Oe,
		style: ke,
		dir: n.dir,
		id: n.id,
		lang: n.lang,
		nonce: n.nonce,
		title: n.title,
		role: n.role,
		"aria-label": n["aria-label"],
		"aria-labelledby": n["aria-labelledby"],
		...Ae
	}, t.createElement(a.Months, {
		className: f[$.Months],
		style: E?.[$.Months]
	}, !n.hideNavigation && !h && t.createElement(a.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: f[$.Nav],
		style: E?.[$.Nav],
		"aria-label": fe(),
		onPreviousClick: W,
		onNextClick: be,
		previousMonth: ne,
		nextMonth: re
	}), I.map((e, r) => t.createElement(a.Month, {
		"data-animated-month": n.animate ? "true" : void 0,
		className: f[$.Month],
		style: E?.[$.Month],
		key: r,
		displayIndex: r,
		calendarMonth: e
	}, h === "around" && !n.hideNavigation && r === 0 && t.createElement(a.PreviousMonthButton, {
		type: "button",
		className: f[$.PreviousMonthButton],
		tabIndex: ne ? void 0 : -1,
		"aria-disabled": ne ? void 0 : !0,
		"aria-label": pe(ne),
		onClick: W,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(a.Chevron, {
		disabled: ne ? void 0 : !0,
		className: f[$.Chevron],
		orientation: n.dir === "rtl" ? "right" : "left"
	})), t.createElement(a.MonthCaption, {
		"data-animated-caption": n.animate ? "true" : void 0,
		className: f[$.MonthCaption],
		style: E?.[$.MonthCaption],
		calendarMonth: e,
		displayIndex: r
	}, p?.startsWith("dropdown") ? t.createElement(a.DropdownNav, {
		className: f[$.Dropdowns],
		style: E?.[$.Dropdowns]
	}, (() => {
		let r = p === "dropdown" || p === "dropdown-months" ? t.createElement(a.MonthsDropdown, {
			key: "month",
			className: f[$.MonthsDropdown],
			"aria-label": H(),
			classNames: f,
			components: a,
			disabled: !!n.disableNavigation,
			onChange: Ee(e.date),
			options: gd(e.date, ee, te, o, u),
			style: E?.[$.Dropdown],
			value: u.getMonth(e.date)
		}) : t.createElement("span", { key: "month" }, k(e.date, u)), i = p === "dropdown" || p === "dropdown-years" ? t.createElement(a.YearsDropdown, {
			key: "year",
			className: f[$.YearsDropdown],
			"aria-label": ve(u.options),
			classNames: f,
			components: a,
			disabled: !!n.disableNavigation,
			onChange: De(e.date),
			options: yd(ee, te, o, u, !!n.reverseYears),
			style: E?.[$.Dropdown],
			value: u.getYear(e.date)
		}) : t.createElement("span", { key: "year" }, N(e.date, u));
		return u.getMonthYearOrder() === "year-first" ? [i, r] : [r, i];
	})(), t.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: {
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
		}
	}, D(e.date, u.options, u))) : t.createElement(a.CaptionLabel, {
		className: f[$.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, D(e.date, u.options, u))), h === "around" && !n.hideNavigation && r === g - 1 && t.createElement(a.NextMonthButton, {
		type: "button",
		className: f[$.NextMonthButton],
		tabIndex: re ? void 0 : -1,
		"aria-disabled": re ? void 0 : !0,
		"aria-label": me(re),
		onClick: be,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(a.Chevron, {
		disabled: re ? void 0 : !0,
		className: f[$.Chevron],
		orientation: n.dir === "rtl" ? "left" : "right"
	})), r === g - 1 && h === "after" && !n.hideNavigation && t.createElement(a.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: f[$.Nav],
		style: E?.[$.Nav],
		"aria-label": fe(),
		onPreviousClick: W,
		onNextClick: be,
		previousMonth: ne,
		nextMonth: re
	}), t.createElement(a.MonthGrid, {
		role: "grid",
		"aria-multiselectable": m === "multiple" || m === "range",
		"aria-label": de(e.date, u.options, u) || void 0,
		className: f[$.MonthGrid],
		style: E?.[$.MonthGrid]
	}, !n.hideWeekdays && t.createElement(a.Weekdays, {
		"data-animated-weekdays": n.animate ? "true" : void 0,
		className: f[$.Weekdays],
		style: E?.[$.Weekdays]
	}, T && t.createElement(a.WeekNumberHeader, {
		"aria-label": _e(u.options),
		className: f[$.WeekNumberHeader],
		style: E?.[$.WeekNumberHeader],
		scope: "col"
	}, j()), ye.map((e) => t.createElement(a.Weekday, {
		"aria-label": he(e, u.options, u),
		className: f[$.Weekday],
		key: String(e),
		style: E?.[$.Weekday],
		scope: "col"
	}, M(e, u.options, u)))), t.createElement(a.Weeks, {
		"data-animated-weeks": n.animate ? "true" : void 0,
		className: f[$.Weeks],
		style: E?.[$.Weeks]
	}, e.weeks.map((e) => t.createElement(a.Week, {
		className: f[$.Week],
		key: e.weekNumber,
		style: E?.[$.Week],
		week: e
	}, T && t.createElement(a.WeekNumber, {
		week: e,
		style: E?.[$.WeekNumber],
		"aria-label": ge(e.weekNumber, { locale: d }),
		className: f[$.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, A(e.weekNumber, u)), e.days.map((e) => {
		let { date: r } = e, i = R(e);
		if (i[nu.focused] = !i.hidden && !!se?.isEqualTo(e), i[ru.selected] = ie?.(r) || i.selected, ju(z)) {
			let { from: e, to: t } = z;
			i[ru.range_start] = !!(e && t && u.isSameDay(r, e)), i[ru.range_end] = !!(e && t && u.isSameDay(r, t)), i[ru.range_middle] = ku(z, r, !0, u);
		}
		let o = _d(i, E, n.modifiersStyles), s = Ru(i, f, n.modifiersClassNames), c = !U && !i.hidden ? ue(r, i, u.options, u) : void 0;
		return t.createElement(a.Day, {
			key: `${e.isoDate}_${e.displayMonthId}`,
			day: e,
			modifiers: i,
			className: s.join(" "),
			style: o,
			role: "gridcell",
			"aria-selected": i.selected || void 0,
			"aria-label": c,
			"data-day": e.isoDate,
			"data-month": e.outside ? e.dateMonthId : void 0,
			"data-selected": i.selected || void 0,
			"data-disabled": i.disabled || void 0,
			"data-hidden": i.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": i.focused || void 0,
			"data-today": i.today || void 0
		}, !i.hidden && U ? t.createElement(a.DayButton, {
			className: f[$.DayButton],
			style: E?.[$.DayButton],
			type: "button",
			day: e,
			modifiers: i,
			disabled: !i.focused && i.disabled || void 0,
			"aria-disabled": i.focused && i.disabled || void 0,
			tabIndex: B(e) ? 0 : -1,
			"aria-label": le(r, i, u.options, u),
			onClick: xe(e, i),
			onBlur: Ce(e, i),
			onFocus: Se(e, i),
			onKeyDown: G(e, i),
			onMouseEnter: we(e, i),
			onMouseLeave: Te(e, i)
		}, O(r, u.options, u)) : !i.hidden && O(e.date, u.options, u));
	})))))))), n.footer && t.createElement(a.Footer, {
		className: f[$.Footer],
		style: E?.[$.Footer],
		role: "status",
		"aria-live": "polite"
	}, n.footer)));
}
//#endregion
//#region lib/utils/mask.ts
var of = /* @__PURE__ */ ae({
	CELL_PHONE_MASK: () => cf,
	CNH_MASK: () => ff,
	CNPJ_MASK: () => df,
	CPF_MASK: () => uf,
	PHONE_MASK: () => sf,
	PLATE_MASK: () => mf,
	RENAVAM_MASK: () => hf,
	RG_MASK: () => pf,
	RNTRC_MASK: () => gf,
	ZIP_CODE_MASK: () => lf,
	formatMask: () => _f
}), sf = "(##) ####-####", cf = "(##) #####-####", lf = "#####-###", uf = "###.###.###-##", df = "##.###.###/####-##", ff = "###########", pf = "##.###.###-#", mf = "AAA#A##", hf = "###########", gf = "##############", _f = (e, t) => {
	let n = "", r = 0;
	for (let i = 0; i < t.length; i++) {
		let a = e[r];
		if (a === void 0) break;
		switch (t[i]) {
			case "#":
				if (!/\d/.test(a)) return n;
				n += a, r++;
				break;
			case "A":
				if (!/[a-zA-Z]/.test(a)) return n;
				n += a, r++;
				break;
			case "*":
				/[a-zA-Z0-9]/.test(a) && (n += e[r]), r++;
				break;
			default: n += t[i], t[i] === a && r++;
		}
	}
	return n;
}, vf = /* @__PURE__ */ "AC.AL.AP.AM.BA.CE.DF.ES.GO.MA.MT.MS.MG.PA.PB.PR.PE.PI.RJ.RN.RS.RO.RR.SC.SP.SE.TO".split(".");
//#endregion
//#region lib/components/calendar/calendar.component.tsx
function yf({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", locale: a, formatters: o, components: s, ...c }) {
	let l = Vu();
	return /* @__PURE__ */ (0, B.jsx)(af, {
		showOutsideDays: n,
		className: Y("p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: r,
		locale: a,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(a?.code, { month: "short" }),
			...o
		},
		classNames: {
			root: Y("w-fit", l.root),
			months: Y("flex gap-4 flex-col md:flex-row relative", l.months),
			month: Y("flex flex-col w-full gap-4", l.month),
			nav: Y("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", l.nav),
			button_previous: Y(Us({ variant: i }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", l.button_previous),
			button_next: Y(Us({ variant: i }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", l.button_next),
			month_caption: Y("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)", l.month_caption),
			dropdowns: Y("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5", l.dropdowns),
			dropdown_root: Y("relative cn-calendar-dropdown-root rounded-(--cell-radius)", l.dropdown_root),
			dropdown: Y("absolute bg-popover inset-0 opacity-0", l.dropdown),
			caption_label: Y("select-none font-medium", r === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5", l.caption_label),
			table: "w-full border-collapse",
			weekdays: Y("flex", l.weekdays),
			weekday: Y("text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none", l.weekday),
			week: Y("flex w-full mt-2", l.week),
			week_number_header: Y("select-none w-(--cell-size)", l.week_number_header),
			week_number: Y("text-[0.8rem] select-none text-muted-foreground", l.week_number),
			day: Y("relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none", c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)", l.day),
			range_start: Y("rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate", l.range_start),
			range_middle: Y("rounded-none", l.range_middle),
			range_end: Y("rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate", l.range_end),
			today: Y("bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none", l.today),
			outside: Y("text-muted-foreground aria-selected:text-muted-foreground", l.outside),
			disabled: Y("text-muted-foreground opacity-50", l.disabled),
			hidden: Y("invisible", l.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ (0, B.jsx)("div", {
				"data-slot": "calendar",
				ref: t,
				className: Y(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => t === "left" ? /* @__PURE__ */ (0, B.jsx)(S, {
				className: Y("cn-rtl-flip size-4", e),
				...n
			}) : t === "right" ? /* @__PURE__ */ (0, B.jsx)(w, {
				className: Y("cn-rtl-flip size-4", e),
				...n
			}) : /* @__PURE__ */ (0, B.jsx)(b, {
				className: Y("size-4", e),
				...n
			}),
			DayButton: ({ ...e }) => /* @__PURE__ */ (0, B.jsx)(bf, {
				locale: a,
				...e
			}),
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("td", {
				...t,
				children: /* @__PURE__ */ (0, B.jsx)("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...s
		},
		...c
	});
}
function bf({ className: t, day: n, modifiers: r, locale: i, ...a }) {
	let o = Vu(), s = e.useRef(null);
	return e.useEffect(() => {
		r.focused && s.current?.focus();
	}, [r.focused]), /* @__PURE__ */ (0, B.jsx)(Ws, {
		ref: s,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(i?.code),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: Y("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...a
	});
}
//#endregion
//#region lib/components/card/card.component.tsx
var xf = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: n,
	className: Y("rounded-lg border bg-card text-card-foreground shadow-xs", e),
	...t
}));
xf.displayName = "Card";
var Sf = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: n,
	className: Y("flex flex-col space-y-1.5 p-4 pb-0", e),
	...t
}));
Sf.displayName = "CardHeader";
var Cf = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("h3", {
	ref: n,
	className: Y("text-xl font-semibold leading-none tracking-tight", e),
	...t
}));
Cf.displayName = "CardTitle";
var wf = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("p", {
	ref: n,
	className: Y("text-sm text-muted-foreground", e),
	...t
}));
wf.displayName = "CardDescription";
var Tf = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: n,
	className: Y("p-4", e),
	...t
}));
Tf.displayName = "CardContent";
var Ef = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	ref: n,
	className: Y("flex items-center p-4 pt-0", e),
	...t
}));
Ef.displayName = "CardFooter";
//#endregion
//#region node_modules/.pnpm/embla-carousel-reactive-utils@8.6.0_embla-carousel@8.6.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function Df(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Of(e) {
	return Df(e) || Array.isArray(e);
}
function kf() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Af(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !Of(r) || !Of(i) ? r === i : Af(r, i);
	});
}
function jf(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function Mf(e, t) {
	if (e.length !== t.length) return !1;
	let n = jf(e), r = jf(t);
	return n.every((e, t) => {
		let n = r[t];
		return Af(e, n);
	});
}
//#endregion
//#region node_modules/.pnpm/embla-carousel@8.6.0/node_modules/embla-carousel/esm/embla-carousel.esm.js
function Nf(e) {
	return typeof e == "number";
}
function Pf(e) {
	return typeof e == "string";
}
function Ff(e) {
	return typeof e == "boolean";
}
function If(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Lf(e) {
	return Math.abs(e);
}
function Rf(e) {
	return Math.sign(e);
}
function zf(e, t) {
	return Lf(e - t);
}
function Bf(e, t) {
	return e === 0 || t === 0 || Lf(e) <= Lf(t) ? 0 : Lf(zf(Lf(e), Lf(t)) / e);
}
function Vf(e) {
	return Math.round(e * 100) / 100;
}
function Hf(e) {
	return qf(e).map(Number);
}
function Uf(e) {
	return e[Wf(e)];
}
function Wf(e) {
	return Math.max(0, e.length - 1);
}
function Gf(e, t) {
	return t === Wf(e);
}
function Kf(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function qf(e) {
	return Object.keys(e);
}
function Jf(e, t) {
	return [e, t].reduce((e, t) => (qf(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = If(r) && If(i) ? Jf(r, i) : i;
	}), e), {});
}
function Yf(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function Xf(e, t) {
	let n = {
		start: r,
		center: i,
		end: a
	};
	function r() {
		return 0;
	}
	function i(e) {
		return a(e) / 2;
	}
	function a(e) {
		return t - e;
	}
	function o(r, i) {
		return Pf(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function Zf() {
	let e = [];
	function t(t, n, i, a = { passive: !0 }) {
		let o;
		if ("addEventListener" in t) t.addEventListener(n, i, a), o = () => t.removeEventListener(n, i, a);
		else {
			let e = t;
			e.addListener(i), o = () => e.removeListener(i);
		}
		return e.push(o), r;
	}
	function n() {
		e = e.filter((e) => e());
	}
	let r = {
		add: t,
		clear: n
	};
	return r;
}
function Qf(e, t, n, r) {
	let i = Zf(), a = 1e3 / 60, o = null, s = 0, c = 0;
	function l() {
		i.add(e, "visibilitychange", () => {
			e.hidden && m();
		});
	}
	function u() {
		p(), i.clear();
	}
	function d(e) {
		if (!c) return;
		o || (o = e, n(), n());
		let i = e - o;
		for (o = e, s += i; s >= a;) n(), s -= a;
		r(s / a), c &&= t.requestAnimationFrame(d);
	}
	function f() {
		c ||= t.requestAnimationFrame(d);
	}
	function p() {
		t.cancelAnimationFrame(c), o = null, s = 0, c = 0;
	}
	function m() {
		o = null, s = 0;
	}
	return {
		init: l,
		destroy: u,
		start: f,
		stop: p,
		update: n,
		render: r
	};
}
function $f(e, t) {
	let n = t === "rtl", r = e === "y", i = r ? "y" : "x", a = r ? "x" : "y", o = !r && n ? -1 : 1, s = u(), c = d();
	function l(e) {
		let { height: t, width: n } = e;
		return r ? t : n;
	}
	function u() {
		return r ? "top" : n ? "right" : "left";
	}
	function d() {
		return r ? "bottom" : n ? "left" : "right";
	}
	function f(e) {
		return e * o;
	}
	return {
		scroll: i,
		cross: a,
		startEdge: s,
		endEdge: c,
		measureSize: l,
		direction: f
	};
}
function ep(e = 0, t = 0) {
	let n = Lf(e - t);
	function r(t) {
		return t < e;
	}
	function i(e) {
		return e > t;
	}
	function a(e) {
		return r(e) || i(e);
	}
	function o(n) {
		return a(n) ? r(n) ? e : t : n;
	}
	function s(e) {
		return n ? e - n * Math.ceil((e - t) / n) : e;
	}
	return {
		length: n,
		max: t,
		min: e,
		constrain: o,
		reachedAny: a,
		reachedMax: i,
		reachedMin: r,
		removeOffset: s
	};
}
function tp(e, t, n) {
	let { constrain: r } = ep(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? Lf((i + e) % i) : r(e);
	}
	function s() {
		return a;
	}
	function c(e) {
		return a = o(e), d;
	}
	function l(e) {
		return u().set(s() + e);
	}
	function u() {
		return tp(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function np(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = Zf(), w = Zf(), T = ep(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, D = {
		mouse: 500,
		touch: 600
	}, O = m ? 43 : 25, k = !1, A = 0, j = 0, M = !1, N = !1, P = !1, F = !1;
	function I(e) {
		if (!v) return;
		function n(t) {
			(Ff(v) || v(e, t)) && R(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", ae).add(r, "contextmenu", ae).add(r, "click", z, !0);
	}
	function ee() {
		C.clear(), w.clear();
	}
	function te() {
		let e = F ? n : t;
		w.add(e, "touchmove", ie, S).add(e, "touchend", ae).add(e, "mousemove", ie, S).add(e, "mouseup", ae);
	}
	function ne(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function re() {
		return (m ? D : E)[F ? "mouse" : "touch"];
	}
	function L(e, t) {
		let n = d.add(Rf(e) * -1), r = u.byDistance(e, !m).distance;
		return m || Lf(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function R(e) {
		let t = Yf(e, r);
		F = t, P = m && t && !e.buttons && k, k = zf(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (ne(e.target) || (M = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), te(), A = a.readPoint(e), j = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function ie(e) {
		if (!Yf(e, r) && e.touches.length >= 2) return ae(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = zf(t, A), c = zf(n, j);
		if (!N && !F && (!e.cancelable || (N = o > c, !N))) return ae(e);
		let u = a.pointerMove(e);
		o > h && (P = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function ae(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * re(), r = L(b(n), t), i = Bf(n, r), o = O - 10 * i, s = _ + i / 50;
		N = !1, M = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), F = !1, f.emit("pointerUp");
	}
	function z(e) {
		P &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function oe() {
		return M;
	}
	return {
		init: I,
		destroy: ee,
		pointerDown: oe
	};
}
function rp(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (Yf(n, t) ? n : n.touches[0])[i];
	}
	function o(e) {
		return n = e, r = e, a(e);
	}
	function s(e) {
		let t = a(e) - a(r), o = i(e) - i(n) > 170;
		return r = e, o && (n = e), t;
	}
	function c(e) {
		if (!n || !r) return 0;
		let t = a(r) - a(n), o = i(e) - i(n), s = i(e) - i(r) > 170, c = t / o;
		return o && !s && Lf(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function ip() {
	function e(e) {
		let { offsetTop: t, offsetLeft: n, offsetWidth: r, offsetHeight: i } = e;
		return {
			top: t,
			right: n + r,
			bottom: t + i,
			left: n,
			width: r,
			height: i
		};
	}
	return { measure: e };
}
function ap(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function op(e, t, n, r, i, a, o) {
	let s = [e].concat(r), c, l, u = [], d = !1;
	function f(e) {
		return i.measureSize(o.measure(e));
	}
	function p(i) {
		if (!a) return;
		l = f(e), u = r.map(f);
		function o(n) {
			for (let a of n) {
				if (d) return;
				let n = a.target === e, o = r.indexOf(a.target), s = n ? l : u[o];
				if (Lf(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(Ff(a) || a(i, e)) && o(e);
		}), n.requestAnimationFrame(() => {
			s.forEach((e) => c.observe(e));
		});
	}
	function m() {
		d = !0, c && c.disconnect();
	}
	return {
		init: p,
		destroy: m
	};
}
function sp(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = Rf(a), d = u, x;
	}
	function p() {
		return Lf(r.get() - t.get()) < .001;
	}
	function m() {
		return c;
	}
	function h() {
		return s;
	}
	function g() {
		return o;
	}
	function _() {
		return y(i);
	}
	function v() {
		return b(a);
	}
	function y(e) {
		return c = e, x;
	}
	function b(e) {
		return l = e, x;
	}
	let x = {
		direction: h,
		duration: m,
		velocity: g,
		seek: f,
		settled: p,
		useBaseFriction: v,
		useBaseDuration: _,
		useFriction: b,
		useDuration: y
	};
	return x;
}
function cp(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = ep(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = Lf(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && Lf(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
	}
	function d(e) {
		c = !e;
	}
	return {
		shouldConstrain: l,
		constrain: u,
		toggleActive: d
	};
}
function lp(e, t, n, r, i) {
	let a = ep(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return zf(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = Uf(o);
		return ep(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = Gf(n, t);
			return s ? i : c || l(r, o) ? r : l(i, o) ? i : o;
		}).map((e) => parseFloat(e.toFixed(3)));
	}
	function f() {
		if (t <= e + i) return [a.max];
		if (r === "keepSnaps") return o;
		let { min: n, max: c } = s;
		return o.slice(n, c);
	}
	return {
		snapsContained: c,
		scrollContainLimit: s
	};
}
function up(e, t, n) {
	let r = t[0];
	return { limit: ep(n ? r - e : Uf(t), r) };
}
function dp(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = ep(t.min + i, t.max + i);
	function s(e) {
		return e === 1 ? o(n.get()) : e === -1 ? a(n.get()) : !1;
	}
	function c(t) {
		if (!s(t)) return;
		let n = t * -1 * e;
		r.forEach((e) => e.add(n));
	}
	return { loop: c };
}
function fp(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function pp(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => Uf(e)[o] - e[0][a]).map(Lf);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -Lf(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function mp(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = Gf(n, t);
			return r ? Kf(Uf(n[0]) + 1) : i ? Kf(Wf(a) - Uf(n)[0] + 1, Uf(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function hp(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => Lf(e) - Lf(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => Lf(e.diff) - Lf(t.diff))[0];
		return {
			index: i,
			distance: r
		};
	}
	function u(t, r) {
		let i = [
			t,
			t + n,
			t - n
		];
		if (!e) return t;
		if (!r) return c(i);
		let a = i.filter((e) => Rf(e) === r);
		return a.length ? c(a) : Uf(i) - n;
	}
	function d(e, n) {
		return {
			index: e,
			distance: u(t[e] - i.get(), n)
		};
	}
	function f(n, r) {
		let o = i.get() + n, { index: s, distance: c } = l(o), d = !e && a(o);
		return !r || d ? {
			index: s,
			distance: n
		} : {
			index: s,
			distance: n + u(t[s] - c, 0)
		};
	}
	return {
		byDistance: f,
		byIndex: d,
		shortcut: u
	};
}
function gp(e, t, n, r, i, a, o) {
	function s(i) {
		let s = i.distance, c = i.index !== t.get();
		a.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), c && (n.set(t.get()), t.set(i.index), o.emit("select"));
	}
	function c(e, t) {
		s(i.byDistance(e, t));
	}
	function l(e, n) {
		let r = t.clone().set(e);
		s(i.byIndex(r.get(), n));
	}
	return {
		distance: c,
		index: l
	};
}
function _p(e, t, n, r, i, a, o, s) {
	let c = {
		passive: !0,
		capture: !0
	}, l = 0;
	function u(u) {
		if (!s) return;
		function f(t) {
			if ((/* @__PURE__ */ new Date()).getTime() - l > 10) return;
			o.emit("slideFocusStart"), e.scrollLeft = 0;
			let a = n.findIndex((e) => e.includes(t));
			Nf(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(Ff(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function vp(e) {
	let t = e;
	function n() {
		return t;
	}
	function r(e) {
		t = o(e);
	}
	function i(e) {
		t += o(e);
	}
	function a(e) {
		t -= o(e);
	}
	function o(e) {
		return Nf(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function yp(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = Vf(e.direction(t));
		o !== i && (r.transform = n(o), i = o);
	}
	function l(e) {
		a = !e;
	}
	function u() {
		a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
	}
	return {
		clear: u,
		to: c,
		toggleActive: l
	};
}
function bp(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = Hf(i), d = Hf(i).reverse(), f = _().concat(v());
	function p(e, t) {
		return e.reduce((e, t) => e - i[t], t);
	}
	function m(e, t) {
		return e.reduce((e, n) => p(e, t) > 0 ? e.concat([n]) : e, []);
	}
	function h(e) {
		return a.map((n, i) => ({
			start: n - r[i] + l + e,
			end: n + t - l + e
		}));
	}
	function g(t, r, i) {
		let a = h(r);
		return t.map((t) => {
			let r = i ? 0 : -n, o = i ? n : 0, l = i ? "end" : "start", u = a[t][l];
			return {
				index: t,
				loopPoint: u,
				slideLocation: vp(-1),
				translate: yp(e, c[t]),
				target: () => s.get() > u ? r : o
			};
		});
	}
	function _() {
		let e = o[0];
		return g(m(d, e), n, !1);
	}
	function v() {
		return g(m(u, t - o[0] - 1), -n, !0);
	}
	function y() {
		return f.every(({ index: e }) => p(u.filter((t) => t !== e), t) <= .1);
	}
	function b() {
		f.forEach((e) => {
			let { target: t, translate: n, slideLocation: r } = e, i = t();
			i !== r.get() && (n.to(i), r.set(i));
		});
	}
	function x() {
		f.forEach((e) => e.translate.clear());
	}
	return {
		canLoop: y,
		clear: x,
		loop: b,
		loopPoints: f
	};
}
function xp(e, t, n) {
	let r, i = !1;
	function a(a) {
		if (!n) return;
		function o(e) {
			for (let n of e) if (n.type === "childList") {
				a.reInit(), t.emit("slidesChanged");
				break;
			}
		}
		r = new MutationObserver((e) => {
			i || (Ff(n) || n(a, e)) && o(e);
		}), r.observe(e, { childList: !0 });
	}
	function o() {
		r && r.disconnect(), i = !0;
	}
	return {
		init: a,
		destroy: o
	};
}
function Sp(e, t, n, r) {
	let i = {}, a = null, o = null, s, c = !1;
	function l() {
		s = new IntersectionObserver((e) => {
			c || (e.forEach((e) => {
				let n = t.indexOf(e.target);
				i[n] = e;
			}), a = null, o = null, n.emit("slidesInView"));
		}, {
			root: e.parentElement,
			threshold: r
		}), t.forEach((e) => s.observe(e));
	}
	function u() {
		s && s.disconnect(), c = !0;
	}
	function d(e) {
		return qf(i).reduce((t, n) => {
			let r = parseInt(n), { isIntersecting: a } = i[r];
			return (e && a || !e && !a) && t.push(r), t;
		}, []);
	}
	function f(e = !0) {
		if (e && a) return a;
		if (!e && o) return o;
		let t = d(e);
		return e && (a = t), e || (o = t), t;
	}
	return {
		init: l,
		destroy: u,
		get: f
	};
}
function Cp(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return Lf(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(Uf(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = Gf(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(Lf);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function wp(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = Nf(n);
	function p(e, t) {
		return Hf(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? Hf(e).reduce((n, f, p) => {
			let m = Uf(n) || 0, h = m === 0, g = f === Wf(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = Lf(v - (!r && g ? d(s) : 0) - (_ + y));
			return p && b > t + c && n.push(f), g && n.push(e.length), n;
		}, []).map((t, n, r) => {
			let i = Math.max(r[n - 1] || 0);
			return e.slice(i, t);
		}) : [];
	}
	function h(e) {
		return f ? p(e, n) : m(e);
	}
	return { groupSlides: h };
}
function Tp(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = ip(), w = C.measure(t), T = n.map(C.measure), E = $f(c, l), D = E.measureSize(w), O = ap(D), k = Xf(s, D), A = !d && !!v, { slideSizes: j, slideSizesWithGaps: M, startGap: N, endGap: P } = Cp(E, w, T, n, d || !!v, i), F = wp(E, D, g, d, w, T, N, P, 2), { snaps: I, snapsAligned: ee } = pp(E, k, w, T, F), te = -Uf(I) + Uf(M), { snapsContained: ne, scrollContainLimit: re } = lp(D, te, ee, v, 2), L = A ? ne : ee, { limit: R } = up(te, L, d), ie = tp(Wf(L), u, d), ae = ie.clone(), z = Hf(n), oe = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, se = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, B = Qf(r, i, () => oe(U), (e) => se(U, e)), ce = .68, V = L[ie.get()], le = vp(V), ue = vp(V), de = vp(V), H = vp(V), fe = sp(le, de, ue, H, f, ce), pe = hp(d, L, te, R, H), me = gp(B, ie, ae, fe, pe, H, o), he = fp(R), ge = Zf(), _e = Sp(t, n, o, h), { slideRegistry: ve } = mp(A, v, L, re, F, z), ye = _p(e, n, ve, me, fe, ge, o, S), U = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: B,
		axis: E,
		dragHandler: np(E, e, r, i, H, rp(E, i), le, B, me, fe, pe, ie, o, O, p, m, _, ce, x),
		eventStore: ge,
		percentOfView: O,
		index: ie,
		indexPrevious: ae,
		limit: R,
		location: le,
		offsetLocation: de,
		previousLocation: ue,
		options: a,
		resizeHandler: op(t, o, i, n, E, y, C),
		scrollBody: fe,
		scrollBounds: cp(R, de, H, fe, O),
		scrollLooper: dp(te, R, de, [
			le,
			de,
			ue,
			H
		]),
		scrollProgress: he,
		scrollSnapList: L.map(he.get),
		scrollSnaps: L,
		scrollTarget: pe,
		scrollTo: me,
		slideLooper: bp(E, D, te, j, M, I, L, de, n),
		slideFocus: ye,
		slidesHandler: xp(t, o, b),
		slidesInView: _e,
		slideIndexes: z,
		slideRegistry: ve,
		slidesToScroll: F,
		target: H,
		translate: yp(E, t)
	};
	return U;
}
function Ep() {
	let e = {}, t;
	function n(e) {
		t = e;
	}
	function r(t) {
		return e[t] || [];
	}
	function i(e) {
		return r(e).forEach((n) => n(t, e)), c;
	}
	function a(t, n) {
		return e[t] = r(t).concat([n]), c;
	}
	function o(t, n) {
		return e[t] = r(t).filter((e) => e !== n), c;
	}
	function s() {
		e = {};
	}
	let c = {
		init: n,
		emit: i,
		off: o,
		on: a,
		clear: s
	};
	return c;
}
var Dp = {
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
function Op(e) {
	function t(e, t) {
		return Jf(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, qf(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => qf(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function kp(e) {
	let t = [];
	function n(n, r) {
		return t = r.filter(({ options: t }) => e.optionsAtMedia(t).active !== !1), t.forEach((t) => t.init(n, e)), r.reduce((e, t) => Object.assign(e, { [t.name]: t }), {});
	}
	function r() {
		t = t.filter((e) => e.destroy());
	}
	return {
		init: n,
		destroy: r
	};
}
function Ap(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = Op(i), o = kp(a), s = Zf(), c = Ep(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = D, g = !1, _, v = l(Dp, Ap.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (Pf(t) ? e.querySelector(t) : t) || e.children[0];
		let r = Pf(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = Tp(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", D)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(oe), _.eventHandler.init(oe), _.resizeHandler.init(oe), _.slidesHandler.init(oe), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(oe), x = o.init(oe, b)));
	}
	function D(e, t) {
		let n = ee();
		O(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function O() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function k() {
		g || (g = !0, s.clear(), O(), c.emit("destroy"), c.clear());
	}
	function A(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function j(e) {
		A(_.index.add(1).get(), e, -1);
	}
	function M(e) {
		A(_.index.add(-1).get(), e, 1);
	}
	function N() {
		return _.index.add(1).get() !== ee();
	}
	function P() {
		return _.index.add(-1).get() !== ee();
	}
	function F() {
		return _.scrollSnapList;
	}
	function I() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ee() {
		return _.index.get();
	}
	function te() {
		return _.indexPrevious.get();
	}
	function ne() {
		return _.slidesInView.get();
	}
	function re() {
		return _.slidesInView.get(!1);
	}
	function L() {
		return x;
	}
	function R() {
		return _;
	}
	function ie() {
		return e;
	}
	function ae() {
		return S;
	}
	function z() {
		return C;
	}
	let oe = {
		canScrollNext: N,
		canScrollPrev: P,
		containerNode: ae,
		internalEngine: R,
		destroy: k,
		off: p,
		on: f,
		emit: m,
		plugins: L,
		previousScrollSnap: te,
		reInit: h,
		rootNode: ie,
		scrollNext: j,
		scrollPrev: M,
		scrollProgress: I,
		scrollSnapList: F,
		scrollTo: A,
		selectedScrollSnap: ee,
		slideNodes: z,
		slidesInView: ne,
		slidesNotInView: re
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), oe;
}
Ap.globalOptions = void 0;
//#endregion
//#region node_modules/.pnpm/embla-carousel-react@8.6.0_react@19.1.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function jp(e = {}, t = []) {
	let n = l(e), i = l(t), [o, s] = u(), [c, d] = u(), f = r(() => {
		o && o.reInit(n.current, i.current);
	}, [o]);
	return a(() => {
		Af(n.current, e) || (n.current = e, f());
	}, [e, f]), a(() => {
		Mf(i.current, t) || (i.current = t, f());
	}, [t, f]), a(() => {
		if (kf() && c) {
			Ap.globalOptions = jp.globalOptions;
			let e = Ap(c, n.current, i.current);
			return s(e), () => e.destroy();
		} else s(void 0);
	}, [c, s]), [d, o];
}
jp.globalOptions = void 0;
//#endregion
//#region lib/components/carousel/carousel.component.tsx
var Mp = e.createContext(null);
function Np() {
	let t = e.useContext(Mp);
	if (!t) throw Error("useCarousel must be used within a <Carousel />");
	return t;
}
var Pp = e.forwardRef(({ orientation: t = "horizontal", opts: n, setApi: r, plugins: i, className: a, children: o, ...s }, c) => {
	let [l, u] = jp({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, i), [d, f] = e.useState(!1), [p, m] = e.useState(!1), h = e.useCallback((e) => {
		e && (f(e.canScrollPrev()), m(e.canScrollNext()));
	}, []), g = e.useCallback(() => {
		u?.scrollPrev();
	}, [u]), _ = e.useCallback(() => {
		u?.scrollNext();
	}, [u]), v = e.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), g()) : e.key === "ArrowRight" && (e.preventDefault(), _());
	}, [g, _]);
	return e.useEffect(() => {
		!u || !r || r(u);
	}, [u, r]), e.useEffect(() => {
		if (u) return h(u), u.on("reInit", h), u.on("select", h), () => {
			u?.off("select", h);
		};
	}, [u, h]), /* @__PURE__ */ (0, B.jsx)(Mp.Provider, {
		value: {
			carouselRef: l,
			api: u,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: g,
			scrollNext: _,
			canScrollPrev: d,
			canScrollNext: p
		},
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			ref: c,
			onKeyDownCapture: v,
			className: Y("relative", a),
			role: "region",
			"aria-roledescription": "carousel",
			...s,
			children: o
		})
	});
});
Pp.displayName = "Carousel";
var Fp = e.forwardRef(({ className: e, ...t }, n) => {
	let { carouselRef: r, orientation: i } = Np();
	return /* @__PURE__ */ (0, B.jsx)("div", {
		ref: r,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			ref: n,
			className: Y("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
			...t
		})
	});
});
Fp.displayName = "CarouselContent";
var Ip = e.forwardRef(({ className: e, ...t }, n) => {
	let { orientation: r } = Np();
	return /* @__PURE__ */ (0, B.jsx)("div", {
		ref: n,
		role: "group",
		"aria-roledescription": "slide",
		className: Y("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
		...t
	});
});
Ip.displayName = "CarouselItem";
var Lp = e.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, i) => {
	let { orientation: a, scrollPrev: o, canScrollPrev: s } = Np();
	return /* @__PURE__ */ (0, B.jsxs)(Ws, {
		ref: i,
		variant: t,
		size: n,
		className: Y("absolute  h-8 w-8 rounded-full", a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
		disabled: !s,
		onClick: o,
		...r,
		children: [/* @__PURE__ */ (0, B.jsx)(p, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
Lp.displayName = "CarouselPrevious";
var Rp = e.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, i) => {
	let { orientation: a, scrollNext: o, canScrollNext: s } = Np();
	return /* @__PURE__ */ (0, B.jsxs)(Ws, {
		ref: i,
		variant: t,
		size: n,
		className: Y("absolute h-8 w-8 rounded-full", a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
		disabled: !s,
		onClick: o,
		...r,
		children: [/* @__PURE__ */ (0, B.jsx)(m, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
Rp.displayName = "CarouselNext";
//#endregion
//#region lib/components/chart/chart.component.tsx
var zp = {
	light: "",
	dark: ".dark"
}, Bp = e.createContext(null);
function Vp() {
	let t = e.useContext(Bp);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
var Hp = e.forwardRef(({ id: t, className: n, children: r, config: i, ...a }, o) => {
	let s = e.useId(), c = `chart-${t || s.replace(/:/g, "")}`;
	return /* @__PURE__ */ (0, B.jsx)(Bp.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ (0, B.jsxs)("div", {
			"data-chart": c,
			ref: o,
			className: Y("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden", n),
			...a,
			children: [/* @__PURE__ */ (0, B.jsx)(Up, {
				id: c,
				config: i
			}), /* @__PURE__ */ (0, B.jsx)(L.ResponsiveContainer, { children: r })]
		})
	});
});
Hp.displayName = "Chart";
var Up = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.theme || e.color);
	return n.length ? /* @__PURE__ */ (0, B.jsx)("style", { dangerouslySetInnerHTML: { __html: Object.entries(zp).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] || n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, Wp = L.Tooltip, Gp = e.forwardRef(({ active: t, payload: n, className: r, indicator: i = "dot", hideLabel: a = !1, hideIndicator: o = !1, label: s, labelFormatter: c, labelClassName: l, formatter: u, color: d, nameKey: f, labelKey: p }, m) => {
	let { config: h } = Vp(), g = e.useMemo(() => {
		if (a || !n?.length) return null;
		let [e] = n;
		if (!e) return null;
		let t = Jp(h, e, `${p || e.dataKey || e.name || "value"}`), r = !p && typeof s == "string" ? h[s]?.label || s : t?.label;
		return c ? /* @__PURE__ */ (0, B.jsx)("div", {
			className: Y("font-medium", l),
			children: c(r, n)
		}) : r ? /* @__PURE__ */ (0, B.jsx)("div", {
			className: Y("font-medium", l),
			children: r
		}) : null;
	}, [
		s,
		c,
		n,
		a,
		l,
		h,
		p
	]);
	if (!t || !n?.length) return null;
	let _ = n.length === 1 && i !== "dot";
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		ref: m,
		className: Y("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", r),
		children: [_ ? null : g, /* @__PURE__ */ (0, B.jsx)("div", {
			className: "grid gap-1.5",
			children: n.map((e, t) => {
				if (!e) return null;
				let n = Jp(h, e, `${f || e.dataKey || e.name || "value"}`), r = d || e.payload.fill || e.color;
				return /* @__PURE__ */ (0, B.jsx)("div", {
					className: Y("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", i === "dot" && "items-center"),
					children: u && e?.value !== void 0 && e.name ? u(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [n?.icon ? /* @__PURE__ */ (0, B.jsx)(n.icon, {}) : !o && /* @__PURE__ */ (0, B.jsx)("div", {
						className: Y("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
							"h-2.5 w-2.5": i === "dot",
							"w-1": i === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": i === "dashed",
							"my-0.5": _ && i === "dashed"
						}),
						style: {
							"--color-bg": r,
							"--color-border": r
						}
					}), /* @__PURE__ */ (0, B.jsxs)("div", {
						className: Y("flex flex-1 justify-between leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ (0, B.jsxs)("div", {
							className: "grid gap-1.5",
							children: [_ ? g : null, /* @__PURE__ */ (0, B.jsx)("span", {
								className: "text-muted-foreground",
								children: n?.label || e.name
							})]
						}), e.value && /* @__PURE__ */ (0, B.jsx)("span", {
							className: "font-mono font-medium tabular-nums text-foreground",
							children: e.value.toLocaleString()
						})]
					})] })
				}, e.dataKey);
			})
		})]
	});
});
Gp.displayName = "ChartTooltip";
var Kp = L.Legend, qp = e.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }, a) => {
	let { config: o } = Vp();
	return n?.length ? /* @__PURE__ */ (0, B.jsx)("div", {
		ref: a,
		className: Y("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.map((e) => {
			if (!e) return null;
			let n = Jp(o, e, `${i || e.dataKey || "value"}`);
			return /* @__PURE__ */ (0, B.jsxs)("div", {
				className: Y("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [n?.icon && !t ? /* @__PURE__ */ (0, B.jsx)(n.icon, {}) : /* @__PURE__ */ (0, B.jsx)("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), n?.label]
			}, e.value);
		})
	}) : null;
});
qp.displayName = "ChartLegend";
function Jp(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-previou_176ac3accb42c8b6b207c4afdd35f5b1/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function Yp(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-use-size@1._980912bf8065e9f659c1ef10b256db1d/node_modules/@radix-ui/react-use-size/dist/index.mjs
function Xp(t) {
	let [n, r] = e.useState(void 0);
	return W(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-checkbox@1._c210ac2611606080c3e6cc0805bb1395/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var Zp = "Checkbox", [Qp, $p] = V(Zp), [em, tm] = Qp(Zp);
function nm(t) {
	let { __scopeCheckbox: n, checked: r, children: i, defaultChecked: a, disabled: o, form: s, name: c, onCheckedChange: l, required: u, value: d = "on", internal_do_not_use_render: f } = t, [p, m] = xe({
		prop: r,
		defaultProp: a ?? !1,
		onChange: l,
		caller: Zp
	}), [h, g] = e.useState(null), [_, v] = e.useState(null), y = e.useRef(!1), b = h ? !!s || !!h.closest("form") : !0, x = {
		checked: p,
		disabled: o,
		setChecked: m,
		control: h,
		setControl: g,
		name: c,
		form: s,
		value: d,
		hasConsumerStoppedPropagationRef: y,
		required: u,
		defaultChecked: dm(a) ? !1 : a,
		isFormControl: b,
		bubbleInput: _,
		setBubbleInput: v
	};
	return /* @__PURE__ */ (0, B.jsx)(em, {
		scope: n,
		...x,
		children: um(f) ? f(x) : i
	});
}
var rm = "CheckboxTrigger", im = e.forwardRef(({ __scopeCheckbox: t, onKeyDown: n, onClick: r, ...i }, a) => {
	let { control: o, value: s, disabled: c, checked: l, required: u, setControl: d, setChecked: f, hasConsumerStoppedPropagationRef: p, isFormControl: m, bubbleInput: h } = tm(rm, t), g = H(a, d), _ = e.useRef(l);
	return e.useEffect(() => {
		let e = o?.form;
		if (e) {
			let t = () => f(_.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [o, f]), /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": dm(l) ? "mixed" : l,
		"aria-required": u,
		"data-state": fm(l),
		"data-disabled": c ? "" : void 0,
		disabled: c,
		value: s,
		...i,
		ref: g,
		onKeyDown: U(n, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: U(r, (e) => {
			f((e) => dm(e) ? !0 : !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation());
		})
	});
});
im.displayName = rm;
var am = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, B.jsx)(nm, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(im, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ (0, B.jsx)(lm, { __scopeCheckbox: n })] })
	});
});
am.displayName = Zp;
var om = "CheckboxIndicator", sm = e.forwardRef((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = tm(om, n);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || dm(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, B.jsx)(G.span, {
			"data-state": fm(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
sm.displayName = om;
var cm = "CheckboxBubbleInput", lm = e.forwardRef(({ __scopeCheckbox: t, ...n }, r) => {
	let { control: i, hasConsumerStoppedPropagationRef: a, checked: o, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = tm(cm, t), h = H(r, m), g = Yp(o), _ = Xp(i);
	e.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !a.current;
		if (g !== o && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = dm(o), n.call(e, dm(o) ? !1 : o), e.dispatchEvent(t);
		}
	}, [
		p,
		g,
		o,
		a
	]);
	let v = e.useRef(dm(o) ? !1 : o);
	return /* @__PURE__ */ (0, B.jsx)(G.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? v.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...n,
		tabIndex: -1,
		ref: h,
		style: {
			...n.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
lm.displayName = cm;
function um(e) {
	return typeof e == "function";
}
function dm(e) {
	return e === "indeterminate";
}
function fm(e) {
	return dm(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region lib/components/checkbox/checkbox.component.tsx
var pm = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(am, {
	ref: n,
	className: Y("peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(sm, {
		className: Y("flex items-center justify-center text-current"),
		children: /* @__PURE__ */ (0, B.jsx)(_, { className: "size-4 h-full" })
	})
}));
pm.displayName = am.displayName;
//#endregion
//#region lib/components/combobox-form/combobox-form.component.tsx
function mm({ name: e, label: t, options: n, placeholder: r = "Selecione uma opção", searchPlaceholder: i = "Buscar...", emptyMessage: a = "Nenhum resultado encontrado.", disabled: o = !1, isLoading: s = !1 }) {
	let { control: c, setValue: l } = ne();
	return /* @__PURE__ */ (0, B.jsx)(zS, {
		control: c,
		name: e,
		render: ({ field: c }) => /* @__PURE__ */ (0, B.jsxs)(HS, { children: [
			!!t && /* @__PURE__ */ (0, B.jsx)(US, { children: t }),
			/* @__PURE__ */ (0, B.jsx)(hm, {
				placeholder: r,
				searchPlaceholder: i,
				emptyMessage: a,
				options: n,
				selected: c.value,
				onSelect: (t) => l(e, t, { shouldValidate: !0 }),
				disabled: o,
				isLoading: s
			}),
			/* @__PURE__ */ (0, B.jsx)(KS, {})
		] })
	});
}
//#endregion
//#region lib/components/combobox/combobox.component.tsx
function hm({ label: e, options: t, selected: n, onSelect: r, placeholder: i = "Selecione uma opção", searchPlaceholder: a = "Buscar...", emptyMessage: o = "Nenhum resultado encontrado.", error: s, disabled: c = !1, isLoading: l = !1 }) {
	let [d, f] = u(!1);
	return /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "space-y-1",
		children: [
			!!e && /* @__PURE__ */ (0, B.jsx)(IS, { children: e }),
			/* @__PURE__ */ (0, B.jsxs)(Nv, {
				open: d,
				onOpenChange: f,
				children: [/* @__PURE__ */ (0, B.jsx)(Pv, {
					asChild: !0,
					children: /* @__PURE__ */ (0, B.jsxs)(Ws, {
						variant: "outline",
						disabled: c,
						className: Y("relative w-full justify-between hover:bg-input bg-input font-normal", !n && "text-muted-foreground"),
						children: [/* @__PURE__ */ (0, B.jsx)("div", {
							className: "truncate",
							children: n ? t.find((e) => e.value === n)?.label : i
						}), /* @__PURE__ */ (0, B.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [l && /* @__PURE__ */ (0, B.jsx)(k, { className: "animate-spin shrink-0 opacity-50" }), /* @__PURE__ */ (0, B.jsx)(E, { className: "shrink-0 opacity-50" })]
						})]
					})
				}), /* @__PURE__ */ (0, B.jsx)(Fv, {
					className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]",
					children: /* @__PURE__ */ (0, B.jsxs)(dh, { children: [/* @__PURE__ */ (0, B.jsx)(ph, { placeholder: a }), /* @__PURE__ */ (0, B.jsxs)(mh, { children: [/* @__PURE__ */ (0, B.jsx)(hh, { children: o }), /* @__PURE__ */ (0, B.jsx)(gh, { children: t.map((e) => /* @__PURE__ */ (0, B.jsxs)(vh, {
						value: e.label,
						onSelect: () => {
							n === e.value ? r(void 0) : r(e.value), f(!1);
						},
						children: [/* @__PURE__ */ (0, B.jsx)(_, { className: Y("mr-2 size-4", n === e.value ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, B.jsx)("div", {
							className: "w-0 flex-1",
							children: e.label
						})]
					}, e.value)) })] })] })
				})]
			}),
			!!s && /* @__PURE__ */ (0, B.jsx)("p", {
				className: "text-destructive dark:text-red-400 text-[0.8rem]",
				children: s
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_dd530bdfe39910342c9fdf9a876e79cc/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var gm = 1, _m = .9, vm = .8, ym = .17, bm = .1, xm = .999, Sm = .9999, Cm = .99, wm = /[\\\/_+.#"@\[\(\{&]/, Tm = /[\\\/_+.#"@\[\(\{&]/g, Em = /[\s-]/, Dm = /[\s-]/g;
function Om(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? gm : Cm;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = Om(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= gm : wm.test(e.charAt(l - 1)) ? (d *= vm, p = e.slice(i, l - 1).match(Tm), p && i > 0 && (d *= xm ** +p.length)) : Em.test(e.charAt(l - 1)) ? (d *= _m, m = e.slice(i, l - 1).match(Dm), m && i > 0 && (d *= xm ** +m.length)) : (d *= ym, i > 0 && (d *= xm ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= Sm)), (d < bm && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = Om(e, t, n, r, l + 1, a + 2, o), f * bm > d && (d = f * bm)), d > u && (u = d), l = n.indexOf(c, l + 1);
	return o[s] = u, u;
}
function km(e) {
	return e.toLowerCase().replace(Dm, " ");
}
function Am(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Om(e, t, km(e), km(t), 0, 0, {});
}
//#endregion
//#region node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_dd530bdfe39910342c9fdf9a876e79cc/node_modules/cmdk/dist/index.mjs
var jm = "[cmdk-group=\"\"]", Mm = "[cmdk-group-items=\"\"]", Nm = "[cmdk-group-heading=\"\"]", Pm = "[cmdk-item=\"\"]", Fm = `${Pm}:not([aria-disabled="true"])`, Im = "cmdk-item-select", Lm = "data-value", Rm = (e, t, n) => Am(e, t, n), zm = e.createContext(void 0), Bm = () => e.useContext(zm), Vm = e.createContext(void 0), Hm = () => e.useContext(Vm), Um = e.createContext(void 0), Wm = e.forwardRef((t, n) => {
	let r = ih(() => ({
		search: "",
		value: t.value ?? t.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), i = ih(() => /* @__PURE__ */ new Set()), a = ih(() => /* @__PURE__ */ new Map()), o = ih(() => /* @__PURE__ */ new Map()), s = ih(() => /* @__PURE__ */ new Set()), c = nh(t), { label: l, children: u, value: d, onValueChange: f, filter: p, shouldFilter: m, loop: h, disablePointerSelection: g = !1, vimBindings: _ = !0, ...v } = t, y = Me(), b = Me(), x = Me(), S = e.useRef(null), C = sh();
	rh(() => {
		if (d !== void 0) {
			let e = d.trim();
			r.current.value = e, w.emit();
		}
	}, [d]), rh(() => {
		C(6, A);
	}, []);
	let w = e.useMemo(() => ({
		subscribe: (e) => (s.current.add(e), () => s.current.delete(e)),
		snapshot: () => r.current,
		setState: (e, t, n) => {
			var i, a, o;
			if (!Object.is(r.current[e], t)) {
				if (r.current[e] = t, e === "search") k(), D(), C(1, O);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(x);
						e ? e.focus() : (i = document.getElementById(y)) == null || i.focus();
					}
					if (C(7, () => {
						r.current.selectedItemId = j()?.id, w.emit();
					}), n || C(5, A), c.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = c.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				w.emit();
			}
		},
		emit: () => {
			s.current.forEach((e) => e());
		}
	}), []), T = e.useMemo(() => ({
		value: (e, t, n) => {
			t !== o.current.get(e)?.value && (o.current.set(e, {
				value: t,
				keywords: n
			}), r.current.filtered.items.set(e, E(t, n)), C(2, () => {
				D(), w.emit();
			}));
		},
		item: (e, t) => (i.current.add(e), t && (a.current.has(t) ? a.current.get(t).add(e) : a.current.set(t, new Set([e]))), C(3, () => {
			k(), D(), r.current.value || O(), w.emit();
		}), () => {
			o.current.delete(e), i.current.delete(e), r.current.filtered.items.delete(e);
			let t = j();
			C(4, () => {
				k(), t?.getAttribute("id") === e && O(), w.emit();
			});
		}),
		group: (e) => (a.current.has(e) || a.current.set(e, /* @__PURE__ */ new Set()), () => {
			o.current.delete(e), a.current.delete(e);
		}),
		filter: () => c.current.shouldFilter,
		label: l || t["aria-label"],
		getDisablePointerSelection: () => c.current.disablePointerSelection,
		listId: y,
		inputId: x,
		labelId: b,
		listInnerRef: S
	}), []);
	function E(e, t) {
		let n = c.current?.filter ?? Rm;
		return e ? n(e, r.current.search, t) : 0;
	}
	function D() {
		if (!r.current.search || c.current.shouldFilter === !1) return;
		let e = r.current.filtered.items, t = [];
		r.current.filtered.groups.forEach((n) => {
			let r = a.current.get(n), i = 0;
			r.forEach((t) => {
				let n = e.get(t);
				i = Math.max(n, i);
			}), t.push([n, i]);
		});
		let n = S.current;
		M().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(Mm);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${Mm} > *`)) : n.appendChild(e.parentElement === n ? e : e.closest(`${Mm} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = S.current?.querySelector(`${jm}[${Lm}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function O() {
		let e = M().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(Lm);
		w.setState("value", e || void 0);
	}
	function k() {
		if (!r.current.search || c.current.shouldFilter === !1) {
			r.current.filtered.count = i.current.size;
			return;
		}
		r.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of i.current) {
			let n = E(o.current.get(t)?.value ?? "", o.current.get(t)?.keywords ?? []);
			r.current.filtered.items.set(t, n), n > 0 && e++;
		}
		for (let [e, t] of a.current) for (let n of t) if (r.current.filtered.items.get(n) > 0) {
			r.current.filtered.groups.add(e);
			break;
		}
		r.current.filtered.count = e;
	}
	function A() {
		var e;
		let t = j();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(jm)?.querySelector(Nm)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function j() {
		return S.current?.querySelector(`${Pm}[aria-selected="true"]`);
	}
	function M() {
		return Array.from(S.current?.querySelectorAll(Fm) || []);
	}
	function N(e) {
		let t = M()[e];
		t && w.setState("value", t.getAttribute(Lm));
	}
	function P(e) {
		var t;
		let n = j(), r = M(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = c.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && w.setState("value", a.getAttribute(Lm));
	}
	function F(e) {
		let t = j()?.closest(jm), n;
		for (; t && !n;) t = e > 0 ? eh(t, jm) : th(t, jm), n = t?.querySelector(Fm);
		n ? w.setState("value", n.getAttribute(Lm)) : P(e);
	}
	let I = () => N(M().length - 1), ee = (e) => {
		e.preventDefault(), e.metaKey ? I() : e.altKey ? F(1) : P(1);
	}, te = (e) => {
		e.preventDefault(), e.metaKey ? N(0) : e.altKey ? F(-1) : P(-1);
	};
	return e.createElement(us.div, {
		ref: n,
		tabIndex: -1,
		...v,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = v.onKeyDown) == null || t.call(v, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					_ && e.ctrlKey && ee(e);
					break;
				case "ArrowDown":
					ee(e);
					break;
				case "p":
				case "k":
					_ && e.ctrlKey && te(e);
					break;
				case "ArrowUp":
					te(e);
					break;
				case "Home":
					e.preventDefault(), N(0);
					break;
				case "End":
					e.preventDefault(), I();
					break;
				case "Enter": {
					e.preventDefault();
					let t = j();
					if (t) {
						let e = new Event(Im);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, e.createElement("label", {
		"cmdk-label": "",
		htmlFor: T.inputId,
		id: T.labelId,
		style: uh
	}, l), lh(t, (t) => e.createElement(Vm.Provider, { value: w }, e.createElement(zm.Provider, { value: T }, t))));
}), Gm = e.forwardRef((t, n) => {
	let r = Me(), i = e.useRef(null), a = e.useContext(Um), o = Bm(), s = nh(t), c = s.current?.forceMount ?? a?.forceMount;
	rh(() => {
		if (!c) return o.item(r, a?.id);
	}, [c]);
	let l = oh(r, i, [
		t.value,
		t.children,
		i
	], t.keywords), u = Hm(), d = ah((e) => e.value && e.value === l.current), f = ah((e) => c || o.filter() === !1 ? !0 : e.search ? e.filtered.items.get(r) > 0 : !0);
	e.useEffect(() => {
		let e = i.current;
		if (!(!e || t.disabled)) return e.addEventListener(Im, p), () => e.removeEventListener(Im, p);
	}, [
		f,
		t.onSelect,
		t.disabled
	]);
	function p() {
		var e, t;
		m(), (t = (e = s.current).onSelect) == null || t.call(e, l.current);
	}
	function m() {
		u.setState("value", l.current, !0);
	}
	if (!f) return null;
	let { disabled: h, value: g, onSelect: _, forceMount: v, keywords: y, ...b } = t;
	return e.createElement(us.div, {
		ref: de(i, n),
		...b,
		id: r,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!h,
		"aria-selected": !!d,
		"data-disabled": !!h,
		"data-selected": !!d,
		onPointerMove: h || o.getDisablePointerSelection() ? void 0 : m,
		onClick: h ? void 0 : p
	}, t.children);
}), Km = e.forwardRef((t, n) => {
	let { heading: r, children: i, forceMount: a, ...o } = t, s = Me(), c = e.useRef(null), l = e.useRef(null), u = Me(), d = Bm(), f = ah((e) => a || d.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(s) : !0);
	rh(() => d.group(s), []), oh(s, c, [
		t.value,
		t.heading,
		l
	]);
	let p = e.useMemo(() => ({
		id: s,
		forceMount: a
	}), [a]);
	return e.createElement(us.div, {
		ref: de(c, n),
		...o,
		"cmdk-group": "",
		role: "presentation",
		hidden: f ? void 0 : !0
	}, r && e.createElement("div", {
		ref: l,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: u
	}, r), lh(t, (t) => e.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": r ? u : void 0
	}, e.createElement(Um.Provider, { value: p }, t))));
}), qm = e.forwardRef((t, n) => {
	let { alwaysRender: r, ...i } = t, a = e.useRef(null), o = ah((e) => !e.search);
	return !r && !o ? null : e.createElement(us.div, {
		ref: de(a, n),
		...i,
		"cmdk-separator": "",
		role: "separator"
	});
}), Jm = e.forwardRef((t, n) => {
	let { onValueChange: r, ...i } = t, a = t.value != null, o = Hm(), s = ah((e) => e.search), c = ah((e) => e.selectedItemId), l = Bm();
	return e.useEffect(() => {
		t.value != null && o.setState("search", t.value);
	}, [t.value]), e.createElement(us.input, {
		ref: n,
		...i,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": l.listId,
		"aria-labelledby": l.labelId,
		"aria-activedescendant": c,
		id: l.inputId,
		type: "text",
		value: a ? t.value : s,
		onChange: (e) => {
			a || o.setState("search", e.target.value), r?.(e.target.value);
		}
	});
}), Ym = e.forwardRef((t, n) => {
	let { children: r, label: i = "Suggestions", ...a } = t, o = e.useRef(null), s = e.useRef(null), c = ah((e) => e.selectedItemId), l = Bm();
	return e.useEffect(() => {
		if (s.current && o.current) {
			let e = s.current, t = o.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), e.createElement(us.div, {
		ref: de(o, n),
		...a,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": c,
		"aria-label": i,
		id: l.listId
	}, lh(t, (t) => e.createElement("div", {
		ref: de(s, l.listInnerRef),
		"cmdk-list-sizer": ""
	}, t)));
}), Xm = e.forwardRef((t, n) => {
	let { open: r, onOpenChange: i, overlayClassName: a, contentClassName: o, container: s, ...c } = t;
	return e.createElement(Ja, {
		open: r,
		onOpenChange: i
	}, e.createElement(Xa, { container: s }, e.createElement(Za, {
		"cmdk-overlay": "",
		className: a
	}), e.createElement(Qa, {
		"aria-label": t.label,
		"cmdk-dialog": "",
		className: o
	}, e.createElement(Wm, {
		ref: n,
		...c
	}))));
}), Zm = e.forwardRef((t, n) => ah((e) => e.filtered.count === 0) ? e.createElement(us.div, {
	ref: n,
	...t,
	"cmdk-empty": "",
	role: "presentation"
}) : null), Qm = e.forwardRef((t, n) => {
	let { progress: r, children: i, label: a = "Loading...", ...o } = t;
	return e.createElement(us.div, {
		ref: n,
		...o,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": r,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": a
	}, lh(t, (t) => e.createElement("div", { "aria-hidden": !0 }, t)));
}), $m = Object.assign(Wm, {
	List: Ym,
	Item: Gm,
	Input: Jm,
	Group: Km,
	Separator: qm,
	Dialog: Xm,
	Empty: Zm,
	Loading: Qm
});
function eh(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function th(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function nh(t) {
	let n = e.useRef(t);
	return rh(() => {
		n.current = t;
	}), n;
}
var rh = typeof window > "u" ? e.useEffect : e.useLayoutEffect;
function ih(t) {
	let n = e.useRef();
	return n.current === void 0 && (n.current = t()), n;
}
function ah(t) {
	let n = Hm(), r = () => t(n.snapshot());
	return e.useSyncExternalStore(n.subscribe, r, r);
}
function oh(t, n, r, i = []) {
	let a = e.useRef(), o = Bm();
	return rh(() => {
		var e;
		let s = (() => {
			for (let e of r) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : a.current;
			}
		})(), c = i.map((e) => e.trim());
		o.value(t, s, c), (e = n.current) == null || e.setAttribute(Lm, s), a.current = s;
	}), a;
}
var sh = () => {
	let [t, n] = e.useState(), r = ih(() => /* @__PURE__ */ new Map());
	return rh(() => {
		r.current.forEach((e) => e()), r.current = /* @__PURE__ */ new Map();
	}, [t]), (e, t) => {
		r.current.set(e, t), n({});
	};
};
function ch(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function lh({ asChild: t, children: n }, r) {
	return t && e.isValidElement(n) ? e.cloneElement(ch(n), { ref: n.ref }, r(n.props.children)) : r(n);
}
var uh = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
}, dh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($m, {
	ref: n,
	className: Y("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
	...t
}));
dh.displayName = $m.displayName;
var fh = ({ children: e, ...t }) => /* @__PURE__ */ (0, B.jsx)(sy, {
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(fy, {
		className: "overflow-hidden p-0 shadow-lg",
		children: /* @__PURE__ */ (0, B.jsx)(dh, {
			className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
			children: e
		})
	})
}), ph = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, B.jsx)(M, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, B.jsx)($m.Input, {
		ref: n,
		className: Y("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
		...t
	})]
}));
ph.displayName = $m.Input.displayName;
var mh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($m.List, {
	ref: n,
	className: Y("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
	...t
}));
mh.displayName = $m.List.displayName;
var hh = e.forwardRef((e, t) => /* @__PURE__ */ (0, B.jsx)($m.Empty, {
	ref: t,
	className: "py-6 text-center text-sm",
	...e
}));
hh.displayName = $m.Empty.displayName;
var gh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($m.Group, {
	ref: n,
	className: Y("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
	...t
}));
gh.displayName = $m.Group.displayName;
var _h = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($m.Separator, {
	ref: n,
	className: Y("-mx-1 h-px bg-border", e),
	...t
}));
_h.displayName = $m.Separator.displayName;
var vh = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($m.Item, {
	ref: n,
	className: Y("relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e),
	...t
}));
vh.displayName = $m.Item.displayName;
var yh = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("span", {
	className: Y("ml-auto text-xs tracking-widest text-muted-foreground", e),
	...t
});
yh.displayName = "CommandShortcut";
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var bh = [
	"top",
	"right",
	"bottom",
	"left"
], xh = Math.min, Sh = Math.max, Ch = Math.round, wh = Math.floor, Th = (e) => ({
	x: e,
	y: e
}), Eh = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Dh(e, t, n) {
	return Sh(e, xh(t, n));
}
function Oh(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function kh(e) {
	return e.split("-")[0];
}
function Ah(e) {
	return e.split("-")[1];
}
function jh(e) {
	return e === "x" ? "y" : "x";
}
function Mh(e) {
	return e === "y" ? "height" : "width";
}
function Nh(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Ph(e) {
	return jh(Nh(e));
}
function Fh(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ah(e), i = Ph(e), a = Mh(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Wh(o)), [o, Wh(o)];
}
function Ih(e) {
	let t = Wh(e);
	return [
		Lh(e),
		t,
		Lh(t)
	];
}
function Lh(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Rh = ["left", "right"], zh = ["right", "left"], Bh = ["top", "bottom"], Vh = ["bottom", "top"];
function Hh(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? zh : Rh : t ? Rh : zh;
		case "left":
		case "right": return t ? Bh : Vh;
		default: return [];
	}
}
function Uh(e, t, n, r) {
	let i = Ah(e), a = Hh(kh(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Lh)))), a;
}
function Wh(e) {
	let t = kh(e);
	return Eh[t] + e.slice(t.length);
}
function Gh(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Kh(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Gh(e);
}
function qh(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Jh(e, t, n) {
	let { reference: r, floating: i } = e, a = Nh(t), o = Ph(t), s = Mh(o), c = kh(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Ah(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Yh(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Oh(t, e), p = Kh(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qh(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = qh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Xh = 50, Zh = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Yh
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Jh(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Xh && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Jh(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qh = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Oh(e, t) || {};
		if (l == null) return {};
		let d = Kh(u), f = {
			x: n,
			y: r
		}, p = Ph(i), m = Mh(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = xh(d[_], T), D = xh(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = Dh(O, A, k), M = !c.arrow && Ah(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), $h = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Oh(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = kh(r), _ = Nh(o), v = kh(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Wh(o)] : Ih(o)), x = p !== "none";
			!d && x && b.push(...Uh(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Fh(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Nh(t)) || T.every((e) => Nh(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Nh(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function eg(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function tg(e) {
	return bh.some((t) => e[t] >= 0);
}
var ng = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Oh(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = eg(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: tg(e)
					} };
				}
				case "escaped": {
					let e = eg(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: tg(e)
					} };
				}
				default: return {};
			}
		}
	};
}, rg = /* @__PURE__ */ new Set(["left", "top"]);
async function ig(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = kh(n), s = Ah(n), c = Nh(n) === "y", l = rg.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Oh(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var ag = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ig(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, og = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Oh(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Nh(kh(i)), p = jh(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Dh(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Dh(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, sg = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Oh(e, t), u = {
				x: n,
				y: r
			}, d = Nh(i), f = jh(d), p = u[f], m = u[d], h = Oh(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = rg.has(kh(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, cg = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = Oh(e, t), u = await o.detectOverflow(t, l), d = kh(i), f = Ah(i), p = Nh(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = xh(h - u[g], v), x = xh(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = Sh(u.left, 0), t = Sh(u.right, 0), n = Sh(u.top, 0), r = Sh(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : Sh(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : Sh(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function lg() {
	return typeof window < "u";
}
function ug(e) {
	return pg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dg(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fg(e) {
	return ((pg(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function pg(e) {
	return lg() ? e instanceof Node || e instanceof dg(e).Node : !1;
}
function mg(e) {
	return lg() ? e instanceof Element || e instanceof dg(e).Element : !1;
}
function hg(e) {
	return lg() ? e instanceof HTMLElement || e instanceof dg(e).HTMLElement : !1;
}
function gg(e) {
	return !lg() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof dg(e).ShadowRoot;
}
function _g(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Og(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function vg(e) {
	return /^(table|td|th)$/.test(ug(e));
}
function yg(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var bg = /transform|translate|scale|rotate|perspective|filter/, xg = /paint|layout|strict|content/, Sg = (e) => !!e && e !== "none", Cg;
function wg(e) {
	let t = mg(e) ? Og(e) : e;
	return Sg(t.transform) || Sg(t.translate) || Sg(t.scale) || Sg(t.rotate) || Sg(t.perspective) || !Eg() && (Sg(t.backdropFilter) || Sg(t.filter)) || bg.test(t.willChange || "") || xg.test(t.contain || "");
}
function Tg(e) {
	let t = Ag(e);
	for (; hg(t) && !Dg(t);) {
		if (wg(t)) return t;
		if (yg(t)) return null;
		t = Ag(t);
	}
	return null;
}
function Eg() {
	return Cg ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Cg;
}
function Dg(e) {
	return /^(html|body|#document)$/.test(ug(e));
}
function Og(e) {
	return dg(e).getComputedStyle(e);
}
function kg(e) {
	return mg(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Ag(e) {
	if (ug(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || gg(e) && e.host || fg(e);
	return gg(t) ? t.host : t;
}
function jg(e) {
	let t = Ag(e);
	return Dg(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hg(t) && _g(t) ? t : jg(t);
}
function Mg(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = jg(e), i = r === e.ownerDocument?.body, a = dg(r);
	if (i) {
		let e = Ng(a);
		return t.concat(a, a.visualViewport || [], _g(r) ? r : [], e && n ? Mg(e) : []);
	} else return t.concat(r, Mg(r, [], n));
}
function Ng(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Pg(e) {
	let t = Og(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = hg(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ch(n) !== a || Ch(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Fg(e) {
	return mg(e) ? e : e.contextElement;
}
function Ig(e) {
	let t = Fg(e);
	if (!hg(t)) return Th(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Pg(t), o = (a ? Ch(n.width) : n.width) / r, s = (a ? Ch(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Lg = /* @__PURE__ */ Th(0);
function Rg(e) {
	let t = dg(e);
	return !Eg() || !t.visualViewport ? Lg : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function zg(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== dg(e) ? !1 : t;
}
function Bg(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Fg(e), o = Th(1);
	t && (r ? mg(r) && (o = Ig(r)) : o = Ig(e));
	let s = zg(a, n, r) ? Rg(a) : Th(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = dg(a), t = r && mg(r) ? dg(r) : r, n = e, i = Ng(n);
		for (; i && r && t !== n;) {
			let e = Ig(i), t = i.getBoundingClientRect(), r = Og(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = dg(i), i = Ng(n);
		}
	}
	return qh({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Vg(e, t) {
	let n = kg(e).scrollLeft;
	return t ? t.left + n : Bg(fg(e)).left + n;
}
function Hg(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Vg(e, n),
		y: n.top + t.scrollTop
	};
}
function Ug(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = fg(r), s = t ? yg(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Th(1), u = Th(0), d = hg(r);
	if ((d || !d && !a) && ((ug(r) !== "body" || _g(o)) && (c = kg(r)), d)) {
		let e = Bg(r);
		l = Ig(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Hg(o, c) : Th(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Wg(e) {
	return Array.from(e.getClientRects());
}
function Gg(e) {
	let t = fg(e), n = kg(e), r = e.ownerDocument.body, i = Sh(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Sh(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Vg(e), s = -n.scrollTop;
	return Og(r).direction === "rtl" && (o += Sh(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Kg = 25;
function qg(e, t) {
	let n = dg(e), r = fg(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Eg();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Vg(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Kg && (a -= o);
	} else l <= Kg && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Jg(e, t) {
	let n = Bg(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = hg(e) ? Ig(e) : Th(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Yg(e, t, n) {
	let r;
	if (t === "viewport") r = qg(e, n);
	else if (t === "document") r = Gg(fg(e));
	else if (mg(t)) r = Jg(t, n);
	else {
		let n = Rg(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qh(r);
}
function Xg(e, t) {
	let n = Ag(e);
	return n === t || !mg(n) || Dg(n) ? !1 : Og(n).position === "fixed" || Xg(n, t);
}
function Zg(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Mg(e, [], !1).filter((e) => mg(e) && ug(e) !== "body"), i = null, a = Og(e).position === "fixed", o = a ? Ag(e) : e;
	for (; mg(o) && !Dg(o);) {
		let t = Og(o), n = wg(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || _g(o) && !n && Xg(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Ag(o);
	}
	return t.set(e, r), r;
}
function Qg(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? yg(t) ? [] : Zg(t, this._c) : [].concat(n), r], o = Yg(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Yg(t, a[e], i);
		s = Sh(n.top, s), c = xh(n.right, c), l = xh(n.bottom, l), u = Sh(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function $g(e) {
	let { width: t, height: n } = Pg(e);
	return {
		width: t,
		height: n
	};
}
function e_(e, t, n) {
	let r = hg(t), i = fg(t), a = n === "fixed", o = Bg(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Th(0);
	function l() {
		c.x = Vg(i);
	}
	if (r || !r && !a) if ((ug(t) !== "body" || _g(i)) && (s = kg(t)), r) {
		let e = Bg(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Hg(i, s) : Th(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function t_(e) {
	return Og(e).position === "static";
}
function n_(e, t) {
	if (!hg(e) || Og(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return fg(e) === n && (n = n.ownerDocument.body), n;
}
function r_(e, t) {
	let n = dg(e);
	if (yg(e)) return n;
	if (!hg(e)) {
		let t = Ag(e);
		for (; t && !Dg(t);) {
			if (mg(t) && !t_(t)) return t;
			t = Ag(t);
		}
		return n;
	}
	let r = n_(e, t);
	for (; r && vg(r) && t_(r);) r = n_(r, t);
	return r && Dg(r) && t_(r) && !wg(r) ? n : r || Tg(e) || n;
}
var i_ = async function(e) {
	let t = this.getOffsetParent || r_, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: e_(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function a_(e) {
	return Og(e).direction === "rtl";
}
var o_ = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ug,
	getDocumentElement: fg,
	getClippingRect: Qg,
	getOffsetParent: r_,
	getElementRects: i_,
	getClientRects: Wg,
	getDimensions: $g,
	getScale: Ig,
	isElement: mg,
	isRTL: a_
};
function s_(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function c_(e, t) {
	let n = null, r, i = fg(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = wh(d), h = wh(i.clientWidth - (u + f)), g = wh(i.clientHeight - (d + p)), _ = wh(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Sh(0, xh(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !s_(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function l_(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Fg(e), u = i || a ? [...l ? Mg(l) : [], ...t ? Mg(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? c_(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Bg(e) : null;
	c && g();
	function g() {
		let t = Bg(e);
		h && !s_(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var u_ = ag, d_ = og, f_ = $h, p_ = cg, m_ = ng, h_ = Qh, g_ = sg, __ = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: o_,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Zh(e, t, {
		...i,
		platform: a
	});
}, v_ = typeof document < "u" ? s : function() {};
function y_(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!y_(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !y_(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function b_(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function x_(e, t) {
	let n = b_(e);
	return Math.round(t * n) / n;
}
function S_(t) {
	let n = e.useRef(t);
	return v_(() => {
		n.current = t;
	}), n;
}
function C_(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = t, [f, p] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = e.useState(i);
	y_(m, i) || h(i);
	let [g, _] = e.useState(null), [v, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || g, C = s || v, w = e.useRef(null), T = e.useRef(null), E = e.useRef(f), D = l != null, O = S_(l), k = S_(a), A = S_(u), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), __(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !y_(E.current, t) && (E.current = t, d.flushSync(() => {
				p(t);
			}));
		});
	}, [
		m,
		n,
		r,
		k,
		A
	]);
	v_(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let M = e.useRef(!1);
	v_(() => (M.current = !0, () => {
		M.current = !1;
	}), []), v_(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = x_(P.floating, f.x), n = x_(P.floating, f.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...b_(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		P.floating,
		f.x,
		f.y
	]);
	return e.useMemo(() => ({
		...f,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		f,
		j,
		N,
		P,
		F
	]);
}
var w_ = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : h_({
				element: r.current,
				padding: i
			}).fn(n) : r ? h_({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, T_ = (e, t) => {
	let n = u_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, E_ = (e, t) => {
	let n = d_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, D_ = (e, t) => ({
	fn: g_(e).fn,
	options: [e, t]
}), O_ = (e, t) => {
	let n = f_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, k_ = (e, t) => {
	let n = p_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, A_ = (e, t) => {
	let n = m_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, j_ = (e, t) => {
	let n = w_(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, M_ = "Arrow", N_ = e.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, B.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
N_.displayName = M_;
var P_ = N_, F_ = "Popper", [I_, L_] = V(F_), [R_, z_] = I_(F_), B_ = (t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null);
	return /* @__PURE__ */ (0, B.jsx)(R_, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
B_.displayName = F_;
var V_ = "PopperAnchor", H_ = e.forwardRef((t, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = z_(V_, r), s = e.useRef(null), c = H(n, s), l = e.useRef(null);
	return e.useEffect(() => {
		let e = l.current;
		l.current = i?.current || s.current, e !== l.current && o.onAnchorChange(l.current);
	}), i ? null : /* @__PURE__ */ (0, B.jsx)(G.div, {
		...a,
		ref: c
	});
});
H_.displayName = V_;
var U_ = "PopperContent", [W_, G_] = I_(U_), K_ = e.forwardRef((t, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = "partial", hideWhenDetached: p = !1, updatePositionStrategy: m = "optimized", onPlaced: h, ...g } = t, _ = z_(U_, r), [v, y] = e.useState(null), b = H(n, (e) => y(e)), [x, S] = e.useState(null), C = Xp(x), w = C?.width ?? 0, T = C?.height ?? 0, E = i + (o === "center" ? "" : "-" + o), D = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(X_),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = C_({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: (...e) => l_(...e, { animationFrame: m === "always" }),
		elements: { reference: _.anchor },
		middleware: [
			T_({
				mainAxis: a + T,
				alignmentAxis: s
			}),
			l && E_({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === "partial" ? D_() : void 0,
				...A
			}),
			l && O_({ ...A }),
			k_({
				...A,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			x && j_({
				element: x,
				padding: c
			}),
			Z_({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && A_({
				strategy: "referenceHidden",
				...A
			})
		]
	}), [I, ee] = Q_(N), te = X(h);
	W(() => {
		P && te?.();
	}, [P, te]);
	let ne = F.arrow?.x, re = F.arrow?.y, L = F.arrow?.centerOffset !== 0, [R, ie] = e.useState();
	return W(() => {
		v && ie(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ (0, B.jsx)("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: R,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ (0, B.jsx)(W_, {
			scope: r,
			placedSide: I,
			onArrowChange: S,
			arrowX: ne,
			arrowY: re,
			shouldHideArrow: L,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				"data-side": I,
				"data-align": ee,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: P ? void 0 : "none"
				}
			})
		})
	});
});
K_.displayName = U_;
var q_ = "PopperArrow", J_ = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Y_ = e.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = G_(q_, n), a = J_[i.placedSide];
	return /* @__PURE__ */ (0, B.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, B.jsx)(P_, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Y_.displayName = q_;
function X_(e) {
	return e !== null;
}
var Z_ = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Q_(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function Q_(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var $_ = B_, ev = H_, tv = K_, nv = Y_, rv = "Popover", [iv, av] = V(rv, [L_]), ov = L_(), [sv, cv] = iv(rv), lv = (t) => {
	let { __scopePopover: n, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: s = !1 } = t, c = ov(n), l = e.useRef(null), [u, d] = e.useState(!1), [f, p] = xe({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: rv
	});
	return /* @__PURE__ */ (0, B.jsx)($_, {
		...c,
		children: /* @__PURE__ */ (0, B.jsx)(sv, {
			scope: n,
			contentId: Me(),
			triggerRef: l,
			open: f,
			onOpenChange: p,
			onOpenToggle: e.useCallback(() => p((e) => !e), [p]),
			hasCustomAnchor: u,
			onCustomAnchorAdd: e.useCallback(() => d(!0), []),
			onCustomAnchorRemove: e.useCallback(() => d(!1), []),
			modal: s,
			children: r
		})
	});
};
lv.displayName = rv;
var uv = "PopoverAnchor", dv = e.forwardRef((t, n) => {
	let { __scopePopover: r, ...i } = t, a = cv(uv, r), o = ov(r), { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = a;
	return e.useEffect(() => (s(), () => c()), [s, c]), /* @__PURE__ */ (0, B.jsx)(ev, {
		...o,
		...i,
		ref: n
	});
});
dv.displayName = uv;
var fv = "PopoverTrigger", pv = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = cv(fv, n), a = ov(n), o = H(t, i.triggerRef), s = /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.contentId,
		"data-state": Ov(i.open),
		...r,
		ref: o,
		onClick: U(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ (0, B.jsx)(ev, {
		asChild: !0,
		...a,
		children: s
	});
});
pv.displayName = fv;
var mv = "PopoverPortal", [hv, gv] = iv(mv, { forceMount: void 0 }), _v = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = cv(mv, t);
	return /* @__PURE__ */ (0, B.jsx)(hv, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, B.jsx)(Kr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
_v.displayName = mv;
var vv = "PopoverContent", yv = e.forwardRef((e, t) => {
	let n = gv(vv, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = cv(vv, e.__scopePopover);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, B.jsx)(xv, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, B.jsx)(Sv, {
			...i,
			ref: t
		})
	});
});
yv.displayName = vv;
var bv = /* @__PURE__ */ fe("PopoverContent.RemoveScroll"), xv = e.forwardRef((t, n) => {
	let r = cv(vv, t.__scopePopover), i = e.useRef(null), a = H(n, i), o = e.useRef(!1);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return pa(e);
	}, []), /* @__PURE__ */ (0, B.jsx)(ia, {
		as: bv,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, B.jsx)(Cv, {
			...t,
			ref: a,
			trapFocus: r.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || r.triggerRef.current?.focus();
			}),
			onPointerDownOutside: U(t.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				o.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), Sv = e.forwardRef((t, n) => {
	let r = cv(vv, t.__scopePopover), i = e.useRef(!1), a = e.useRef(!1);
	return /* @__PURE__ */ (0, B.jsx)(Cv, {
		...t,
		ref: n,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (e) => {
			t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || r.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, a.current = !1;
		},
		onInteractOutside: (e) => {
			t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, e.detail.originalEvent.type === "pointerdown" && (a.current = !0));
			let n = e.target;
			r.triggerRef.current?.contains(n) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && a.current && e.preventDefault();
		}
	});
}), Cv = e.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = cv(vv, n), p = ov(n);
	return Jr(), /* @__PURE__ */ (0, B.jsx)(Nr, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, B.jsx)(br, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			children: /* @__PURE__ */ (0, B.jsx)(tv, {
				"data-state": Ov(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), wv = "PopoverClose", Tv = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = cv(wv, n);
	return /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		...r,
		ref: t,
		onClick: U(e.onClick, () => i.onOpenChange(!1))
	});
});
Tv.displayName = wv;
var Ev = "PopoverArrow", Dv = e.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = ov(n);
	return /* @__PURE__ */ (0, B.jsx)(nv, {
		...i,
		...r,
		ref: t
	});
});
Dv.displayName = Ev;
function Ov(e) {
	return e ? "open" : "closed";
}
var kv = lv, Av = pv, jv = _v, Mv = yv, Nv = kv, Pv = Av, Fv = e.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, B.jsx)(jv, { children: /* @__PURE__ */ (0, B.jsx)(Mv, {
	ref: i,
	align: t,
	sideOffset: n,
	className: Y("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...r
}) }));
Fv.displayName = Mv.displayName;
//#endregion
//#region lib/components/date-picker/date-picker.component.tsx
function Iv({ value: t, onChange: n, disabled: r, disabledDates: i, mode: a = "single", ...o }) {
	let [s, c] = e.useState(t);
	function l(e) {
		c(e), n?.(e);
	}
	return /* @__PURE__ */ (0, B.jsxs)(Nv, { children: [/* @__PURE__ */ (0, B.jsx)(Pv, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsxs)(Ws, {
			variant: "outline",
			className: Y("w-full justify-between text-left font-normal hover:bg-input bg-input", !s && "text-muted-foreground"),
			disabled: r,
			children: [/* @__PURE__ */ (0, B.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, B.jsx)(g, { className: "mr-2" }), (() => {
					if (!s) return /* @__PURE__ */ (0, B.jsx)("span", { children: "Selecione uma data" });
					if (a === "range") {
						let e = s;
						return e.from ? e.to ? /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
							wl(e.from, "dd/MM/yyyy", { locale: Wl }),
							" -",
							" ",
							wl(e.to, "dd/MM/yyyy", { locale: Wl })
						] }) : wl(e.from, "dd/MM/yyyy", { locale: Wl }) : /* @__PURE__ */ (0, B.jsx)("span", { children: "Selecione uma data" });
					}
					return wl(s, "PPP", { locale: Wl });
				})()]
			}), /* @__PURE__ */ (0, B.jsx)(y, { className: "shrink-0 opacity-50" })]
		})
	}), /* @__PURE__ */ (0, B.jsx)(Fv, {
		className: "w-auto p-0",
		children: /* @__PURE__ */ (0, B.jsx)(yf, {
			mode: a,
			selected: s,
			onSelect: l,
			disabled: i,
			defaultMonth: s?.from,
			...o
		})
	})] });
}
//#endregion
//#region lib/components/date-time-picker/date-time-picker.component.tsx
function Lv(e) {
	return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function Rv(e) {
	return /^(0[1-9]|1[0-2])$/.test(e);
}
function zv(e) {
	return /^[0-5][0-9]$/.test(e);
}
function Bv(e, { max: t, min: n = 0, loop: r = !1 }) {
	let i = parseInt(e, 10);
	return Number.isNaN(i) ? "00" : (r ? (i > t && (i = n), i < n && (i = t)) : (i > t && (i = t), i < n && (i = n)), i.toString().padStart(2, "0"));
}
function Vv(e) {
	return Lv(e) ? e : Bv(e, { max: 23 });
}
function Hv(e) {
	return Rv(e) ? e : Bv(e, {
		min: 1,
		max: 12
	});
}
function Uv(e) {
	return zv(e) ? e : Bv(e, { max: 59 });
}
function Wv(e, { min: t, max: n, step: r }) {
	let i = parseInt(e, 10);
	return Number.isNaN(i) ? "00" : (i += r, Bv(String(i), {
		min: t,
		max: n,
		loop: !0
	}));
}
function Gv(e, t) {
	return Wv(e, {
		min: 0,
		max: 23,
		step: t
	});
}
function Kv(e, t) {
	return Wv(e, {
		min: 1,
		max: 12,
		step: t
	});
}
function qv(e, t) {
	return Wv(e, {
		min: 0,
		max: 59,
		step: t
	});
}
function Jv(e, t) {
	let n = Uv(t);
	return e.setMinutes(parseInt(n, 10)), e;
}
function Yv(e, t) {
	let n = Uv(t);
	return e.setSeconds(parseInt(n, 10)), e;
}
function Xv(e, t) {
	let n = Vv(t);
	return e.setHours(parseInt(n, 10)), e;
}
function Zv(e, t, n) {
	let r = ty(parseInt(Hv(t), 10), n);
	return e.setHours(r), e;
}
function Qv(e, t, n, r) {
	switch (n) {
		case "minutes": return Jv(e, t);
		case "seconds": return Yv(e, t);
		case "hours": return Xv(e, t);
		case "12hours": return r ? Zv(e, t, r) : e;
		default: return e;
	}
}
function $v(e, t) {
	if (!e) return "00";
	switch (t) {
		case "minutes": return Uv(String(e.getMinutes()));
		case "seconds": return Uv(String(e.getSeconds()));
		case "hours": return Vv(String(e.getHours()));
		case "12hours": return Hv(String(ny(e.getHours())));
		default: return "00";
	}
}
function ey(e, t, n) {
	switch (n) {
		case "minutes": return qv(e, t);
		case "seconds": return qv(e, t);
		case "hours": return Gv(e, t);
		case "12hours": return Kv(e, t);
		default: return "00";
	}
}
function ty(e, t) {
	return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function ny(e) {
	return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
var ry = e.forwardRef(({ period: e, setPeriod: t, date: n, onDateChange: r, onLeftFocus: i, onRightFocus: a }, o) => {
	let s = (e) => {
		e.key === "ArrowRight" && a?.(), e.key === "ArrowLeft" && i?.();
	}, c = (i) => {
		if (t?.(i), n) {
			let t = new Date(n), i = ny(n.getHours());
			r?.(Qv(t, i.toString(), "12hours", e === "AM" ? "PM" : "AM"));
		}
	};
	return /* @__PURE__ */ (0, B.jsx)("div", {
		className: "flex h-10 items-center",
		children: /* @__PURE__ */ (0, B.jsxs)(yD, {
			defaultValue: e,
			onValueChange: (e) => c(e),
			children: [/* @__PURE__ */ (0, B.jsx)(SD, {
				ref: o,
				className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
				onKeyDown: s,
				children: /* @__PURE__ */ (0, B.jsx)(xD, {})
			}), /* @__PURE__ */ (0, B.jsxs)(TD, { children: [/* @__PURE__ */ (0, B.jsx)(DD, {
				value: "AM",
				children: "AM"
			}), /* @__PURE__ */ (0, B.jsx)(DD, {
				value: "PM",
				children: "PM"
			})] })]
		})
	});
});
ry.displayName = "TimePeriodSelect";
var iy = e.forwardRef(({ className: t, type: n = "tel", value: r, id: i, name: a, date: o = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), onDateChange: s, onChange: c, onKeyDown: l, picker: u, period: d, onLeftFocus: f, onRightFocus: p, ...m }, h) => {
	let [g, _] = e.useState(!1), [v, y] = e.useState("0");
	e.useEffect(() => {
		if (g) {
			let e = setTimeout(() => {
				_(!1);
			}, 2e3);
			return () => clearTimeout(e);
		}
	}, [g]);
	let b = e.useMemo(() => $v(o, u), [o, u]), x = (e) => u === "12hours" && g && b.slice(1, 2) === "1" && v === "0" ? `0${e}` : g ? b.slice(1, 2) + e : `0${e}`, S = (e) => {
		if (e.key !== "Tab") {
			if (e.preventDefault(), e.key === "ArrowRight" && p?.(), e.key === "ArrowLeft" && f?.(), ["ArrowUp", "ArrowDown"].includes(e.key)) {
				let t = ey(b, e.key === "ArrowUp" ? 1 : -1, u);
				g && _(!1);
				let n = o ? new Date(o) : /* @__PURE__ */ new Date();
				s?.(Qv(n, t, u, d));
			}
			if (e.key >= "0" && e.key <= "9") {
				u === "12hours" && y(e.key);
				let t = x(e.key);
				g && p?.(), _((e) => !e);
				let n = o ? new Date(o) : /* @__PURE__ */ new Date();
				s?.(Qv(n, t, u, d));
			}
		}
	};
	return /* @__PURE__ */ (0, B.jsx)(YS, {
		ref: h,
		id: i || u,
		name: a || u,
		className: Y("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none", t),
		value: r || b,
		onChange: (e) => {
			e.preventDefault(), c?.(e);
		},
		type: n,
		inputMode: "decimal",
		onKeyDown: (e) => {
			l?.(e), S(e);
		},
		...m
	});
});
iy.displayName = "TimePickerInput";
var ay = e.forwardRef(({ date: t, onChange: n, hourCycle: r = 24, granularity: i = "second" }, a) => {
	let s = e.useRef(null), c = e.useRef(null), l = e.useRef(null), u = e.useRef(null), [d, f] = e.useState(t && t.getHours() >= 12 ? "PM" : "AM");
	return o(a, () => ({
		minuteRef: s.current,
		hourRef: c.current,
		secondRef: l.current,
		periodRef: u.current
	}), [
		s,
		c,
		l
	]), /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "flex items-center justify-center gap-2",
		children: [
			/* @__PURE__ */ (0, B.jsx)("label", {
				htmlFor: "datetime-picker-hour-input",
				className: "cursor-pointer",
				children: /* @__PURE__ */ (0, B.jsx)(O, { className: "mr-2 h-4 w-4" })
			}),
			/* @__PURE__ */ (0, B.jsx)(iy, {
				picker: r === 24 ? "hours" : "12hours",
				date: t,
				id: "datetime-picker-hour-input",
				onDateChange: n,
				ref: c,
				period: d,
				onRightFocus: () => s?.current?.focus()
			}),
			(i === "minute" || i === "second") && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [":", /* @__PURE__ */ (0, B.jsx)(iy, {
				picker: "minutes",
				date: t,
				onDateChange: n,
				ref: s,
				onLeftFocus: () => c?.current?.focus(),
				onRightFocus: () => l?.current?.focus()
			})] }),
			i === "second" && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [":", /* @__PURE__ */ (0, B.jsx)(iy, {
				picker: "seconds",
				date: t,
				onDateChange: n,
				ref: l,
				onLeftFocus: () => s?.current?.focus(),
				onRightFocus: () => u?.current?.focus()
			})] }),
			r === 12 && /* @__PURE__ */ (0, B.jsx)("div", {
				className: "grid gap-1 text-center",
				children: /* @__PURE__ */ (0, B.jsx)(ry, {
					period: d,
					setPeriod: f,
					date: t,
					onDateChange: (e) => {
						n?.(e), e && e?.getHours() >= 12 ? f("PM") : f("AM");
					},
					ref: u,
					onLeftFocus: () => l?.current?.focus()
				})
			})
		]
	});
});
ay.displayName = "TimePicker";
var oy = e.forwardRef(({ locale: t = Wl, defaultPopupValue: n = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), value: r, onChange: i, hourCycle: s = 24, yearRange: c = 50, disabled: u = !1, displayFormat: d, granularity: f = "second", placeholder: p = "Selecione...", className: m, disabledDates: g, ..._ }, v) => {
	let [b, x] = e.useState(r ?? n), S = l(null), [C, w] = e.useState(r), T = (e) => {
		if (!e) return;
		if (!n) {
			e.setHours(b?.getHours() ?? 0, b?.getMinutes() ?? 0, b?.getSeconds() ?? 0), i?.(e), x(e);
			return;
		}
		let t = (e.getTime() - n.getTime()) / (1e3 * 60 * 60 * 24), r = dc(n, { days: Math.ceil(t) });
		r.setHours(b?.getHours() ?? 0, b?.getMinutes() ?? 0, b?.getSeconds() ?? 0), i?.(r), x(r);
	};
	a(() => {
		r || w(void 0);
	}, [r]);
	let E = (e) => {
		e && (i?.(e), x(e), w(e));
	};
	o(v, () => ({
		...S.current,
		value: C
	}), [C]);
	let D = {
		hour24: d?.hour24 ?? `PPP HH:mm${!f || f === "second" ? ":ss" : ""}`,
		hour12: d?.hour12 ?? `PP hh:mm${!f || f === "second" ? ":ss" : ""} b`
	}, O = Wl, { options: k, localize: A, formatLong: j } = t;
	return k && A && j && (O = {
		...Wl,
		options: k,
		localize: A,
		formatLong: j
	}), /* @__PURE__ */ (0, B.jsxs)(Nv, { children: [/* @__PURE__ */ (0, B.jsx)(Pv, {
		asChild: !0,
		disabled: u,
		children: /* @__PURE__ */ (0, B.jsxs)(Ws, {
			variant: "outline",
			className: Y("w-full justify-between text-left font-normal hover:bg-input bg-input", !C && "text-muted-foreground", m),
			ref: S,
			children: [/* @__PURE__ */ (0, B.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, B.jsx)(h, { className: "mr-2 h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
					className: "truncate block",
					title: p,
					children: C ? wl(C, s === 24 ? D.hour24 : D.hour12, { locale: O }) : /* @__PURE__ */ (0, B.jsx)("span", { children: p })
				})]
			}), /* @__PURE__ */ (0, B.jsx)(y, { className: "shrink-0 opacity-50" })]
		})
	}), /* @__PURE__ */ (0, B.jsxs)(Fv, {
		className: "w-auto p-0",
		children: [/* @__PURE__ */ (0, B.jsx)(yf, {
			selected: C,
			onSelect: (e) => {
				e && (e.setHours(b?.getHours() ?? 0, b?.getMinutes() ?? 0, b?.getSeconds() ?? 0), E(e));
			},
			onMonthChange: T,
			locale: t,
			disabled: g,
			className: "w-full",
			..._,
			mode: "single"
		}), f !== "day" && /* @__PURE__ */ (0, B.jsx)("div", {
			className: "border-t border-border p-3",
			children: /* @__PURE__ */ (0, B.jsx)(ay, {
				onChange: (e) => {
					i?.(e), w(e), e && x(e);
				},
				date: b,
				hourCycle: s,
				granularity: f
			})
		})]
	})] });
});
oy.displayName = "DateTimePicker";
//#endregion
//#region lib/components/dialog/dialog.component.tsx
var sy = Ja, cy = Ya, ly = Xa, uy = to, dy = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Za, {
	ref: n,
	className: Y("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t
}));
dy.displayName = Za.displayName;
var fy = e.forwardRef(({ className: e, onClose: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)(ly, { children: [/* @__PURE__ */ (0, B.jsx)(dy, { onClick: (e) => e.stopPropagation() }), /* @__PURE__ */ (0, B.jsxs)(Qa, {
	ref: r,
	className: Y("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
	...n,
	children: [/* @__PURE__ */ (0, B.jsx)(to, {
		asChild: !0,
		className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: /* @__PURE__ */ (0, B.jsxs)("button", {
			onClick: t,
			className: "absolute top-4 right-4",
			children: [/* @__PURE__ */ (0, B.jsx)(P, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})
	}), n.children]
})] }));
fy.displayName = Qa.displayName;
var py = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col space-y-1.5 text-center sm:text-left", e),
	...t
});
py.displayName = "DialogHeader";
var my = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
my.displayName = "DialogFooter";
var hy = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($a, {
	ref: n,
	className: Y("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
hy.displayName = $a.displayName;
var gy = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(eo, {
	ref: n,
	className: Y("text-sm text-muted-foreground", e),
	...t
}));
gy.displayName = eo.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-roving-focu_8c031b70c74b193e73544bcf7ed7aa8e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var _y = "rovingFocusGroup.onEntryFocus", vy = {
	bubbles: !1,
	cancelable: !0
}, yy = "RovingFocusGroup", [by, xy, Sy] = ye(yy), [Cy, wy] = V(yy, [Sy]), [Ty, Ey] = Cy(yy), Dy = e.forwardRef((e, t) => /* @__PURE__ */ (0, B.jsx)(by.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, B.jsx)(by.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, B.jsx)(Oy, {
			...e,
			ref: t
		})
	})
}));
Dy.displayName = yy;
var Oy = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: i, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...f } = t, p = e.useRef(null), m = H(n, p), h = Ye(o), [g, _] = xe({
		prop: s,
		defaultProp: c ?? null,
		onChange: l,
		caller: yy
	}), [v, y] = e.useState(!1), b = X(u), x = xy(r), S = e.useRef(!1), [C, w] = e.useState(0);
	return e.useEffect(() => {
		let e = p.current;
		if (e) return e.addEventListener(_y, b), () => e.removeEventListener(_y, b);
	}, [b]), /* @__PURE__ */ (0, B.jsx)(Ty, {
		scope: r,
		orientation: i,
		dir: h,
		loop: a,
		currentTabStopId: g,
		onItemFocus: e.useCallback((e) => _(e), [_]),
		onItemShiftTab: e.useCallback(() => y(!0), []),
		onFocusableItemAdd: e.useCallback(() => w((e) => e + 1), []),
		onFocusableItemRemove: e.useCallback(() => w((e) => e - 1), []),
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			tabIndex: v || C === 0 ? -1 : 0,
			"data-orientation": i,
			...f,
			ref: m,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: U(t.onMouseDown, () => {
				S.current = !0;
			}),
			onFocus: U(t.onFocus, (e) => {
				let t = !S.current;
				if (e.target === e.currentTarget && t && !v) {
					let t = new CustomEvent(_y, vy);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = x().filter((e) => e.focusable);
						Py([
							e.find((e) => e.active),
							e.find((e) => e.id === g),
							...e
						].filter(Boolean).map((e) => e.ref.current), d);
					}
				}
				S.current = !1;
			}),
			onBlur: U(t.onBlur, () => y(!1))
		})
	});
}), ky = "RovingFocusGroupItem", Ay = e.forwardRef((t, n) => {
	let { __scopeRovingFocusGroup: r, focusable: i = !0, active: a = !1, tabStopId: o, children: s, ...c } = t, l = Me(), u = o || l, d = Ey(ky, r), f = d.currentTabStopId === u, p = xy(r), { onFocusableItemAdd: m, onFocusableItemRemove: h, currentTabStopId: g } = d;
	return e.useEffect(() => {
		if (i) return m(), () => h();
	}, [
		i,
		m,
		h
	]), /* @__PURE__ */ (0, B.jsx)(by.ItemSlot, {
		scope: r,
		id: u,
		focusable: i,
		active: a,
		children: /* @__PURE__ */ (0, B.jsx)(G.span, {
			tabIndex: f ? 0 : -1,
			"data-orientation": d.orientation,
			...c,
			ref: n,
			onMouseDown: U(t.onMouseDown, (e) => {
				i ? d.onItemFocus(u) : e.preventDefault();
			}),
			onFocus: U(t.onFocus, () => d.onItemFocus(u)),
			onKeyDown: U(t.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					d.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = Ny(e, d.orientation, d.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = p().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = d.loop ? Fy(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => Py(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: f,
				hasTabStop: g != null
			}) : s
		})
	});
});
Ay.displayName = ky;
var jy = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function My(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function Ny(e, t, n) {
	let r = My(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return jy[r];
}
function Py(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Fy(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Iy = Dy, Ly = Ay, Ry = ["Enter", " "], zy = [
	"ArrowDown",
	"PageUp",
	"Home"
], By = [
	"ArrowUp",
	"PageDown",
	"End"
], Vy = [...zy, ...By], Hy = {
	ltr: [...Ry, "ArrowRight"],
	rtl: [...Ry, "ArrowLeft"]
}, Uy = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, Wy = "Menu", [Gy, Ky, qy] = ye(Wy), [Jy, Yy] = V(Wy, [
	qy,
	L_,
	wy
]), Xy = L_(), Zy = wy(), [Qy, $y] = Jy(Wy), [eb, tb] = Jy(Wy), nb = (t) => {
	let { __scopeMenu: n, open: r = !1, children: i, dir: a, onOpenChange: o, modal: s = !0 } = t, c = Xy(n), [l, u] = e.useState(null), d = e.useRef(!1), f = X(o), p = Ye(a);
	return e.useEffect(() => {
		let e = () => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ (0, B.jsx)($_, {
		...c,
		children: /* @__PURE__ */ (0, B.jsx)(Qy, {
			scope: n,
			open: r,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ (0, B.jsx)(eb, {
				scope: n,
				onClose: e.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: s,
				children: i
			})
		})
	});
};
nb.displayName = Wy;
var rb = "MenuAnchor", ib = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Xy(n);
	return /* @__PURE__ */ (0, B.jsx)(ev, {
		...i,
		...r,
		ref: t
	});
});
ib.displayName = rb;
var ab = "MenuPortal", [ob, sb] = Jy(ab, { forceMount: void 0 }), cb = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = $y(ab, t);
	return /* @__PURE__ */ (0, B.jsx)(ob, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, B.jsx)(Kr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
cb.displayName = ab;
var lb = "MenuContent", [ub, db] = Jy(lb), fb = e.forwardRef((e, t) => {
	let n = sb(lb, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = $y(lb, e.__scopeMenu), o = tb(lb, e.__scopeMenu);
	return /* @__PURE__ */ (0, B.jsx)(Gy.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, B.jsx)(Gy.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, B.jsx)(pb, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, B.jsx)(mb, {
					...i,
					ref: t
				})
			})
		})
	});
}), pb = e.forwardRef((t, n) => {
	let r = $y(lb, t.__scopeMenu), i = e.useRef(null), a = H(n, i);
	return e.useEffect(() => {
		let e = i.current;
		if (e) return pa(e);
	}, []), /* @__PURE__ */ (0, B.jsx)(gb, {
		...t,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: U(t.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), mb = e.forwardRef((e, t) => {
	let n = $y(lb, e.__scopeMenu);
	return /* @__PURE__ */ (0, B.jsx)(gb, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), hb = /* @__PURE__ */ fe("MenuContent.ScrollLock"), gb = e.forwardRef((t, n) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: u, onPointerDownOutside: d, onFocusOutside: f, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...g } = t, _ = $y(lb, r), v = tb(lb, r), y = Xy(r), b = Zy(r), x = Ky(r), [S, C] = e.useState(null), w = e.useRef(null), T = H(n, w, _.onContentChange), E = e.useRef(0), D = e.useRef(""), O = e.useRef(0), k = e.useRef(null), A = e.useRef("right"), j = e.useRef(0), M = h ? ia : e.Fragment, N = h ? {
		as: hb,
		allowPinchZoom: !0
	} : void 0, P = (e) => {
		let t = D.current + e, n = x().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = ex(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			D.current = t, window.clearTimeout(E.current), t !== "" && (E.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	e.useEffect(() => () => window.clearTimeout(E.current), []), Jr();
	let F = e.useCallback((e) => A.current === k.current?.side && nx(e, k.current?.area), []);
	return /* @__PURE__ */ (0, B.jsx)(ub, {
		scope: r,
		searchRef: D,
		onItemEnter: e.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		onItemLeave: e.useCallback((e) => {
			F(e) || (w.current?.focus(), C(null));
		}, [F]),
		onTriggerLeave: e.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		pointerGraceTimerRef: O,
		onPointerGraceIntentChange: e.useCallback((e) => {
			k.current = e;
		}, []),
		children: /* @__PURE__ */ (0, B.jsx)(M, {
			...N,
			children: /* @__PURE__ */ (0, B.jsx)(Nr, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: U(o, (e) => {
					e.preventDefault(), w.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: s,
				children: /* @__PURE__ */ (0, B.jsx)(br, {
					asChild: !0,
					disableOutsidePointerEvents: c,
					onEscapeKeyDown: u,
					onPointerDownOutside: d,
					onFocusOutside: f,
					onInteractOutside: p,
					onDismiss: m,
					children: /* @__PURE__ */ (0, B.jsx)(Iy, {
						asChild: !0,
						...b,
						dir: v.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: S,
						onCurrentTabStopIdChange: C,
						onEntryFocus: U(l, (e) => {
							v.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, B.jsx)(tv, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Yb(_.open),
							"data-radix-menu-content": "",
							dir: v.dir,
							...y,
							...g,
							ref: T,
							style: {
								outline: "none",
								...g.style
							},
							onKeyDown: U(g.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && P(e.key));
								let i = w.current;
								if (e.target !== i || !Vy.includes(e.key)) return;
								e.preventDefault();
								let a = x().filter((e) => !e.disabled).map((e) => e.ref.current);
								By.includes(e.key) && a.reverse(), Qb(a);
							}),
							onBlur: U(t.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(E.current), D.current = "");
							}),
							onPointerMove: U(t.onPointerMove, rx((e) => {
								let t = e.target, n = j.current !== e.clientX;
								e.currentTarget.contains(t) && n && (A.current = e.clientX > j.current ? "right" : "left", j.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
fb.displayName = lb;
var _b = "MenuGroup", vb = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		role: "group",
		...r,
		ref: t
	});
});
vb.displayName = _b;
var yb = "MenuLabel", bb = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		...r,
		ref: t
	});
});
bb.displayName = yb;
var xb = "MenuItem", Sb = "menu.itemSelect", Cb = e.forwardRef((t, n) => {
	let { disabled: r = !1, onSelect: i, ...a } = t, o = e.useRef(null), s = tb(xb, t.__scopeMenu), c = db(xb, t.__scopeMenu), l = H(n, o), u = e.useRef(!1), d = () => {
		let e = o.current;
		if (!r && e) {
			let t = new CustomEvent(Sb, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(Sb, (e) => i?.(e), { once: !0 }), we(e, t), t.defaultPrevented ? u.current = !1 : s.onClose();
		}
	};
	return /* @__PURE__ */ (0, B.jsx)(wb, {
		...a,
		ref: l,
		disabled: r,
		onClick: U(t.onClick, d),
		onPointerDown: (e) => {
			t.onPointerDown?.(e), u.current = !0;
		},
		onPointerUp: U(t.onPointerUp, (e) => {
			u.current || e.currentTarget?.click();
		}),
		onKeyDown: U(t.onKeyDown, (e) => {
			let t = c.searchRef.current !== "";
			r || t && e.key === " " || Ry.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
Cb.displayName = xb;
var wb = e.forwardRef((t, n) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: a, ...o } = t, s = db(xb, r), c = Zy(r), l = e.useRef(null), u = H(n, l), [d, f] = e.useState(!1), [p, m] = e.useState("");
	return e.useEffect(() => {
		let e = l.current;
		e && m((e.textContent ?? "").trim());
	}, [o.children]), /* @__PURE__ */ (0, B.jsx)(Gy.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: a ?? p,
		children: /* @__PURE__ */ (0, B.jsx)(Ly, {
			asChild: !0,
			...c,
			focusable: !i,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				role: "menuitem",
				"data-highlighted": d ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...o,
				ref: u,
				onPointerMove: U(t.onPointerMove, rx((e) => {
					i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: U(t.onPointerLeave, rx((e) => s.onItemLeave(e))),
				onFocus: U(t.onFocus, () => f(!0)),
				onBlur: U(t.onBlur, () => f(!1))
			})
		})
	});
}), Tb = "MenuCheckboxItem", Eb = e.forwardRef((e, t) => {
	let { checked: n = !1, onCheckedChange: r, ...i } = e;
	return /* @__PURE__ */ (0, B.jsx)(Pb, {
		scope: e.__scopeMenu,
		checked: n,
		children: /* @__PURE__ */ (0, B.jsx)(Cb, {
			role: "menuitemcheckbox",
			"aria-checked": Xb(n) ? "mixed" : n,
			...i,
			ref: t,
			"data-state": Zb(n),
			onSelect: U(i.onSelect, () => r?.(Xb(n) ? !0 : !n), { checkForDefaultPrevented: !1 })
		})
	});
});
Eb.displayName = Tb;
var Db = "MenuRadioGroup", [Ob, kb] = Jy(Db, {
	value: void 0,
	onValueChange: () => {}
}), Ab = e.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = X(r);
	return /* @__PURE__ */ (0, B.jsx)(Ob, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, B.jsx)(vb, {
			...i,
			ref: t
		})
	});
});
Ab.displayName = Db;
var jb = "MenuRadioItem", Mb = e.forwardRef((e, t) => {
	let { value: n, ...r } = e, i = kb(jb, e.__scopeMenu), a = n === i.value;
	return /* @__PURE__ */ (0, B.jsx)(Pb, {
		scope: e.__scopeMenu,
		checked: a,
		children: /* @__PURE__ */ (0, B.jsx)(Cb, {
			role: "menuitemradio",
			"aria-checked": a,
			...r,
			ref: t,
			"data-state": Zb(a),
			onSelect: U(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 })
		})
	});
});
Mb.displayName = jb;
var Nb = "MenuItemIndicator", [Pb, Fb] = Jy(Nb, { checked: !1 }), Ib = e.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, a = Fb(Nb, n);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || Xb(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, B.jsx)(G.span, {
			...i,
			ref: t,
			"data-state": Zb(a.checked)
		})
	});
});
Ib.displayName = Nb;
var Lb = "MenuSeparator", Rb = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Rb.displayName = Lb;
var zb = "MenuArrow", Bb = e.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Xy(n);
	return /* @__PURE__ */ (0, B.jsx)(nv, {
		...i,
		...r,
		ref: t
	});
});
Bb.displayName = zb;
var Vb = "MenuSub", [Hb, Ub] = Jy(Vb), Wb = (t) => {
	let { __scopeMenu: n, children: r, open: i = !1, onOpenChange: a } = t, o = $y(Vb, n), s = Xy(n), [c, l] = e.useState(null), [u, d] = e.useState(null), f = X(a);
	return e.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ (0, B.jsx)($_, {
		...s,
		children: /* @__PURE__ */ (0, B.jsx)(Qy, {
			scope: n,
			open: i,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ (0, B.jsx)(Hb, {
				scope: n,
				contentId: Me(),
				triggerId: Me(),
				trigger: c,
				onTriggerChange: l,
				children: r
			})
		})
	});
};
Wb.displayName = Vb;
var Gb = "MenuSubTrigger", Kb = e.forwardRef((t, n) => {
	let r = $y(Gb, t.__scopeMenu), i = tb(Gb, t.__scopeMenu), a = Ub(Gb, t.__scopeMenu), o = db(Gb, t.__scopeMenu), s = e.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: t.__scopeMenu }, d = e.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return e.useEffect(() => d, [d]), e.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ (0, B.jsx)(ib, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ (0, B.jsx)(wb, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": Yb(r.open),
			...t,
			ref: de(n, a.onTriggerChange),
			onClick: (e) => {
				t.onClick?.(e), !(t.disabled || e.defaultPrevented) && (e.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: U(t.onPointerMove, rx((e) => {
				o.onItemEnter(e), !e.defaultPrevented && !t.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: U(t.onPointerLeave, rx((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: U(t.onKeyDown, (e) => {
				let n = o.searchRef.current !== "";
				t.disabled || n && e.key === " " || Hy[i.dir].includes(e.key) && (r.onOpenChange(!0), r.content?.focus(), e.preventDefault());
			})
		})
	});
});
Kb.displayName = Gb;
var qb = "MenuSubContent", Jb = e.forwardRef((t, n) => {
	let r = sb(lb, t.__scopeMenu), { forceMount: i = r.forceMount, ...a } = t, o = $y(lb, t.__scopeMenu), s = tb(lb, t.__scopeMenu), c = Ub(qb, t.__scopeMenu), l = e.useRef(null), u = H(n, l);
	return /* @__PURE__ */ (0, B.jsx)(Gy.Provider, {
		scope: t.__scopeMenu,
		children: /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: i || o.open,
			children: /* @__PURE__ */ (0, B.jsx)(Gy.Slot, {
				scope: t.__scopeMenu,
				children: /* @__PURE__ */ (0, B.jsx)(gb, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: U(t.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: U(t.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: U(t.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Uy[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
Jb.displayName = qb;
function Yb(e) {
	return e ? "open" : "closed";
}
function Xb(e) {
	return e === "indeterminate";
}
function Zb(e) {
	return Xb(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Qb(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function $b(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function ex(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = $b(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function tx(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function nx(e, t) {
	return t ? tx({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function rx(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ix = nb, ax = ib, ox = cb, sx = fb, cx = vb, lx = bb, ux = Cb, dx = Eb, fx = Ab, px = Mb, mx = Ib, hx = Rb, gx = Bb, _x = Wb, vx = Kb, yx = Jb, bx = "DropdownMenu", [xx, Sx] = V(bx, [Yy]), Cx = Yy(), [wx, Tx] = xx(bx), Ex = (t) => {
	let { __scopeDropdownMenu: n, children: r, dir: i, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = t, l = Cx(n), u = e.useRef(null), [d, f] = xe({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: bx
	});
	return /* @__PURE__ */ (0, B.jsx)(wx, {
		scope: n,
		triggerId: Me(),
		triggerRef: u,
		contentId: Me(),
		open: d,
		onOpenChange: f,
		onOpenToggle: e.useCallback(() => f((e) => !e), [f]),
		modal: c,
		children: /* @__PURE__ */ (0, B.jsx)(ix, {
			...l,
			open: d,
			onOpenChange: f,
			dir: i,
			modal: c,
			children: r
		})
	});
};
Ex.displayName = bx;
var Dx = "DropdownMenuTrigger", Ox = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, a = Tx(Dx, n), o = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(ax, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
			type: "button",
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": a.open,
			"aria-controls": a.open ? a.contentId : void 0,
			"data-state": a.open ? "open" : "closed",
			"data-disabled": r ? "" : void 0,
			disabled: r,
			...i,
			ref: de(t, a.triggerRef),
			onPointerDown: U(e.onPointerDown, (e) => {
				!r && e.button === 0 && e.ctrlKey === !1 && (a.onOpenToggle(), a.open || e.preventDefault());
			}),
			onKeyDown: U(e.onKeyDown, (e) => {
				r || (["Enter", " "].includes(e.key) && a.onOpenToggle(), e.key === "ArrowDown" && a.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
Ox.displayName = Dx;
var kx = "DropdownMenuPortal", Ax = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = Cx(t);
	return /* @__PURE__ */ (0, B.jsx)(ox, {
		...r,
		...n
	});
};
Ax.displayName = kx;
var jx = "DropdownMenuContent", Mx = e.forwardRef((t, n) => {
	let { __scopeDropdownMenu: r, ...i } = t, a = Tx(jx, r), o = Cx(r), s = e.useRef(!1);
	return /* @__PURE__ */ (0, B.jsx)(sx, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: n,
		onCloseAutoFocus: U(t.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: U(t.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...t.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Mx.displayName = jx;
var Nx = "DropdownMenuGroup", Px = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(cx, {
		...i,
		...r,
		ref: t
	});
});
Px.displayName = Nx;
var Fx = "DropdownMenuLabel", Ix = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(lx, {
		...i,
		...r,
		ref: t
	});
});
Ix.displayName = Fx;
var Lx = "DropdownMenuItem", Rx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(ux, {
		...i,
		...r,
		ref: t
	});
});
Rx.displayName = Lx;
var zx = "DropdownMenuCheckboxItem", Bx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(dx, {
		...i,
		...r,
		ref: t
	});
});
Bx.displayName = zx;
var Vx = "DropdownMenuRadioGroup", Hx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(fx, {
		...i,
		...r,
		ref: t
	});
});
Hx.displayName = Vx;
var Ux = "DropdownMenuRadioItem", Wx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(px, {
		...i,
		...r,
		ref: t
	});
});
Wx.displayName = Ux;
var Gx = "DropdownMenuItemIndicator", Kx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(mx, {
		...i,
		...r,
		ref: t
	});
});
Kx.displayName = Gx;
var qx = "DropdownMenuSeparator", Jx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(hx, {
		...i,
		...r,
		ref: t
	});
});
Jx.displayName = qx;
var Yx = "DropdownMenuArrow", Xx = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(gx, {
		...i,
		...r,
		ref: t
	});
});
Xx.displayName = Yx;
var Zx = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = Cx(t), [s, c] = xe({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ (0, B.jsx)(_x, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, Qx = "DropdownMenuSubTrigger", $x = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(vx, {
		...i,
		...r,
		ref: t
	});
});
$x.displayName = Qx;
var eS = "DropdownMenuSubContent", tS = e.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = Cx(n);
	return /* @__PURE__ */ (0, B.jsx)(yx, {
		...i,
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
	});
});
tS.displayName = eS;
var nS = Ex, rS = Ox, iS = Ax, aS = Mx, oS = Px, sS = Ix, cS = Rx, lS = Bx, uS = Hx, dS = Wx, fS = Kx, pS = Jx, mS = Zx, hS = $x, gS = tS, _S = nS, vS = rS, yS = oS, bS = iS, xS = mS, SS = uS, CS = e.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ (0, B.jsxs)(hS, {
	ref: i,
	className: Y("flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ (0, B.jsx)(C, { className: "ml-auto h-4 w-4" })]
}));
CS.displayName = hS.displayName;
var wS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(gS, {
	ref: n,
	className: Y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...t
}));
wS.displayName = gS.displayName;
var TS = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(iS, { children: /* @__PURE__ */ (0, B.jsx)(aS, {
	ref: r,
	sideOffset: t,
	className: Y("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
TS.displayName = aS.displayName;
var ES = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(cS, {
	ref: r,
	className: Y("relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
	...n
}));
ES.displayName = cS.displayName;
var DS = e.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ (0, B.jsxs)(lS, {
	ref: i,
	className: Y("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ (0, B.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, B.jsx)(fS, { children: /* @__PURE__ */ (0, B.jsx)(_, { className: "h-4 w-4" }) })
	}), t]
}));
DS.displayName = lS.displayName;
var OS = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)(dS, {
	ref: r,
	className: Y("relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, B.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, B.jsx)(fS, { children: /* @__PURE__ */ (0, B.jsx)(D, { className: "h-2 w-2 fill-current" }) })
	}), t]
}));
OS.displayName = dS.displayName;
var kS = e.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(sS, {
	ref: r,
	className: Y("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
	...n
}));
kS.displayName = sS.displayName;
var AS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(pS, {
	ref: n,
	className: Y("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
AS.displayName = pS.displayName;
var jS = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("span", {
	className: Y("ml-auto text-xs tracking-widest opacity-60", e),
	...t
});
jS.displayName = "DropdownMenuShortcut";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-label@2.1.8_7a02415076c489810640db721696f007/node_modules/@radix-ui/react-label/dist/index.mjs
var MS = "Label", NS = e.forwardRef((e, t) => /* @__PURE__ */ (0, B.jsx)(us.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
NS.displayName = MS;
var PS = NS, FS = cr("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), IS = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(PS, {
	ref: n,
	className: Y(FS(), e),
	...t
}));
IS.displayName = PS.displayName;
//#endregion
//#region lib/components/form/form.component.tsx
var LS = te, RS = e.createContext({}), zS = ({ ...e }) => /* @__PURE__ */ (0, B.jsx)(RS.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ (0, B.jsx)(ee, { ...e })
}), BS = () => {
	let t = e.useContext(RS), n = e.useContext(VS), { getFieldState: r, formState: i } = ne(), a = r(t.name, i);
	if (!t) throw Error("useFormField should be used within <FormField>");
	let { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, VS = e.createContext({}), HS = e.forwardRef(({ className: t, ...n }, r) => {
	let i = e.useId();
	return /* @__PURE__ */ (0, B.jsx)(VS.Provider, {
		value: { id: i },
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			ref: r,
			className: Y("space-y-1 relative", t),
			...n
		})
	});
});
HS.displayName = "FormItem";
var US = e.forwardRef(({ className: e, ...t }, n) => {
	let { error: r, formItemId: i } = BS();
	return /* @__PURE__ */ (0, B.jsx)(IS, {
		ref: n,
		className: Y(r && "text-destructive dark:text-red-400", e),
		htmlFor: i,
		...t
	});
});
US.displayName = "FormLabel";
var WS = e.forwardRef(({ ...e }, t) => {
	let { error: n, formItemId: r, formDescriptionId: i, formMessageId: a } = BS();
	return /* @__PURE__ */ (0, B.jsx)(is, {
		ref: t,
		id: r,
		"aria-describedby": n ? `${i} ${a}` : `${i}`,
		"aria-invalid": !!n,
		...e
	});
});
WS.displayName = "FormControl";
var GS = e.forwardRef(({ className: e, ...t }, n) => {
	let { formDescriptionId: r } = BS();
	return /* @__PURE__ */ (0, B.jsx)("p", {
		ref: n,
		id: r,
		className: Y("text-sm text-muted-foreground", e),
		...t
	});
});
GS.displayName = "FormDescription";
var KS = e.forwardRef(({ className: e, children: t, ...n }, r) => {
	let { error: i, formMessageId: a } = BS(), o = i ? String(i?.message) : t;
	return o ? /* @__PURE__ */ (0, B.jsx)("p", {
		ref: r,
		id: a,
		className: Y("text-[0.8rem] font-normal text-destructive dark:text-red-400", e),
		...n,
		children: o
	}) : null;
});
KS.displayName = "FormMessage";
//#endregion
//#region lib/components/heading/heading.component.tsx
var qS = cr("font-bold tracking-tight", {
	variants: { variant: {
		h1: "mb-4 text-2xl sm:text-3xl lg:text-4xl",
		h2: "mb-4 text-xl sm:text-2xl lg:text-3xl",
		h3: "mb-3 text-lg sm:text-xl lg:text-2xl",
		h4: "mb-2 text-xl font-semibold",
		h5: "mb-2 uppercase font-bold",
		h6: "mb-2 text-base font-bold"
	} },
	defaultVariants: { variant: "h1" }
}), JS = t.forwardRef(({ className: e, variant: t, children: n, ...r }, i) => /* @__PURE__ */ (0, B.jsx)(t || "h1", {
	className: Y(qS({ variant: t }), e),
	ref: i,
	...r,
	children: n
})), YS = t.forwardRef(({ className: e, type: t, ...n }, r) => t === "textarea" ? /* @__PURE__ */ (0, B.jsx)("textarea", {
	rows: 1,
	ref: r,
	className: Y("flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	...n
}) : /* @__PURE__ */ (0, B.jsx)("input", {
	ref: r,
	type: t,
	className: Y("flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer", e),
	...n
})), XS = ({ name: e, label: t, placeholder: n, mask: r, ...i }) => /* @__PURE__ */ (0, B.jsx)(zS, {
	control: ne().control,
	name: e,
	render: ({ field: e }) => /* @__PURE__ */ (0, B.jsxs)(HS, {
		className: "flex-1",
		children: [
			!!t && /* @__PURE__ */ (0, B.jsx)(US, { children: t }),
			/* @__PURE__ */ (0, B.jsx)(WS, { children: r ? /* @__PURE__ */ (0, B.jsx)(_w, {
				mask: r,
				placeholder: n,
				...i,
				...e
			}) : /* @__PURE__ */ (0, B.jsx)(YS, {
				placeholder: n,
				...i,
				...e
			}) }),
			/* @__PURE__ */ (0, B.jsx)(KS, {})
		]
	})
}), ZS = Object.freeze({
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
}), QS = "VisuallyHidden", $S = e.forwardRef((e, t) => /* @__PURE__ */ (0, B.jsx)(G.span, {
	...e,
	ref: t,
	style: {
		...ZS,
		...e.style
	}
}));
$S.displayName = QS;
var eC = $S, tC = "NavigationMenu", [nC, rC, iC] = ye(tC), [aC, oC, sC] = ye(tC), [cC, lC] = V(tC, [iC, sC]), [uC, dC] = cC(tC), [fC, pC] = cC(tC), mC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, value: i, onValueChange: a, defaultValue: o, delayDuration: s = 200, skipDelayDuration: c = 300, orientation: l = "horizontal", dir: u, ...d } = t, [f, p] = e.useState(null), m = H(n, (e) => p(e)), h = Ye(u), g = e.useRef(0), _ = e.useRef(0), v = e.useRef(0), [y, b] = e.useState(!0), [x, S] = xe({
		prop: i,
		onChange: (e) => {
			let t = e !== "", n = c > 0;
			t ? (window.clearTimeout(v.current), n && b(!1)) : (window.clearTimeout(v.current), v.current = window.setTimeout(() => b(!0), c)), a?.(e);
		},
		defaultProp: o ?? "",
		caller: tC
	}), C = e.useCallback(() => {
		window.clearTimeout(_.current), _.current = window.setTimeout(() => S(""), 150);
	}, [S]), w = e.useCallback((e) => {
		window.clearTimeout(_.current), S(e);
	}, [S]), T = e.useCallback((e) => {
		x === e ? window.clearTimeout(_.current) : g.current = window.setTimeout(() => {
			window.clearTimeout(_.current), S(e);
		}, s);
	}, [
		x,
		S,
		s
	]);
	return e.useEffect(() => () => {
		window.clearTimeout(g.current), window.clearTimeout(_.current), window.clearTimeout(v.current);
	}, []), /* @__PURE__ */ (0, B.jsx)(_C, {
		scope: r,
		isRootMenu: !0,
		value: x,
		dir: h,
		orientation: l,
		rootNavigationMenu: f,
		onTriggerEnter: (e) => {
			window.clearTimeout(g.current), y ? T(e) : w(e);
		},
		onTriggerLeave: () => {
			window.clearTimeout(g.current), C();
		},
		onContentEnter: () => window.clearTimeout(_.current),
		onContentLeave: C,
		onItemSelect: (e) => {
			S((t) => t === e ? "" : e);
		},
		onItemDismiss: () => S(""),
		children: /* @__PURE__ */ (0, B.jsx)(G.nav, {
			"aria-label": "Main",
			"data-orientation": l,
			dir: h,
			...d,
			ref: m
		})
	});
});
mC.displayName = tC;
var hC = "NavigationMenuSub", gC = e.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = dC(hC, n), [l, u] = xe({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: hC
	});
	return /* @__PURE__ */ (0, B.jsx)(_C, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
gC.displayName = hC;
var _C = (t) => {
	let { scope: n, isRootMenu: r, rootNavigationMenu: i, dir: a, orientation: o, children: s, value: c, onItemSelect: l, onItemDismiss: u, onTriggerEnter: d, onTriggerLeave: f, onContentEnter: p, onContentLeave: m } = t, [h, g] = e.useState(null), [_, v] = e.useState(/* @__PURE__ */ new Map()), [y, b] = e.useState(null);
	return /* @__PURE__ */ (0, B.jsx)(uC, {
		scope: n,
		isRootMenu: r,
		rootNavigationMenu: i,
		value: c,
		previousValue: Yp(c),
		baseId: Me(),
		dir: a,
		orientation: o,
		viewport: h,
		onViewportChange: g,
		indicatorTrack: y,
		onIndicatorTrackChange: b,
		onTriggerEnter: X(d),
		onTriggerLeave: X(f),
		onContentEnter: X(p),
		onContentLeave: X(m),
		onItemSelect: X(l),
		onItemDismiss: X(u),
		onViewportContentChange: e.useCallback((e, t) => {
			v((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: e.useCallback((e) => {
			v((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ (0, B.jsx)(nC.Provider, {
			scope: n,
			children: /* @__PURE__ */ (0, B.jsx)(fC, {
				scope: n,
				items: _,
				children: s
			})
		})
	});
}, vC = "NavigationMenuList", yC = e.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = dC(vC, n), a = /* @__PURE__ */ (0, B.jsx)(G.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ (0, B.jsx)(nC.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ (0, B.jsx)(VC, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
yC.displayName = vC;
var bC = "NavigationMenuItem", [xC, SC] = cC(bC), CC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, value: i, ...a } = t, o = Me(), s = i || o || "LEGACY_REACT_AUTO_VALUE", c = e.useRef(null), l = e.useRef(null), u = e.useRef(null), d = e.useRef(() => {}), f = e.useRef(!1), p = e.useCallback((e = "start") => {
		if (c.current) {
			d.current();
			let t = GC(c.current);
			t.length && KC(e === "start" ? t : t.reverse());
		}
	}, []), m = e.useCallback(() => {
		if (c.current) {
			let e = GC(c.current);
			e.length && (d.current = qC(e));
		}
	}, []);
	return /* @__PURE__ */ (0, B.jsx)(xC, {
		scope: r,
		value: s,
		triggerRef: l,
		contentRef: c,
		focusProxyRef: u,
		wasEscapeCloseRef: f,
		onEntryKeyDown: p,
		onFocusProxyEnter: p,
		onRootContentClose: m,
		onContentFocusOutside: m,
		children: /* @__PURE__ */ (0, B.jsx)(G.li, {
			...a,
			ref: n
		})
	});
});
CC.displayName = bC;
var wC = "NavigationMenuTrigger", TC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, disabled: i, ...a } = t, o = dC(wC, t.__scopeNavigationMenu), s = SC(wC, t.__scopeNavigationMenu), c = e.useRef(null), l = H(c, s.triggerRef, n), u = XC(o.baseId, s.value), d = ZC(o.baseId, s.value), f = e.useRef(!1), p = e.useRef(!1), m = s.value === o.value;
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(nC.ItemSlot, {
		scope: r,
		value: s.value,
		children: /* @__PURE__ */ (0, B.jsx)(WC, {
			asChild: !0,
			children: /* @__PURE__ */ (0, B.jsx)(G.button, {
				id: u,
				disabled: i,
				"data-disabled": i ? "" : void 0,
				"data-state": YC(m),
				"aria-expanded": m,
				"aria-controls": d,
				...a,
				ref: l,
				onPointerEnter: U(t.onPointerEnter, () => {
					p.current = !1, s.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: U(t.onPointerMove, QC(() => {
					i || p.current || s.wasEscapeCloseRef.current || f.current || (o.onTriggerEnter(s.value), f.current = !0);
				})),
				onPointerLeave: U(t.onPointerLeave, QC(() => {
					i || (o.onTriggerLeave(), f.current = !1);
				})),
				onClick: U(t.onClick, () => {
					o.onItemSelect(s.value), p.current = m;
				}),
				onKeyDown: U(t.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: o.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[o.orientation];
					m && e.key === t && (s.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), m && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(eC, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: s.focusProxyRef,
		onFocus: (e) => {
			let t = s.contentRef.current, n = e.relatedTarget, r = n === c.current, i = t?.contains(n);
			(r || !i) && s.onFocusProxyEnter(r ? "start" : "end");
		}
	}), o.viewport && /* @__PURE__ */ (0, B.jsx)("span", { "aria-owns": d })] })] });
});
TC.displayName = wC;
var EC = "NavigationMenuLink", DC = "navigationMenu.linkSelect", OC = e.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ (0, B.jsx)(WC, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)(G.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: U(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(DC, {
					bubbles: !0,
					cancelable: !0
				});
				t.addEventListener(DC, (e) => i?.(e), { once: !0 }), we(t, n), !n.defaultPrevented && !e.metaKey && we(t, new CustomEvent(FC, {
					bubbles: !0,
					cancelable: !0
				}));
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
OC.displayName = EC;
var kC = "NavigationMenuIndicator", AC = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = dC(kC, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? f.createPortal(/* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || a,
		children: /* @__PURE__ */ (0, B.jsx)(jC, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
AC.displayName = kC;
var jC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, ...i } = t, a = dC(kC, r), o = rC(r), [s, c] = e.useState(null), [l, u] = e.useState(null), d = a.orientation === "horizontal", f = !!a.value;
	e.useEffect(() => {
		let e = o().find((e) => e.value === a.value)?.ref.current;
		e && c(e);
	}, [o, a.value]);
	let p = () => {
		s && u({
			size: d ? s.offsetWidth : s.offsetHeight,
			offset: d ? s.offsetLeft : s.offsetTop
		});
	};
	return JC(s, p), JC(a.indicatorTrack, p), l ? /* @__PURE__ */ (0, B.jsx)(G.div, {
		"aria-hidden": !0,
		"data-state": f ? "visible" : "hidden",
		"data-orientation": a.orientation,
		...i,
		ref: n,
		style: {
			position: "absolute",
			...d ? {
				left: 0,
				width: l.size + "px",
				transform: `translateX(${l.offset}px)`
			} : {
				top: 0,
				height: l.size + "px",
				transform: `translateY(${l.offset}px)`
			},
			...i.style
		}
	}) : null;
}), MC = "NavigationMenuContent", NC = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = dC(MC, e.__scopeNavigationMenu), a = SC(MC, e.__scopeNavigationMenu), o = H(a.contentRef, t), s = a.value === i.value, c = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ (0, B.jsx)(PC, {
		forceMount: n,
		...c,
		ref: o
	}) : /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || s,
		children: /* @__PURE__ */ (0, B.jsx)(IC, {
			"data-state": YC(s),
			...c,
			ref: o,
			onPointerEnter: U(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: U(e.onPointerLeave, QC(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...c.style
			}
		})
	});
});
NC.displayName = MC;
var PC = e.forwardRef((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = dC(MC, e.__scopeNavigationMenu);
	return W(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), W(() => () => r(e.value), [e.value, r]), null;
}), FC = "navigationMenu.rootContentDismiss", IC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, value: i, triggerRef: a, focusProxyRef: o, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: l, ...u } = t, d = dC(MC, r), f = e.useRef(null), p = H(f, n), m = XC(d.baseId, i), h = ZC(d.baseId, i), g = rC(r), _ = e.useRef(null), { onItemDismiss: v } = d;
	return e.useEffect(() => {
		let e = f.current;
		if (d.isRootMenu && e) {
			let t = () => {
				v(), c(), e.contains(document.activeElement) && a.current?.focus();
			};
			return e.addEventListener(FC, t), () => e.removeEventListener(FC, t);
		}
	}, [
		d.isRootMenu,
		t.value,
		a,
		v,
		c
	]), /* @__PURE__ */ (0, B.jsx)(VC, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)(br, {
			id: h,
			"aria-labelledby": m,
			"data-motion": e.useMemo(() => {
				let e = g().map((e) => e.value);
				d.dir === "rtl" && e.reverse();
				let t = e.indexOf(d.value), n = e.indexOf(d.previousValue), r = i === d.value, a = n === e.indexOf(i);
				if (!r && !a) return _.current;
				let o = (() => {
					if (t !== n) {
						if (r && n !== -1) return t > n ? "from-end" : "from-start";
						if (a && t !== -1) return t > n ? "to-start" : "to-end";
					}
					return null;
				})();
				return _.current = o, o;
			}, [
				d.previousValue,
				d.value,
				d.dir,
				g,
				i
			]),
			"data-orientation": d.orientation,
			...u,
			ref: p,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(FC, {
					bubbles: !0,
					cancelable: !0
				});
				f.current?.dispatchEvent(e);
			},
			onFocusOutside: U(t.onFocusOutside, (e) => {
				l();
				let t = e.target;
				d.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: U(t.onPointerDownOutside, (e) => {
				let t = e.target, n = g().some((e) => e.ref.current?.contains(t)), r = d.isRootMenu && d.viewport?.contains(t);
				(n || r || !d.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: U(t.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = GC(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					KC(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : o.current?.focus();
				}
			}),
			onEscapeKeyDown: U(t.onEscapeKeyDown, (e) => {
				s.current = !0;
			})
		})
	});
}), LC = "NavigationMenuViewport", RC = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = !!dC(LC, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || i,
		children: /* @__PURE__ */ (0, B.jsx)(zC, {
			...r,
			ref: t
		})
	});
});
RC.displayName = LC;
var zC = e.forwardRef((t, n) => {
	let { __scopeNavigationMenu: r, children: i, ...a } = t, o = dC(LC, r), s = H(n, o.onViewportChange), c = pC(MC, t.__scopeNavigationMenu), [l, u] = e.useState(null), [d, f] = e.useState(null), p = l ? l?.width + "px" : void 0, m = l ? l?.height + "px" : void 0, h = !!o.value, g = h ? o.value : o.previousValue;
	return JC(d, () => {
		d && u({
			width: d.offsetWidth,
			height: d.offsetHeight
		});
	}), /* @__PURE__ */ (0, B.jsx)(G.div, {
		"data-state": YC(h),
		"data-orientation": o.orientation,
		...a,
		ref: s,
		style: {
			pointerEvents: !h && o.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": p,
			"--radix-navigation-menu-viewport-height": m,
			...a.style
		},
		onPointerEnter: U(t.onPointerEnter, o.onContentEnter),
		onPointerLeave: U(t.onPointerLeave, QC(o.onContentLeave)),
		children: Array.from(c.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = g === e;
			return /* @__PURE__ */ (0, B.jsx)(Ee, {
				present: n || i,
				children: /* @__PURE__ */ (0, B.jsx)(IC, {
					...r,
					ref: de(t, (e) => {
						i && e && f(e);
					})
				})
			}, e);
		})
	});
}), BC = "FocusGroup", VC = e.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = dC(BC, n);
	return /* @__PURE__ */ (0, B.jsx)(aC.Provider, {
		scope: n,
		children: /* @__PURE__ */ (0, B.jsx)(aC.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}), HC = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], UC = "FocusGroupItem", WC = e.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = oC(n), a = dC(UC, n);
	return /* @__PURE__ */ (0, B.jsx)(aC.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
			...r,
			ref: t,
			onKeyDown: U(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...HC
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), HC.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => KC(t)), e.preventDefault();
				}
			})
		})
	});
});
function GC(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function KC(e) {
	let t = document.activeElement;
	return e.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function qC(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function JC(e, t) {
	let n = X(t);
	W(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
function YC(e) {
	return e ? "open" : "closed";
}
function XC(e, t) {
	return `${e}-trigger-${t}`;
}
function ZC(e, t) {
	return `${e}-content-${t}`;
}
function QC(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $C = mC, ew = yC, tw = CC, nw = TC, rw = OC, iw = AC, aw = NC, ow = RC, sw = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)($C, {
	ref: r,
	className: Y("relative z-10 flex max-w-max flex-1 items-center justify-center", e),
	...n,
	children: [t, /* @__PURE__ */ (0, B.jsx)(mw, {})]
}));
sw.displayName = $C.displayName;
var cw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(ew, {
	ref: n,
	className: Y("group flex flex-1 list-none items-center justify-center space-x-1", e),
	...t
}));
cw.displayName = ew.displayName;
var lw = tw, uw = cr("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"), dw = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)(nw, {
	ref: r,
	className: Y(uw(), "group", e),
	...n,
	children: [
		t,
		" ",
		/* @__PURE__ */ (0, B.jsx)(y, {
			className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
			"aria-hidden": "true"
		})
	]
}));
dw.displayName = nw.displayName;
var fw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(aw, {
	ref: n,
	className: Y("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", e),
	...t
}));
fw.displayName = aw.displayName;
var pw = rw, mw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("absolute left-0 top-full flex justify-center"),
	children: /* @__PURE__ */ (0, B.jsx)(ow, {
		className: Y("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", e),
		ref: n,
		...t
	})
}));
mw.displayName = ow.displayName;
var hw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(iw, {
	ref: n,
	className: Y("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
}));
hw.displayName = iw.displayName;
//#endregion
//#region lib/components/list-item/list-item.component.tsx
var gw = t.forwardRef(({ className: e, title: t, children: n, ...r }, i) => /* @__PURE__ */ (0, B.jsx)("li", { children: /* @__PURE__ */ (0, B.jsx)(pw, {
	asChild: !0,
	children: /* @__PURE__ */ (0, B.jsxs)("a", {
		ref: i,
		className: Y("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", e),
		...r,
		children: [/* @__PURE__ */ (0, B.jsx)("div", {
			className: "text-sm font-medium leading-none",
			children: t
		}), /* @__PURE__ */ (0, B.jsx)("p", {
			className: "line-clamp-2 text-sm leading-snug text-muted-foreground",
			children: n
		})]
	})
}) }));
gw.displayName = "ListItem";
//#endregion
//#region lib/components/masked-input/masked-input.component.tsx
function _w({ value: e, mask: t, onChange: n, ...r }) {
	let i = t.split("#").length - 1, a = t.split("A").length - 1, o = t.split("*").length - 1, s = i + a + o;
	function c(e) {
		n(e.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, s));
	}
	return /* @__PURE__ */ (0, B.jsx)(YS, {
		value: _f(e, t),
		onChange: c,
		...r
	});
}
//#endregion
//#region lib/hooks/useDebounce.ts
var vw = (e, t = 300) => {
	let [n, r] = u(e);
	return a(() => {
		let n = setTimeout(() => {
			r(e);
		}, t);
		return () => {
			clearTimeout(n);
		};
	}, [e, t]), n;
}, yw = cr("m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", {
	variants: { variant: {
		default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
		secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		inverted: "inverted"
	} },
	defaultVariants: { variant: "default" }
}), bw = e.forwardRef(({ options: t, onValueChange: n, variant: r, defaultValue: i = [], placeholder: o = "Select options", animation: s = 0, maxCount: c = 3, modalPopover: l = !1, className: u, preventSelectAll: d = !1, onSearchChange: f, isLoading: p, onCreate: m, ...h }, g) => {
	let [_, b] = e.useState(i), [x, S] = e.useState(!1), [C, w] = e.useState(!1), [T, E] = e.useState(""), D = vw(T, 300);
	a(() => {
		f && f(D ?? "");
	}, [D]);
	let O = (e) => {
		if (e.key === "Enter") S(!0);
		else if (e.key === "Backspace" && !e.currentTarget.value) {
			let e = [..._];
			e.pop(), b(e), n(e);
		}
	}, A = (e) => {
		let t = _.includes(e) ? _.filter((t) => t !== e) : [..._, e];
		b(t), n(t);
	}, M = () => {
		b([]), n([]);
	}, P = () => {
		S((e) => !e);
	}, ee = () => {
		let e = _.slice(0, c);
		b(e), n(e);
	}, te = () => {
		if (_.length === t.length) M();
		else {
			let e = t.map((e) => e.value);
			b(e), n(e);
		}
	};
	return /* @__PURE__ */ (0, B.jsxs)(Nv, {
		open: x,
		onOpenChange: S,
		modal: l,
		children: [
			/* @__PURE__ */ (0, B.jsx)(Pv, {
				asChild: !0,
				children: /* @__PURE__ */ (0, B.jsx)(Ws, {
					ref: g,
					...h,
					onClick: P,
					variant: "outline",
					className: Y("flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto", u),
					children: _.length > 0 ? /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "flex justify-between items-center w-full",
						children: [/* @__PURE__ */ (0, B.jsxs)("div", {
							className: "flex flex-wrap items-center",
							children: [_.slice(0, c).map((e) => {
								let n = t.find((t) => t.value === e), i = n?.icon;
								return /* @__PURE__ */ (0, B.jsxs)(Fs, {
									className: Y(C ? "animate-bounce" : "", yw({ variant: r })),
									style: { animationDuration: `${s}s` },
									children: [
										i && /* @__PURE__ */ (0, B.jsx)(i, { className: "h-4 w-4 mr-2" }),
										n?.label,
										/* @__PURE__ */ (0, B.jsx)(F, {
											className: "ml-2 h-4 w-4 cursor-pointer",
											onClick: (t) => {
												t.stopPropagation(), A(e);
											}
										})
									]
								}, e);
							}), _.length > c && /* @__PURE__ */ (0, B.jsxs)(Fs, {
								className: Y("bg-transparent text-foreground border-foreground/1 hover:bg-transparent", C ? "animate-bounce" : "", yw({ variant: r })),
								style: { animationDuration: `${s}s` },
								children: [`+ ${_.length - c}`, /* @__PURE__ */ (0, B.jsx)(F, {
									className: "ml-2 h-4 w-4 cursor-pointer",
									onClick: (e) => {
										e.stopPropagation(), ee();
									}
								})]
							})]
						}), /* @__PURE__ */ (0, B.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [
								p && /* @__PURE__ */ (0, B.jsx)(k, { className: "animate-spin text-muted-foreground" }),
								/* @__PURE__ */ (0, B.jsx)(I, {
									className: "h-4 mx-2 cursor-pointer text-muted-foreground",
									onClick: (e) => {
										e.stopPropagation(), M();
									}
								}),
								/* @__PURE__ */ (0, B.jsx)(ID, {
									orientation: "vertical",
									className: "flex min-h-6 h-full"
								}),
								/* @__PURE__ */ (0, B.jsx)(y, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
							]
						})]
					}) : /* @__PURE__ */ (0, B.jsxs)("div", {
						className: "flex items-center justify-between w-full mx-auto",
						children: [/* @__PURE__ */ (0, B.jsx)("span", {
							className: "text-sm text-muted-foreground mx-3",
							children: o
						}), /* @__PURE__ */ (0, B.jsx)(y, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })]
					})
				})
			}),
			/* @__PURE__ */ (0, B.jsx)(Fv, {
				className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
				align: "start",
				onEscapeKeyDown: () => S(!1),
				children: /* @__PURE__ */ (0, B.jsxs)(dh, {
					shouldFilter: !f,
					children: [/* @__PURE__ */ (0, B.jsx)(ph, {
						placeholder: "Pesquisar...",
						onKeyDown: O,
						onValueChange: E
					}), /* @__PURE__ */ (0, B.jsxs)(mh, { children: [
						!p && /* @__PURE__ */ (0, B.jsx)(hh, { children: "Nenhum resultado encontrado." }),
						/* @__PURE__ */ (0, B.jsxs)(gh, { children: [
							!p && !t.length && !!T.length && m && /* @__PURE__ */ (0, B.jsx)(vh, {
								onSelect: m,
								className: "cursor-pointer",
								children: /* @__PURE__ */ (0, B.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, B.jsx)(j, { className: "size-4" }),
										"Criar ",
										/* @__PURE__ */ (0, B.jsx)("b", { children: T })
									]
								})
							}, "new"),
							p && /* @__PURE__ */ (0, B.jsx)("div", {
								className: "py-2 flex justify-center",
								children: /* @__PURE__ */ (0, B.jsx)(k, { className: "text-foreground/50 size-4 animate-spin" })
							}),
							!d && /* @__PURE__ */ (0, B.jsxs)(vh, {
								onSelect: te,
								className: "cursor-pointer",
								children: [/* @__PURE__ */ (0, B.jsx)("div", {
									className: Y("mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary", _.length === t.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"),
									children: /* @__PURE__ */ (0, B.jsx)(v, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, B.jsx)("span", { children: "(Selecionar todos)" })]
							}, "all"),
							t.map((e) => /* @__PURE__ */ (0, B.jsxs)(vh, {
								onSelect: () => A(e.value),
								className: "cursor-pointer",
								children: [
									/* @__PURE__ */ (0, B.jsx)("div", {
										className: Y("mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary", _.includes(e.value) ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"),
										children: /* @__PURE__ */ (0, B.jsx)(v, { className: "h-4 w-4" })
									}),
									e.icon && /* @__PURE__ */ (0, B.jsx)(e.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, B.jsx)("span", { children: e.label })
								]
							}, e.value))
						] }),
						/* @__PURE__ */ (0, B.jsx)(_h, {})
					] })]
				})
			}),
			s > 0 && _.length > 0 && /* @__PURE__ */ (0, B.jsx)(N, {
				className: Y("cursor-pointer my-2 text-foreground bg-background w-3 h-3", C ? "" : "text-muted-foreground"),
				onClick: () => w(!C)
			})
		]
	});
});
bw.displayName = "MultiSelect";
//#endregion
//#region lib/components/pagination/pagination.component.tsx
var xw = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: Y("mx-auto flex w-full justify-center", e),
	...t
});
xw.displayName = "Pagination";
var Sw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("ul", {
	ref: n,
	className: Y("flex flex-row items-center gap-1", e),
	...t
}));
Sw.displayName = "PaginationContent";
var Cw = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("li", {
	ref: n,
	className: Y("", e),
	...t
}));
Cw.displayName = "PaginationItem";
var ww = ({ className: e, isActive: t, size: n = "icon", ...r }) => /* @__PURE__ */ (0, B.jsx)("a", {
	"aria-current": t ? "page" : void 0,
	className: Y(Us({
		variant: t ? "outline" : "ghost",
		size: n
	}), e),
	...r
});
ww.displayName = "PaginationLink";
var Tw = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)(ww, {
	"aria-label": "Go to previous page",
	size: "default",
	className: Y("gap-1", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(x, { className: "h-4 w-4" })
});
Tw.displayName = "PaginationPrevious";
var Ew = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)(ww, {
	"aria-label": "Go to next page",
	size: "default",
	className: Y("gap-1", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(C, { className: "h-4 w-4" })
});
Ew.displayName = "PaginationNext";
var Dw = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsxs)("span", {
	"aria-hidden": !0,
	className: Y("flex h-9 w-9 items-center justify-center relative", e),
	...t,
	children: [/* @__PURE__ */ (0, B.jsx)(A, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
Dw.displayName = "PaginationEllipsis";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-radio-group_38e42583e7e26f4d31f381baa4d9d8a1/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var Ow = "Radio", [kw, Aw] = V(Ow), [jw, Mw] = kw(Ow), Nw = e.forwardRef((t, n) => {
	let { __scopeRadio: r, name: i, checked: a = !1, required: o, disabled: s, value: c = "on", onCheck: l, form: u, ...d } = t, [f, p] = e.useState(null), m = H(n, (e) => p(e)), h = e.useRef(!1), g = f ? u || !!f.closest("form") : !0;
	return /* @__PURE__ */ (0, B.jsxs)(jw, {
		scope: r,
		checked: a,
		disabled: s,
		children: [/* @__PURE__ */ (0, B.jsx)(G.button, {
			type: "button",
			role: "radio",
			"aria-checked": a,
			"data-state": Rw(a),
			"data-disabled": s ? "" : void 0,
			disabled: s,
			value: c,
			...d,
			ref: m,
			onClick: U(t.onClick, (e) => {
				a || l?.(), g && (h.current = e.isPropagationStopped(), h.current || e.stopPropagation());
			})
		}), g && /* @__PURE__ */ (0, B.jsx)(Lw, {
			control: f,
			bubbles: !h.current,
			name: i,
			value: c,
			checked: a,
			required: o,
			disabled: s,
			form: u,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Nw.displayName = Ow;
var Pw = "RadioIndicator", Fw = e.forwardRef((e, t) => {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = Mw(Pw, n);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || a.checked,
		children: /* @__PURE__ */ (0, B.jsx)(G.span, {
			"data-state": Rw(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
});
Fw.displayName = Pw;
var Iw = "RadioBubbleInput", Lw = e.forwardRef(({ __scopeRadio: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = H(s, o), l = Yp(r), u = Xp(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ (0, B.jsx)(G.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
Lw.displayName = Iw;
function Rw(e) {
	return e ? "checked" : "unchecked";
}
var zw = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], Bw = "RadioGroup", [Vw, Hw] = V(Bw, [wy, Aw]), Uw = wy(), Ww = Aw(), [Gw, Kw] = Vw(Bw), qw = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, name: r, defaultValue: i, value: a, required: o = !1, disabled: s = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, p = Uw(n), m = Ye(l), [h, g] = xe({
		prop: a,
		defaultProp: i ?? null,
		onChange: d,
		caller: Bw
	});
	return /* @__PURE__ */ (0, B.jsx)(Gw, {
		scope: n,
		name: r,
		required: o,
		disabled: s,
		value: h,
		onValueChange: g,
		children: /* @__PURE__ */ (0, B.jsx)(Iy, {
			asChild: !0,
			...p,
			orientation: c,
			dir: m,
			loop: u,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				role: "radiogroup",
				"aria-required": o,
				"aria-orientation": c,
				"data-disabled": s ? "" : void 0,
				dir: m,
				...f,
				ref: t
			})
		})
	});
});
qw.displayName = Bw;
var Jw = "RadioGroupItem", Yw = e.forwardRef((t, n) => {
	let { __scopeRadioGroup: r, disabled: i, ...a } = t, o = Kw(Jw, r), s = o.disabled || i, c = Uw(r), l = Ww(r), u = e.useRef(null), d = H(n, u), f = o.value === a.value, p = e.useRef(!1);
	return e.useEffect(() => {
		let e = (e) => {
			zw.includes(e.key) && (p.current = !0);
		}, t = () => p.current = !1;
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ (0, B.jsx)(Ly, {
		asChild: !0,
		...c,
		focusable: !s,
		active: f,
		children: /* @__PURE__ */ (0, B.jsx)(Nw, {
			disabled: s,
			required: o.required,
			checked: f,
			...l,
			...a,
			name: o.name,
			ref: d,
			onCheck: () => o.onValueChange(a.value),
			onKeyDown: U((e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: U(a.onFocus, () => {
				p.current && u.current?.click();
			})
		})
	});
});
Yw.displayName = Jw;
var Xw = "RadioGroupIndicator", Zw = e.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(Fw, {
		...Ww(n),
		...r,
		ref: t
	});
});
Zw.displayName = Xw;
var Qw = qw, $w = Yw, eT = Zw, tT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Qw, {
	className: Y("grid gap-2", e),
	...t,
	ref: n
}));
tT.displayName = Qw.displayName;
var nT = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($w, {
	ref: n,
	className: Y("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(eT, {
		className: "flex items-center justify-center",
		children: /* @__PURE__ */ (0, B.jsx)(D, { className: "h-3.5 w-3.5 fill-primary" })
	})
}));
nT.displayName = $w.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+number@1.1.1/node_modules/@radix-ui/number/dist/index.mjs
function rT(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-scroll-area_09f9b637bd6a4b10b94167c58c52d7bf/node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function iT(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
var aT = "ScrollArea", [oT, sT] = V(aT), [cT, lT] = oT(aT), uT = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, type: i = "hover", dir: a, scrollHideDelay: o = 600, ...s } = t, [c, l] = e.useState(null), [u, d] = e.useState(null), [f, p] = e.useState(null), [m, h] = e.useState(null), [g, _] = e.useState(null), [v, y] = e.useState(0), [b, x] = e.useState(0), [S, C] = e.useState(!1), [w, T] = e.useState(!1), E = H(n, (e) => l(e)), D = Ye(a);
	return /* @__PURE__ */ (0, B.jsx)(cT, {
		scope: r,
		type: i,
		dir: D,
		scrollHideDelay: o,
		scrollArea: c,
		viewport: u,
		onViewportChange: d,
		content: f,
		onContentChange: p,
		scrollbarX: m,
		onScrollbarXChange: h,
		scrollbarXEnabled: S,
		onScrollbarXEnabledChange: C,
		scrollbarY: g,
		onScrollbarYChange: _,
		scrollbarYEnabled: w,
		onScrollbarYEnabledChange: T,
		onCornerWidthChange: y,
		onCornerHeightChange: x,
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			dir: D,
			...s,
			ref: E,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": v + "px",
				"--radix-scroll-area-corner-height": b + "px",
				...t.style
			}
		})
	});
});
uT.displayName = aT;
var dT = "ScrollAreaViewport", fT = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, children: i, nonce: a, ...o } = t, s = lT(dT, r), c = H(n, e.useRef(null), s.onViewportChange);
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: a
	}), /* @__PURE__ */ (0, B.jsx)(G.div, {
		"data-radix-scroll-area-viewport": "",
		...o,
		ref: c,
		style: {
			overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
			...t.style
		},
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			ref: s.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: i
		})
	})] });
});
fT.displayName = dT;
var pT = "ScrollAreaScrollbar", mT = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = lT(pT, t.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: s } = a, c = t.orientation === "horizontal";
	return e.useEffect(() => (c ? o(!0) : s(!0), () => {
		c ? o(!1) : s(!1);
	}), [
		c,
		o,
		s
	]), a.type === "hover" ? /* @__PURE__ */ (0, B.jsx)(hT, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "scroll" ? /* @__PURE__ */ (0, B.jsx)(gT, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "auto" ? /* @__PURE__ */ (0, B.jsx)(_T, {
		...i,
		ref: n,
		forceMount: r
	}) : a.type === "always" ? /* @__PURE__ */ (0, B.jsx)(vT, {
		...i,
		ref: n
	}) : null;
});
mT.displayName = pT;
var hT = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = lT(pT, t.__scopeScrollArea), [o, s] = e.useState(!1);
	return e.useEffect(() => {
		let e = a.scrollArea, t = 0;
		if (e) {
			let n = () => {
				window.clearTimeout(t), s(!0);
			}, r = () => {
				t = window.setTimeout(() => s(!1), a.scrollHideDelay);
			};
			return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
				window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r);
			};
		}
	}, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || o,
		children: /* @__PURE__ */ (0, B.jsx)(_T, {
			"data-state": o ? "visible" : "hidden",
			...i,
			ref: n
		})
	});
}), gT = e.forwardRef((t, n) => {
	let { forceMount: r, ...i } = t, a = lT(pT, t.__scopeScrollArea), o = t.orientation === "horizontal", s = RT(() => l("SCROLL_END"), 100), [c, l] = iT("hidden", {
		hidden: { SCROLL: "scrolling" },
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
	return e.useEffect(() => {
		if (c === "idle") {
			let e = window.setTimeout(() => l("HIDE"), a.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		c,
		a.scrollHideDelay,
		l
	]), e.useEffect(() => {
		let e = a.viewport, t = o ? "scrollLeft" : "scrollTop";
		if (e) {
			let n = e[t], r = () => {
				let r = e[t];
				n !== r && (l("SCROLL"), s()), n = r;
			};
			return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r);
		}
	}, [
		a.viewport,
		o,
		l,
		s
	]), /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || c !== "hidden",
		children: /* @__PURE__ */ (0, B.jsx)(vT, {
			"data-state": c === "hidden" ? "hidden" : "visible",
			...i,
			ref: n,
			onPointerEnter: U(t.onPointerEnter, () => l("POINTER_ENTER")),
			onPointerLeave: U(t.onPointerLeave, () => l("POINTER_LEAVE"))
		})
	});
}), _T = e.forwardRef((t, n) => {
	let r = lT(pT, t.__scopeScrollArea), { forceMount: i, ...a } = t, [o, s] = e.useState(!1), c = t.orientation === "horizontal", l = RT(() => {
		if (r.viewport) {
			let e = r.viewport.offsetWidth < r.viewport.scrollWidth, t = r.viewport.offsetHeight < r.viewport.scrollHeight;
			s(c ? e : t);
		}
	}, 10);
	return zT(r.viewport, l), zT(r.content, l), /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: i || o,
		children: /* @__PURE__ */ (0, B.jsx)(vT, {
			"data-state": o ? "visible" : "hidden",
			...a,
			ref: n
		})
	});
}), vT = e.forwardRef((t, n) => {
	let { orientation: r = "vertical", ...i } = t, a = lT(pT, t.__scopeScrollArea), o = e.useRef(null), s = e.useRef(0), [c, l] = e.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), u = jT(c.viewport, c.content), d = {
		...i,
		sizes: c,
		onSizesChange: l,
		hasThumb: u > 0 && u < 1,
		onThumbChange: (e) => o.current = e,
		onThumbPointerUp: () => s.current = 0,
		onThumbPointerDown: (e) => s.current = e
	};
	function f(e, t) {
		return NT(e, s.current, c, t);
	}
	return r === "horizontal" ? /* @__PURE__ */ (0, B.jsx)(yT, {
		...d,
		ref: n,
		onThumbPositionChange: () => {
			if (a.viewport && o.current) {
				let e = a.viewport.scrollLeft, t = PT(e, c, a.dir);
				o.current.style.transform = `translate3d(${t}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			a.viewport && (a.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			a.viewport && (a.viewport.scrollLeft = f(e, a.dir));
		}
	}) : r === "vertical" ? /* @__PURE__ */ (0, B.jsx)(bT, {
		...d,
		ref: n,
		onThumbPositionChange: () => {
			if (a.viewport && o.current) {
				let e = a.viewport.scrollTop, t = PT(e, c);
				o.current.style.transform = `translate3d(0, ${t}px, 0)`;
			}
		},
		onWheelScroll: (e) => {
			a.viewport && (a.viewport.scrollTop = e);
		},
		onDragScroll: (e) => {
			a.viewport && (a.viewport.scrollTop = f(e));
		}
	}) : null;
}), yT = e.forwardRef((t, n) => {
	let { sizes: r, onSizesChange: i, ...a } = t, o = lT(pT, t.__scopeScrollArea), [s, c] = e.useState(), l = e.useRef(null), u = H(n, l, o.onScrollbarXChange);
	return e.useEffect(() => {
		l.current && c(getComputedStyle(l.current));
	}, [l]), /* @__PURE__ */ (0, B.jsx)(CT, {
		"data-orientation": "horizontal",
		...a,
		ref: u,
		sizes: r,
		style: {
			bottom: 0,
			left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": MT(r) + "px",
			...t.style
		},
		onThumbPointerDown: (e) => t.onThumbPointerDown(e.x),
		onDragScroll: (e) => t.onDragScroll(e.x),
		onWheelScroll: (e, n) => {
			if (o.viewport) {
				let r = o.viewport.scrollLeft + e.deltaX;
				t.onWheelScroll(r), IT(r, n) && e.preventDefault();
			}
		},
		onResize: () => {
			l.current && o.viewport && s && i({
				content: o.viewport.scrollWidth,
				viewport: o.viewport.offsetWidth,
				scrollbar: {
					size: l.current.clientWidth,
					paddingStart: AT(s.paddingLeft),
					paddingEnd: AT(s.paddingRight)
				}
			});
		}
	});
}), bT = e.forwardRef((t, n) => {
	let { sizes: r, onSizesChange: i, ...a } = t, o = lT(pT, t.__scopeScrollArea), [s, c] = e.useState(), l = e.useRef(null), u = H(n, l, o.onScrollbarYChange);
	return e.useEffect(() => {
		l.current && c(getComputedStyle(l.current));
	}, [l]), /* @__PURE__ */ (0, B.jsx)(CT, {
		"data-orientation": "vertical",
		...a,
		ref: u,
		sizes: r,
		style: {
			top: 0,
			right: o.dir === "ltr" ? 0 : void 0,
			left: o.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": MT(r) + "px",
			...t.style
		},
		onThumbPointerDown: (e) => t.onThumbPointerDown(e.y),
		onDragScroll: (e) => t.onDragScroll(e.y),
		onWheelScroll: (e, n) => {
			if (o.viewport) {
				let r = o.viewport.scrollTop + e.deltaY;
				t.onWheelScroll(r), IT(r, n) && e.preventDefault();
			}
		},
		onResize: () => {
			l.current && o.viewport && s && i({
				content: o.viewport.scrollHeight,
				viewport: o.viewport.offsetHeight,
				scrollbar: {
					size: l.current.clientHeight,
					paddingStart: AT(s.paddingTop),
					paddingEnd: AT(s.paddingBottom)
				}
			});
		}
	});
}), [xT, ST] = oT(pT), CT = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, sizes: i, hasThumb: a, onThumbChange: o, onThumbPointerUp: s, onThumbPointerDown: c, onThumbPositionChange: l, onDragScroll: u, onWheelScroll: d, onResize: f, ...p } = t, m = lT(pT, r), [h, g] = e.useState(null), _ = H(n, (e) => g(e)), v = e.useRef(null), y = e.useRef(""), b = m.viewport, x = i.content - i.viewport, S = X(d), C = X(l), w = RT(f, 10);
	function T(e) {
		v.current && u({
			x: e.clientX - v.current.left,
			y: e.clientY - v.current.top
		});
	}
	return e.useEffect(() => {
		let e = (e) => {
			let t = e.target;
			h?.contains(t) && S(e, x);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		b,
		h,
		x,
		S
	]), e.useEffect(C, [i, C]), zT(h, w), zT(m.content, w), /* @__PURE__ */ (0, B.jsx)(xT, {
		scope: r,
		scrollbar: h,
		hasThumb: a,
		onThumbChange: X(o),
		onThumbPointerUp: X(s),
		onThumbPositionChange: C,
		onThumbPointerDown: X(c),
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			...p,
			ref: _,
			style: {
				position: "absolute",
				...p.style
			},
			onPointerDown: U(t.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), v.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), T(e));
			}),
			onPointerMove: U(t.onPointerMove, T),
			onPointerUp: U(t.onPointerUp, (e) => {
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), v.current = null;
			})
		})
	});
}), wT = "ScrollAreaThumb", TT = e.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = ST(wT, e.__scopeScrollArea);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || i.hasThumb,
		children: /* @__PURE__ */ (0, B.jsx)(ET, {
			ref: t,
			...r
		})
	});
}), ET = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, style: i, ...a } = t, o = lT(wT, r), s = ST(wT, r), { onThumbPositionChange: c } = s, l = H(n, (e) => s.onThumbChange(e)), u = e.useRef(void 0), d = RT(() => {
		u.current &&= (u.current(), void 0);
	}, 100);
	return e.useEffect(() => {
		let e = o.viewport;
		if (e) {
			let t = () => {
				d(), u.current || (u.current = LT(e, c), c());
			};
			return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t);
		}
	}, [
		o.viewport,
		d,
		c
	]), /* @__PURE__ */ (0, B.jsx)(G.div, {
		"data-state": s.hasThumb ? "visible" : "hidden",
		...a,
		ref: l,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...i
		},
		onPointerDownCapture: U(t.onPointerDownCapture, (e) => {
			let t = e.target.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top;
			s.onThumbPointerDown({
				x: n,
				y: r
			});
		}),
		onPointerUp: U(t.onPointerUp, s.onThumbPointerUp)
	});
});
TT.displayName = wT;
var DT = "ScrollAreaCorner", OT = e.forwardRef((e, t) => {
	let n = lT(DT, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
	return n.type !== "scroll" && r ? /* @__PURE__ */ (0, B.jsx)(kT, {
		...e,
		ref: t
	}) : null;
});
OT.displayName = DT;
var kT = e.forwardRef((t, n) => {
	let { __scopeScrollArea: r, ...i } = t, a = lT(DT, r), [o, s] = e.useState(0), [c, l] = e.useState(0), u = !!(o && c);
	return zT(a.scrollbarX, () => {
		let e = a.scrollbarX?.offsetHeight || 0;
		a.onCornerHeightChange(e), l(e);
	}), zT(a.scrollbarY, () => {
		let e = a.scrollbarY?.offsetWidth || 0;
		a.onCornerWidthChange(e), s(e);
	}), u ? /* @__PURE__ */ (0, B.jsx)(G.div, {
		...i,
		ref: n,
		style: {
			width: o,
			height: c,
			position: "absolute",
			right: a.dir === "ltr" ? 0 : void 0,
			left: a.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...t.style
		}
	}) : null;
});
function AT(e) {
	return e ? parseInt(e, 10) : 0;
}
function jT(e, t) {
	let n = e / t;
	return isNaN(n) ? 0 : n;
}
function MT(e) {
	let t = jT(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function NT(e, t, n, r = "ltr") {
	let i = MT(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return FT([c, l], d)(e);
}
function PT(e, t, n = "ltr") {
	let r = MT(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = rT(e, n === "ltr" ? [0, o] : [o * -1, 0]);
	return FT([0, o], [0, s])(c);
}
function FT(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function IT(e, t) {
	return e > 0 && e < t;
}
var LT = (e, t = () => {}) => {
	let n = {
		left: e.scrollLeft,
		top: e.scrollTop
	}, r = 0;
	return (function i() {
		let a = {
			left: e.scrollLeft,
			top: e.scrollTop
		}, o = n.left !== a.left, s = n.top !== a.top;
		(o || s) && t(), n = a, r = window.requestAnimationFrame(i);
	})(), () => window.cancelAnimationFrame(r);
};
function RT(t, n) {
	let r = X(t), i = e.useRef(0);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), e.useCallback(() => {
		window.clearTimeout(i.current), i.current = window.setTimeout(r, n);
	}, [r, n]);
}
function zT(e, t) {
	let n = X(t);
	W(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
var BT = uT, VT = fT, HT = OT, UT = t.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)(BT, {
	ref: r,
	className: Y("relative overflow-hidden", e),
	...n,
	children: [
		/* @__PURE__ */ (0, B.jsx)(VT, {
			className: "h-full w-full rounded-[inherit]",
			children: t
		}),
		/* @__PURE__ */ (0, B.jsx)(WT, {}),
		/* @__PURE__ */ (0, B.jsx)(HT, {})
	]
}));
UT.displayName = BT.displayName;
var WT = t.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ (0, B.jsx)(mT, {
	ref: r,
	orientation: t,
	className: Y("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e),
	...n,
	children: /* @__PURE__ */ (0, B.jsx)(TT, { className: "relative flex-1 rounded-full bg-foreground/40" })
}));
WT.displayName = mT.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-select@2.2._1efa2f1d2a9a98ca996d4eb7d69d540a/node_modules/@radix-ui/react-select/dist/index.mjs
var GT = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], KT = [" ", "Enter"], qT = "Select", [JT, YT, XT] = ye(qT), [ZT, QT] = V(qT, [XT, L_]), $T = L_(), [eE, tE] = ZT(qT), [nE, rE] = ZT(qT), iE = (t) => {
	let { __scopeSelect: n, children: r, open: i, defaultOpen: a, onOpenChange: o, value: s, defaultValue: c, onValueChange: l, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h } = t, g = $T(n), [_, v] = e.useState(null), [y, b] = e.useState(null), [x, S] = e.useState(!1), C = Ye(u), [w, T] = xe({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: qT
	}), [E, D] = xe({
		prop: s,
		defaultProp: c,
		onChange: l,
		caller: qT
	}), O = e.useRef(null), k = _ ? h || !!_.closest("form") : !0, [A, j] = e.useState(/* @__PURE__ */ new Set()), M = Array.from(A).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ (0, B.jsx)($_, {
		...g,
		children: /* @__PURE__ */ (0, B.jsxs)(eE, {
			required: m,
			scope: n,
			trigger: _,
			onTriggerChange: v,
			valueNode: y,
			onValueNodeChange: b,
			valueNodeHasChildren: x,
			onValueNodeHasChildrenChange: S,
			contentId: Me(),
			value: E,
			onValueChange: D,
			open: w,
			onOpenChange: T,
			dir: C,
			triggerPointerDownPosRef: O,
			disabled: p,
			children: [/* @__PURE__ */ (0, B.jsx)(JT.Provider, {
				scope: n,
				children: /* @__PURE__ */ (0, B.jsx)(nE, {
					scope: t.__scopeSelect,
					onNativeOptionAdd: e.useCallback((e) => {
						j((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: e.useCallback((e) => {
						j((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: r
				})
			}), k ? /* @__PURE__ */ (0, B.jsxs)($E, {
				"aria-hidden": !0,
				required: m,
				tabIndex: -1,
				name: d,
				autoComplete: f,
				value: E,
				onChange: (e) => D(e.target.value),
				disabled: p,
				form: h,
				children: [E === void 0 ? /* @__PURE__ */ (0, B.jsx)("option", { value: "" }) : null, Array.from(A)]
			}, M) : null]
		})
	});
};
iE.displayName = qT;
var aE = "SelectTrigger", oE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, disabled: i = !1, ...a } = t, o = $T(r), s = tE(aE, r), c = s.disabled || i, l = H(n, s.onTriggerChange), u = YT(r), d = e.useRef("touch"), [f, p, m] = tD((e) => {
		let t = u().filter((e) => !e.disabled), n = nD(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), h = (e) => {
		c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ (0, B.jsx)(ev, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
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
			"data-placeholder": eD(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: U(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && h(e);
			}),
			onPointerDown: U(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: U(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === " ") && GT.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
});
oE.displayName = aE;
var sE = "SelectValue", cE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = tE(sE, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = H(t, c.onValueNodeChange);
	return W(() => {
		l(u);
	}, [l, u]), /* @__PURE__ */ (0, B.jsx)(G.span, {
		...s,
		ref: d,
		style: { pointerEvents: "none" },
		children: eD(c.value) ? /* @__PURE__ */ (0, B.jsx)(B.Fragment, { children: o }) : a
	});
});
cE.displayName = sE;
var lE = "SelectIcon", uE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
uE.displayName = lE;
var dE = "SelectPortal", fE = (e) => /* @__PURE__ */ (0, B.jsx)(Kr, {
	asChild: !0,
	...e
});
fE.displayName = dE;
var pE = "SelectContent", mE = e.forwardRef((t, n) => {
	let r = tE(pE, t.__scopeSelect), [i, a] = e.useState();
	if (W(() => {
		a(new DocumentFragment());
	}, []), !r.open) {
		let e = i;
		return e ? d.createPortal(/* @__PURE__ */ (0, B.jsx)(gE, {
			scope: t.__scopeSelect,
			children: /* @__PURE__ */ (0, B.jsx)(JT.Slot, {
				scope: t.__scopeSelect,
				children: /* @__PURE__ */ (0, B.jsx)("div", { children: t.children })
			})
		}), e) : null;
	}
	return /* @__PURE__ */ (0, B.jsx)(bE, {
		...t,
		ref: n
	});
});
mE.displayName = pE;
var hE = 10, [gE, _E] = ZT(pE), vE = "SelectContentImpl", yE = /* @__PURE__ */ fe("SelectContent.RemoveScroll"), bE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, position: i = "item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = t, y = tE(pE, r), [b, x] = e.useState(null), [S, C] = e.useState(null), w = H(n, (e) => x(e)), [T, E] = e.useState(null), [D, O] = e.useState(null), k = YT(r), [A, j] = e.useState(!1), M = e.useRef(!1);
	e.useEffect(() => {
		if (b) return pa(b);
	}, [b]), Jr();
	let N = e.useCallback((e) => {
		let [t, ...n] = k().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [k, S]), P = e.useCallback(() => N([T, b]), [
		N,
		T,
		b
	]);
	e.useEffect(() => {
		A && P();
	}, [A, P]);
	let { onOpenChange: F, triggerPointerDownPosRef: I } = y;
	e.useEffect(() => {
		if (b) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (I.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (I.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || F(!1), document.removeEventListener("pointermove", t), I.current = null;
			};
			return I.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		b,
		F,
		I
	]), e.useEffect(() => {
		let e = () => F(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [F]);
	let [ee, te] = tD((e) => {
		let t = k().filter((e) => !e.disabled), n = nD(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ne = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && (E(e), r && (M.current = !0));
	}, [y.value]), re = e.useCallback(() => b?.focus(), [b]), L = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && O(e);
	}, [y.value]), R = i === "popper" ? wE : SE, ie = R === wE ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ (0, B.jsx)(gE, {
		scope: r,
		content: b,
		viewport: S,
		onViewportChange: C,
		itemRefCallback: ne,
		selectedItem: T,
		onItemLeave: re,
		itemTextRefCallback: L,
		focusSelectedItem: P,
		selectedItemText: D,
		position: i,
		isPositioned: A,
		searchRef: ee,
		children: /* @__PURE__ */ (0, B.jsx)(ia, {
			as: yE,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, B.jsx)(Nr, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: U(a, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, B.jsx)(br, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ (0, B.jsx)(R, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...ie,
						onPlaced: () => j(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: U(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && te(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => N(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
bE.displayName = vE;
var xE = "SelectItemAlignedPosition", SE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, onPlaced: i, ...a } = t, o = tE(pE, r), s = _E(pE, r), [c, l] = e.useState(null), [u, d] = e.useState(null), f = H(n, (e) => d(e)), p = YT(r), m = e.useRef(!1), h = e.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = e.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), r = v.getBoundingClientRect();
			if (o.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - hE, d = rT(a, [hE, Math.max(hE, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - hE, d = rT(a, [hE, Math.max(hE, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - hE * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - hE, D = s - E, O = _.offsetHeight / 2, k = _.offsetTop + O, A = f + h + k, j = x - A;
			if (A <= E) {
				let e = a.length > 0 && _ === a[a.length - 1].ref.current;
				c.style.bottom = "0px";
				let t = u.clientHeight - g.offsetTop - g.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				c.style.height = n + "px";
			} else {
				let e = a.length > 0 && _ === a[0].ref.current;
				c.style.top = "0px";
				let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
				c.style.height = t + "px", g.scrollTop = A - E + g.offsetTop;
			}
			c.style.margin = `${hE}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", i?.(), requestAnimationFrame(() => m.current = !0);
		}
	}, [
		p,
		o.trigger,
		o.valueNode,
		c,
		u,
		g,
		_,
		v,
		o.dir,
		i
	]);
	W(() => b(), [b]);
	let [x, S] = e.useState();
	return W(() => {
		u && S(window.getComputedStyle(u).zIndex);
	}, [u]), /* @__PURE__ */ (0, B.jsx)(TE, {
		scope: r,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: e.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ (0, B.jsx)("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				...a,
				ref: f,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...a.style
				}
			})
		})
	});
});
SE.displayName = xE;
var CE = "SelectPopperPosition", wE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = hE, ...a } = e, o = $T(n);
	return /* @__PURE__ */ (0, B.jsx)(tv, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
wE.displayName = CE;
var [TE, EE] = ZT(pE, {}), DE = "SelectViewport", OE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, nonce: i, ...a } = t, o = _E(DE, r), s = EE(DE, r), c = H(n, o.onViewportChange), l = e.useRef(0);
	return /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ (0, B.jsx)(JT.Slot, {
		scope: r,
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...a,
			ref: c,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...a.style
			},
			onScroll: U(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - hE * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				l.current = t.scrollTop;
			})
		})
	})] });
});
OE.displayName = DE;
var kE = "SelectGroup", [AE, jE] = ZT(kE), ME = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Me();
	return /* @__PURE__ */ (0, B.jsx)(AE, {
		scope: n,
		id: i,
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			role: "group",
			"aria-labelledby": i,
			...r,
			ref: t
		})
	});
});
ME.displayName = kE;
var NE = "SelectLabel", PE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = jE(NE, n);
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		id: i.id,
		...r,
		ref: t
	});
});
PE.displayName = NE;
var FE = "SelectItem", [IE, LE] = ZT(FE), RE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, value: i, disabled: a = !1, textValue: o, ...s } = t, c = tE(FE, r), l = _E(FE, r), u = c.value === i, [d, f] = e.useState(o ?? ""), [p, m] = e.useState(!1), h = H(n, (e) => l.itemRefCallback?.(e, i, a)), g = Me(), _ = e.useRef("touch"), v = () => {
		a || (c.onValueChange(i), c.onOpenChange(!1));
	};
	if (i === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ (0, B.jsx)(IE, {
		scope: r,
		value: i,
		disabled: a,
		textId: g,
		isSelected: u,
		onItemTextChange: e.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, B.jsx)(JT.ItemSlot, {
			scope: r,
			value: i,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				role: "option",
				"aria-labelledby": g,
				"data-highlighted": p ? "" : void 0,
				"aria-selected": u && p,
				"data-state": u ? "checked" : "unchecked",
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				tabIndex: a ? void 0 : -1,
				...s,
				ref: h,
				onFocus: U(s.onFocus, () => m(!0)),
				onBlur: U(s.onBlur, () => m(!1)),
				onClick: U(s.onClick, () => {
					_.current !== "mouse" && v();
				}),
				onPointerUp: U(s.onPointerUp, () => {
					_.current === "mouse" && v();
				}),
				onPointerDown: U(s.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: U(s.onPointerMove, (e) => {
					_.current = e.pointerType, a ? l.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: U(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: U(s.onKeyDown, (e) => {
					l.searchRef?.current !== "" && e.key === " " || (KT.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
RE.displayName = FE;
var zE = "SelectItemText", BE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, className: i, style: a, ...o } = t, s = tE(zE, r), c = _E(zE, r), l = LE(zE, r), u = rE(zE, r), [f, p] = e.useState(null), m = H(n, (e) => p(e), l.onItemTextChange, (e) => c.itemTextRefCallback?.(e, l.value, l.disabled)), h = f?.textContent, g = e.useMemo(() => /* @__PURE__ */ (0, B.jsx)("option", {
		value: l.value,
		disabled: l.disabled,
		children: h
	}, l.value), [
		l.disabled,
		l.value,
		h
	]), { onNativeOptionAdd: _, onNativeOptionRemove: v } = u;
	return W(() => (_(g), () => v(g)), [
		_,
		v,
		g
	]), /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [/* @__PURE__ */ (0, B.jsx)(G.span, {
		id: l.textId,
		...o,
		ref: m
	}), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? d.createPortal(o.children, s.valueNode) : null] });
});
BE.displayName = zE;
var VE = "SelectItemIndicator", HE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return LE(VE, n).isSelected ? /* @__PURE__ */ (0, B.jsx)(G.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
HE.displayName = VE;
var UE = "SelectScrollUpButton", WE = e.forwardRef((t, n) => {
	let r = _E(UE, t.__scopeSelect), i = EE(UE, t.__scopeSelect), [a, o] = e.useState(!1), s = H(n, i.onScrollButtonChange);
	return W(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				o(t.scrollTop > 0);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, B.jsx)(qE, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
WE.displayName = UE;
var GE = "SelectScrollDownButton", KE = e.forwardRef((t, n) => {
	let r = _E(GE, t.__scopeSelect), i = EE(GE, t.__scopeSelect), [a, o] = e.useState(!1), s = H(n, i.onScrollButtonChange);
	return W(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				o(Math.ceil(t.scrollTop) < e);
			}, t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, B.jsx)(qE, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
KE.displayName = GE;
var qE = e.forwardRef((t, n) => {
	let { __scopeSelect: r, onAutoScroll: i, ...a } = t, o = _E("SelectScrollButton", r), s = e.useRef(null), c = YT(r), l = e.useCallback(() => {
		s.current !== null && (window.clearInterval(s.current), s.current = null);
	}, []);
	return e.useEffect(() => () => l(), [l]), W(() => {
		c().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [c]), /* @__PURE__ */ (0, B.jsx)(G.div, {
		"aria-hidden": !0,
		...a,
		ref: n,
		style: {
			flexShrink: 0,
			...a.style
		},
		onPointerDown: U(a.onPointerDown, () => {
			s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerMove: U(a.onPointerMove, () => {
			o.onItemLeave?.(), s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerLeave: U(a.onPointerLeave, () => {
			l();
		})
	});
}), JE = "SelectSeparator", YE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
YE.displayName = JE;
var XE = "SelectArrow", ZE = e.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = $T(n), a = tE(XE, n), o = _E(XE, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ (0, B.jsx)(nv, {
		...i,
		...r,
		ref: t
	}) : null;
});
ZE.displayName = XE;
var QE = "SelectBubbleInput", $E = e.forwardRef(({ __scopeSelect: t, value: n, ...r }, i) => {
	let a = e.useRef(null), o = H(i, a), s = Yp(n);
	return e.useEffect(() => {
		let e = a.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(t, "value").set;
		if (s !== n && r) {
			let t = new Event("change", { bubbles: !0 });
			r.call(e, n), e.dispatchEvent(t);
		}
	}, [s, n]), /* @__PURE__ */ (0, B.jsx)(G.select, {
		...r,
		style: {
			...ZS,
			...r.style
		},
		ref: o,
		defaultValue: n
	});
});
$E.displayName = QE;
function eD(e) {
	return e === "" || e === void 0;
}
function tD(t) {
	let n = X(t), r = e.useRef(""), i = e.useRef(0), a = e.useCallback((e) => {
		let t = r.current + e;
		n(t), (function e(t) {
			r.current = t, window.clearTimeout(i.current), t !== "" && (i.current = window.setTimeout(() => e(""), 1e3));
		})(t);
	}, [n]), o = e.useCallback(() => {
		r.current = "", window.clearTimeout(i.current);
	}, []);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), [
		r,
		a,
		o
	];
}
function nD(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = rD(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function rD(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var iD = iE, aD = oE, oD = cE, sD = uE, cD = fE, lD = mE, uD = OE, dD = ME, fD = PE, pD = RE, mD = BE, hD = HE, gD = WE, _D = KE, vD = YE, yD = iD, bD = dD, xD = oD, SD = e.forwardRef(({ className: e, children: t, isLoading: n = !1, ...r }, i) => /* @__PURE__ */ (0, B.jsxs)(aD, {
	ref: i,
	className: Y("flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
	...r,
	children: [t, /* @__PURE__ */ (0, B.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [n && /* @__PURE__ */ (0, B.jsx)(k, { className: "animate-spin opacity-50" }), /* @__PURE__ */ (0, B.jsx)(sD, {
			asChild: !0,
			children: /* @__PURE__ */ (0, B.jsx)(y, { className: "h-4 w-4 opacity-50" })
		})]
	})]
}));
SD.displayName = aD.displayName;
var CD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(gD, {
	ref: n,
	className: Y("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(T, { className: "h-4 w-4" })
}));
CD.displayName = gD.displayName;
var wD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(_D, {
	ref: n,
	className: Y("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(y, { className: "h-4 w-4" })
}));
wD.displayName = _D.displayName;
var TD = e.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ (0, B.jsx)(cD, { children: /* @__PURE__ */ (0, B.jsxs)(lD, {
	ref: i,
	className: Y("relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: n,
	...r,
	children: [
		/* @__PURE__ */ (0, B.jsx)(CD, {}),
		/* @__PURE__ */ (0, B.jsx)(uD, {
			className: Y("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children: t
		}),
		/* @__PURE__ */ (0, B.jsx)(wD, {})
	]
}) }));
TD.displayName = lD.displayName;
var ED = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(fD, {
	ref: n,
	className: Y("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
	...t
}));
ED.displayName = fD.displayName;
var DD = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, B.jsxs)(pD, {
	ref: r,
	className: Y("relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, B.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, B.jsx)(hD, { children: /* @__PURE__ */ (0, B.jsx)(_, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, B.jsx)(mD, { children: t })]
}));
DD.displayName = pD.displayName;
var OD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(vD, {
	ref: n,
	className: Y("-mx-1 my-1 h-px bg-muted", e),
	...t
}));
OD.displayName = vD.displayName;
//#endregion
//#region lib/components/select-form/select-form.component.tsx
var kD = ({ name: e, label: t, placeholder: n, options: r, helpText: i, isLoading: a, ...o }) => /* @__PURE__ */ (0, B.jsx)(zS, {
	control: ne().control,
	name: e,
	render: ({ field: e }) => /* @__PURE__ */ (0, B.jsxs)(HS, { children: [
		!!t && /* @__PURE__ */ (0, B.jsx)(US, { children: t }),
		/* @__PURE__ */ (0, B.jsxs)(yD, {
			onValueChange: e.onChange,
			value: e.value,
			defaultValue: e.value,
			...o,
			children: [/* @__PURE__ */ (0, B.jsx)(WS, { children: /* @__PURE__ */ (0, B.jsx)(SD, {
				isLoading: a,
				children: /* @__PURE__ */ (0, B.jsx)(xD, { placeholder: n })
			}) }), /* @__PURE__ */ (0, B.jsx)(TD, { children: r.map((e) => /* @__PURE__ */ (0, B.jsx)(DD, {
				value: e.value,
				children: e.label
			}, e.value)) })]
		}),
		!!i && /* @__PURE__ */ (0, B.jsx)(GS, { children: i }),
		/* @__PURE__ */ (0, B.jsx)(KS, {})
	] })
}), AD = "Separator", jD = "horizontal", MD = ["horizontal", "vertical"], ND = e.forwardRef((e, t) => {
	let { decorative: n, orientation: r = jD, ...i } = e, a = PD(r) ? r : jD, o = n ? { role: "none" } : {
		"aria-orientation": a === "vertical" ? a : void 0,
		role: "separator"
	};
	return /* @__PURE__ */ (0, B.jsx)(us.div, {
		"data-orientation": a,
		...o,
		...i,
		ref: t
	});
});
ND.displayName = AD;
function PD(e) {
	return MD.includes(e);
}
var FD = ND, ID = e.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, i) => /* @__PURE__ */ (0, B.jsx)(FD, {
	ref: i,
	decorative: n,
	orientation: t,
	className: Y("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
	...r
}));
ID.displayName = FD.displayName;
//#endregion
//#region lib/components/sheet/sheet.component.tsx
var LD = Ja, RD = Ya, zD = to, BD = Xa, VD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Za, {
	className: Y("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
	...t,
	ref: n
}));
VD.displayName = Za.displayName;
var HD = cr("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
}), UD = e.forwardRef(({ side: e = "right", className: t, children: n, ...r }, i) => /* @__PURE__ */ (0, B.jsxs)(BD, { children: [/* @__PURE__ */ (0, B.jsx)(VD, {}), /* @__PURE__ */ (0, B.jsxs)(Qa, {
	ref: i,
	className: Y(HD({ side: e }), t),
	...r,
	children: [n, /* @__PURE__ */ (0, B.jsxs)(to, {
		className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, B.jsx)(P, { className: "h-4 w-4" }), /* @__PURE__ */ (0, B.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
UD.displayName = Qa.displayName;
var WD = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
WD.displayName = "SheetHeader";
var GD = ({ className: e, ...t }) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: Y("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
GD.displayName = "SheetFooter";
var KD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)($a, {
	ref: n,
	className: Y("text-lg font-semibold text-foreground", e),
	...t
}));
KD.displayName = $a.displayName;
var qD = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(eo, {
	ref: n,
	className: Y("text-sm text-muted-foreground", e),
	...t
}));
qD.displayName = eo.displayName;
//#endregion
//#region lib/components/skeleton/skeleton.component.tsx
function JD({ className: e, ...t }) {
	return /* @__PURE__ */ (0, B.jsx)("div", {
		className: Y("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-switch@1.2._dba81b3e1544b6029c727b2cf8d015e1/node_modules/@radix-ui/react-switch/dist/index.mjs
var YD = "Switch", [XD, ZD] = V(YD), [QD, $D] = XD(YD), eO = e.forwardRef((t, n) => {
	let { __scopeSwitch: r, name: i, checked: a, defaultChecked: o, required: s, disabled: c, value: l = "on", onCheckedChange: u, form: d, ...f } = t, [p, m] = e.useState(null), h = H(n, (e) => m(e)), g = e.useRef(!1), _ = p ? d || !!p.closest("form") : !0, [v, y] = xe({
		prop: a,
		defaultProp: o ?? !1,
		onChange: u,
		caller: YD
	});
	return /* @__PURE__ */ (0, B.jsxs)(QD, {
		scope: r,
		checked: v,
		disabled: c,
		children: [/* @__PURE__ */ (0, B.jsx)(G.button, {
			type: "button",
			role: "switch",
			"aria-checked": v,
			"aria-required": s,
			"data-state": aO(v),
			"data-disabled": c ? "" : void 0,
			disabled: c,
			value: l,
			...f,
			ref: h,
			onClick: U(t.onClick, (e) => {
				y((e) => !e), _ && (g.current = e.isPropagationStopped(), g.current || e.stopPropagation());
			})
		}), _ && /* @__PURE__ */ (0, B.jsx)(iO, {
			control: p,
			bubbles: !g.current,
			name: i,
			value: l,
			checked: v,
			required: s,
			disabled: c,
			form: d,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
eO.displayName = YD;
var tO = "SwitchThumb", nO = e.forwardRef((e, t) => {
	let { __scopeSwitch: n, ...r } = e, i = $D(tO, n);
	return /* @__PURE__ */ (0, B.jsx)(G.span, {
		"data-state": aO(i.checked),
		"data-disabled": i.disabled ? "" : void 0,
		...r,
		ref: t
	});
});
nO.displayName = tO;
var rO = "SwitchBubbleInput", iO = e.forwardRef(({ __scopeSwitch: t, control: n, checked: r, bubbles: i = !0, ...a }, o) => {
	let s = e.useRef(null), c = H(s, o), l = Yp(r), u = Xp(n);
	return e.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== r && n) {
			let t = new Event("click", { bubbles: i });
			n.call(e, r), e.dispatchEvent(t);
		}
	}, [
		l,
		r,
		i
	]), /* @__PURE__ */ (0, B.jsx)("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: r,
		...a,
		tabIndex: -1,
		ref: c,
		style: {
			...a.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
iO.displayName = rO;
function aO(e) {
	return e ? "checked" : "unchecked";
}
var oO = eO, sO = nO, cO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(oO, {
	className: Y("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border", e),
	...t,
	ref: n,
	children: /* @__PURE__ */ (0, B.jsx)(sO, { className: Y("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
cO.displayName = oO.displayName;
//#endregion
//#region lib/components/table/table.component.tsx
var lO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("div", {
	className: "relative w-full overflow-auto border rounded-lg shadow-xs",
	children: /* @__PURE__ */ (0, B.jsx)("table", {
		ref: n,
		className: Y("w-full caption-bottom text-sm", e),
		...t
	})
}));
lO.displayName = "Table";
var uO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("thead", {
	ref: n,
	className: Y("[&_tr]:border-b bg-muted/50", e),
	...t
}));
uO.displayName = "TableHeader";
var dO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("tbody", {
	ref: n,
	className: Y("[&_tr:last-child]:border-0", e),
	...t
}));
dO.displayName = "TableBody";
var fO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("tfoot", {
	ref: n,
	className: Y("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2", e),
	...t
}));
fO.displayName = "TableFooter";
var pO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("tr", {
	ref: n,
	className: Y("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e),
	...t
}));
pO.displayName = "TableRow";
var mO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("th", {
	ref: n,
	className: Y("h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
mO.displayName = "TableHead";
var hO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("td", {
	ref: n,
	className: Y("py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
	...t
}));
hO.displayName = "TableCell";
var gO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("caption", {
	ref: n,
	className: Y("mt-4 text-sm text-muted-foreground", e),
	...t
}));
gO.displayName = "TableCaption";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-tabs@1.1.13_2c68d2459518dd69315c4ccdc1caf433/node_modules/@radix-ui/react-tabs/dist/index.mjs
var _O = "Tabs", [vO, yO] = V(_O, [wy]), bO = wy(), [xO, SO] = vO(_O), CO = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", dir: s, activationMode: c = "automatic", ...l } = e, u = Ye(s), [d, f] = xe({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: _O
	});
	return /* @__PURE__ */ (0, B.jsx)(xO, {
		scope: n,
		baseId: Me(),
		value: d,
		onValueChange: f,
		orientation: o,
		dir: u,
		activationMode: c,
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			dir: u,
			"data-orientation": o,
			...l,
			ref: t
		})
	});
});
CO.displayName = _O;
var wO = "TabsList", TO = e.forwardRef((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...i } = e, a = SO(wO, n), o = bO(n);
	return /* @__PURE__ */ (0, B.jsx)(Iy, {
		asChild: !0,
		...o,
		orientation: a.orientation,
		dir: a.dir,
		loop: r,
		children: /* @__PURE__ */ (0, B.jsx)(G.div, {
			role: "tablist",
			"aria-orientation": a.orientation,
			...i,
			ref: t
		})
	});
});
TO.displayName = wO;
var EO = "TabsTrigger", DO = e.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, disabled: i = !1, ...a } = e, o = SO(EO, n), s = bO(n), c = AO(o.baseId, r), l = jO(o.baseId, r), u = r === o.value;
	return /* @__PURE__ */ (0, B.jsx)(Ly, {
		asChild: !0,
		...s,
		focusable: !i,
		active: u,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
			type: "button",
			role: "tab",
			"aria-selected": u,
			"aria-controls": l,
			"data-state": u ? "active" : "inactive",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			id: c,
			...a,
			ref: t,
			onMouseDown: U(e.onMouseDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 ? o.onValueChange(r) : e.preventDefault();
			}),
			onKeyDown: U(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && o.onValueChange(r);
			}),
			onFocus: U(e.onFocus, () => {
				let e = o.activationMode !== "manual";
				!u && !i && e && o.onValueChange(r);
			})
		})
	});
});
DO.displayName = EO;
var OO = "TabsContent", kO = e.forwardRef((t, n) => {
	let { __scopeTabs: r, value: i, forceMount: a, children: o, ...s } = t, c = SO(OO, r), l = AO(c.baseId, i), u = jO(c.baseId, i), d = i === c.value, f = e.useRef(d);
	return e.useEffect(() => {
		let e = requestAnimationFrame(() => f.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: a || d,
		children: ({ present: e }) => /* @__PURE__ */ (0, B.jsx)(G.div, {
			"data-state": d ? "active" : "inactive",
			"data-orientation": c.orientation,
			role: "tabpanel",
			"aria-labelledby": l,
			hidden: !e,
			id: u,
			tabIndex: 0,
			...s,
			ref: n,
			style: {
				...t.style,
				animationDuration: f.current ? "0s" : void 0
			},
			children: e && o
		})
	});
});
kO.displayName = OO;
function AO(e, t) {
	return `${e}-trigger-${t}`;
}
function jO(e, t) {
	return `${e}-content-${t}`;
}
var MO = CO, NO = TO, PO = DO, FO = kO, IO = MO, LO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(NO, {
	ref: n,
	className: Y("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
LO.displayName = NO.displayName;
var RO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(PO, {
	ref: n,
	className: Y("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
	...t
}));
RO.displayName = PO.displayName;
var zO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(FO, {
	ref: n,
	className: Y("mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
zO.displayName = FO.displayName;
//#endregion
//#region lib/components/textarea/textarea.component.tsx
var BO = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)("textarea", {
	className: Y("flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: n,
	...t
}));
BO.displayName = "Textarea";
//#endregion
//#region lib/components/textarea-form/textarea-form.component.tsx
var VO = ({ name: e, label: t, placeholder: n, ...r }) => /* @__PURE__ */ (0, B.jsx)(zS, {
	control: ne().control,
	name: e,
	render: ({ field: e }) => /* @__PURE__ */ (0, B.jsxs)(HS, { children: [
		!!t && /* @__PURE__ */ (0, B.jsx)(US, { children: t }),
		/* @__PURE__ */ (0, B.jsx)(WS, { children: /* @__PURE__ */ (0, B.jsx)(BO, {
			placeholder: n,
			...r,
			...e
		}) }),
		/* @__PURE__ */ (0, B.jsx)(KS, {})
	] })
});
VO.displayName = "TextareaForm";
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-toast@1.2.1_0687500628884f4aa08bba9824428f59/node_modules/@radix-ui/react-toast/dist/index.mjs
var HO = "ToastProvider", [UO, WO, GO] = ye("Toast"), [KO, qO] = V("Toast", [GO]), [JO, YO] = KO(HO), XO = (t) => {
	let { __scopeToast: n, label: r = "Notification", duration: i = 5e3, swipeDirection: a = "right", swipeThreshold: o = 50, children: s } = t, [c, l] = e.useState(null), [u, d] = e.useState(0), f = e.useRef(!1), p = e.useRef(!1);
	return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${HO}\`. Expected non-empty \`string\`.`), /* @__PURE__ */ (0, B.jsx)(UO.Provider, {
		scope: n,
		children: /* @__PURE__ */ (0, B.jsx)(JO, {
			scope: n,
			label: r,
			duration: i,
			swipeDirection: a,
			swipeThreshold: o,
			toastCount: u,
			viewport: c,
			onViewportChange: l,
			onToastAdd: e.useCallback(() => d((e) => e + 1), []),
			onToastRemove: e.useCallback(() => d((e) => e - 1), []),
			isFocusedToastEscapeKeyDownRef: f,
			isClosePausedRef: p,
			children: s
		})
	});
};
XO.displayName = HO;
var ZO = "ToastViewport", QO = ["F8"], $O = "toast.viewportPause", ek = "toast.viewportResume", tk = e.forwardRef((t, n) => {
	let { __scopeToast: r, hotkey: i = QO, label: a = "Notifications ({hotkey})", ...o } = t, s = YO(ZO, r), c = WO(r), l = e.useRef(null), u = e.useRef(null), d = e.useRef(null), f = e.useRef(null), p = H(n, f, s.onViewportChange), m = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = s.toastCount > 0;
	e.useEffect(() => {
		let e = (e) => {
			i.length !== 0 && i.every((t) => e[t] || e.code === t) && f.current?.focus();
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [i]), e.useEffect(() => {
		let e = l.current, t = f.current;
		if (h && e && t) {
			let n = () => {
				if (!s.isClosePausedRef.current) {
					let e = new CustomEvent($O);
					t.dispatchEvent(e), s.isClosePausedRef.current = !0;
				}
			}, r = () => {
				if (s.isClosePausedRef.current) {
					let e = new CustomEvent(ek);
					t.dispatchEvent(e), s.isClosePausedRef.current = !1;
				}
			}, i = (t) => {
				e.contains(t.relatedTarget) || r();
			}, a = () => {
				e.contains(document.activeElement) || r();
			};
			return e.addEventListener("focusin", n), e.addEventListener("focusout", i), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", a), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
				e.removeEventListener("focusin", n), e.removeEventListener("focusout", i), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", n), window.removeEventListener("focus", r);
			};
		}
	}, [h, s.isClosePausedRef]);
	let g = e.useCallback(({ tabbingDirection: e }) => {
		let t = c().map((t) => {
			let n = t.ref.current, r = [n, ...Ok(n)];
			return e === "forwards" ? r : r.reverse();
		});
		return (e === "forwards" ? t.reverse() : t).flat();
	}, [c]);
	return e.useEffect(() => {
		let e = f.current;
		if (e) {
			let t = (t) => {
				let n = t.altKey || t.ctrlKey || t.metaKey;
				if (t.key === "Tab" && !n) {
					let n = document.activeElement, r = t.shiftKey;
					if (t.target === e && r) {
						u.current?.focus();
						return;
					}
					let i = g({ tabbingDirection: r ? "backwards" : "forwards" }), a = i.findIndex((e) => e === n);
					kk(i.slice(a + 1)) ? t.preventDefault() : r ? u.current?.focus() : d.current?.focus();
				}
			};
			return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t);
		}
	}, [c, g]), /* @__PURE__ */ (0, B.jsxs)(Or, {
		ref: l,
		role: "region",
		"aria-label": a.replace("{hotkey}", m),
		tabIndex: -1,
		style: { pointerEvents: h ? void 0 : "none" },
		children: [
			h && /* @__PURE__ */ (0, B.jsx)(rk, {
				ref: u,
				onFocusFromOutsideViewport: () => {
					kk(g({ tabbingDirection: "forwards" }));
				}
			}),
			/* @__PURE__ */ (0, B.jsx)(UO.Slot, {
				scope: r,
				children: /* @__PURE__ */ (0, B.jsx)(G.ol, {
					tabIndex: -1,
					...o,
					ref: p
				})
			}),
			h && /* @__PURE__ */ (0, B.jsx)(rk, {
				ref: d,
				onFocusFromOutsideViewport: () => {
					kk(g({ tabbingDirection: "backwards" }));
				}
			})
		]
	});
});
tk.displayName = ZO;
var nk = "ToastFocusProxy", rk = e.forwardRef((e, t) => {
	let { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e, a = YO(nk, n);
	return /* @__PURE__ */ (0, B.jsx)($S, {
		tabIndex: 0,
		...i,
		ref: t,
		style: { position: "fixed" },
		onFocus: (e) => {
			let t = e.relatedTarget;
			a.viewport?.contains(t) || r();
		}
	});
});
rk.displayName = nk;
var ik = "Toast", ak = "toast.swipeStart", ok = "toast.swipeMove", sk = "toast.swipeCancel", ck = "toast.swipeEnd", lk = e.forwardRef((e, t) => {
	let { forceMount: n, open: r, defaultOpen: i, onOpenChange: a, ...o } = e, [s, c] = xe({
		prop: r,
		defaultProp: i ?? !0,
		onChange: a,
		caller: ik
	});
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: n || s,
		children: /* @__PURE__ */ (0, B.jsx)(fk, {
			open: s,
			...o,
			ref: t,
			onClose: () => c(!1),
			onPause: X(e.onPause),
			onResume: X(e.onResume),
			onSwipeStart: U(e.onSwipeStart, (e) => {
				e.currentTarget.setAttribute("data-swipe", "start");
			}),
			onSwipeMove: U(e.onSwipeMove, (e) => {
				let { x: t, y: n } = e.detail.delta;
				e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`);
			}),
			onSwipeCancel: U(e.onSwipeCancel, (e) => {
				e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
			}),
			onSwipeEnd: U(e.onSwipeEnd, (e) => {
				let { x: t, y: n } = e.detail.delta;
				e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), c(!1);
			})
		})
	});
});
lk.displayName = ik;
var [uk, dk] = KO(ik, { onClose() {} }), fk = e.forwardRef((t, n) => {
	let { __scopeToast: r, type: i = "foreground", duration: a, open: o, onClose: s, onEscapeKeyDown: c, onPause: l, onResume: u, onSwipeStart: f, onSwipeMove: p, onSwipeCancel: m, onSwipeEnd: h, ...g } = t, _ = YO(ik, r), [v, y] = e.useState(null), b = H(n, (e) => y(e)), x = e.useRef(null), S = e.useRef(null), C = a || _.duration, w = e.useRef(0), T = e.useRef(C), E = e.useRef(0), { onToastAdd: D, onToastRemove: O } = _, k = X(() => {
		v?.contains(document.activeElement) && _.viewport?.focus(), s();
	}), A = e.useCallback((e) => {
		!e || e === Infinity || (window.clearTimeout(E.current), w.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(k, e));
	}, [k]);
	e.useEffect(() => {
		let e = _.viewport;
		if (e) {
			let t = () => {
				A(T.current), u?.();
			}, n = () => {
				let e = (/* @__PURE__ */ new Date()).getTime() - w.current;
				T.current -= e, window.clearTimeout(E.current), l?.();
			};
			return e.addEventListener($O, n), e.addEventListener(ek, t), () => {
				e.removeEventListener($O, n), e.removeEventListener(ek, t);
			};
		}
	}, [
		_.viewport,
		C,
		l,
		u,
		A
	]), e.useEffect(() => {
		o && !_.isClosePausedRef.current && A(C);
	}, [
		o,
		C,
		_.isClosePausedRef,
		A
	]), e.useEffect(() => (D(), () => O()), [D, O]);
	let j = e.useMemo(() => v ? Ck(v) : null, [v]);
	return _.viewport ? /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [j && /* @__PURE__ */ (0, B.jsx)(pk, {
		__scopeToast: r,
		role: "status",
		"aria-live": i === "foreground" ? "assertive" : "polite",
		children: j
	}), /* @__PURE__ */ (0, B.jsx)(uk, {
		scope: r,
		onClose: k,
		children: d.createPortal(/* @__PURE__ */ (0, B.jsx)(UO.ItemSlot, {
			scope: r,
			children: /* @__PURE__ */ (0, B.jsx)(Dr, {
				asChild: !0,
				onEscapeKeyDown: U(c, () => {
					_.isFocusedToastEscapeKeyDownRef.current || k(), _.isFocusedToastEscapeKeyDownRef.current = !1;
				}),
				children: /* @__PURE__ */ (0, B.jsx)(G.li, {
					tabIndex: 0,
					"data-state": o ? "open" : "closed",
					"data-swipe-direction": _.swipeDirection,
					...g,
					ref: b,
					style: {
						userSelect: "none",
						touchAction: "none",
						...t.style
					},
					onKeyDown: U(t.onKeyDown, (e) => {
						e.key === "Escape" && (c?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (_.isFocusedToastEscapeKeyDownRef.current = !0, k()));
					}),
					onPointerDown: U(t.onPointerDown, (e) => {
						e.button === 0 && (x.current = {
							x: e.clientX,
							y: e.clientY
						});
					}),
					onPointerMove: U(t.onPointerMove, (e) => {
						if (!x.current) return;
						let t = e.clientX - x.current.x, n = e.clientY - x.current.y, r = !!S.current, i = ["left", "right"].includes(_.swipeDirection), a = ["left", "up"].includes(_.swipeDirection) ? Math.min : Math.max, o = i ? a(0, t) : 0, s = i ? 0 : a(0, n), c = e.pointerType === "touch" ? 10 : 2, l = {
							x: o,
							y: s
						}, u = {
							originalEvent: e,
							delta: l
						};
						r ? (S.current = l, wk(ok, p, u, { discrete: !1 })) : Tk(l, _.swipeDirection, c) ? (S.current = l, wk(ak, f, u, { discrete: !1 }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > c || Math.abs(n) > c) && (x.current = null);
					}),
					onPointerUp: U(t.onPointerUp, (e) => {
						let t = S.current, n = e.target;
						if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), S.current = null, x.current = null, t) {
							let n = e.currentTarget, r = {
								originalEvent: e,
								delta: t
							};
							Tk(t, _.swipeDirection, _.swipeThreshold) ? wk(ck, h, r, { discrete: !0 }) : wk(sk, m, r, { discrete: !0 }), n.addEventListener("click", (e) => e.preventDefault(), { once: !0 });
						}
					})
				})
			})
		}), _.viewport)
	})] }) : null;
}), pk = (t) => {
	let { __scopeToast: n, children: r, ...i } = t, a = YO(ik, n), [o, s] = e.useState(!1), [c, l] = e.useState(!1);
	return Ek(() => s(!0)), e.useEffect(() => {
		let e = window.setTimeout(() => l(!0), 1e3);
		return () => window.clearTimeout(e);
	}, []), c ? null : /* @__PURE__ */ (0, B.jsx)(Kr, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)($S, {
			...i,
			children: o && /* @__PURE__ */ (0, B.jsxs)(B.Fragment, { children: [
				a.label,
				" ",
				r
			] })
		})
	});
}, mk = "ToastTitle", hk = e.forwardRef((e, t) => {
	let { __scopeToast: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		...r,
		ref: t
	});
});
hk.displayName = mk;
var gk = "ToastDescription", _k = e.forwardRef((e, t) => {
	let { __scopeToast: n, ...r } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		...r,
		ref: t
	});
});
_k.displayName = gk;
var vk = "ToastAction", yk = e.forwardRef((e, t) => {
	let { altText: n, ...r } = e;
	return n.trim() ? /* @__PURE__ */ (0, B.jsx)(Sk, {
		altText: n,
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)(xk, {
			...r,
			ref: t
		})
	}) : (console.error(`Invalid prop \`altText\` supplied to \`${vk}\`. Expected non-empty \`string\`.`), null);
});
yk.displayName = vk;
var bk = "ToastClose", xk = e.forwardRef((e, t) => {
	let { __scopeToast: n, ...r } = e, i = dk(bk, n);
	return /* @__PURE__ */ (0, B.jsx)(Sk, {
		asChild: !0,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
			type: "button",
			...r,
			ref: t,
			onClick: U(e.onClick, i.onClose)
		})
	});
});
xk.displayName = bk;
var Sk = e.forwardRef((e, t) => {
	let { __scopeToast: n, altText: r, ...i } = e;
	return /* @__PURE__ */ (0, B.jsx)(G.div, {
		"data-radix-toast-announce-exclude": "",
		"data-radix-toast-announce-alt": r || void 0,
		...i,
		ref: t
	});
});
function Ck(e) {
	let t = [];
	return Array.from(e.childNodes).forEach((e) => {
		if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Dk(e)) {
			let n = e.ariaHidden || e.hidden || e.style.display === "none", r = e.dataset.radixToastAnnounceExclude === "";
			if (!n) if (r) {
				let n = e.dataset.radixToastAnnounceAlt;
				n && t.push(n);
			} else t.push(...Ck(e));
		}
	}), t;
}
function wk(e, t, n, { discrete: r }) {
	let i = n.originalEvent.currentTarget, a = new CustomEvent(e, {
		bubbles: !0,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? we(i, a) : i.dispatchEvent(a);
}
var Tk = (e, t, n = 0) => {
	let r = Math.abs(e.x), i = Math.abs(e.y), a = r > i;
	return t === "left" || t === "right" ? a && r > n : !a && i > n;
};
function Ek(e = () => {}) {
	let t = X(e);
	W(() => {
		let e = 0, n = 0;
		return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
			window.cancelAnimationFrame(e), window.cancelAnimationFrame(n);
		};
	}, [t]);
}
function Dk(e) {
	return e.nodeType === e.ELEMENT_NODE;
}
function Ok(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function kk(e) {
	let t = document.activeElement;
	return e.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
var Ak = XO, jk = tk, Mk = lk, Nk = hk, Pk = _k, Fk = yk, Ik = xk, Lk = Ak, Rk = {
	"top-right": "top-0 right-0",
	"top-left": "top-0 left-0",
	"bottom-right": "bottom-0 right-0",
	"bottom-left": "bottom-0 left-0"
}, zk = e.forwardRef(({ className: e, position: t = "bottom-right", ...n }, r) => /* @__PURE__ */ (0, B.jsx)(jk, {
	ref: r,
	className: Y(`fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Rk[t]}`, e),
	...n
}));
zk.displayName = jk.displayName;
var Bk = cr("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full p-4", {
	variants: { variant: {
		default: "border bg-background text-foreground",
		destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
		success: "border-success bg-success text-success-foreground",
		warning: "border-warning bg-warning text-warning-foreground"
	} },
	defaultVariants: { variant: "default" }
}), Vk = e.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(Mk, {
	ref: r,
	className: Y(Bk({ variant: t }), e),
	...n
}));
Vk.displayName = Mk.displayName;
var Hk = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Fk, {
	ref: n,
	className: Y("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
	...t
}));
Hk.displayName = Fk.displayName;
var Uk = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Ik, {
	ref: n,
	className: Y("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
	"toast-close": "",
	...t,
	children: /* @__PURE__ */ (0, B.jsx)(P, { className: "h-4 w-4" })
}));
Uk.displayName = Ik.displayName;
var Wk = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Nk, {
	ref: n,
	className: Y("text-sm font-semibold", e),
	...t
}));
Wk.displayName = Nk.displayName;
var Gk = e.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, B.jsx)(Pk, {
	ref: n,
	className: Y("text-sm opacity-90", e),
	...t
}));
Gk.displayName = Pk.displayName;
//#endregion
//#region lib/hooks/use-toast.ts
var Kk = 5, qk = 1e4, Jk = 0;
function Yk() {
	return Jk = (Jk + 1) % (2 ** 53 - 1), Jk.toString();
}
var Xk = /* @__PURE__ */ new Map(), Zk = (e) => {
	if (Xk.has(e)) return;
	let t = setTimeout(() => {
		Xk.delete(e), tA({
			type: "REMOVE_TOAST",
			toastId: e
		});
	}, qk);
	Xk.set(e, t);
}, Qk = (e, t) => {
	switch (t.type) {
		case "ADD_TOAST": return {
			...e,
			toasts: [t.toast, ...e.toasts].slice(0, Kk)
		};
		case "UPDATE_TOAST": return {
			...e,
			toasts: e.toasts.map((e) => e.id === t.toast.id ? {
				...e,
				...t.toast
			} : e)
		};
		case "DISMISS_TOAST": {
			let { toastId: n } = t;
			return n ? Zk(n) : e.toasts.forEach((e) => {
				Zk(e.id);
			}), {
				...e,
				toasts: e.toasts.map((e) => e.id === n || n === void 0 ? {
					...e,
					open: !1
				} : e)
			};
		}
		case "REMOVE_TOAST": return t.toastId === void 0 ? {
			...e,
			toasts: []
		} : {
			...e,
			toasts: e.toasts.filter((e) => e.id !== t.toastId)
		};
	}
}, $k = [], eA = { toasts: [] };
function tA(e) {
	eA = Qk(eA, e), $k.forEach((e) => {
		e(eA);
	});
}
function nA({ ...e }) {
	let t = Yk(), n = (e) => tA({
		type: "UPDATE_TOAST",
		toast: {
			...e,
			id: t
		}
	}), r = () => tA({
		type: "DISMISS_TOAST",
		toastId: t
	});
	return tA({
		type: "ADD_TOAST",
		toast: {
			...e,
			id: t,
			open: !0,
			onOpenChange: (e) => {
				e || r();
			}
		}
	}), {
		id: t,
		dismiss: r,
		update: n
	};
}
function rA() {
	let [t, n] = e.useState(eA);
	return e.useEffect(() => ($k.push(n), () => {
		let e = $k.indexOf(n);
		e > -1 && $k.splice(e, 1);
	}), [t]), {
		...t,
		toast: nA,
		dismiss: (e) => tA({
			type: "DISMISS_TOAST",
			toastId: e
		})
	};
}
//#endregion
//#region lib/components/toaster/toaster.component.tsx
function iA() {
	let { toasts: e } = rA();
	return /* @__PURE__ */ (0, B.jsxs)(Lk, { children: [e.map(function({ id: e, title: t, description: n, action: r, ...i }) {
		return /* @__PURE__ */ (0, B.jsxs)(Vk, {
			...i,
			className: "mt-2",
			children: [
				/* @__PURE__ */ (0, B.jsxs)("div", {
					className: "grid gap-1",
					children: [t && /* @__PURE__ */ (0, B.jsx)(Wk, { children: t }), n && /* @__PURE__ */ (0, B.jsx)(Gk, { children: n })]
				}),
				r,
				/* @__PURE__ */ (0, B.jsx)(Uk, {})
			]
		}, e);
	}), /* @__PURE__ */ (0, B.jsx)(zk, {})] });
}
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-toggle@1.1._90d1ac9845c0df5f7c4bdca6065023ff/node_modules/@radix-ui/react-toggle/dist/index.mjs
var aA = "Toggle", oA = e.forwardRef((e, t) => {
	let { pressed: n, defaultPressed: r, onPressedChange: i, ...a } = e, [o, s] = xe({
		prop: n,
		onChange: i,
		defaultProp: r ?? !1,
		caller: aA
	});
	return /* @__PURE__ */ (0, B.jsx)(G.button, {
		type: "button",
		"aria-pressed": o,
		"data-state": o ? "on" : "off",
		"data-disabled": e.disabled ? "" : void 0,
		...a,
		ref: t,
		onClick: U(e.onClick, () => {
			e.disabled || s(!o);
		})
	});
});
oA.displayName = aA;
var sA = oA, cA = cr("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
}), lA = e.forwardRef(({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ (0, B.jsx)(sA, {
	ref: i,
	className: Y(cA({
		variant: t,
		size: n,
		className: e
	})),
	...r
}));
lA.displayName = sA.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-toggle-grou_78ac2b7e2597ad3f1fc3dca51c937fb9/node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var uA = "ToggleGroup", [dA, fA] = V(uA, [wy]), pA = wy(), mA = t.forwardRef((e, t) => {
	let { type: n, ...r } = e;
	if (n === "single") return /* @__PURE__ */ (0, B.jsx)(_A, {
		...r,
		ref: t
	});
	if (n === "multiple") return /* @__PURE__ */ (0, B.jsx)(vA, {
		...r,
		ref: t
	});
	throw Error(`Missing prop \`type\` expected on \`${uA}\``);
});
mA.displayName = uA;
var [hA, gA] = dA(uA), _A = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = xe({
		prop: r,
		defaultProp: i ?? "",
		onChange: a,
		caller: uA
	});
	return /* @__PURE__ */ (0, B.jsx)(hA, {
		scope: e.__scopeToggleGroup,
		type: "single",
		value: t.useMemo(() => s ? [s] : [], [s]),
		onItemActivate: c,
		onItemDeactivate: t.useCallback(() => c(""), [c]),
		children: /* @__PURE__ */ (0, B.jsx)(xA, {
			...o,
			ref: n
		})
	});
}), vA = t.forwardRef((e, n) => {
	let { value: r, defaultValue: i, onValueChange: a = () => {}, ...o } = e, [s, c] = xe({
		prop: r,
		defaultProp: i ?? [],
		onChange: a,
		caller: uA
	}), l = t.useCallback((e) => c((t = []) => [...t, e]), [c]), u = t.useCallback((e) => c((t = []) => t.filter((t) => t !== e)), [c]);
	return /* @__PURE__ */ (0, B.jsx)(hA, {
		scope: e.__scopeToggleGroup,
		type: "multiple",
		value: s,
		onItemActivate: l,
		onItemDeactivate: u,
		children: /* @__PURE__ */ (0, B.jsx)(xA, {
			...o,
			ref: n
		})
	});
});
mA.displayName = uA;
var [yA, bA] = dA(uA), xA = t.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: i = !0, orientation: a, dir: o, loop: s = !0, ...c } = e, l = pA(n), u = Ye(o), d = {
		role: "group",
		dir: u,
		...c
	};
	return /* @__PURE__ */ (0, B.jsx)(yA, {
		scope: n,
		rovingFocus: i,
		disabled: r,
		children: i ? /* @__PURE__ */ (0, B.jsx)(Iy, {
			asChild: !0,
			...l,
			orientation: a,
			dir: u,
			loop: s,
			children: /* @__PURE__ */ (0, B.jsx)(G.div, {
				...d,
				ref: t
			})
		}) : /* @__PURE__ */ (0, B.jsx)(G.div, {
			...d,
			ref: t
		})
	});
}), SA = "ToggleGroupItem", CA = t.forwardRef((e, n) => {
	let r = gA(SA, e.__scopeToggleGroup), i = bA(SA, e.__scopeToggleGroup), a = pA(e.__scopeToggleGroup), o = r.value.includes(e.value), s = i.disabled || e.disabled, c = {
		...e,
		pressed: o,
		disabled: s
	}, l = t.useRef(null);
	return i.rovingFocus ? /* @__PURE__ */ (0, B.jsx)(Ly, {
		asChild: !0,
		...a,
		focusable: !s,
		active: o,
		ref: l,
		children: /* @__PURE__ */ (0, B.jsx)(wA, {
			...c,
			ref: n
		})
	}) : /* @__PURE__ */ (0, B.jsx)(wA, {
		...c,
		ref: n
	});
});
CA.displayName = SA;
var wA = t.forwardRef((e, t) => {
	let { __scopeToggleGroup: n, value: r, ...i } = e, a = gA(SA, n), o = {
		role: "radio",
		"aria-checked": e.pressed,
		"aria-pressed": void 0
	};
	return /* @__PURE__ */ (0, B.jsx)(oA, {
		...a.type === "single" ? o : void 0,
		...i,
		ref: t,
		onPressedChange: (e) => {
			e ? a.onItemActivate(r) : a.onItemDeactivate(r);
		}
	});
}), TA = mA, EA = CA, DA = e.createContext({
	size: "default",
	variant: "default"
}), OA = e.forwardRef(({ className: e, variant: t, size: n, children: r, ...i }, a) => /* @__PURE__ */ (0, B.jsx)(TA, {
	ref: a,
	className: Y("flex items-center justify-center gap-1", e),
	...i,
	children: /* @__PURE__ */ (0, B.jsx)(DA.Provider, {
		value: {
			variant: t,
			size: n
		},
		children: r
	})
}));
OA.displayName = TA.displayName;
var kA = e.forwardRef(({ className: t, children: n, variant: r, size: i, ...a }, o) => {
	let s = e.useContext(DA);
	return /* @__PURE__ */ (0, B.jsx)(EA, {
		ref: o,
		className: Y(cA({
			variant: s.variant || r,
			size: s.size || i
		}), t),
		...a,
		children: n
	});
});
kA.displayName = EA.displayName;
//#endregion
//#region node_modules/.pnpm/@radix-ui+react-tooltip@1.2_ab0d0da4ee6b1f28831a19c3e4e15a95/node_modules/@radix-ui/react-tooltip/dist/index.mjs
var [AA, jA] = V("Tooltip", [L_]), MA = L_(), NA = "TooltipProvider", PA = 700, FA = "tooltip.open", [IA, LA] = AA(NA), RA = (t) => {
	let { __scopeTooltip: n, delayDuration: r = PA, skipDelayDuration: i = 300, disableHoverableContent: a = !1, children: o } = t, s = e.useRef(!0), c = e.useRef(!1), l = e.useRef(0);
	return e.useEffect(() => {
		let e = l.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, B.jsx)(IA, {
		scope: n,
		isOpenDelayedRef: s,
		delayDuration: r,
		onOpen: e.useCallback(() => {
			window.clearTimeout(l.current), s.current = !1;
		}, []),
		onClose: e.useCallback(() => {
			window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, i);
		}, [i]),
		isPointerInTransitRef: c,
		onPointerInTransitChange: e.useCallback((e) => {
			c.current = e;
		}, []),
		disableHoverableContent: a,
		children: o
	});
};
RA.displayName = NA;
var zA = "Tooltip", [BA, VA] = AA(zA), HA = (t) => {
	let { __scopeTooltip: n, children: r, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: s, delayDuration: c } = t, l = LA(zA, t.__scopeTooltip), u = MA(n), [d, f] = e.useState(null), p = Me(), m = e.useRef(0), h = s ?? l.disableHoverableContent, g = c ?? l.delayDuration, _ = e.useRef(!1), [v, y] = xe({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(FA))) : l.onClose(), o?.(e);
		},
		caller: zA
	}), b = e.useMemo(() => v ? _.current ? "delayed-open" : "instant-open" : "closed", [v]), x = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, _.current = !1, y(!0);
	}, [y]), S = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = 0, y(!1);
	}, [y]), C = e.useCallback(() => {
		window.clearTimeout(m.current), m.current = window.setTimeout(() => {
			_.current = !0, y(!0), m.current = 0;
		}, g);
	}, [g, y]);
	return e.useEffect(() => () => {
		m.current &&= (window.clearTimeout(m.current), 0);
	}, []), /* @__PURE__ */ (0, B.jsx)($_, {
		...u,
		children: /* @__PURE__ */ (0, B.jsx)(BA, {
			scope: n,
			contentId: p,
			open: v,
			stateAttribute: b,
			trigger: d,
			onTriggerChange: f,
			onTriggerEnter: e.useCallback(() => {
				l.isOpenDelayedRef.current ? C() : x();
			}, [
				l.isOpenDelayedRef,
				C,
				x
			]),
			onTriggerLeave: e.useCallback(() => {
				h ? S() : (window.clearTimeout(m.current), m.current = 0);
			}, [S, h]),
			onOpen: x,
			onClose: S,
			disableHoverableContent: h,
			children: r
		})
	});
};
HA.displayName = zA;
var UA = "TooltipTrigger", WA = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, ...i } = t, a = VA(UA, r), o = LA(UA, r), s = MA(r), c = H(n, e.useRef(null), a.onTriggerChange), l = e.useRef(!1), u = e.useRef(!1), d = e.useCallback(() => l.current = !1, []);
	return e.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ (0, B.jsx)(ev, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ (0, B.jsx)(G.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: c,
			onPointerMove: U(t.onPointerMove, (e) => {
				e.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0);
			}),
			onPointerLeave: U(t.onPointerLeave, () => {
				a.onTriggerLeave(), u.current = !1;
			}),
			onPointerDown: U(t.onPointerDown, () => {
				a.open && a.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
			}),
			onFocus: U(t.onFocus, () => {
				l.current || a.onOpen();
			}),
			onBlur: U(t.onBlur, a.onClose),
			onClick: U(t.onClick, a.onClose)
		})
	});
});
WA.displayName = UA;
var GA = "TooltipPortal", [KA, qA] = AA(GA, { forceMount: void 0 }), JA = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = VA(GA, t);
	return /* @__PURE__ */ (0, B.jsx)(KA, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, B.jsx)(Ee, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, B.jsx)(Kr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
JA.displayName = GA;
var YA = "TooltipContent", XA = e.forwardRef((e, t) => {
	let n = qA(YA, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = VA(YA, e.__scopeTooltip);
	return /* @__PURE__ */ (0, B.jsx)(Ee, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, B.jsx)(tj, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, B.jsx)(ZA, {
			side: i,
			...a,
			ref: t
		})
	});
}), ZA = e.forwardRef((t, n) => {
	let r = VA(YA, t.__scopeTooltip), i = LA(YA, t.__scopeTooltip), a = e.useRef(null), o = H(n, a), [s, c] = e.useState(null), { trigger: l, onClose: u } = r, d = a.current, { onPointerInTransitChange: f } = i, p = e.useCallback(() => {
		c(null), f(!1);
	}, [f]), m = e.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = aj(r, ij(r, n.getBoundingClientRect())), a = oj(t.getBoundingClientRect());
		c(cj([...i, ...a])), f(!0);
	}, [f]);
	return e.useEffect(() => () => p(), [p]), e.useEffect(() => {
		if (l && d) {
			let e = (e) => m(e, d), t = (e) => m(e, l);
			return l.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
				l.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t);
			};
		}
	}, [
		l,
		d,
		m,
		p
	]), e.useEffect(() => {
		if (s) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = l?.contains(t) || d?.contains(t), i = !sj(n, s);
				r ? p() : i && (p(), u());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		l,
		d,
		s,
		u,
		p
	]), /* @__PURE__ */ (0, B.jsx)(tj, {
		...t,
		ref: o
	});
}), [QA, $A] = AA(zA, { isInside: !1 }), ej = /* @__PURE__ */ he("TooltipContent"), tj = e.forwardRef((t, n) => {
	let { __scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...c } = t, l = VA(YA, r), u = MA(r), { onClose: d } = l;
	return e.useEffect(() => (document.addEventListener(FA, d), () => document.removeEventListener(FA, d)), [d]), e.useEffect(() => {
		if (l.trigger) {
			let e = (e) => {
				e.target?.contains(l.trigger) && d();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [l.trigger, d]), /* @__PURE__ */ (0, B.jsx)(br, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: s,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: d,
		children: /* @__PURE__ */ (0, B.jsxs)(tv, {
			"data-state": l.stateAttribute,
			...u,
			...c,
			ref: n,
			style: {
				...c.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, B.jsx)(ej, { children: i }), /* @__PURE__ */ (0, B.jsx)(QA, {
				scope: r,
				isInside: !0,
				children: /* @__PURE__ */ (0, B.jsx)(eC, {
					id: l.contentId,
					role: "tooltip",
					children: a || i
				})
			})]
		})
	});
});
XA.displayName = YA;
var nj = "TooltipArrow", rj = e.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = MA(n);
	return $A(nj, n).isInside ? null : /* @__PURE__ */ (0, B.jsx)(nv, {
		...i,
		...r,
		ref: t
	});
});
rj.displayName = nj;
function ij(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function aj(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function oj(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function sj(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function cj(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), lj(t);
}
function lj(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var uj = RA, dj = HA, fj = WA, pj = JA, mj = XA, hj = uj, gj = dj, _j = fj, vj = e.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ (0, B.jsx)(pj, { children: /* @__PURE__ */ (0, B.jsx)(mj, {
	ref: r,
	sideOffset: t,
	className: Y("z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...n
}) }));
vj.displayName = mj.displayName;
//#endregion
export { nr as Accordion, ar as AccordionContent, rr as AccordionItem, ir as AccordionTrigger, ur as Alert, fr as AlertDescription, Lo as AlertDialog, Ko as AlertDialogAction, qo as AlertDialogCancel, Vo as AlertDialogContent, Go as AlertDialogDescription, Uo as AlertDialogFooter, Ho as AlertDialogHeader, Bo as AlertDialogOverlay, zo as AlertDialogPortal, Wo as AlertDialogTitle, Ro as AlertDialogTrigger, dr as AlertTitle, Jo as AsyncSelect, Xo as AsyncSelectForm, js as Avatar, Ns as AvatarFallback, Ms as AvatarImage, Fs as Badge, Is as Breadcrumb, Hs as BreadcrumbEllipsis, Rs as BreadcrumbItem, zs as BreadcrumbLink, Ls as BreadcrumbList, Bs as BreadcrumbPage, Vs as BreadcrumbSeparator, Ws as Button, yf as Calendar, bf as CalendarDayButton, xf as Card, Tf as CardContent, wf as CardDescription, Ef as CardFooter, Sf as CardHeader, Cf as CardTitle, Pp as Carousel, Fp as CarouselContent, Ip as CarouselItem, Rp as CarouselNext, Lp as CarouselPrevious, Hp as ChartContainer, Kp as ChartLegend, qp as ChartLegendContent, Up as ChartStyle, Wp as ChartTooltip, Gp as ChartTooltipContent, pm as Checkbox, hm as Combobox, mm as ComboboxForm, dh as Command, fh as CommandDialog, hh as CommandEmpty, gh as CommandGroup, ph as CommandInput, vh as CommandItem, mh as CommandList, _h as CommandSeparator, yh as CommandShortcut, Iv as DatePicker, oy as DateTimePicker, sy as Dialog, uy as DialogClose, fy as DialogContent, gy as DialogDescription, my as DialogFooter, py as DialogHeader, dy as DialogOverlay, ly as DialogPortal, hy as DialogTitle, cy as DialogTrigger, _S as DropdownMenu, DS as DropdownMenuCheckboxItem, TS as DropdownMenuContent, yS as DropdownMenuGroup, ES as DropdownMenuItem, kS as DropdownMenuLabel, bS as DropdownMenuPortal, SS as DropdownMenuRadioGroup, OS as DropdownMenuRadioItem, AS as DropdownMenuSeparator, jS as DropdownMenuShortcut, xS as DropdownMenuSub, wS as DropdownMenuSubContent, CS as DropdownMenuSubTrigger, vS as DropdownMenuTrigger, LS as Form, WS as FormControl, GS as FormDescription, zS as FormField, HS as FormItem, US as FormLabel, KS as FormMessage, JS as Heading, YS as Input, XS as InputForm, IS as Label, gw as ListItem, _w as MaskedInput, bw as MultiSelect, sw as NavigationMenu, fw as NavigationMenuContent, hw as NavigationMenuIndicator, lw as NavigationMenuItem, pw as NavigationMenuLink, cw as NavigationMenuList, dw as NavigationMenuTrigger, mw as NavigationMenuViewport, xw as Pagination, Sw as PaginationContent, Dw as PaginationEllipsis, Cw as PaginationItem, ww as PaginationLink, Ew as PaginationNext, Tw as PaginationPrevious, Nv as Popover, Fv as PopoverContent, Pv as PopoverTrigger, tT as RadioGroup, nT as RadioGroupItem, UT as ScrollArea, WT as ScrollBar, yD as Select, TD as SelectContent, kD as SelectForm, bD as SelectGroup, DD as SelectItem, ED as SelectLabel, wD as SelectScrollDownButton, CD as SelectScrollUpButton, OD as SelectSeparator, SD as SelectTrigger, xD as SelectValue, ID as Separator, LD as Sheet, zD as SheetClose, UD as SheetContent, qD as SheetDescription, GD as SheetFooter, WD as SheetHeader, VD as SheetOverlay, BD as SheetPortal, KD as SheetTitle, RD as SheetTrigger, JD as Skeleton, cO as Switch, lO as Table, dO as TableBody, gO as TableCaption, hO as TableCell, fO as TableFooter, mO as TableHead, uO as TableHeader, pO as TableRow, IO as Tabs, zO as TabsContent, LO as TabsList, RO as TabsTrigger, BO as Textarea, VO as TextareaForm, ay as TimePicker, iy as TimePickerInput, Vk as Toast, Hk as ToastAction, Uk as ToastClose, Gk as ToastDescription, Lk as ToastProvider, Wk as ToastTitle, zk as ToastViewport, iA as Toaster, lA as Toggle, OA as ToggleGroup, kA as ToggleGroupItem, gj as Tooltip, vj as TooltipContent, hj as TooltipProvider, _j as TooltipTrigger, Ps as badgeVariants, vf as brazillianStates, Us as buttonVariants, Y as cn, of as mask, uw as navigationMenuTriggerStyle, Qk as reducer, nA as toast, cA as toggleVariants, BS as useFormField, rA as useToast };
