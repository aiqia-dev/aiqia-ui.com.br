import { jsx as n, jsxs as c, Fragment as $e } from "react/jsx-runtime";
import * as i from "react";
import It, { useState as de, useEffect as ke, useCallback as oe, useImperativeHandle as An, useRef as Se, isValidElement as Ka, useMemo as he, useLayoutEffect as Ga, Fragment as Ua } from "react";
import * as Ge from "@radix-ui/react-accordion";
import { ChevronDown as Ue, ChevronsUpDown as En, Loader2 as it, Check as Dt, MoreHorizontal as Ln, ChevronRight as _t, ChevronLeftIcon as Xa, ChevronRightIcon as Ya, ChevronDownIcon as Qa, ArrowLeft as Ja, ArrowRight as Za, Search as On, CalendarIcon as es, Clock as ts, Calendar as rs, X as At, Circle as Fn, HelpCircle as Nn, Mouse as ns, Columns3 as Vn, Pin as nr, MoveHorizontal as os, ArrowUpDown as jn, Rows3 as Fr, RotateCcw as or, MousePointerClick as as, Eye as Vr, ChevronLeft as Hn, AlignJustify as Wn, Rows2 as Bn, GripVertical as $n, Lock as qn, Info as ss, ArrowUp as is, ArrowDown as ls, XCircle as Cn, XIcon as ds, Plus as cs, CheckIcon as Sn, WandSparkles as us, ChevronUp as ms } from "lucide-react";
import { clsx as fs } from "clsx";
import { twMerge as ps } from "tailwind-merge";
import { cva as _e } from "class-variance-authority";
import * as fe from "@radix-ui/react-alert-dialog";
import { useFormContext as Oe, FormProvider as gs, Controller as hs } from "react-hook-form";
import * as ct from "@radix-ui/react-avatar";
import { Slot as Kn } from "@radix-ui/react-slot";
import { Link as xs } from "react-router-dom";
import { TZDate as Re, getDefaultClassNames as Gn, DayPicker as bs } from "react-day-picker";
import ys from "embla-carousel-react";
import * as jr from "recharts";
import * as Ir from "@radix-ui/react-checkbox";
import { Command as xe } from "cmdk";
import { format as Un, parse as Xn, isValid as Yn, add as vs } from "date-fns";
import * as Pt from "@radix-ui/react-popover";
import * as U from "@radix-ui/react-dialog";
import * as Y from "@radix-ui/react-dropdown-menu";
import { useSensors as Qn, useSensor as Jt, PointerSensor as Jn, KeyboardSensor as Zn, DndContext as eo, closestCenter as to } from "@dnd-kit/core";
import { restrictToVerticalAxis as ws, restrictToHorizontalAxis as Ns } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as ro, SortableContext as no, verticalListSortingStrategy as Cs, arrayMove as st, useSortable as oo, horizontalListSortingStrategy as Ss } from "@dnd-kit/sortable";
import { flexRender as Dr, useReactTable as Rs, getExpandedRowModel as ks, getSortedRowModel as Ps, getCoreRowModel as zs } from "@tanstack/react-table";
import * as lt from "@radix-ui/react-tooltip";
import { CSS as ao } from "@dnd-kit/utilities";
import * as so from "@radix-ui/react-label";
import * as be from "@radix-ui/react-navigation-menu";
import * as zt from "@radix-ui/react-radio-group";
import * as qe from "@radix-ui/react-scroll-area";
import * as te from "@radix-ui/react-select";
import * as io from "@radix-ui/react-separator";
import * as _r from "@radix-ui/react-switch";
import * as Ye from "@radix-ui/react-tabs";
import * as ve from "@radix-ui/react-toast";
import * as lo from "@radix-ui/react-toggle";
import * as ar from "@radix-ui/react-toggle-group";
function a(...e) {
  return ps(fs(e));
}
const pc = Ge.Root, Ms = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Ge.Item,
  {
    ref: r,
    className: a("border-b", e),
    ...t
  }
));
Ms.displayName = "AccordionItem";
const Ts = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(Ge.Header, { className: "flex", children: /* @__PURE__ */ c(
  Ge.Trigger,
  {
    ref: o,
    className: a(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(Ue, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Ts.displayName = Ge.Trigger.displayName;
const Is = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(
  Ge.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ n("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
Is.displayName = Ge.Content.displayName;
const Ds = _e(
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
), _s = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(Ds({ variant: t }), e),
    ...r
  }
));
_s.displayName = "Alert";
const As = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "h5",
  {
    ref: r,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
As.displayName = "AlertTitle";
const Es = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Es.displayName = "AlertDescription";
const gc = fe.Root, hc = fe.Trigger, Ls = fe.Portal, co = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
co.displayName = fe.Overlay.displayName;
const Os = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(Ls, { children: [
  /* @__PURE__ */ n(co, {}),
  /* @__PURE__ */ n(
    fe.Content,
    {
      ref: r,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
Os.displayName = fe.Content.displayName;
const Fs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Fs.displayName = "AlertDialogHeader";
const Vs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Vs.displayName = "AlertDialogFooter";
const js = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Title,
  {
    ref: r,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
js.displayName = fe.Title.displayName;
const Hs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Hs.displayName = fe.Description.displayName;
const Ws = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Action,
  {
    ref: r,
    className: a(Xe(), e),
    ...t
  }
));
Ws.displayName = fe.Action.displayName;
const Bs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Cancel,
  {
    ref: r,
    className: a(
      Xe({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Bs.displayName = fe.Cancel.displayName;
function $s({
  options: e,
  isLoading: t,
  renderOption: r,
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
  clearable: A = !0,
  error: R
}) {
  const [f, h] = de(!1), [C, w] = de(u), [x, T] = de(null), [z, b] = de("");
  ke(() => {
    w(u);
  }, [u]), ke(() => {
    if (u && e.length > 0) {
      const M = e.find((D) => o(D) === u);
      M && T(M);
    }
  }, [u, e, o]);
  const F = oe(
    (M) => {
      const D = A && M === C ? "" : M;
      u && w(D), T(
        e.find((_) => o(_) === D) || null
      ), g(D), h(!1);
    },
    [C, g, A, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ n(pr, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(ut, { open: f, onOpenChange: h, children: [
      /* @__PURE__ */ n(mt, { asChild: !0, children: /* @__PURE__ */ c(
        se,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": f,
          className: a(
            "justify-between w-full hover:bg-input bg-input font-normal",
            P && "opacity-50 cursor-not-allowed",
            !u && "text-muted-foreground",
            k
          ),
          disabled: P,
          children: [
            /* @__PURE__ */ n("div", { className: "truncate", children: u && x ? s(x) : d }),
            /* @__PURE__ */ n(En, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Qe, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Et, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ n(
            ir,
            {
              placeholder: "Buscar",
              value: z,
              onValueChange: (M) => {
                b(M), m(M);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ n("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ n(it, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(lr, { children: [
          t && e.length === 0 && /* @__PURE__ */ n(qs, {}),
          !t && e.length === 0 && /* @__PURE__ */ n(dr, { children: /* @__PURE__ */ n("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: S ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ n(Lt, { children: e.map((M) => /* @__PURE__ */ c(
            Ke,
            {
              value: o(M),
              onSelect: F,
              children: [
                /* @__PURE__ */ n(
                  Dt,
                  {
                    className: a(
                      "mr-2 size-4 shrink-0",
                      C === o(M) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ n("div", { className: "w-0 flex-1", children: r(M) })
              ]
            },
            o(M)
          )) })
        ] })
      ] }) })
    ] }),
    !!R && /* @__PURE__ */ n("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: R })
  ] });
}
function qs() {
  return /* @__PURE__ */ n(Lt, { children: [1, 2, 3].map((e) => /* @__PURE__ */ n(Ke, { disabled: !0, className: "p-0", children: /* @__PURE__ */ n(To, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const xc = ({
  name: e,
  label: t,
  disabled: r,
  isLoading: o,
  options: s,
  placeholder: l = "Selecione",
  onSearchChange: d,
  getDisplayValue: u,
  getOptionValue: g,
  renderOption: m
}) => {
  const { control: P } = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      name: e,
      control: P,
      render: ({ field: k }) => /* @__PURE__ */ c(Fe, { children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(
          $s,
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
            disabled: r
          }
        ),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
}, Ks = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ct.Root,
  {
    ref: r,
    className: a(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Ks.displayName = ct.Root.displayName;
const Gs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ct.Image,
  {
    ref: r,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
Gs.displayName = ct.Image.displayName;
const Us = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ct.Fallback,
  {
    ref: r,
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Us.displayName = ct.Fallback.displayName;
const Xs = _e(
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
function Ar({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ n("div", { className: a(Xs({ variant: t }), e), ...r });
}
const Ys = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ n("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Ys.displayName = "Breadcrumb";
const Qs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "ol",
  {
    ref: r,
    className: a(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
Qs.displayName = "BreadcrumbList";
const Js = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "li",
  {
    ref: r,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Js.displayName = "BreadcrumbItem";
const Zs = i.forwardRef(({ asChild: e, className: t, ...r }, o) => /* @__PURE__ */ n(
  e ? Kn : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...r
  }
));
Zs.displayName = "BreadcrumbLink";
const ei = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: a("font-normal text-foreground", e),
    ...t
  }
));
ei.displayName = "BreadcrumbPage";
const ti = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ n(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: a("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ n(_t, {})
  }
);
ti.displayName = "BreadcrumbSeparator";
const ri = ({
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
      /* @__PURE__ */ n(Ln, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More" })
    ]
  }
);
ri.displayName = "BreadcrumbElipssis";
const ni = {
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
}, Xe = _e(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: ni,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), se = i.forwardRef(({ className: e, variant: t, size: r, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ n($e, { children: s ? /* @__PURE__ */ n(
  xs,
  {
    className: a(Xe({ variant: t, size: r, className: e })),
    ref: d,
    to: s,
    ...l
  }
) : /* @__PURE__ */ n(
  "button",
  {
    className: a(Xe({ variant: t, size: r, className: e })),
    ref: d,
    disabled: o,
    ...l
  }
) }));
se.displayName = "Button";
const oi = "(##) ####-####", ai = "(##) #####-####", si = "#####-###", ii = "###.###.###-##", li = "##.###.###/####-##", di = "###########", ci = "##.###.###-#", ui = "AAA#A##", mi = "###########", fi = "##############", uo = (e, t) => {
  let r = "", o = 0;
  for (let s = 0; s < t.length; s++) {
    const l = e[o];
    if (l === void 0)
      break;
    switch (t[s]) {
      case "#":
        if (!/\d/.test(l))
          return r;
        r += l, o++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(l))
          return r;
        r += l, o++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(l) && (r += e[o]), o++;
        break;
      default:
        r += t[s], t[s] === l && o++;
    }
  }
  return r;
}, bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: ai,
  CNH_MASK: di,
  CNPJ_MASK: li,
  CPF_MASK: ii,
  PHONE_MASK: oi,
  PLATE_MASK: ui,
  RENAVAM_MASK: mi,
  RG_MASK: ci,
  RNTRC_MASK: fi,
  ZIP_CODE_MASK: si,
  formatMask: uo
}, Symbol.toStringTag, { value: "Module" })), yc = [
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
function Pr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function Nt(e) {
  return (t, r) => {
    const o = r?.context ? String(r.context) : "standalone";
    let s;
    if (o === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, u = r?.width ? String(r.width) : d;
      s = e.formattingValues[u] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, u = r?.width ? String(r.width) : e.defaultWidth;
      s = e.values[u] || e.values[d];
    }
    const l = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[l];
  };
}
function Ct(e) {
  return (t, r = {}) => {
    const o = r.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], l = t.match(s);
    if (!l)
      return null;
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(u) ? gi(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      pi(u, (k) => k.test(d))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(g) : g, m = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(m)
    ) : m;
    const P = t.slice(d.length);
    return { value: m, rest: P };
  };
}
function pi(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function gi(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function hi(e) {
  return (t, r = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const s = o[0], l = t.match(e.parsePattern);
    if (!l) return null;
    let d = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    const u = t.slice(s.length);
    return { value: d, rest: u };
  };
}
const xi = {
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
}, bi = (e, t, r) => {
  let o;
  const s = xi[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + o : "há " + o : o;
}, yi = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, vi = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, wi = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ni = {
  date: Pr({
    formats: yi,
    defaultWidth: "full"
  }),
  time: Pr({
    formats: vi,
    defaultWidth: "full"
  }),
  dateTime: Pr({
    formats: wi,
    defaultWidth: "full"
  })
}, Ci = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Si = (e, t, r, o) => {
  const s = Ci[e];
  return typeof s == "function" ? s(t) : s;
}, Ri = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, ki = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Pi = {
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
}, zi = {
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
}, Mi = {
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
}, Ti = {
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
}, Ii = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, Di = {
  ordinalNumber: Ii,
  era: Nt({
    values: Ri,
    defaultWidth: "wide"
  }),
  quarter: Nt({
    values: ki,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Nt({
    values: Pi,
    defaultWidth: "wide"
  }),
  day: Nt({
    values: zi,
    defaultWidth: "wide"
  }),
  dayPeriod: Nt({
    values: Mi,
    defaultWidth: "wide",
    formattingValues: Ti,
    defaultFormattingWidth: "wide"
  })
}, _i = /^(\d+)[ºªo]?/i, Ai = /\d+/i, Ei = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Li = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Oi = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Fi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Vi = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, ji = {
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
}, Hi = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Wi = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Bi = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, $i = {
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
}, qi = {
  ordinalNumber: hi({
    matchPattern: _i,
    parsePattern: Ai,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ct({
    matchPatterns: Ei,
    defaultMatchWidth: "wide",
    parsePatterns: Li,
    defaultParseWidth: "any"
  }),
  quarter: Ct({
    matchPatterns: Oi,
    defaultMatchWidth: "wide",
    parsePatterns: Fi,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ct({
    matchPatterns: Vi,
    defaultMatchWidth: "wide",
    parsePatterns: ji,
    defaultParseWidth: "any"
  }),
  day: Ct({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Wi,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ct({
    matchPatterns: Bi,
    defaultMatchWidth: "any",
    parsePatterns: $i,
    defaultParseWidth: "any"
  })
}, mo = {
  code: "pt-BR",
  formatDistance: bi,
  formatLong: Ni,
  formatRelative: Si,
  localize: Di,
  match: qi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function fo({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = mo,
  formatters: d,
  components: u,
  startMonth: g,
  endMonth: m,
  timeZone: P = "America/Sao_Paulo",
  ...k
}) {
  const S = new Re(/* @__PURE__ */ new Date(), P), A = new Re(S.getFullYear() - 100, 0, 1, P), R = new Re(S.getFullYear() + 10, 11, 31, P), f = Gn();
  return /* @__PURE__ */ n(
    bs,
    {
      showOutsideDays: r,
      timeZone: P,
      className: a(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      startMonth: g ?? A,
      endMonth: m ?? R,
      locale: l,
      formatters: {
        formatMonthDropdown: (h) => h.toLocaleString(l?.code, { month: "short" }),
        ...d
      },
      classNames: {
        root: a("w-fit", f.root),
        months: a(
          "flex gap-4 flex-col md:flex-row relative",
          f.months
        ),
        month: a("flex flex-col w-full gap-4", f.month),
        nav: a(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          f.nav
        ),
        button_previous: a(
          Xe({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          f.button_previous
        ),
        button_next: a(
          Xe({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          f.button_next
        ),
        month_caption: a(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          f.month_caption
        ),
        dropdowns: a(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          f.dropdowns
        ),
        dropdown_root: a(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          f.dropdown_root
        ),
        dropdown: a(
          "absolute bg-popover inset-0 opacity-0",
          f.dropdown
        ),
        caption_label: a(
          "select-none font-medium",
          o === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          f.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: a("flex", f.weekdays),
        weekday: a(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          f.weekday
        ),
        week: a("flex w-full mt-2", f.week),
        week_number_header: a(
          "select-none w-(--cell-size)",
          f.week_number_header
        ),
        week_number: a(
          "text-[0.8rem] select-none text-muted-foreground",
          f.week_number
        ),
        day: a(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          k.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          f.day
        ),
        range_start: a(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          f.range_start
        ),
        range_middle: a("rounded-none", f.range_middle),
        range_end: a(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          f.range_end
        ),
        today: a(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          f.today
        ),
        outside: a(
          "text-muted-foreground aria-selected:text-muted-foreground",
          f.outside
        ),
        disabled: a(
          "text-muted-foreground opacity-50",
          f.disabled
        ),
        hidden: a("invisible", f.hidden),
        ...t
      },
      components: {
        Root: ({ className: h, rootRef: C, ...w }) => /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "calendar",
            ref: C,
            className: a(h),
            ...w
          }
        ),
        Chevron: ({ className: h, orientation: C, ...w }) => C === "left" ? /* @__PURE__ */ n(Xa, { className: a("cn-rtl-flip size-4", h), ...w }) : C === "right" ? /* @__PURE__ */ n(Ya, { className: a("cn-rtl-flip size-4", h), ...w }) : /* @__PURE__ */ n(Qa, { className: a("size-4", h), ...w }),
        DayButton: ({ ...h }) => /* @__PURE__ */ n(Ki, { locale: l, ...h }),
        WeekNumber: ({ children: h, ...C }) => /* @__PURE__ */ n("td", { ...C, children: /* @__PURE__ */ n("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) }),
        ...u
      },
      ...k
    }
  );
}
function Ki({
  className: e,
  day: t,
  modifiers: r,
  locale: o,
  ...s
}) {
  const l = Gn(), d = i.useRef(null);
  return i.useEffect(() => {
    r.focused && d.current?.focus();
  }, [r.focused]), /* @__PURE__ */ n(
    se,
    {
      ref: d,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(o?.code),
      "data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
      "data-range-start": r.range_start,
      "data-range-end": r.range_end,
      "data-range-middle": r.range_middle,
      className: a(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        l.day,
        e
      ),
      ...s
    }
  );
}
const Gi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
Gi.displayName = "Card";
const Ui = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
Ui.displayName = "CardHeader";
const Xi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "h3",
  {
    ref: r,
    className: a(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Xi.displayName = "CardTitle";
const Yi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "p",
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Yi.displayName = "CardDescription";
const Qi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { ref: r, className: a("p-4", e), ...t }));
Qi.displayName = "CardContent";
const Ji = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
Ji.displayName = "CardFooter";
const po = i.createContext(null);
function sr() {
  const e = i.useContext(po);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Zi = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [g, m] = ys(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [P, k] = i.useState(!1), [S, A] = i.useState(!1), R = i.useCallback((w) => {
      w && (k(w.canScrollPrev()), A(w.canScrollNext()));
    }, []), f = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), h = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), C = i.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), f()) : w.key === "ArrowRight" && (w.preventDefault(), h());
      },
      [f, h]
    );
    return i.useEffect(() => {
      !m || !r || r(m);
    }, [m, r]), i.useEffect(() => {
      if (m)
        return R(m), m.on("reInit", R), m.on("select", R), () => {
          m?.off("select", R);
        };
    }, [m, R]), /* @__PURE__ */ n(
      po.Provider,
      {
        value: {
          carouselRef: g,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: f,
          scrollNext: h,
          canScrollPrev: P,
          canScrollNext: S
        },
        children: /* @__PURE__ */ n(
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
Zi.displayName = "Carousel";
const el = i.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: o, orientation: s } = sr();
  return /* @__PURE__ */ n("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: a(
        "flex",
        s === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
el.displayName = "CarouselContent";
const tl = i.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: o } = sr();
  return /* @__PURE__ */ n(
    "div",
    {
      ref: r,
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
tl.displayName = "CarouselItem";
const rl = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = sr();
  return /* @__PURE__ */ c(
    se,
    {
      ref: s,
      variant: t,
      size: r,
      className: a(
        "absolute  h-8 w-8 rounded-full",
        l === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ n(Ja, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
rl.displayName = "CarouselPrevious";
const nl = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = sr();
  return /* @__PURE__ */ c(
    se,
    {
      ref: s,
      variant: t,
      size: r,
      className: a(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ n(Za, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
nl.displayName = "CarouselNext";
const ol = { light: "", dark: ".dark" }, go = i.createContext(null);
function ho() {
  const e = i.useContext(go);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const al = i.forwardRef(({ id: e, className: t, children: r, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ n(go.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
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
        /* @__PURE__ */ n(sl, { id: u, config: o }),
        /* @__PURE__ */ n(jr.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
al.displayName = "Chart";
const sl = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return r.length ? /* @__PURE__ */ n(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ol).map(
          ([o, s]) => `
${s} [data-chart=${e}] {
${r.map(([l, d]) => {
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
}, vc = jr.Tooltip, il = i.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
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
  }, A) => {
    const { config: R } = ho(), f = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [C] = t;
      if (!C)
        return null;
      const w = `${S || C.dataKey || C.name || "value"}`, x = Er(R, C, w), T = !S && typeof d == "string" ? R[d]?.label || d : x?.label;
      return u ? /* @__PURE__ */ n("div", { className: a("font-medium", g), children: u(T, t) }) : T ? /* @__PURE__ */ n("div", { className: a("font-medium", g), children: T }) : null;
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
        ref: A,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          h ? null : f,
          /* @__PURE__ */ n("div", { className: "grid gap-1.5", children: t.map((C, w) => {
            if (!C)
              return null;
            const x = `${k || C.dataKey || C.name || "value"}`, T = Er(R, C, x), z = P || C.payload.fill || C.color;
            return /* @__PURE__ */ n(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && C?.value !== void 0 && C.name ? m(C.value, C.name, C, w, C.payload) : /* @__PURE__ */ c($e, { children: [
                  T?.icon ? /* @__PURE__ */ n(T.icon, {}) : !l && /* @__PURE__ */ n(
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
                          h ? f : null,
                          /* @__PURE__ */ n("span", { className: "text-muted-foreground", children: T?.label || C.name })
                        ] }),
                        C.value && /* @__PURE__ */ n("span", { className: "font-mono font-medium tabular-nums text-foreground", children: C.value.toLocaleString() })
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
il.displayName = "ChartTooltip";
const wc = jr.Legend, ll = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = ho();
    return r?.length ? /* @__PURE__ */ n(
      "div",
      {
        ref: l,
        className: a(
          "flex items-center justify-center gap-4",
          o === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: r.map((u) => {
          if (!u)
            return null;
          const g = `${s || u.dataKey || "value"}`, m = Er(d, u, g);
          return /* @__PURE__ */ c(
            "div",
            {
              className: a(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                m?.icon && !t ? /* @__PURE__ */ n(m.icon, {}) : /* @__PURE__ */ n(
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
ll.displayName = "ChartLegend";
function Er(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : o && r in o && typeof o[r] == "string" && (s = o[r]), s in e ? e[s] : e[r];
}
const dt = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Ir.Root,
  {
    ref: r,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      Ir.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ n(Dt, { className: "size-4 h-full" })
      }
    )
  }
));
dt.displayName = Ir.Root.displayName;
function Nc({
  name: e,
  label: t,
  options: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: g, setValue: m } = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: g,
      name: e,
      render: ({ field: P }) => /* @__PURE__ */ c(Fe, { children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(
          dl,
          {
            placeholder: o,
            searchPlaceholder: s,
            emptyMessage: l,
            options: r,
            selected: P.value,
            onSelect: (k) => m(e, k, { shouldValidate: !0 }),
            disabled: d,
            isLoading: u
          }
        ),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
}
function dl({
  label: e,
  options: t,
  selected: r,
  onSelect: o,
  placeholder: s = "Selecione uma opção",
  searchPlaceholder: l = "Buscar...",
  emptyMessage: d = "Nenhum resultado encontrado.",
  error: u,
  disabled: g = !1,
  isLoading: m = !1
}) {
  const [P, k] = de(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ n(pr, { children: e }),
    /* @__PURE__ */ c(ut, { open: P, onOpenChange: k, children: [
      /* @__PURE__ */ n(mt, { asChild: !0, children: /* @__PURE__ */ c(
        se,
        {
          variant: "outline",
          disabled: g,
          className: a(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !r && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ n("div", { className: "truncate", children: r ? t.find((S) => S.value === r)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ n(it, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ n(En, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Qe, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Et, { children: [
        /* @__PURE__ */ n(ir, { placeholder: l }),
        /* @__PURE__ */ c(lr, { children: [
          /* @__PURE__ */ n(dr, { children: d }),
          /* @__PURE__ */ n(Lt, { children: t.map((S) => /* @__PURE__ */ c(
            Ke,
            {
              value: S.label,
              onSelect: () => {
                r === S.value ? o(void 0) : o(S.value), k(!1);
              },
              children: [
                /* @__PURE__ */ n(
                  Dt,
                  {
                    className: a(
                      "mr-2 size-4",
                      r === S.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ n("div", { className: "w-0 flex-1", children: S.label })
              ]
            },
            S.value
          )) })
        ] })
      ] }) })
    ] }),
    !!u && /* @__PURE__ */ n("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: u })
  ] });
}
const Et = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  xe,
  {
    ref: r,
    className: a(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Et.displayName = xe.displayName;
const Cc = ({ children: e, ...t }) => /* @__PURE__ */ n(Ro, { ...t, children: /* @__PURE__ */ n(Wr, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ n(Et, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ir = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ n(On, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ n(
    xe.Input,
    {
      ref: r,
      className: a(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
ir.displayName = xe.Input.displayName;
const lr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  xe.List,
  {
    ref: r,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
lr.displayName = xe.List.displayName;
const dr = i.forwardRef((e, t) => /* @__PURE__ */ n(
  xe.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
dr.displayName = xe.Empty.displayName;
const Lt = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  xe.Group,
  {
    ref: r,
    className: a(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Lt.displayName = xe.Group.displayName;
const xo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  xe.Separator,
  {
    ref: r,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
xo.displayName = xe.Separator.displayName;
const Ke = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  xe.Item,
  {
    ref: r,
    className: a(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Ke.displayName = xe.Item.displayName;
const cl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "span",
  {
    className: a(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
cl.displayName = "CommandShortcut";
const ut = Pt.Root, mt = Pt.Trigger, Qe = i.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...o }, s) => /* @__PURE__ */ n(Pt.Portal, { children: /* @__PURE__ */ n(
  Pt.Content,
  {
    ref: s,
    align: t,
    sideOffset: r,
    className: a(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
Qe.displayName = Pt.Content.displayName;
function ul(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (r += "/"), r += t[o];
  return r;
}
function ml(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (r += "/"), o === 8 && (r += " - "), (o === 10 || o === 12) && (r += "/"), r += t[o];
  return r;
}
function Zt(e) {
  if (e.length < 10) return null;
  const t = Xn(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Yn(t) ? t : null;
}
function Rn(e) {
  const t = e.split(" - "), r = Zt(t[0] ?? "");
  if (!r) return null;
  const o = t[1] ? Zt(t[1]) : void 0;
  return { from: r, to: o ?? void 0 };
}
function Kt(e) {
  return Un(e, "dd/MM/yyyy");
}
function Gt(e, t) {
  if (!e) return "";
  if (t === "range") {
    const r = e;
    return r.from ? r.to ? `${Kt(r.from)} - ${Kt(r.to)}` : Kt(r.from) : "";
  }
  return Kt(e);
}
function kn(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function fl({
  value: e,
  onChange: t,
  disabled: r,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [g, m] = i.useState(
    kn(e)
  ), [P, k] = i.useState(
    Gt(e, s)
  ), [S, A] = i.useState(!1), R = i.useRef(null), f = i.useRef(
    Gt(e, s)
  ), h = i.useRef(!1);
  i.useEffect(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const z = Gt(e, s);
    u(e), k(z), f.current = z;
    const b = kn(e);
    b && m(b);
  }, [e]);
  function C(z) {
    h.current = !0;
    const b = Gt(z, s);
    u(z), k(b), f.current = b, t?.(z), s !== "range" && A(!1);
  }
  function w(z) {
    const b = z.target.value;
    if (b.replace(/\D/g, "") === "") {
      k(""), f.current = "", h.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const F = z.target.selectionStart ?? b.length, M = b.slice(0, F).replace(/\D/g, "").length, D = s === "range" ? ml(b) : ul(b);
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
      const _ = Rn(D);
      _ && (h.current = !0, u(_), f.current = D, _.from && m(_.from), t?.(_));
    } else {
      const _ = Zt(D);
      _ && (h.current = !0, u(_), m(_), f.current = D, t?.(_));
    }
  }
  function x() {
    !(s === "range" ? Rn(P) !== null : Zt(P) !== null) && P !== "" && k(f.current);
  }
  const T = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(ut, { open: S, onOpenChange: A, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: a(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          r && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: R,
              value: P,
              onChange: w,
              onBlur: x,
              placeholder: T,
              disabled: r,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ n(mt, { asChild: !0, disabled: r, children: /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              disabled: r,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ n(es, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ n(Qe, { className: "w-auto p-0", children: /* @__PURE__ */ n(
      fo,
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
const Sc = ({
  name: e,
  label: t,
  ...r
}) => {
  const o = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Fe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(ft, { children: /* @__PURE__ */ n(
          fl,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
};
function pl(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function gl(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function hl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function cr(e, { max: t, min: r = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = r), s < r && (s = t)) : (s > t && (s = t), s < r && (s = r)), s.toString().padStart(2, "0"));
}
function bo(e) {
  return pl(e) ? e : cr(e, { max: 23 });
}
function yo(e) {
  return gl(e) ? e : cr(e, { min: 1, max: 12 });
}
function er(e) {
  return hl(e) ? e : cr(e, { max: 59 });
}
function Hr(e, { min: t, max: r, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, cr(String(s), { min: t, max: r, loop: !0 }));
}
function xl(e, t) {
  return Hr(e, { min: 0, max: 23, step: t });
}
function bl(e, t) {
  return Hr(e, { min: 1, max: 12, step: t });
}
function Pn(e, t) {
  return Hr(e, { min: 0, max: 59, step: t });
}
function yl(e, t) {
  const r = er(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function vl(e, t) {
  const r = er(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function wl(e, t) {
  const r = bo(t);
  return e.setHours(parseInt(r, 10)), e;
}
function Nl(e, t, r) {
  const o = parseInt(yo(t), 10), s = Rl(o, r);
  return e.setHours(s), e;
}
function Lr(e, t, r, o) {
  switch (r) {
    case "minutes":
      return yl(e, t);
    case "seconds":
      return vl(e, t);
    case "hours":
      return wl(e, t);
    case "12hours":
      return o ? Nl(e, t, o) : e;
    default:
      return e;
  }
}
function Cl(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return er(String(e.getMinutes()));
    case "seconds":
      return er(String(e.getSeconds()));
    case "hours":
      return bo(String(e.getHours()));
    case "12hours":
      return yo(String(vo(e.getHours())));
    default:
      return "00";
  }
}
function Sl(e, t, r) {
  switch (r) {
    case "minutes":
      return Pn(e, t);
    case "seconds":
      return Pn(e, t);
    case "hours":
      return xl(e, t);
    case "12hours":
      return bl(e, t);
    default:
      return "00";
  }
}
function Rl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function vo(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function wo(e) {
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
function kl(e) {
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
function Pl(e, t) {
  const r = e.replace(/\D/g, ""), o = kl(t);
  let s = "";
  for (let l = 0; l < r.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += r[l];
  return s;
}
function zn(e, t) {
  const r = wo(t);
  if (e.length < r.length) return null;
  const o = Xn(e.slice(0, r.length), r, new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Yn(o) ? o : null;
}
function St(e, t) {
  return Un(e, wo(t));
}
const No = i.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, g = (m) => {
      if (t?.(m), r) {
        const P = new Re(r, "America/Sao_Paulo"), k = vo(r.getHours());
        o?.(
          Lr(
            P,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ n("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Ho,
      {
        defaultValue: e,
        onValueChange: (m) => g(m),
        children: [
          /* @__PURE__ */ n(
            Kr,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ n(Wo, {})
            }
          ),
          /* @__PURE__ */ c(Gr, { children: [
            /* @__PURE__ */ n(rr, { value: "AM", children: "AM" }),
            /* @__PURE__ */ n(rr, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
No.displayName = "TimePeriodSelect";
const Xt = i.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: r,
    id: o,
    name: s,
    date: l = (() => {
      const f = new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return f.setHours(0, 0, 0, 0), f;
    })(),
    onDateChange: d,
    onChange: u,
    onKeyDown: g,
    picker: m,
    period: P,
    onLeftFocus: k,
    onRightFocus: S,
    ...A
  }, R) => {
    const [f, h] = i.useState(!1), [C, w] = i.useState("0");
    i.useEffect(() => {
      if (f) {
        const b = setTimeout(() => {
          h(!1);
        }, 2e3);
        return () => clearTimeout(b);
      }
    }, [f]);
    const x = i.useMemo(() => Cl(l, m), [l, m]), T = (b) => m === "12hours" && f && x.slice(1, 2) === "1" && C === "0" ? `0${b}` : f ? x.slice(1, 2) + b : `0${b}`, z = (b) => {
      if (b.key !== "Tab") {
        if (b.preventDefault(), b.key === "ArrowRight" && S?.(), b.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(b.key)) {
          const F = b.key === "ArrowUp" ? 1 : -1, M = Sl(x, F, m);
          f && h(!1);
          const D = l ? new Re(l, "America/Sao_Paulo") : new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Lr(D, M, m, P));
        }
        if (b.key >= "0" && b.key <= "9") {
          m === "12hours" && w(b.key);
          const F = T(b.key);
          f && S?.(), h((D) => !D);
          const M = l ? new Re(l, "America/Sao_Paulo") : new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Lr(M, F, m, P));
        }
      }
    };
    return /* @__PURE__ */ n(
      mr,
      {
        ref: R,
        id: o || m,
        name: s || m,
        className: a(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || x,
        onChange: (b) => {
          b.preventDefault(), u?.(b);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (b) => {
          g?.(b), z(b);
        },
        ...A
      }
    );
  }
);
Xt.displayName = "TimePickerInput";
const Co = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), g = i.useRef(null), [m, P] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return An(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: g.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ n("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ n(ts, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ n(
        Xt,
        {
          picker: r === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: d,
          period: m,
          onRightFocus: () => l?.current?.focus()
        }
      ),
      (o === "minute" || o === "second") && /* @__PURE__ */ c($e, { children: [
        ":",
        /* @__PURE__ */ n(
          Xt,
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
      o === "second" && /* @__PURE__ */ c($e, { children: [
        ":",
        /* @__PURE__ */ n(
          Xt,
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
      r === 12 && /* @__PURE__ */ n("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ n(
        No,
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
Co.displayName = "TimePicker";
const So = i.forwardRef(
  ({
    locale: e = mo,
    defaultPopupValue: t = (() => {
      const R = new Re(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return R.setHours(0, 0, 0, 0), R;
    })(),
    value: r,
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
  }, A) => {
    const [R, f] = i.useState(r ?? t), h = Se(null), C = Se(null), [w, x] = i.useState(r), [T, z] = i.useState(!1), [b, F] = i.useState(
      r ? St(r, g) : ""
    ), M = Se(!1), D = Se(
      r ? St(r, g) : ""
    ), _ = (y) => {
      if (!y)
        return;
      if (!t) {
        y.setHours(
          R?.getHours() ?? 0,
          R?.getMinutes() ?? 0,
          R?.getSeconds() ?? 0
        ), o?.(y), f(y);
        return;
      }
      const q = (y.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), ce = vs(t, {
        days: Math.ceil(q)
      });
      ce.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(ce), f(ce);
    };
    ke(() => {
      if (M.current) {
        M.current = !1;
        return;
      }
      const y = r ? St(r, g) : "";
      r ? (x(r), f(r)) : x(void 0), F(y), D.current = y;
    }, [r, g]);
    const X = (y) => {
      if (!y)
        return;
      M.current = !0;
      const V = St(y, g);
      o?.(y), f(y), x(y), F(V), D.current = V;
    };
    An(
      A,
      () => ({
        ...h.current,
        value: w
      }),
      [w]
    );
    function Q(y) {
      const V = y.target.value;
      if (V.replace(/\D/g, "") === "") {
        F(""), D.current = "", M.current = !0, x(void 0), o?.(void 0);
        return;
      }
      const q = y.target.selectionStart ?? V.length, ce = V.slice(0, q).replace(/\D/g, "").length, we = Pl(V, g);
      F(we), requestAnimationFrame(() => {
        if (C.current) {
          let ze = 0, Ae = we.length;
          for (let Ie = 0; Ie < we.length; Ie++)
            if (/\d/.test(we[Ie]) && ze++, ze === ce) {
              Ae = Ie + 1;
              break;
            }
          C.current.setSelectionRange(Ae, Ae);
        }
      });
      const Pe = zn(we, g);
      Pe && (M.current = !0, D.current = we, o?.(Pe), x(Pe), f(Pe));
    }
    function re() {
      !(zn(b, g) !== null) && b !== "" && F(D.current);
    }
    return /* @__PURE__ */ c(ut, { open: T, onOpenChange: z, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: a(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            d && "cursor-not-allowed opacity-50",
            P
          ),
          children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: C,
                value: b,
                onChange: Q,
                onBlur: re,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ n(mt, { asChild: !0, disabled: d, children: /* @__PURE__ */ n(
              "button",
              {
                ref: h,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ n(rs, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(Qe, { className: "w-auto p-0", children: [
        /* @__PURE__ */ n(
          fo,
          {
            selected: w,
            onSelect: (y) => {
              y && (y.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), X(y));
            },
            onMonthChange: _,
            month: w ?? R,
            locale: e,
            disabled: k,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...S,
            mode: "single"
          }
        ),
        g !== "day" && /* @__PURE__ */ n("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ n(
          Co,
          {
            onChange: (y) => {
              if (M.current = !0, o?.(y), x(y), y) {
                f(y);
                const V = St(y, g);
                F(V), D.current = V;
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
So.displayName = "DateTimePicker";
const Rc = ({
  name: e,
  label: t,
  ...r
}) => {
  const o = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Fe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(ft, { children: /* @__PURE__ */ n(
          So,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
}, Ro = U.Root, zl = U.Trigger, Ml = U.Portal, kc = U.Close, ko = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Overlay,
  {
    ref: r,
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ko.displayName = U.Overlay.displayName;
const Wr = i.forwardRef(({ className: e, onClose: t, ...r }, o) => /* @__PURE__ */ c(Ml, { children: [
  /* @__PURE__ */ n(ko, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    U.Content,
    {
      ref: o,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ n(
          U.Close,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ c("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ n(At, { className: "h-4 w-4" }),
              /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
Wr.displayName = U.Content.displayName;
const Po = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Po.displayName = "DialogHeader";
const Tl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Tl.displayName = "DialogFooter";
const zo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Title,
  {
    ref: r,
    className: a(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
zo.displayName = U.Title.displayName;
const Mo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Mo.displayName = U.Description.displayName;
const Pc = Y.Root, zc = Y.Trigger, Mc = Y.Group, Tc = Y.Portal, Ic = Y.Sub, Dc = Y.RadioGroup, Il = i.forwardRef(({ className: e, inset: t, children: r, ...o }, s) => /* @__PURE__ */ c(
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
      r,
      /* @__PURE__ */ n(_t, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Il.displayName = Y.SubTrigger.displayName;
const Dl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Y.SubContent,
  {
    ref: r,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Dl.displayName = Y.SubContent.displayName;
const _l = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(Y.Portal, { children: /* @__PURE__ */ n(
  Y.Content,
  {
    ref: o,
    sideOffset: t,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
_l.displayName = Y.Content.displayName;
const Al = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  Y.Item,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
Al.displayName = Y.Item.displayName;
const El = i.forwardRef(({ className: e, children: t, checked: r, ...o }, s) => /* @__PURE__ */ c(
  Y.CheckboxItem,
  {
    ref: s,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(Y.ItemIndicator, { children: /* @__PURE__ */ n(Dt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
El.displayName = Y.CheckboxItem.displayName;
const Ll = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  Y.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(Y.ItemIndicator, { children: /* @__PURE__ */ n(Fn, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ll.displayName = Y.RadioItem.displayName;
const Ol = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  Y.Label,
  {
    ref: o,
    className: a(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
Ol.displayName = Y.Label.displayName;
const Fl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Y.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Fl.displayName = Y.Separator.displayName;
const Vl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "span",
  {
    className: a("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Vl.displayName = "DropdownMenuShortcut";
function To({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: a("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const jl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ n(
  "table",
  {
    ref: r,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
jl.displayName = "Table";
const Io = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "thead",
  {
    ref: r,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Io.displayName = "TableHeader";
const Do = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "tbody",
  {
    ref: r,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Do.displayName = "TableBody";
const _o = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "tfoot",
  {
    ref: r,
    className: a(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
_o.displayName = "TableFooter";
const Le = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "tr",
  {
    ref: r,
    className: a(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Le.displayName = "TableRow";
const Ao = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "th",
  {
    ref: r,
    className: a(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Ao.displayName = "TableHead";
const Be = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "td",
  {
    ref: r,
    className: a(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Be.displayName = "TableCell";
const Hl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "caption",
  {
    ref: r,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Hl.displayName = "TableCaption";
const Wl = lt.Provider, Br = lt.Root, $r = lt.Trigger, ur = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(lt.Portal, { children: /* @__PURE__ */ n(
  lt.Content,
  {
    ref: o,
    sideOffset: t,
    className: a(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
ur.displayName = lt.Content.displayName;
const mr = It.forwardRef(({ className: e, type: t, ...r }, o) => t === "textarea" ? /* @__PURE__ */ n(
  "textarea",
  {
    rows: 1,
    ref: o,
    className: a(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...r
  }
) : /* @__PURE__ */ n(
  "input",
  {
    ref: o,
    type: t,
    className: a(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      e
    ),
    ...r
  }
)), Ot = {
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
}, Mn = {
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
function Bl(e) {
  if (e && e.trim())
    return e.trim();
  if (typeof window > "u")
    return "default-user";
  try {
    const t = window.localStorage.getItem("session") || window.localStorage.getItem("auth-storage") || window.sessionStorage.getItem("session");
    if (t) {
      const r = JSON.parse(t), o = r?.user?.uuid || r?.payload?.user?.uuid || r?.state?.user?.uuid || r?.user?.id || r?.state?.user?.id;
      if (o) return String(o);
    }
  } catch {
  }
  return "default-user";
}
function Rt(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function Mt(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function fr(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function De(e) {
  return Mt(e) || fr(e);
}
function Eo(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function Tt(e, t, r, o, s) {
  return !!(t.meta?.isActions || o && Eo(e) || s && r);
}
function zr(e) {
  if (e == null) return;
  if (typeof e == "number")
    return Number.isFinite(e) && e > 0 ? e : void 0;
  const t = String(e).trim();
  if (!t) return;
  if (/^\d+(?:\.\d+)?$/.test(t)) {
    const s = parseFloat(t);
    return Number.isFinite(s) && s > 0 ? s : void 0;
  }
  const r = t.match(/^(\d+(?:\.\d+)?)px$/);
  if (r)
    return parseFloat(r[1]);
  const o = t.match(/^(\d+(?:\.\d+)?)rem$/);
  if (o)
    return parseFloat(o[1]) * 16;
}
function ot(e, t = "w") {
  if (!e) return;
  const r = new RegExp(
    `(?:^|\\s)!?${t}-\\[(\\d+(?:\\.\\d+)?)px\\]`
  ), o = e.match(r);
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
function Or(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(Or).filter(Boolean).join(" ").trim() : Ka(e) ? Or(e.props.children) : "";
}
function tr(e) {
  const t = e.columnDef.meta;
  if (t?.label)
    return t.label;
  const r = e.columnDef.header;
  if (typeof r == "string" && r.trim())
    return r.trim();
  if (typeof r == "function")
    try {
      const o = r({
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
      }), s = Or(o);
      if (s)
        return s;
    } catch {
    }
  return Mn[e.id] ? Mn[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function $l(e, t) {
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    r.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = Rt(l, d), g = l.meta, m = d === e.length - 1;
    if (De(u)) {
      r.add(u);
      return;
    }
    if (g?.defaultPinned === "left") {
      r.add(u);
      return;
    }
    (g?.defaultPinned === "right" || Tt(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(r).sort((l, d) => {
      const u = (g) => Mt(g) ? 0 : fr(g) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function Tn(e, t) {
  if (!e || e.length === 0)
    return t;
  const r = new Set(t), o = e.filter((d) => r.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (Mt(d))
        l.unshift(d);
      else if (fr(d)) {
        const g = l.findIndex(Mt);
        l.splice(g + 1, 0, d);
      } else Eo(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function at(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((r, o) => r === t[o]);
}
const In = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", ql = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ n(ns, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c($e, { children: [
      "Segure ",
      /* @__PURE__ */ n("kbd", { className: In, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ n(Vn, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ n(nr, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ n(os, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ n(jn, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c($e, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ n("kbd", { className: In, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ n(Fr, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ n(as, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c($e, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ n(or, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Kl({
  labels: e = Ot
}) {
  return /* @__PURE__ */ c(Ro, { children: [
    /* @__PURE__ */ c(Br, { children: [
      /* @__PURE__ */ n($r, { asChild: !0, children: /* @__PURE__ */ n(zl, { asChild: !0, children: /* @__PURE__ */ n(
        se,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ n(Nn, {})
        }
      ) }) }),
      /* @__PURE__ */ n(ur, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(Wr, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(Po, { children: [
        /* @__PURE__ */ c(zo, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ n(Nn, { className: "size-4 text-primary" }),
          e.helpModalTitle
        ] }),
        /* @__PURE__ */ n(Mo, { children: e.helpModalDescription })
      ] }),
      /* @__PURE__ */ n("div", { className: "divide-y divide-border rounded-md border border-border bg-card", children: ql.map((t) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3 p-2.5", children: [
        /* @__PURE__ */ n("div", { className: "size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0", children: t.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ n("p", { className: "text-xs font-semibold text-foreground leading-tight", children: t.title }),
          /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground leading-relaxed", children: t.description })
        ] })
      ] }, t.id)) })
    ] })
  ] });
}
function Gl({
  column: e,
  label: t,
  isActionsCol: r,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  labels: d
}) {
  const u = e.columnDef.meta, m = e.getIsPinned() === "left", P = o && !r && u?.enableReordering !== !1, k = s && !r && e.getCanPin() && u?.enablePinning !== !1, S = l && !r && e.getCanHide(), {
    attributes: A,
    listeners: R,
    setNodeRef: f,
    transform: h,
    transition: C,
    isDragging: w
  } = oo({
    id: e.id,
    disabled: !P,
    animateLayoutChanges: () => !1
  }), x = {
    transform: ao.Transform.toString(h),
    transition: C
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: f,
      style: x,
      className: a(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        w ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative" : "hover:bg-muted/70",
        !e.getIsVisible() && "opacity-60"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          P ? /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              ...A,
              ...R,
              className: "text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5",
              title: d.columnManagerFooterHint,
              children: /* @__PURE__ */ n($n, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ n("span", { className: "w-4 shrink-0" }),
          S ? /* @__PURE__ */ n(
            dt,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (T) => e.toggleVisibility(!!T),
              "aria-label": t
            }
          ) : /* @__PURE__ */ n(dt, { checked: !0, disabled: !0, "aria-label": t }),
          /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("div", { className: "flex items-center gap-0.5 shrink-0", children: r ? /* @__PURE__ */ c(
          "span",
          {
            className: "inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-xs bg-muted text-muted-foreground font-medium",
            title: d.pinnedRightBadge,
            children: [
              /* @__PURE__ */ n(qn, { className: "size-2.5" }),
              d.pinnedRightBadge
            ]
          }
        ) : k ? /* @__PURE__ */ n(
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
            children: /* @__PURE__ */ n(
              nr,
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
function Ul({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: r,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: g = Ot
}) {
  const [m, P] = de(""), k = Qn(
    Jt(Jn, {
      activationConstraint: { distance: 4 }
    }),
    Jt(Zn, {
      coordinateGetter: ro
    })
  ), S = e.getAllLeafColumns(), A = S.filter(
    (w) => !De(w.id)
  ), R = m.trim().toLowerCase(), f = R ? A.filter(
    (w) => tr(w).toLowerCase().includes(R)
  ) : A, h = A.filter(
    (w) => !w.getIsVisible()
  ).length, C = (w) => {
    const { active: x, over: T } = w;
    if (!T || x.id === T.id) return;
    const z = String(x.id), b = String(T.id), F = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : S.map((q) => q.id), M = F.indexOf(z), D = F.indexOf(b);
    M !== -1 && D !== -1 && e.setColumnOrder(st(F, M, D));
    const _ = e.getState().columnPinning.left ?? [], X = _.indexOf(z), Q = _.indexOf(b);
    X !== -1 && Q !== -1 && e.setColumnPinning((q) => ({
      ...q,
      left: st(q.left ?? [], X, Q)
    }));
    const re = e.getState().columnPinning.right ?? [], y = re.indexOf(z), V = re.indexOf(b);
    y !== -1 && V !== -1 && e.setColumnPinning((q) => ({
      ...q,
      right: st(q.right ?? [], y, V)
    }));
  };
  return /* @__PURE__ */ c(ut, { children: [
    /* @__PURE__ */ n(mt, { asChild: !0, children: /* @__PURE__ */ c(
      se,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: g.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ n(Vn, {}),
          /* @__PURE__ */ n("span", { children: g.columnsButton }),
          h > 0 && /* @__PURE__ */ c(
            Ar,
            {
              variant: "secondary",
              className: "ml-1 px-1.5 py-0 text-xs font-semibold",
              children: [
                A.length - h,
                "/",
                A.length
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c(Qe, { align: "end", className: "w-76 p-0 shadow-lg", children: [
      /* @__PURE__ */ c("div", { className: "p-2.5 border-b space-y-2 bg-muted/30", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-xs font-semibold text-foreground", children: g.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            h > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => e.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ n(Vr, { className: "size-3" }),
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
                  /* @__PURE__ */ n(or, { className: "size-3" }),
                  g.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        A.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ n(On, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ n(
            mr,
            {
              value: m,
              onChange: (w) => P(w.target.value),
              placeholder: g.searchColumnsPlaceholder,
              className: "h-7 pl-8 pr-7 text-xs bg-background"
            }
          ),
          m && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              onClick: () => P(""),
              className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer",
              children: /* @__PURE__ */ n(At, { className: "size-3" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: f.length === 0 ? /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground text-center py-4", children: g.noColumnsFound }) : /* @__PURE__ */ n(
        eo,
        {
          sensors: k,
          collisionDetection: to,
          modifiers: [ws],
          onDragEnd: C,
          children: /* @__PURE__ */ n(
            no,
            {
              items: f.map((w) => w.id),
              strategy: Cs,
              children: f.map((w, x) => {
                const T = x === S.length - 1, z = Tt(
                  w.id,
                  w.columnDef,
                  T,
                  t,
                  r
                );
                return /* @__PURE__ */ n(
                  Gl,
                  {
                    column: w,
                    label: tr(w),
                    isActionsCol: z,
                    enableColumnOrdering: o && !m.trim(),
                    enableColumnPinning: s,
                    enableColumnVisibility: l,
                    labels: g
                  },
                  w.id
                );
              })
            }
          )
        }
      ) }),
      /* @__PURE__ */ n("div", { className: "px-3 py-1.5 border-t bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground", children: /* @__PURE__ */ n("span", { children: g.columnManagerFooterHint }) })
    ] })
  ] });
}
function Xl({
  table: e,
  totalRecords: t,
  showTotalRecords: r = !0,
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
  onReset: A,
  canScrollLeft: R,
  canScrollRight: f,
  onScrollHorizontal: h,
  toolbarLeftContent: C,
  toolbarRightContent: w,
  labels: x = Ot,
  className: T
}) {
  const b = e.getAllLeafColumns().filter(
    (D) => !De(D.id) && !D.getIsVisible()
  ).length, F = t ?? e.getRowModel().rows.length, M = R || f;
  return /* @__PURE__ */ c(
    "div",
    {
      className: a(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        T
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2 min-w-0", children: [
          r && /* @__PURE__ */ c("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            x.totalRecords,
            " ",
            /* @__PURE__ */ n("strong", { className: "font-semibold text-foreground", children: F.toLocaleString("pt-BR") })
          ] }),
          C,
          b > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => e.toggleAllColumnsVisible(!0),
              title: x.showAllColumns,
              className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ n(Vr, { className: "size-3" }),
                b,
                " ",
                b === 1 ? x.hiddenColumnSingular : x.hiddenColumnPlural
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto shrink-0", children: [
          w,
          M && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ n(
              se,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => h("left"),
                title: x.scrollLeft,
                "aria-label": x.scrollLeft,
                children: /* @__PURE__ */ n(Hn, {})
              }
            ),
            /* @__PURE__ */ n(
              se,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !f,
                onClick: () => h("right"),
                title: x.scrollRight,
                "aria-label": x.scrollRight,
                children: /* @__PURE__ */ n(_t, {})
              }
            )
          ] }),
          o && /* @__PURE__ */ c(
            "div",
            {
              className: "hidden sm:inline-flex items-center gap-1",
              role: "group",
              "aria-label": x.densityLabel,
              children: [
                /* @__PURE__ */ n(
                  se,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: x.densityUltraCompact,
                    children: /* @__PURE__ */ n(Wn, {})
                  }
                ),
                /* @__PURE__ */ n(
                  se,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: x.densityCompact,
                    children: /* @__PURE__ */ n(Fr, {})
                  }
                ),
                /* @__PURE__ */ n(
                  se,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: x.densityComfortable,
                    children: /* @__PURE__ */ n(Bn, {})
                  }
                )
              ]
            }
          ),
          (k || m || P) && /* @__PURE__ */ n(
            Ul,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: g,
              enableColumnOrdering: m,
              enableColumnPinning: P,
              enableColumnVisibility: k,
              isCustomized: S,
              onReset: A,
              labels: x
            }
          ),
          S && /* @__PURE__ */ c(Br, { children: [
            /* @__PURE__ */ n($r, { asChild: !0, children: /* @__PURE__ */ n(
              se,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: A,
                "aria-label": x.resetToDefaultTooltip,
                children: /* @__PURE__ */ n(or, {})
              }
            ) }),
            /* @__PURE__ */ n(ur, { side: "bottom", children: x.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ n(Kl, { labels: x })
        ] })
      ]
    }
  );
}
function Yl({
  position: e,
  onClose: t,
  table: r,
  density: o,
  onDensityChange: s,
  showDensityToggle: l = !0,
  pinActionsColumnRight: d,
  pinLastColumnRight: u,
  enableColumnPinning: g,
  enableColumnVisibility: m,
  isCustomized: P,
  onReset: k,
  labels: S = Ot
}) {
  const A = Se(null);
  if (ke(() => {
    if (!e) return;
    const x = (T) => {
      T instanceof KeyboardEvent && T.key !== "Escape" || T instanceof MouseEvent && A.current?.contains(T.target) || t();
    };
    return document.addEventListener("mousedown", x), document.addEventListener("keydown", x), () => {
      document.removeEventListener("mousedown", x), document.removeEventListener("keydown", x);
    };
  }, [e, t]), !e) return null;
  const R = r.getAllLeafColumns(), f = R.filter(
    (x) => !De(x.id)
  ), h = f.filter(
    (x) => !x.getIsVisible()
  ).length, C = typeof window < "u" ? Math.min(e.x, Math.max(16, window.innerWidth - 272)) : e.x, w = typeof window < "u" ? Math.min(e.y, Math.max(16, window.innerHeight - 380)) : e.y;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: A,
      className: "fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95",
      style: { top: w, left: C },
      children: [
        /* @__PURE__ */ c("div", { className: "px-3 py-2 bg-muted/40 border-b flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: S.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            h > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => r.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer",
                title: S.showAllColumns,
                children: [
                  /* @__PURE__ */ n(Vr, { className: "size-3" }),
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
                  /* @__PURE__ */ n(or, { className: "size-3" }),
                  S.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ c("div", { className: "px-3 py-1.5 border-b flex items-center justify-between bg-muted/15", children: [
          /* @__PURE__ */ n("span", { className: "text-[11px] text-muted-foreground", children: S.densityLabel }),
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
                  /* @__PURE__ */ n(Wn, { className: "size-2.5" }),
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
                  /* @__PURE__ */ n(Fr, { className: "size-2.5" }),
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
                  /* @__PURE__ */ n(Bn, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: f.map((x, T) => {
          const z = tr(x), b = x.columnDef.meta, F = T === R.length - 1, M = Tt(
            x.id,
            x.columnDef,
            F,
            d,
            u
          ), _ = x.getIsPinned() === "left", X = m && !M && x.getCanHide(), Q = g && !M && x.getCanPin() && b?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ n(
                    dt,
                    {
                      checked: x.getIsVisible(),
                      disabled: !X,
                      onCheckedChange: (re) => x.toggleVisibility(!!re)
                    }
                  ),
                  /* @__PURE__ */ n("span", { className: "truncate text-xs", title: z, children: z })
                ] }),
                M ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ n(qn, { className: "size-2.5" }),
                  S.pinnedRightBadge
                ] }) : Q ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => x.pin(_ ? !1 : "left"),
                    title: _ ? S.unpin : S.pinLeft,
                    "aria-label": _ ? S.unpin : S.pinLeft,
                    className: a(
                      "p-1 rounded-xs transition-colors cursor-pointer",
                      _ ? "text-primary bg-primary/15 hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    children: /* @__PURE__ */ n(
                      nr,
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
            x.id
          );
        }) })
      ]
    }
  );
}
function Ql({
  header: e,
  density: t,
  enableColumnOrdering: r,
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
  labels: A,
  className: R,
  onRegisterHeaderElement: f
}) {
  const { column: h } = e, C = h.columnDef.meta, w = r && !l && !d && C?.enableReordering !== !1, x = o && !l && !d && h.getCanPin() && C?.enablePinning !== !1, T = h.getCanSort(), z = h.getIsSorted(), b = h.getSortIndex(), F = e.getContext().table.getState().sorting.length > 1 && b >= 0, M = u === "left", D = u === "right", _ = M || D, {
    attributes: X,
    listeners: Q,
    setNodeRef: re,
    transform: y,
    transition: V,
    isDragging: q
  } = oo({
    id: h.id,
    disabled: !w,
    animateLayoutChanges: () => !1
  }), ce = (B) => {
    re(B), f(h.id, B);
  }, we = y !== null && (y.x !== 0 || y.y !== 0), Pe = g ?? 0, ze = h.columnDef, Ae = C?.width ?? e.getSize(), Ie = ze.minSize ?? C?.minWidth ?? (_ ? e.getSize() : void 0), pt = ze.maxSize && ze.maxSize < Number.MAX_SAFE_INTEGER ? ze.maxSize : C?.maxWidth ?? (l ? e.getSize() : void 0), j = {
    width: Ae,
    minWidth: Ie,
    maxWidth: pt,
    ...we ? {
      transform: ao.Translate.toString(y),
      transition: V
    } : {},
    ..._ ? {
      backgroundColor: "var(--muted)"
    } : {},
    ...M ? { position: "sticky", left: `${Pe}px` } : {},
    ...D ? { position: "sticky", right: `${Pe}px` } : {}
  }, O = Se(!1), J = e.getResizeHandler(), Ne = (B) => {
    B.stopPropagation(), O.current = !0;
    const pe = () => {
      window.setTimeout(() => {
        O.current = !1;
      }, 0), window.removeEventListener("mouseup", pe);
    };
    window.addEventListener("mouseup", pe), J(B);
  }, ue = (B) => {
    B.stopPropagation(), O.current = !0;
    const pe = () => {
      window.setTimeout(() => {
        O.current = !1;
      }, 0), window.removeEventListener("touchend", pe), window.removeEventListener("touchcancel", pe);
    };
    window.addEventListener("touchend", pe), window.addEventListener("touchcancel", pe), J(B);
  }, ie = (B) => {
    O.current || h.getIsResizing() || T && h.getToggleSortingHandler()?.(B);
  }, K = (B) => {
    B.stopPropagation(), _ ? h.pin(!1) : h.pin("left");
  }, Ee = tr(h);
  return /* @__PURE__ */ c(
    Ao,
    {
      ref: ce,
      style: j,
      ...w ? X : {},
      ...w ? Q : {},
      onClick: T ? ie : void 0,
      className: a(
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
        T && "cursor-pointer hover:text-foreground",
        w && !T && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        q && "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
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
            className: a(
              "flex items-center gap-1.5 w-full min-w-0 overflow-hidden",
              (l || C?.align === "right") && "justify-end",
              (d || C?.align === "center") && "justify-center"
            ),
            children: [
              w && /* @__PURE__ */ n(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: A.columnManagerFooterHint,
                  children: /* @__PURE__ */ n($n, { className: "size-3" })
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
                    /* @__PURE__ */ n(
                      "span",
                      {
                        className: "truncate",
                        title: d ? void 0 : Ee,
                        children: Dr(h.columnDef.header, e.getContext())
                      }
                    ),
                    C?.headerTooltip && /* @__PURE__ */ c(Br, { children: [
                      /* @__PURE__ */ n($r, { asChild: !0, children: /* @__PURE__ */ n(
                        "span",
                        {
                          onClick: (B) => B.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ n(ss, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ n(ur, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: C.headerTooltip })
                    ] }),
                    T && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      z === "asc" ? /* @__PURE__ */ n(is, { className: "size-3.5 text-foreground" }) : z === "desc" ? /* @__PURE__ */ n(ls, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ n(jn, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      F && /* @__PURE__ */ n("span", { className: "text-[9px] font-bold text-foreground leading-none", children: b + 1 })
                    ] })
                  ]
                }
              ),
              x && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  onClick: K,
                  onPointerDown: (B) => B.stopPropagation(),
                  title: _ ? A.unpin : A.pinLeft,
                  "aria-label": _ ? A.unpin : A.pinLeft,
                  className: a(
                    "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                    _ ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
                  ),
                  children: /* @__PURE__ */ n(
                    nr,
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
        s && h.getCanResize() && !d && /* @__PURE__ */ n(
          "div",
          {
            onMouseDown: Ne,
            onTouchStart: ue,
            onDoubleClick: (B) => {
              B.stopPropagation(), h.resetSize();
            },
            onClick: (B) => B.stopPropagation(),
            onPointerDown: (B) => B.stopPropagation(),
            title: A.resetColumnWidth,
            className: "group/resize absolute right-0 top-0 z-20 flex h-full w-2.5 cursor-col-resize select-none touch-none items-center justify-end",
            children: /* @__PURE__ */ n(
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
function Ut(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jl({
  columns: e,
  tableId: t,
  persistState: r,
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
  propColumnSizing: A,
  onColumnSizingChange: R,
  propColumnOrder: f,
  onColumnOrderChange: h,
  propColumnPinning: C,
  onColumnPinningChange: w,
  propDensity: x,
  onDensityChange: T
}) {
  const z = he(
    () => e.map((j, O) => Rt(j, O)),
    [e]
  ), b = he(
    () => $l(e, {
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
  ), F = he(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), M = he(() => {
    const j = Bl(o), O = typeof window < "u" ? window.location.pathname : "app", J = t || `${O}::${z.join("|")}`;
    return `${s}:${j}:${J}`;
  }, [t, z, o, s]), D = oe(() => {
    const j = b.left ?? [], O = b.right ?? [], J = /* @__PURE__ */ new Set([...j, ...O]), ue = {
      columnOrder: [
        ...j,
        ...z.filter((ie) => !J.has(ie)),
        ...O
      ],
      columnVisibility: {},
      columnPinning: b,
      columnSizing: {},
      density: d
    };
    if (!r || !F)
      return ue;
    try {
      const ie = F.getItem(M);
      if (!ie) return ue;
      const K = JSON.parse(ie), Ee = new Set(z), B = Tn(
        Array.isArray(K.columnOrder) ? K.columnOrder : [],
        z
      ), pe = Array.isArray(K.columnPinning?.left) ? K.columnPinning.left.filter((He) => Ee.has(He)) : b.left ?? [], hr = Array.isArray(K.columnPinning?.right) ? K.columnPinning.right.filter((He) => Ee.has(He)) : b.right ?? [], gt = Array.from(
        /* @__PURE__ */ new Set([
          ...(b.left ?? []).filter(De),
          ...pe
        ])
      ), Ze = Array.from(
        /* @__PURE__ */ new Set([...hr, ...b.right ?? []])
      ), xr = /* @__PURE__ */ new Set([...gt, ...Ze]), br = B.filter((He) => !xr.has(He));
      return {
        columnOrder: [...gt, ...br, ...Ze],
        columnVisibility: K.columnVisibility && typeof K.columnVisibility == "object" ? K.columnVisibility : {},
        columnPinning: {
          left: gt,
          right: Ze
        },
        columnSizing: K.columnSizing && typeof K.columnSizing == "object" ? K.columnSizing : {},
        density: K.density === "ultra-compact" || K.density === "compact" || K.density === "comfortable" ? K.density : d
      };
    } catch {
      return ue;
    }
  }, [
    z,
    b,
    d,
    r,
    F,
    M
  ]), [_, X] = de(D);
  ke(() => {
    X((j) => {
      const O = Tn(
        j.columnOrder,
        z
      ), J = new Set(z), Ne = Array.from(
        /* @__PURE__ */ new Set([
          ...(j.columnPinning.right ?? []).filter((ie) => J.has(ie)),
          ...b.right ?? []
        ])
      ), ue = Array.from(
        /* @__PURE__ */ new Set([
          ...(b.left ?? []).filter(De),
          ...(j.columnPinning.left ?? []).filter((ie) => J.has(ie))
        ])
      );
      return at(O, j.columnOrder) && at(ue, j.columnPinning.left) && at(Ne, j.columnPinning.right) ? j : {
        ...j,
        columnOrder: O,
        columnPinning: {
          left: ue,
          right: Ne
        }
      };
    });
  }, [z, b]);
  const Q = k ?? _.columnVisibility, re = A ?? _.columnSizing, y = f ?? _.columnOrder, V = C ?? _.columnPinning, q = x ?? _.density;
  ke(() => {
    if (!(!r || !F))
      try {
        const j = {
          columnOrder: y,
          columnVisibility: Q,
          columnPinning: V,
          columnSizing: re,
          density: q
        };
        F.setItem(M, JSON.stringify(j));
      } catch {
      }
  }, [
    r,
    F,
    M,
    y,
    Q,
    V,
    re,
    q
  ]);
  const ce = oe(
    (j) => {
      S?.(j), X((O) => ({
        ...O,
        columnVisibility: Ut(j, O.columnVisibility)
      }));
    },
    [S]
  ), we = oe(
    (j) => {
      R?.(j), X((O) => ({
        ...O,
        columnSizing: Ut(j, O.columnSizing)
      }));
    },
    [R]
  ), Pe = oe(
    (j) => {
      h?.(j), X((O) => ({
        ...O,
        columnOrder: Ut(j, O.columnOrder)
      }));
    },
    [h]
  ), ze = oe(
    (j) => {
      w?.(j), X((O) => {
        const J = Ut(j, O.columnPinning), Ne = J.left ?? [], ue = J.right ?? [], ie = /* @__PURE__ */ new Set([...Ne, ...ue]), Ee = (O.columnOrder.length > 0 ? O.columnOrder : z).filter((pe) => !ie.has(pe)), B = [...Ne, ...Ee, ...ue];
        return {
          ...O,
          columnPinning: J,
          columnOrder: B
        };
      });
    },
    [w, z]
  ), Ae = oe(
    (j) => {
      T?.(j), X((O) => ({
        ...O,
        density: j
      }));
    },
    [T]
  ), Ie = he(() => {
    const j = Object.values(Q).some(
      (K) => K === !1
    ), O = !at(y, z), J = !at(
      V.left ?? [],
      b.left ?? []
    ), Ne = !at(
      V.right ?? [],
      b.right ?? []
    ), ue = Object.keys(re).length > 0;
    return j || O || J || Ne || ue || q !== d;
  }, [
    Q,
    y,
    z,
    V,
    b,
    re,
    q,
    d
  ]), pt = oe(() => {
    if (X({
      columnOrder: z,
      columnVisibility: {},
      columnPinning: b,
      columnSizing: {},
      density: d
    }), S?.({}), h?.(z), w?.(b), R?.({}), T?.(d), r && F)
      try {
        F.removeItem(M);
      } catch {
      }
  }, [
    z,
    b,
    d,
    h,
    w,
    R,
    S,
    T,
    r,
    F,
    M
  ]);
  return {
    columnVisibility: Q,
    onColumnVisibilityChange: ce,
    columnSizing: re,
    onColumnSizingChange: we,
    columnOrder: y,
    onColumnOrderChange: Pe,
    columnPinning: V,
    onColumnPinningChange: ze,
    density: q,
    onDensityChange: Ae,
    defaultColumnOrder: z,
    defaultColumnPinning: b,
    isCustomized: Ie,
    resetToDefaults: pt
  };
}
function Zl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ed({
  columns: e,
  data: t,
  totalRecords: r,
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
  rowSelection: A,
  onRowSelectionChange: R,
  onSelectedRowsChange: f,
  enableRowSelection: h,
  showSelectionColumn: C,
  isRowSelectable: w,
  selectionDisabledReason: x,
  renderBulkActions: T,
  expanded: z,
  onExpandedChange: b,
  getSubRows: F,
  getRowCanExpand: M,
  renderSubComponent: D,
  showExpandColumn: _ = !0,
  expandOnRowClick: X = !1,
  enableSorting: Q = !0,
  enableMultiSort: re = !0,
  sorting: y,
  onSortingChange: V,
  manualSorting: q = !1,
  columnVisibility: ce,
  onColumnVisibilityChange: we,
  columnSizing: Pe,
  onColumnSizingChange: ze,
  columnOrder: Ae,
  onColumnOrderChange: Ie,
  columnPinning: pt,
  onColumnPinningChange: j,
  pinActionsColumnRight: O = !0,
  pinLastColumnRight: J = !1,
  defaultPinnedLeft: Ne,
  defaultPinnedRight: ue,
  enableColumnOrdering: ie = !0,
  enableColumnPinning: K = !0,
  enableColumnVisibility: Ee = !0,
  enableColumnResizing: B = !0,
  enableContextMenu: pe = !0,
  showToolbar: hr = !0,
  showTotalRecords: gt = !0,
  showDensityToggle: Ze = !0,
  showHelpButton: xr = !0,
  toolbarLeftContent: br,
  toolbarRightContent: Ur,
  density: He = "compact",
  onDensityChange: ta,
  tableLayout: ra = "fixed",
  striped: na = !1,
  hoverable: oa = !0,
  stickyHeader: Xr = !0,
  maxHeight: et,
  className: aa,
  classNames: ne,
  style: sa,
  getRowId: ia,
  onRowClick: Yr,
  onRowDoubleClick: Qr,
  rowClassName: Jr,
  rowAccentColor: Ft,
  renderRowProgress: Zr,
  footerContent: Vt,
  onTableReady: en,
  labels: tn
}) {
  const ge = he(
    () => ({
      ...Ot,
      ...tn,
      ...k ? { emptyMessage: k } : {}
    }),
    [tn, k]
  ), [la, da] = de([]), [ca, ua] = de({}), [ma, fa] = de({}), [pa, rn] = de(
    null
  ), [yr, ga] = de(!1), [vr, ha] = de(!1), [wr, xa] = de(
    {}
  ), ht = Se(null), nn = Se(null), jt = Se(
    /* @__PURE__ */ new Map()
  ), on = Se(null), Nr = Se(/* @__PURE__ */ new Map()), Cr = Se(
    /* @__PURE__ */ new Map()
  ), [ba, an] = de([]), sn = y ?? la, ya = V ?? da, ln = A ?? ca, va = oe(
    (p) => {
      R?.(p), ua(
        (N) => Zl(p, A ?? N)
      );
    },
    [R, A]
  ), dn = z ?? ma, wa = b ?? fa, tt = h !== void 0 ? !!h : !!(C || R || f || T), Na = he(
    () => e.some(
      (p, N) => Mt(Rt(p, N))
    ),
    [e]
  ), cn = (C ?? tt) && !Na, un = !!(D || F), Ca = he(
    () => e.some(
      (p, N) => fr(Rt(p, N))
    ),
    [e]
  ), mn = un && _ && !Ca, fn = he(() => {
    const p = e.map((v, I) => {
      const L = Rt(v, I), G = Tt(
        L,
        v,
        I === e.length - 1,
        O,
        J
      ), H = v.meta, ae = v, W = v.size ?? ae.width ?? H?.width ?? ot(H?.headerClassName, "w") ?? ot(H?.cellClassName, "w"), E = zr(W), ee = v.minSize ?? ae.minWidth ?? H?.minWidth ?? ot(H?.headerClassName, "min-w") ?? ot(H?.cellClassName, "min-w"), Ce = zr(ee), me = v.maxSize ?? ae.maxWidth ?? H?.maxWidth ?? ot(H?.headerClassName, "max-w") ?? ot(H?.cellClassName, "max-w"), ye = zr(me);
      let Z = E, Me = Ce, Te = ye;
      return G ? (Z === void 0 && (Z = 70), Te === void 0 && (Te = Z), Me === void 0 && (Me = Z)) : (Z !== void 0 && Me === void 0 && (Me = Math.min(60, Z)), v.enableResizing === !1 && Z !== void 0 && Te === void 0 && (Te = Z)), {
        ...v,
        id: L,
        ...Z !== void 0 ? { size: Z } : {},
        ...Me !== void 0 ? { minSize: Me } : {},
        ...Te !== void 0 ? { maxSize: Te } : {}
      };
    }), N = [];
    return cn && N.push({
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
        defaultPinned: "left"
      },
      header: ({ table: v }) => /* @__PURE__ */ n(
        dt,
        {
          checked: v.getIsAllPageRowsSelected() || v.getIsSomePageRowsSelected() && "indeterminate",
          onCheckedChange: (I) => v.toggleAllPageRowsSelected(!!I),
          "aria-label": ge.selectAllRows,
          onClick: (I) => I.stopPropagation()
        }
      ),
      cell: ({ row: v }) => {
        const I = v.getCanSelect();
        return /* @__PURE__ */ n(
          dt,
          {
            checked: v.getIsSelected(),
            disabled: !I,
            title: I ? void 0 : x,
            onCheckedChange: (L) => v.toggleSelected(!!L),
            "aria-label": ge.selectRow(v.id),
            onClick: (L) => L.stopPropagation()
          }
        );
      }
    }), mn && N.push({
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
        defaultPinned: "left"
      },
      header: () => null,
      cell: ({ row: v }) => {
        if (!v.getCanExpand()) return null;
        const I = v.getIsExpanded();
        return /* @__PURE__ */ n(
          se,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (L) => {
              L.stopPropagation(), v.toggleExpanded();
            },
            "aria-label": I ? ge.collapseRow : ge.expandRow,
            title: I ? ge.collapseRow : ge.expandRow,
            children: I ? /* @__PURE__ */ n(Ue, {}) : /* @__PURE__ */ n(_t, {})
          }
        );
      }
    }), [...N, ...p];
  }, [
    e,
    O,
    J,
    cn,
    mn,
    ge,
    x
  ]), {
    columnVisibility: xt,
    onColumnVisibilityChange: Sa,
    columnSizing: Ht,
    onColumnSizingChange: Ra,
    columnOrder: Wt,
    onColumnOrderChange: ka,
    columnPinning: rt,
    onColumnPinningChange: Pa,
    density: le,
    onDensityChange: pn,
    isCustomized: gn,
    resetToDefaults: hn
  } = Jl({
    columns: fn,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: He,
    pinActionsColumnRight: O,
    pinLastColumnRight: J,
    defaultPinnedLeft: Ne,
    defaultPinnedRight: ue,
    propColumnVisibility: ce,
    onColumnVisibilityChange: we,
    propColumnSizing: Pe,
    onColumnSizingChange: ze,
    propColumnOrder: Ae,
    onColumnOrderChange: Ie,
    propColumnPinning: pt,
    onColumnPinningChange: j,
    propDensity: void 0,
    onDensityChange: ta
  }), za = he(() => typeof h == "function" ? h : w ? (p) => w(p.original) : tt, [h, w, tt]), Ma = he(() => {
    if (M) return M;
    if (D) return () => !0;
  }, [M, D]), $ = Rs({
    data: t,
    columns: fn,
    defaultColumn: {
      minSize: 60
    },
    getRowId: ia,
    getSubRows: F,
    getRowCanExpand: Ma,
    getCoreRowModel: zs(),
    getSortedRowModel: q ? void 0 : Ps(),
    getExpandedRowModel: un ? ks() : void 0,
    onSortingChange: ya,
    onExpandedChange: wa,
    onColumnVisibilityChange: Sa,
    onColumnSizingChange: Ra,
    onColumnOrderChange: ka,
    onColumnPinningChange: Pa,
    onRowSelectionChange: va,
    manualSorting: q,
    state: {
      sorting: sn,
      expanded: dn,
      rowSelection: ln,
      columnVisibility: xt,
      columnSizing: Ht,
      columnOrder: Wt,
      columnPinning: rt
    },
    enableRowSelection: za,
    enableSorting: Q,
    enableMultiSort: re,
    enableColumnResizing: B,
    enableColumnPinning: K,
    columnResizeMode: "onChange"
  });
  ke(() => {
    en?.($);
  }, [$, en]);
  const bt = he(() => tt ? $.getSelectedRowModel().flatRows.map((p) => p.original) : [], [$, ln, t, tt]);
  ke(() => {
    f?.(bt);
  }, [bt, f]);
  const Bt = oe(() => {
    const p = {};
    jt.current.forEach((N, v) => {
      if (N) {
        const I = Math.round(N.getBoundingClientRect().width);
        I > 0 && (p[v] = I);
      }
    }), xa((N) => {
      const v = Object.keys(p);
      return v.length === Object.keys(N).length && v.every((I) => Math.abs((N[I] ?? 0) - p[I]) <= 1) ? N : p;
    });
  }, []), Ta = oe(
    (p, N) => {
      N ? jt.current.set(p, N) : jt.current.delete(p);
    },
    []
  ), Ia = oe(
    (p, N) => {
      N ? Nr.current.set(p, N) : Nr.current.delete(p);
    },
    []
  ), Da = oe(
    (p, N) => {
      N ? Cr.current.set(p, N) : Cr.current.delete(p);
    },
    []
  ), $t = oe(() => {
    if (!Ft) {
      an((L) => L.length === 0 ? L : []);
      return;
    }
    const p = on.current;
    if (!p) return;
    const N = p.getBoundingClientRect(), v = $.getRowModel().rows, I = [];
    v.forEach((L, G) => {
      const H = Ft(L.original, G);
      if (!H) return;
      const ae = Nr.current.get(L.id);
      if (!ae) return;
      const W = ae.getBoundingClientRect(), E = Cr.current.get(L.id), ee = E ? E.getBoundingClientRect().bottom : W.bottom, Ce = Math.round((W.top - N.top) * 10) / 10, me = Math.round((ee - W.top) * 10) / 10;
      if (me <= 0) return;
      const ye = H.startsWith("#") || H.startsWith("rgb") || H.startsWith("hsl") || H.startsWith("oklch") || H.startsWith("var(");
      I.push({
        key: L.id,
        top: Ce,
        height: me,
        color: H,
        isCssColor: ye
      });
    }), an((L) => L.length === I.length && L.every(
      (G, H) => G.key === I[H].key && Math.abs(G.top - I[H].top) <= 0.5 && Math.abs(G.height - I[H].height) <= 0.5 && G.color === I[H].color
    ) ? L : I);
  }, [Ft, $]), yt = oe(() => {
    const p = ht.current;
    if (!p) return;
    const { scrollLeft: N, scrollWidth: v, clientWidth: I } = p, L = Math.max(0, v - I);
    ga(N > 2), ha(L - N > 2);
  }, []);
  ke(() => {
    const p = ht.current;
    if (!p) return;
    const N = (v) => {
      if (!v.ctrlKey || !(p.scrollWidth > p.clientWidth + 1)) return;
      const L = Math.abs(v.deltaY) >= Math.abs(v.deltaX) ? v.deltaY : v.deltaX;
      if (L === 0) return;
      const G = v.deltaMode === 1 ? 32 : v.deltaMode === 2 ? p.clientWidth * 0.8 : 1;
      v.preventDefault(), p.scrollLeft += L * G;
    };
    return p.addEventListener("wheel", N, { passive: !1 }), () => {
      p.removeEventListener("wheel", N);
    };
  }, []), Ga(() => {
    Bt(), yt(), $t();
  }, [
    Bt,
    yt,
    $t,
    t,
    xt,
    Wt,
    rt,
    Ht,
    le,
    sn,
    dn
  ]), ke(() => {
    const p = ht.current, N = nn.current;
    if (!p || typeof ResizeObserver > "u") return;
    const v = new ResizeObserver(() => {
      Bt(), yt(), $t();
    });
    return v.observe(p), N && v.observe(N), jt.current.forEach((I) => {
      I && v.observe(I);
    }), () => v.disconnect();
  }, [
    yt,
    Bt,
    $t,
    xt,
    Wt,
    rt
  ]);
  const _a = oe((p) => {
    const N = ht.current;
    if (!N) return;
    const v = Math.max(240, Math.floor(N.clientWidth * 0.6));
    N.scrollBy({
      left: p === "left" ? -v : v,
      behavior: "smooth"
    });
  }, []), vt = $.getVisibleLeafColumns(), {
    stickyOffsets: Sr,
    lastLeftPinnedColumnId: Rr,
    firstRightPinnedColumnId: kr,
    actionsColumnIds: nt
  } = he(() => {
    const p = {}, N = /* @__PURE__ */ new Set(), v = $.getAllLeafColumns(), I = /* @__PURE__ */ new Map();
    v.forEach((E, ee) => {
      I.set(E.id, E), Tt(
        E.id,
        E.columnDef,
        ee === v.length - 1,
        O,
        J
      ) && N.add(E.id);
    });
    const L = (E) => xt[E.id] !== !1 && E.getIsVisible(), G = (rt.left ?? []).map((E) => I.get(E)).filter(
      (E) => !!E && L(E)
    ), H = (rt.right ?? []).map((E) => I.get(E)).filter(
      (E) => !!E && L(E)
    );
    let ae = 0;
    for (const E of G)
      p[E.id] = ae, ae += wr[E.id] || E.getSize();
    let W = 0;
    for (let E = H.length - 1; E >= 0; E--) {
      const ee = H[E];
      p[ee.id] = W, W += wr[ee.id] || ee.getSize();
    }
    return {
      stickyOffsets: p,
      lastLeftPinnedColumnId: G.length > 0 ? G[G.length - 1].id : null,
      firstRightPinnedColumnId: H.length > 0 ? H[0].id : null,
      actionsColumnIds: N
    };
  }, [
    $,
    rt,
    Wt,
    xt,
    Ht,
    wr,
    O,
    J
  ]), Aa = Qn(
    Jt(Jn, {
      activationConstraint: { distance: 6 }
    }),
    Jt(Zn, {
      coordinateGetter: ro
    })
  ), Ea = oe(
    (p) => {
      const { active: N, over: v } = p;
      if (!v || N.id === v.id) return;
      const I = String(N.id), L = String(v.id);
      if (De(I) || De(L) || nt.has(I) || nt.has(L))
        return;
      const G = $.getState().columnOrder.length > 0 ? $.getState().columnOrder : $.getAllLeafColumns().map((Z) => Z.id), H = G.indexOf(I), ae = G.indexOf(L);
      H !== -1 && ae !== -1 && $.setColumnOrder(st(G, H, ae));
      const W = $.getState().columnPinning.left ?? [], E = W.indexOf(I), ee = W.indexOf(L);
      E !== -1 && ee !== -1 && $.setColumnPinning((Z) => ({
        ...Z,
        left: st(Z.left ?? [], E, ee)
      }));
      const Ce = $.getState().columnPinning.right ?? [], me = Ce.indexOf(I), ye = Ce.indexOf(L);
      me !== -1 && ye !== -1 && $.setColumnPinning((Z) => ({
        ...Z,
        right: st(Z.right ?? [], me, ye)
      }));
    },
    [$, nt]
  ), La = (p) => {
    pe && (p.preventDefault(), rn({ x: p.clientX, y: p.clientY }));
  }, xn = oe(() => {
    $.resetRowSelection();
  }, [$]), wt = $.getRowModel().rows, Oa = g && (m === "skeleton" || m === "auto" && wt.length === 0), Fa = g && (m === "overlay" || m === "auto" && wt.length > 0), bn = he(
    () => $.getFooterGroups().some(
      (p) => p.headers.some((N) => N.column.columnDef.footer !== void 0)
    ),
    [$]
  ), Va = Object.keys(Ht).length > 0, ja = !!$.getState().columnSizingInfo?.isResizingColumn, yn = ra === "fixed" || Va || ja, Ha = et ? {
    maxHeight: typeof et == "number" ? `${et}px` : et
  } : void 0;
  return /* @__PURE__ */ n(Wl, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: sa,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        ne?.root,
        aa
      ),
      onContextMenu: La,
      children: [
        Fa && /* @__PURE__ */ n("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ n(it, { className: "animate-spin size-6 text-primary" }) }),
        hr && /* @__PURE__ */ n(
          Xl,
          {
            table: $,
            totalRecords: r,
            showTotalRecords: gt,
            showDensityToggle: Ze,
            showHelpButton: xr,
            density: le,
            onDensityChange: pn,
            pinActionsColumnRight: O,
            pinLastColumnRight: J,
            enableColumnOrdering: ie,
            enableColumnPinning: K,
            enableColumnVisibility: Ee,
            isCustomized: gn,
            onReset: hn,
            canScrollLeft: yr,
            canScrollRight: vr,
            onScrollHorizontal: _a,
            toolbarLeftContent: br,
            toolbarRightContent: Ur,
            labels: ge,
            className: ne?.toolbar
          }
        ),
        tt && bt.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              ne?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n("span", { className: "font-medium text-foreground", children: ge.selectedItemsCount(bt.length) }),
                T?.(bt, xn)
              ] }),
              /* @__PURE__ */ c(
                se,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: xn,
                  children: [
                    /* @__PURE__ */ n(At, {}),
                    /* @__PURE__ */ n("span", { children: ge.clearSelection })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            ref: ht,
            onScroll: yt,
            style: Ha,
            className: a(
              "relative w-full overflow-auto",
              ne?.viewport
            ),
            children: [
              Ft && /* @__PURE__ */ n(
                "div",
                {
                  ref: on,
                  "aria-hidden": "true",
                  className: "sticky left-0 z-[25] h-0 w-0 overflow-visible pointer-events-none",
                  children: ba.map((p) => /* @__PURE__ */ n(
                    "div",
                    {
                      className: a(
                        "absolute left-0 w-[4px]",
                        !p.isCssColor && p.color
                      ),
                      style: {
                        top: `${p.top}px`,
                        height: `${p.height}px`,
                        ...p.isCssColor ? { backgroundColor: p.color } : {}
                      }
                    },
                    p.key
                  ))
                }
              ),
              /* @__PURE__ */ n(
                eo,
                {
                  sensors: Aa,
                  collisionDetection: to,
                  modifiers: [Ns],
                  onDragEnd: Ea,
                  children: /* @__PURE__ */ c(
                    "table",
                    {
                      ref: nn,
                      style: yn ? { width: $.getTotalSize(), minWidth: "100%" } : void 0,
                      className: a(
                        yn ? "table-fixed" : "table-auto w-full",
                        "caption-bottom border-separate border-spacing-0",
                        le === "ultra-compact" && "text-xs",
                        le === "compact" && "text-sm",
                        le === "comfortable" && "text-sm",
                        ne?.table
                      ),
                      children: [
                        /* @__PURE__ */ n(
                          Io,
                          {
                            className: a(
                              "bg-muted",
                              Xr && et && "sticky top-0 z-30 bg-muted",
                              ne?.header
                            ),
                            children: $.getHeaderGroups().map((p) => /* @__PURE__ */ n(
                              Le,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  ne?.headerRow
                                ),
                                children: /* @__PURE__ */ n(
                                  no,
                                  {
                                    items: p.headers.map((N) => N.column.id),
                                    strategy: Ss,
                                    children: p.headers.map((N) => {
                                      const v = N.column.id, I = N.column.getIsPinned(), L = nt.has(v), G = De(v);
                                      return /* @__PURE__ */ n(
                                        Ql,
                                        {
                                          header: N,
                                          density: le,
                                          enableColumnOrdering: ie,
                                          enableColumnPinning: K,
                                          enableColumnResizing: B,
                                          isActionsCol: L,
                                          isSystemLeftCol: G,
                                          pinnedPosition: I,
                                          stickyOffset: Sr[v],
                                          isLastLeftPinned: v === Rr,
                                          isFirstRightPinned: v === kr,
                                          canScrollLeft: yr,
                                          canScrollRight: vr,
                                          labels: ge,
                                          className: ne?.headerCell,
                                          onRegisterHeaderElement: Ta
                                        },
                                        N.id
                                      );
                                    })
                                  }
                                )
                              },
                              p.id
                            ))
                          }
                        ),
                        /* @__PURE__ */ n(Do, { className: ne?.body, children: Oa ? Array.from({ length: P }).map((p, N) => /* @__PURE__ */ n(
                          Le,
                          {
                            className: "border-b-0 hover:bg-transparent",
                            children: vt.map((v) => /* @__PURE__ */ n(
                              Be,
                              {
                                className: a(
                                  "border-b border-border/60",
                                  le === "ultra-compact" && "py-0.5 px-2",
                                  le === "compact" && "py-1 px-3",
                                  le === "comfortable" && "py-2 px-3"
                                ),
                                children: /* @__PURE__ */ n(To, { className: "h-4 w-full max-w-[140px]" })
                              },
                              `skeleton-${N}-${v.id}`
                            ))
                          },
                          `skeleton-${N}`
                        )) : wt.length > 0 ? wt.map((p, N) => {
                          const v = Zr ? Zr(p.original) : null, L = p.getIsExpanded() && !!D, G = p.getVisibleCells(), H = N % 2 === 1, ae = N === wt.length - 1;
                          return /* @__PURE__ */ c(Ua, { children: [
                            /* @__PURE__ */ n(
                              Le,
                              {
                                ref: (W) => Ia(p.id, W),
                                "data-state": p.getIsSelected() && "selected",
                                onClick: (W) => {
                                  X && p.getCanExpand() && p.toggleExpanded(), Yr?.(p.original, W);
                                },
                                onDoubleClick: Qr ? (W) => Qr(p.original, W) : void 0,
                                className: a(
                                  "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)]",
                                  na && H && "bg-muted/80 dark:bg-muted/40 [--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_80%,var(--card))] dark:[--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_40%,var(--card))]",
                                  oa ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] dark:hover:bg-muted dark:hover:[--flash-table-cell-bg:var(--muted)]" : "hover:bg-transparent",
                                  "data-[state=selected]:bg-muted data-[state=selected]:[--flash-table-cell-bg:var(--muted)] dark:data-[state=selected]:bg-muted dark:data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                  (Yr || X && p.getCanExpand()) && "cursor-pointer",
                                  ne?.row,
                                  Jr ? Jr(p.original, N) : ""
                                ),
                                children: G.map((W) => {
                                  const E = W.column.id, ee = W.column.getIsPinned(), Ce = ee === "left", me = ee === "right", ye = Ce || me, Z = E === Rr, Me = E === kr, Te = nt.has(E), vn = De(E), We = W.column.columnDef.meta, wn = Sr[E] ?? 0, qt = W.column.columnDef, Wa = We?.width ?? W.column.getSize(), Ba = qt.minSize ?? We?.minWidth ?? (ye ? W.column.getSize() : void 0), $a = qt.maxSize && qt.maxSize < Number.MAX_SAFE_INTEGER ? qt.maxSize : We?.maxWidth ?? (Te ? W.column.getSize() : void 0), qa = {
                                    width: Wa,
                                    minWidth: Ba,
                                    maxWidth: $a,
                                    ...ye ? {
                                      backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                    } : {},
                                    ...Ce ? {
                                      position: "sticky",
                                      left: `${wn}px`
                                    } : {},
                                    ...me ? {
                                      position: "sticky",
                                      right: `${wn}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ n(
                                    Be,
                                    {
                                      style: qa,
                                      className: a(
                                        We?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                        "align-middle transition-colors",
                                        vn && "[&:has([role=checkbox])]:pr-2",
                                        ye && "sticky",
                                        // Row bottom border
                                        (!ae || bn || Vt) && !v && !L && "border-b border-border",
                                        // Density padding
                                        le === "ultra-compact" && "py-0.5 px-2 text-xs",
                                        le === "compact" && "py-1 px-3 text-sm",
                                        le === "comfortable" && "py-2 px-3 text-sm",
                                        // Alignment
                                        (Te || We?.align === "right") && "text-right",
                                        (vn || We?.align === "center") && "text-center",
                                        // Pinned cell stacking context (opaque background comes from --flash-table-cell-bg)
                                        ye && "z-20",
                                        // Sticky boundary dividers & directional shadows
                                        Z && "border-r border-border",
                                        Z && yr && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        Me && "border-l border-border",
                                        Me && vr && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        ne?.cell,
                                        We?.cellClassName
                                      ),
                                      children: Dr(
                                        W.column.columnDef.cell,
                                        W.getContext()
                                      )
                                    },
                                    W.id
                                  );
                                })
                              }
                            ),
                            L && D && /* @__PURE__ */ n(
                              Le,
                              {
                                ref: (W) => Da(p.id, W),
                                className: a(
                                  "bg-muted/20 hover:bg-muted/20 border-b-0",
                                  ne?.expandedRow
                                ),
                                children: /* @__PURE__ */ n(
                                  Be,
                                  {
                                    colSpan: vt.length || 1,
                                    className: a(
                                      "p-3",
                                      !ae && !v && "border-b border-border"
                                    ),
                                    children: D({
                                      row: p,
                                      data: p.original
                                    })
                                  }
                                )
                              }
                            ),
                            v && /* @__PURE__ */ n("tr", { className: "p-0 m-0 border-0 pointer-events-none select-none", children: /* @__PURE__ */ n(
                              "td",
                              {
                                colSpan: vt.length || 1,
                                className: "p-0 m-0 border-b border-border h-[2px] leading-none bg-muted",
                                children: /* @__PURE__ */ n(
                                  "div",
                                  {
                                    className: a(
                                      "h-[2px] transition-all duration-300",
                                      v.color || "bg-primary"
                                    ),
                                    style: {
                                      width: `${Math.min(100, Math.max(1, v.percent < 1 ? 1 : v.percent))}%`,
                                      minWidth: "4px"
                                    }
                                  }
                                )
                              }
                            ) })
                          ] }, p.id);
                        }) : /* @__PURE__ */ n(Le, { className: "hover:bg-transparent", children: /* @__PURE__ */ n(
                          Be,
                          {
                            colSpan: vt.length || e.length || 1,
                            className: a(
                              "h-24 text-center text-muted-foreground text-sm",
                              ne?.emptyCell
                            ),
                            children: g ? ge.loadingMessage : S ?? /* @__PURE__ */ n("span", { className: "italic", children: ge.emptyMessage })
                          }
                        ) }) }),
                        (bn || Vt) && /* @__PURE__ */ n(
                          _o,
                          {
                            className: a(
                              "border-t bg-muted/50 font-medium",
                              Xr && et && "sticky bottom-0 z-30 bg-muted",
                              ne?.footer
                            ),
                            children: Vt ? /* @__PURE__ */ n(Le, { className: ne?.footerRow, children: /* @__PURE__ */ n(
                              Be,
                              {
                                colSpan: vt.length || 1,
                                className: a(
                                  "px-3 py-2 border-t border-border",
                                  ne?.footerCell
                                ),
                                children: Vt
                              }
                            ) }) : $.getFooterGroups().map((p) => /* @__PURE__ */ n(
                              Le,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  ne?.footerRow
                                ),
                                children: p.headers.map((N) => {
                                  const v = N.column.id, I = N.column.getIsPinned(), L = I === "left", G = I === "right", H = L || G, ae = v === Rr, W = v === kr, E = nt.has(v), ee = N.column.columnDef.meta, Ce = Sr[v] ?? 0, me = N.column.columnDef, ye = ee?.width ?? N.getSize(), Z = me.minSize ?? ee?.minWidth ?? (H ? N.getSize() : void 0), Me = me.maxSize && me.maxSize < Number.MAX_SAFE_INTEGER ? me.maxSize : ee?.maxWidth ?? (E ? N.getSize() : void 0), Te = {
                                    width: ye,
                                    minWidth: Z,
                                    maxWidth: Me,
                                    ...H ? {
                                      backgroundColor: "var(--muted)"
                                    } : {},
                                    ...L ? {
                                      position: "sticky",
                                      left: `${Ce}px`
                                    } : {},
                                    ...G ? {
                                      position: "sticky",
                                      right: `${Ce}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ n(
                                    Be,
                                    {
                                      style: Te,
                                      className: a(
                                        "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                        H ? "sticky bg-muted z-20" : "bg-muted",
                                        le === "ultra-compact" && "py-1 px-2 text-xs",
                                        le === "compact" && "py-1 px-3 text-sm",
                                        le === "comfortable" && "py-2 px-3 text-sm",
                                        (E || ee?.align === "right") && "text-right",
                                        ee?.align === "center" && "text-center",
                                        ae && "border-r border-border",
                                        W && "border-l border-border",
                                        ne?.footerCell,
                                        ee?.footerClassName
                                      ),
                                      children: N.isPlaceholder ? null : Dr(
                                        N.column.columnDef.footer,
                                        N.getContext()
                                      )
                                    },
                                    N.id
                                  );
                                })
                              },
                              p.id
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
        pe && /* @__PURE__ */ n(
          Yl,
          {
            position: pa,
            onClose: () => rn(null),
            table: $,
            density: le,
            onDensityChange: pn,
            showDensityToggle: Ze,
            pinActionsColumnRight: O,
            pinLastColumnRight: J,
            enableColumnPinning: K,
            enableColumnVisibility: Ee,
            isCustomized: gn,
            onReset: hn,
            labels: ge
          }
        )
      ]
    }
  ) });
}
ed.displayName = "FlashTable";
const td = _e(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), pr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  so.Root,
  {
    ref: r,
    className: a(td(), e),
    ...t
  }
));
pr.displayName = so.Root.displayName;
const _c = gs, Lo = i.createContext(
  {}
), Je = ({
  ...e
}) => /* @__PURE__ */ n(Lo.Provider, { value: { name: e.name }, children: /* @__PURE__ */ n(hs, { ...e }) }), gr = () => {
  const e = i.useContext(Lo), t = i.useContext(Oo), { getFieldState: r, formState: o } = Oe(), s = r(e.name, o);
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
}, Oo = i.createContext(
  {}
), Fe = i.forwardRef(({ className: e, ...t }, r) => {
  const o = i.useId();
  return /* @__PURE__ */ n(Oo.Provider, { value: { id: o }, children: /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
Fe.displayName = "FormItem";
const Ve = i.forwardRef(({ className: e, ...t }, r) => {
  const { error: o, formItemId: s } = gr();
  return /* @__PURE__ */ n(
    pr,
    {
      ref: r,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
Ve.displayName = "FormLabel";
const ft = i.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: l } = gr();
  return /* @__PURE__ */ n(
    Kn,
    {
      ref: t,
      id: o,
      "aria-describedby": r ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
ft.displayName = "FormControl";
const Fo = i.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = gr();
  return /* @__PURE__ */ n(
    "p",
    {
      ref: r,
      id: o,
      className: a("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Fo.displayName = "FormDescription";
const je = i.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: l } = gr(), d = s ? String(s?.message) : t;
  return d ? /* @__PURE__ */ n(
    "p",
    {
      ref: o,
      id: l,
      className: a(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...r,
      children: d
    }
  ) : null;
});
je.displayName = "FormMessage";
const rd = _e("font-bold tracking-tight", {
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
}), Ac = It.forwardRef(
  ({ className: e, variant: t, children: r, ...o }, s) => /* @__PURE__ */ n(
    t || "h1",
    {
      className: a(rd({ variant: t }), e),
      ref: s,
      ...o,
      children: r
    }
  )
), Ec = ({
  name: e,
  label: t,
  placeholder: r,
  mask: o,
  ...s
}) => {
  const l = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: l.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(Fe, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(ft, { children: o ? /* @__PURE__ */ n(
          ud,
          {
            mask: o,
            placeholder: r,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ n(mr, { placeholder: r, ...s, ...d }) }),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
}, nd = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  be.Root,
  {
    ref: o,
    className: a(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(Vo, {})
    ]
  }
));
nd.displayName = be.Root.displayName;
const od = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  be.List,
  {
    ref: r,
    className: a(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
od.displayName = be.List.displayName;
const Lc = be.Item, ad = _e(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), sd = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  be.Trigger,
  {
    ref: o,
    className: a(ad(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ n(
        Ue,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
sd.displayName = be.Trigger.displayName;
const id = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  be.Content,
  {
    ref: r,
    className: a(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
id.displayName = be.Content.displayName;
const ld = be.Link, Vo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ n(
  be.Viewport,
  {
    className: a(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
Vo.displayName = be.Viewport.displayName;
const dd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  be.Indicator,
  {
    ref: r,
    className: a(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
dd.displayName = be.Indicator.displayName;
const cd = It.forwardRef(({ className: e, title: t, children: r, ...o }, s) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(ld, { asChild: !0, children: /* @__PURE__ */ c(
  "a",
  {
    ref: s,
    className: a(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ n("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ n("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: r })
    ]
  }
) }) }));
cd.displayName = "ListItem";
function ud({
  value: e,
  mask: t,
  onChange: r,
  ...o
}) {
  const s = t.split("#").length - 1, l = t.split("A").length - 1, d = t.split("*").length - 1, u = s + l + d;
  function g(m) {
    const k = m.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, u);
    r(k);
  }
  return /* @__PURE__ */ n(
    mr,
    {
      value: uo(e, t),
      onChange: g,
      ...o
    }
  );
}
const md = (e, t = 300) => {
  const [r, o] = de(e);
  return ke(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}, Dn = _e(
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
), fd = i.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: r,
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
    ...A
  }, R) => {
    const [f, h] = i.useState(o), [C, w] = i.useState(!1), [x, T] = i.useState(!1), [z, b] = i.useState(""), F = md(z, 300);
    ke(() => {
      P && P(F ?? "");
    }, [F]);
    const M = (y) => {
      if (y.key === "Enter")
        w(!0);
      else if (y.key === "Backspace" && !y.currentTarget.value) {
        const V = [...f];
        V.pop(), h(V), t(V);
      }
    }, D = (y) => {
      const V = f.includes(y) ? f.filter((q) => q !== y) : [...f, y];
      h(V), t(V);
    }, _ = () => {
      h([]), t([]);
    }, X = () => {
      w((y) => !y);
    }, Q = () => {
      const y = f.slice(0, d);
      h(y), t(y);
    }, re = () => {
      if (f.length === e.length)
        _();
      else {
        const y = e.map((V) => V.value);
        h(y), t(y);
      }
    };
    return /* @__PURE__ */ c(
      ut,
      {
        open: C,
        onOpenChange: w,
        modal: u,
        children: [
          /* @__PURE__ */ n(mt, { asChild: !0, children: /* @__PURE__ */ n(
            se,
            {
              ref: R,
              ...A,
              onClick: X,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                g
              ),
              children: f.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  f.slice(0, d).map((y) => {
                    const V = e.find((ce) => ce.value === y), q = V?.icon;
                    return /* @__PURE__ */ c(
                      Ar,
                      {
                        className: a(
                          x ? "animate-bounce" : "",
                          Dn({ variant: r })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          q && /* @__PURE__ */ n(q, { className: "h-4 w-4 mr-2" }),
                          V?.label,
                          /* @__PURE__ */ n(
                            Cn,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (ce) => {
                                ce.stopPropagation(), D(y);
                              }
                            }
                          )
                        ]
                      },
                      y
                    );
                  }),
                  f.length > d && /* @__PURE__ */ c(
                    Ar,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        x ? "animate-bounce" : "",
                        Dn({ variant: r })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${f.length - d}`,
                        /* @__PURE__ */ n(
                          Cn,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (y) => {
                              y.stopPropagation(), Q();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  k && /* @__PURE__ */ n(it, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ n(
                    ds,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (y) => {
                        y.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ n(
                    qo,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ n(Ue, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ n("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ n(Ue, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ n(
            Qe,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => w(!1),
              children: /* @__PURE__ */ c(Et, { shouldFilter: !P, children: [
                /* @__PURE__ */ n(
                  ir,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: M,
                    onValueChange: b
                  }
                ),
                /* @__PURE__ */ c(lr, { children: [
                  !k && /* @__PURE__ */ n(dr, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Lt, { children: [
                    !k && !e.length && !!z.length && S && /* @__PURE__ */ n(
                      Ke,
                      {
                        onSelect: S,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ n(cs, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ n("b", { children: z })
                        ] })
                      },
                      "new"
                    ),
                    k && /* @__PURE__ */ n("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ n(it, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      Ke,
                      {
                        onSelect: re,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                f.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ n(Sn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ n("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((y) => {
                      const V = f.includes(y.value);
                      return /* @__PURE__ */ c(
                        Ke,
                        {
                          onSelect: () => D(y.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ n(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  V ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ n(Sn, { className: "h-4 w-4" })
                              }
                            ),
                            y.icon && /* @__PURE__ */ n(y.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ n("span", { children: y.label })
                          ]
                        },
                        y.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ n(xo, {})
                ] })
              ] })
            }
          ),
          l > 0 && f.length > 0 && /* @__PURE__ */ n(
            us,
            {
              className: a(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                x ? "" : "text-muted-foreground"
              ),
              onClick: () => T(!x)
            }
          )
        ]
      }
    );
  }
);
fd.displayName = "MultiSelect";
const pd = ({ className: e, ...t }) => /* @__PURE__ */ n(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
pd.displayName = "Pagination";
const gd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "ul",
  {
    ref: r,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
gd.displayName = "PaginationContent";
const hd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("li", { ref: r, className: a("", e), ...t }));
hd.displayName = "PaginationItem";
const qr = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...o
}) => /* @__PURE__ */ n(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: a(
      Xe({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...o
  }
);
qr.displayName = "PaginationLink";
const xd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  qr,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(Hn, { className: "h-4 w-4" })
  }
);
xd.displayName = "PaginationPrevious";
const bd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  qr,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(_t, { className: "h-4 w-4" })
  }
);
bd.displayName = "PaginationNext";
const yd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ n(Ln, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
yd.displayName = "PaginationEllipsis";
const vd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  zt.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: r
  }
));
vd.displayName = zt.Root.displayName;
const wd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  zt.Item,
  {
    ref: r,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(zt.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ n(Fn, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
wd.displayName = zt.Item.displayName;
const Nd = It.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  qe.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ n(qe.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ n(jo, {}),
      /* @__PURE__ */ n(qe.Corner, {})
    ]
  }
));
Nd.displayName = qe.Root.displayName;
const jo = It.forwardRef(({ className: e, orientation: t = "vertical", ...r }, o) => /* @__PURE__ */ n(
  qe.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: t,
    className: a(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ n(qe.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
jo.displayName = qe.ScrollAreaScrollbar.displayName;
const Ho = te.Root, Oc = te.Group, Wo = te.Value, Kr = i.forwardRef(({ className: e, children: t, isLoading: r = !1, ...o }, s) => /* @__PURE__ */ c(
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
        r && /* @__PURE__ */ n(it, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ n(te.Icon, { asChild: !0, children: /* @__PURE__ */ n(Ue, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Kr.displayName = te.Trigger.displayName;
const Bo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  te.ScrollUpButton,
  {
    ref: r,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(ms, { className: "h-4 w-4" })
  }
));
Bo.displayName = te.ScrollUpButton.displayName;
const $o = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  te.ScrollDownButton,
  {
    ref: r,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(Ue, { className: "h-4 w-4" })
  }
));
$o.displayName = te.ScrollDownButton.displayName;
const Gr = i.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ n(te.Portal, { children: /* @__PURE__ */ c(
  te.Content,
  {
    ref: s,
    className: a(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...o,
    children: [
      /* @__PURE__ */ n(Bo, {}),
      /* @__PURE__ */ n(
        te.Viewport,
        {
          className: a(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n($o, {})
    ]
  }
) }));
Gr.displayName = te.Content.displayName;
const Cd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  te.Label,
  {
    ref: r,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Cd.displayName = te.Label.displayName;
const rr = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  te.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(te.ItemIndicator, { children: /* @__PURE__ */ n(Dt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ n(te.ItemText, { children: t })
    ]
  }
));
rr.displayName = te.Item.displayName;
const Sd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  te.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Sd.displayName = te.Separator.displayName;
const Fc = ({
  name: e,
  label: t,
  placeholder: r,
  options: o,
  helpText: s,
  isLoading: l,
  ...d
}) => {
  const u = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: u.control,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ c(Fe, { children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ c(
          Ho,
          {
            onValueChange: g.onChange,
            value: g.value,
            defaultValue: g.value,
            ...d,
            children: [
              /* @__PURE__ */ n(ft, { children: /* @__PURE__ */ n(Kr, { isLoading: l, children: /* @__PURE__ */ n(Wo, { placeholder: r }) }) }),
              /* @__PURE__ */ n(Gr, { children: o.map((m) => /* @__PURE__ */ n(rr, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ n(Fo, { children: s }),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
}, qo = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ n(
    io.Root,
    {
      ref: s,
      decorative: r,
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
qo.displayName = io.Root.displayName;
const Vc = U.Root, jc = U.Trigger, Hc = U.Close, Rd = U.Portal, Ko = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Ko.displayName = U.Overlay.displayName;
const kd = _e(
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
), Pd = i.forwardRef(({ side: e = "right", className: t, children: r, ...o }, s) => /* @__PURE__ */ c(Rd, { children: [
  /* @__PURE__ */ n(Ko, {}),
  /* @__PURE__ */ c(
    U.Content,
    {
      ref: s,
      className: a(kd({ side: e }), t),
      ...o,
      children: [
        r,
        /* @__PURE__ */ c(U.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ n(At, { className: "h-4 w-4" }),
          /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Pd.displayName = U.Content.displayName;
const zd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
zd.displayName = "SheetHeader";
const Md = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "div",
  {
    className: a(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Md.displayName = "SheetFooter";
const Td = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Title,
  {
    ref: r,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Td.displayName = U.Title.displayName;
const Id = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  U.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Id.displayName = U.Description.displayName;
const Dd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  _r.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ n(
      _r.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Dd.displayName = _r.Root.displayName;
const Wc = Ye.Root, _d = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Ye.List,
  {
    ref: r,
    className: a(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
_d.displayName = Ye.List.displayName;
const Ad = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Ye.Trigger,
  {
    ref: r,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ad.displayName = Ye.Trigger.displayName;
const Ed = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Ye.Content,
  {
    ref: r,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ed.displayName = Ye.Content.displayName;
const Go = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "textarea",
  {
    className: a(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
Go.displayName = "Textarea";
const Ld = ({
  name: e,
  label: t,
  placeholder: r,
  ...o
}) => {
  const s = Oe();
  return /* @__PURE__ */ n(
    Je,
    {
      control: s.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(Fe, { children: [
        !!t && /* @__PURE__ */ n(Ve, { children: t }),
        /* @__PURE__ */ n(ft, { children: /* @__PURE__ */ n(Go, { placeholder: r, ...o, ...l }) }),
        /* @__PURE__ */ n(je, {})
      ] })
    }
  );
};
Ld.displayName = "TextareaForm";
const Od = ve.Provider, Fd = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, Uo = i.forwardRef(({ className: e, position: t = "bottom-right", ...r }, o) => /* @__PURE__ */ n(
  ve.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Fd[t]}`,
      e
    ),
    ...r
  }
));
Uo.displayName = ve.Viewport.displayName;
const Vd = _e(
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
), Xo = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  ve.Root,
  {
    ref: o,
    className: a(Vd({ variant: t }), e),
    ...r
  }
));
Xo.displayName = ve.Root.displayName;
const jd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ve.Action,
  {
    ref: r,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
jd.displayName = ve.Action.displayName;
const Yo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ve.Close,
  {
    ref: r,
    className: a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ n(At, { className: "h-4 w-4" })
  }
));
Yo.displayName = ve.Close.displayName;
const Qo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ve.Title,
  {
    ref: r,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
Qo.displayName = ve.Title.displayName;
const Jo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ve.Description,
  {
    ref: r,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
Jo.displayName = ve.Description.displayName;
const Hd = 5, Wd = 1e4;
let Mr = 0;
function Bd() {
  return Mr = (Mr + 1) % Number.MAX_SAFE_INTEGER, Mr.toString();
}
const Tr = /* @__PURE__ */ new Map(), _n = (e) => {
  if (Tr.has(e))
    return;
  const t = setTimeout(() => {
    Tr.delete(e), kt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Wd);
  Tr.set(e, t);
}, $d = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Hd)
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
      return r ? _n(r) : e.toasts.forEach((o) => {
        _n(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === r || r === void 0 ? {
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
        toasts: e.toasts.filter((r) => r.id !== t.toastId)
      };
  }
}, Yt = [];
let Qt = { toasts: [] };
function kt(e) {
  Qt = $d(Qt, e), Yt.forEach((t) => {
    t(Qt);
  });
}
function qd({ ...e }) {
  const t = Bd(), r = (s) => kt({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => kt({ type: "DISMISS_TOAST", toastId: t });
  return kt({
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
    update: r
  };
}
function Kd() {
  const [e, t] = i.useState(Qt);
  return i.useEffect(() => (Yt.push(t), () => {
    const r = Yt.indexOf(t);
    r > -1 && Yt.splice(r, 1);
  }), [e]), {
    ...e,
    toast: qd,
    dismiss: (r) => kt({ type: "DISMISS_TOAST", toastId: r })
  };
}
function Bc() {
  const { toasts: e } = Kd();
  return /* @__PURE__ */ c(Od, { children: [
    e.map(function({ id: t, title: r, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(Xo, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ n(Qo, { children: r }),
          o && /* @__PURE__ */ n(Jo, { children: o })
        ] }),
        s,
        /* @__PURE__ */ n(Yo, {})
      ] }, t);
    }),
    /* @__PURE__ */ n(Uo, {})
  ] });
}
const Zo = _e(
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
), Gd = i.forwardRef(({ className: e, variant: t, size: r, ...o }, s) => /* @__PURE__ */ n(
  lo.Root,
  {
    ref: s,
    className: a(Zo({ variant: t, size: r, className: e })),
    ...o
  }
));
Gd.displayName = lo.Root.displayName;
const ea = i.createContext({
  size: "default",
  variant: "default"
}), Ud = i.forwardRef(({ className: e, variant: t, size: r, children: o, ...s }, l) => /* @__PURE__ */ n(
  ar.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ n(ea.Provider, { value: { variant: t, size: r }, children: o })
  }
));
Ud.displayName = ar.Root.displayName;
const Xd = i.forwardRef(({ className: e, children: t, variant: r, size: o, ...s }, l) => {
  const d = i.useContext(ea);
  return /* @__PURE__ */ n(
    ar.Item,
    {
      ref: l,
      className: a(
        Zo({
          variant: d.variant || r,
          size: d.size || o
        }),
        e
      ),
      ...s,
      children: t
    }
  );
});
Xd.displayName = ar.Item.displayName;
export {
  pc as Accordion,
  Is as AccordionContent,
  Ms as AccordionItem,
  Ts as AccordionTrigger,
  _s as Alert,
  Es as AlertDescription,
  gc as AlertDialog,
  Ws as AlertDialogAction,
  Bs as AlertDialogCancel,
  Os as AlertDialogContent,
  Hs as AlertDialogDescription,
  Vs as AlertDialogFooter,
  Fs as AlertDialogHeader,
  co as AlertDialogOverlay,
  Ls as AlertDialogPortal,
  js as AlertDialogTitle,
  hc as AlertDialogTrigger,
  As as AlertTitle,
  $s as AsyncSelect,
  xc as AsyncSelectForm,
  Ks as Avatar,
  Us as AvatarFallback,
  Gs as AvatarImage,
  Ar as Badge,
  Ys as Breadcrumb,
  ri as BreadcrumbEllipsis,
  Js as BreadcrumbItem,
  Zs as BreadcrumbLink,
  Qs as BreadcrumbList,
  ei as BreadcrumbPage,
  ti as BreadcrumbSeparator,
  se as Button,
  fo as Calendar,
  Ki as CalendarDayButton,
  Gi as Card,
  Qi as CardContent,
  Yi as CardDescription,
  Ji as CardFooter,
  Ui as CardHeader,
  Xi as CardTitle,
  Zi as Carousel,
  el as CarouselContent,
  tl as CarouselItem,
  nl as CarouselNext,
  rl as CarouselPrevious,
  al as ChartContainer,
  wc as ChartLegend,
  ll as ChartLegendContent,
  sl as ChartStyle,
  vc as ChartTooltip,
  il as ChartTooltipContent,
  dt as Checkbox,
  dl as Combobox,
  Nc as ComboboxForm,
  Et as Command,
  Cc as CommandDialog,
  dr as CommandEmpty,
  Lt as CommandGroup,
  ir as CommandInput,
  Ke as CommandItem,
  lr as CommandList,
  xo as CommandSeparator,
  cl as CommandShortcut,
  Ot as DEFAULT_FLASH_TABLE_LABELS,
  fl as DatePicker,
  Sc as DatePickerForm,
  So as DateTimePicker,
  Rc as DateTimePickerForm,
  Ro as Dialog,
  kc as DialogClose,
  Wr as DialogContent,
  Mo as DialogDescription,
  Tl as DialogFooter,
  Po as DialogHeader,
  ko as DialogOverlay,
  Ml as DialogPortal,
  zo as DialogTitle,
  zl as DialogTrigger,
  Pc as DropdownMenu,
  El as DropdownMenuCheckboxItem,
  _l as DropdownMenuContent,
  Mc as DropdownMenuGroup,
  Al as DropdownMenuItem,
  Ol as DropdownMenuLabel,
  Tc as DropdownMenuPortal,
  Dc as DropdownMenuRadioGroup,
  Ll as DropdownMenuRadioItem,
  Fl as DropdownMenuSeparator,
  Vl as DropdownMenuShortcut,
  Ic as DropdownMenuSub,
  Dl as DropdownMenuSubContent,
  Il as DropdownMenuSubTrigger,
  zc as DropdownMenuTrigger,
  ed as FlashTable,
  Ul as FlashTableColumnManager,
  Yl as FlashTableContextMenu,
  Ql as FlashTableHeaderCell,
  Kl as FlashTableHelpDialog,
  Xl as FlashTableToolbar,
  _c as Form,
  ft as FormControl,
  Fo as FormDescription,
  Je as FormField,
  Fe as FormItem,
  Ve as FormLabel,
  je as FormMessage,
  Ac as Heading,
  mr as Input,
  Ec as InputForm,
  pr as Label,
  cd as ListItem,
  ud as MaskedInput,
  fd as MultiSelect,
  nd as NavigationMenu,
  id as NavigationMenuContent,
  dd as NavigationMenuIndicator,
  Lc as NavigationMenuItem,
  ld as NavigationMenuLink,
  od as NavigationMenuList,
  sd as NavigationMenuTrigger,
  Vo as NavigationMenuViewport,
  pd as Pagination,
  gd as PaginationContent,
  yd as PaginationEllipsis,
  hd as PaginationItem,
  qr as PaginationLink,
  bd as PaginationNext,
  xd as PaginationPrevious,
  ut as Popover,
  Qe as PopoverContent,
  mt as PopoverTrigger,
  vd as RadioGroup,
  wd as RadioGroupItem,
  Nd as ScrollArea,
  jo as ScrollBar,
  Ho as Select,
  Gr as SelectContent,
  Fc as SelectForm,
  Oc as SelectGroup,
  rr as SelectItem,
  Cd as SelectLabel,
  $o as SelectScrollDownButton,
  Bo as SelectScrollUpButton,
  Sd as SelectSeparator,
  Kr as SelectTrigger,
  Wo as SelectValue,
  qo as Separator,
  Vc as Sheet,
  Hc as SheetClose,
  Pd as SheetContent,
  Id as SheetDescription,
  Md as SheetFooter,
  zd as SheetHeader,
  Ko as SheetOverlay,
  Rd as SheetPortal,
  Td as SheetTitle,
  jc as SheetTrigger,
  To as Skeleton,
  Dd as Switch,
  jl as Table,
  Do as TableBody,
  Hl as TableCaption,
  Be as TableCell,
  _o as TableFooter,
  Ao as TableHead,
  Io as TableHeader,
  Le as TableRow,
  Wc as Tabs,
  Ed as TabsContent,
  _d as TabsList,
  Ad as TabsTrigger,
  Go as Textarea,
  Ld as TextareaForm,
  Co as TimePicker,
  Xt as TimePickerInput,
  Xo as Toast,
  jd as ToastAction,
  Yo as ToastClose,
  Jo as ToastDescription,
  Od as ToastProvider,
  Qo as ToastTitle,
  Uo as ToastViewport,
  Bc as Toaster,
  Gd as Toggle,
  Ud as ToggleGroup,
  Xd as ToggleGroupItem,
  Br as Tooltip,
  ur as TooltipContent,
  Wl as TooltipProvider,
  $r as TooltipTrigger,
  Xs as badgeVariants,
  yc as brazillianStates,
  $l as buildDefaultPinning,
  Xe as buttonVariants,
  a as cn,
  Rt as extractColumnId,
  ot as extractWidthFromClassName,
  tr as getColumnLabel,
  Tt as isActionsColumnDef,
  Eo as isActionsColumnId,
  fr as isExpansionColumnId,
  at as isSameArray,
  Mt as isSelectionColumnId,
  De as isSystemLeftColumnId,
  bc as mask,
  ad as navigationMenuTriggerStyle,
  zr as parseColumnWidth,
  Tn as reconcileColumnOrder,
  $d as reducer,
  Bl as resolveStorageScope,
  qd as toast,
  Zo as toggleVariants,
  Jl as useFlashTablePersistence,
  gr as useFormField,
  Kd as useToast
};
