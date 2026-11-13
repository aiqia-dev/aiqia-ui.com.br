import { jsx as r, jsxs as c, Fragment as nt } from "react/jsx-runtime";
import * as i from "react";
import Ht, { useState as ue, useEffect as Ie, useCallback as ce, useImperativeHandle as qr, useRef as Pe, isValidElement as Ja, useMemo as we, useLayoutEffect as Za, Fragment as es } from "react";
import * as at from "@radix-ui/react-accordion";
import { ChevronDown as st, ChevronsUpDown as Kr, Loader2 as gt, Check as Bt, MoreHorizontal as Ur, ChevronRight as $t, ChevronLeftIcon as ts, ChevronRightIcon as ns, ChevronDownIcon as rs, ArrowLeft as os, ArrowRight as as, Search as Gr, CalendarIcon as ss, Clock as is, Calendar as ls, X as qt, Circle as Xr, HelpCircle as ds, Mouse as cs, Columns3 as Yr, Pin as bn, MoveHorizontal as us, ArrowUpDown as Qr, Rows3 as er, RotateCcw as yn, MousePointerClick as ms, Eye as tr, ChevronLeft as Jr, AlignJustify as Zr, Rows2 as eo, GripVertical as to, Lock as no, Info as fs, ArrowUp as ps, ArrowDown as gs, XCircle as _r, XIcon as hs, Plus as xs, CheckIcon as Ar, WandSparkles as bs, ChevronUp as ys } from "lucide-react";
import { clsx as vs } from "clsx";
import { twMerge as ws } from "tailwind-merge";
import { cva as Fe } from "class-variance-authority";
import * as xe from "@radix-ui/react-alert-dialog";
import { useFormContext as Ke, FormProvider as Ns, Controller as Cs } from "react-hook-form";
import * as bt from "@radix-ui/react-avatar";
import { Slot as ro } from "@radix-ui/react-slot";
import { Link as Ss } from "react-router-dom";
import { TZDate as Te, getDefaultClassNames as oo, DayPicker as Rs } from "react-day-picker";
import ks from "embla-carousel-react";
import * as nr from "recharts";
import * as Un from "@radix-ui/react-checkbox";
import { Command as Ne } from "cmdk";
import { format as ao, parse as so, isValid as io, add as zs } from "date-fns";
import * as Ft from "@radix-ui/react-popover";
import * as X from "@radix-ui/react-dialog";
import * as Y from "@radix-ui/react-dropdown-menu";
import { useSensors as lo, useSensor as fn, PointerSensor as co, KeyboardSensor as uo, DndContext as mo, closestCenter as fo } from "@dnd-kit/core";
import { restrictToVerticalAxis as Ps, restrictToHorizontalAxis as Ms } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as po, SortableContext as go, verticalListSortingStrategy as Ts, arrayMove as pt, useSortable as ho, horizontalListSortingStrategy as Is } from "@dnd-kit/sortable";
import { flexRender as Gn, useReactTable as Ds, getExpandedRowModel as _s, getSortedRowModel as As, getCoreRowModel as Es } from "@tanstack/react-table";
import * as ht from "@radix-ui/react-tooltip";
import { CSS as xo } from "@dnd-kit/utilities";
import * as bo from "@radix-ui/react-label";
import * as Ce from "@radix-ui/react-navigation-menu";
import * as Vt from "@radix-ui/react-radio-group";
import * as rt from "@radix-ui/react-scroll-area";
import * as te from "@radix-ui/react-select";
import * as yo from "@radix-ui/react-separator";
import * as Xn from "@radix-ui/react-switch";
import * as lt from "@radix-ui/react-tabs";
import * as ke from "@radix-ui/react-toast";
import * as vo from "@radix-ui/react-toggle";
import * as vn from "@radix-ui/react-toggle-group";
function a(...e) {
  return ws(vs(e));
}
const Nc = at.Root, Ls = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  at.Item,
  {
    ref: n,
    className: a("border-b", e),
    ...t
  }
));
Ls.displayName = "AccordionItem";
const Os = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(at.Header, { className: "flex", children: /* @__PURE__ */ c(
  at.Trigger,
  {
    ref: o,
    className: a(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ r(st, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Os.displayName = at.Trigger.displayName;
const Fs = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(
  at.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ r("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
Fs.displayName = at.Content.displayName;
const Vs = Fe(
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
), js = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(Vs({ variant: t }), e),
    ...n
  }
));
js.displayName = "Alert";
const Ws = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "h5",
  {
    ref: n,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Ws.displayName = "AlertTitle";
const Hs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Hs.displayName = "AlertDescription";
const Cc = xe.Root, Sc = xe.Trigger, Bs = xe.Portal, wo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  xe.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
wo.displayName = xe.Overlay.displayName;
const $s = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(Bs, { children: [
  /* @__PURE__ */ r(wo, {}),
  /* @__PURE__ */ r(
    xe.Content,
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
$s.displayName = xe.Content.displayName;
const qs = ({
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
qs.displayName = "AlertDialogHeader";
const Ks = ({
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
Ks.displayName = "AlertDialogFooter";
const Us = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  xe.Title,
  {
    ref: n,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
Us.displayName = xe.Title.displayName;
const Gs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  xe.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Gs.displayName = xe.Description.displayName;
const Xs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  xe.Action,
  {
    ref: n,
    className: a(it(), e),
    ...t
  }
));
Xs.displayName = xe.Action.displayName;
const Ys = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  xe.Cancel,
  {
    ref: n,
    className: a(
      it({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Ys.displayName = xe.Cancel.displayName;
function Qs({
  options: e,
  isLoading: t,
  renderOption: n,
  getOptionValue: o,
  getDisplayValue: s,
  label: l,
  placeholder: d = "Selecione...",
  value: u,
  onChange: h,
  onSearchChange: m,
  disabled: z = !1,
  triggerClassName: k,
  noResultsMessage: S,
  clearable: E = !0,
  error: R
}) {
  const [p, C] = ue(!1), [v, g] = ue(u), [y, D] = ue(null), [P, w] = ue("");
  Ie(() => {
    g(u);
  }, [u]), Ie(() => {
    if (u && e.length > 0) {
      const T = e.find((_) => o(_) === u);
      T && D(T);
    }
  }, [u, e, o]);
  const V = ce(
    (T) => {
      const _ = E && T === v ? "" : T;
      u && g(_), D(
        e.find((j) => o(j) === _) || null
      ), h(_), C(!1);
    },
    [v, h, E, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ r(Mn, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(yt, { open: p, onOpenChange: C, children: [
      /* @__PURE__ */ r(vt, { asChild: !0, children: /* @__PURE__ */ c(
        me,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": p,
          className: a(
            "justify-between w-full hover:bg-input bg-input font-normal",
            z && "opacity-50 cursor-not-allowed",
            !u && "text-muted-foreground",
            k
          ),
          disabled: z,
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: u && y ? s(y) : d }),
            /* @__PURE__ */ r(Kr, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ r(dt, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Kt, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ r(
            Nn,
            {
              placeholder: "Buscar",
              value: P,
              onValueChange: (T) => {
                w(T), m(T);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ r("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ r(gt, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(Cn, { children: [
          t && e.length === 0 && /* @__PURE__ */ r(Js, {}),
          !t && e.length === 0 && /* @__PURE__ */ r(Sn, { children: /* @__PURE__ */ r("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: S ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ r(Ut, { children: e.map((T) => /* @__PURE__ */ c(
            ot,
            {
              value: o(T),
              onSelect: V,
              children: [
                /* @__PURE__ */ r(
                  Bt,
                  {
                    className: a(
                      "mr-2 size-4 shrink-0",
                      v === o(T) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ r("div", { className: "w-0 flex-1", children: n(T) })
              ]
            },
            o(T)
          )) })
        ] })
      ] }) })
    ] }),
    !!R && /* @__PURE__ */ r("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: R })
  ] });
}
function Js() {
  return /* @__PURE__ */ r(Ut, { children: [1, 2, 3].map((e) => /* @__PURE__ */ r(ot, { disabled: !0, className: "p-0", children: /* @__PURE__ */ r(Wo, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const Rc = ({
  name: e,
  label: t,
  disabled: n,
  isLoading: o,
  options: s,
  placeholder: l = "Selecione",
  onSearchChange: d,
  getDisplayValue: u,
  getOptionValue: h,
  renderOption: m
}) => {
  const { control: z } = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      name: e,
      control: z,
      render: ({ field: k }) => /* @__PURE__ */ c(Ue, { children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(
          Qs,
          {
            options: s,
            value: k.value,
            placeholder: l,
            onSearchChange: d,
            getDisplayValue: u,
            getOptionValue: h,
            renderOption: m,
            onChange: (S) => k.onChange(S),
            isLoading: o,
            disabled: n
          }
        ),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
}, Zs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  bt.Root,
  {
    ref: n,
    className: a(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Zs.displayName = bt.Root.displayName;
const ei = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  bt.Image,
  {
    ref: n,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
ei.displayName = bt.Image.displayName;
const ti = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  bt.Fallback,
  {
    ref: n,
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
ti.displayName = bt.Fallback.displayName;
const ni = Fe(
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
function Yn({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ r("div", { className: a(ni({ variant: t }), e), ...n });
}
const ri = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ r("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ri.displayName = "Breadcrumb";
const oi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
oi.displayName = "BreadcrumbList";
const ai = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "li",
  {
    ref: n,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
ai.displayName = "BreadcrumbItem";
const si = i.forwardRef(({ asChild: e, className: t, ...n }, o) => /* @__PURE__ */ r(
  e ? ro : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...n
  }
));
si.displayName = "BreadcrumbLink";
const ii = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
ii.displayName = "BreadcrumbPage";
const li = ({
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
    children: e ?? /* @__PURE__ */ r($t, {})
  }
);
li.displayName = "BreadcrumbSeparator";
const di = ({
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
      /* @__PURE__ */ r(Ur, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More" })
    ]
  }
);
di.displayName = "BreadcrumbElipssis";
const ci = {
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
}, it = Fe(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: ci,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), me = i.forwardRef(({ className: e, variant: t, size: n, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ r(nt, { children: s ? /* @__PURE__ */ r(
  Ss,
  {
    className: a(it({ variant: t, size: n, className: e })),
    ref: d,
    to: s,
    ...l
  }
) : /* @__PURE__ */ r(
  "button",
  {
    className: a(it({ variant: t, size: n, className: e })),
    ref: d,
    disabled: o,
    ...l
  }
) }));
me.displayName = "Button";
const ui = "(##) ####-####", mi = "(##) #####-####", fi = "#####-###", pi = "###.###.###-##", gi = "##.###.###/####-##", hi = "###########", xi = "##.###.###-#", bi = "AAA#A##", yi = "###########", vi = "##############", No = (e, t) => {
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
}, kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: mi,
  CNH_MASK: hi,
  CNPJ_MASK: gi,
  CPF_MASK: pi,
  PHONE_MASK: ui,
  PLATE_MASK: bi,
  RENAVAM_MASK: yi,
  RG_MASK: xi,
  RNTRC_MASK: vi,
  ZIP_CODE_MASK: fi,
  formatMask: No
}, Symbol.toStringTag, { value: "Module" })), zc = [
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
function Bn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function _t(e) {
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
function At(e) {
  return (t, n = {}) => {
    const o = n.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], l = t.match(s);
    if (!l)
      return null;
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(u) ? Ni(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      wi(u, (k) => k.test(d))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(h) : h, m = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(m)
    ) : m;
    const z = t.slice(d.length);
    return { value: m, rest: z };
  };
}
function wi(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ni(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ci(e) {
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
const Si = {
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
}, Ri = (e, t, n) => {
  let o;
  const s = Si[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + o : "há " + o : o;
}, ki = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, zi = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Pi = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Mi = {
  date: Bn({
    formats: ki,
    defaultWidth: "full"
  }),
  time: Bn({
    formats: zi,
    defaultWidth: "full"
  }),
  dateTime: Bn({
    formats: Pi,
    defaultWidth: "full"
  })
}, Ti = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Ii = (e, t, n, o) => {
  const s = Ti[e];
  return typeof s == "function" ? s(t) : s;
}, Di = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, _i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Ai = {
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
}, Ei = {
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
}, Li = {
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
}, Oi = {
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
}, Fi = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, Vi = {
  ordinalNumber: Fi,
  era: _t({
    values: Di,
    defaultWidth: "wide"
  }),
  quarter: _t({
    values: _i,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: _t({
    values: Ai,
    defaultWidth: "wide"
  }),
  day: _t({
    values: Ei,
    defaultWidth: "wide"
  }),
  dayPeriod: _t({
    values: Li,
    defaultWidth: "wide",
    formattingValues: Oi,
    defaultFormattingWidth: "wide"
  })
}, ji = /^(\d+)[ºªo]?/i, Wi = /\d+/i, Hi = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Bi = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, $i = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, qi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ki = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Ui = {
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
}, Gi = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Xi = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Yi = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Qi = {
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
}, Ji = {
  ordinalNumber: Ci({
    matchPattern: ji,
    parsePattern: Wi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: At({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Bi,
    defaultParseWidth: "any"
  }),
  quarter: At({
    matchPatterns: $i,
    defaultMatchWidth: "wide",
    parsePatterns: qi,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: At({
    matchPatterns: Ki,
    defaultMatchWidth: "wide",
    parsePatterns: Ui,
    defaultParseWidth: "any"
  }),
  day: At({
    matchPatterns: Gi,
    defaultMatchWidth: "wide",
    parsePatterns: Xi,
    defaultParseWidth: "any"
  }),
  dayPeriod: At({
    matchPatterns: Yi,
    defaultMatchWidth: "any",
    parsePatterns: Qi,
    defaultParseWidth: "any"
  })
}, Co = {
  code: "pt-BR",
  formatDistance: Ri,
  formatLong: Mi,
  formatRelative: Ii,
  localize: Vi,
  match: Ji,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function So({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = Co,
  formatters: d,
  components: u,
  startMonth: h,
  endMonth: m,
  timeZone: z = "America/Sao_Paulo",
  ...k
}) {
  const S = new Te(/* @__PURE__ */ new Date(), z), E = new Te(S.getFullYear() - 100, 0, 1, z), R = new Te(S.getFullYear() + 10, 11, 31, z), p = oo();
  return /* @__PURE__ */ r(
    Rs,
    {
      showOutsideDays: n,
      timeZone: z,
      className: a(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      startMonth: h ?? E,
      endMonth: m ?? R,
      locale: l,
      formatters: {
        formatMonthDropdown: (C) => C.toLocaleString(l?.code, { month: "short" }),
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
          it({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          p.button_previous
        ),
        button_next: a(
          it({ variant: s }),
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
        Root: ({ className: C, rootRef: v, ...g }) => /* @__PURE__ */ r(
          "div",
          {
            "data-slot": "calendar",
            ref: v,
            className: a(C),
            ...g
          }
        ),
        Chevron: ({ className: C, orientation: v, ...g }) => v === "left" ? /* @__PURE__ */ r(ts, { className: a("cn-rtl-flip size-4", C), ...g }) : v === "right" ? /* @__PURE__ */ r(ns, { className: a("cn-rtl-flip size-4", C), ...g }) : /* @__PURE__ */ r(rs, { className: a("size-4", C), ...g }),
        DayButton: ({ ...C }) => /* @__PURE__ */ r(Zi, { locale: l, ...C }),
        WeekNumber: ({ children: C, ...v }) => /* @__PURE__ */ r("td", { ...v, children: /* @__PURE__ */ r("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: C }) }),
        ...u
      },
      ...k
    }
  );
}
function Zi({
  className: e,
  day: t,
  modifiers: n,
  locale: o,
  ...s
}) {
  const l = oo(), d = i.useRef(null);
  return i.useEffect(() => {
    n.focused && d.current?.focus();
  }, [n.focused]), /* @__PURE__ */ r(
    me,
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
const el = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
el.displayName = "Card";
const tl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
tl.displayName = "CardHeader";
const nl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
nl.displayName = "CardTitle";
const rl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "p",
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
rl.displayName = "CardDescription";
const ol = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { ref: n, className: a("p-4", e), ...t }));
ol.displayName = "CardContent";
const al = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
al.displayName = "CardFooter";
const Ro = i.createContext(null);
function wn() {
  const e = i.useContext(Ro);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const sl = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [h, m] = ks(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [z, k] = i.useState(!1), [S, E] = i.useState(!1), R = i.useCallback((g) => {
      g && (k(g.canScrollPrev()), E(g.canScrollNext()));
    }, []), p = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), C = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), v = i.useCallback(
      (g) => {
        g.key === "ArrowLeft" ? (g.preventDefault(), p()) : g.key === "ArrowRight" && (g.preventDefault(), C());
      },
      [p, C]
    );
    return i.useEffect(() => {
      !m || !n || n(m);
    }, [m, n]), i.useEffect(() => {
      if (m)
        return R(m), m.on("reInit", R), m.on("select", R), () => {
          m?.off("select", R);
        };
    }, [m, R]), /* @__PURE__ */ r(
      Ro.Provider,
      {
        value: {
          carouselRef: h,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: p,
          scrollNext: C,
          canScrollPrev: z,
          canScrollNext: S
        },
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: u,
            onKeyDownCapture: v,
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
sl.displayName = "Carousel";
const il = i.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: o, orientation: s } = wn();
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
il.displayName = "CarouselContent";
const ll = i.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: o } = wn();
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
ll.displayName = "CarouselItem";
const dl = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = wn();
  return /* @__PURE__ */ c(
    me,
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
        /* @__PURE__ */ r(os, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
dl.displayName = "CarouselPrevious";
const cl = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = wn();
  return /* @__PURE__ */ c(
    me,
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
        /* @__PURE__ */ r(as, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
cl.displayName = "CarouselNext";
const ul = { light: "", dark: ".dark" }, ko = i.createContext(null);
function zo() {
  const e = i.useContext(ko);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const ml = i.forwardRef(({ id: e, className: t, children: n, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ r(ko.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
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
        /* @__PURE__ */ r(fl, { id: u, config: o }),
        /* @__PURE__ */ r(nr.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
ml.displayName = "Chart";
const fl = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ r(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ul).map(
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
}, Pc = nr.Tooltip, pl = i.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: o = "dot",
    hideLabel: s = !1,
    hideIndicator: l = !1,
    label: d,
    labelFormatter: u,
    labelClassName: h,
    formatter: m,
    color: z,
    nameKey: k,
    labelKey: S
  }, E) => {
    const { config: R } = zo(), p = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [v] = t;
      if (!v)
        return null;
      const g = `${S || v.dataKey || v.name || "value"}`, y = Qn(R, v, g), D = !S && typeof d == "string" ? R[d]?.label || d : y?.label;
      return u ? /* @__PURE__ */ r("div", { className: a("font-medium", h), children: u(D, t) }) : D ? /* @__PURE__ */ r("div", { className: a("font-medium", h), children: D }) : null;
    }, [
      d,
      u,
      t,
      s,
      h,
      R,
      S
    ]);
    if (!e || !t?.length)
      return null;
    const C = t.length === 1 && o !== "dot";
    return /* @__PURE__ */ c(
      "div",
      {
        ref: E,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          C ? null : p,
          /* @__PURE__ */ r("div", { className: "grid gap-1.5", children: t.map((v, g) => {
            if (!v)
              return null;
            const y = `${k || v.dataKey || v.name || "value"}`, D = Qn(R, v, y), P = z || v.payload.fill || v.color;
            return /* @__PURE__ */ r(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && v?.value !== void 0 && v.name ? m(v.value, v.name, v, g, v.payload) : /* @__PURE__ */ c(nt, { children: [
                  D?.icon ? /* @__PURE__ */ r(D.icon, {}) : !l && /* @__PURE__ */ r(
                    "div",
                    {
                      className: a(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": C && o === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": P,
                        "--color-border": P
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    "div",
                    {
                      className: a(
                        "flex flex-1 justify-between leading-none",
                        C ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                          C ? p : null,
                          /* @__PURE__ */ r("span", { className: "text-muted-foreground", children: D?.label || v.name })
                        ] }),
                        v.value && /* @__PURE__ */ r("span", { className: "font-mono font-medium tabular-nums text-foreground", children: v.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              v.dataKey
            );
          }) })
        ]
      }
    );
  }
);
pl.displayName = "ChartTooltip";
const Mc = nr.Legend, gl = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = zo();
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
          const h = `${s || u.dataKey || "value"}`, m = Qn(d, u, h);
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
gl.displayName = "ChartLegend";
function Qn(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = n;
  return n in t && typeof t[n] == "string" ? s = t[n] : o && n in o && typeof o[n] == "string" && (s = o[n]), s in e ? e[s] : e[n];
}
const xt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Un.Root,
  {
    ref: n,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      Un.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r(Bt, { className: "size-4 h-full" })
      }
    )
  }
));
xt.displayName = Un.Root.displayName;
function Tc({
  name: e,
  label: t,
  options: n,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: h, setValue: m } = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: h,
      name: e,
      render: ({ field: z }) => /* @__PURE__ */ c(Ue, { children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(
          hl,
          {
            placeholder: o,
            searchPlaceholder: s,
            emptyMessage: l,
            options: n,
            selected: z.value,
            onSelect: (k) => m(e, k, { shouldValidate: !0 }),
            disabled: d,
            isLoading: u
          }
        ),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
}
function hl({
  label: e,
  options: t,
  selected: n,
  onSelect: o,
  placeholder: s = "Selecione uma opção",
  searchPlaceholder: l = "Buscar...",
  emptyMessage: d = "Nenhum resultado encontrado.",
  error: u,
  disabled: h = !1,
  isLoading: m = !1
}) {
  const [z, k] = ue(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ r(Mn, { children: e }),
    /* @__PURE__ */ c(yt, { open: z, onOpenChange: k, children: [
      /* @__PURE__ */ r(vt, { asChild: !0, children: /* @__PURE__ */ c(
        me,
        {
          variant: "outline",
          disabled: h,
          className: a(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !n && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: n ? t.find((S) => S.value === n)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ r(gt, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ r(Kr, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ r(dt, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Kt, { children: [
        /* @__PURE__ */ r(Nn, { placeholder: l }),
        /* @__PURE__ */ c(Cn, { children: [
          /* @__PURE__ */ r(Sn, { children: d }),
          /* @__PURE__ */ r(Ut, { children: t.map((S) => /* @__PURE__ */ c(
            ot,
            {
              value: S.label,
              onSelect: () => {
                n === S.value ? o(void 0) : o(S.value), k(!1);
              },
              children: [
                /* @__PURE__ */ r(
                  Bt,
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
const Kt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Kt.displayName = Ne.displayName;
const Ic = ({ children: e, ...t }) => /* @__PURE__ */ r(Lo, { ...t, children: /* @__PURE__ */ r(or, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r(Kt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Nn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r(Gr, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
Nn.displayName = Ne.Input.displayName;
const Cn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.List,
  {
    ref: n,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Cn.displayName = Ne.List.displayName;
const Sn = i.forwardRef((e, t) => /* @__PURE__ */ r(
  Ne.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Sn.displayName = Ne.Empty.displayName;
const Ut = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Ut.displayName = Ne.Group.displayName;
const Po = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Ne.Separator,
  {
    ref: n,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
Po.displayName = Ne.Separator.displayName;
const ot = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
ot.displayName = Ne.Item.displayName;
const xl = ({
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
xl.displayName = "CommandShortcut";
const yt = Ft.Root, vt = Ft.Trigger, dt = i.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, s) => /* @__PURE__ */ r(Ft.Portal, { children: /* @__PURE__ */ r(
  Ft.Content,
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
dt.displayName = Ft.Content.displayName;
function bl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (n += "/"), n += t[o];
  return n;
}
function yl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (n += "/"), o === 8 && (n += " - "), (o === 10 || o === 12) && (n += "/"), n += t[o];
  return n;
}
function pn(e) {
  if (e.length < 10) return null;
  const t = so(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return io(t) ? t : null;
}
function Er(e) {
  const t = e.split(" - "), n = pn(t[0] ?? "");
  if (!n) return null;
  const o = t[1] ? pn(t[1]) : void 0;
  return { from: n, to: o ?? void 0 };
}
function sn(e) {
  return ao(e, "dd/MM/yyyy");
}
function ln(e, t) {
  if (!e) return "";
  if (t === "range") {
    const n = e;
    return n.from ? n.to ? `${sn(n.from)} - ${sn(n.to)}` : sn(n.from) : "";
  }
  return sn(e);
}
function Lr(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function vl({
  value: e,
  onChange: t,
  disabled: n,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [h, m] = i.useState(
    Lr(e)
  ), [z, k] = i.useState(
    ln(e, s)
  ), [S, E] = i.useState(!1), R = i.useRef(null), p = i.useRef(
    ln(e, s)
  ), C = i.useRef(!1);
  i.useEffect(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    const P = ln(e, s);
    u(e), k(P), p.current = P;
    const w = Lr(e);
    w && m(w);
  }, [e]);
  function v(P) {
    C.current = !0;
    const w = ln(P, s);
    u(P), k(w), p.current = w, t?.(P), s !== "range" && E(!1);
  }
  function g(P) {
    const w = P.target.value;
    if (w.replace(/\D/g, "") === "") {
      k(""), p.current = "", C.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const V = P.target.selectionStart ?? w.length, T = w.slice(0, V).replace(/\D/g, "").length, _ = s === "range" ? yl(w) : bl(w);
    if (k(_), requestAnimationFrame(() => {
      if (R.current) {
        let j = 0, H = _.length;
        for (let Z = 0; Z < _.length; Z++)
          if (/\d/.test(_[Z]) && j++, j === T) {
            H = Z + 1;
            break;
          }
        R.current.setSelectionRange(H, H);
      }
    }), s === "range") {
      const j = Er(_);
      j && (C.current = !0, u(j), p.current = _, j.from && m(j.from), t?.(j));
    } else {
      const j = pn(_);
      j && (C.current = !0, u(j), m(j), p.current = _, t?.(j));
    }
  }
  function y() {
    !(s === "range" ? Er(z) !== null : pn(z) !== null) && z !== "" && k(p.current);
  }
  const D = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(yt, { open: S, onOpenChange: E, children: [
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
              value: z,
              onChange: g,
              onBlur: y,
              placeholder: D,
              disabled: n,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ r(vt, { asChild: !0, disabled: n, children: /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: n,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ r(ss, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ r(dt, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      So,
      {
        mode: s,
        selected: d,
        onSelect: v,
        disabled: o,
        month: h,
        onMonthChange: m,
        timeZone: "America/Sao_Paulo",
        ...l
      }
    ) })
  ] });
}
const Dc = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Ue, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(wt, { children: /* @__PURE__ */ r(
          vl,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
};
function wl(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function Nl(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function Cl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Rn(e, { max: t, min: n = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = n), s < n && (s = t)) : (s > t && (s = t), s < n && (s = n)), s.toString().padStart(2, "0"));
}
function Mo(e) {
  return wl(e) ? e : Rn(e, { max: 23 });
}
function To(e) {
  return Nl(e) ? e : Rn(e, { min: 1, max: 12 });
}
function gn(e) {
  return Cl(e) ? e : Rn(e, { max: 59 });
}
function rr(e, { min: t, max: n, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, Rn(String(s), { min: t, max: n, loop: !0 }));
}
function Sl(e, t) {
  return rr(e, { min: 0, max: 23, step: t });
}
function Rl(e, t) {
  return rr(e, { min: 1, max: 12, step: t });
}
function Or(e, t) {
  return rr(e, { min: 0, max: 59, step: t });
}
function kl(e, t) {
  const n = gn(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function zl(e, t) {
  const n = gn(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function Pl(e, t) {
  const n = Mo(t);
  return e.setHours(parseInt(n, 10)), e;
}
function Ml(e, t, n) {
  const o = parseInt(To(t), 10), s = Dl(o, n);
  return e.setHours(s), e;
}
function Jn(e, t, n, o) {
  switch (n) {
    case "minutes":
      return kl(e, t);
    case "seconds":
      return zl(e, t);
    case "hours":
      return Pl(e, t);
    case "12hours":
      return o ? Ml(e, t, o) : e;
    default:
      return e;
  }
}
function Tl(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return gn(String(e.getMinutes()));
    case "seconds":
      return gn(String(e.getSeconds()));
    case "hours":
      return Mo(String(e.getHours()));
    case "12hours":
      return To(String(Io(e.getHours())));
    default:
      return "00";
  }
}
function Il(e, t, n) {
  switch (n) {
    case "minutes":
      return Or(e, t);
    case "seconds":
      return Or(e, t);
    case "hours":
      return Sl(e, t);
    case "12hours":
      return Rl(e, t);
    default:
      return "00";
  }
}
function Dl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function Io(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Do(e) {
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
function _l(e) {
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
function Al(e, t) {
  const n = e.replace(/\D/g, ""), o = _l(t);
  let s = "";
  for (let l = 0; l < n.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += n[l];
  return s;
}
function Fr(e, t) {
  const n = Do(t);
  if (e.length < n.length) return null;
  const o = so(e.slice(0, n.length), n, new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return io(o) ? o : null;
}
function Et(e, t) {
  return ao(e, Do(t));
}
const _o = i.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, h = (m) => {
      if (t?.(m), n) {
        const z = new Te(n, "America/Sao_Paulo"), k = Io(n.getHours());
        o?.(
          Jn(
            z,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ r("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Jo,
      {
        defaultValue: e,
        onValueChange: (m) => h(m),
        children: [
          /* @__PURE__ */ r(
            lr,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ r(Zo, {})
            }
          ),
          /* @__PURE__ */ c(dr, { children: [
            /* @__PURE__ */ r(xn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ r(xn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
_o.displayName = "TimePeriodSelect";
const cn = i.forwardRef(
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
    onKeyDown: h,
    picker: m,
    period: z,
    onLeftFocus: k,
    onRightFocus: S,
    ...E
  }, R) => {
    const [p, C] = i.useState(!1), [v, g] = i.useState("0");
    i.useEffect(() => {
      if (p) {
        const w = setTimeout(() => {
          C(!1);
        }, 2e3);
        return () => clearTimeout(w);
      }
    }, [p]);
    const y = i.useMemo(() => Tl(l, m), [l, m]), D = (w) => m === "12hours" && p && y.slice(1, 2) === "1" && v === "0" ? `0${w}` : p ? y.slice(1, 2) + w : `0${w}`, P = (w) => {
      if (w.key !== "Tab") {
        if (w.preventDefault(), w.key === "ArrowRight" && S?.(), w.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(w.key)) {
          const V = w.key === "ArrowUp" ? 1 : -1, T = Il(y, V, m);
          p && C(!1);
          const _ = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Jn(_, T, m, z));
        }
        if (w.key >= "0" && w.key <= "9") {
          m === "12hours" && g(w.key);
          const V = D(w.key);
          p && S?.(), C((_) => !_);
          const T = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Jn(T, V, m, z));
        }
      }
    };
    return /* @__PURE__ */ r(
      zn,
      {
        ref: R,
        id: o || m,
        name: s || m,
        className: a(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: n || y,
        onChange: (w) => {
          w.preventDefault(), u?.(w);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (w) => {
          h?.(w), P(w);
        },
        ...E
      }
    );
  }
);
cn.displayName = "TimePickerInput";
const Ao = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), h = i.useRef(null), [m, z] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return qr(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: h.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ r("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ r(is, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ r(
        cn,
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
      (o === "minute" || o === "second") && /* @__PURE__ */ c(nt, { children: [
        ":",
        /* @__PURE__ */ r(
          cn,
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
      o === "second" && /* @__PURE__ */ c(nt, { children: [
        ":",
        /* @__PURE__ */ r(
          cn,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: u,
            onLeftFocus: () => l?.current?.focus(),
            onRightFocus: () => h?.current?.focus()
          }
        )
      ] }),
      n === 12 && /* @__PURE__ */ r("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ r(
        _o,
        {
          period: m,
          setPeriod: z,
          date: e,
          onDateChange: (k) => {
            t?.(k), k && k?.getHours() >= 12 ? z("PM") : z("AM");
          },
          ref: h,
          onLeftFocus: () => u?.current?.focus()
        }
      ) })
    ] });
  }
);
Ao.displayName = "TimePicker";
const Eo = i.forwardRef(
  ({
    locale: e = Co,
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
    granularity: h = "minute",
    placeholder: m = "dd/mm/aaaa - hh:mm",
    className: z,
    disabledDates: k,
    ...S
  }, E) => {
    const [R, p] = i.useState(n ?? t), C = Pe(null), v = Pe(null), [g, y] = i.useState(n), [D, P] = i.useState(!1), [w, V] = i.useState(
      n ? Et(n, h) : ""
    ), T = Pe(!1), _ = Pe(
      n ? Et(n, h) : ""
    ), j = (N) => {
      if (!N)
        return;
      if (!t) {
        N.setHours(
          R?.getHours() ?? 0,
          R?.getMinutes() ?? 0,
          R?.getSeconds() ?? 0
        ), o?.(N), p(N);
        return;
      }
      const U = (N.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), ge = zs(t, {
        days: Math.ceil(U)
      });
      ge.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(ge), p(ge);
    };
    Ie(() => {
      if (T.current) {
        T.current = !1;
        return;
      }
      const N = n ? Et(n, h) : "";
      n ? (y(n), p(n)) : y(void 0), V(N), _.current = N;
    }, [n, h]);
    const H = (N) => {
      if (!N)
        return;
      T.current = !0;
      const O = Et(N, h);
      o?.(N), p(N), y(N), V(O), _.current = O;
    };
    qr(
      E,
      () => ({
        ...C.current,
        value: g
      }),
      [g]
    );
    function Z(N) {
      const O = N.target.value;
      if (O.replace(/\D/g, "") === "") {
        V(""), _.current = "", T.current = !0, y(void 0), o?.(void 0);
        return;
      }
      const U = N.target.selectionStart ?? O.length, ge = O.slice(0, U).replace(/\D/g, "").length, ze = Al(O, h);
      V(ze), requestAnimationFrame(() => {
        if (v.current) {
          let Ve = 0, ae = ze.length;
          for (let Ee = 0; Ee < ze.length; Ee++)
            if (/\d/.test(ze[Ee]) && Ve++, Ve === ge) {
              ae = Ee + 1;
              break;
            }
          v.current.setSelectionRange(ae, ae);
        }
      });
      const Ae = Fr(ze, h);
      Ae && (T.current = !0, _.current = ze, o?.(Ae), y(Ae), p(Ae));
    }
    function le() {
      !(Fr(w, h) !== null) && w !== "" && V(_.current);
    }
    return /* @__PURE__ */ c(yt, { open: D, onOpenChange: P, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: a(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            d && "cursor-not-allowed opacity-50",
            z
          ),
          children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: v,
                value: w,
                onChange: Z,
                onBlur: le,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ r(vt, { asChild: !0, disabled: d, children: /* @__PURE__ */ r(
              "button",
              {
                ref: C,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ r(ls, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(dt, { className: "w-auto p-0", children: [
        /* @__PURE__ */ r(
          So,
          {
            selected: g,
            onSelect: (N) => {
              N && (N.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), H(N));
            },
            onMonthChange: j,
            month: g ?? R,
            locale: e,
            disabled: k,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...S,
            mode: "single"
          }
        ),
        h !== "day" && /* @__PURE__ */ r("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ r(
          Ao,
          {
            onChange: (N) => {
              if (T.current = !0, o?.(N), y(N), N) {
                p(N);
                const O = Et(N, h);
                V(O), _.current = O;
              }
            },
            date: R,
            hourCycle: s,
            granularity: h
          }
        ) })
      ] })
    ] });
  }
);
Eo.displayName = "DateTimePicker";
const _c = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Ue, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(wt, { children: /* @__PURE__ */ r(
          Eo,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
}, Lo = X.Root, El = X.Trigger, Ll = X.Portal, Ac = X.Close, Oo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Overlay,
  {
    ref: n,
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Oo.displayName = X.Overlay.displayName;
const or = i.forwardRef(({ className: e, onClose: t, ...n }, o) => /* @__PURE__ */ c(Ll, { children: [
  /* @__PURE__ */ r(Oo, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    X.Content,
    {
      ref: o,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ r(
          X.Close,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ c("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ r(qt, { className: "h-4 w-4" }),
              /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
or.displayName = X.Content.displayName;
const Fo = ({
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
Fo.displayName = "DialogHeader";
const Ol = ({
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
Ol.displayName = "DialogFooter";
const Vo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Title,
  {
    ref: n,
    className: a(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Vo.displayName = X.Title.displayName;
const jo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
jo.displayName = X.Description.displayName;
const Ec = Y.Root, Lc = Y.Trigger, Oc = Y.Group, Fc = Y.Portal, Vc = Y.Sub, jc = Y.RadioGroup, Fl = i.forwardRef(({ className: e, inset: t, children: n, ...o }, s) => /* @__PURE__ */ c(
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
      /* @__PURE__ */ r($t, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Fl.displayName = Y.SubTrigger.displayName;
const Vl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Vl.displayName = Y.SubContent.displayName;
const jl = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(Y.Portal, { children: /* @__PURE__ */ r(
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
jl.displayName = Y.Content.displayName;
const Wl = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
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
Wl.displayName = Y.Item.displayName;
const Hl = i.forwardRef(({ className: e, children: t, checked: n, ...o }, s) => /* @__PURE__ */ c(
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
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Y.ItemIndicator, { children: /* @__PURE__ */ r(Bt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Hl.displayName = Y.CheckboxItem.displayName;
const Bl = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Y.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Y.ItemIndicator, { children: /* @__PURE__ */ r(Xr, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Bl.displayName = Y.RadioItem.displayName;
const $l = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
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
$l.displayName = Y.Label.displayName;
const ql = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Y.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ql.displayName = Y.Separator.displayName;
const Kl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: a("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Kl.displayName = "DropdownMenuShortcut";
function Wo({
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
const Ul = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ r(
  "table",
  {
    ref: n,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ul.displayName = "Table";
const Ho = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "thead",
  {
    ref: n,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Ho.displayName = "TableHeader";
const Bo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "tbody",
  {
    ref: n,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Bo.displayName = "TableBody";
const $o = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
$o.displayName = "TableFooter";
const qe = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
qe.displayName = "TableRow";
const qo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
qo.displayName = "TableHead";
const tt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
tt.displayName = "TableCell";
const Gl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "caption",
  {
    ref: n,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Gl.displayName = "TableCaption";
const Xl = ht.Provider, ar = ht.Root, sr = ht.Trigger, kn = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(ht.Portal, { children: /* @__PURE__ */ r(
  ht.Content,
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
kn.displayName = ht.Content.displayName;
const zn = Ht.forwardRef(({ className: e, type: t, ...n }, o) => t === "textarea" ? /* @__PURE__ */ r(
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
)), Gt = {
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
}, Vr = {
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
function Yl(e) {
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
function Lt(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function jt(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function Pn(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function Me(e) {
  return jt(e) || Pn(e);
}
function Ko(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function Wt(e, t, n, o, s) {
  return !!(t.meta?.isActions || o && Ko(e) || s && n);
}
function $n(e) {
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
function $e(e, t = "w") {
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
function Zn(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(Zn).filter(Boolean).join(" ").trim() : Ja(e) ? Zn(e.props.children) : "";
}
function hn(e) {
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
      }), s = Zn(o);
      if (s)
        return s;
    } catch {
    }
  return Vr[e.id] ? Vr[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function Ql(e, t) {
  const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    n.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = Lt(l, d), h = l.meta, m = d === e.length - 1;
    if (Me(u)) {
      n.add(u);
      return;
    }
    if (h?.defaultPinned === "left") {
      n.add(u);
      return;
    }
    (h?.defaultPinned === "right" || Wt(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(n).sort((l, d) => {
      const u = (h) => jt(h) ? 0 : Pn(h) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function jr(e, t) {
  if (!e || e.length === 0)
    return t;
  const n = new Set(t), o = e.filter((d) => n.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (jt(d))
        l.unshift(d);
      else if (Pn(d)) {
        const h = l.findIndex(jt);
        l.splice(h + 1, 0, d);
      } else Ko(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function ft(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((n, o) => n === t[o]);
}
const Wr = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", Jl = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ r(cs, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c(nt, { children: [
      "Segure ",
      /* @__PURE__ */ r("kbd", { className: Wr, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ r(Yr, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ r(bn, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ r(us, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ r(Qr, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c(nt, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ r("kbd", { className: Wr, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ r(er, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ r(ms, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c(nt, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ r(yn, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Zl({
  labels: e = Gt
}) {
  return /* @__PURE__ */ c(Lo, { children: [
    /* @__PURE__ */ c(ar, { children: [
      /* @__PURE__ */ r(sr, { asChild: !0, children: /* @__PURE__ */ r(El, { asChild: !0, children: /* @__PURE__ */ r(
        me,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ r(ds, {})
        }
      ) }) }),
      /* @__PURE__ */ r(kn, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(or, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(Fo, { children: [
        /* @__PURE__ */ r(Vo, { className: "text-base", children: e.helpModalTitle }),
        /* @__PURE__ */ r(jo, { children: e.helpModalDescription })
      ] }),
      /* @__PURE__ */ r("div", { className: "divide-y divide-border rounded-md border border-border bg-card", children: Jl.map((t) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3 p-2.5", children: [
        /* @__PURE__ */ r("div", { className: "size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0", children: t.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ r("p", { className: "text-xs font-semibold text-foreground leading-tight", children: t.title }),
          /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground leading-relaxed", children: t.description })
        ] })
      ] }, t.id)) })
    ] })
  ] });
}
function ed({
  column: e,
  label: t,
  isActionsCol: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  labels: d
}) {
  const u = e.columnDef.meta, m = e.getIsPinned() === "left", z = o && !n && u?.enableReordering !== !1, k = s && !n && e.getCanPin() && u?.enablePinning !== !1, S = l && !n && e.getCanHide(), {
    attributes: E,
    listeners: R,
    setNodeRef: p,
    transform: C,
    transition: v,
    isDragging: g
  } = ho({
    id: e.id,
    disabled: !z,
    animateLayoutChanges: () => !1
  }), y = {
    transform: xo.Transform.toString(C),
    transition: v
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: p,
      style: y,
      className: a(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        g ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative" : "hover:bg-muted/70",
        !e.getIsVisible() && "opacity-60"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          z ? /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              ...E,
              ...R,
              className: "text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5",
              title: d.columnManagerFooterHint,
              children: /* @__PURE__ */ r(to, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ r("span", { className: "w-4 shrink-0" }),
          S ? /* @__PURE__ */ r(
            xt,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (D) => e.toggleVisibility(!!D),
              "aria-label": t
            }
          ) : /* @__PURE__ */ r(xt, { checked: !0, disabled: !0, "aria-label": t }),
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
              /* @__PURE__ */ r(no, { className: "size-2.5" }),
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
              bn,
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
function td({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: h = Gt
}) {
  const [m, z] = ue(""), k = lo(
    fn(co, {
      activationConstraint: { distance: 4 }
    }),
    fn(uo, {
      coordinateGetter: po
    })
  ), S = e.getAllLeafColumns(), E = S.filter(
    (g) => !Me(g.id)
  ), R = m.trim().toLowerCase(), p = R ? E.filter(
    (g) => hn(g).toLowerCase().includes(R)
  ) : E, C = E.filter(
    (g) => !g.getIsVisible()
  ).length, v = (g) => {
    const { active: y, over: D } = g;
    if (!D || y.id === D.id) return;
    const P = String(y.id), w = String(D.id), V = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : S.map((U) => U.id), T = V.indexOf(P), _ = V.indexOf(w);
    T !== -1 && _ !== -1 && e.setColumnOrder(pt(V, T, _));
    const j = e.getState().columnPinning.left ?? [], H = j.indexOf(P), Z = j.indexOf(w);
    H !== -1 && Z !== -1 && e.setColumnPinning((U) => ({
      ...U,
      left: pt(U.left ?? [], H, Z)
    }));
    const le = e.getState().columnPinning.right ?? [], N = le.indexOf(P), O = le.indexOf(w);
    N !== -1 && O !== -1 && e.setColumnPinning((U) => ({
      ...U,
      right: pt(U.right ?? [], N, O)
    }));
  };
  return /* @__PURE__ */ c(yt, { children: [
    /* @__PURE__ */ r(vt, { asChild: !0, children: /* @__PURE__ */ c(
      me,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: h.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ r(Yr, {}),
          /* @__PURE__ */ r("span", { children: h.columnsButton }),
          C > 0 && /* @__PURE__ */ c(
            Yn,
            {
              variant: "secondary",
              className: "ml-1 px-1.5 py-0 text-xs font-semibold",
              children: [
                E.length - C,
                "/",
                E.length
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c(dt, { align: "end", className: "w-76 p-0 shadow-lg", children: [
      /* @__PURE__ */ c("div", { className: "p-2.5 border-b space-y-2 bg-muted/30", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r("span", { className: "text-xs font-semibold text-foreground", children: h.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            C > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => e.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ r(tr, { className: "size-3" }),
                  h.showAllColumns
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
                  /* @__PURE__ */ r(yn, { className: "size-3" }),
                  h.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        E.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ r(Gr, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ r(
            zn,
            {
              value: m,
              onChange: (g) => z(g.target.value),
              placeholder: h.searchColumnsPlaceholder,
              className: "h-7 pl-8 pr-7 text-xs bg-background"
            }
          ),
          m && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              onClick: () => z(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
              children: /* @__PURE__ */ r(qt, { className: "size-3" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: p.length === 0 ? /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground text-center py-4", children: h.noColumnsFound }) : /* @__PURE__ */ r(
        mo,
        {
          sensors: k,
          collisionDetection: fo,
          modifiers: [Ps],
          onDragEnd: v,
          children: /* @__PURE__ */ r(
            go,
            {
              items: p.map((g) => g.id),
              strategy: Ts,
              children: p.map((g, y) => {
                const D = y === S.length - 1, P = Wt(
                  g.id,
                  g.columnDef,
                  D,
                  t,
                  n
                );
                return /* @__PURE__ */ r(
                  ed,
                  {
                    column: g,
                    label: hn(g),
                    isActionsCol: P,
                    enableColumnOrdering: o && !m.trim(),
                    enableColumnPinning: s,
                    enableColumnVisibility: l,
                    labels: h
                  },
                  g.id
                );
              })
            }
          )
        }
      ) }),
      /* @__PURE__ */ r("div", { className: "px-3 py-1.5 border-t bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground", children: /* @__PURE__ */ r("span", { children: h.columnManagerFooterHint }) })
    ] })
  ] });
}
function nd({
  table: e,
  totalRecords: t,
  showTotalRecords: n = !0,
  showDensityToggle: o = !0,
  showHelpButton: s = !0,
  density: l,
  onDensityChange: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: h,
  enableColumnOrdering: m,
  enableColumnPinning: z,
  enableColumnVisibility: k,
  isCustomized: S,
  onReset: E,
  canScrollLeft: R,
  canScrollRight: p,
  onScrollHorizontal: C,
  toolbarLeftContent: v,
  toolbarRightContent: g,
  labels: y = Gt,
  className: D
}) {
  const w = e.getAllLeafColumns().filter(
    (_) => !Me(_.id) && !_.getIsVisible()
  ).length, V = t ?? e.getRowModel().rows.length, T = R || p;
  return /* @__PURE__ */ c(
    "div",
    {
      className: a(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        D
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2 min-w-0", children: [
          n && /* @__PURE__ */ c("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            y.totalRecords,
            " ",
            /* @__PURE__ */ r("strong", { className: "font-semibold text-foreground", children: V.toLocaleString("pt-BR") })
          ] }),
          v,
          w > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => e.toggleAllColumnsVisible(!0),
              title: y.showAllColumns,
              className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ r(tr, { className: "size-3" }),
                w,
                " ",
                w === 1 ? y.hiddenColumnSingular : y.hiddenColumnPlural
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto shrink-0", children: [
          g,
          T && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ r(
              me,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => C("left"),
                title: y.scrollLeft,
                "aria-label": y.scrollLeft,
                children: /* @__PURE__ */ r(Jr, {})
              }
            ),
            /* @__PURE__ */ r(
              me,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !p,
                onClick: () => C("right"),
                title: y.scrollRight,
                "aria-label": y.scrollRight,
                children: /* @__PURE__ */ r($t, {})
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
                  me,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: y.densityUltraCompact,
                    children: /* @__PURE__ */ r(Zr, {})
                  }
                ),
                /* @__PURE__ */ r(
                  me,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: y.densityCompact,
                    children: /* @__PURE__ */ r(er, {})
                  }
                ),
                /* @__PURE__ */ r(
                  me,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: y.densityComfortable,
                    children: /* @__PURE__ */ r(eo, {})
                  }
                )
              ]
            }
          ),
          (k || m || z) && /* @__PURE__ */ r(
            td,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: h,
              enableColumnOrdering: m,
              enableColumnPinning: z,
              enableColumnVisibility: k,
              isCustomized: S,
              onReset: E,
              labels: y
            }
          ),
          S && /* @__PURE__ */ c(ar, { children: [
            /* @__PURE__ */ r(sr, { asChild: !0, children: /* @__PURE__ */ r(
              me,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: E,
                "aria-label": y.resetToDefaultTooltip,
                children: /* @__PURE__ */ r(yn, {})
              }
            ) }),
            /* @__PURE__ */ r(kn, { side: "bottom", children: y.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ r(Zl, { labels: y })
        ] })
      ]
    }
  );
}
function rd({
  position: e,
  onClose: t,
  table: n,
  density: o,
  onDensityChange: s,
  showDensityToggle: l = !0,
  pinActionsColumnRight: d,
  pinLastColumnRight: u,
  enableColumnPinning: h,
  enableColumnVisibility: m,
  isCustomized: z,
  onReset: k,
  labels: S = Gt
}) {
  const E = Pe(null);
  if (Ie(() => {
    if (!e) return;
    const y = (D) => {
      D instanceof KeyboardEvent && D.key !== "Escape" || D instanceof MouseEvent && E.current?.contains(D.target) || t();
    };
    return document.addEventListener("mousedown", y), document.addEventListener("keydown", y), () => {
      document.removeEventListener("mousedown", y), document.removeEventListener("keydown", y);
    };
  }, [e, t]), !e) return null;
  const R = n.getAllLeafColumns(), p = R.filter(
    (y) => !Me(y.id)
  ), C = p.filter(
    (y) => !y.getIsVisible()
  ).length, v = typeof window < "u" ? Math.min(e.x, Math.max(16, window.innerWidth - 272)) : e.x, g = typeof window < "u" ? Math.min(e.y, Math.max(16, window.innerHeight - 380)) : e.y;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: E,
      className: "fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95",
      style: { top: g, left: v },
      children: [
        /* @__PURE__ */ c("div", { className: "px-3 py-2 bg-muted/40 border-b flex items-center justify-between", children: [
          /* @__PURE__ */ r("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: S.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            C > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => n.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer",
                title: S.showAllColumns,
                children: [
                  /* @__PURE__ */ r(tr, { className: "size-3" }),
                  S.showAllColumns
                ]
              }
            ),
            z && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => {
                  k(), t();
                },
                className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer",
                title: S.resetToDefault,
                children: [
                  /* @__PURE__ */ r(yn, { className: "size-3" }),
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
                  /* @__PURE__ */ r(Zr, { className: "size-2.5" }),
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
                  /* @__PURE__ */ r(er, { className: "size-2.5" }),
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
                  /* @__PURE__ */ r(eo, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: p.map((y, D) => {
          const P = hn(y), w = y.columnDef.meta, V = D === R.length - 1, T = Wt(
            y.id,
            y.columnDef,
            V,
            d,
            u
          ), j = y.getIsPinned() === "left", H = m && !T && y.getCanHide(), Z = h && !T && y.getCanPin() && w?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ r(
                    xt,
                    {
                      checked: y.getIsVisible(),
                      disabled: !H,
                      onCheckedChange: (le) => y.toggleVisibility(!!le)
                    }
                  ),
                  /* @__PURE__ */ r("span", { className: "truncate text-xs", title: P, children: P })
                ] }),
                T ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ r(no, { className: "size-2.5" }),
                  S.pinnedRightBadge
                ] }) : Z ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => y.pin(j ? !1 : "left"),
                    title: j ? S.unpin : S.pinLeft,
                    "aria-label": j ? S.unpin : S.pinLeft,
                    className: a(
                      "p-1 rounded-xs transition-colors cursor-pointer",
                      j ? "text-primary bg-primary/15 hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    children: /* @__PURE__ */ r(
                      bn,
                      {
                        className: a(
                          "size-3.5 transition-transform",
                          j && "fill-current -rotate-45"
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
function od({
  header: e,
  density: t,
  enableColumnOrdering: n,
  enableColumnPinning: o,
  enableColumnResizing: s,
  isActionsCol: l,
  isSystemLeftCol: d,
  pinnedPosition: u,
  stickyOffset: h,
  isLastLeftPinned: m,
  isFirstRightPinned: z,
  canScrollLeft: k,
  canScrollRight: S,
  labels: E,
  className: R,
  onRegisterHeaderElement: p,
  tableHeight: C
}) {
  const { column: v } = e, g = v.columnDef.meta, y = n && !l && !d && g?.enableReordering !== !1, D = o && !l && !d && v.getCanPin() && g?.enablePinning !== !1, P = v.getCanSort(), w = v.getIsSorted(), V = v.getSortIndex(), T = e.getContext().table.getState().sorting.length > 1 && V >= 0, _ = u === "left", j = u === "right", H = _ || j, {
    attributes: Z,
    listeners: le,
    setNodeRef: N,
    transform: O,
    transition: U,
    isDragging: ge
  } = ho({
    id: v.id,
    disabled: !y,
    animateLayoutChanges: () => !1
  }), ze = (J) => {
    N(J), p(v.id, J);
  }, Ae = O !== null && (O.x !== 0 || O.y !== 0), Ve = h ?? 0, ae = v.columnDef, Ee = e.getContext().table.getState().columnSizing[v.id] !== void 0, F = !!g?.hasExplicitWidth || Ee || l || d || H ? g?.width ?? e.getSize() : void 0, W = ae.minSize ?? g?.minWidth ?? (H ? e.getSize() : void 0), Q = ae.maxSize && ae.maxSize < Number.MAX_SAFE_INTEGER ? ae.maxSize : g?.maxWidth ?? (l ? e.getSize() : void 0), Se = l || d || !!g?.isActions || ae.enableResizing === !1 && (ae.size !== void 0 || ae.width !== void 0 || g?.width !== void 0), he = typeof F == "number" ? `${F}px` : F, fe = {
    width: F,
    minWidth: W,
    maxWidth: Q,
    ...Se ? { "--flash-col-size": he } : {},
    ...Ae ? {
      transform: xo.Translate.toString(O),
      transition: U
    } : {},
    ...H ? {
      backgroundColor: "var(--muted)"
    } : {},
    ..._ ? { position: "sticky", left: `${Ve}px` } : {},
    ...j ? { position: "sticky", right: `${Ve}px` } : {}
  }, q = Pe(!1), Le = e.getResizeHandler(), De = v.getIsResizing(), je = e.getContext().table, Ye = je.options.columnResizeMode === "onEnd", Qe = Ye && De ? je.getState().columnSizingInfo.deltaOffset ?? 0 : 0, We = v.getSize(), Je = ae.minSize ?? g?.minWidth, Nt = Math.max(10, typeof Je == "number" ? Je : 10), Ct = ae.maxSize && ae.maxSize < Number.MAX_SAFE_INTEGER ? ae.maxSize : typeof g?.maxWidth == "number" ? g.maxWidth : void 0, Oe = -(We - Nt), St = Ct !== void 0 ? Ct - We : void 0;
  let He = Qe;
  He < Oe && (He = Oe), St !== void 0 && He > St && (He = St);
  const In = (J) => {
    J.stopPropagation(), q.current = !0;
    const G = () => {
      window.setTimeout(() => {
        q.current = !1;
      }, 0), window.removeEventListener("mouseup", G);
    };
    window.addEventListener("mouseup", G), Le(J);
  }, Dn = (J) => {
    J.stopPropagation(), q.current = !0;
    const G = () => {
      window.setTimeout(() => {
        q.current = !1;
      }, 0), window.removeEventListener("touchend", G), window.removeEventListener("touchcancel", G);
    };
    window.addEventListener("touchend", G), window.addEventListener("touchcancel", G), Le(J);
  }, _n = (J) => {
    q.current || v.getIsResizing() || P && v.getToggleSortingHandler()?.(J);
  }, Yt = (J) => {
    J.stopPropagation(), H ? v.pin(!1) : v.pin("left");
  }, Be = hn(v);
  return /* @__PURE__ */ c(
    qo,
    {
      ref: ze,
      style: fe,
      ...y ? Z : {},
      ...y ? le : {},
      onClick: P ? _n : void 0,
      className: a(
        Se && "flash-table-fixed-cell",
        "group/th select-none whitespace-nowrap align-middle border-b border-border transition-colors font-medium text-muted-foreground",
        d && "[&:has([role=checkbox])]:pr-2",
        H ? "sticky" : "relative",
        // Density sizing & typography - matched to aiqia-ui TableHead
        t === "ultra-compact" && (D ? "h-7 pl-2 pr-5 text-xs" : "h-7 px-2 text-xs"),
        t === "compact" && (l ? "h-8.5 px-2 text-xs" : D ? "h-8.5 pl-3 pr-5 text-xs" : "h-8.5 px-3 text-xs"),
        t === "comfortable" && (l ? "h-10 px-2 text-sm" : D ? "h-10 pl-3 pr-5 text-sm" : "h-10 px-3 text-sm"),
        // Background: 100% opaque bg-muted when pinned so scrolled headers never bleed through
        H ? "bg-muted z-30" : "bg-muted hover:bg-accent z-10",
        // Interactive cursor
        P && "cursor-pointer hover:text-foreground",
        y && !P && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        ge && "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
        // Sticky boundary dividers & scroll shadows
        m && "border-r border-border",
        m && k && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        z && "border-l border-border",
        z && S && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        R,
        g?.headerClassName
      ),
      children: [
        e.isPlaceholder ? null : /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex items-center gap-1.5 w-full min-w-0 overflow-hidden",
              (l || g?.align === "right") && "justify-end",
              (d || g?.align === "center") && "justify-center"
            ),
            children: [
              y && /* @__PURE__ */ r(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: E.columnManagerFooterHint,
                  children: /* @__PURE__ */ r(to, { className: "size-3" })
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: a(
                    "flex items-center gap-1 min-w-0",
                    !d && "flex-1",
                    (l || g?.align === "right") && "justify-end",
                    (d || g?.align === "center") && "justify-center"
                  ),
                  children: [
                    /* @__PURE__ */ r(
                      "span",
                      {
                        className: "truncate",
                        title: d ? void 0 : Be,
                        children: Gn(v.columnDef.header, e.getContext())
                      }
                    ),
                    g?.headerTooltip && /* @__PURE__ */ c(ar, { children: [
                      /* @__PURE__ */ r(sr, { asChild: !0, children: /* @__PURE__ */ r(
                        "span",
                        {
                          onClick: (J) => J.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ r(fs, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ r(kn, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: g.headerTooltip })
                    ] }),
                    P && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      w === "asc" ? /* @__PURE__ */ r(ps, { className: "size-3.5 text-foreground" }) : w === "desc" ? /* @__PURE__ */ r(gs, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ r(Qr, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      T && /* @__PURE__ */ r("span", { className: "text-[9px] font-bold text-foreground leading-none", children: V + 1 })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        D && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: Yt,
            onPointerDown: (J) => J.stopPropagation(),
            title: H ? E.unpin : E.pinLeft,
            "aria-label": H ? E.unpin : E.pinLeft,
            className: a(
              "absolute right-2 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center rounded-xs p-0.5 transition-all cursor-pointer",
              H ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/50 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
            ),
            children: /* @__PURE__ */ r(
              bn,
              {
                className: a(
                  "size-3 transition-transform",
                  _ && "fill-current -rotate-45",
                  j && "fill-current rotate-45"
                )
              }
            )
          }
        ),
        s && v.getCanResize() && !d && !l && /* @__PURE__ */ r(
          "div",
          {
            onMouseDown: In,
            onTouchStart: Dn,
            onDoubleClick: (J) => {
              J.stopPropagation(), v.resetSize();
            },
            onClick: (J) => J.stopPropagation(),
            onPointerDown: (J) => J.stopPropagation(),
            title: E.resetColumnWidth,
            style: {
              transform: Ye && De && He ? `translateX(${He}px)` : void 0
            },
            className: a(
              "group/resize absolute -right-2 top-0 z-30 flex h-full w-4 cursor-col-resize select-none touch-none items-center justify-center",
              De && "z-50"
            ),
            children: De ? /* @__PURE__ */ r(
              "div",
              {
                style: {
                  height: C ? `${C}px` : "100%"
                },
                className: "absolute top-0 w-[2px] bg-primary shadow-sm pointer-events-none"
              }
            ) : /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-1.5 pointer-events-none transition-opacity duration-150 opacity-0 group-hover/th:opacity-60 group-hover/resize:opacity-100", children: [
              /* @__PURE__ */ r("span", { className: "w-[2px] h-3.5 rounded-full bg-muted-foreground/60 group-hover/resize:bg-primary transition-colors shrink-0" }),
              /* @__PURE__ */ r("span", { className: "w-[2px] h-3.5 rounded-full bg-muted-foreground/60 group-hover/resize:bg-primary transition-colors shrink-0" })
            ] })
          }
        )
      ]
    }
  );
}
function dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hr(e, t) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((s) => {
    const l = s.id ?? ("accessorKey" in s ? String(s.accessorKey) : "");
    if (l) {
      const d = s.minSize;
      n.set(
        l,
        Math.max(10, typeof d == "number" ? d : 10)
      );
    }
  });
  const o = {};
  for (const [s, l] of Object.entries(e))
    if (typeof l == "number") {
      const d = n.get(s) ?? 10;
      o[s] = Math.max(d, l);
    }
  return o;
}
function ad({
  columns: e,
  tableId: t,
  persistState: n,
  storageScope: o,
  storagePrefix: s = "aiqia-ui:flash-table:v1",
  storage: l,
  defaultDensity: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: h,
  defaultPinnedLeft: m,
  defaultPinnedRight: z,
  propColumnVisibility: k,
  onColumnVisibilityChange: S,
  propColumnSizing: E,
  onColumnSizingChange: R,
  propColumnOrder: p,
  onColumnOrderChange: C,
  propColumnPinning: v,
  onColumnPinningChange: g,
  propDensity: y,
  onDensityChange: D
}) {
  const P = we(
    () => e.map((F, W) => Lt(F, W)),
    [e]
  ), w = we(
    () => Ql(e, {
      pinActionsColumnRight: u,
      pinLastColumnRight: h,
      defaultPinnedLeft: m,
      defaultPinnedRight: z
    }),
    [
      e,
      u,
      h,
      m,
      z
    ]
  ), V = we(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), T = we(() => {
    const F = Yl(o), W = typeof window < "u" ? window.location.pathname : "app", Q = t || `${W}::${P.join("|")}`;
    return `${s}:${F}:${Q}`;
  }, [t, P, o, s]), _ = ce(() => {
    const F = w.left ?? [], W = w.right ?? [], Q = /* @__PURE__ */ new Set([...F, ...W]), he = {
      columnOrder: [
        ...F,
        ...P.filter((fe) => !Q.has(fe)),
        ...W
      ],
      columnVisibility: {},
      columnPinning: w,
      columnSizing: {},
      density: d
    };
    if (!n || !V)
      return he;
    try {
      const fe = V.getItem(T);
      if (!fe) return he;
      const q = JSON.parse(fe), Le = new Set(P), De = jr(
        Array.isArray(q.columnOrder) ? q.columnOrder : [],
        P
      ), je = Array.isArray(q.columnPinning?.left) ? q.columnPinning.left.filter((Oe) => Le.has(Oe)) : w.left ?? [], Ye = Array.isArray(q.columnPinning?.right) ? q.columnPinning.right.filter((Oe) => Le.has(Oe)) : w.right ?? [], Qe = Array.from(
        /* @__PURE__ */ new Set([
          ...(w.left ?? []).filter(Me),
          ...je
        ])
      ), We = Array.from(
        /* @__PURE__ */ new Set([...Ye, ...w.right ?? []])
      ), Je = /* @__PURE__ */ new Set([...Qe, ...We]), Nt = De.filter((Oe) => !Je.has(Oe));
      return {
        columnOrder: [...Qe, ...Nt, ...We],
        columnVisibility: q.columnVisibility && typeof q.columnVisibility == "object" ? q.columnVisibility : {},
        columnPinning: {
          left: Qe,
          right: We
        },
        columnSizing: q.columnSizing && typeof q.columnSizing == "object" ? Hr(q.columnSizing, e) : {},
        density: q.density === "ultra-compact" || q.density === "compact" || q.density === "comfortable" ? q.density : d
      };
    } catch {
      return he;
    }
  }, [
    P,
    w,
    d,
    n,
    V,
    T
  ]), [j, H] = ue(_);
  Ie(() => {
    H((F) => {
      const W = jr(
        F.columnOrder,
        P
      ), Q = new Set(P), Se = Array.from(
        /* @__PURE__ */ new Set([
          ...(F.columnPinning.right ?? []).filter((fe) => Q.has(fe)),
          ...w.right ?? []
        ])
      ), he = Array.from(
        /* @__PURE__ */ new Set([
          ...(w.left ?? []).filter(Me),
          ...(F.columnPinning.left ?? []).filter((fe) => Q.has(fe))
        ])
      );
      return ft(W, F.columnOrder) && ft(he, F.columnPinning.left) && ft(Se, F.columnPinning.right) ? F : {
        ...F,
        columnOrder: W,
        columnPinning: {
          left: he,
          right: Se
        }
      };
    });
  }, [P, w]);
  const Z = k ?? j.columnVisibility, le = E ?? j.columnSizing, N = p ?? j.columnOrder, O = v ?? j.columnPinning, U = y ?? j.density;
  Ie(() => {
    if (!(!n || !V))
      try {
        const F = {
          columnOrder: N,
          columnVisibility: Z,
          columnPinning: O,
          columnSizing: le,
          density: U
        };
        V.setItem(T, JSON.stringify(F));
      } catch {
      }
  }, [
    n,
    V,
    T,
    N,
    Z,
    O,
    le,
    U
  ]);
  const ge = ce(
    (F) => {
      S?.(F), H((W) => ({
        ...W,
        columnVisibility: dn(F, W.columnVisibility)
      }));
    },
    [S]
  ), ze = ce(
    (F) => {
      R?.(F), H((W) => {
        const Q = dn(F, W.columnSizing);
        return {
          ...W,
          columnSizing: Hr(Q, e)
        };
      });
    },
    [R, e]
  ), Ae = ce(
    (F) => {
      C?.(F), H((W) => ({
        ...W,
        columnOrder: dn(F, W.columnOrder)
      }));
    },
    [C]
  ), Ve = ce(
    (F) => {
      g?.(F), H((W) => {
        const Q = dn(F, W.columnPinning), Se = Q.left ?? [], he = Q.right ?? [], fe = /* @__PURE__ */ new Set([...Se, ...he]), Le = (W.columnOrder.length > 0 ? W.columnOrder : P).filter((je) => !fe.has(je)), De = [...Se, ...Le, ...he];
        return {
          ...W,
          columnPinning: Q,
          columnOrder: De
        };
      });
    },
    [g, P]
  ), ae = ce(
    (F) => {
      D?.(F), H((W) => ({
        ...W,
        density: F
      }));
    },
    [D]
  ), Ee = we(() => {
    const F = Object.values(Z).some(
      (q) => q === !1
    ), W = !ft(N, P), Q = !ft(
      O.left ?? [],
      w.left ?? []
    ), Se = !ft(
      O.right ?? [],
      w.right ?? []
    ), he = Object.keys(le).length > 0;
    return F || W || Q || Se || he || U !== d;
  }, [
    Z,
    N,
    P,
    O,
    w,
    le,
    U,
    d
  ]), Xt = ce(() => {
    if (H({
      columnOrder: P,
      columnVisibility: {},
      columnPinning: w,
      columnSizing: {},
      density: d
    }), S?.({}), C?.(P), g?.(w), R?.({}), D?.(d), n && V)
      try {
        V.removeItem(T);
      } catch {
      }
  }, [
    P,
    w,
    d,
    C,
    g,
    R,
    S,
    D,
    n,
    V,
    T
  ]);
  return {
    columnVisibility: Z,
    onColumnVisibilityChange: ge,
    columnSizing: le,
    onColumnSizingChange: ze,
    columnOrder: N,
    onColumnOrderChange: Ae,
    columnPinning: O,
    onColumnPinningChange: Ve,
    density: U,
    onDensityChange: ae,
    defaultColumnOrder: P,
    defaultColumnPinning: w,
    isCustomized: Ee,
    resetToDefaults: Xt
  };
}
function sd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function id({
  columns: e,
  data: t,
  totalRecords: n,
  tableId: o,
  persistState: s = !0,
  storageScope: l,
  storagePrefix: d,
  storage: u,
  isLoading: h = !1,
  loadingMode: m = "auto",
  skeletonRowsCount: z = 5,
  emptyMessage: k,
  emptyContent: S,
  rowSelection: E,
  onRowSelectionChange: R,
  onSelectedRowsChange: p,
  enableRowSelection: C,
  showSelectionColumn: v,
  isRowSelectable: g,
  selectionDisabledReason: y,
  renderBulkActions: D,
  expanded: P,
  onExpandedChange: w,
  getSubRows: V,
  getRowCanExpand: T,
  renderSubComponent: _,
  showExpandColumn: j = !0,
  expandOnRowClick: H = !1,
  enableSorting: Z = !0,
  enableMultiSort: le = !0,
  sorting: N,
  onSortingChange: O,
  manualSorting: U = !1,
  columnVisibility: ge,
  onColumnVisibilityChange: ze,
  columnSizing: Ae,
  onColumnSizingChange: Ve,
  columnOrder: ae,
  onColumnOrderChange: Ee,
  columnPinning: Xt,
  onColumnPinningChange: F,
  pinActionsColumnRight: W = !0,
  pinLastColumnRight: Q = !1,
  defaultPinnedLeft: Se,
  defaultPinnedRight: he,
  enableColumnOrdering: fe = !0,
  enableColumnPinning: q = !0,
  enableColumnVisibility: Le = !0,
  enableColumnResizing: De = !0,
  columnResizeMode: je = "onEnd",
  enableContextMenu: Ye = !0,
  showToolbar: Qe = !0,
  showTotalRecords: We = !0,
  showDensityToggle: Je = !0,
  showHelpButton: Nt = !0,
  toolbarLeftContent: Ct,
  toolbarRightContent: Oe,
  density: St = "compact",
  onDensityChange: He,
  tableLayout: In = "fixed",
  striped: Dn = !1,
  hoverable: _n = !0,
  stickyHeader: Yt = !0,
  maxHeight: Be,
  className: J,
  classNames: G,
  style: ma,
  getRowId: fa,
  onRowClick: cr,
  onRowDoubleClick: ur,
  rowClassName: mr,
  rowAccentColor: Qt,
  renderRowProgress: fr,
  footerContent: Jt,
  onTableReady: pr,
  labels: gr
}) {
  const be = we(
    () => ({
      ...Gt,
      ...gr,
      ...k ? { emptyMessage: k } : {}
    }),
    [gr, k]
  ), [pa, ga] = ue([]), [ha, xa] = ue({}), [ba, ya] = ue({}), [va, hr] = ue(
    null
  ), [An, wa] = ue(!1), [En, Na] = ue(!1), [Ln, Ca] = ue(
    {}
  ), Rt = Pe(null), Zt = Pe(null), en = Pe(
    /* @__PURE__ */ new Map()
  ), xr = Pe(null), On = Pe(/* @__PURE__ */ new Map()), Fn = Pe(
    /* @__PURE__ */ new Map()
  ), [Sa, br] = ue(void 0), [Ra, yr] = ue([]), vr = N ?? pa, ka = O ?? ga, wr = E ?? ha, za = ce(
    (f) => {
      R?.(f), xa(
        (x) => sd(f, E ?? x)
      );
    },
    [R, E]
  ), Nr = P ?? ba, Pa = w ?? ya, ut = C !== void 0 ? !!C : !!(v || R || p || D), Ma = we(
    () => e.some(
      (f, x) => jt(Lt(f, x))
    ),
    [e]
  ), Cr = (v ?? ut) && !Ma, Sr = !!(_ || V), Ta = we(
    () => e.some(
      (f, x) => Pn(Lt(f, x))
    ),
    [e]
  ), Rr = Sr && j && !Ta, kr = we(() => {
    const f = e.map((b, M) => {
      const A = Lt(b, M), $ = Wt(
        A,
        b,
        M === e.length - 1,
        W,
        Q
      ), L = b.meta, re = b, I = !!(b.size !== void 0 || re.width !== void 0 || L?.width !== void 0 || $e(L?.headerClassName, "w") !== void 0 || $e(L?.cellClassName, "w") !== void 0 || $), ne = b.size ?? re.width ?? L?.width ?? $e(L?.headerClassName, "w") ?? $e(L?.cellClassName, "w"), se = $n(ne), Re = b.minSize ?? re.minWidth ?? L?.minWidth ?? $e(L?.headerClassName, "min-w") ?? $e(L?.cellClassName, "min-w"), oe = $n(Re), ye = b.maxSize ?? re.maxWidth ?? L?.maxWidth ?? $e(L?.headerClassName, "max-w") ?? $e(L?.cellClassName, "max-w"), It = $n(ye);
      let ee = se, de = oe, ie = It, _e = b.enableResizing, ve = b.enableSorting;
      return $ ? (ee === void 0 && (ee = 70), ie === void 0 && (ie = ee), de === void 0 && (de = ee), _e === void 0 && (_e = !1), ve === void 0 && (ve = !1)) : (de = de !== void 0 ? Math.max(10, de) : ee !== void 0 ? Math.max(10, Math.min(60, ee)) : 10, b.enableResizing === !1 && ee !== void 0 && ie === void 0 && (ie = ee)), {
        ...b,
        id: A,
        meta: {
          ...L,
          hasExplicitWidth: I
        },
        ...ee !== void 0 ? { size: ee } : {},
        ...de !== void 0 ? { minSize: de } : {},
        ...ie !== void 0 ? { maxSize: ie } : {},
        ..._e !== void 0 ? { enableResizing: _e } : {},
        ...ve !== void 0 ? { enableSorting: ve } : {}
      };
    }), x = [];
    return Cr && x.push({
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
      header: ({ table: b }) => /* @__PURE__ */ r(
        xt,
        {
          checked: b.getIsAllPageRowsSelected() || b.getIsSomePageRowsSelected() && "indeterminate",
          onCheckedChange: (M) => b.toggleAllPageRowsSelected(!!M),
          "aria-label": be.selectAllRows,
          onClick: (M) => M.stopPropagation()
        }
      ),
      cell: ({ row: b }) => {
        const M = b.getCanSelect();
        return /* @__PURE__ */ r(
          xt,
          {
            checked: b.getIsSelected(),
            disabled: !M,
            title: M ? void 0 : y,
            onCheckedChange: (A) => b.toggleSelected(!!A),
            "aria-label": be.selectRow(b.id),
            onClick: (A) => A.stopPropagation()
          }
        );
      }
    }), Rr && x.push({
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
      cell: ({ row: b }) => {
        if (!b.getCanExpand()) return null;
        const M = b.getIsExpanded();
        return /* @__PURE__ */ r(
          me,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (A) => {
              A.stopPropagation(), b.toggleExpanded();
            },
            "aria-label": M ? be.collapseRow : be.expandRow,
            title: M ? be.collapseRow : be.expandRow,
            children: M ? /* @__PURE__ */ r(st, {}) : /* @__PURE__ */ r($t, {})
          }
        );
      }
    }), [...x, ...f];
  }, [
    e,
    W,
    Q,
    Cr,
    Rr,
    be,
    y
  ]), {
    columnVisibility: kt,
    onColumnVisibilityChange: Ia,
    columnSizing: Ze,
    onColumnSizingChange: Da,
    columnOrder: tn,
    onColumnOrderChange: _a,
    columnPinning: mt,
    onColumnPinningChange: Aa,
    density: pe,
    onDensityChange: zr,
    isCustomized: Pr,
    resetToDefaults: Mr
  } = ad({
    columns: kr,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: St,
    pinActionsColumnRight: W,
    pinLastColumnRight: Q,
    defaultPinnedLeft: Se,
    defaultPinnedRight: he,
    propColumnVisibility: ge,
    onColumnVisibilityChange: ze,
    propColumnSizing: Ae,
    onColumnSizingChange: Ve,
    propColumnOrder: ae,
    onColumnOrderChange: Ee,
    propColumnPinning: Xt,
    onColumnPinningChange: F,
    propDensity: void 0,
    onDensityChange: He
  }), Ea = we(() => typeof C == "function" ? C : g ? (f) => g(f.original) : ut, [C, g, ut]), La = we(() => {
    if (T) return T;
    if (_) return () => !0;
  }, [T, _]), K = Ds({
    data: t,
    columns: kr,
    defaultColumn: {
      minSize: 10
    },
    getRowId: fa,
    getSubRows: V,
    getRowCanExpand: La,
    getCoreRowModel: Es(),
    getSortedRowModel: U ? void 0 : As(),
    getExpandedRowModel: Sr ? _s() : void 0,
    onSortingChange: ka,
    onExpandedChange: Pa,
    onColumnVisibilityChange: Ia,
    onColumnSizingChange: Da,
    onColumnOrderChange: _a,
    onColumnPinningChange: Aa,
    onRowSelectionChange: za,
    manualSorting: U,
    state: {
      sorting: vr,
      expanded: Nr,
      rowSelection: wr,
      columnVisibility: kt,
      columnSizing: Ze,
      columnOrder: tn,
      columnPinning: mt
    },
    enableRowSelection: Ea,
    enableSorting: Z,
    enableMultiSort: le,
    enableColumnResizing: De,
    enableColumnPinning: q,
    columnResizeMode: je
  });
  Ie(() => {
    pr?.(K);
  }, [K, pr]);
  const zt = we(() => ut ? K.getSelectedRowModel().flatRows.map((f) => f.original) : [], [K, wr, t, ut]);
  Ie(() => {
    p?.(zt);
  }, [zt, p]);
  const nn = ce(() => {
    const f = {};
    en.current.forEach((x, b) => {
      if (x) {
        const M = Math.round(x.getBoundingClientRect().width);
        M > 0 && (f[b] = M);
      }
    }), Ca((x) => {
      const b = Object.keys(f);
      return b.length === Object.keys(x).length && b.every((M) => Math.abs((x[M] ?? 0) - f[M]) <= 1) ? x : f;
    });
  }, []), Oa = ce(
    (f, x) => {
      x ? en.current.set(f, x) : en.current.delete(f);
    },
    []
  ), Fa = ce(
    (f, x) => {
      x ? On.current.set(f, x) : On.current.delete(f);
    },
    []
  ), Va = ce(
    (f, x) => {
      x ? Fn.current.set(f, x) : Fn.current.delete(f);
    },
    []
  ), rn = ce(() => {
    if (!Qt) {
      yr((A) => A.length === 0 ? A : []);
      return;
    }
    const f = xr.current;
    if (!f) return;
    const x = f.getBoundingClientRect(), b = K.getRowModel().rows, M = [];
    b.forEach((A, $) => {
      const L = Qt(A.original, $);
      if (!L) return;
      const re = On.current.get(A.id);
      if (!re) return;
      const B = re.getBoundingClientRect(), I = Fn.current.get(A.id), ne = I ? I.getBoundingClientRect().bottom : B.bottom, se = Math.round((B.top - x.top) * 10) / 10, Re = Math.round((ne - B.top) * 10) / 10;
      if (Re <= 0) return;
      const oe = L.startsWith("#") || L.startsWith("rgb") || L.startsWith("hsl") || L.startsWith("oklch") || L.startsWith("var(");
      M.push({
        key: A.id,
        top: se,
        height: Re,
        color: L,
        isCssColor: oe
      });
    }), yr((A) => A.length === M.length && A.every(
      ($, L) => $.key === M[L].key && Math.abs($.top - M[L].top) <= 0.5 && Math.abs($.height - M[L].height) <= 0.5 && $.color === M[L].color
    ) ? A : M);
  }, [Qt, K]), Pt = ce(() => {
    const f = Rt.current;
    if (!f) return;
    const { scrollLeft: x, scrollWidth: b, clientWidth: M } = f, A = Math.max(0, b - M);
    wa(x > 2), Na(A - x > 2);
  }, []);
  Ie(() => {
    const f = Rt.current;
    if (!f) return;
    const x = (b) => {
      if (!b.ctrlKey || !(f.scrollWidth > f.clientWidth + 1)) return;
      const A = Math.abs(b.deltaY) >= Math.abs(b.deltaX) ? b.deltaY : b.deltaX;
      if (A === 0) return;
      const $ = b.deltaMode === 1 ? 32 : b.deltaMode === 2 ? f.clientWidth * 0.8 : 1;
      b.preventDefault(), f.scrollLeft += A * $;
    };
    return f.addEventListener("wheel", x, { passive: !1 }), () => {
      f.removeEventListener("wheel", x);
    };
  }, []), Za(() => {
    nn(), Pt(), rn();
  }, [
    nn,
    Pt,
    rn,
    t,
    kt,
    tn,
    mt,
    Ze,
    pe,
    vr,
    Nr
  ]), Ie(() => {
    const f = Rt.current, x = Zt.current;
    if (!f || typeof ResizeObserver > "u") return;
    const b = new ResizeObserver(() => {
      nn(), Pt(), rn(), Zt.current && br(Zt.current.offsetHeight);
    });
    return x && br(x.offsetHeight), b.observe(f), x && b.observe(x), en.current.forEach((M) => {
      M && b.observe(M);
    }), () => b.disconnect();
  }, [
    Pt,
    nn,
    rn,
    kt,
    tn,
    mt
  ]);
  const ja = ce((f) => {
    const x = Rt.current;
    if (!x) return;
    const b = Math.max(240, Math.floor(x.clientWidth * 0.6));
    x.scrollBy({
      left: f === "left" ? -b : b,
      behavior: "smooth"
    });
  }, []), Mt = K.getVisibleLeafColumns(), {
    stickyOffsets: Vn,
    lastLeftPinnedColumnId: jn,
    firstRightPinnedColumnId: Wn,
    actionsColumnIds: et
  } = we(() => {
    const f = {}, x = /* @__PURE__ */ new Set(), b = K.getAllLeafColumns(), M = /* @__PURE__ */ new Map();
    b.forEach((I, ne) => {
      M.set(I.id, I), Wt(
        I.id,
        I.columnDef,
        ne === b.length - 1,
        W,
        Q
      ) && x.add(I.id);
    });
    const A = (I) => kt[I.id] !== !1 && I.getIsVisible(), $ = (mt.left ?? []).map((I) => M.get(I)).filter(
      (I) => !!I && A(I)
    ), L = (mt.right ?? []).map((I) => M.get(I)).filter(
      (I) => !!I && A(I)
    );
    let re = 0;
    for (const I of $)
      f[I.id] = re, re += Ln[I.id] || I.getSize();
    let B = 0;
    for (let I = L.length - 1; I >= 0; I--) {
      const ne = L[I];
      f[ne.id] = B, B += Ln[ne.id] || ne.getSize();
    }
    return {
      stickyOffsets: f,
      lastLeftPinnedColumnId: $.length > 0 ? $[$.length - 1].id : null,
      firstRightPinnedColumnId: L.length > 0 ? L[0].id : null,
      actionsColumnIds: x
    };
  }, [
    K,
    mt,
    tn,
    kt,
    Ze,
    Ln,
    W,
    Q
  ]), Wa = lo(
    fn(co, {
      activationConstraint: { distance: 6 }
    }),
    fn(uo, {
      coordinateGetter: po
    })
  ), Ha = ce(
    (f) => {
      const { active: x, over: b } = f;
      if (!b || x.id === b.id) return;
      const M = String(x.id), A = String(b.id);
      if (Me(M) || Me(A) || et.has(M) || et.has(A))
        return;
      const $ = K.getState().columnOrder.length > 0 ? K.getState().columnOrder : K.getAllLeafColumns().map((ye) => ye.id), L = $.indexOf(M), re = $.indexOf(A);
      L !== -1 && re !== -1 && K.setColumnOrder(pt($, L, re));
      const B = K.getState().columnPinning.left ?? [], I = B.indexOf(M), ne = B.indexOf(A);
      I !== -1 && ne !== -1 && K.setColumnPinning((ye) => ({
        ...ye,
        left: pt(ye.left ?? [], I, ne)
      }));
      const se = K.getState().columnPinning.right ?? [], Re = se.indexOf(M), oe = se.indexOf(A);
      Re !== -1 && oe !== -1 && K.setColumnPinning((ye) => ({
        ...ye,
        right: pt(ye.right ?? [], Re, oe)
      }));
    },
    [K, et]
  ), Ba = (f) => {
    Ye && (f.preventDefault(), hr({ x: f.clientX, y: f.clientY }));
  }, Tr = ce(() => {
    K.resetRowSelection();
  }, [K]), Tt = K.getRowModel().rows, $a = h && (m === "skeleton" || m === "auto" && Tt.length === 0), qa = h && (m === "overlay" || m === "auto" && Tt.length > 0), Ir = we(
    () => K.getFooterGroups().some(
      (f) => f.headers.some((x) => x.column.columnDef.footer !== void 0)
    ),
    [K]
  ), Ka = Object.keys(Ze).length > 0, Ua = !!K.getState().columnSizingInfo?.isResizingColumn, Dr = In === "fixed" || Ka || Ua, Ga = Be ? {
    maxHeight: typeof Be == "number" ? `${Be}px` : Be
  } : void 0;
  return /* @__PURE__ */ r(Xl, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: ma,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        G?.root,
        J
      ),
      onContextMenu: Ba,
      children: [
        /* @__PURE__ */ r("style", { children: `
          .flash-table-fixed-cell {
            width: var(--flash-col-size) !important;
            min-width: var(--flash-col-size) !important;
            max-width: var(--flash-col-size) !important;
          }
        ` }),
        qa && /* @__PURE__ */ r("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ r(gt, { className: "animate-spin size-6 text-primary" }) }),
        Qe && /* @__PURE__ */ r(
          nd,
          {
            table: K,
            totalRecords: n,
            showTotalRecords: We,
            showDensityToggle: Je,
            showHelpButton: Nt,
            density: pe,
            onDensityChange: zr,
            pinActionsColumnRight: W,
            pinLastColumnRight: Q,
            enableColumnOrdering: fe,
            enableColumnPinning: q,
            enableColumnVisibility: Le,
            isCustomized: Pr,
            onReset: Mr,
            canScrollLeft: An,
            canScrollRight: En,
            onScrollHorizontal: ja,
            toolbarLeftContent: Ct,
            toolbarRightContent: Oe,
            labels: be,
            className: G?.toolbar
          }
        ),
        ut && zt.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              G?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r("span", { className: "font-medium text-foreground", children: be.selectedItemsCount(zt.length) }),
                D?.(zt, Tr)
              ] }),
              /* @__PURE__ */ c(
                me,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: Tr,
                  children: [
                    /* @__PURE__ */ r(qt, {}),
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
            ref: Rt,
            onScroll: Pt,
            style: Ga,
            className: a(
              "relative w-full overflow-auto",
              G?.viewport
            ),
            children: [
              Qt && /* @__PURE__ */ r(
                "div",
                {
                  ref: xr,
                  "aria-hidden": "true",
                  className: "sticky left-0 z-[25] h-0 w-0 overflow-visible pointer-events-none",
                  children: Ra.map((f) => /* @__PURE__ */ r(
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
                mo,
                {
                  sensors: Wa,
                  collisionDetection: fo,
                  modifiers: [Ms],
                  onDragEnd: Ha,
                  children: /* @__PURE__ */ c(
                    "table",
                    {
                      ref: Zt,
                      style: Dr ? {
                        width: K.getTotalSize(),
                        minWidth: "100%"
                      } : void 0,
                      className: a(
                        Dr ? "table-fixed" : "table-auto w-full",
                        "caption-bottom border-separate border-spacing-0",
                        pe === "ultra-compact" && "text-xs",
                        pe === "compact" && "text-sm",
                        pe === "comfortable" && "text-sm",
                        G?.table
                      ),
                      children: [
                        /* @__PURE__ */ r("colgroup", { children: K.getVisibleLeafColumns().map((f) => {
                          const x = f.id, b = et.has(x), M = Me(x), A = f.columnDef.meta, $ = f.columnDef, L = b || M || !!A?.isActions || $.enableResizing === !1 && ($.size !== void 0 || $.width !== void 0 || A?.width !== void 0), re = Ze[x] !== void 0;
                          if (!(!!A?.hasExplicitWidth || re || L || !!f.getIsPinned()))
                            return /* @__PURE__ */ r("col", {}, x);
                          const ne = `${f.getSize()}px`;
                          return /* @__PURE__ */ r(
                            "col",
                            {
                              style: {
                                width: ne,
                                ...L ? {
                                  "--flash-col-size": ne
                                } : {}
                              },
                              className: L ? "flash-table-fixed-cell" : void 0
                            },
                            x
                          );
                        }) }),
                        /* @__PURE__ */ r(
                          Ho,
                          {
                            className: a(
                              "bg-muted",
                              Yt && Be && "sticky top-0 z-30 bg-muted",
                              G?.header
                            ),
                            children: K.getHeaderGroups().map((f) => /* @__PURE__ */ r(
                              qe,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  G?.headerRow
                                ),
                                children: /* @__PURE__ */ r(
                                  go,
                                  {
                                    items: f.headers.map((x) => x.column.id),
                                    strategy: Is,
                                    children: f.headers.map((x) => {
                                      const b = x.column.id, M = x.column.getIsPinned(), A = et.has(b), $ = Me(b);
                                      return /* @__PURE__ */ r(
                                        od,
                                        {
                                          header: x,
                                          density: pe,
                                          enableColumnOrdering: fe,
                                          enableColumnPinning: q,
                                          enableColumnResizing: De,
                                          isActionsCol: A,
                                          isSystemLeftCol: $,
                                          pinnedPosition: M,
                                          stickyOffset: Vn[b],
                                          isLastLeftPinned: b === jn,
                                          isFirstRightPinned: b === Wn,
                                          canScrollLeft: An,
                                          canScrollRight: En,
                                          labels: be,
                                          className: G?.headerCell,
                                          onRegisterHeaderElement: Oa,
                                          tableHeight: Sa
                                        },
                                        x.id
                                      );
                                    })
                                  }
                                )
                              },
                              f.id
                            ))
                          }
                        ),
                        /* @__PURE__ */ r(Bo, { className: G?.body, children: $a ? Array.from({ length: z }).map((f, x) => /* @__PURE__ */ r(
                          qe,
                          {
                            className: "border-b-0 hover:bg-transparent",
                            children: Mt.map((b) => /* @__PURE__ */ r(
                              tt,
                              {
                                className: a(
                                  "border-b border-border/60",
                                  pe === "ultra-compact" && "py-0.5 px-2",
                                  pe === "compact" && "py-1 px-3",
                                  pe === "comfortable" && "py-2 px-3"
                                ),
                                children: /* @__PURE__ */ r(Wo, { className: "h-4 w-full max-w-[140px]" })
                              },
                              `skeleton-${x}-${b.id}`
                            ))
                          },
                          `skeleton-${x}`
                        )) : Tt.length > 0 ? Tt.map((f, x) => {
                          const b = fr ? fr(f.original) : null, A = f.getIsExpanded() && !!_, $ = f.getVisibleCells(), L = x % 2 === 1, re = x === Tt.length - 1;
                          return /* @__PURE__ */ c(es, { children: [
                            /* @__PURE__ */ r(
                              qe,
                              {
                                ref: (B) => Fa(f.id, B),
                                "data-state": f.getIsSelected() && "selected",
                                onClick: (B) => {
                                  H && f.getCanExpand() && f.toggleExpanded(), cr?.(f.original, B);
                                },
                                onDoubleClick: ur ? (B) => ur(f.original, B) : void 0,
                                className: a(
                                  "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)]",
                                  Dn && L && "bg-muted/80 dark:bg-muted/40 [--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_80%,var(--card))] dark:[--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_40%,var(--card))]",
                                  _n ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] dark:hover:bg-muted dark:hover:[--flash-table-cell-bg:var(--muted)]" : "hover:bg-transparent",
                                  "data-[state=selected]:bg-muted data-[state=selected]:[--flash-table-cell-bg:var(--muted)] dark:data-[state=selected]:bg-muted dark:data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                  (cr || H && f.getCanExpand()) && "cursor-pointer",
                                  G?.row,
                                  mr ? mr(f.original, x) : ""
                                ),
                                children: $.map((B) => {
                                  const I = B.column.id, ne = B.column.getIsPinned(), se = ne === "left", Re = ne === "right", oe = se || Re, ye = I === jn, It = I === Wn, ee = et.has(I), de = Me(I), ie = B.column.columnDef.meta, _e = Vn[I] ?? 0, ve = B.column.columnDef, on = Ze[I] !== void 0, an = !!ie?.hasExplicitWidth || on || ee || de || oe ? ie?.width ?? B.column.getSize() : void 0, Dt = ve.minSize ?? ie?.minWidth ?? (oe ? B.column.getSize() : void 0), Xa = ve.maxSize && ve.maxSize < Number.MAX_SAFE_INTEGER ? ve.maxSize : ie?.maxWidth ?? (ee ? B.column.getSize() : void 0), Hn = ee || de || !!ie?.isActions || ve.enableResizing === !1 && (ve.size !== void 0 || ve.width !== void 0 || ie?.width !== void 0), Ya = typeof an == "number" ? `${an}px` : an, Qa = {
                                    width: an,
                                    minWidth: Dt,
                                    maxWidth: Xa,
                                    ...Hn ? { "--flash-col-size": Ya } : {},
                                    ...oe ? {
                                      backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                    } : {},
                                    ...se ? {
                                      position: "sticky",
                                      left: `${_e}px`
                                    } : {},
                                    ...Re ? {
                                      position: "sticky",
                                      right: `${_e}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    tt,
                                    {
                                      style: Qa,
                                      className: a(
                                        Hn && "flash-table-fixed-cell",
                                        ie?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                        "align-middle transition-colors",
                                        de && "[&:has([role=checkbox])]:pr-2",
                                        oe && "sticky",
                                        // Row bottom border
                                        (!re || Ir || Jt) && !b && !A && "border-b border-border",
                                        // Density padding
                                        pe === "ultra-compact" && "py-0.5 px-2 text-xs",
                                        pe === "compact" && (ee ? "py-1 px-2 text-sm" : "py-1 px-3 text-sm"),
                                        pe === "comfortable" && (ee ? "py-2 px-2 text-sm" : "py-2 px-3 text-sm"),
                                        // Alignment
                                        (ee || ie?.align === "right") && "text-right",
                                        (de || ie?.align === "center") && "text-center",
                                        // Pinned cell stacking context (opaque background comes from --flash-table-cell-bg)
                                        oe && "z-20",
                                        // Sticky boundary dividers & directional shadows
                                        ye && "border-r border-border",
                                        ye && An && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        It && "border-l border-border",
                                        It && En && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        G?.cell,
                                        ie?.cellClassName
                                      ),
                                      children: /* @__PURE__ */ r(
                                        "div",
                                        {
                                          style: Dt !== void 0 && !Hn && !ee ? {
                                            minWidth: typeof Dt == "number" ? `${Dt}px` : Dt
                                          } : void 0,
                                          className: "w-full",
                                          children: Gn(
                                            B.column.columnDef.cell,
                                            B.getContext()
                                          )
                                        }
                                      )
                                    },
                                    B.id
                                  );
                                })
                              }
                            ),
                            A && _ && /* @__PURE__ */ r(
                              qe,
                              {
                                ref: (B) => Va(f.id, B),
                                className: a(
                                  "bg-muted/20 hover:bg-muted/20 border-b-0",
                                  G?.expandedRow
                                ),
                                children: /* @__PURE__ */ r(
                                  tt,
                                  {
                                    colSpan: Mt.length || 1,
                                    className: a(
                                      "p-3",
                                      !re && !b && "border-b border-border"
                                    ),
                                    children: _({
                                      row: f,
                                      data: f.original
                                    })
                                  }
                                )
                              }
                            ),
                            b && /* @__PURE__ */ r("tr", { className: "p-0 m-0 border-0 pointer-events-none select-none", children: /* @__PURE__ */ r(
                              "td",
                              {
                                colSpan: Mt.length || 1,
                                className: "p-0 m-0 border-b border-border h-[2px] leading-none bg-muted",
                                children: /* @__PURE__ */ r(
                                  "div",
                                  {
                                    className: a(
                                      "h-[2px] transition-all duration-300",
                                      b.color || "bg-primary"
                                    ),
                                    style: {
                                      width: `${Math.min(100, Math.max(1, b.percent < 1 ? 1 : b.percent))}%`,
                                      minWidth: "4px"
                                    }
                                  }
                                )
                              }
                            ) })
                          ] }, f.id);
                        }) : /* @__PURE__ */ r(qe, { className: "hover:bg-transparent", children: /* @__PURE__ */ r(
                          tt,
                          {
                            colSpan: Mt.length || e.length || 1,
                            className: a(
                              "h-24 text-center text-muted-foreground text-sm",
                              G?.emptyCell
                            ),
                            children: h ? be.loadingMessage : S ?? /* @__PURE__ */ r("span", { className: "italic", children: be.emptyMessage })
                          }
                        ) }) }),
                        (Ir || Jt) && /* @__PURE__ */ r(
                          $o,
                          {
                            className: a(
                              "border-t bg-muted/50 font-medium",
                              Yt && Be && "sticky bottom-0 z-30 bg-muted",
                              G?.footer
                            ),
                            children: Jt ? /* @__PURE__ */ r(qe, { className: G?.footerRow, children: /* @__PURE__ */ r(
                              tt,
                              {
                                colSpan: Mt.length || 1,
                                className: a(
                                  "px-3 py-2 border-t border-border",
                                  G?.footerCell
                                ),
                                children: Jt
                              }
                            ) }) : K.getFooterGroups().map((f) => /* @__PURE__ */ r(
                              qe,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  G?.footerRow
                                ),
                                children: f.headers.map((x) => {
                                  const b = x.column.id, M = x.column.getIsPinned(), A = M === "left", $ = M === "right", L = A || $, re = b === jn, B = b === Wn, I = et.has(b), ne = Me(b), se = x.column.columnDef.meta, Re = Vn[b] ?? 0, oe = x.column.columnDef, ye = Ze[b] !== void 0, ee = !!se?.hasExplicitWidth || ye || I || ne || L ? se?.width ?? x.getSize() : void 0, de = oe.minSize ?? se?.minWidth ?? (L ? x.getSize() : void 0), ie = oe.maxSize && oe.maxSize < Number.MAX_SAFE_INTEGER ? oe.maxSize : se?.maxWidth ?? (I ? x.getSize() : void 0), _e = I || ne || !!se?.isActions || oe.enableResizing === !1 && (oe.size !== void 0 || oe.width !== void 0 || se?.width !== void 0), ve = typeof ee == "number" ? `${ee}px` : ee, on = {
                                    width: ee,
                                    minWidth: de,
                                    maxWidth: ie,
                                    ..._e ? { "--flash-col-size": ve } : {},
                                    ...L ? {
                                      backgroundColor: "var(--muted)"
                                    } : {},
                                    ...A ? {
                                      position: "sticky",
                                      left: `${Re}px`
                                    } : {},
                                    ...$ ? {
                                      position: "sticky",
                                      right: `${Re}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    tt,
                                    {
                                      style: on,
                                      className: a(
                                        _e && "flash-table-fixed-cell",
                                        "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                        L ? "sticky bg-muted z-20" : "bg-muted",
                                        pe === "ultra-compact" && "py-1 px-2 text-xs",
                                        pe === "compact" && (I ? "py-1 px-2 text-sm" : "py-1 px-3 text-sm"),
                                        pe === "comfortable" && (I ? "py-2 px-2 text-sm" : "py-2 px-3 text-sm"),
                                        (I || se?.align === "right") && "text-right",
                                        se?.align === "center" && "text-center",
                                        re && "border-r border-border",
                                        B && "border-l border-border",
                                        G?.footerCell,
                                        se?.footerClassName
                                      ),
                                      children: x.isPlaceholder ? null : /* @__PURE__ */ r(
                                        "div",
                                        {
                                          style: de !== void 0 && !_e && !I ? {
                                            minWidth: typeof de == "number" ? `${de}px` : de
                                          } : void 0,
                                          className: "w-full",
                                          children: Gn(
                                            x.column.columnDef.footer,
                                            x.getContext()
                                          )
                                        }
                                      )
                                    },
                                    x.id
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
        Ye && /* @__PURE__ */ r(
          rd,
          {
            position: va,
            onClose: () => hr(null),
            table: K,
            density: pe,
            onDensityChange: zr,
            showDensityToggle: Je,
            pinActionsColumnRight: W,
            pinLastColumnRight: Q,
            enableColumnPinning: q,
            enableColumnVisibility: Le,
            isCustomized: Pr,
            onReset: Mr,
            labels: be
          }
        )
      ]
    }
  ) });
}
id.displayName = "FlashTable";
const ld = Fe(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Mn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  bo.Root,
  {
    ref: n,
    className: a(ld(), e),
    ...t
  }
));
Mn.displayName = bo.Root.displayName;
const Wc = Ns, Uo = i.createContext(
  {}
), ct = ({
  ...e
}) => /* @__PURE__ */ r(Uo.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r(Cs, { ...e }) }), Tn = () => {
  const e = i.useContext(Uo), t = i.useContext(Go), { getFieldState: n, formState: o } = Ke(), s = n(e.name, o);
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
}, Go = i.createContext(
  {}
), Ue = i.forwardRef(({ className: e, ...t }, n) => {
  const o = i.useId();
  return /* @__PURE__ */ r(Go.Provider, { value: { id: o }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
Ue.displayName = "FormItem";
const Ge = i.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: s } = Tn();
  return /* @__PURE__ */ r(
    Mn,
    {
      ref: n,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
Ge.displayName = "FormLabel";
const wt = i.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: s, formMessageId: l } = Tn();
  return /* @__PURE__ */ r(
    ro,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
wt.displayName = "FormControl";
const Xo = i.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = Tn();
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
Xo.displayName = "FormDescription";
const Xe = i.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: s, formMessageId: l } = Tn(), d = s ? String(s?.message) : t;
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
Xe.displayName = "FormMessage";
const dd = Fe("font-bold tracking-tight", {
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
}), Hc = Ht.forwardRef(
  ({ className: e, variant: t, children: n, ...o }, s) => /* @__PURE__ */ r(
    t || "h1",
    {
      className: a(dd({ variant: t }), e),
      ref: s,
      ...o,
      children: n
    }
  )
), Bc = ({
  name: e,
  label: t,
  placeholder: n,
  mask: o,
  ...s
}) => {
  const l = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: l.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(Ue, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(wt, { children: o ? /* @__PURE__ */ r(
          bd,
          {
            mask: o,
            placeholder: n,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ r(zn, { placeholder: n, ...s, ...d }) }),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
}, cd = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
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
      /* @__PURE__ */ r(Yo, {})
    ]
  }
));
cd.displayName = Ce.Root.displayName;
const ud = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
ud.displayName = Ce.List.displayName;
const $c = Ce.Item, md = Fe(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), fd = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Ce.Trigger,
  {
    ref: o,
    className: a(md(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ r(
        st,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
fd.displayName = Ce.Trigger.displayName;
const pd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
pd.displayName = Ce.Content.displayName;
const gd = Ce.Link, Yo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r(
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
Yo.displayName = Ce.Viewport.displayName;
const hd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
hd.displayName = Ce.Indicator.displayName;
const xd = Ht.forwardRef(({ className: e, title: t, children: n, ...o }, s) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(gd, { asChild: !0, children: /* @__PURE__ */ c(
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
xd.displayName = "ListItem";
function bd({
  value: e,
  mask: t,
  onChange: n,
  ...o
}) {
  const s = t.split("#").length - 1, l = t.split("A").length - 1, d = t.split("*").length - 1, u = s + l + d;
  function h(m) {
    const k = m.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, u);
    n(k);
  }
  return /* @__PURE__ */ r(
    zn,
    {
      value: No(e, t),
      onChange: h,
      ...o
    }
  );
}
const yd = (e, t = 300) => {
  const [n, o] = ue(e);
  return Ie(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), n;
}, Br = Fe(
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
), vd = i.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: n,
    defaultValue: o = [],
    placeholder: s = "Select options",
    animation: l = 0,
    maxCount: d = 3,
    modalPopover: u = !1,
    className: h,
    preventSelectAll: m = !1,
    onSearchChange: z,
    isLoading: k,
    onCreate: S,
    ...E
  }, R) => {
    const [p, C] = i.useState(o), [v, g] = i.useState(!1), [y, D] = i.useState(!1), [P, w] = i.useState(""), V = yd(P, 300);
    Ie(() => {
      z && z(V ?? "");
    }, [V]);
    const T = (N) => {
      if (N.key === "Enter")
        g(!0);
      else if (N.key === "Backspace" && !N.currentTarget.value) {
        const O = [...p];
        O.pop(), C(O), t(O);
      }
    }, _ = (N) => {
      const O = p.includes(N) ? p.filter((U) => U !== N) : [...p, N];
      C(O), t(O);
    }, j = () => {
      C([]), t([]);
    }, H = () => {
      g((N) => !N);
    }, Z = () => {
      const N = p.slice(0, d);
      C(N), t(N);
    }, le = () => {
      if (p.length === e.length)
        j();
      else {
        const N = e.map((O) => O.value);
        C(N), t(N);
      }
    };
    return /* @__PURE__ */ c(
      yt,
      {
        open: v,
        onOpenChange: g,
        modal: u,
        children: [
          /* @__PURE__ */ r(vt, { asChild: !0, children: /* @__PURE__ */ r(
            me,
            {
              ref: R,
              ...E,
              onClick: H,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                h
              ),
              children: p.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  p.slice(0, d).map((N) => {
                    const O = e.find((ge) => ge.value === N), U = O?.icon;
                    return /* @__PURE__ */ c(
                      Yn,
                      {
                        className: a(
                          y ? "animate-bounce" : "",
                          Br({ variant: n })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          U && /* @__PURE__ */ r(U, { className: "h-4 w-4 mr-2" }),
                          O?.label,
                          /* @__PURE__ */ r(
                            _r,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (ge) => {
                                ge.stopPropagation(), _(N);
                              }
                            }
                          )
                        ]
                      },
                      N
                    );
                  }),
                  p.length > d && /* @__PURE__ */ c(
                    Yn,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        y ? "animate-bounce" : "",
                        Br({ variant: n })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${p.length - d}`,
                        /* @__PURE__ */ r(
                          _r,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (N) => {
                              N.stopPropagation(), Z();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  k && /* @__PURE__ */ r(gt, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ r(
                    hs,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (N) => {
                        N.stopPropagation(), j();
                      }
                    }
                  ),
                  /* @__PURE__ */ r(
                    na,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ r(st, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ r(st, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ r(
            dt,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => g(!1),
              children: /* @__PURE__ */ c(Kt, { shouldFilter: !z, children: [
                /* @__PURE__ */ r(
                  Nn,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: T,
                    onValueChange: w
                  }
                ),
                /* @__PURE__ */ c(Cn, { children: [
                  !k && /* @__PURE__ */ r(Sn, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Ut, { children: [
                    !k && !e.length && !!P.length && S && /* @__PURE__ */ r(
                      ot,
                      {
                        onSelect: S,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ r(xs, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ r("b", { children: P })
                        ] })
                      },
                      "new"
                    ),
                    k && /* @__PURE__ */ r("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ r(gt, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      ot,
                      {
                        onSelect: le,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                p.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ r(Ar, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ r("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((N) => {
                      const O = p.includes(N.value);
                      return /* @__PURE__ */ c(
                        ot,
                        {
                          onSelect: () => _(N.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ r(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  O ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ r(Ar, { className: "h-4 w-4" })
                              }
                            ),
                            N.icon && /* @__PURE__ */ r(N.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ r("span", { children: N.label })
                          ]
                        },
                        N.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ r(Po, {})
                ] })
              ] })
            }
          ),
          l > 0 && p.length > 0 && /* @__PURE__ */ r(
            bs,
            {
              className: a(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                y ? "" : "text-muted-foreground"
              ),
              onClick: () => D(!y)
            }
          )
        ]
      }
    );
  }
);
vd.displayName = "MultiSelect";
const wd = ({ className: e, ...t }) => /* @__PURE__ */ r(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
wd.displayName = "Pagination";
const Nd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "ul",
  {
    ref: n,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
Nd.displayName = "PaginationContent";
const Cd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("li", { ref: n, className: a("", e), ...t }));
Cd.displayName = "PaginationItem";
const ir = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) => /* @__PURE__ */ r(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: a(
      it({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...o
  }
);
ir.displayName = "PaginationLink";
const Sd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  ir,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Jr, { className: "h-4 w-4" })
  }
);
Sd.displayName = "PaginationPrevious";
const Rd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  ir,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r($t, { className: "h-4 w-4" })
  }
);
Rd.displayName = "PaginationNext";
const kd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(Ur, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
kd.displayName = "PaginationEllipsis";
const zd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Vt.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: n
  }
));
zd.displayName = Vt.Root.displayName;
const Pd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Vt.Item,
  {
    ref: n,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Vt.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r(Xr, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Pd.displayName = Vt.Item.displayName;
const Md = Ht.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  rt.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ r(rt.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r(Qo, {}),
      /* @__PURE__ */ r(rt.Corner, {})
    ]
  }
));
Md.displayName = rt.Root.displayName;
const Qo = Ht.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ r(
  rt.ScrollAreaScrollbar,
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
    children: /* @__PURE__ */ r(rt.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Qo.displayName = rt.ScrollAreaScrollbar.displayName;
const Jo = te.Root, qc = te.Group, Zo = te.Value, lr = i.forwardRef(({ className: e, children: t, isLoading: n = !1, ...o }, s) => /* @__PURE__ */ c(
  te.Trigger,
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
        n && /* @__PURE__ */ r(gt, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ r(te.Icon, { asChild: !0, children: /* @__PURE__ */ r(st, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
lr.displayName = te.Trigger.displayName;
const ea = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  te.ScrollUpButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(ys, { className: "h-4 w-4" })
  }
));
ea.displayName = te.ScrollUpButton.displayName;
const ta = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  te.ScrollDownButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(st, { className: "h-4 w-4" })
  }
));
ta.displayName = te.ScrollDownButton.displayName;
const dr = i.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, s) => /* @__PURE__ */ r(te.Portal, { children: /* @__PURE__ */ c(
  te.Content,
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
      /* @__PURE__ */ r(ea, {}),
      /* @__PURE__ */ r(
        te.Viewport,
        {
          className: a(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(ta, {})
    ]
  }
) }));
dr.displayName = te.Content.displayName;
const Td = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  te.Label,
  {
    ref: n,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Td.displayName = te.Label.displayName;
const xn = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  te.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(te.ItemIndicator, { children: /* @__PURE__ */ r(Bt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r(te.ItemText, { children: t })
    ]
  }
));
xn.displayName = te.Item.displayName;
const Id = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  te.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Id.displayName = te.Separator.displayName;
const Kc = ({
  name: e,
  label: t,
  placeholder: n,
  options: o,
  helpText: s,
  isLoading: l,
  ...d
}) => {
  const u = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: u.control,
      name: e,
      render: ({ field: h }) => /* @__PURE__ */ c(Ue, { children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ c(
          Jo,
          {
            onValueChange: h.onChange,
            value: h.value,
            defaultValue: h.value,
            ...d,
            children: [
              /* @__PURE__ */ r(wt, { children: /* @__PURE__ */ r(lr, { isLoading: l, children: /* @__PURE__ */ r(Zo, { placeholder: n }) }) }),
              /* @__PURE__ */ r(dr, { children: o.map((m) => /* @__PURE__ */ r(xn, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ r(Xo, { children: s }),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
}, na = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, s) => /* @__PURE__ */ r(
    yo.Root,
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
na.displayName = yo.Root.displayName;
const Uc = X.Root, Gc = X.Trigger, Xc = X.Close, Dd = X.Portal, ra = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
ra.displayName = X.Overlay.displayName;
const _d = Fe(
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
), Ad = i.forwardRef(({ side: e = "right", className: t, children: n, ...o }, s) => /* @__PURE__ */ c(Dd, { children: [
  /* @__PURE__ */ r(ra, {}),
  /* @__PURE__ */ c(
    X.Content,
    {
      ref: s,
      className: a(_d({ side: e }), t),
      ...o,
      children: [
        n,
        /* @__PURE__ */ c(X.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r(qt, { className: "h-4 w-4" }),
          /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ad.displayName = X.Content.displayName;
const Ed = ({
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
Ed.displayName = "SheetHeader";
const Ld = ({
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
Ld.displayName = "SheetFooter";
const Od = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Title,
  {
    ref: n,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Od.displayName = X.Title.displayName;
const Fd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Fd.displayName = X.Description.displayName;
const Vd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Xn.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ r(
      Xn.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Vd.displayName = Xn.Root.displayName;
const Yc = lt.Root, jd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  lt.List,
  {
    ref: n,
    className: a(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
jd.displayName = lt.List.displayName;
const Wd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  lt.Trigger,
  {
    ref: n,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Wd.displayName = lt.Trigger.displayName;
const Hd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  lt.Content,
  {
    ref: n,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Hd.displayName = lt.Content.displayName;
const oa = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
oa.displayName = "Textarea";
const Bd = ({
  name: e,
  label: t,
  placeholder: n,
  ...o
}) => {
  const s = Ke();
  return /* @__PURE__ */ r(
    ct,
    {
      control: s.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(Ue, { children: [
        !!t && /* @__PURE__ */ r(Ge, { children: t }),
        /* @__PURE__ */ r(wt, { children: /* @__PURE__ */ r(oa, { placeholder: n, ...o, ...l }) }),
        /* @__PURE__ */ r(Xe, {})
      ] })
    }
  );
};
Bd.displayName = "TextareaForm";
const $d = ke.Provider, qd = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, aa = i.forwardRef(({ className: e, position: t = "bottom-right", ...n }, o) => /* @__PURE__ */ r(
  ke.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${qd[t]}`,
      e
    ),
    ...n
  }
));
aa.displayName = ke.Viewport.displayName;
const Kd = Fe(
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
), sa = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  ke.Root,
  {
    ref: o,
    className: a(Kd({ variant: t }), e),
    ...n
  }
));
sa.displayName = ke.Root.displayName;
const Ud = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ke.Action,
  {
    ref: n,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Ud.displayName = ke.Action.displayName;
const ia = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ke.Close,
  {
    ref: n,
    className: a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r(qt, { className: "h-4 w-4" })
  }
));
ia.displayName = ke.Close.displayName;
const la = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ke.Title,
  {
    ref: n,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
la.displayName = ke.Title.displayName;
const da = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ke.Description,
  {
    ref: n,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
da.displayName = ke.Description.displayName;
const Gd = 5, Xd = 1e4;
let qn = 0;
function Yd() {
  return qn = (qn + 1) % Number.MAX_SAFE_INTEGER, qn.toString();
}
const Kn = /* @__PURE__ */ new Map(), $r = (e) => {
  if (Kn.has(e))
    return;
  const t = setTimeout(() => {
    Kn.delete(e), Ot({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Xd);
  Kn.set(e, t);
}, Qd = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Gd)
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
      return n ? $r(n) : e.toasts.forEach((o) => {
        $r(o.id);
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
}, un = [];
let mn = { toasts: [] };
function Ot(e) {
  mn = Qd(mn, e), un.forEach((t) => {
    t(mn);
  });
}
function Jd({ ...e }) {
  const t = Yd(), n = (s) => Ot({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => Ot({ type: "DISMISS_TOAST", toastId: t });
  return Ot({
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
function Zd() {
  const [e, t] = i.useState(mn);
  return i.useEffect(() => (un.push(t), () => {
    const n = un.indexOf(t);
    n > -1 && un.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Jd,
    dismiss: (n) => Ot({ type: "DISMISS_TOAST", toastId: n })
  };
}
function Qc() {
  const { toasts: e } = Zd();
  return /* @__PURE__ */ c($d, { children: [
    e.map(function({ id: t, title: n, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(sa, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ r(la, { children: n }),
          o && /* @__PURE__ */ r(da, { children: o })
        ] }),
        s,
        /* @__PURE__ */ r(ia, {})
      ] }, t);
    }),
    /* @__PURE__ */ r(aa, {})
  ] });
}
const ca = Fe(
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
), ec = i.forwardRef(({ className: e, variant: t, size: n, ...o }, s) => /* @__PURE__ */ r(
  vo.Root,
  {
    ref: s,
    className: a(ca({ variant: t, size: n, className: e })),
    ...o
  }
));
ec.displayName = vo.Root.displayName;
const ua = i.createContext({
  size: "default",
  variant: "default"
}), tc = i.forwardRef(({ className: e, variant: t, size: n, children: o, ...s }, l) => /* @__PURE__ */ r(
  vn.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ r(ua.Provider, { value: { variant: t, size: n }, children: o })
  }
));
tc.displayName = vn.Root.displayName;
const nc = i.forwardRef(({ className: e, children: t, variant: n, size: o, ...s }, l) => {
  const d = i.useContext(ua);
  return /* @__PURE__ */ r(
    vn.Item,
    {
      ref: l,
      className: a(
        ca({
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
nc.displayName = vn.Item.displayName;
export {
  Nc as Accordion,
  Fs as AccordionContent,
  Ls as AccordionItem,
  Os as AccordionTrigger,
  js as Alert,
  Hs as AlertDescription,
  Cc as AlertDialog,
  Xs as AlertDialogAction,
  Ys as AlertDialogCancel,
  $s as AlertDialogContent,
  Gs as AlertDialogDescription,
  Ks as AlertDialogFooter,
  qs as AlertDialogHeader,
  wo as AlertDialogOverlay,
  Bs as AlertDialogPortal,
  Us as AlertDialogTitle,
  Sc as AlertDialogTrigger,
  Ws as AlertTitle,
  Qs as AsyncSelect,
  Rc as AsyncSelectForm,
  Zs as Avatar,
  ti as AvatarFallback,
  ei as AvatarImage,
  Yn as Badge,
  ri as Breadcrumb,
  di as BreadcrumbEllipsis,
  ai as BreadcrumbItem,
  si as BreadcrumbLink,
  oi as BreadcrumbList,
  ii as BreadcrumbPage,
  li as BreadcrumbSeparator,
  me as Button,
  So as Calendar,
  Zi as CalendarDayButton,
  el as Card,
  ol as CardContent,
  rl as CardDescription,
  al as CardFooter,
  tl as CardHeader,
  nl as CardTitle,
  sl as Carousel,
  il as CarouselContent,
  ll as CarouselItem,
  cl as CarouselNext,
  dl as CarouselPrevious,
  ml as ChartContainer,
  Mc as ChartLegend,
  gl as ChartLegendContent,
  fl as ChartStyle,
  Pc as ChartTooltip,
  pl as ChartTooltipContent,
  xt as Checkbox,
  hl as Combobox,
  Tc as ComboboxForm,
  Kt as Command,
  Ic as CommandDialog,
  Sn as CommandEmpty,
  Ut as CommandGroup,
  Nn as CommandInput,
  ot as CommandItem,
  Cn as CommandList,
  Po as CommandSeparator,
  xl as CommandShortcut,
  Gt as DEFAULT_FLASH_TABLE_LABELS,
  vl as DatePicker,
  Dc as DatePickerForm,
  Eo as DateTimePicker,
  _c as DateTimePickerForm,
  Lo as Dialog,
  Ac as DialogClose,
  or as DialogContent,
  jo as DialogDescription,
  Ol as DialogFooter,
  Fo as DialogHeader,
  Oo as DialogOverlay,
  Ll as DialogPortal,
  Vo as DialogTitle,
  El as DialogTrigger,
  Ec as DropdownMenu,
  Hl as DropdownMenuCheckboxItem,
  jl as DropdownMenuContent,
  Oc as DropdownMenuGroup,
  Wl as DropdownMenuItem,
  $l as DropdownMenuLabel,
  Fc as DropdownMenuPortal,
  jc as DropdownMenuRadioGroup,
  Bl as DropdownMenuRadioItem,
  ql as DropdownMenuSeparator,
  Kl as DropdownMenuShortcut,
  Vc as DropdownMenuSub,
  Vl as DropdownMenuSubContent,
  Fl as DropdownMenuSubTrigger,
  Lc as DropdownMenuTrigger,
  id as FlashTable,
  td as FlashTableColumnManager,
  rd as FlashTableContextMenu,
  od as FlashTableHeaderCell,
  Zl as FlashTableHelpDialog,
  nd as FlashTableToolbar,
  Wc as Form,
  wt as FormControl,
  Xo as FormDescription,
  ct as FormField,
  Ue as FormItem,
  Ge as FormLabel,
  Xe as FormMessage,
  Hc as Heading,
  zn as Input,
  Bc as InputForm,
  Mn as Label,
  xd as ListItem,
  bd as MaskedInput,
  vd as MultiSelect,
  cd as NavigationMenu,
  pd as NavigationMenuContent,
  hd as NavigationMenuIndicator,
  $c as NavigationMenuItem,
  gd as NavigationMenuLink,
  ud as NavigationMenuList,
  fd as NavigationMenuTrigger,
  Yo as NavigationMenuViewport,
  wd as Pagination,
  Nd as PaginationContent,
  kd as PaginationEllipsis,
  Cd as PaginationItem,
  ir as PaginationLink,
  Rd as PaginationNext,
  Sd as PaginationPrevious,
  yt as Popover,
  dt as PopoverContent,
  vt as PopoverTrigger,
  zd as RadioGroup,
  Pd as RadioGroupItem,
  Md as ScrollArea,
  Qo as ScrollBar,
  Jo as Select,
  dr as SelectContent,
  Kc as SelectForm,
  qc as SelectGroup,
  xn as SelectItem,
  Td as SelectLabel,
  ta as SelectScrollDownButton,
  ea as SelectScrollUpButton,
  Id as SelectSeparator,
  lr as SelectTrigger,
  Zo as SelectValue,
  na as Separator,
  Uc as Sheet,
  Xc as SheetClose,
  Ad as SheetContent,
  Fd as SheetDescription,
  Ld as SheetFooter,
  Ed as SheetHeader,
  ra as SheetOverlay,
  Dd as SheetPortal,
  Od as SheetTitle,
  Gc as SheetTrigger,
  Wo as Skeleton,
  Vd as Switch,
  Ul as Table,
  Bo as TableBody,
  Gl as TableCaption,
  tt as TableCell,
  $o as TableFooter,
  qo as TableHead,
  Ho as TableHeader,
  qe as TableRow,
  Yc as Tabs,
  Hd as TabsContent,
  jd as TabsList,
  Wd as TabsTrigger,
  oa as Textarea,
  Bd as TextareaForm,
  Ao as TimePicker,
  cn as TimePickerInput,
  sa as Toast,
  Ud as ToastAction,
  ia as ToastClose,
  da as ToastDescription,
  $d as ToastProvider,
  la as ToastTitle,
  aa as ToastViewport,
  Qc as Toaster,
  ec as Toggle,
  tc as ToggleGroup,
  nc as ToggleGroupItem,
  ar as Tooltip,
  kn as TooltipContent,
  Xl as TooltipProvider,
  sr as TooltipTrigger,
  ni as badgeVariants,
  zc as brazillianStates,
  Ql as buildDefaultPinning,
  it as buttonVariants,
  a as cn,
  Lt as extractColumnId,
  $e as extractWidthFromClassName,
  hn as getColumnLabel,
  Wt as isActionsColumnDef,
  Ko as isActionsColumnId,
  Pn as isExpansionColumnId,
  ft as isSameArray,
  jt as isSelectionColumnId,
  Me as isSystemLeftColumnId,
  kc as mask,
  md as navigationMenuTriggerStyle,
  $n as parseColumnWidth,
  jr as reconcileColumnOrder,
  Qd as reducer,
  Yl as resolveStorageScope,
  Jd as toast,
  ca as toggleVariants,
  ad as useFlashTablePersistence,
  Tn as useFormField,
  Zd as useToast
};
