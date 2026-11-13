import { jsx as r, jsxs as c, Fragment as Ze } from "react/jsx-runtime";
import * as i from "react";
import Ft, { useState as me, useEffect as Ie, useCallback as de, useImperativeHandle as jr, useRef as ze, isValidElement as Xa, useMemo as we, useLayoutEffect as Ya, Fragment as Qa } from "react";
import * as nt from "@radix-ui/react-accordion";
import { ChevronDown as rt, ChevronsUpDown as Wr, Loader2 as ft, Check as Ot, MoreHorizontal as Hr, ChevronRight as Vt, ChevronLeftIcon as Ja, ChevronRightIcon as Za, ChevronDownIcon as es, ArrowLeft as ts, ArrowRight as ns, Search as Br, CalendarIcon as rs, Clock as os, Calendar as as, X as jt, Circle as $r, HelpCircle as zr, Mouse as ss, Columns3 as qr, Pin as dn, MoveHorizontal as is, ArrowUpDown as Kr, Rows3 as $n, RotateCcw as cn, MousePointerClick as ls, Eye as qn, ChevronLeft as Ur, AlignJustify as Gr, Rows2 as Xr, GripVertical as Yr, Lock as Qr, Info as ds, ArrowUp as cs, ArrowDown as us, XCircle as Mr, XIcon as ms, Plus as fs, CheckIcon as Tr, WandSparkles as ps, ChevronUp as gs } from "lucide-react";
import { clsx as hs } from "clsx";
import { twMerge as xs } from "tailwind-merge";
import { cva as Ee } from "class-variance-authority";
import * as he from "@radix-ui/react-alert-dialog";
import { useFormContext as $e, FormProvider as bs, Controller as ys } from "react-hook-form";
import * as ht from "@radix-ui/react-avatar";
import { Slot as Jr } from "@radix-ui/react-slot";
import { Link as vs } from "react-router-dom";
import { TZDate as Te, getDefaultClassNames as Zr, DayPicker as ws } from "react-day-picker";
import Ns from "embla-carousel-react";
import * as Kn from "recharts";
import * as Fn from "@radix-ui/react-checkbox";
import { Command as Ne } from "cmdk";
import { format as eo, parse as to, isValid as no, add as Cs } from "date-fns";
import * as _t from "@radix-ui/react-popover";
import * as G from "@radix-ui/react-dialog";
import * as Y from "@radix-ui/react-dropdown-menu";
import { useSensors as ro, useSensor as rn, PointerSensor as oo, KeyboardSensor as ao, DndContext as so, closestCenter as io } from "@dnd-kit/core";
import { restrictToVerticalAxis as Ss, restrictToHorizontalAxis as Rs } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as lo, SortableContext as co, verticalListSortingStrategy as ks, arrayMove as mt, useSortable as uo, horizontalListSortingStrategy as Ps } from "@dnd-kit/sortable";
import { flexRender as On, useReactTable as zs, getExpandedRowModel as Ms, getSortedRowModel as Ts, getCoreRowModel as Is } from "@tanstack/react-table";
import * as pt from "@radix-ui/react-tooltip";
import { CSS as mo } from "@dnd-kit/utilities";
import * as fo from "@radix-ui/react-label";
import * as Ce from "@radix-ui/react-navigation-menu";
import * as At from "@radix-ui/react-radio-group";
import * as et from "@radix-ui/react-scroll-area";
import * as Z from "@radix-ui/react-select";
import * as po from "@radix-ui/react-separator";
import * as Vn from "@radix-ui/react-switch";
import * as at from "@radix-ui/react-tabs";
import * as Re from "@radix-ui/react-toast";
import * as go from "@radix-ui/react-toggle";
import * as un from "@radix-ui/react-toggle-group";
function a(...e) {
  return xs(hs(e));
}
const bc = nt.Root, Ds = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  nt.Item,
  {
    ref: n,
    className: a("border-b", e),
    ...t
  }
));
Ds.displayName = "AccordionItem";
const _s = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(nt.Header, { className: "flex", children: /* @__PURE__ */ c(
  nt.Trigger,
  {
    ref: o,
    className: a(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ r(rt, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
_s.displayName = nt.Trigger.displayName;
const As = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(
  nt.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ r("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
As.displayName = nt.Content.displayName;
const Es = Ee(
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
), Ls = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(Es({ variant: t }), e),
    ...n
  }
));
Ls.displayName = "Alert";
const Fs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "h5",
  {
    ref: n,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Fs.displayName = "AlertTitle";
const Os = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Os.displayName = "AlertDescription";
const yc = he.Root, vc = he.Trigger, Vs = he.Portal, ho = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
ho.displayName = he.Overlay.displayName;
const js = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(Vs, { children: [
  /* @__PURE__ */ r(ho, {}),
  /* @__PURE__ */ r(
    he.Content,
    {
      ref: n,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
js.displayName = he.Content.displayName;
const Ws = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ws.displayName = "AlertDialogHeader";
const Hs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Hs.displayName = "AlertDialogFooter";
const Bs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Title,
  {
    ref: n,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
Bs.displayName = he.Title.displayName;
const $s = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
$s.displayName = he.Description.displayName;
const qs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Action,
  {
    ref: n,
    className: a(ot(), e),
    ...t
  }
));
qs.displayName = he.Action.displayName;
const Ks = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Cancel,
  {
    ref: n,
    className: a(
      ot({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Ks.displayName = he.Cancel.displayName;
function Us({
  options: e,
  isLoading: t,
  renderOption: n,
  getOptionValue: o,
  getDisplayValue: s,
  label: l,
  placeholder: d = "Selecione...",
  value: u,
  onChange: g,
  onSearchChange: m,
  disabled: P = !1,
  triggerClassName: k,
  noResultsMessage: S,
  clearable: L = !0,
  error: R
}) {
  const [p, h] = me(!1), [C, N] = me(u), [y, I] = me(null), [z, v] = me("");
  Ie(() => {
    N(u);
  }, [u]), Ie(() => {
    if (u && e.length > 0) {
      const M = e.find((D) => o(D) === u);
      M && I(M);
    }
  }, [u, e, o]);
  const V = de(
    (M) => {
      const D = L && M === C ? "" : M;
      u && N(D), I(
        e.find((_) => o(_) === D) || null
      ), g(D), h(!1);
    },
    [C, g, L, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ r(vn, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(xt, { open: p, onOpenChange: h, children: [
      /* @__PURE__ */ r(bt, { asChild: !0, children: /* @__PURE__ */ c(
        ce,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": p,
          className: a(
            "justify-between w-full hover:bg-input bg-input font-normal",
            P && "opacity-50 cursor-not-allowed",
            !u && "text-muted-foreground",
            k
          ),
          disabled: P,
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: u && y ? s(y) : d }),
            /* @__PURE__ */ r(Wr, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ r(st, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Wt, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ r(
            fn,
            {
              placeholder: "Buscar",
              value: z,
              onValueChange: (M) => {
                v(M), m(M);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ r("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ r(ft, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(pn, { children: [
          t && e.length === 0 && /* @__PURE__ */ r(Gs, {}),
          !t && e.length === 0 && /* @__PURE__ */ r(gn, { children: /* @__PURE__ */ r("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: S ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ r(Ht, { children: e.map((M) => /* @__PURE__ */ c(
            tt,
            {
              value: o(M),
              onSelect: V,
              children: [
                /* @__PURE__ */ r(
                  Ot,
                  {
                    className: a(
                      "mr-2 size-4 shrink-0",
                      C === o(M) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ r("div", { className: "w-0 flex-1", children: n(M) })
              ]
            },
            o(M)
          )) })
        ] })
      ] }) })
    ] }),
    !!R && /* @__PURE__ */ r("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: R })
  ] });
}
function Gs() {
  return /* @__PURE__ */ r(Ht, { children: [1, 2, 3].map((e) => /* @__PURE__ */ r(tt, { disabled: !0, className: "p-0", children: /* @__PURE__ */ r(Lo, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const wc = ({
  name: e,
  label: t,
  disabled: n,
  isLoading: o,
  options: s,
  placeholder: l = "Selecione",
  onSearchChange: d,
  getDisplayValue: u,
  getOptionValue: g,
  renderOption: m
}) => {
  const { control: P } = $e();
  return /* @__PURE__ */ r(
    it,
    {
      name: e,
      control: P,
      render: ({ field: k }) => /* @__PURE__ */ c(qe, { children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(
          Us,
          {
            options: s,
            value: k.value,
            placeholder: l,
            onSearchChange: d,
            getDisplayValue: u,
            getOptionValue: g,
            renderOption: m,
            onChange: (S) => k.onChange(S),
            isLoading: o,
            disabled: n
          }
        ),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
}, Xs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ht.Root,
  {
    ref: n,
    className: a(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Xs.displayName = ht.Root.displayName;
const Ys = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ht.Image,
  {
    ref: n,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
Ys.displayName = ht.Image.displayName;
const Qs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ht.Fallback,
  {
    ref: n,
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Qs.displayName = ht.Fallback.displayName;
const Js = Ee(
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
function jn({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ r("div", { className: a(Js({ variant: t }), e), ...n });
}
const Zs = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ r("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Zs.displayName = "Breadcrumb";
const ei = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "ol",
  {
    ref: n,
    className: a(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
ei.displayName = "BreadcrumbList";
const ti = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "li",
  {
    ref: n,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
ti.displayName = "BreadcrumbItem";
const ni = i.forwardRef(({ asChild: e, className: t, ...n }, o) => /* @__PURE__ */ r(
  e ? Jr : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...n
  }
));
ni.displayName = "BreadcrumbLink";
const ri = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: a("font-normal text-foreground", e),
    ...t
  }
));
ri.displayName = "BreadcrumbPage";
const oi = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ r(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: a("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ r(Vt, {})
  }
);
oi.displayName = "BreadcrumbSeparator";
const ai = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(Hr, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More" })
    ]
  }
);
ai.displayName = "BreadcrumbElipssis";
const si = {
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
}, ot = Ee(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: si,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ce = i.forwardRef(({ className: e, variant: t, size: n, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ r(Ze, { children: s ? /* @__PURE__ */ r(
  vs,
  {
    className: a(ot({ variant: t, size: n, className: e })),
    ref: d,
    to: s,
    ...l
  }
) : /* @__PURE__ */ r(
  "button",
  {
    className: a(ot({ variant: t, size: n, className: e })),
    ref: d,
    disabled: o,
    ...l
  }
) }));
ce.displayName = "Button";
const ii = "(##) ####-####", li = "(##) #####-####", di = "#####-###", ci = "###.###.###-##", ui = "##.###.###/####-##", mi = "###########", fi = "##.###.###-#", pi = "AAA#A##", gi = "###########", hi = "##############", xo = (e, t) => {
  let n = "", o = 0;
  for (let s = 0; s < t.length; s++) {
    const l = e[o];
    if (l === void 0)
      break;
    switch (t[s]) {
      case "#":
        if (!/\d/.test(l))
          return n;
        n += l, o++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(l))
          return n;
        n += l, o++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(l) && (n += e[o]), o++;
        break;
      default:
        n += t[s], t[s] === l && o++;
    }
  }
  return n;
}, Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: li,
  CNH_MASK: mi,
  CNPJ_MASK: ui,
  CPF_MASK: ci,
  PHONE_MASK: ii,
  PLATE_MASK: pi,
  RENAVAM_MASK: gi,
  RG_MASK: fi,
  RNTRC_MASK: hi,
  ZIP_CODE_MASK: di,
  formatMask: xo
}, Symbol.toStringTag, { value: "Module" })), Cc = [
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
function _n(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function zt(e) {
  return (t, n) => {
    const o = n?.context ? String(n.context) : "standalone";
    let s;
    if (o === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, u = n?.width ? String(n.width) : d;
      s = e.formattingValues[u] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, u = n?.width ? String(n.width) : e.defaultWidth;
      s = e.values[u] || e.values[d];
    }
    const l = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[l];
  };
}
function Mt(e) {
  return (t, n = {}) => {
    const o = n.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], l = t.match(s);
    if (!l)
      return null;
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(u) ? bi(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      xi(u, (k) => k.test(d))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(g) : g, m = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(m)
    ) : m;
    const P = t.slice(d.length);
    return { value: m, rest: P };
  };
}
function xi(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function bi(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function yi(e) {
  return (t, n = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const s = o[0], l = t.match(e.parsePattern);
    if (!l) return null;
    let d = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    d = n.valueCallback ? n.valueCallback(d) : d;
    const u = t.slice(s.length);
    return { value: d, rest: u };
  };
}
const vi = {
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
}, wi = (e, t, n) => {
  let o;
  const s = vi[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + o : "há " + o : o;
}, Ni = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, Ci = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Si = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ri = {
  date: _n({
    formats: Ni,
    defaultWidth: "full"
  }),
  time: _n({
    formats: Ci,
    defaultWidth: "full"
  }),
  dateTime: _n({
    formats: Si,
    defaultWidth: "full"
  })
}, ki = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Pi = (e, t, n, o) => {
  const s = ki[e];
  return typeof s == "function" ? s(t) : s;
}, zi = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, Mi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Ti = {
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
}, Ii = {
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
}, Di = {
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
}, _i = {
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
}, Ai = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, Ei = {
  ordinalNumber: Ai,
  era: zt({
    values: zi,
    defaultWidth: "wide"
  }),
  quarter: zt({
    values: Mi,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: zt({
    values: Ti,
    defaultWidth: "wide"
  }),
  day: zt({
    values: Ii,
    defaultWidth: "wide"
  }),
  dayPeriod: zt({
    values: Di,
    defaultWidth: "wide",
    formattingValues: _i,
    defaultFormattingWidth: "wide"
  })
}, Li = /^(\d+)[ºªo]?/i, Fi = /\d+/i, Oi = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Vi = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, ji = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Wi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Hi = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Bi = {
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
}, $i = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, qi = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Ki = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Ui = {
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
}, Gi = {
  ordinalNumber: yi({
    matchPattern: Li,
    parsePattern: Fi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Mt({
    matchPatterns: Oi,
    defaultMatchWidth: "wide",
    parsePatterns: Vi,
    defaultParseWidth: "any"
  }),
  quarter: Mt({
    matchPatterns: ji,
    defaultMatchWidth: "wide",
    parsePatterns: Wi,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Mt({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Bi,
    defaultParseWidth: "any"
  }),
  day: Mt({
    matchPatterns: $i,
    defaultMatchWidth: "wide",
    parsePatterns: qi,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mt({
    matchPatterns: Ki,
    defaultMatchWidth: "any",
    parsePatterns: Ui,
    defaultParseWidth: "any"
  })
}, bo = {
  code: "pt-BR",
  formatDistance: wi,
  formatLong: Ri,
  formatRelative: Pi,
  localize: Ei,
  match: Gi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function yo({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = bo,
  formatters: d,
  components: u,
  startMonth: g,
  endMonth: m,
  timeZone: P = "America/Sao_Paulo",
  ...k
}) {
  const S = new Te(/* @__PURE__ */ new Date(), P), L = new Te(S.getFullYear() - 100, 0, 1, P), R = new Te(S.getFullYear() + 10, 11, 31, P), p = Zr();
  return /* @__PURE__ */ r(
    ws,
    {
      showOutsideDays: n,
      timeZone: P,
      className: a(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      startMonth: g ?? L,
      endMonth: m ?? R,
      locale: l,
      formatters: {
        formatMonthDropdown: (h) => h.toLocaleString(l?.code, { month: "short" }),
        ...d
      },
      classNames: {
        root: a("w-fit", p.root),
        months: a(
          "flex gap-4 flex-col md:flex-row relative",
          p.months
        ),
        month: a("flex flex-col w-full gap-4", p.month),
        nav: a(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          p.nav
        ),
        button_previous: a(
          ot({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          p.button_previous
        ),
        button_next: a(
          ot({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          p.button_next
        ),
        month_caption: a(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          p.month_caption
        ),
        dropdowns: a(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          p.dropdowns
        ),
        dropdown_root: a(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          p.dropdown_root
        ),
        dropdown: a(
          "absolute bg-popover inset-0 opacity-0",
          p.dropdown
        ),
        caption_label: a(
          "select-none font-medium",
          o === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          p.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: a("flex", p.weekdays),
        weekday: a(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          p.weekday
        ),
        week: a("flex w-full mt-2", p.week),
        week_number_header: a(
          "select-none w-(--cell-size)",
          p.week_number_header
        ),
        week_number: a(
          "text-[0.8rem] select-none text-muted-foreground",
          p.week_number
        ),
        day: a(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          k.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          p.day
        ),
        range_start: a(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          p.range_start
        ),
        range_middle: a("rounded-none", p.range_middle),
        range_end: a(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          p.range_end
        ),
        today: a(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          p.today
        ),
        outside: a(
          "text-muted-foreground aria-selected:text-muted-foreground",
          p.outside
        ),
        disabled: a(
          "text-muted-foreground opacity-50",
          p.disabled
        ),
        hidden: a("invisible", p.hidden),
        ...t
      },
      components: {
        Root: ({ className: h, rootRef: C, ...N }) => /* @__PURE__ */ r(
          "div",
          {
            "data-slot": "calendar",
            ref: C,
            className: a(h),
            ...N
          }
        ),
        Chevron: ({ className: h, orientation: C, ...N }) => C === "left" ? /* @__PURE__ */ r(Ja, { className: a("cn-rtl-flip size-4", h), ...N }) : C === "right" ? /* @__PURE__ */ r(Za, { className: a("cn-rtl-flip size-4", h), ...N }) : /* @__PURE__ */ r(es, { className: a("size-4", h), ...N }),
        DayButton: ({ ...h }) => /* @__PURE__ */ r(Xi, { locale: l, ...h }),
        WeekNumber: ({ children: h, ...C }) => /* @__PURE__ */ r("td", { ...C, children: /* @__PURE__ */ r("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) }),
        ...u
      },
      ...k
    }
  );
}
function Xi({
  className: e,
  day: t,
  modifiers: n,
  locale: o,
  ...s
}) {
  const l = Zr(), d = i.useRef(null);
  return i.useEffect(() => {
    n.focused && d.current?.focus();
  }, [n.focused]), /* @__PURE__ */ r(
    ce,
    {
      ref: d,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(o?.code),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: a(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        l.day,
        e
      ),
      ...s
    }
  );
}
const Yi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
Yi.displayName = "Card";
const Qi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
Qi.displayName = "CardHeader";
const Ji = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "h3",
  {
    ref: n,
    className: a(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ji.displayName = "CardTitle";
const Zi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "p",
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Zi.displayName = "CardDescription";
const el = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { ref: n, className: a("p-4", e), ...t }));
el.displayName = "CardContent";
const tl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
tl.displayName = "CardFooter";
const vo = i.createContext(null);
function mn() {
  const e = i.useContext(vo);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const nl = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [g, m] = Ns(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [P, k] = i.useState(!1), [S, L] = i.useState(!1), R = i.useCallback((N) => {
      N && (k(N.canScrollPrev()), L(N.canScrollNext()));
    }, []), p = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), h = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), C = i.useCallback(
      (N) => {
        N.key === "ArrowLeft" ? (N.preventDefault(), p()) : N.key === "ArrowRight" && (N.preventDefault(), h());
      },
      [p, h]
    );
    return i.useEffect(() => {
      !m || !n || n(m);
    }, [m, n]), i.useEffect(() => {
      if (m)
        return R(m), m.on("reInit", R), m.on("select", R), () => {
          m?.off("select", R);
        };
    }, [m, R]), /* @__PURE__ */ r(
      vo.Provider,
      {
        value: {
          carouselRef: g,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: p,
          scrollNext: h,
          canScrollPrev: P,
          canScrollNext: S
        },
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: u,
            onKeyDownCapture: C,
            className: a("relative", s),
            role: "region",
            "aria-roledescription": "carousel",
            ...d,
            children: l
          }
        )
      }
    );
  }
);
nl.displayName = "Carousel";
const rl = i.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: o, orientation: s } = mn();
  return /* @__PURE__ */ r("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      className: a(
        "flex",
        s === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
rl.displayName = "CarouselContent";
const ol = i.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: o } = mn();
  return /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: a(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
ol.displayName = "CarouselItem";
const al = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = mn();
  return /* @__PURE__ */ c(
    ce,
    {
      ref: s,
      variant: t,
      size: n,
      className: a(
        "absolute  h-8 w-8 rounded-full",
        l === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ r(ts, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
al.displayName = "CarouselPrevious";
const sl = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = mn();
  return /* @__PURE__ */ c(
    ce,
    {
      ref: s,
      variant: t,
      size: n,
      className: a(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ r(ns, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
sl.displayName = "CarouselNext";
const il = { light: "", dark: ".dark" }, wo = i.createContext(null);
function No() {
  const e = i.useContext(wo);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const ll = i.forwardRef(({ id: e, className: t, children: n, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ r(wo.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
    "div",
    {
      "data-chart": u,
      ref: l,
      className: a(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ r(dl, { id: u, config: o }),
        /* @__PURE__ */ r(Kn.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
ll.displayName = "Chart";
const dl = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ r(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(il).map(
          ([o, s]) => `
${s} [data-chart=${e}] {
${n.map(([l, d]) => {
            const u = d.theme?.[o] || d.color;
            return u ? `  --color-${l}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Sc = Kn.Tooltip, cl = i.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: o = "dot",
    hideLabel: s = !1,
    hideIndicator: l = !1,
    label: d,
    labelFormatter: u,
    labelClassName: g,
    formatter: m,
    color: P,
    nameKey: k,
    labelKey: S
  }, L) => {
    const { config: R } = No(), p = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [C] = t;
      if (!C)
        return null;
      const N = `${S || C.dataKey || C.name || "value"}`, y = Wn(R, C, N), I = !S && typeof d == "string" ? R[d]?.label || d : y?.label;
      return u ? /* @__PURE__ */ r("div", { className: a("font-medium", g), children: u(I, t) }) : I ? /* @__PURE__ */ r("div", { className: a("font-medium", g), children: I }) : null;
    }, [
      d,
      u,
      t,
      s,
      g,
      R,
      S
    ]);
    if (!e || !t?.length)
      return null;
    const h = t.length === 1 && o !== "dot";
    return /* @__PURE__ */ c(
      "div",
      {
        ref: L,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          h ? null : p,
          /* @__PURE__ */ r("div", { className: "grid gap-1.5", children: t.map((C, N) => {
            if (!C)
              return null;
            const y = `${k || C.dataKey || C.name || "value"}`, I = Wn(R, C, y), z = P || C.payload.fill || C.color;
            return /* @__PURE__ */ r(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && C?.value !== void 0 && C.name ? m(C.value, C.name, C, N, C.payload) : /* @__PURE__ */ c(Ze, { children: [
                  I?.icon ? /* @__PURE__ */ r(I.icon, {}) : !l && /* @__PURE__ */ r(
                    "div",
                    {
                      className: a(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": h && o === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": z,
                        "--color-border": z
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    "div",
                    {
                      className: a(
                        "flex flex-1 justify-between leading-none",
                        h ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                          h ? p : null,
                          /* @__PURE__ */ r("span", { className: "text-muted-foreground", children: I?.label || C.name })
                        ] }),
                        C.value && /* @__PURE__ */ r("span", { className: "font-mono font-medium tabular-nums text-foreground", children: C.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              C.dataKey
            );
          }) })
        ]
      }
    );
  }
);
cl.displayName = "ChartTooltip";
const Rc = Kn.Legend, ul = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = No();
    return n?.length ? /* @__PURE__ */ r(
      "div",
      {
        ref: l,
        className: a(
          "flex items-center justify-center gap-4",
          o === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((u) => {
          if (!u)
            return null;
          const g = `${s || u.dataKey || "value"}`, m = Wn(d, u, g);
          return /* @__PURE__ */ c(
            "div",
            {
              className: a(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                m?.icon && !t ? /* @__PURE__ */ r(m.icon, {}) : /* @__PURE__ */ r(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: u.color
                    }
                  }
                ),
                m?.label
              ]
            },
            u.value
          );
        })
      }
    ) : null;
  }
);
ul.displayName = "ChartLegend";
function Wn(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = n;
  return n in t && typeof t[n] == "string" ? s = t[n] : o && n in o && typeof o[n] == "string" && (s = o[n]), s in e ? e[s] : e[n];
}
const gt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Fn.Root,
  {
    ref: n,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      Fn.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r(Ot, { className: "size-4 h-full" })
      }
    )
  }
));
gt.displayName = Fn.Root.displayName;
function kc({
  name: e,
  label: t,
  options: n,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: g, setValue: m } = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: g,
      name: e,
      render: ({ field: P }) => /* @__PURE__ */ c(qe, { children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(
          ml,
          {
            placeholder: o,
            searchPlaceholder: s,
            emptyMessage: l,
            options: n,
            selected: P.value,
            onSelect: (k) => m(e, k, { shouldValidate: !0 }),
            disabled: d,
            isLoading: u
          }
        ),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
}
function ml({
  label: e,
  options: t,
  selected: n,
  onSelect: o,
  placeholder: s = "Selecione uma opção",
  searchPlaceholder: l = "Buscar...",
  emptyMessage: d = "Nenhum resultado encontrado.",
  error: u,
  disabled: g = !1,
  isLoading: m = !1
}) {
  const [P, k] = me(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ r(vn, { children: e }),
    /* @__PURE__ */ c(xt, { open: P, onOpenChange: k, children: [
      /* @__PURE__ */ r(bt, { asChild: !0, children: /* @__PURE__ */ c(
        ce,
        {
          variant: "outline",
          disabled: g,
          className: a(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: n ? t.find((S) => S.value === n)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ r(ft, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ r(Wr, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ r(st, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Wt, { children: [
        /* @__PURE__ */ r(fn, { placeholder: l }),
        /* @__PURE__ */ c(pn, { children: [
          /* @__PURE__ */ r(gn, { children: d }),
          /* @__PURE__ */ r(Ht, { children: t.map((S) => /* @__PURE__ */ c(
            tt,
            {
              value: S.label,
              onSelect: () => {
                n === S.value ? o(void 0) : o(S.value), k(!1);
              },
              children: [
                /* @__PURE__ */ r(
                  Ot,
                  {
                    className: a(
                      "mr-2 size-4",
                      n === S.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ r("div", { className: "w-0 flex-1", children: S.label })
              ]
            },
            S.value
          )) })
        ] })
      ] }) })
    ] }),
    !!u && /* @__PURE__ */ r("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: u })
  ] });
}
const Wt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne,
  {
    ref: n,
    className: a(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Wt.displayName = Ne.displayName;
const Pc = ({ children: e, ...t }) => /* @__PURE__ */ r(Io, { ...t, children: /* @__PURE__ */ r(Gn, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r(Wt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), fn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r(Br, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r(
    Ne.Input,
    {
      ref: n,
      className: a(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
fn.displayName = Ne.Input.displayName;
const pn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.List,
  {
    ref: n,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
pn.displayName = Ne.List.displayName;
const gn = i.forwardRef((e, t) => /* @__PURE__ */ r(
  Ne.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
gn.displayName = Ne.Empty.displayName;
const Ht = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.Group,
  {
    ref: n,
    className: a(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Ht.displayName = Ne.Group.displayName;
const Co = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.Separator,
  {
    ref: n,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
Co.displayName = Ne.Separator.displayName;
const tt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.Item,
  {
    ref: n,
    className: a(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
tt.displayName = Ne.Item.displayName;
const fl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: a(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
fl.displayName = "CommandShortcut";
const xt = _t.Root, bt = _t.Trigger, st = i.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, s) => /* @__PURE__ */ r(_t.Portal, { children: /* @__PURE__ */ r(
  _t.Content,
  {
    ref: s,
    align: t,
    sideOffset: n,
    className: a(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
st.displayName = _t.Content.displayName;
function pl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (n += "/"), n += t[o];
  return n;
}
function gl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (n += "/"), o === 8 && (n += " - "), (o === 10 || o === 12) && (n += "/"), n += t[o];
  return n;
}
function on(e) {
  if (e.length < 10) return null;
  const t = to(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return no(t) ? t : null;
}
function Ir(e) {
  const t = e.split(" - "), n = on(t[0] ?? "");
  if (!n) return null;
  const o = t[1] ? on(t[1]) : void 0;
  return { from: n, to: o ?? void 0 };
}
function Qt(e) {
  return eo(e, "dd/MM/yyyy");
}
function Jt(e, t) {
  if (!e) return "";
  if (t === "range") {
    const n = e;
    return n.from ? n.to ? `${Qt(n.from)} - ${Qt(n.to)}` : Qt(n.from) : "";
  }
  return Qt(e);
}
function Dr(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function hl({
  value: e,
  onChange: t,
  disabled: n,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [g, m] = i.useState(
    Dr(e)
  ), [P, k] = i.useState(
    Jt(e, s)
  ), [S, L] = i.useState(!1), R = i.useRef(null), p = i.useRef(
    Jt(e, s)
  ), h = i.useRef(!1);
  i.useEffect(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const z = Jt(e, s);
    u(e), k(z), p.current = z;
    const v = Dr(e);
    v && m(v);
  }, [e]);
  function C(z) {
    h.current = !0;
    const v = Jt(z, s);
    u(z), k(v), p.current = v, t?.(z), s !== "range" && L(!1);
  }
  function N(z) {
    const v = z.target.value;
    if (v.replace(/\D/g, "") === "") {
      k(""), p.current = "", h.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const V = z.target.selectionStart ?? v.length, M = v.slice(0, V).replace(/\D/g, "").length, D = s === "range" ? gl(v) : pl(v);
    if (k(D), requestAnimationFrame(() => {
      if (R.current) {
        let _ = 0, X = D.length;
        for (let Q = 0; Q < D.length; Q++)
          if (/\d/.test(D[Q]) && _++, _ === M) {
            X = Q + 1;
            break;
          }
        R.current.setSelectionRange(X, X);
      }
    }), s === "range") {
      const _ = Ir(D);
      _ && (h.current = !0, u(_), p.current = D, _.from && m(_.from), t?.(_));
    } else {
      const _ = on(D);
      _ && (h.current = !0, u(_), m(_), p.current = D, t?.(_));
    }
  }
  function y() {
    !(s === "range" ? Ir(P) !== null : on(P) !== null) && P !== "" && k(p.current);
  }
  const I = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(xt, { open: S, onOpenChange: L, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: a(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          n && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: R,
              value: P,
              onChange: N,
              onBlur: y,
              placeholder: I,
              disabled: n,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ r(bt, { asChild: !0, disabled: n, children: /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: n,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ r(rs, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ r(st, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      yo,
      {
        mode: s,
        selected: d,
        onSelect: C,
        disabled: o,
        month: g,
        onMonthChange: m,
        timeZone: "America/Sao_Paulo",
        ...l
      }
    ) })
  ] });
}
const zc = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(qe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(yt, { children: /* @__PURE__ */ r(
          hl,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
};
function xl(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function bl(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function yl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function hn(e, { max: t, min: n = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = n), s < n && (s = t)) : (s > t && (s = t), s < n && (s = n)), s.toString().padStart(2, "0"));
}
function So(e) {
  return xl(e) ? e : hn(e, { max: 23 });
}
function Ro(e) {
  return bl(e) ? e : hn(e, { min: 1, max: 12 });
}
function an(e) {
  return yl(e) ? e : hn(e, { max: 59 });
}
function Un(e, { min: t, max: n, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, hn(String(s), { min: t, max: n, loop: !0 }));
}
function vl(e, t) {
  return Un(e, { min: 0, max: 23, step: t });
}
function wl(e, t) {
  return Un(e, { min: 1, max: 12, step: t });
}
function _r(e, t) {
  return Un(e, { min: 0, max: 59, step: t });
}
function Nl(e, t) {
  const n = an(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function Cl(e, t) {
  const n = an(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function Sl(e, t) {
  const n = So(t);
  return e.setHours(parseInt(n, 10)), e;
}
function Rl(e, t, n) {
  const o = parseInt(Ro(t), 10), s = zl(o, n);
  return e.setHours(s), e;
}
function Hn(e, t, n, o) {
  switch (n) {
    case "minutes":
      return Nl(e, t);
    case "seconds":
      return Cl(e, t);
    case "hours":
      return Sl(e, t);
    case "12hours":
      return o ? Rl(e, t, o) : e;
    default:
      return e;
  }
}
function kl(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return an(String(e.getMinutes()));
    case "seconds":
      return an(String(e.getSeconds()));
    case "hours":
      return So(String(e.getHours()));
    case "12hours":
      return Ro(String(ko(e.getHours())));
    default:
      return "00";
  }
}
function Pl(e, t, n) {
  switch (n) {
    case "minutes":
      return _r(e, t);
    case "seconds":
      return _r(e, t);
    case "hours":
      return vl(e, t);
    case "12hours":
      return wl(e, t);
    default:
      return "00";
  }
}
function zl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function ko(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Po(e) {
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
function Ml(e) {
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
function Tl(e, t) {
  const n = e.replace(/\D/g, ""), o = Ml(t);
  let s = "";
  for (let l = 0; l < n.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += n[l];
  return s;
}
function Ar(e, t) {
  const n = Po(t);
  if (e.length < n.length) return null;
  const o = to(e.slice(0, n.length), n, new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return no(o) ? o : null;
}
function Tt(e, t) {
  return eo(e, Po(t));
}
const zo = i.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, g = (m) => {
      if (t?.(m), n) {
        const P = new Te(n, "America/Sao_Paulo"), k = ko(n.getHours());
        o?.(
          Hn(
            P,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ r("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Uo,
      {
        defaultValue: e,
        onValueChange: (m) => g(m),
        children: [
          /* @__PURE__ */ r(
            Jn,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ r(Go, {})
            }
          ),
          /* @__PURE__ */ c(Zn, { children: [
            /* @__PURE__ */ r(ln, { value: "AM", children: "AM" }),
            /* @__PURE__ */ r(ln, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
zo.displayName = "TimePeriodSelect";
const en = i.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: n,
    id: o,
    name: s,
    date: l = (() => {
      const p = new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return p.setHours(0, 0, 0, 0), p;
    })(),
    onDateChange: d,
    onChange: u,
    onKeyDown: g,
    picker: m,
    period: P,
    onLeftFocus: k,
    onRightFocus: S,
    ...L
  }, R) => {
    const [p, h] = i.useState(!1), [C, N] = i.useState("0");
    i.useEffect(() => {
      if (p) {
        const v = setTimeout(() => {
          h(!1);
        }, 2e3);
        return () => clearTimeout(v);
      }
    }, [p]);
    const y = i.useMemo(() => kl(l, m), [l, m]), I = (v) => m === "12hours" && p && y.slice(1, 2) === "1" && C === "0" ? `0${v}` : p ? y.slice(1, 2) + v : `0${v}`, z = (v) => {
      if (v.key !== "Tab") {
        if (v.preventDefault(), v.key === "ArrowRight" && S?.(), v.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(v.key)) {
          const V = v.key === "ArrowUp" ? 1 : -1, M = Pl(y, V, m);
          p && h(!1);
          const D = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Hn(D, M, m, P));
        }
        if (v.key >= "0" && v.key <= "9") {
          m === "12hours" && N(v.key);
          const V = I(v.key);
          p && S?.(), h((D) => !D);
          const M = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Hn(M, V, m, P));
        }
      }
    };
    return /* @__PURE__ */ r(
      bn,
      {
        ref: R,
        id: o || m,
        name: s || m,
        className: a(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: n || y,
        onChange: (v) => {
          v.preventDefault(), u?.(v);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (v) => {
          g?.(v), z(v);
        },
        ...L
      }
    );
  }
);
en.displayName = "TimePickerInput";
const Mo = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), g = i.useRef(null), [m, P] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return jr(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: g.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ r("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ r(os, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ r(
        en,
        {
          picker: n === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: d,
          period: m,
          onRightFocus: () => l?.current?.focus()
        }
      ),
      (o === "minute" || o === "second") && /* @__PURE__ */ c(Ze, { children: [
        ":",
        /* @__PURE__ */ r(
          en,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: l,
            onLeftFocus: () => d?.current?.focus(),
            onRightFocus: () => u?.current?.focus()
          }
        )
      ] }),
      o === "second" && /* @__PURE__ */ c(Ze, { children: [
        ":",
        /* @__PURE__ */ r(
          en,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: u,
            onLeftFocus: () => l?.current?.focus(),
            onRightFocus: () => g?.current?.focus()
          }
        )
      ] }),
      n === 12 && /* @__PURE__ */ r("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ r(
        zo,
        {
          period: m,
          setPeriod: P,
          date: e,
          onDateChange: (k) => {
            t?.(k), k && k?.getHours() >= 12 ? P("PM") : P("AM");
          },
          ref: g,
          onLeftFocus: () => u?.current?.focus()
        }
      ) })
    ] });
  }
);
Mo.displayName = "TimePicker";
const To = i.forwardRef(
  ({
    locale: e = bo,
    defaultPopupValue: t = (() => {
      const R = new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return R.setHours(0, 0, 0, 0), R;
    })(),
    value: n,
    onChange: o,
    hourCycle: s = 24,
    yearRange: l = 50,
    disabled: d = !1,
    displayFormat: u,
    granularity: g = "minute",
    placeholder: m = "dd/mm/aaaa - hh:mm",
    className: P,
    disabledDates: k,
    ...S
  }, L) => {
    const [R, p] = i.useState(n ?? t), h = ze(null), C = ze(null), [N, y] = i.useState(n), [I, z] = i.useState(!1), [v, V] = i.useState(
      n ? Tt(n, g) : ""
    ), M = ze(!1), D = ze(
      n ? Tt(n, g) : ""
    ), _ = (w) => {
      if (!w)
        return;
      if (!t) {
        w.setHours(
          R?.getHours() ?? 0,
          R?.getMinutes() ?? 0,
          R?.getSeconds() ?? 0
        ), o?.(w), p(w);
        return;
      }
      const K = (w.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), fe = Cs(t, {
        days: Math.ceil(K)
      });
      fe.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(fe), p(fe);
    };
    Ie(() => {
      if (M.current) {
        M.current = !1;
        return;
      }
      const w = n ? Tt(n, g) : "";
      n ? (y(n), p(n)) : y(void 0), V(w), D.current = w;
    }, [n, g]);
    const X = (w) => {
      if (!w)
        return;
      M.current = !0;
      const j = Tt(w, g);
      o?.(w), p(w), y(w), V(j), D.current = j;
    };
    jr(
      L,
      () => ({
        ...h.current,
        value: N
      }),
      [N]
    );
    function Q(w) {
      const j = w.target.value;
      if (j.replace(/\D/g, "") === "") {
        V(""), D.current = "", M.current = !0, y(void 0), o?.(void 0);
        return;
      }
      const K = w.target.selectionStart ?? j.length, fe = j.slice(0, K).replace(/\D/g, "").length, ke = Tl(j, g);
      V(ke), requestAnimationFrame(() => {
        if (C.current) {
          let xe = 0, Le = ke.length;
          for (let Fe = 0; Fe < ke.length; Fe++)
            if (/\d/.test(ke[Fe]) && xe++, xe === fe) {
              Le = Fe + 1;
              break;
            }
          C.current.setSelectionRange(Le, Le);
        }
      });
      const De = Ar(ke, g);
      De && (M.current = !0, D.current = ke, o?.(De), y(De), p(De));
    }
    function ie() {
      !(Ar(v, g) !== null) && v !== "" && V(D.current);
    }
    return /* @__PURE__ */ c(xt, { open: I, onOpenChange: z, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: a(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            d && "cursor-not-allowed opacity-50",
            P
          ),
          children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: C,
                value: v,
                onChange: Q,
                onBlur: ie,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ r(bt, { asChild: !0, disabled: d, children: /* @__PURE__ */ r(
              "button",
              {
                ref: h,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ r(as, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(st, { className: "w-auto p-0", children: [
        /* @__PURE__ */ r(
          yo,
          {
            selected: N,
            onSelect: (w) => {
              w && (w.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), X(w));
            },
            onMonthChange: _,
            month: N ?? R,
            locale: e,
            disabled: k,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...S,
            mode: "single"
          }
        ),
        g !== "day" && /* @__PURE__ */ r("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ r(
          Mo,
          {
            onChange: (w) => {
              if (M.current = !0, o?.(w), y(w), w) {
                p(w);
                const j = Tt(w, g);
                V(j), D.current = j;
              }
            },
            date: R,
            hourCycle: s,
            granularity: g
          }
        ) })
      ] })
    ] });
  }
);
To.displayName = "DateTimePicker";
const Mc = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(qe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(yt, { children: /* @__PURE__ */ r(
          To,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
}, Io = G.Root, Il = G.Trigger, Dl = G.Portal, Tc = G.Close, Do = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Overlay,
  {
    ref: n,
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Do.displayName = G.Overlay.displayName;
const Gn = i.forwardRef(({ className: e, onClose: t, ...n }, o) => /* @__PURE__ */ c(Dl, { children: [
  /* @__PURE__ */ r(Do, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    G.Content,
    {
      ref: o,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ r(
          G.Close,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ c("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ r(jt, { className: "h-4 w-4" }),
              /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Gn.displayName = G.Content.displayName;
const _o = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
_o.displayName = "DialogHeader";
const _l = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
_l.displayName = "DialogFooter";
const Ao = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Title,
  {
    ref: n,
    className: a(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ao.displayName = G.Title.displayName;
const Eo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Eo.displayName = G.Description.displayName;
const Ic = Y.Root, Dc = Y.Trigger, _c = Y.Group, Ac = Y.Portal, Ec = Y.Sub, Lc = Y.RadioGroup, Al = i.forwardRef(({ className: e, inset: t, children: n, ...o }, s) => /* @__PURE__ */ c(
  Y.SubTrigger,
  {
    ref: s,
    className: a(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ r(Vt, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Al.displayName = Y.SubTrigger.displayName;
const El = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Y.SubContent,
  {
    ref: n,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
El.displayName = Y.SubContent.displayName;
const Ll = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(Y.Portal, { children: /* @__PURE__ */ r(
  Y.Content,
  {
    ref: o,
    sideOffset: t,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Ll.displayName = Y.Content.displayName;
const Fl = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
  Y.Item,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Fl.displayName = Y.Item.displayName;
const Ol = i.forwardRef(({ className: e, children: t, checked: n, ...o }, s) => /* @__PURE__ */ c(
  Y.CheckboxItem,
  {
    ref: s,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Y.ItemIndicator, { children: /* @__PURE__ */ r(Ot, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ol.displayName = Y.CheckboxItem.displayName;
const Vl = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Y.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Y.ItemIndicator, { children: /* @__PURE__ */ r($r, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Vl.displayName = Y.RadioItem.displayName;
const jl = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
  Y.Label,
  {
    ref: o,
    className: a(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
jl.displayName = Y.Label.displayName;
const Wl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Y.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Wl.displayName = Y.Separator.displayName;
const Hl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: a("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Hl.displayName = "DropdownMenuShortcut";
function Lo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: a("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Bl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ r(
  "table",
  {
    ref: n,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Bl.displayName = "Table";
const Fo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "thead",
  {
    ref: n,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Fo.displayName = "TableHeader";
const Oo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "tbody",
  {
    ref: n,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Oo.displayName = "TableBody";
const Vo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "tfoot",
  {
    ref: n,
    className: a(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
Vo.displayName = "TableFooter";
const Be = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "tr",
  {
    ref: n,
    className: a(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Be.displayName = "TableRow";
const jo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "th",
  {
    ref: n,
    className: a(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
jo.displayName = "TableHead";
const Je = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "td",
  {
    ref: n,
    className: a(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Je.displayName = "TableCell";
const $l = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "caption",
  {
    ref: n,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
$l.displayName = "TableCaption";
const ql = pt.Provider, Xn = pt.Root, Yn = pt.Trigger, xn = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(pt.Portal, { children: /* @__PURE__ */ r(
  pt.Content,
  {
    ref: o,
    sideOffset: t,
    className: a(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
xn.displayName = pt.Content.displayName;
const bn = Ft.forwardRef(({ className: e, type: t, ...n }, o) => t === "textarea" ? /* @__PURE__ */ r(
  "textarea",
  {
    rows: 1,
    ref: o,
    className: a(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...n
  }
) : /* @__PURE__ */ r(
  "input",
  {
    ref: o,
    type: t,
    className: a(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      e
    ),
    ...n
  }
)), Bt = {
  totalRecords: "Total de registros:",
  hiddenColumnSingular: "coluna oculta",
  hiddenColumnPlural: "colunas ocultas",
  columnsButton: "Colunas",
  customizeColumnsTitle: "Personalizar Colunas",
  showAllColumns: "Mostrar todas",
  resetToDefault: "Padrão",
  resetToDefaultTooltip: "Restaurar padrão",
  helpButtonTooltip: "Dicas e atalhos da tabela",
  helpModalTitle: "Dicas da tabela",
  helpModalDescription: "Resumo rápido dos atalhos e recursos disponíveis.",
  searchColumnsPlaceholder: "Buscar coluna...",
  noColumnsFound: "Nenhuma coluna encontrada.",
  columnManagerFooterHint: "Arraste para mover • Use o pin para fixar",
  densityLabel: "Densidade:",
  densityUltraCompact: "Ultra compacta",
  densityCompact: "Compacta",
  densityComfortable: "Confortável",
  pinLeft: "Fixar à esquerda",
  pinRight: "Fixar à direita",
  unpin: "Desafixar coluna",
  pinnedLeftBadge: "Esquerda",
  pinnedRightBadge: "Direita",
  emptyMessage: "Nenhum resultado encontrado.",
  loadingMessage: "Carregando...",
  selectedItemsCount: (e) => `${e} ${e === 1 ? "item selecionado" : "itens selecionados"}`,
  clearSelection: "Limpar seleção",
  selectAllRows: "Selecionar todas as linhas",
  selectRow: (e) => `Selecionar linha ${e}`,
  expandRow: "Expandir linha",
  collapseRow: "Recolher linha",
  scrollLeft: "Rolar colunas para a esquerda",
  scrollRight: "Rolar colunas para a direita",
  resetColumnWidth: "Restaurar largura"
}, Er = {
  actions: "Ações",
  action: "Ações",
  acoes: "Ações",
  select: "Seleção",
  selection: "Seleção",
  __select__: "Seleção",
  expand: "Expandir",
  __expand__: "Expandir",
  status: "Status",
  createdAt: "Criado em",
  updatedAt: "Atualizado em"
};
function Kl(e) {
  if (e && e.trim())
    return e.trim();
  if (typeof window > "u")
    return "default-user";
  try {
    const t = window.localStorage.getItem("session") || window.localStorage.getItem("auth-storage") || window.sessionStorage.getItem("session");
    if (t) {
      const n = JSON.parse(t), o = n?.user?.uuid || n?.payload?.user?.uuid || n?.state?.user?.uuid || n?.user?.id || n?.state?.user?.id;
      if (o) return String(o);
    }
  } catch {
  }
  return "default-user";
}
function It(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function Et(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function yn(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function Me(e) {
  return Et(e) || yn(e);
}
function Wo(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function Lt(e, t, n, o, s) {
  return !!(t.meta?.isActions || o && Wo(e) || s && n);
}
function An(e) {
  if (e == null) return;
  if (typeof e == "number")
    return Number.isFinite(e) && e > 0 ? e : void 0;
  const t = String(e).trim();
  if (!t) return;
  if (/^\d+(?:\.\d+)?$/.test(t)) {
    const s = parseFloat(t);
    return Number.isFinite(s) && s > 0 ? s : void 0;
  }
  const n = t.match(/^(\d+(?:\.\d+)?)px$/);
  if (n)
    return parseFloat(n[1]);
  const o = t.match(/^(\d+(?:\.\d+)?)rem$/);
  if (o)
    return parseFloat(o[1]) * 16;
}
function He(e, t = "w") {
  if (!e) return;
  const n = new RegExp(
    `(?:^|\\s)!?${t}-\\[(\\d+(?:\\.\\d+)?)px\\]`
  ), o = e.match(n);
  if (o)
    return parseFloat(o[1]);
  const s = new RegExp(
    `(?:^|\\s)!?${t}-\\[(\\d+(?:\\.\\d+)?)rem\\]`
  ), l = e.match(s);
  if (l)
    return parseFloat(l[1]) * 16;
  const d = new RegExp(
    `(?:^|\\s)!?${t}-(\\d+(?:\\.\\d+)?)(?:\\s|$)`
  ), u = e.match(d);
  if (u)
    return parseFloat(u[1]) * 4;
}
function Bn(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(Bn).filter(Boolean).join(" ").trim() : Xa(e) ? Bn(e.props.children) : "";
}
function sn(e) {
  const t = e.columnDef.meta;
  if (t?.label)
    return t.label;
  const n = e.columnDef.header;
  if (typeof n == "string" && n.trim())
    return n.trim();
  if (typeof n == "function")
    try {
      const o = n({
        column: e,
        header: {
          id: e.id,
          index: 0,
          depth: 1,
          column: e,
          isPlaceholder: !1,
          colSpan: 1,
          rowSpan: 1,
          subHeaders: [],
          getContext: () => ({
            column: e,
            header: null,
            table: null
          }),
          getLeafHeaders: () => [],
          getResizeHandler: () => () => {
          },
          getSize: () => e.getSize(),
          getStart: () => 0,
          headerGroup: null
        },
        table: null
      }), s = Bn(o);
      if (s)
        return s;
    } catch {
    }
  return Er[e.id] ? Er[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function Ul(e, t) {
  const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    n.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = It(l, d), g = l.meta, m = d === e.length - 1;
    if (Me(u)) {
      n.add(u);
      return;
    }
    if (g?.defaultPinned === "left") {
      n.add(u);
      return;
    }
    (g?.defaultPinned === "right" || Lt(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(n).sort((l, d) => {
      const u = (g) => Et(g) ? 0 : yn(g) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function Lr(e, t) {
  if (!e || e.length === 0)
    return t;
  const n = new Set(t), o = e.filter((d) => n.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (Et(d))
        l.unshift(d);
      else if (yn(d)) {
        const g = l.findIndex(Et);
        l.splice(g + 1, 0, d);
      } else Wo(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function ut(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((n, o) => n === t[o]);
}
const Fr = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", Gl = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ r(ss, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c(Ze, { children: [
      "Segure ",
      /* @__PURE__ */ r("kbd", { className: Fr, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ r(qr, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ r(dn, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ r(is, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ r(Kr, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c(Ze, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ r("kbd", { className: Fr, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ r($n, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ r(ls, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c(Ze, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ r(cn, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Xl({
  labels: e = Bt
}) {
  return /* @__PURE__ */ c(Io, { children: [
    /* @__PURE__ */ c(Xn, { children: [
      /* @__PURE__ */ r(Yn, { asChild: !0, children: /* @__PURE__ */ r(Il, { asChild: !0, children: /* @__PURE__ */ r(
        ce,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ r(zr, {})
        }
      ) }) }),
      /* @__PURE__ */ r(xn, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(Gn, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(_o, { children: [
        /* @__PURE__ */ c(Ao, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ r(zr, { className: "size-4 text-primary" }),
          e.helpModalTitle
        ] }),
        /* @__PURE__ */ r(Eo, { children: e.helpModalDescription })
      ] }),
      /* @__PURE__ */ r("div", { className: "divide-y divide-border rounded-md border border-border bg-card", children: Gl.map((t) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3 p-2.5", children: [
        /* @__PURE__ */ r("div", { className: "size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0", children: t.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ r("p", { className: "text-xs font-semibold text-foreground leading-tight", children: t.title }),
          /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground leading-relaxed", children: t.description })
        ] })
      ] }, t.id)) })
    ] })
  ] });
}
function Yl({
  column: e,
  label: t,
  isActionsCol: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  labels: d
}) {
  const u = e.columnDef.meta, m = e.getIsPinned() === "left", P = o && !n && u?.enableReordering !== !1, k = s && !n && e.getCanPin() && u?.enablePinning !== !1, S = l && !n && e.getCanHide(), {
    attributes: L,
    listeners: R,
    setNodeRef: p,
    transform: h,
    transition: C,
    isDragging: N
  } = uo({
    id: e.id,
    disabled: !P,
    animateLayoutChanges: () => !1
  }), y = {
    transform: mo.Transform.toString(h),
    transition: C
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: p,
      style: y,
      className: a(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        N ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative" : "hover:bg-muted/70",
        !e.getIsVisible() && "opacity-60"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          P ? /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              ...L,
              ...R,
              className: "text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5",
              title: d.columnManagerFooterHint,
              children: /* @__PURE__ */ r(Yr, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ r("span", { className: "w-4 shrink-0" }),
          S ? /* @__PURE__ */ r(
            gt,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (I) => e.toggleVisibility(!!I),
              "aria-label": t
            }
          ) : /* @__PURE__ */ r(gt, { checked: !0, disabled: !0, "aria-label": t }),
          /* @__PURE__ */ r(
            "span",
            {
              className: a(
                "truncate font-medium text-foreground cursor-pointer",
                !e.getIsVisible() && "line-through text-muted-foreground"
              ),
              title: t,
              onClick: () => {
                S && e.toggleVisibility(!e.getIsVisible());
              },
              children: t
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "flex items-center gap-0.5 shrink-0", children: n ? /* @__PURE__ */ c(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-xs bg-muted text-muted-foreground font-medium",
            title: d.pinnedRightBadge,
            children: [
              /* @__PURE__ */ r(Qr, { className: "size-2.5" }),
              d.pinnedRightBadge
            ]
          }
        ) : k ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: () => e.pin(m ? !1 : "left"),
            title: m ? d.unpin : d.pinLeft,
            "aria-label": m ? d.unpin : d.pinLeft,
            className: a(
              "inline-flex items-center justify-center p-1 rounded-xs transition-colors cursor-pointer",
              m ? "bg-primary/15 text-primary hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
            ),
            children: /* @__PURE__ */ r(
              dn,
              {
                className: a(
                  "size-3.5 transition-transform",
                  m && "fill-current -rotate-45"
                )
              }
            )
          }
        ) : null })
      ]
    }
  );
}
function Ql({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: g = Bt
}) {
  const [m, P] = me(""), k = ro(
    rn(oo, {
      activationConstraint: { distance: 4 }
    }),
    rn(ao, {
      coordinateGetter: lo
    })
  ), S = e.getAllLeafColumns(), L = S.filter(
    (N) => !Me(N.id)
  ), R = m.trim().toLowerCase(), p = R ? L.filter(
    (N) => sn(N).toLowerCase().includes(R)
  ) : L, h = L.filter(
    (N) => !N.getIsVisible()
  ).length, C = (N) => {
    const { active: y, over: I } = N;
    if (!I || y.id === I.id) return;
    const z = String(y.id), v = String(I.id), V = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : S.map((K) => K.id), M = V.indexOf(z), D = V.indexOf(v);
    M !== -1 && D !== -1 && e.setColumnOrder(mt(V, M, D));
    const _ = e.getState().columnPinning.left ?? [], X = _.indexOf(z), Q = _.indexOf(v);
    X !== -1 && Q !== -1 && e.setColumnPinning((K) => ({
      ...K,
      left: mt(K.left ?? [], X, Q)
    }));
    const ie = e.getState().columnPinning.right ?? [], w = ie.indexOf(z), j = ie.indexOf(v);
    w !== -1 && j !== -1 && e.setColumnPinning((K) => ({
      ...K,
      right: mt(K.right ?? [], w, j)
    }));
  };
  return /* @__PURE__ */ c(xt, { children: [
    /* @__PURE__ */ r(bt, { asChild: !0, children: /* @__PURE__ */ c(
      ce,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: g.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ r(qr, {}),
          /* @__PURE__ */ r("span", { children: g.columnsButton }),
          h > 0 && /* @__PURE__ */ c(
            jn,
            {
              variant: "secondary",
              className: "ml-1 px-1.5 py-0 text-xs font-semibold",
              children: [
                L.length - h,
                "/",
                L.length
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c(st, { align: "end", className: "w-76 p-0 shadow-lg", children: [
      /* @__PURE__ */ c("div", { className: "p-2.5 border-b space-y-2 bg-muted/30", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r("span", { className: "text-xs font-semibold text-foreground", children: g.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            h > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => e.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ r(qn, { className: "size-3" }),
                  g.showAllColumns
                ]
              }
            ),
            d && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: u,
                className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ r(cn, { className: "size-3" }),
                  g.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        L.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ r(Br, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ r(
            bn,
            {
              value: m,
              onChange: (N) => P(N.target.value),
              placeholder: g.searchColumnsPlaceholder,
              className: "h-7 pl-8 pr-7 text-xs bg-background"
            }
          ),
          m && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => P(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
              children: /* @__PURE__ */ r(jt, { className: "size-3" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: p.length === 0 ? /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground text-center py-4", children: g.noColumnsFound }) : /* @__PURE__ */ r(
        so,
        {
          sensors: k,
          collisionDetection: io,
          modifiers: [Ss],
          onDragEnd: C,
          children: /* @__PURE__ */ r(
            co,
            {
              items: p.map((N) => N.id),
              strategy: ks,
              children: p.map((N, y) => {
                const I = y === S.length - 1, z = Lt(
                  N.id,
                  N.columnDef,
                  I,
                  t,
                  n
                );
                return /* @__PURE__ */ r(
                  Yl,
                  {
                    column: N,
                    label: sn(N),
                    isActionsCol: z,
                    enableColumnOrdering: o && !m.trim(),
                    enableColumnPinning: s,
                    enableColumnVisibility: l,
                    labels: g
                  },
                  N.id
                );
              })
            }
          )
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "px-3 py-1.5 border-t bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground", children: /* @__PURE__ */ r("span", { children: g.columnManagerFooterHint }) })
    ] })
  ] });
}
function Jl({
  table: e,
  totalRecords: t,
  showTotalRecords: n = !0,
  showDensityToggle: o = !0,
  showHelpButton: s = !0,
  density: l,
  onDensityChange: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: g,
  enableColumnOrdering: m,
  enableColumnPinning: P,
  enableColumnVisibility: k,
  isCustomized: S,
  onReset: L,
  canScrollLeft: R,
  canScrollRight: p,
  onScrollHorizontal: h,
  toolbarLeftContent: C,
  toolbarRightContent: N,
  labels: y = Bt,
  className: I
}) {
  const v = e.getAllLeafColumns().filter(
    (D) => !Me(D.id) && !D.getIsVisible()
  ).length, V = t ?? e.getRowModel().rows.length, M = R || p;
  return /* @__PURE__ */ c(
    "div",
    {
      className: a(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        I
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2 min-w-0", children: [
          n && /* @__PURE__ */ c("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            y.totalRecords,
            " ",
            /* @__PURE__ */ r("strong", { className: "font-semibold text-foreground", children: V.toLocaleString("pt-BR") })
          ] }),
          C,
          v > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => e.toggleAllColumnsVisible(!0),
              title: y.showAllColumns,
              className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ r(qn, { className: "size-3" }),
                v,
                " ",
                v === 1 ? y.hiddenColumnSingular : y.hiddenColumnPlural
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto shrink-0", children: [
          N,
          M && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              ce,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => h("left"),
                title: y.scrollLeft,
                "aria-label": y.scrollLeft,
                children: /* @__PURE__ */ r(Ur, {})
              }
            ),
            /* @__PURE__ */ r(
              ce,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !p,
                onClick: () => h("right"),
                title: y.scrollRight,
                "aria-label": y.scrollRight,
                children: /* @__PURE__ */ r(Vt, {})
              }
            )
          ] }),
          o && /* @__PURE__ */ c(
            "div",
            {
              className: "hidden sm:inline-flex items-center gap-1",
              role: "group",
              "aria-label": y.densityLabel,
              children: [
                /* @__PURE__ */ r(
                  ce,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: y.densityUltraCompact,
                    children: /* @__PURE__ */ r(Gr, {})
                  }
                ),
                /* @__PURE__ */ r(
                  ce,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: y.densityCompact,
                    children: /* @__PURE__ */ r($n, {})
                  }
                ),
                /* @__PURE__ */ r(
                  ce,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: y.densityComfortable,
                    children: /* @__PURE__ */ r(Xr, {})
                  }
                )
              ]
            }
          ),
          (k || m || P) && /* @__PURE__ */ r(
            Ql,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: g,
              enableColumnOrdering: m,
              enableColumnPinning: P,
              enableColumnVisibility: k,
              isCustomized: S,
              onReset: L,
              labels: y
            }
          ),
          S && /* @__PURE__ */ c(Xn, { children: [
            /* @__PURE__ */ r(Yn, { asChild: !0, children: /* @__PURE__ */ r(
              ce,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: L,
                "aria-label": y.resetToDefaultTooltip,
                children: /* @__PURE__ */ r(cn, {})
              }
            ) }),
            /* @__PURE__ */ r(xn, { side: "bottom", children: y.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ r(Xl, { labels: y })
        ] })
      ]
    }
  );
}
function Zl({
  position: e,
  onClose: t,
  table: n,
  density: o,
  onDensityChange: s,
  showDensityToggle: l = !0,
  pinActionsColumnRight: d,
  pinLastColumnRight: u,
  enableColumnPinning: g,
  enableColumnVisibility: m,
  isCustomized: P,
  onReset: k,
  labels: S = Bt
}) {
  const L = ze(null);
  if (Ie(() => {
    if (!e) return;
    const y = (I) => {
      I instanceof KeyboardEvent && I.key !== "Escape" || I instanceof MouseEvent && L.current?.contains(I.target) || t();
    };
    return document.addEventListener("mousedown", y), document.addEventListener("keydown", y), () => {
      document.removeEventListener("mousedown", y), document.removeEventListener("keydown", y);
    };
  }, [e, t]), !e) return null;
  const R = n.getAllLeafColumns(), p = R.filter(
    (y) => !Me(y.id)
  ), h = p.filter(
    (y) => !y.getIsVisible()
  ).length, C = typeof window < "u" ? Math.min(e.x, Math.max(16, window.innerWidth - 272)) : e.x, N = typeof window < "u" ? Math.min(e.y, Math.max(16, window.innerHeight - 380)) : e.y;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: L,
      className: "fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95",
      style: { top: N, left: C },
      children: [
        /* @__PURE__ */ c("div", { className: "px-3 py-2 bg-muted/40 border-b flex items-center justify-between", children: [
          /* @__PURE__ */ r("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: S.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            h > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => n.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer",
                title: S.showAllColumns,
                children: [
                  /* @__PURE__ */ r(qn, { className: "size-3" }),
                  S.showAllColumns
                ]
              }
            ),
            P && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => {
                  k(), t();
                },
                className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer",
                title: S.resetToDefault,
                children: [
                  /* @__PURE__ */ r(cn, { className: "size-3" }),
                  S.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ c("div", { className: "px-3 py-1.5 border-b flex items-center justify-between bg-muted/15", children: [
          /* @__PURE__ */ r("span", { className: "text-[11px] text-muted-foreground", children: S.densityLabel }),
          /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1 rounded-xs border bg-background p-0.5", children: [
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => s("ultra-compact"),
                className: a(
                  "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                  o === "ultra-compact" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                ),
                title: S.densityUltraCompact,
                children: [
                  /* @__PURE__ */ r(Gr, { className: "size-2.5" }),
                  "Ultra"
                ]
              }
            ),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => s("compact"),
                className: a(
                  "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                  o === "compact" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                ),
                title: S.densityCompact,
                children: [
                  /* @__PURE__ */ r($n, { className: "size-2.5" }),
                  "Comp."
                ]
              }
            ),
            /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => s("comfortable"),
                className: a(
                  "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                  o === "comfortable" ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                ),
                title: S.densityComfortable,
                children: [
                  /* @__PURE__ */ r(Xr, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: p.map((y, I) => {
          const z = sn(y), v = y.columnDef.meta, V = I === R.length - 1, M = Lt(
            y.id,
            y.columnDef,
            V,
            d,
            u
          ), _ = y.getIsPinned() === "left", X = m && !M && y.getCanHide(), Q = g && !M && y.getCanPin() && v?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ r(
                    gt,
                    {
                      checked: y.getIsVisible(),
                      disabled: !X,
                      onCheckedChange: (ie) => y.toggleVisibility(!!ie)
                    }
                  ),
                  /* @__PURE__ */ r("span", { className: "truncate text-xs", title: z, children: z })
                ] }),
                M ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ r(Qr, { className: "size-2.5" }),
                  S.pinnedRightBadge
                ] }) : Q ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => y.pin(_ ? !1 : "left"),
                    title: _ ? S.unpin : S.pinLeft,
                    "aria-label": _ ? S.unpin : S.pinLeft,
                    className: a(
                      "p-1 rounded-xs transition-colors cursor-pointer",
                      _ ? "text-primary bg-primary/15 hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    children: /* @__PURE__ */ r(
                      dn,
                      {
                        className: a(
                          "size-3.5 transition-transform",
                          _ && "fill-current -rotate-45"
                        )
                      }
                    )
                  }
                ) : null
              ]
            },
            y.id
          );
        }) })
      ]
    }
  );
}
function ed({
  header: e,
  density: t,
  enableColumnOrdering: n,
  enableColumnPinning: o,
  enableColumnResizing: s,
  isActionsCol: l,
  isSystemLeftCol: d,
  pinnedPosition: u,
  stickyOffset: g,
  isLastLeftPinned: m,
  isFirstRightPinned: P,
  canScrollLeft: k,
  canScrollRight: S,
  labels: L,
  className: R,
  onRegisterHeaderElement: p
}) {
  const { column: h } = e, C = h.columnDef.meta, N = n && !l && !d && C?.enableReordering !== !1, y = o && !l && !d && h.getCanPin() && C?.enablePinning !== !1, I = h.getCanSort(), z = h.getIsSorted(), v = h.getSortIndex(), V = e.getContext().table.getState().sorting.length > 1 && v >= 0, M = u === "left", D = u === "right", _ = M || D, {
    attributes: X,
    listeners: Q,
    setNodeRef: ie,
    transform: w,
    transition: j,
    isDragging: K
  } = uo({
    id: h.id,
    disabled: !N,
    animateLayoutChanges: () => !1
  }), fe = (q) => {
    ie(q), p(h.id, q);
  }, ke = w !== null && (w.x !== 0 || w.y !== 0), De = g ?? 0, xe = h.columnDef, Le = e.getContext().table.getState().columnSizing[h.id] !== void 0, Ve = !!C?.hasExplicitWidth || Le || l || d || _ ? C?.width ?? e.getSize() : void 0, O = xe.minSize ?? C?.minWidth ?? (_ ? e.getSize() : void 0), W = xe.maxSize && xe.maxSize < Number.MAX_SAFE_INTEGER ? xe.maxSize : C?.maxWidth ?? (l ? e.getSize() : void 0), J = l || d || !!C?.isActions || xe.enableResizing === !1 && (xe.size !== void 0 || xe.width !== void 0 || C?.width !== void 0), Pe = typeof Ve == "number" ? `${Ve}px` : Ve, pe = {
    width: Ve,
    minWidth: O,
    maxWidth: W,
    ...J ? { "--flash-col-size": Pe } : {},
    ...ke ? {
      transform: mo.Translate.toString(w),
      transition: j
    } : {},
    ..._ ? {
      backgroundColor: "var(--muted)"
    } : {},
    ...M ? { position: "sticky", left: `${De}px` } : {},
    ...D ? { position: "sticky", right: `${De}px` } : {}
  }, te = ze(!1), U = e.getResizeHandler(), Oe = (q) => {
    q.stopPropagation(), te.current = !0;
    const _e = () => {
      window.setTimeout(() => {
        te.current = !1;
      }, 0), window.removeEventListener("mouseup", _e);
    };
    window.addEventListener("mouseup", _e), U(q);
  }, je = (q) => {
    q.stopPropagation(), te.current = !0;
    const _e = () => {
      window.setTimeout(() => {
        te.current = !1;
      }, 0), window.removeEventListener("touchend", _e), window.removeEventListener("touchcancel", _e);
    };
    window.addEventListener("touchend", _e), window.addEventListener("touchcancel", _e), U(q);
  }, We = (q) => {
    te.current || h.getIsResizing() || I && h.getToggleSortingHandler()?.(q);
  }, vt = (q) => {
    q.stopPropagation(), _ ? h.pin(!1) : h.pin("left");
  }, Ge = sn(h);
  return /* @__PURE__ */ c(
    jo,
    {
      ref: fe,
      style: pe,
      ...N ? X : {},
      ...N ? Q : {},
      onClick: I ? We : void 0,
      className: a(
        J && "flash-table-fixed-cell",
        "group/th select-none whitespace-nowrap align-middle border-b border-border transition-colors font-medium text-muted-foreground",
        d && "[&:has([role=checkbox])]:pr-2",
        _ ? "sticky" : "relative",
        // Density sizing & typography - matched to aiqia-ui TableHead
        t === "ultra-compact" && "h-7 px-2 text-xs",
        t === "compact" && "h-8.5 px-3 text-xs",
        t === "comfortable" && "h-10 px-3 text-sm",
        // Background: 100% opaque bg-muted when pinned so scrolled headers never bleed through
        _ ? "bg-muted z-30" : "bg-muted hover:bg-accent z-10",
        // Interactive cursor
        I && "cursor-pointer hover:text-foreground",
        N && !I && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        K && "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
        // Sticky boundary dividers & scroll shadows
        m && "border-r border-border",
        m && k && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        P && "border-l border-border",
        P && S && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        R,
        C?.headerClassName
      ),
      children: [
        e.isPlaceholder ? null : /* @__PURE__ */ c(
          "div",
          {
            style: O !== void 0 ? { minWidth: `${O}px` } : void 0,
            className: a(
              "flex items-center gap-1.5 w-full min-w-0 overflow-hidden",
              (l || C?.align === "right") && "justify-end",
              (d || C?.align === "center") && "justify-center"
            ),
            children: [
              N && /* @__PURE__ */ r(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: L.columnManagerFooterHint,
                  children: /* @__PURE__ */ r(Yr, { className: "size-3" })
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: a(
                    "flex items-center gap-1 min-w-0",
                    !d && "flex-1",
                    (l || C?.align === "right") && "justify-end",
                    (d || C?.align === "center") && "justify-center"
                  ),
                  children: [
                    /* @__PURE__ */ r(
                      "span",
                      {
                        className: "truncate",
                        title: d ? void 0 : Ge,
                        children: On(h.columnDef.header, e.getContext())
                      }
                    ),
                    C?.headerTooltip && /* @__PURE__ */ c(Xn, { children: [
                      /* @__PURE__ */ r(Yn, { asChild: !0, children: /* @__PURE__ */ r(
                        "span",
                        {
                          onClick: (q) => q.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ r(ds, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ r(xn, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: C.headerTooltip })
                    ] }),
                    I && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      z === "asc" ? /* @__PURE__ */ r(cs, { className: "size-3.5 text-foreground" }) : z === "desc" ? /* @__PURE__ */ r(us, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ r(Kr, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      V && /* @__PURE__ */ r("span", { className: "text-[9px] font-bold text-foreground leading-none", children: v + 1 })
                    ] })
                  ]
                }
              ),
              y && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: vt,
                  onPointerDown: (q) => q.stopPropagation(),
                  title: _ ? L.unpin : L.pinLeft,
                  "aria-label": _ ? L.unpin : L.pinLeft,
                  className: a(
                    "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                    _ ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
                  ),
                  children: /* @__PURE__ */ r(
                    dn,
                    {
                      className: a(
                        "size-3 transition-transform",
                        M && "fill-current -rotate-45",
                        D && "fill-current rotate-45"
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        s && h.getCanResize() && !d && !l && /* @__PURE__ */ r(
          "div",
          {
            onMouseDown: Oe,
            onTouchStart: je,
            onDoubleClick: (q) => {
              q.stopPropagation(), h.resetSize();
            },
            onClick: (q) => q.stopPropagation(),
            onPointerDown: (q) => q.stopPropagation(),
            title: L.resetColumnWidth,
            className: "group/resize absolute right-0 top-0 z-20 flex h-full w-2.5 cursor-col-resize select-none touch-none items-center justify-end",
            children: /* @__PURE__ */ r(
              "span",
              {
                className: a(
                  "h-4/5 w-0.5 rounded-full transition-colors",
                  h.getIsResizing() ? "bg-primary h-full" : "bg-transparent group-hover/th:bg-border group-hover/resize:bg-primary"
                )
              }
            )
          }
        )
      ]
    }
  );
}
function Zt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function td({
  columns: e,
  tableId: t,
  persistState: n,
  storageScope: o,
  storagePrefix: s = "aiqia-ui:flash-table:v1",
  storage: l,
  defaultDensity: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: g,
  defaultPinnedLeft: m,
  defaultPinnedRight: P,
  propColumnVisibility: k,
  onColumnVisibilityChange: S,
  propColumnSizing: L,
  onColumnSizingChange: R,
  propColumnOrder: p,
  onColumnOrderChange: h,
  propColumnPinning: C,
  onColumnPinningChange: N,
  propDensity: y,
  onDensityChange: I
}) {
  const z = we(
    () => e.map((O, W) => It(O, W)),
    [e]
  ), v = we(
    () => Ul(e, {
      pinActionsColumnRight: u,
      pinLastColumnRight: g,
      defaultPinnedLeft: m,
      defaultPinnedRight: P
    }),
    [
      e,
      u,
      g,
      m,
      P
    ]
  ), V = we(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), M = we(() => {
    const O = Kl(o), W = typeof window < "u" ? window.location.pathname : "app", J = t || `${W}::${z.join("|")}`;
    return `${s}:${O}:${J}`;
  }, [t, z, o, s]), D = de(() => {
    const O = v.left ?? [], W = v.right ?? [], J = /* @__PURE__ */ new Set([...O, ...W]), pe = {
      columnOrder: [
        ...O,
        ...z.filter((te) => !J.has(te)),
        ...W
      ],
      columnVisibility: {},
      columnPinning: v,
      columnSizing: {},
      density: d
    };
    if (!n || !V)
      return pe;
    try {
      const te = V.getItem(M);
      if (!te) return pe;
      const U = JSON.parse(te), Oe = new Set(z), je = Lr(
        Array.isArray(U.columnOrder) ? U.columnOrder : [],
        z
      ), We = Array.isArray(U.columnPinning?.left) ? U.columnPinning.left.filter((Xe) => Oe.has(Xe)) : v.left ?? [], vt = Array.isArray(U.columnPinning?.right) ? U.columnPinning.right.filter((Xe) => Oe.has(Xe)) : v.right ?? [], Ge = Array.from(
        /* @__PURE__ */ new Set([
          ...(v.left ?? []).filter(Me),
          ...We
        ])
      ), q = Array.from(
        /* @__PURE__ */ new Set([...vt, ...v.right ?? []])
      ), _e = /* @__PURE__ */ new Set([...Ge, ...q]), Nn = je.filter((Xe) => !_e.has(Xe));
      return {
        columnOrder: [...Ge, ...Nn, ...q],
        columnVisibility: U.columnVisibility && typeof U.columnVisibility == "object" ? U.columnVisibility : {},
        columnPinning: {
          left: Ge,
          right: q
        },
        columnSizing: U.columnSizing && typeof U.columnSizing == "object" ? U.columnSizing : {},
        density: U.density === "ultra-compact" || U.density === "compact" || U.density === "comfortable" ? U.density : d
      };
    } catch {
      return pe;
    }
  }, [
    z,
    v,
    d,
    n,
    V,
    M
  ]), [_, X] = me(D);
  Ie(() => {
    X((O) => {
      const W = Lr(
        O.columnOrder,
        z
      ), J = new Set(z), Pe = Array.from(
        /* @__PURE__ */ new Set([
          ...(O.columnPinning.right ?? []).filter((te) => J.has(te)),
          ...v.right ?? []
        ])
      ), pe = Array.from(
        /* @__PURE__ */ new Set([
          ...(v.left ?? []).filter(Me),
          ...(O.columnPinning.left ?? []).filter((te) => J.has(te))
        ])
      );
      return ut(W, O.columnOrder) && ut(pe, O.columnPinning.left) && ut(Pe, O.columnPinning.right) ? O : {
        ...O,
        columnOrder: W,
        columnPinning: {
          left: pe,
          right: Pe
        }
      };
    });
  }, [z, v]);
  const Q = k ?? _.columnVisibility, ie = L ?? _.columnSizing, w = p ?? _.columnOrder, j = C ?? _.columnPinning, K = y ?? _.density;
  Ie(() => {
    if (!(!n || !V))
      try {
        const O = {
          columnOrder: w,
          columnVisibility: Q,
          columnPinning: j,
          columnSizing: ie,
          density: K
        };
        V.setItem(M, JSON.stringify(O));
      } catch {
      }
  }, [
    n,
    V,
    M,
    w,
    Q,
    j,
    ie,
    K
  ]);
  const fe = de(
    (O) => {
      S?.(O), X((W) => ({
        ...W,
        columnVisibility: Zt(O, W.columnVisibility)
      }));
    },
    [S]
  ), ke = de(
    (O) => {
      R?.(O), X((W) => ({
        ...W,
        columnSizing: Zt(O, W.columnSizing)
      }));
    },
    [R]
  ), De = de(
    (O) => {
      h?.(O), X((W) => ({
        ...W,
        columnOrder: Zt(O, W.columnOrder)
      }));
    },
    [h]
  ), xe = de(
    (O) => {
      N?.(O), X((W) => {
        const J = Zt(O, W.columnPinning), Pe = J.left ?? [], pe = J.right ?? [], te = /* @__PURE__ */ new Set([...Pe, ...pe]), Oe = (W.columnOrder.length > 0 ? W.columnOrder : z).filter((We) => !te.has(We)), je = [...Pe, ...Oe, ...pe];
        return {
          ...W,
          columnPinning: J,
          columnOrder: je
        };
      });
    },
    [N, z]
  ), Le = de(
    (O) => {
      I?.(O), X((W) => ({
        ...W,
        density: O
      }));
    },
    [I]
  ), Fe = we(() => {
    const O = Object.values(Q).some(
      (U) => U === !1
    ), W = !ut(w, z), J = !ut(
      j.left ?? [],
      v.left ?? []
    ), Pe = !ut(
      j.right ?? [],
      v.right ?? []
    ), pe = Object.keys(ie).length > 0;
    return O || W || J || Pe || pe || K !== d;
  }, [
    Q,
    w,
    z,
    j,
    v,
    ie,
    K,
    d
  ]), Ve = de(() => {
    if (X({
      columnOrder: z,
      columnVisibility: {},
      columnPinning: v,
      columnSizing: {},
      density: d
    }), S?.({}), h?.(z), N?.(v), R?.({}), I?.(d), n && V)
      try {
        V.removeItem(M);
      } catch {
      }
  }, [
    z,
    v,
    d,
    h,
    N,
    R,
    S,
    I,
    n,
    V,
    M
  ]);
  return {
    columnVisibility: Q,
    onColumnVisibilityChange: fe,
    columnSizing: ie,
    onColumnSizingChange: ke,
    columnOrder: w,
    onColumnOrderChange: De,
    columnPinning: j,
    onColumnPinningChange: xe,
    density: K,
    onDensityChange: Le,
    defaultColumnOrder: z,
    defaultColumnPinning: v,
    isCustomized: Fe,
    resetToDefaults: Ve
  };
}
function nd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rd({
  columns: e,
  data: t,
  totalRecords: n,
  tableId: o,
  persistState: s = !0,
  storageScope: l,
  storagePrefix: d,
  storage: u,
  isLoading: g = !1,
  loadingMode: m = "auto",
  skeletonRowsCount: P = 5,
  emptyMessage: k,
  emptyContent: S,
  rowSelection: L,
  onRowSelectionChange: R,
  onSelectedRowsChange: p,
  enableRowSelection: h,
  showSelectionColumn: C,
  isRowSelectable: N,
  selectionDisabledReason: y,
  renderBulkActions: I,
  expanded: z,
  onExpandedChange: v,
  getSubRows: V,
  getRowCanExpand: M,
  renderSubComponent: D,
  showExpandColumn: _ = !0,
  expandOnRowClick: X = !1,
  enableSorting: Q = !0,
  enableMultiSort: ie = !0,
  sorting: w,
  onSortingChange: j,
  manualSorting: K = !1,
  columnVisibility: fe,
  onColumnVisibilityChange: ke,
  columnSizing: De,
  onColumnSizingChange: xe,
  columnOrder: Le,
  onColumnOrderChange: Fe,
  columnPinning: Ve,
  onColumnPinningChange: O,
  pinActionsColumnRight: W = !0,
  pinLastColumnRight: J = !1,
  defaultPinnedLeft: Pe,
  defaultPinnedRight: pe,
  enableColumnOrdering: te = !0,
  enableColumnPinning: U = !0,
  enableColumnVisibility: Oe = !0,
  enableColumnResizing: je = !0,
  enableContextMenu: We = !0,
  showToolbar: vt = !0,
  showTotalRecords: Ge = !0,
  showDensityToggle: q = !0,
  showHelpButton: _e = !0,
  toolbarLeftContent: Nn,
  toolbarRightContent: er,
  density: Xe = "compact",
  onDensityChange: ia,
  tableLayout: la = "fixed",
  striped: da = !1,
  hoverable: ca = !0,
  stickyHeader: tr = !0,
  maxHeight: lt,
  className: ua,
  classNames: le,
  style: ma,
  getRowId: fa,
  onRowClick: nr,
  onRowDoubleClick: rr,
  rowClassName: or,
  rowAccentColor: $t,
  renderRowProgress: ar,
  footerContent: qt,
  onTableReady: sr,
  labels: ir
}) {
  const be = we(
    () => ({
      ...Bt,
      ...ir,
      ...k ? { emptyMessage: k } : {}
    }),
    [ir, k]
  ), [pa, ga] = me([]), [ha, xa] = me({}), [ba, ya] = me({}), [va, lr] = me(
    null
  ), [Cn, wa] = me(!1), [Sn, Na] = me(!1), [Rn, Ca] = me(
    {}
  ), wt = ze(null), dr = ze(null), Kt = ze(
    /* @__PURE__ */ new Map()
  ), cr = ze(null), kn = ze(/* @__PURE__ */ new Map()), Pn = ze(
    /* @__PURE__ */ new Map()
  ), [Sa, ur] = me([]), mr = w ?? pa, Ra = j ?? ga, fr = L ?? ha, ka = de(
    (f) => {
      R?.(f), xa(
        (b) => nd(f, L ?? b)
      );
    },
    [R, L]
  ), pr = z ?? ba, Pa = v ?? ya, dt = h !== void 0 ? !!h : !!(C || R || p || I), za = we(
    () => e.some(
      (f, b) => Et(It(f, b))
    ),
    [e]
  ), gr = (C ?? dt) && !za, hr = !!(D || V), Ma = we(
    () => e.some(
      (f, b) => yn(It(f, b))
    ),
    [e]
  ), xr = hr && _ && !Ma, br = we(() => {
    const f = e.map((x, T) => {
      const E = It(x, T), B = Lt(
        E,
        x,
        T === e.length - 1,
        W,
        J
      ), F = x.meta, ne = x, A = !!(x.size !== void 0 || ne.width !== void 0 || F?.width !== void 0 || He(F?.headerClassName, "w") !== void 0 || He(F?.cellClassName, "w") !== void 0 || B), ee = x.size ?? ne.width ?? F?.width ?? He(F?.headerClassName, "w") ?? He(F?.cellClassName, "w"), ae = An(ee), Se = x.minSize ?? ne.minWidth ?? F?.minWidth ?? He(F?.headerClassName, "min-w") ?? He(F?.cellClassName, "min-w"), re = An(Se), ye = x.maxSize ?? ne.maxWidth ?? F?.maxWidth ?? He(F?.headerClassName, "max-w") ?? He(F?.cellClassName, "max-w"), Pt = An(ye);
      let oe = ae, ge = re, se = Pt, Ae = x.enableResizing, ve = x.enableSorting;
      return B ? (oe === void 0 && (oe = 70), se === void 0 && (se = oe), ge === void 0 && (ge = oe), Ae === void 0 && (Ae = !1), ve === void 0 && (ve = !1)) : (oe !== void 0 && ge === void 0 && (ge = Math.min(60, oe)), x.enableResizing === !1 && oe !== void 0 && se === void 0 && (se = oe)), {
        ...x,
        id: E,
        meta: {
          ...F,
          hasExplicitWidth: A
        },
        ...oe !== void 0 ? { size: oe } : {},
        ...ge !== void 0 ? { minSize: ge } : {},
        ...se !== void 0 ? { maxSize: se } : {},
        ...Ae !== void 0 ? { enableResizing: Ae } : {},
        ...ve !== void 0 ? { enableSorting: ve } : {}
      };
    }), b = [];
    return gr && b.push({
      id: "__select__",
      size: 38,
      minSize: 38,
      maxSize: 44,
      enableSorting: !1,
      enableResizing: !1,
      enableHiding: !1,
      enablePinning: !0,
      meta: {
        label: "Seleção",
        align: "center",
        enablePinning: !1,
        enableReordering: !1,
        defaultPinned: "left",
        hasExplicitWidth: !0
      },
      header: ({ table: x }) => /* @__PURE__ */ r(
        gt,
        {
          checked: x.getIsAllPageRowsSelected() || x.getIsSomePageRowsSelected() && "indeterminate",
          onCheckedChange: (T) => x.toggleAllPageRowsSelected(!!T),
          "aria-label": be.selectAllRows,
          onClick: (T) => T.stopPropagation()
        }
      ),
      cell: ({ row: x }) => {
        const T = x.getCanSelect();
        return /* @__PURE__ */ r(
          gt,
          {
            checked: x.getIsSelected(),
            disabled: !T,
            title: T ? void 0 : y,
            onCheckedChange: (E) => x.toggleSelected(!!E),
            "aria-label": be.selectRow(x.id),
            onClick: (E) => E.stopPropagation()
          }
        );
      }
    }), xr && b.push({
      id: "__expand__",
      size: 36,
      minSize: 36,
      maxSize: 42,
      enableSorting: !1,
      enableResizing: !1,
      enableHiding: !1,
      enablePinning: !0,
      meta: {
        label: "Expandir",
        align: "center",
        enablePinning: !1,
        enableReordering: !1,
        defaultPinned: "left",
        hasExplicitWidth: !0
      },
      header: () => null,
      cell: ({ row: x }) => {
        if (!x.getCanExpand()) return null;
        const T = x.getIsExpanded();
        return /* @__PURE__ */ r(
          ce,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (E) => {
              E.stopPropagation(), x.toggleExpanded();
            },
            "aria-label": T ? be.collapseRow : be.expandRow,
            title: T ? be.collapseRow : be.expandRow,
            children: T ? /* @__PURE__ */ r(rt, {}) : /* @__PURE__ */ r(Vt, {})
          }
        );
      }
    }), [...b, ...f];
  }, [
    e,
    W,
    J,
    gr,
    xr,
    be,
    y
  ]), {
    columnVisibility: Nt,
    onColumnVisibilityChange: Ta,
    columnSizing: Ye,
    onColumnSizingChange: Ia,
    columnOrder: Ut,
    onColumnOrderChange: Da,
    columnPinning: ct,
    onColumnPinningChange: _a,
    density: ue,
    onDensityChange: yr,
    isCustomized: vr,
    resetToDefaults: wr
  } = td({
    columns: br,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: Xe,
    pinActionsColumnRight: W,
    pinLastColumnRight: J,
    defaultPinnedLeft: Pe,
    defaultPinnedRight: pe,
    propColumnVisibility: fe,
    onColumnVisibilityChange: ke,
    propColumnSizing: De,
    onColumnSizingChange: xe,
    propColumnOrder: Le,
    onColumnOrderChange: Fe,
    propColumnPinning: Ve,
    onColumnPinningChange: O,
    propDensity: void 0,
    onDensityChange: ia
  }), Aa = we(() => typeof h == "function" ? h : N ? (f) => N(f.original) : dt, [h, N, dt]), Ea = we(() => {
    if (M) return M;
    if (D) return () => !0;
  }, [M, D]), $ = zs({
    data: t,
    columns: br,
    defaultColumn: {
      minSize: 60
    },
    getRowId: fa,
    getSubRows: V,
    getRowCanExpand: Ea,
    getCoreRowModel: Is(),
    getSortedRowModel: K ? void 0 : Ts(),
    getExpandedRowModel: hr ? Ms() : void 0,
    onSortingChange: Ra,
    onExpandedChange: Pa,
    onColumnVisibilityChange: Ta,
    onColumnSizingChange: Ia,
    onColumnOrderChange: Da,
    onColumnPinningChange: _a,
    onRowSelectionChange: ka,
    manualSorting: K,
    state: {
      sorting: mr,
      expanded: pr,
      rowSelection: fr,
      columnVisibility: Nt,
      columnSizing: Ye,
      columnOrder: Ut,
      columnPinning: ct
    },
    enableRowSelection: Aa,
    enableSorting: Q,
    enableMultiSort: ie,
    enableColumnResizing: je,
    enableColumnPinning: U,
    columnResizeMode: "onChange"
  });
  Ie(() => {
    sr?.($);
  }, [$, sr]);
  const Ct = we(() => dt ? $.getSelectedRowModel().flatRows.map((f) => f.original) : [], [$, fr, t, dt]);
  Ie(() => {
    p?.(Ct);
  }, [Ct, p]);
  const Gt = de(() => {
    const f = {};
    Kt.current.forEach((b, x) => {
      if (b) {
        const T = Math.round(b.getBoundingClientRect().width);
        T > 0 && (f[x] = T);
      }
    }), Ca((b) => {
      const x = Object.keys(f);
      return x.length === Object.keys(b).length && x.every((T) => Math.abs((b[T] ?? 0) - f[T]) <= 1) ? b : f;
    });
  }, []), La = de(
    (f, b) => {
      b ? Kt.current.set(f, b) : Kt.current.delete(f);
    },
    []
  ), Fa = de(
    (f, b) => {
      b ? kn.current.set(f, b) : kn.current.delete(f);
    },
    []
  ), Oa = de(
    (f, b) => {
      b ? Pn.current.set(f, b) : Pn.current.delete(f);
    },
    []
  ), Xt = de(() => {
    if (!$t) {
      ur((E) => E.length === 0 ? E : []);
      return;
    }
    const f = cr.current;
    if (!f) return;
    const b = f.getBoundingClientRect(), x = $.getRowModel().rows, T = [];
    x.forEach((E, B) => {
      const F = $t(E.original, B);
      if (!F) return;
      const ne = kn.current.get(E.id);
      if (!ne) return;
      const H = ne.getBoundingClientRect(), A = Pn.current.get(E.id), ee = A ? A.getBoundingClientRect().bottom : H.bottom, ae = Math.round((H.top - b.top) * 10) / 10, Se = Math.round((ee - H.top) * 10) / 10;
      if (Se <= 0) return;
      const re = F.startsWith("#") || F.startsWith("rgb") || F.startsWith("hsl") || F.startsWith("oklch") || F.startsWith("var(");
      T.push({
        key: E.id,
        top: ae,
        height: Se,
        color: F,
        isCssColor: re
      });
    }), ur((E) => E.length === T.length && E.every(
      (B, F) => B.key === T[F].key && Math.abs(B.top - T[F].top) <= 0.5 && Math.abs(B.height - T[F].height) <= 0.5 && B.color === T[F].color
    ) ? E : T);
  }, [$t, $]), St = de(() => {
    const f = wt.current;
    if (!f) return;
    const { scrollLeft: b, scrollWidth: x, clientWidth: T } = f, E = Math.max(0, x - T);
    wa(b > 2), Na(E - b > 2);
  }, []);
  Ie(() => {
    const f = wt.current;
    if (!f) return;
    const b = (x) => {
      if (!x.ctrlKey || !(f.scrollWidth > f.clientWidth + 1)) return;
      const E = Math.abs(x.deltaY) >= Math.abs(x.deltaX) ? x.deltaY : x.deltaX;
      if (E === 0) return;
      const B = x.deltaMode === 1 ? 32 : x.deltaMode === 2 ? f.clientWidth * 0.8 : 1;
      x.preventDefault(), f.scrollLeft += E * B;
    };
    return f.addEventListener("wheel", b, { passive: !1 }), () => {
      f.removeEventListener("wheel", b);
    };
  }, []), Ya(() => {
    Gt(), St(), Xt();
  }, [
    Gt,
    St,
    Xt,
    t,
    Nt,
    Ut,
    ct,
    Ye,
    ue,
    mr,
    pr
  ]), Ie(() => {
    const f = wt.current, b = dr.current;
    if (!f || typeof ResizeObserver > "u") return;
    const x = new ResizeObserver(() => {
      Gt(), St(), Xt();
    });
    return x.observe(f), b && x.observe(b), Kt.current.forEach((T) => {
      T && x.observe(T);
    }), () => x.disconnect();
  }, [
    St,
    Gt,
    Xt,
    Nt,
    Ut,
    ct
  ]);
  const Va = de((f) => {
    const b = wt.current;
    if (!b) return;
    const x = Math.max(240, Math.floor(b.clientWidth * 0.6));
    b.scrollBy({
      left: f === "left" ? -x : x,
      behavior: "smooth"
    });
  }, []), Rt = $.getVisibleLeafColumns(), {
    stickyOffsets: zn,
    lastLeftPinnedColumnId: Mn,
    firstRightPinnedColumnId: Tn,
    actionsColumnIds: Qe
  } = we(() => {
    const f = {}, b = /* @__PURE__ */ new Set(), x = $.getAllLeafColumns(), T = /* @__PURE__ */ new Map();
    x.forEach((A, ee) => {
      T.set(A.id, A), Lt(
        A.id,
        A.columnDef,
        ee === x.length - 1,
        W,
        J
      ) && b.add(A.id);
    });
    const E = (A) => Nt[A.id] !== !1 && A.getIsVisible(), B = (ct.left ?? []).map((A) => T.get(A)).filter(
      (A) => !!A && E(A)
    ), F = (ct.right ?? []).map((A) => T.get(A)).filter(
      (A) => !!A && E(A)
    );
    let ne = 0;
    for (const A of B)
      f[A.id] = ne, ne += Rn[A.id] || A.getSize();
    let H = 0;
    for (let A = F.length - 1; A >= 0; A--) {
      const ee = F[A];
      f[ee.id] = H, H += Rn[ee.id] || ee.getSize();
    }
    return {
      stickyOffsets: f,
      lastLeftPinnedColumnId: B.length > 0 ? B[B.length - 1].id : null,
      firstRightPinnedColumnId: F.length > 0 ? F[0].id : null,
      actionsColumnIds: b
    };
  }, [
    $,
    ct,
    Ut,
    Nt,
    Ye,
    Rn,
    W,
    J
  ]), ja = ro(
    rn(oo, {
      activationConstraint: { distance: 6 }
    }),
    rn(ao, {
      coordinateGetter: lo
    })
  ), Wa = de(
    (f) => {
      const { active: b, over: x } = f;
      if (!x || b.id === x.id) return;
      const T = String(b.id), E = String(x.id);
      if (Me(T) || Me(E) || Qe.has(T) || Qe.has(E))
        return;
      const B = $.getState().columnOrder.length > 0 ? $.getState().columnOrder : $.getAllLeafColumns().map((ye) => ye.id), F = B.indexOf(T), ne = B.indexOf(E);
      F !== -1 && ne !== -1 && $.setColumnOrder(mt(B, F, ne));
      const H = $.getState().columnPinning.left ?? [], A = H.indexOf(T), ee = H.indexOf(E);
      A !== -1 && ee !== -1 && $.setColumnPinning((ye) => ({
        ...ye,
        left: mt(ye.left ?? [], A, ee)
      }));
      const ae = $.getState().columnPinning.right ?? [], Se = ae.indexOf(T), re = ae.indexOf(E);
      Se !== -1 && re !== -1 && $.setColumnPinning((ye) => ({
        ...ye,
        right: mt(ye.right ?? [], Se, re)
      }));
    },
    [$, Qe]
  ), Ha = (f) => {
    We && (f.preventDefault(), lr({ x: f.clientX, y: f.clientY }));
  }, Nr = de(() => {
    $.resetRowSelection();
  }, [$]), kt = $.getRowModel().rows, Ba = g && (m === "skeleton" || m === "auto" && kt.length === 0), $a = g && (m === "overlay" || m === "auto" && kt.length > 0), Cr = we(
    () => $.getFooterGroups().some(
      (f) => f.headers.some((b) => b.column.columnDef.footer !== void 0)
    ),
    [$]
  ), Sr = Object.keys(Ye).length > 0, Rr = !!$.getState().columnSizingInfo?.isResizingColumn, kr = la === "fixed" || Sr || Rr, qa = lt ? {
    maxHeight: typeof lt == "number" ? `${lt}px` : lt
  } : void 0;
  return /* @__PURE__ */ r(ql, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: ma,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        le?.root,
        ua
      ),
      onContextMenu: Ha,
      children: [
        /* @__PURE__ */ r("style", { children: `
          .flash-table-fixed-cell {
            width: var(--flash-col-size) !important;
            min-width: var(--flash-col-size) !important;
            max-width: var(--flash-col-size) !important;
          }
        ` }),
        $a && /* @__PURE__ */ r("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ r(ft, { className: "animate-spin size-6 text-primary" }) }),
        vt && /* @__PURE__ */ r(
          Jl,
          {
            table: $,
            totalRecords: n,
            showTotalRecords: Ge,
            showDensityToggle: q,
            showHelpButton: _e,
            density: ue,
            onDensityChange: yr,
            pinActionsColumnRight: W,
            pinLastColumnRight: J,
            enableColumnOrdering: te,
            enableColumnPinning: U,
            enableColumnVisibility: Oe,
            isCustomized: vr,
            onReset: wr,
            canScrollLeft: Cn,
            canScrollRight: Sn,
            onScrollHorizontal: Va,
            toolbarLeftContent: Nn,
            toolbarRightContent: er,
            labels: be,
            className: le?.toolbar
          }
        ),
        dt && Ct.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              le?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r("span", { className: "font-medium text-foreground", children: be.selectedItemsCount(Ct.length) }),
                I?.(Ct, Nr)
              ] }),
              /* @__PURE__ */ c(
                ce,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: Nr,
                  children: [
                    /* @__PURE__ */ r(jt, {}),
                    /* @__PURE__ */ r("span", { children: be.clearSelection })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            ref: wt,
            onScroll: St,
            style: qa,
            className: a(
              "relative w-full overflow-auto",
              le?.viewport
            ),
            children: [
              $t && /* @__PURE__ */ r(
                "div",
                {
                  ref: cr,
                  "aria-hidden": "true",
                  className: "sticky left-0 z-[25] h-0 w-0 overflow-visible pointer-events-none",
                  children: Sa.map((f) => /* @__PURE__ */ r(
                    "div",
                    {
                      className: a(
                        "absolute left-0 w-[4px]",
                        !f.isCssColor && f.color
                      ),
                      style: {
                        top: `${f.top}px`,
                        height: `${f.height}px`,
                        ...f.isCssColor ? { backgroundColor: f.color } : {}
                      }
                    },
                    f.key
                  ))
                }
              ),
              /* @__PURE__ */ r(
                so,
                {
                  sensors: ja,
                  collisionDetection: io,
                  modifiers: [Rs],
                  onDragEnd: Wa,
                  children: /* @__PURE__ */ c(
                    "table",
                    {
                      ref: dr,
                      style: kr ? {
                        width: $.getTotalSize(),
                        minWidth: Sr || Rr ? void 0 : "100%"
                      } : void 0,
                      className: a(
                        kr ? "table-fixed" : "table-auto w-full",
                        "caption-bottom border-separate border-spacing-0",
                        ue === "ultra-compact" && "text-xs",
                        ue === "compact" && "text-sm",
                        ue === "comfortable" && "text-sm",
                        le?.table
                      ),
                      children: [
                        /* @__PURE__ */ r("colgroup", { children: $.getVisibleLeafColumns().map((f) => {
                          const b = f.id, x = Qe.has(b), T = Me(b), E = f.columnDef.meta, B = f.columnDef, F = x || T || !!E?.isActions || B.enableResizing === !1 && (B.size !== void 0 || B.width !== void 0 || E?.width !== void 0), ne = Ye[b] !== void 0;
                          if (!(!!E?.hasExplicitWidth || ne || F || !!f.getIsPinned()))
                            return /* @__PURE__ */ r("col", {}, b);
                          const ee = `${f.getSize()}px`;
                          return /* @__PURE__ */ r(
                            "col",
                            {
                              style: {
                                width: ee,
                                ...F ? {
                                  "--flash-col-size": ee
                                } : {}
                              },
                              className: F ? "flash-table-fixed-cell" : void 0
                            },
                            b
                          );
                        }) }),
                        /* @__PURE__ */ r(
                          Fo,
                          {
                            className: a(
                              "bg-muted",
                              tr && lt && "sticky top-0 z-30 bg-muted",
                              le?.header
                            ),
                            children: $.getHeaderGroups().map((f) => /* @__PURE__ */ r(
                              Be,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  le?.headerRow
                                ),
                                children: /* @__PURE__ */ r(
                                  co,
                                  {
                                    items: f.headers.map((b) => b.column.id),
                                    strategy: Ps,
                                    children: f.headers.map((b) => {
                                      const x = b.column.id, T = b.column.getIsPinned(), E = Qe.has(x), B = Me(x);
                                      return /* @__PURE__ */ r(
                                        ed,
                                        {
                                          header: b,
                                          density: ue,
                                          enableColumnOrdering: te,
                                          enableColumnPinning: U,
                                          enableColumnResizing: je,
                                          isActionsCol: E,
                                          isSystemLeftCol: B,
                                          pinnedPosition: T,
                                          stickyOffset: zn[x],
                                          isLastLeftPinned: x === Mn,
                                          isFirstRightPinned: x === Tn,
                                          canScrollLeft: Cn,
                                          canScrollRight: Sn,
                                          labels: be,
                                          className: le?.headerCell,
                                          onRegisterHeaderElement: La
                                        },
                                        b.id
                                      );
                                    })
                                  }
                                )
                              },
                              f.id
                            ))
                          }
                        ),
                        /* @__PURE__ */ r(Oo, { className: le?.body, children: Ba ? Array.from({ length: P }).map((f, b) => /* @__PURE__ */ r(
                          Be,
                          {
                            className: "border-b-0 hover:bg-transparent",
                            children: Rt.map((x) => /* @__PURE__ */ r(
                              Je,
                              {
                                className: a(
                                  "border-b border-border/60",
                                  ue === "ultra-compact" && "py-0.5 px-2",
                                  ue === "compact" && "py-1 px-3",
                                  ue === "comfortable" && "py-2 px-3"
                                ),
                                children: /* @__PURE__ */ r(Lo, { className: "h-4 w-full max-w-[140px]" })
                              },
                              `skeleton-${b}-${x.id}`
                            ))
                          },
                          `skeleton-${b}`
                        )) : kt.length > 0 ? kt.map((f, b) => {
                          const x = ar ? ar(f.original) : null, E = f.getIsExpanded() && !!D, B = f.getVisibleCells(), F = b % 2 === 1, ne = b === kt.length - 1;
                          return /* @__PURE__ */ c(Qa, { children: [
                            /* @__PURE__ */ r(
                              Be,
                              {
                                ref: (H) => Fa(f.id, H),
                                "data-state": f.getIsSelected() && "selected",
                                onClick: (H) => {
                                  X && f.getCanExpand() && f.toggleExpanded(), nr?.(f.original, H);
                                },
                                onDoubleClick: rr ? (H) => rr(f.original, H) : void 0,
                                className: a(
                                  "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)]",
                                  da && F && "bg-muted/80 dark:bg-muted/40 [--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_80%,var(--card))] dark:[--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_40%,var(--card))]",
                                  ca ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] dark:hover:bg-muted dark:hover:[--flash-table-cell-bg:var(--muted)]" : "hover:bg-transparent",
                                  "data-[state=selected]:bg-muted data-[state=selected]:[--flash-table-cell-bg:var(--muted)] dark:data-[state=selected]:bg-muted dark:data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                  (nr || X && f.getCanExpand()) && "cursor-pointer",
                                  le?.row,
                                  or ? or(f.original, b) : ""
                                ),
                                children: B.map((H) => {
                                  const A = H.column.id, ee = H.column.getIsPinned(), ae = ee === "left", Se = ee === "right", re = ae || Se, ye = A === Mn, Pt = A === Tn, oe = Qe.has(A), ge = Me(A), se = H.column.columnDef.meta, Ae = zn[A] ?? 0, ve = H.column.columnDef, In = Ye[A] !== void 0, Yt = !!se?.hasExplicitWidth || In || oe || ge || re ? se?.width ?? H.column.getSize() : void 0, Dn = ve.minSize ?? se?.minWidth ?? (re ? H.column.getSize() : void 0), Ka = ve.maxSize && ve.maxSize < Number.MAX_SAFE_INTEGER ? ve.maxSize : se?.maxWidth ?? (oe ? H.column.getSize() : void 0), Pr = oe || ge || !!se?.isActions || ve.enableResizing === !1 && (ve.size !== void 0 || ve.width !== void 0 || se?.width !== void 0), Ua = typeof Yt == "number" ? `${Yt}px` : Yt, Ga = {
                                    width: Yt,
                                    minWidth: Dn,
                                    maxWidth: Ka,
                                    ...Pr ? { "--flash-col-size": Ua } : {},
                                    ...re ? {
                                      backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                    } : {},
                                    ...ae ? {
                                      position: "sticky",
                                      left: `${Ae}px`
                                    } : {},
                                    ...Se ? {
                                      position: "sticky",
                                      right: `${Ae}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    Je,
                                    {
                                      style: Ga,
                                      className: a(
                                        Pr && "flash-table-fixed-cell",
                                        se?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                        "align-middle transition-colors",
                                        ge && "[&:has([role=checkbox])]:pr-2",
                                        re && "sticky",
                                        // Row bottom border
                                        (!ne || Cr || qt) && !x && !E && "border-b border-border",
                                        // Density padding
                                        ue === "ultra-compact" && "py-0.5 px-2 text-xs",
                                        ue === "compact" && "py-1 px-3 text-sm",
                                        ue === "comfortable" && "py-2 px-3 text-sm",
                                        // Alignment
                                        (oe || se?.align === "right") && "text-right",
                                        (ge || se?.align === "center") && "text-center",
                                        // Pinned cell stacking context (opaque background comes from --flash-table-cell-bg)
                                        re && "z-20",
                                        // Sticky boundary dividers & directional shadows
                                        ye && "border-r border-border",
                                        ye && Cn && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        Pt && "border-l border-border",
                                        Pt && Sn && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        le?.cell,
                                        se?.cellClassName
                                      ),
                                      children: /* @__PURE__ */ r(
                                        "div",
                                        {
                                          style: Dn !== void 0 ? { minWidth: `${Dn}px` } : void 0,
                                          className: "w-full",
                                          children: On(
                                            H.column.columnDef.cell,
                                            H.getContext()
                                          )
                                        }
                                      )
                                    },
                                    H.id
                                  );
                                })
                              }
                            ),
                            E && D && /* @__PURE__ */ r(
                              Be,
                              {
                                ref: (H) => Oa(f.id, H),
                                className: a(
                                  "bg-muted/20 hover:bg-muted/20 border-b-0",
                                  le?.expandedRow
                                ),
                                children: /* @__PURE__ */ r(
                                  Je,
                                  {
                                    colSpan: Rt.length || 1,
                                    className: a(
                                      "p-3",
                                      !ne && !x && "border-b border-border"
                                    ),
                                    children: D({
                                      row: f,
                                      data: f.original
                                    })
                                  }
                                )
                              }
                            ),
                            x && /* @__PURE__ */ r("tr", { className: "p-0 m-0 border-0 pointer-events-none select-none", children: /* @__PURE__ */ r(
                              "td",
                              {
                                colSpan: Rt.length || 1,
                                className: "p-0 m-0 border-b border-border h-[2px] leading-none bg-muted",
                                children: /* @__PURE__ */ r(
                                  "div",
                                  {
                                    className: a(
                                      "h-[2px] transition-all duration-300",
                                      x.color || "bg-primary"
                                    ),
                                    style: {
                                      width: `${Math.min(100, Math.max(1, x.percent < 1 ? 1 : x.percent))}%`,
                                      minWidth: "4px"
                                    }
                                  }
                                )
                              }
                            ) })
                          ] }, f.id);
                        }) : /* @__PURE__ */ r(Be, { className: "hover:bg-transparent", children: /* @__PURE__ */ r(
                          Je,
                          {
                            colSpan: Rt.length || e.length || 1,
                            className: a(
                              "h-24 text-center text-muted-foreground text-sm",
                              le?.emptyCell
                            ),
                            children: g ? be.loadingMessage : S ?? /* @__PURE__ */ r("span", { className: "italic", children: be.emptyMessage })
                          }
                        ) }) }),
                        (Cr || qt) && /* @__PURE__ */ r(
                          Vo,
                          {
                            className: a(
                              "border-t bg-muted/50 font-medium",
                              tr && lt && "sticky bottom-0 z-30 bg-muted",
                              le?.footer
                            ),
                            children: qt ? /* @__PURE__ */ r(Be, { className: le?.footerRow, children: /* @__PURE__ */ r(
                              Je,
                              {
                                colSpan: Rt.length || 1,
                                className: a(
                                  "px-3 py-2 border-t border-border",
                                  le?.footerCell
                                ),
                                children: qt
                              }
                            ) }) : $.getFooterGroups().map((f) => /* @__PURE__ */ r(
                              Be,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  le?.footerRow
                                ),
                                children: f.headers.map((b) => {
                                  const x = b.column.id, T = b.column.getIsPinned(), E = T === "left", B = T === "right", F = E || B, ne = x === Mn, H = x === Tn, A = Qe.has(x), ee = Me(x), ae = b.column.columnDef.meta, Se = zn[x] ?? 0, re = b.column.columnDef, ye = Ye[x] !== void 0, oe = !!ae?.hasExplicitWidth || ye || A || ee || F ? ae?.width ?? b.getSize() : void 0, ge = re.minSize ?? ae?.minWidth ?? (F ? b.getSize() : void 0), se = re.maxSize && re.maxSize < Number.MAX_SAFE_INTEGER ? re.maxSize : ae?.maxWidth ?? (A ? b.getSize() : void 0), Ae = A || ee || !!ae?.isActions || re.enableResizing === !1 && (re.size !== void 0 || re.width !== void 0 || ae?.width !== void 0), ve = typeof oe == "number" ? `${oe}px` : oe, In = {
                                    width: oe,
                                    minWidth: ge,
                                    maxWidth: se,
                                    ...Ae ? { "--flash-col-size": ve } : {},
                                    ...F ? {
                                      backgroundColor: "var(--muted)"
                                    } : {},
                                    ...E ? {
                                      position: "sticky",
                                      left: `${Se}px`
                                    } : {},
                                    ...B ? {
                                      position: "sticky",
                                      right: `${Se}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    Je,
                                    {
                                      style: In,
                                      className: a(
                                        Ae && "flash-table-fixed-cell",
                                        "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                        F ? "sticky bg-muted z-20" : "bg-muted",
                                        ue === "ultra-compact" && "py-1 px-2 text-xs",
                                        ue === "compact" && "py-1 px-3 text-sm",
                                        ue === "comfortable" && "py-2 px-3 text-sm",
                                        (A || ae?.align === "right") && "text-right",
                                        ae?.align === "center" && "text-center",
                                        ne && "border-r border-border",
                                        H && "border-l border-border",
                                        le?.footerCell,
                                        ae?.footerClassName
                                      ),
                                      children: b.isPlaceholder ? null : /* @__PURE__ */ r(
                                        "div",
                                        {
                                          style: ge !== void 0 ? { minWidth: `${ge}px` } : void 0,
                                          className: "w-full",
                                          children: On(
                                            b.column.columnDef.footer,
                                            b.getContext()
                                          )
                                        }
                                      )
                                    },
                                    b.id
                                  );
                                })
                              },
                              f.id
                            ))
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        We && /* @__PURE__ */ r(
          Zl,
          {
            position: va,
            onClose: () => lr(null),
            table: $,
            density: ue,
            onDensityChange: yr,
            showDensityToggle: q,
            pinActionsColumnRight: W,
            pinLastColumnRight: J,
            enableColumnPinning: U,
            enableColumnVisibility: Oe,
            isCustomized: vr,
            onReset: wr,
            labels: be
          }
        )
      ]
    }
  ) });
}
rd.displayName = "FlashTable";
const od = Ee(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), vn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  fo.Root,
  {
    ref: n,
    className: a(od(), e),
    ...t
  }
));
vn.displayName = fo.Root.displayName;
const Fc = bs, Ho = i.createContext(
  {}
), it = ({
  ...e
}) => /* @__PURE__ */ r(Ho.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r(ys, { ...e }) }), wn = () => {
  const e = i.useContext(Ho), t = i.useContext(Bo), { getFieldState: n, formState: o } = $e(), s = n(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: l } = t;
  return {
    id: l,
    name: e.name,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...s
  };
}, Bo = i.createContext(
  {}
), qe = i.forwardRef(({ className: e, ...t }, n) => {
  const o = i.useId();
  return /* @__PURE__ */ r(Bo.Provider, { value: { id: o }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
qe.displayName = "FormItem";
const Ke = i.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: s } = wn();
  return /* @__PURE__ */ r(
    vn,
    {
      ref: n,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
Ke.displayName = "FormLabel";
const yt = i.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: s, formMessageId: l } = wn();
  return /* @__PURE__ */ r(
    Jr,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
yt.displayName = "FormControl";
const $o = i.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = wn();
  return /* @__PURE__ */ r(
    "p",
    {
      ref: n,
      id: o,
      className: a("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
$o.displayName = "FormDescription";
const Ue = i.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: s, formMessageId: l } = wn(), d = s ? String(s?.message) : t;
  return d ? /* @__PURE__ */ r(
    "p",
    {
      ref: o,
      id: l,
      className: a(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...n,
      children: d
    }
  ) : null;
});
Ue.displayName = "FormMessage";
const ad = Ee("font-bold tracking-tight", {
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
}), Oc = Ft.forwardRef(
  ({ className: e, variant: t, children: n, ...o }, s) => /* @__PURE__ */ r(
    t || "h1",
    {
      className: a(ad({ variant: t }), e),
      ref: s,
      ...o,
      children: n
    }
  )
), Vc = ({
  name: e,
  label: t,
  placeholder: n,
  mask: o,
  ...s
}) => {
  const l = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: l.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(qe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(yt, { children: o ? /* @__PURE__ */ r(
          pd,
          {
            mask: o,
            placeholder: n,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ r(bn, { placeholder: n, ...s, ...d }) }),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
}, sd = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Ce.Root,
  {
    ref: o,
    className: a(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ r(qo, {})
    ]
  }
));
sd.displayName = Ce.Root.displayName;
const id = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ce.List,
  {
    ref: n,
    className: a(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
id.displayName = Ce.List.displayName;
const jc = Ce.Item, ld = Ee(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), dd = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Ce.Trigger,
  {
    ref: o,
    className: a(ld(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ r(
        rt,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
dd.displayName = Ce.Trigger.displayName;
const cd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ce.Content,
  {
    ref: n,
    className: a(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
cd.displayName = Ce.Content.displayName;
const ud = Ce.Link, qo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r(
  Ce.Viewport,
  {
    className: a(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
qo.displayName = Ce.Viewport.displayName;
const md = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ce.Indicator,
  {
    ref: n,
    className: a(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
md.displayName = Ce.Indicator.displayName;
const fd = Ft.forwardRef(({ className: e, title: t, children: n, ...o }, s) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(ud, { asChild: !0, children: /* @__PURE__ */ c(
  "a",
  {
    ref: s,
    className: a(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ r("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ r("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: n })
    ]
  }
) }) }));
fd.displayName = "ListItem";
function pd({
  value: e,
  mask: t,
  onChange: n,
  ...o
}) {
  const s = t.split("#").length - 1, l = t.split("A").length - 1, d = t.split("*").length - 1, u = s + l + d;
  function g(m) {
    const k = m.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, u);
    n(k);
  }
  return /* @__PURE__ */ r(
    bn,
    {
      value: xo(e, t),
      onChange: g,
      ...o
    }
  );
}
const gd = (e, t = 300) => {
  const [n, o] = me(e);
  return Ie(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), n;
}, Or = Ee(
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
), hd = i.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: o = [],
    placeholder: s = "Select options",
    animation: l = 0,
    maxCount: d = 3,
    modalPopover: u = !1,
    className: g,
    preventSelectAll: m = !1,
    onSearchChange: P,
    isLoading: k,
    onCreate: S,
    ...L
  }, R) => {
    const [p, h] = i.useState(o), [C, N] = i.useState(!1), [y, I] = i.useState(!1), [z, v] = i.useState(""), V = gd(z, 300);
    Ie(() => {
      P && P(V ?? "");
    }, [V]);
    const M = (w) => {
      if (w.key === "Enter")
        N(!0);
      else if (w.key === "Backspace" && !w.currentTarget.value) {
        const j = [...p];
        j.pop(), h(j), t(j);
      }
    }, D = (w) => {
      const j = p.includes(w) ? p.filter((K) => K !== w) : [...p, w];
      h(j), t(j);
    }, _ = () => {
      h([]), t([]);
    }, X = () => {
      N((w) => !w);
    }, Q = () => {
      const w = p.slice(0, d);
      h(w), t(w);
    }, ie = () => {
      if (p.length === e.length)
        _();
      else {
        const w = e.map((j) => j.value);
        h(w), t(w);
      }
    };
    return /* @__PURE__ */ c(
      xt,
      {
        open: C,
        onOpenChange: N,
        modal: u,
        children: [
          /* @__PURE__ */ r(bt, { asChild: !0, children: /* @__PURE__ */ r(
            ce,
            {
              ref: R,
              ...L,
              onClick: X,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                g
              ),
              children: p.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  p.slice(0, d).map((w) => {
                    const j = e.find((fe) => fe.value === w), K = j?.icon;
                    return /* @__PURE__ */ c(
                      jn,
                      {
                        className: a(
                          y ? "animate-bounce" : "",
                          Or({ variant: n })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          K && /* @__PURE__ */ r(K, { className: "h-4 w-4 mr-2" }),
                          j?.label,
                          /* @__PURE__ */ r(
                            Mr,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (fe) => {
                                fe.stopPropagation(), D(w);
                              }
                            }
                          )
                        ]
                      },
                      w
                    );
                  }),
                  p.length > d && /* @__PURE__ */ c(
                    jn,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        y ? "animate-bounce" : "",
                        Or({ variant: n })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${p.length - d}`,
                        /* @__PURE__ */ r(
                          Mr,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (w) => {
                              w.stopPropagation(), Q();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  k && /* @__PURE__ */ r(ft, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ r(
                    ms,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (w) => {
                        w.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ r(
                    Qo,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ r(rt, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ r(rt, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ r(
            st,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => N(!1),
              children: /* @__PURE__ */ c(Wt, { shouldFilter: !P, children: [
                /* @__PURE__ */ r(
                  fn,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: M,
                    onValueChange: v
                  }
                ),
                /* @__PURE__ */ c(pn, { children: [
                  !k && /* @__PURE__ */ r(gn, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Ht, { children: [
                    !k && !e.length && !!z.length && S && /* @__PURE__ */ r(
                      tt,
                      {
                        onSelect: S,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ r(fs, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ r("b", { children: z })
                        ] })
                      },
                      "new"
                    ),
                    k && /* @__PURE__ */ r("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ r(ft, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      tt,
                      {
                        onSelect: ie,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                p.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ r(Tr, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ r("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((w) => {
                      const j = p.includes(w.value);
                      return /* @__PURE__ */ c(
                        tt,
                        {
                          onSelect: () => D(w.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ r(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  j ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ r(Tr, { className: "h-4 w-4" })
                              }
                            ),
                            w.icon && /* @__PURE__ */ r(w.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ r("span", { children: w.label })
                          ]
                        },
                        w.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ r(Co, {})
                ] })
              ] })
            }
          ),
          l > 0 && p.length > 0 && /* @__PURE__ */ r(
            ps,
            {
              className: a(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                y ? "" : "text-muted-foreground"
              ),
              onClick: () => I(!y)
            }
          )
        ]
      }
    );
  }
);
hd.displayName = "MultiSelect";
const xd = ({ className: e, ...t }) => /* @__PURE__ */ r(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
xd.displayName = "Pagination";
const bd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "ul",
  {
    ref: n,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
bd.displayName = "PaginationContent";
const yd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("li", { ref: n, className: a("", e), ...t }));
yd.displayName = "PaginationItem";
const Qn = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) => /* @__PURE__ */ r(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: a(
      ot({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...o
  }
);
Qn.displayName = "PaginationLink";
const vd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  Qn,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Ur, { className: "h-4 w-4" })
  }
);
vd.displayName = "PaginationPrevious";
const wd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  Qn,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Vt, { className: "h-4 w-4" })
  }
);
wd.displayName = "PaginationNext";
const Nd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(Hr, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Nd.displayName = "PaginationEllipsis";
const Cd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  At.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: n
  }
));
Cd.displayName = At.Root.displayName;
const Sd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  At.Item,
  {
    ref: n,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(At.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r($r, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Sd.displayName = At.Item.displayName;
const Rd = Ft.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  et.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ r(et.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r(Ko, {}),
      /* @__PURE__ */ r(et.Corner, {})
    ]
  }
));
Rd.displayName = et.Root.displayName;
const Ko = Ft.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ r(
  et.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: t,
    className: a(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ r(et.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Ko.displayName = et.ScrollAreaScrollbar.displayName;
const Uo = Z.Root, Wc = Z.Group, Go = Z.Value, Jn = i.forwardRef(({ className: e, children: t, isLoading: n = !1, ...o }, s) => /* @__PURE__ */ c(
  Z.Trigger,
  {
    ref: s,
    className: a(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        n && /* @__PURE__ */ r(ft, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ r(Z.Icon, { asChild: !0, children: /* @__PURE__ */ r(rt, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Jn.displayName = Z.Trigger.displayName;
const Xo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Z.ScrollUpButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(gs, { className: "h-4 w-4" })
  }
));
Xo.displayName = Z.ScrollUpButton.displayName;
const Yo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Z.ScrollDownButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(rt, { className: "h-4 w-4" })
  }
));
Yo.displayName = Z.ScrollDownButton.displayName;
const Zn = i.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, s) => /* @__PURE__ */ r(Z.Portal, { children: /* @__PURE__ */ c(
  Z.Content,
  {
    ref: s,
    className: a(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ r(Xo, {}),
      /* @__PURE__ */ r(
        Z.Viewport,
        {
          className: a(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(Yo, {})
    ]
  }
) }));
Zn.displayName = Z.Content.displayName;
const kd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Z.Label,
  {
    ref: n,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
kd.displayName = Z.Label.displayName;
const ln = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Z.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Z.ItemIndicator, { children: /* @__PURE__ */ r(Ot, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r(Z.ItemText, { children: t })
    ]
  }
));
ln.displayName = Z.Item.displayName;
const Pd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Z.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Pd.displayName = Z.Separator.displayName;
const Hc = ({
  name: e,
  label: t,
  placeholder: n,
  options: o,
  helpText: s,
  isLoading: l,
  ...d
}) => {
  const u = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: u.control,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ c(qe, { children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ c(
          Uo,
          {
            onValueChange: g.onChange,
            value: g.value,
            defaultValue: g.value,
            ...d,
            children: [
              /* @__PURE__ */ r(yt, { children: /* @__PURE__ */ r(Jn, { isLoading: l, children: /* @__PURE__ */ r(Go, { placeholder: n }) }) }),
              /* @__PURE__ */ r(Zn, { children: o.map((m) => /* @__PURE__ */ r(ln, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ r($o, { children: s }),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
}, Qo = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, s) => /* @__PURE__ */ r(
    po.Root,
    {
      ref: s,
      decorative: n,
      orientation: t,
      className: a(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
Qo.displayName = po.Root.displayName;
const Bc = G.Root, $c = G.Trigger, qc = G.Close, zd = G.Portal, Jo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Jo.displayName = G.Overlay.displayName;
const Md = Ee(
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
), Td = i.forwardRef(({ side: e = "right", className: t, children: n, ...o }, s) => /* @__PURE__ */ c(zd, { children: [
  /* @__PURE__ */ r(Jo, {}),
  /* @__PURE__ */ c(
    G.Content,
    {
      ref: s,
      className: a(Md({ side: e }), t),
      ...o,
      children: [
        n,
        /* @__PURE__ */ c(G.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r(jt, { className: "h-4 w-4" }),
          /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Td.displayName = G.Content.displayName;
const Id = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Id.displayName = "SheetHeader";
const Dd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Dd.displayName = "SheetFooter";
const _d = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Title,
  {
    ref: n,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
_d.displayName = G.Title.displayName;
const Ad = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  G.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Ad.displayName = G.Description.displayName;
const Ed = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Vn.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ r(
      Vn.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Ed.displayName = Vn.Root.displayName;
const Kc = at.Root, Ld = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  at.List,
  {
    ref: n,
    className: a(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ld.displayName = at.List.displayName;
const Fd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  at.Trigger,
  {
    ref: n,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Fd.displayName = at.Trigger.displayName;
const Od = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  at.Content,
  {
    ref: n,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Od.displayName = at.Content.displayName;
const Zo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "textarea",
  {
    className: a(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t
  }
));
Zo.displayName = "Textarea";
const Vd = ({
  name: e,
  label: t,
  placeholder: n,
  ...o
}) => {
  const s = $e();
  return /* @__PURE__ */ r(
    it,
    {
      control: s.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(qe, { children: [
        !!t && /* @__PURE__ */ r(Ke, { children: t }),
        /* @__PURE__ */ r(yt, { children: /* @__PURE__ */ r(Zo, { placeholder: n, ...o, ...l }) }),
        /* @__PURE__ */ r(Ue, {})
      ] })
    }
  );
};
Vd.displayName = "TextareaForm";
const jd = Re.Provider, Wd = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, ea = i.forwardRef(({ className: e, position: t = "bottom-right", ...n }, o) => /* @__PURE__ */ r(
  Re.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Wd[t]}`,
      e
    ),
    ...n
  }
));
ea.displayName = Re.Viewport.displayName;
const Hd = Ee(
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
), ta = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  Re.Root,
  {
    ref: o,
    className: a(Hd({ variant: t }), e),
    ...n
  }
));
ta.displayName = Re.Root.displayName;
const Bd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Re.Action,
  {
    ref: n,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Bd.displayName = Re.Action.displayName;
const na = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Re.Close,
  {
    ref: n,
    className: a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r(jt, { className: "h-4 w-4" })
  }
));
na.displayName = Re.Close.displayName;
const ra = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Re.Title,
  {
    ref: n,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
ra.displayName = Re.Title.displayName;
const oa = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Re.Description,
  {
    ref: n,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
oa.displayName = Re.Description.displayName;
const $d = 5, qd = 1e4;
let En = 0;
function Kd() {
  return En = (En + 1) % Number.MAX_SAFE_INTEGER, En.toString();
}
const Ln = /* @__PURE__ */ new Map(), Vr = (e) => {
  if (Ln.has(e))
    return;
  const t = setTimeout(() => {
    Ln.delete(e), Dt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, qd);
  Ln.set(e, t);
}, Ud = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, $d)
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
      return n ? Vr(n) : e.toasts.forEach((o) => {
        Vr(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === n || n === void 0 ? {
            ...o,
            open: !1
          } : o
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
}, tn = [];
let nn = { toasts: [] };
function Dt(e) {
  nn = Ud(nn, e), tn.forEach((t) => {
    t(nn);
  });
}
function Gd({ ...e }) {
  const t = Kd(), n = (s) => Dt({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => Dt({ type: "DISMISS_TOAST", toastId: t });
  return Dt({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (s) => {
        s || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
function Xd() {
  const [e, t] = i.useState(nn);
  return i.useEffect(() => (tn.push(t), () => {
    const n = tn.indexOf(t);
    n > -1 && tn.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Gd,
    dismiss: (n) => Dt({ type: "DISMISS_TOAST", toastId: n })
  };
}
function Uc() {
  const { toasts: e } = Xd();
  return /* @__PURE__ */ c(jd, { children: [
    e.map(function({ id: t, title: n, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(ta, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ r(ra, { children: n }),
          o && /* @__PURE__ */ r(oa, { children: o })
        ] }),
        s,
        /* @__PURE__ */ r(na, {})
      ] }, t);
    }),
    /* @__PURE__ */ r(ea, {})
  ] });
}
const aa = Ee(
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
), Yd = i.forwardRef(({ className: e, variant: t, size: n, ...o }, s) => /* @__PURE__ */ r(
  go.Root,
  {
    ref: s,
    className: a(aa({ variant: t, size: n, className: e })),
    ...o
  }
));
Yd.displayName = go.Root.displayName;
const sa = i.createContext({
  size: "default",
  variant: "default"
}), Qd = i.forwardRef(({ className: e, variant: t, size: n, children: o, ...s }, l) => /* @__PURE__ */ r(
  un.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ r(sa.Provider, { value: { variant: t, size: n }, children: o })
  }
));
Qd.displayName = un.Root.displayName;
const Jd = i.forwardRef(({ className: e, children: t, variant: n, size: o, ...s }, l) => {
  const d = i.useContext(sa);
  return /* @__PURE__ */ r(
    un.Item,
    {
      ref: l,
      className: a(
        aa({
          variant: d.variant || n,
          size: d.size || o
        }),
        e
      ),
      ...s,
      children: t
    }
  );
});
Jd.displayName = un.Item.displayName;
export {
  bc as Accordion,
  As as AccordionContent,
  Ds as AccordionItem,
  _s as AccordionTrigger,
  Ls as Alert,
  Os as AlertDescription,
  yc as AlertDialog,
  qs as AlertDialogAction,
  Ks as AlertDialogCancel,
  js as AlertDialogContent,
  $s as AlertDialogDescription,
  Hs as AlertDialogFooter,
  Ws as AlertDialogHeader,
  ho as AlertDialogOverlay,
  Vs as AlertDialogPortal,
  Bs as AlertDialogTitle,
  vc as AlertDialogTrigger,
  Fs as AlertTitle,
  Us as AsyncSelect,
  wc as AsyncSelectForm,
  Xs as Avatar,
  Qs as AvatarFallback,
  Ys as AvatarImage,
  jn as Badge,
  Zs as Breadcrumb,
  ai as BreadcrumbEllipsis,
  ti as BreadcrumbItem,
  ni as BreadcrumbLink,
  ei as BreadcrumbList,
  ri as BreadcrumbPage,
  oi as BreadcrumbSeparator,
  ce as Button,
  yo as Calendar,
  Xi as CalendarDayButton,
  Yi as Card,
  el as CardContent,
  Zi as CardDescription,
  tl as CardFooter,
  Qi as CardHeader,
  Ji as CardTitle,
  nl as Carousel,
  rl as CarouselContent,
  ol as CarouselItem,
  sl as CarouselNext,
  al as CarouselPrevious,
  ll as ChartContainer,
  Rc as ChartLegend,
  ul as ChartLegendContent,
  dl as ChartStyle,
  Sc as ChartTooltip,
  cl as ChartTooltipContent,
  gt as Checkbox,
  ml as Combobox,
  kc as ComboboxForm,
  Wt as Command,
  Pc as CommandDialog,
  gn as CommandEmpty,
  Ht as CommandGroup,
  fn as CommandInput,
  tt as CommandItem,
  pn as CommandList,
  Co as CommandSeparator,
  fl as CommandShortcut,
  Bt as DEFAULT_FLASH_TABLE_LABELS,
  hl as DatePicker,
  zc as DatePickerForm,
  To as DateTimePicker,
  Mc as DateTimePickerForm,
  Io as Dialog,
  Tc as DialogClose,
  Gn as DialogContent,
  Eo as DialogDescription,
  _l as DialogFooter,
  _o as DialogHeader,
  Do as DialogOverlay,
  Dl as DialogPortal,
  Ao as DialogTitle,
  Il as DialogTrigger,
  Ic as DropdownMenu,
  Ol as DropdownMenuCheckboxItem,
  Ll as DropdownMenuContent,
  _c as DropdownMenuGroup,
  Fl as DropdownMenuItem,
  jl as DropdownMenuLabel,
  Ac as DropdownMenuPortal,
  Lc as DropdownMenuRadioGroup,
  Vl as DropdownMenuRadioItem,
  Wl as DropdownMenuSeparator,
  Hl as DropdownMenuShortcut,
  Ec as DropdownMenuSub,
  El as DropdownMenuSubContent,
  Al as DropdownMenuSubTrigger,
  Dc as DropdownMenuTrigger,
  rd as FlashTable,
  Ql as FlashTableColumnManager,
  Zl as FlashTableContextMenu,
  ed as FlashTableHeaderCell,
  Xl as FlashTableHelpDialog,
  Jl as FlashTableToolbar,
  Fc as Form,
  yt as FormControl,
  $o as FormDescription,
  it as FormField,
  qe as FormItem,
  Ke as FormLabel,
  Ue as FormMessage,
  Oc as Heading,
  bn as Input,
  Vc as InputForm,
  vn as Label,
  fd as ListItem,
  pd as MaskedInput,
  hd as MultiSelect,
  sd as NavigationMenu,
  cd as NavigationMenuContent,
  md as NavigationMenuIndicator,
  jc as NavigationMenuItem,
  ud as NavigationMenuLink,
  id as NavigationMenuList,
  dd as NavigationMenuTrigger,
  qo as NavigationMenuViewport,
  xd as Pagination,
  bd as PaginationContent,
  Nd as PaginationEllipsis,
  yd as PaginationItem,
  Qn as PaginationLink,
  wd as PaginationNext,
  vd as PaginationPrevious,
  xt as Popover,
  st as PopoverContent,
  bt as PopoverTrigger,
  Cd as RadioGroup,
  Sd as RadioGroupItem,
  Rd as ScrollArea,
  Ko as ScrollBar,
  Uo as Select,
  Zn as SelectContent,
  Hc as SelectForm,
  Wc as SelectGroup,
  ln as SelectItem,
  kd as SelectLabel,
  Yo as SelectScrollDownButton,
  Xo as SelectScrollUpButton,
  Pd as SelectSeparator,
  Jn as SelectTrigger,
  Go as SelectValue,
  Qo as Separator,
  Bc as Sheet,
  qc as SheetClose,
  Td as SheetContent,
  Ad as SheetDescription,
  Dd as SheetFooter,
  Id as SheetHeader,
  Jo as SheetOverlay,
  zd as SheetPortal,
  _d as SheetTitle,
  $c as SheetTrigger,
  Lo as Skeleton,
  Ed as Switch,
  Bl as Table,
  Oo as TableBody,
  $l as TableCaption,
  Je as TableCell,
  Vo as TableFooter,
  jo as TableHead,
  Fo as TableHeader,
  Be as TableRow,
  Kc as Tabs,
  Od as TabsContent,
  Ld as TabsList,
  Fd as TabsTrigger,
  Zo as Textarea,
  Vd as TextareaForm,
  Mo as TimePicker,
  en as TimePickerInput,
  ta as Toast,
  Bd as ToastAction,
  na as ToastClose,
  oa as ToastDescription,
  jd as ToastProvider,
  ra as ToastTitle,
  ea as ToastViewport,
  Uc as Toaster,
  Yd as Toggle,
  Qd as ToggleGroup,
  Jd as ToggleGroupItem,
  Xn as Tooltip,
  xn as TooltipContent,
  ql as TooltipProvider,
  Yn as TooltipTrigger,
  Js as badgeVariants,
  Cc as brazillianStates,
  Ul as buildDefaultPinning,
  ot as buttonVariants,
  a as cn,
  It as extractColumnId,
  He as extractWidthFromClassName,
  sn as getColumnLabel,
  Lt as isActionsColumnDef,
  Wo as isActionsColumnId,
  yn as isExpansionColumnId,
  ut as isSameArray,
  Et as isSelectionColumnId,
  Me as isSystemLeftColumnId,
  Nc as mask,
  ld as navigationMenuTriggerStyle,
  An as parseColumnWidth,
  Lr as reconcileColumnOrder,
  Ud as reducer,
  Kl as resolveStorageScope,
  Gd as toast,
  aa as toggleVariants,
  td as useFlashTablePersistence,
  wn as useFormField,
  Xd as useToast
};
