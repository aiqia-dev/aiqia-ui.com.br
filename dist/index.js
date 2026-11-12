import { jsx as r, jsxs as c, Fragment as Xe } from "react/jsx-runtime";
import * as i from "react";
import At, { useState as pe, useEffect as Ie, useCallback as se, useImperativeHandle as Lr, useRef as ze, isValidElement as Ua, useMemo as ye, useLayoutEffect as Xa, Fragment as Ya } from "react";
import * as Je from "@radix-ui/react-accordion";
import { ChevronDown as Ze, ChevronsUpDown as Fr, Loader2 as ut, Check as Et, MoreHorizontal as Or, ChevronRight as Lt, ChevronLeftIcon as Qa, ChevronRightIcon as Ja, ChevronDownIcon as Za, ArrowLeft as es, ArrowRight as ts, Search as Vr, CalendarIcon as ns, Clock as rs, Calendar as os, X as Ft, Circle as jr, HelpCircle as Sr, Mouse as as, Columns3 as Hr, Pin as ln, MoveHorizontal as ss, ArrowUpDown as Wr, Rows3 as Wn, RotateCcw as dn, MousePointerClick as is, Eye as Bn, ChevronLeft as Br, AlignJustify as $r, Rows2 as qr, GripVertical as Kr, Lock as Gr, Info as ls, ArrowUp as ds, ArrowDown as cs, XCircle as Rr, XIcon as us, Plus as ms, CheckIcon as kr, WandSparkles as fs, ChevronUp as ps } from "lucide-react";
import { clsx as gs } from "clsx";
import { twMerge as hs } from "tailwind-merge";
import { cva as Le } from "class-variance-authority";
import * as he from "@radix-ui/react-alert-dialog";
import { useFormContext as He, FormProvider as xs, Controller as bs } from "react-hook-form";
import * as pt from "@radix-ui/react-avatar";
import { Slot as Ur } from "@radix-ui/react-slot";
import { Link as ys } from "react-router-dom";
import { TZDate as Te, getDefaultClassNames as Xr, DayPicker as vs } from "react-day-picker";
import ws from "embla-carousel-react";
import * as $n from "recharts";
import * as En from "@radix-ui/react-checkbox";
import { Command as ve } from "cmdk";
import { format as Yr, parse as Qr, isValid as Jr, add as Ns } from "date-fns";
import * as Tt from "@radix-ui/react-popover";
import * as X from "@radix-ui/react-dialog";
import * as Q from "@radix-ui/react-dropdown-menu";
import { useSensors as Zr, useSensor as nn, PointerSensor as eo, KeyboardSensor as to, DndContext as no, closestCenter as ro } from "@dnd-kit/core";
import { restrictToVerticalAxis as Cs, restrictToHorizontalAxis as Ss } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as oo, SortableContext as ao, verticalListSortingStrategy as Rs, arrayMove as ct, useSortable as so, horizontalListSortingStrategy as ks } from "@dnd-kit/sortable";
import { flexRender as Ln, useReactTable as Ps, getExpandedRowModel as zs, getSortedRowModel as Ms, getCoreRowModel as Ts } from "@tanstack/react-table";
import * as mt from "@radix-ui/react-tooltip";
import { CSS as io } from "@dnd-kit/utilities";
import * as lo from "@radix-ui/react-label";
import * as we from "@radix-ui/react-navigation-menu";
import * as It from "@radix-ui/react-radio-group";
import * as Ye from "@radix-ui/react-scroll-area";
import * as ee from "@radix-ui/react-select";
import * as co from "@radix-ui/react-separator";
import * as Fn from "@radix-ui/react-switch";
import * as tt from "@radix-ui/react-tabs";
import * as Se from "@radix-ui/react-toast";
import * as uo from "@radix-ui/react-toggle";
import * as cn from "@radix-ui/react-toggle-group";
function a(...e) {
  return hs(gs(e));
}
const hc = Je.Root, Is = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Je.Item,
  {
    ref: n,
    className: a("border-b", e),
    ...t
  }
));
Is.displayName = "AccordionItem";
const Ds = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(Je.Header, { className: "flex", children: /* @__PURE__ */ c(
  Je.Trigger,
  {
    ref: o,
    className: a(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ r(Ze, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Ds.displayName = Je.Trigger.displayName;
const _s = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ r(
  Je.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ r("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
_s.displayName = Je.Content.displayName;
const As = Le(
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
), Es = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(As({ variant: t }), e),
    ...n
  }
));
Es.displayName = "Alert";
const Ls = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "h5",
  {
    ref: n,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Ls.displayName = "AlertTitle";
const Fs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Fs.displayName = "AlertDescription";
const xc = he.Root, bc = he.Trigger, Os = he.Portal, mo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
mo.displayName = he.Overlay.displayName;
const Vs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c(Os, { children: [
  /* @__PURE__ */ r(mo, {}),
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
Vs.displayName = he.Content.displayName;
const js = ({
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
js.displayName = "AlertDialogHeader";
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
const Ws = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Title,
  {
    ref: n,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
Ws.displayName = he.Title.displayName;
const Bs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Bs.displayName = he.Description.displayName;
const $s = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Action,
  {
    ref: n,
    className: a(et(), e),
    ...t
  }
));
$s.displayName = he.Action.displayName;
const qs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  he.Cancel,
  {
    ref: n,
    className: a(
      et({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
qs.displayName = he.Cancel.displayName;
function Ks({
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
  clearable: A = !0,
  error: R
}) {
  const [p, h] = pe(!1), [C, N] = pe(u), [y, I] = pe(null), [z, v] = pe("");
  Ie(() => {
    N(u);
  }, [u]), Ie(() => {
    if (u && e.length > 0) {
      const M = e.find((D) => o(D) === u);
      M && I(M);
    }
  }, [u, e, o]);
  const F = se(
    (M) => {
      const D = A && M === C ? "" : M;
      u && N(D), I(
        e.find((_) => o(_) === D) || null
      ), g(D), h(!1);
    },
    [C, g, A, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ r(yn, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(gt, { open: p, onOpenChange: h, children: [
      /* @__PURE__ */ r(ht, { asChild: !0, children: /* @__PURE__ */ c(
        le,
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
            /* @__PURE__ */ r(Fr, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ r(nt, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Ot, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ r(
            mn,
            {
              placeholder: "Buscar",
              value: z,
              onValueChange: (M) => {
                v(M), m(M);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ r("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ r(ut, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(fn, { children: [
          t && e.length === 0 && /* @__PURE__ */ r(Gs, {}),
          !t && e.length === 0 && /* @__PURE__ */ r(pn, { children: /* @__PURE__ */ r("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: S ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ r(Vt, { children: e.map((M) => /* @__PURE__ */ c(
            Qe,
            {
              value: o(M),
              onSelect: F,
              children: [
                /* @__PURE__ */ r(
                  Et,
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
  return /* @__PURE__ */ r(Vt, { children: [1, 2, 3].map((e) => /* @__PURE__ */ r(Qe, { disabled: !0, className: "p-0", children: /* @__PURE__ */ r(Do, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const yc = ({
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
  const { control: P } = He();
  return /* @__PURE__ */ r(
    rt,
    {
      name: e,
      control: P,
      render: ({ field: k }) => /* @__PURE__ */ c(We, { children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(
          Ks,
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
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
}, Us = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  pt.Root,
  {
    ref: n,
    className: a(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Us.displayName = pt.Root.displayName;
const Xs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  pt.Image,
  {
    ref: n,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
Xs.displayName = pt.Image.displayName;
const Ys = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  pt.Fallback,
  {
    ref: n,
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ys.displayName = pt.Fallback.displayName;
const Qs = Le(
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
function On({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ r("div", { className: a(Qs({ variant: t }), e), ...n });
}
const Js = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ r("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Js.displayName = "Breadcrumb";
const Zs = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Zs.displayName = "BreadcrumbList";
const ei = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "li",
  {
    ref: n,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
ei.displayName = "BreadcrumbItem";
const ti = i.forwardRef(({ asChild: e, className: t, ...n }, o) => /* @__PURE__ */ r(
  e ? Ur : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...n
  }
));
ti.displayName = "BreadcrumbLink";
const ni = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
ni.displayName = "BreadcrumbPage";
const ri = ({
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
    children: e ?? /* @__PURE__ */ r(Lt, {})
  }
);
ri.displayName = "BreadcrumbSeparator";
const oi = ({
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
      /* @__PURE__ */ r(Or, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More" })
    ]
  }
);
oi.displayName = "BreadcrumbElipssis";
const ai = {
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
}, et = Le(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: ai,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), le = i.forwardRef(({ className: e, variant: t, size: n, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ r(Xe, { children: s ? /* @__PURE__ */ r(
  ys,
  {
    className: a(et({ variant: t, size: n, className: e })),
    ref: d,
    to: s,
    ...l
  }
) : /* @__PURE__ */ r(
  "button",
  {
    className: a(et({ variant: t, size: n, className: e })),
    ref: d,
    disabled: o,
    ...l
  }
) }));
le.displayName = "Button";
const si = "(##) ####-####", ii = "(##) #####-####", li = "#####-###", di = "###.###.###-##", ci = "##.###.###/####-##", ui = "###########", mi = "##.###.###-#", fi = "AAA#A##", pi = "###########", gi = "##############", fo = (e, t) => {
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
}, vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: ii,
  CNH_MASK: ui,
  CNPJ_MASK: ci,
  CPF_MASK: di,
  PHONE_MASK: si,
  PLATE_MASK: fi,
  RENAVAM_MASK: pi,
  RG_MASK: mi,
  RNTRC_MASK: gi,
  ZIP_CODE_MASK: li,
  formatMask: fo
}, Symbol.toStringTag, { value: "Module" })), wc = [
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
function In(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function Rt(e) {
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
function kt(e) {
  return (t, n = {}) => {
    const o = n.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], l = t.match(s);
    if (!l)
      return null;
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(u) ? xi(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      hi(u, (k) => k.test(d))
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
function hi(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function xi(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bi(e) {
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
const yi = {
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
}, vi = (e, t, n) => {
  let o;
  const s = yi[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "em " + o : "há " + o : o;
}, wi = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, Ni = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ci = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Si = {
  date: In({
    formats: wi,
    defaultWidth: "full"
  }),
  time: In({
    formats: Ni,
    defaultWidth: "full"
  }),
  dateTime: In({
    formats: Ci,
    defaultWidth: "full"
  })
}, Ri = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, ki = (e, t, n, o) => {
  const s = Ri[e];
  return typeof s == "function" ? s(t) : s;
}, Pi = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, zi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Mi = {
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
}, Ti = {
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
}, Ii = {
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
}, Di = {
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
}, _i = (e, t) => {
  const n = Number(e);
  return t?.unit === "week" ? n + "ª" : n + "º";
}, Ai = {
  ordinalNumber: _i,
  era: Rt({
    values: Pi,
    defaultWidth: "wide"
  }),
  quarter: Rt({
    values: zi,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Rt({
    values: Mi,
    defaultWidth: "wide"
  }),
  day: Rt({
    values: Ti,
    defaultWidth: "wide"
  }),
  dayPeriod: Rt({
    values: Ii,
    defaultWidth: "wide",
    formattingValues: Di,
    defaultFormattingWidth: "wide"
  })
}, Ei = /^(\d+)[ºªo]?/i, Li = /\d+/i, Fi = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Oi = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Vi = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, ji = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Hi = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Wi = {
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
}, Bi = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, $i = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, qi = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Ki = {
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
  ordinalNumber: bi({
    matchPattern: Ei,
    parsePattern: Li,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: kt({
    matchPatterns: Fi,
    defaultMatchWidth: "wide",
    parsePatterns: Oi,
    defaultParseWidth: "any"
  }),
  quarter: kt({
    matchPatterns: Vi,
    defaultMatchWidth: "wide",
    parsePatterns: ji,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: kt({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Wi,
    defaultParseWidth: "any"
  }),
  day: kt({
    matchPatterns: Bi,
    defaultMatchWidth: "wide",
    parsePatterns: $i,
    defaultParseWidth: "any"
  }),
  dayPeriod: kt({
    matchPatterns: qi,
    defaultMatchWidth: "any",
    parsePatterns: Ki,
    defaultParseWidth: "any"
  })
}, po = {
  code: "pt-BR",
  formatDistance: vi,
  formatLong: Si,
  formatRelative: ki,
  localize: Ai,
  match: Gi,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function go({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = po,
  formatters: d,
  components: u,
  startMonth: g,
  endMonth: m,
  timeZone: P = "America/Sao_Paulo",
  ...k
}) {
  const S = new Te(/* @__PURE__ */ new Date(), P), A = new Te(S.getFullYear() - 100, 0, 1, P), R = new Te(S.getFullYear() + 10, 11, 31, P), p = Xr();
  return /* @__PURE__ */ r(
    vs,
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
      startMonth: g ?? A,
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
          et({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          p.button_previous
        ),
        button_next: a(
          et({ variant: s }),
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
        Chevron: ({ className: h, orientation: C, ...N }) => C === "left" ? /* @__PURE__ */ r(Qa, { className: a("cn-rtl-flip size-4", h), ...N }) : C === "right" ? /* @__PURE__ */ r(Ja, { className: a("cn-rtl-flip size-4", h), ...N }) : /* @__PURE__ */ r(Za, { className: a("size-4", h), ...N }),
        DayButton: ({ ...h }) => /* @__PURE__ */ r(Ui, { locale: l, ...h }),
        WeekNumber: ({ children: h, ...C }) => /* @__PURE__ */ r("td", { ...C, children: /* @__PURE__ */ r("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) }),
        ...u
      },
      ...k
    }
  );
}
function Ui({
  className: e,
  day: t,
  modifiers: n,
  locale: o,
  ...s
}) {
  const l = Xr(), d = i.useRef(null);
  return i.useEffect(() => {
    n.focused && d.current?.focus();
  }, [n.focused]), /* @__PURE__ */ r(
    le,
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
const Xi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Xi.displayName = "Card";
const Yi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
Yi.displayName = "CardHeader";
const Qi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Qi.displayName = "CardTitle";
const Ji = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "p",
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Ji.displayName = "CardDescription";
const Zi = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { ref: n, className: a("p-4", e), ...t }));
Zi.displayName = "CardContent";
const el = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
el.displayName = "CardFooter";
const ho = i.createContext(null);
function un() {
  const e = i.useContext(ho);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const tl = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [g, m] = ws(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [P, k] = i.useState(!1), [S, A] = i.useState(!1), R = i.useCallback((N) => {
      N && (k(N.canScrollPrev()), A(N.canScrollNext()));
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
      ho.Provider,
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
tl.displayName = "Carousel";
const nl = i.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: o, orientation: s } = un();
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
nl.displayName = "CarouselContent";
const rl = i.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: o } = un();
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
rl.displayName = "CarouselItem";
const ol = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = un();
  return /* @__PURE__ */ c(
    le,
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
        /* @__PURE__ */ r(es, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
ol.displayName = "CarouselPrevious";
const al = i.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = un();
  return /* @__PURE__ */ c(
    le,
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
        /* @__PURE__ */ r(ts, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
al.displayName = "CarouselNext";
const sl = { light: "", dark: ".dark" }, xo = i.createContext(null);
function bo() {
  const e = i.useContext(xo);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const il = i.forwardRef(({ id: e, className: t, children: n, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ r(xo.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
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
        /* @__PURE__ */ r(ll, { id: u, config: o }),
        /* @__PURE__ */ r($n.ResponsiveContainer, { children: n })
      ]
    }
  ) });
});
il.displayName = "Chart";
const ll = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ r(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(sl).map(
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
}, Nc = $n.Tooltip, dl = i.forwardRef(
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
  }, A) => {
    const { config: R } = bo(), p = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [C] = t;
      if (!C)
        return null;
      const N = `${S || C.dataKey || C.name || "value"}`, y = Vn(R, C, N), I = !S && typeof d == "string" ? R[d]?.label || d : y?.label;
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
        ref: A,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          h ? null : p,
          /* @__PURE__ */ r("div", { className: "grid gap-1.5", children: t.map((C, N) => {
            if (!C)
              return null;
            const y = `${k || C.dataKey || C.name || "value"}`, I = Vn(R, C, y), z = P || C.payload.fill || C.color;
            return /* @__PURE__ */ r(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && C?.value !== void 0 && C.name ? m(C.value, C.name, C, N, C.payload) : /* @__PURE__ */ c(Xe, { children: [
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
dl.displayName = "ChartTooltip";
const Cc = $n.Legend, cl = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = bo();
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
          const g = `${s || u.dataKey || "value"}`, m = Vn(d, u, g);
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
cl.displayName = "ChartLegend";
function Vn(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = n;
  return n in t && typeof t[n] == "string" ? s = t[n] : o && n in o && typeof o[n] == "string" && (s = o[n]), s in e ? e[s] : e[n];
}
const ft = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  En.Root,
  {
    ref: n,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      En.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r(Et, { className: "size-4 h-full" })
      }
    )
  }
));
ft.displayName = En.Root.displayName;
function Sc({
  name: e,
  label: t,
  options: n,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: g, setValue: m } = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: g,
      name: e,
      render: ({ field: P }) => /* @__PURE__ */ c(We, { children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(
          ul,
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
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
}
function ul({
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
  const [P, k] = pe(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ r(yn, { children: e }),
    /* @__PURE__ */ c(gt, { open: P, onOpenChange: k, children: [
      /* @__PURE__ */ r(ht, { asChild: !0, children: /* @__PURE__ */ c(
        le,
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
              m && /* @__PURE__ */ r(ut, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ r(Fr, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ r(nt, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Ot, { children: [
        /* @__PURE__ */ r(mn, { placeholder: l }),
        /* @__PURE__ */ c(fn, { children: [
          /* @__PURE__ */ r(pn, { children: d }),
          /* @__PURE__ */ r(Vt, { children: t.map((S) => /* @__PURE__ */ c(
            Qe,
            {
              value: S.label,
              onSelect: () => {
                n === S.value ? o(void 0) : o(S.value), k(!1);
              },
              children: [
                /* @__PURE__ */ r(
                  Et,
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
const Ot = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ve,
  {
    ref: n,
    className: a(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Ot.displayName = ve.displayName;
const Rc = ({ children: e, ...t }) => /* @__PURE__ */ r(Po, { ...t, children: /* @__PURE__ */ r(Kn, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r(Ot, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), mn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r(Vr, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r(
    ve.Input,
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
mn.displayName = ve.Input.displayName;
const fn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ve.List,
  {
    ref: n,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
fn.displayName = ve.List.displayName;
const pn = i.forwardRef((e, t) => /* @__PURE__ */ r(
  ve.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
pn.displayName = ve.Empty.displayName;
const Vt = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ve.Group,
  {
    ref: n,
    className: a(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Vt.displayName = ve.Group.displayName;
const yo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ve.Separator,
  {
    ref: n,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
yo.displayName = ve.Separator.displayName;
const Qe = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ve.Item,
  {
    ref: n,
    className: a(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Qe.displayName = ve.Item.displayName;
const ml = ({
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
ml.displayName = "CommandShortcut";
const gt = Tt.Root, ht = Tt.Trigger, nt = i.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, s) => /* @__PURE__ */ r(Tt.Portal, { children: /* @__PURE__ */ r(
  Tt.Content,
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
nt.displayName = Tt.Content.displayName;
function fl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (n += "/"), n += t[o];
  return n;
}
function pl(e) {
  const t = e.replace(/\D/g, "");
  let n = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (n += "/"), o === 8 && (n += " - "), (o === 10 || o === 12) && (n += "/"), n += t[o];
  return n;
}
function rn(e) {
  if (e.length < 10) return null;
  const t = Qr(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Jr(t) ? t : null;
}
function Pr(e) {
  const t = e.split(" - "), n = rn(t[0] ?? "");
  if (!n) return null;
  const o = t[1] ? rn(t[1]) : void 0;
  return { from: n, to: o ?? void 0 };
}
function Yt(e) {
  return Yr(e, "dd/MM/yyyy");
}
function Qt(e, t) {
  if (!e) return "";
  if (t === "range") {
    const n = e;
    return n.from ? n.to ? `${Yt(n.from)} - ${Yt(n.to)}` : Yt(n.from) : "";
  }
  return Yt(e);
}
function zr(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function gl({
  value: e,
  onChange: t,
  disabled: n,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [g, m] = i.useState(
    zr(e)
  ), [P, k] = i.useState(
    Qt(e, s)
  ), [S, A] = i.useState(!1), R = i.useRef(null), p = i.useRef(
    Qt(e, s)
  ), h = i.useRef(!1);
  i.useEffect(() => {
    if (h.current) {
      h.current = !1;
      return;
    }
    const z = Qt(e, s);
    u(e), k(z), p.current = z;
    const v = zr(e);
    v && m(v);
  }, [e]);
  function C(z) {
    h.current = !0;
    const v = Qt(z, s);
    u(z), k(v), p.current = v, t?.(z), s !== "range" && A(!1);
  }
  function N(z) {
    const v = z.target.value;
    if (v.replace(/\D/g, "") === "") {
      k(""), p.current = "", h.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const F = z.target.selectionStart ?? v.length, M = v.slice(0, F).replace(/\D/g, "").length, D = s === "range" ? pl(v) : fl(v);
    if (k(D), requestAnimationFrame(() => {
      if (R.current) {
        let _ = 0, Y = D.length;
        for (let J = 0; J < D.length; J++)
          if (/\d/.test(D[J]) && _++, _ === M) {
            Y = J + 1;
            break;
          }
        R.current.setSelectionRange(Y, Y);
      }
    }), s === "range") {
      const _ = Pr(D);
      _ && (h.current = !0, u(_), p.current = D, _.from && m(_.from), t?.(_));
    } else {
      const _ = rn(D);
      _ && (h.current = !0, u(_), m(_), p.current = D, t?.(_));
    }
  }
  function y() {
    !(s === "range" ? Pr(P) !== null : rn(P) !== null) && P !== "" && k(p.current);
  }
  const I = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(gt, { open: S, onOpenChange: A, children: [
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
          /* @__PURE__ */ r(ht, { asChild: !0, disabled: n, children: /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: n,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ r(ns, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ r(nt, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      go,
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
const kc = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(We, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(xt, { children: /* @__PURE__ */ r(
          gl,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
};
function hl(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function xl(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function bl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function gn(e, { max: t, min: n = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = n), s < n && (s = t)) : (s > t && (s = t), s < n && (s = n)), s.toString().padStart(2, "0"));
}
function vo(e) {
  return hl(e) ? e : gn(e, { max: 23 });
}
function wo(e) {
  return xl(e) ? e : gn(e, { min: 1, max: 12 });
}
function on(e) {
  return bl(e) ? e : gn(e, { max: 59 });
}
function qn(e, { min: t, max: n, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, gn(String(s), { min: t, max: n, loop: !0 }));
}
function yl(e, t) {
  return qn(e, { min: 0, max: 23, step: t });
}
function vl(e, t) {
  return qn(e, { min: 1, max: 12, step: t });
}
function Mr(e, t) {
  return qn(e, { min: 0, max: 59, step: t });
}
function wl(e, t) {
  const n = on(t);
  return e.setMinutes(parseInt(n, 10)), e;
}
function Nl(e, t) {
  const n = on(t);
  return e.setSeconds(parseInt(n, 10)), e;
}
function Cl(e, t) {
  const n = vo(t);
  return e.setHours(parseInt(n, 10)), e;
}
function Sl(e, t, n) {
  const o = parseInt(wo(t), 10), s = Pl(o, n);
  return e.setHours(s), e;
}
function jn(e, t, n, o) {
  switch (n) {
    case "minutes":
      return wl(e, t);
    case "seconds":
      return Nl(e, t);
    case "hours":
      return Cl(e, t);
    case "12hours":
      return o ? Sl(e, t, o) : e;
    default:
      return e;
  }
}
function Rl(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return on(String(e.getMinutes()));
    case "seconds":
      return on(String(e.getSeconds()));
    case "hours":
      return vo(String(e.getHours()));
    case "12hours":
      return wo(String(No(e.getHours())));
    default:
      return "00";
  }
}
function kl(e, t, n) {
  switch (n) {
    case "minutes":
      return Mr(e, t);
    case "seconds":
      return Mr(e, t);
    case "hours":
      return yl(e, t);
    case "12hours":
      return vl(e, t);
    default:
      return "00";
  }
}
function Pl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function No(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Co(e) {
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
function zl(e) {
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
function Ml(e, t) {
  const n = e.replace(/\D/g, ""), o = zl(t);
  let s = "";
  for (let l = 0; l < n.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += n[l];
  return s;
}
function Tr(e, t) {
  const n = Co(t);
  if (e.length < n.length) return null;
  const o = Qr(e.slice(0, n.length), n, new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Jr(o) ? o : null;
}
function Pt(e, t) {
  return Yr(e, Co(t));
}
const So = i.forwardRef(
  ({ period: e, setPeriod: t, date: n, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, g = (m) => {
      if (t?.(m), n) {
        const P = new Te(n, "America/Sao_Paulo"), k = No(n.getHours());
        o?.(
          jn(
            P,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ r("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Bo,
      {
        defaultValue: e,
        onValueChange: (m) => g(m),
        children: [
          /* @__PURE__ */ r(
            Yn,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ r($o, {})
            }
          ),
          /* @__PURE__ */ c(Qn, { children: [
            /* @__PURE__ */ r(sn, { value: "AM", children: "AM" }),
            /* @__PURE__ */ r(sn, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
So.displayName = "TimePeriodSelect";
const Zt = i.forwardRef(
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
    ...A
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
    const y = i.useMemo(() => Rl(l, m), [l, m]), I = (v) => m === "12hours" && p && y.slice(1, 2) === "1" && C === "0" ? `0${v}` : p ? y.slice(1, 2) + v : `0${v}`, z = (v) => {
      if (v.key !== "Tab") {
        if (v.preventDefault(), v.key === "ArrowRight" && S?.(), v.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(v.key)) {
          const F = v.key === "ArrowUp" ? 1 : -1, M = kl(y, F, m);
          p && h(!1);
          const D = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(jn(D, M, m, P));
        }
        if (v.key >= "0" && v.key <= "9") {
          m === "12hours" && N(v.key);
          const F = I(v.key);
          p && S?.(), h((D) => !D);
          const M = l ? new Te(l, "America/Sao_Paulo") : new Te(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(jn(M, F, m, P));
        }
      }
    };
    return /* @__PURE__ */ r(
      xn,
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
        ...A
      }
    );
  }
);
Zt.displayName = "TimePickerInput";
const Ro = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: n = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), g = i.useRef(null), [m, P] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return Lr(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: g.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ r("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ r(rs, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ r(
        Zt,
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
      (o === "minute" || o === "second") && /* @__PURE__ */ c(Xe, { children: [
        ":",
        /* @__PURE__ */ r(
          Zt,
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
      o === "second" && /* @__PURE__ */ c(Xe, { children: [
        ":",
        /* @__PURE__ */ r(
          Zt,
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
        So,
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
Ro.displayName = "TimePicker";
const ko = i.forwardRef(
  ({
    locale: e = po,
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
  }, A) => {
    const [R, p] = i.useState(n ?? t), h = ze(null), C = ze(null), [N, y] = i.useState(n), [I, z] = i.useState(!1), [v, F] = i.useState(
      n ? Pt(n, g) : ""
    ), M = ze(!1), D = ze(
      n ? Pt(n, g) : ""
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
      const q = (w.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), ge = Ns(t, {
        days: Math.ceil(q)
      });
      ge.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(ge), p(ge);
    };
    Ie(() => {
      if (M.current) {
        M.current = !1;
        return;
      }
      const w = n ? Pt(n, g) : "";
      n ? (y(n), p(n)) : y(void 0), F(w), D.current = w;
    }, [n, g]);
    const Y = (w) => {
      if (!w)
        return;
      M.current = !0;
      const V = Pt(w, g);
      o?.(w), p(w), y(w), F(V), D.current = V;
    };
    Lr(
      A,
      () => ({
        ...h.current,
        value: N
      }),
      [N]
    );
    function J(w) {
      const V = w.target.value;
      if (V.replace(/\D/g, "") === "") {
        F(""), D.current = "", M.current = !0, y(void 0), o?.(void 0);
        return;
      }
      const q = w.target.selectionStart ?? V.length, ge = V.slice(0, q).replace(/\D/g, "").length, Re = Ml(V, g);
      F(Re), requestAnimationFrame(() => {
        if (C.current) {
          let xe = 0, ke = Re.length;
          for (let Ee = 0; Ee < Re.length; Ee++)
            if (/\d/.test(Re[Ee]) && xe++, xe === ge) {
              ke = Ee + 1;
              break;
            }
          C.current.setSelectionRange(ke, ke);
        }
      });
      const De = Tr(Re, g);
      De && (M.current = !0, D.current = Re, o?.(De), y(De), p(De));
    }
    function ne() {
      !(Tr(v, g) !== null) && v !== "" && F(D.current);
    }
    return /* @__PURE__ */ c(gt, { open: I, onOpenChange: z, children: [
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
                onChange: J,
                onBlur: ne,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ r(ht, { asChild: !0, disabled: d, children: /* @__PURE__ */ r(
              "button",
              {
                ref: h,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ r(os, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(nt, { className: "w-auto p-0", children: [
        /* @__PURE__ */ r(
          go,
          {
            selected: N,
            onSelect: (w) => {
              w && (w.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), Y(w));
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
          Ro,
          {
            onChange: (w) => {
              if (M.current = !0, o?.(w), y(w), w) {
                p(w);
                const V = Pt(w, g);
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
ko.displayName = "DateTimePicker";
const Pc = ({
  name: e,
  label: t,
  ...n
}) => {
  const o = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(We, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(xt, { children: /* @__PURE__ */ r(
          ko,
          {
            value: s.value,
            onChange: s.onChange,
            ...n
          }
        ) }),
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
}, Po = X.Root, Tl = X.Trigger, Il = X.Portal, zc = X.Close, zo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
zo.displayName = X.Overlay.displayName;
const Kn = i.forwardRef(({ className: e, onClose: t, ...n }, o) => /* @__PURE__ */ c(Il, { children: [
  /* @__PURE__ */ r(zo, { onClick: (s) => s.stopPropagation() }),
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
              /* @__PURE__ */ r(Ft, { className: "h-4 w-4" }),
              /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        n.children
      ]
    }
  )
] }));
Kn.displayName = X.Content.displayName;
const Mo = ({
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
Mo.displayName = "DialogHeader";
const Dl = ({
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
Dl.displayName = "DialogFooter";
const To = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
To.displayName = X.Title.displayName;
const Io = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Io.displayName = X.Description.displayName;
const Mc = Q.Root, Tc = Q.Trigger, Ic = Q.Group, Dc = Q.Portal, _c = Q.Sub, Ac = Q.RadioGroup, _l = i.forwardRef(({ className: e, inset: t, children: n, ...o }, s) => /* @__PURE__ */ c(
  Q.SubTrigger,
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
      /* @__PURE__ */ r(Lt, { className: "ml-auto h-4 w-4" })
    ]
  }
));
_l.displayName = Q.SubTrigger.displayName;
const Al = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Q.SubContent,
  {
    ref: n,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Al.displayName = Q.SubContent.displayName;
const El = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(Q.Portal, { children: /* @__PURE__ */ r(
  Q.Content,
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
El.displayName = Q.Content.displayName;
const Ll = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
  Q.Item,
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
Ll.displayName = Q.Item.displayName;
const Fl = i.forwardRef(({ className: e, children: t, checked: n, ...o }, s) => /* @__PURE__ */ c(
  Q.CheckboxItem,
  {
    ref: s,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Q.ItemIndicator, { children: /* @__PURE__ */ r(Et, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Fl.displayName = Q.CheckboxItem.displayName;
const Ol = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Q.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(Q.ItemIndicator, { children: /* @__PURE__ */ r(jr, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ol.displayName = Q.RadioItem.displayName;
const Vl = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ r(
  Q.Label,
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
Vl.displayName = Q.Label.displayName;
const jl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Q.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
jl.displayName = Q.Separator.displayName;
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
function Do({
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
const Wl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ r(
  "table",
  {
    ref: n,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Wl.displayName = "Table";
const _o = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "thead",
  {
    ref: n,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
_o.displayName = "TableHeader";
const Ao = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "tbody",
  {
    ref: n,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Ao.displayName = "TableBody";
const Eo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Eo.displayName = "TableFooter";
const je = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
je.displayName = "TableRow";
const Lo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Lo.displayName = "TableHead";
const Ue = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Ue.displayName = "TableCell";
const Bl = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "caption",
  {
    ref: n,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Bl.displayName = "TableCaption";
const $l = mt.Provider, Gn = mt.Root, Un = mt.Trigger, hn = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ r(mt.Portal, { children: /* @__PURE__ */ r(
  mt.Content,
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
hn.displayName = mt.Content.displayName;
const xn = At.forwardRef(({ className: e, type: t, ...n }, o) => t === "textarea" ? /* @__PURE__ */ r(
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
)), jt = {
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
}, Ir = {
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
function ql(e) {
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
function zt(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function Dt(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function bn(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function Me(e) {
  return Dt(e) || bn(e);
}
function Fo(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function _t(e, t, n, o, s) {
  return !!(t.meta?.isActions || o && Fo(e) || s && n);
}
function Dn(e) {
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
function lt(e, t = "w") {
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
function Hn(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(Hn).filter(Boolean).join(" ").trim() : Ua(e) ? Hn(e.props.children) : "";
}
function an(e) {
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
      }), s = Hn(o);
      if (s)
        return s;
    } catch {
    }
  return Ir[e.id] ? Ir[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function Kl(e, t) {
  const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    n.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = zt(l, d), g = l.meta, m = d === e.length - 1;
    if (Me(u)) {
      n.add(u);
      return;
    }
    if (g?.defaultPinned === "left") {
      n.add(u);
      return;
    }
    (g?.defaultPinned === "right" || _t(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(n).sort((l, d) => {
      const u = (g) => Dt(g) ? 0 : bn(g) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function Dr(e, t) {
  if (!e || e.length === 0)
    return t;
  const n = new Set(t), o = e.filter((d) => n.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (Dt(d))
        l.unshift(d);
      else if (bn(d)) {
        const g = l.findIndex(Dt);
        l.splice(g + 1, 0, d);
      } else Fo(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function dt(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((n, o) => n === t[o]);
}
const _r = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", Gl = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ r(as, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c(Xe, { children: [
      "Segure ",
      /* @__PURE__ */ r("kbd", { className: _r, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ r(Hr, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ r(ln, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ r(ss, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ r(Wr, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c(Xe, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ r("kbd", { className: _r, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ r(Wn, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ r(is, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c(Xe, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ r(dn, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Ul({
  labels: e = jt
}) {
  return /* @__PURE__ */ c(Po, { children: [
    /* @__PURE__ */ c(Gn, { children: [
      /* @__PURE__ */ r(Un, { asChild: !0, children: /* @__PURE__ */ r(Tl, { asChild: !0, children: /* @__PURE__ */ r(
        le,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ r(Sr, {})
        }
      ) }) }),
      /* @__PURE__ */ r(hn, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(Kn, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(Mo, { children: [
        /* @__PURE__ */ c(To, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ r(Sr, { className: "size-4 text-primary" }),
          e.helpModalTitle
        ] }),
        /* @__PURE__ */ r(Io, { children: e.helpModalDescription })
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
function Xl({
  column: e,
  label: t,
  isActionsCol: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  labels: d
}) {
  const u = e.columnDef.meta, m = e.getIsPinned() === "left", P = o && !n && u?.enableReordering !== !1, k = s && !n && e.getCanPin() && u?.enablePinning !== !1, S = l && !n && e.getCanHide(), {
    attributes: A,
    listeners: R,
    setNodeRef: p,
    transform: h,
    transition: C,
    isDragging: N
  } = so({
    id: e.id,
    disabled: !P,
    animateLayoutChanges: () => !1
  }), y = {
    transform: io.Transform.toString(h),
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
              ...A,
              ...R,
              className: "text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5",
              title: d.columnManagerFooterHint,
              children: /* @__PURE__ */ r(Kr, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ r("span", { className: "w-4 shrink-0" }),
          S ? /* @__PURE__ */ r(
            ft,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (I) => e.toggleVisibility(!!I),
              "aria-label": t
            }
          ) : /* @__PURE__ */ r(ft, { checked: !0, disabled: !0, "aria-label": t }),
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
              /* @__PURE__ */ r(Gr, { className: "size-2.5" }),
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
              ln,
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
function Yl({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: n,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: g = jt
}) {
  const [m, P] = pe(""), k = Zr(
    nn(eo, {
      activationConstraint: { distance: 4 }
    }),
    nn(to, {
      coordinateGetter: oo
    })
  ), S = e.getAllLeafColumns(), A = S.filter(
    (N) => !Me(N.id)
  ), R = m.trim().toLowerCase(), p = R ? A.filter(
    (N) => an(N).toLowerCase().includes(R)
  ) : A, h = A.filter(
    (N) => !N.getIsVisible()
  ).length, C = (N) => {
    const { active: y, over: I } = N;
    if (!I || y.id === I.id) return;
    const z = String(y.id), v = String(I.id), F = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : S.map((q) => q.id), M = F.indexOf(z), D = F.indexOf(v);
    M !== -1 && D !== -1 && e.setColumnOrder(ct(F, M, D));
    const _ = e.getState().columnPinning.left ?? [], Y = _.indexOf(z), J = _.indexOf(v);
    Y !== -1 && J !== -1 && e.setColumnPinning((q) => ({
      ...q,
      left: ct(q.left ?? [], Y, J)
    }));
    const ne = e.getState().columnPinning.right ?? [], w = ne.indexOf(z), V = ne.indexOf(v);
    w !== -1 && V !== -1 && e.setColumnPinning((q) => ({
      ...q,
      right: ct(q.right ?? [], w, V)
    }));
  };
  return /* @__PURE__ */ c(gt, { children: [
    /* @__PURE__ */ r(ht, { asChild: !0, children: /* @__PURE__ */ c(
      le,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: g.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ r(Hr, {}),
          /* @__PURE__ */ r("span", { children: g.columnsButton }),
          h > 0 && /* @__PURE__ */ c(
            On,
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
    /* @__PURE__ */ c(nt, { align: "end", className: "w-76 p-0 shadow-lg", children: [
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
                  /* @__PURE__ */ r(Bn, { className: "size-3" }),
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
                  /* @__PURE__ */ r(dn, { className: "size-3" }),
                  g.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        A.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ r(Vr, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ r(
            xn,
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
              children: /* @__PURE__ */ r(Ft, { className: "size-3" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: p.length === 0 ? /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground text-center py-4", children: g.noColumnsFound }) : /* @__PURE__ */ r(
        no,
        {
          sensors: k,
          collisionDetection: ro,
          modifiers: [Cs],
          onDragEnd: C,
          children: /* @__PURE__ */ r(
            ao,
            {
              items: p.map((N) => N.id),
              strategy: Rs,
              children: p.map((N, y) => {
                const I = y === S.length - 1, z = _t(
                  N.id,
                  N.columnDef,
                  I,
                  t,
                  n
                );
                return /* @__PURE__ */ r(
                  Xl,
                  {
                    column: N,
                    label: an(N),
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
function Ql({
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
  onReset: A,
  canScrollLeft: R,
  canScrollRight: p,
  onScrollHorizontal: h,
  toolbarLeftContent: C,
  toolbarRightContent: N,
  labels: y = jt,
  className: I
}) {
  const v = e.getAllLeafColumns().filter(
    (D) => !Me(D.id) && !D.getIsVisible()
  ).length, F = t ?? e.getRowModel().rows.length, M = R || p;
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
            /* @__PURE__ */ r("strong", { className: "font-semibold text-foreground", children: F.toLocaleString("pt-BR") })
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
                /* @__PURE__ */ r(Bn, { className: "size-3" }),
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
              le,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => h("left"),
                title: y.scrollLeft,
                "aria-label": y.scrollLeft,
                children: /* @__PURE__ */ r(Br, {})
              }
            ),
            /* @__PURE__ */ r(
              le,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !p,
                onClick: () => h("right"),
                title: y.scrollRight,
                "aria-label": y.scrollRight,
                children: /* @__PURE__ */ r(Lt, {})
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
                  le,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: y.densityUltraCompact,
                    children: /* @__PURE__ */ r($r, {})
                  }
                ),
                /* @__PURE__ */ r(
                  le,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: y.densityCompact,
                    children: /* @__PURE__ */ r(Wn, {})
                  }
                ),
                /* @__PURE__ */ r(
                  le,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: y.densityComfortable,
                    children: /* @__PURE__ */ r(qr, {})
                  }
                )
              ]
            }
          ),
          (k || m || P) && /* @__PURE__ */ r(
            Yl,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: g,
              enableColumnOrdering: m,
              enableColumnPinning: P,
              enableColumnVisibility: k,
              isCustomized: S,
              onReset: A,
              labels: y
            }
          ),
          S && /* @__PURE__ */ c(Gn, { children: [
            /* @__PURE__ */ r(Un, { asChild: !0, children: /* @__PURE__ */ r(
              le,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: A,
                "aria-label": y.resetToDefaultTooltip,
                children: /* @__PURE__ */ r(dn, {})
              }
            ) }),
            /* @__PURE__ */ r(hn, { side: "bottom", children: y.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ r(Ul, { labels: y })
        ] })
      ]
    }
  );
}
function Jl({
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
  labels: S = jt
}) {
  const A = ze(null);
  if (Ie(() => {
    if (!e) return;
    const y = (I) => {
      I instanceof KeyboardEvent && I.key !== "Escape" || I instanceof MouseEvent && A.current?.contains(I.target) || t();
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
      ref: A,
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
                  /* @__PURE__ */ r(Bn, { className: "size-3" }),
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
                  /* @__PURE__ */ r(dn, { className: "size-3" }),
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
                  /* @__PURE__ */ r($r, { className: "size-2.5" }),
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
                  /* @__PURE__ */ r(Wn, { className: "size-2.5" }),
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
                  /* @__PURE__ */ r(qr, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: p.map((y, I) => {
          const z = an(y), v = y.columnDef.meta, F = I === R.length - 1, M = _t(
            y.id,
            y.columnDef,
            F,
            d,
            u
          ), _ = y.getIsPinned() === "left", Y = m && !M && y.getCanHide(), J = g && !M && y.getCanPin() && v?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ r(
                    ft,
                    {
                      checked: y.getIsVisible(),
                      disabled: !Y,
                      onCheckedChange: (ne) => y.toggleVisibility(!!ne)
                    }
                  ),
                  /* @__PURE__ */ r("span", { className: "truncate text-xs", title: z, children: z })
                ] }),
                M ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ r(Gr, { className: "size-2.5" }),
                  S.pinnedRightBadge
                ] }) : J ? /* @__PURE__ */ r(
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
                      ln,
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
function Zl({
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
  labels: A,
  className: R,
  onRegisterHeaderElement: p
}) {
  const { column: h } = e, C = h.columnDef.meta, N = n && !l && !d && C?.enableReordering !== !1, y = o && !l && !d && h.getCanPin() && C?.enablePinning !== !1, I = h.getCanSort(), z = h.getIsSorted(), v = h.getSortIndex(), F = e.getContext().table.getState().sorting.length > 1 && v >= 0, M = u === "left", D = u === "right", _ = M || D, {
    attributes: Y,
    listeners: J,
    setNodeRef: ne,
    transform: w,
    transition: V,
    isDragging: q
  } = so({
    id: h.id,
    disabled: !N,
    animateLayoutChanges: () => !1
  }), ge = (G) => {
    ne(G), p(h.id, G);
  }, Re = w !== null && (w.x !== 0 || w.y !== 0), De = g ?? 0, xe = h.columnDef, ke = C?.width ?? e.getSize(), Ee = xe.minSize ?? C?.minWidth ?? (_ ? e.getSize() : void 0), bt = xe.maxSize && xe.maxSize < Number.MAX_SAFE_INTEGER ? xe.maxSize : C?.maxWidth ?? (l ? e.getSize() : void 0), O = l || d || !!C?.isActions || xe.enableResizing === !1 && (xe.size !== void 0 || xe.width !== void 0 || C?.width !== void 0), H = typeof ke == "number" ? `${ke}px` : ke, Z = {
    width: ke,
    minWidth: Ee,
    maxWidth: bt,
    ...O ? { "--flash-col-size": H } : {},
    ...Re ? {
      transform: io.Translate.toString(w),
      transition: V
    } : {},
    ..._ ? {
      backgroundColor: "var(--muted)"
    } : {},
    ...M ? { position: "sticky", left: `${De}px` } : {},
    ...D ? { position: "sticky", right: `${De}px` } : {}
  }, de = ze(!1), ce = e.getResizeHandler(), ue = (G) => {
    G.stopPropagation(), de.current = !0;
    const Ne = () => {
      window.setTimeout(() => {
        de.current = !1;
      }, 0), window.removeEventListener("mouseup", Ne);
    };
    window.addEventListener("mouseup", Ne), ce(G);
  }, K = (G) => {
    G.stopPropagation(), de.current = !0;
    const Ne = () => {
      window.setTimeout(() => {
        de.current = !1;
      }, 0), window.removeEventListener("touchend", Ne), window.removeEventListener("touchcancel", Ne);
    };
    window.addEventListener("touchend", Ne), window.addEventListener("touchcancel", Ne), ce(G);
  }, Fe = (G) => {
    de.current || h.getIsResizing() || I && h.getToggleSortingHandler()?.(G);
  }, Oe = (G) => {
    G.stopPropagation(), _ ? h.pin(!1) : h.pin("left");
  }, Ve = an(h);
  return /* @__PURE__ */ c(
    Lo,
    {
      ref: ge,
      style: Z,
      ...N ? Y : {},
      ...N ? J : {},
      onClick: I ? Fe : void 0,
      className: a(
        O && "flash-table-fixed-cell",
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
              N && /* @__PURE__ */ r(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: A.columnManagerFooterHint,
                  children: /* @__PURE__ */ r(Kr, { className: "size-3" })
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
                        title: d ? void 0 : Ve,
                        children: Ln(h.columnDef.header, e.getContext())
                      }
                    ),
                    C?.headerTooltip && /* @__PURE__ */ c(Gn, { children: [
                      /* @__PURE__ */ r(Un, { asChild: !0, children: /* @__PURE__ */ r(
                        "span",
                        {
                          onClick: (G) => G.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ r(ls, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ r(hn, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: C.headerTooltip })
                    ] }),
                    I && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      z === "asc" ? /* @__PURE__ */ r(ds, { className: "size-3.5 text-foreground" }) : z === "desc" ? /* @__PURE__ */ r(cs, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ r(Wr, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      F && /* @__PURE__ */ r("span", { className: "text-[9px] font-bold text-foreground leading-none", children: v + 1 })
                    ] })
                  ]
                }
              ),
              y && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  onClick: Oe,
                  onPointerDown: (G) => G.stopPropagation(),
                  title: _ ? A.unpin : A.pinLeft,
                  "aria-label": _ ? A.unpin : A.pinLeft,
                  className: a(
                    "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                    _ ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
                  ),
                  children: /* @__PURE__ */ r(
                    ln,
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
            onMouseDown: ue,
            onTouchStart: K,
            onDoubleClick: (G) => {
              G.stopPropagation(), h.resetSize();
            },
            onClick: (G) => G.stopPropagation(),
            onPointerDown: (G) => G.stopPropagation(),
            title: A.resetColumnWidth,
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
function Jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ed({
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
  propColumnSizing: A,
  onColumnSizingChange: R,
  propColumnOrder: p,
  onColumnOrderChange: h,
  propColumnPinning: C,
  onColumnPinningChange: N,
  propDensity: y,
  onDensityChange: I
}) {
  const z = ye(
    () => e.map((O, H) => zt(O, H)),
    [e]
  ), v = ye(
    () => Kl(e, {
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
  ), F = ye(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), M = ye(() => {
    const O = ql(o), H = typeof window < "u" ? window.location.pathname : "app", Z = t || `${H}::${z.join("|")}`;
    return `${s}:${O}:${Z}`;
  }, [t, z, o, s]), D = se(() => {
    const O = v.left ?? [], H = v.right ?? [], Z = /* @__PURE__ */ new Set([...O, ...H]), ce = {
      columnOrder: [
        ...O,
        ...z.filter((ue) => !Z.has(ue)),
        ...H
      ],
      columnVisibility: {},
      columnPinning: v,
      columnSizing: {},
      density: d
    };
    if (!n || !F)
      return ce;
    try {
      const ue = F.getItem(M);
      if (!ue) return ce;
      const K = JSON.parse(ue), Fe = new Set(z), Oe = Dr(
        Array.isArray(K.columnOrder) ? K.columnOrder : [],
        z
      ), Ve = Array.isArray(K.columnPinning?.left) ? K.columnPinning.left.filter((qe) => Fe.has(qe)) : v.left ?? [], G = Array.isArray(K.columnPinning?.right) ? K.columnPinning.right.filter((qe) => Fe.has(qe)) : v.right ?? [], Ne = Array.from(
        /* @__PURE__ */ new Set([
          ...(v.left ?? []).filter(Me),
          ...Ve
        ])
      ), ot = Array.from(
        /* @__PURE__ */ new Set([...G, ...v.right ?? []])
      ), wn = /* @__PURE__ */ new Set([...Ne, ...ot]), Nn = Oe.filter((qe) => !wn.has(qe));
      return {
        columnOrder: [...Ne, ...Nn, ...ot],
        columnVisibility: K.columnVisibility && typeof K.columnVisibility == "object" ? K.columnVisibility : {},
        columnPinning: {
          left: Ne,
          right: ot
        },
        columnSizing: K.columnSizing && typeof K.columnSizing == "object" ? K.columnSizing : {},
        density: K.density === "ultra-compact" || K.density === "compact" || K.density === "comfortable" ? K.density : d
      };
    } catch {
      return ce;
    }
  }, [
    z,
    v,
    d,
    n,
    F,
    M
  ]), [_, Y] = pe(D);
  Ie(() => {
    Y((O) => {
      const H = Dr(
        O.columnOrder,
        z
      ), Z = new Set(z), de = Array.from(
        /* @__PURE__ */ new Set([
          ...(O.columnPinning.right ?? []).filter((ue) => Z.has(ue)),
          ...v.right ?? []
        ])
      ), ce = Array.from(
        /* @__PURE__ */ new Set([
          ...(v.left ?? []).filter(Me),
          ...(O.columnPinning.left ?? []).filter((ue) => Z.has(ue))
        ])
      );
      return dt(H, O.columnOrder) && dt(ce, O.columnPinning.left) && dt(de, O.columnPinning.right) ? O : {
        ...O,
        columnOrder: H,
        columnPinning: {
          left: ce,
          right: de
        }
      };
    });
  }, [z, v]);
  const J = k ?? _.columnVisibility, ne = A ?? _.columnSizing, w = p ?? _.columnOrder, V = C ?? _.columnPinning, q = y ?? _.density;
  Ie(() => {
    if (!(!n || !F))
      try {
        const O = {
          columnOrder: w,
          columnVisibility: J,
          columnPinning: V,
          columnSizing: ne,
          density: q
        };
        F.setItem(M, JSON.stringify(O));
      } catch {
      }
  }, [
    n,
    F,
    M,
    w,
    J,
    V,
    ne,
    q
  ]);
  const ge = se(
    (O) => {
      S?.(O), Y((H) => ({
        ...H,
        columnVisibility: Jt(O, H.columnVisibility)
      }));
    },
    [S]
  ), Re = se(
    (O) => {
      R?.(O), Y((H) => ({
        ...H,
        columnSizing: Jt(O, H.columnSizing)
      }));
    },
    [R]
  ), De = se(
    (O) => {
      h?.(O), Y((H) => ({
        ...H,
        columnOrder: Jt(O, H.columnOrder)
      }));
    },
    [h]
  ), xe = se(
    (O) => {
      N?.(O), Y((H) => {
        const Z = Jt(O, H.columnPinning), de = Z.left ?? [], ce = Z.right ?? [], ue = /* @__PURE__ */ new Set([...de, ...ce]), Fe = (H.columnOrder.length > 0 ? H.columnOrder : z).filter((Ve) => !ue.has(Ve)), Oe = [...de, ...Fe, ...ce];
        return {
          ...H,
          columnPinning: Z,
          columnOrder: Oe
        };
      });
    },
    [N, z]
  ), ke = se(
    (O) => {
      I?.(O), Y((H) => ({
        ...H,
        density: O
      }));
    },
    [I]
  ), Ee = ye(() => {
    const O = Object.values(J).some(
      (K) => K === !1
    ), H = !dt(w, z), Z = !dt(
      V.left ?? [],
      v.left ?? []
    ), de = !dt(
      V.right ?? [],
      v.right ?? []
    ), ce = Object.keys(ne).length > 0;
    return O || H || Z || de || ce || q !== d;
  }, [
    J,
    w,
    z,
    V,
    v,
    ne,
    q,
    d
  ]), bt = se(() => {
    if (Y({
      columnOrder: z,
      columnVisibility: {},
      columnPinning: v,
      columnSizing: {},
      density: d
    }), S?.({}), h?.(z), N?.(v), R?.({}), I?.(d), n && F)
      try {
        F.removeItem(M);
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
    F,
    M
  ]);
  return {
    columnVisibility: J,
    onColumnVisibilityChange: ge,
    columnSizing: ne,
    onColumnSizingChange: Re,
    columnOrder: w,
    onColumnOrderChange: De,
    columnPinning: V,
    onColumnPinningChange: xe,
    density: q,
    onDensityChange: ke,
    defaultColumnOrder: z,
    defaultColumnPinning: v,
    isCustomized: Ee,
    resetToDefaults: bt
  };
}
function td(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nd({
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
  rowSelection: A,
  onRowSelectionChange: R,
  onSelectedRowsChange: p,
  enableRowSelection: h,
  showSelectionColumn: C,
  isRowSelectable: N,
  selectionDisabledReason: y,
  renderBulkActions: I,
  expanded: z,
  onExpandedChange: v,
  getSubRows: F,
  getRowCanExpand: M,
  renderSubComponent: D,
  showExpandColumn: _ = !0,
  expandOnRowClick: Y = !1,
  enableSorting: J = !0,
  enableMultiSort: ne = !0,
  sorting: w,
  onSortingChange: V,
  manualSorting: q = !1,
  columnVisibility: ge,
  onColumnVisibilityChange: Re,
  columnSizing: De,
  onColumnSizingChange: xe,
  columnOrder: ke,
  onColumnOrderChange: Ee,
  columnPinning: bt,
  onColumnPinningChange: O,
  pinActionsColumnRight: H = !0,
  pinLastColumnRight: Z = !1,
  defaultPinnedLeft: de,
  defaultPinnedRight: ce,
  enableColumnOrdering: ue = !0,
  enableColumnPinning: K = !0,
  enableColumnVisibility: Fe = !0,
  enableColumnResizing: Oe = !0,
  enableContextMenu: Ve = !0,
  showToolbar: G = !0,
  showTotalRecords: Ne = !0,
  showDensityToggle: ot = !0,
  showHelpButton: wn = !0,
  toolbarLeftContent: Nn,
  toolbarRightContent: Jn,
  density: qe = "compact",
  onDensityChange: ra,
  tableLayout: oa = "fixed",
  striped: aa = !1,
  hoverable: sa = !0,
  stickyHeader: Zn = !0,
  maxHeight: at,
  className: ia,
  classNames: re,
  style: la,
  getRowId: da,
  onRowClick: er,
  onRowDoubleClick: tr,
  rowClassName: nr,
  rowAccentColor: Ht,
  renderRowProgress: rr,
  footerContent: Wt,
  onTableReady: or,
  labels: ar
}) {
  const be = ye(
    () => ({
      ...jt,
      ...ar,
      ...k ? { emptyMessage: k } : {}
    }),
    [ar, k]
  ), [ca, ua] = pe([]), [ma, fa] = pe({}), [pa, ga] = pe({}), [ha, sr] = pe(
    null
  ), [Cn, xa] = pe(!1), [Sn, ba] = pe(!1), [Rn, ya] = pe(
    {}
  ), yt = ze(null), ir = ze(null), Bt = ze(
    /* @__PURE__ */ new Map()
  ), lr = ze(null), kn = ze(/* @__PURE__ */ new Map()), Pn = ze(
    /* @__PURE__ */ new Map()
  ), [va, dr] = pe([]), cr = w ?? ca, wa = V ?? ua, ur = A ?? ma, Na = se(
    (f) => {
      R?.(f), fa(
        (b) => td(f, A ?? b)
      );
    },
    [R, A]
  ), mr = z ?? pa, Ca = v ?? ga, st = h !== void 0 ? !!h : !!(C || R || p || I), Sa = ye(
    () => e.some(
      (f, b) => Dt(zt(f, b))
    ),
    [e]
  ), fr = (C ?? st) && !Sa, pr = !!(D || F), Ra = ye(
    () => e.some(
      (f, b) => bn(zt(f, b))
    ),
    [e]
  ), gr = pr && _ && !Ra, hr = ye(() => {
    const f = e.map((x, T) => {
      const E = zt(x, T), $ = _t(
        E,
        x,
        T === e.length - 1,
        H,
        Z
      ), j = x.meta, oe = x, W = x.size ?? oe.width ?? j?.width ?? lt(j?.headerClassName, "w") ?? lt(j?.cellClassName, "w"), L = Dn(W), ie = x.minSize ?? oe.minWidth ?? j?.minWidth ?? lt(j?.headerClassName, "min-w") ?? lt(j?.cellClassName, "min-w"), ae = Dn(ie), Ce = x.maxSize ?? oe.maxWidth ?? j?.maxWidth ?? lt(j?.headerClassName, "max-w") ?? lt(j?.cellClassName, "max-w"), te = Dn(Ce);
      let U = L, _e = ae, Pe = te, Ae = x.enableResizing, fe = x.enableSorting;
      return $ ? (U === void 0 && (U = 70), Pe === void 0 && (Pe = U), _e === void 0 && (_e = U), Ae === void 0 && (Ae = !1), fe === void 0 && (fe = !1)) : (U !== void 0 && _e === void 0 && (_e = Math.min(60, U)), x.enableResizing === !1 && U !== void 0 && Pe === void 0 && (Pe = U)), {
        ...x,
        id: E,
        ...U !== void 0 ? { size: U } : {},
        ..._e !== void 0 ? { minSize: _e } : {},
        ...Pe !== void 0 ? { maxSize: Pe } : {},
        ...Ae !== void 0 ? { enableResizing: Ae } : {},
        ...fe !== void 0 ? { enableSorting: fe } : {}
      };
    }), b = [];
    return fr && b.push({
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
      header: ({ table: x }) => /* @__PURE__ */ r(
        ft,
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
          ft,
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
    }), gr && b.push({
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
      cell: ({ row: x }) => {
        if (!x.getCanExpand()) return null;
        const T = x.getIsExpanded();
        return /* @__PURE__ */ r(
          le,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (E) => {
              E.stopPropagation(), x.toggleExpanded();
            },
            "aria-label": T ? be.collapseRow : be.expandRow,
            title: T ? be.collapseRow : be.expandRow,
            children: T ? /* @__PURE__ */ r(Ze, {}) : /* @__PURE__ */ r(Lt, {})
          }
        );
      }
    }), [...b, ...f];
  }, [
    e,
    H,
    Z,
    fr,
    gr,
    be,
    y
  ]), {
    columnVisibility: vt,
    onColumnVisibilityChange: ka,
    columnSizing: $t,
    onColumnSizingChange: Pa,
    columnOrder: qt,
    onColumnOrderChange: za,
    columnPinning: it,
    onColumnPinningChange: Ma,
    density: me,
    onDensityChange: xr,
    isCustomized: br,
    resetToDefaults: yr
  } = ed({
    columns: hr,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: qe,
    pinActionsColumnRight: H,
    pinLastColumnRight: Z,
    defaultPinnedLeft: de,
    defaultPinnedRight: ce,
    propColumnVisibility: ge,
    onColumnVisibilityChange: Re,
    propColumnSizing: De,
    onColumnSizingChange: xe,
    propColumnOrder: ke,
    onColumnOrderChange: Ee,
    propColumnPinning: bt,
    onColumnPinningChange: O,
    propDensity: void 0,
    onDensityChange: ra
  }), Ta = ye(() => typeof h == "function" ? h : N ? (f) => N(f.original) : st, [h, N, st]), Ia = ye(() => {
    if (M) return M;
    if (D) return () => !0;
  }, [M, D]), B = Ps({
    data: t,
    columns: hr,
    defaultColumn: {
      minSize: 60
    },
    getRowId: da,
    getSubRows: F,
    getRowCanExpand: Ia,
    getCoreRowModel: Ts(),
    getSortedRowModel: q ? void 0 : Ms(),
    getExpandedRowModel: pr ? zs() : void 0,
    onSortingChange: wa,
    onExpandedChange: Ca,
    onColumnVisibilityChange: ka,
    onColumnSizingChange: Pa,
    onColumnOrderChange: za,
    onColumnPinningChange: Ma,
    onRowSelectionChange: Na,
    manualSorting: q,
    state: {
      sorting: cr,
      expanded: mr,
      rowSelection: ur,
      columnVisibility: vt,
      columnSizing: $t,
      columnOrder: qt,
      columnPinning: it
    },
    enableRowSelection: Ta,
    enableSorting: J,
    enableMultiSort: ne,
    enableColumnResizing: Oe,
    enableColumnPinning: K,
    columnResizeMode: "onChange"
  });
  Ie(() => {
    or?.(B);
  }, [B, or]);
  const wt = ye(() => st ? B.getSelectedRowModel().flatRows.map((f) => f.original) : [], [B, ur, t, st]);
  Ie(() => {
    p?.(wt);
  }, [wt, p]);
  const Kt = se(() => {
    const f = {};
    Bt.current.forEach((b, x) => {
      if (b) {
        const T = Math.round(b.getBoundingClientRect().width);
        T > 0 && (f[x] = T);
      }
    }), ya((b) => {
      const x = Object.keys(f);
      return x.length === Object.keys(b).length && x.every((T) => Math.abs((b[T] ?? 0) - f[T]) <= 1) ? b : f;
    });
  }, []), Da = se(
    (f, b) => {
      b ? Bt.current.set(f, b) : Bt.current.delete(f);
    },
    []
  ), _a = se(
    (f, b) => {
      b ? kn.current.set(f, b) : kn.current.delete(f);
    },
    []
  ), Aa = se(
    (f, b) => {
      b ? Pn.current.set(f, b) : Pn.current.delete(f);
    },
    []
  ), Gt = se(() => {
    if (!Ht) {
      dr((E) => E.length === 0 ? E : []);
      return;
    }
    const f = lr.current;
    if (!f) return;
    const b = f.getBoundingClientRect(), x = B.getRowModel().rows, T = [];
    x.forEach((E, $) => {
      const j = Ht(E.original, $);
      if (!j) return;
      const oe = kn.current.get(E.id);
      if (!oe) return;
      const W = oe.getBoundingClientRect(), L = Pn.current.get(E.id), ie = L ? L.getBoundingClientRect().bottom : W.bottom, ae = Math.round((W.top - b.top) * 10) / 10, Ce = Math.round((ie - W.top) * 10) / 10;
      if (Ce <= 0) return;
      const te = j.startsWith("#") || j.startsWith("rgb") || j.startsWith("hsl") || j.startsWith("oklch") || j.startsWith("var(");
      T.push({
        key: E.id,
        top: ae,
        height: Ce,
        color: j,
        isCssColor: te
      });
    }), dr((E) => E.length === T.length && E.every(
      ($, j) => $.key === T[j].key && Math.abs($.top - T[j].top) <= 0.5 && Math.abs($.height - T[j].height) <= 0.5 && $.color === T[j].color
    ) ? E : T);
  }, [Ht, B]), Nt = se(() => {
    const f = yt.current;
    if (!f) return;
    const { scrollLeft: b, scrollWidth: x, clientWidth: T } = f, E = Math.max(0, x - T);
    xa(b > 2), ba(E - b > 2);
  }, []);
  Ie(() => {
    const f = yt.current;
    if (!f) return;
    const b = (x) => {
      if (!x.ctrlKey || !(f.scrollWidth > f.clientWidth + 1)) return;
      const E = Math.abs(x.deltaY) >= Math.abs(x.deltaX) ? x.deltaY : x.deltaX;
      if (E === 0) return;
      const $ = x.deltaMode === 1 ? 32 : x.deltaMode === 2 ? f.clientWidth * 0.8 : 1;
      x.preventDefault(), f.scrollLeft += E * $;
    };
    return f.addEventListener("wheel", b, { passive: !1 }), () => {
      f.removeEventListener("wheel", b);
    };
  }, []), Xa(() => {
    Kt(), Nt(), Gt();
  }, [
    Kt,
    Nt,
    Gt,
    t,
    vt,
    qt,
    it,
    $t,
    me,
    cr,
    mr
  ]), Ie(() => {
    const f = yt.current, b = ir.current;
    if (!f || typeof ResizeObserver > "u") return;
    const x = new ResizeObserver(() => {
      Kt(), Nt(), Gt();
    });
    return x.observe(f), b && x.observe(b), Bt.current.forEach((T) => {
      T && x.observe(T);
    }), () => x.disconnect();
  }, [
    Nt,
    Kt,
    Gt,
    vt,
    qt,
    it
  ]);
  const Ea = se((f) => {
    const b = yt.current;
    if (!b) return;
    const x = Math.max(240, Math.floor(b.clientWidth * 0.6));
    b.scrollBy({
      left: f === "left" ? -x : x,
      behavior: "smooth"
    });
  }, []), Ct = B.getVisibleLeafColumns(), {
    stickyOffsets: zn,
    lastLeftPinnedColumnId: Mn,
    firstRightPinnedColumnId: Tn,
    actionsColumnIds: Ke
  } = ye(() => {
    const f = {}, b = /* @__PURE__ */ new Set(), x = B.getAllLeafColumns(), T = /* @__PURE__ */ new Map();
    x.forEach((L, ie) => {
      T.set(L.id, L), _t(
        L.id,
        L.columnDef,
        ie === x.length - 1,
        H,
        Z
      ) && b.add(L.id);
    });
    const E = (L) => vt[L.id] !== !1 && L.getIsVisible(), $ = (it.left ?? []).map((L) => T.get(L)).filter(
      (L) => !!L && E(L)
    ), j = (it.right ?? []).map((L) => T.get(L)).filter(
      (L) => !!L && E(L)
    );
    let oe = 0;
    for (const L of $)
      f[L.id] = oe, oe += Rn[L.id] || L.getSize();
    let W = 0;
    for (let L = j.length - 1; L >= 0; L--) {
      const ie = j[L];
      f[ie.id] = W, W += Rn[ie.id] || ie.getSize();
    }
    return {
      stickyOffsets: f,
      lastLeftPinnedColumnId: $.length > 0 ? $[$.length - 1].id : null,
      firstRightPinnedColumnId: j.length > 0 ? j[0].id : null,
      actionsColumnIds: b
    };
  }, [
    B,
    it,
    qt,
    vt,
    $t,
    Rn,
    H,
    Z
  ]), La = Zr(
    nn(eo, {
      activationConstraint: { distance: 6 }
    }),
    nn(to, {
      coordinateGetter: oo
    })
  ), Fa = se(
    (f) => {
      const { active: b, over: x } = f;
      if (!x || b.id === x.id) return;
      const T = String(b.id), E = String(x.id);
      if (Me(T) || Me(E) || Ke.has(T) || Ke.has(E))
        return;
      const $ = B.getState().columnOrder.length > 0 ? B.getState().columnOrder : B.getAllLeafColumns().map((U) => U.id), j = $.indexOf(T), oe = $.indexOf(E);
      j !== -1 && oe !== -1 && B.setColumnOrder(ct($, j, oe));
      const W = B.getState().columnPinning.left ?? [], L = W.indexOf(T), ie = W.indexOf(E);
      L !== -1 && ie !== -1 && B.setColumnPinning((U) => ({
        ...U,
        left: ct(U.left ?? [], L, ie)
      }));
      const ae = B.getState().columnPinning.right ?? [], Ce = ae.indexOf(T), te = ae.indexOf(E);
      Ce !== -1 && te !== -1 && B.setColumnPinning((U) => ({
        ...U,
        right: ct(U.right ?? [], Ce, te)
      }));
    },
    [B, Ke]
  ), Oa = (f) => {
    Ve && (f.preventDefault(), sr({ x: f.clientX, y: f.clientY }));
  }, vr = se(() => {
    B.resetRowSelection();
  }, [B]), St = B.getRowModel().rows, Va = g && (m === "skeleton" || m === "auto" && St.length === 0), ja = g && (m === "overlay" || m === "auto" && St.length > 0), wr = ye(
    () => B.getFooterGroups().some(
      (f) => f.headers.some((b) => b.column.columnDef.footer !== void 0)
    ),
    [B]
  ), Ha = Object.keys($t).length > 0, Wa = !!B.getState().columnSizingInfo?.isResizingColumn, Nr = oa === "fixed" || Ha || Wa, Ba = at ? {
    maxHeight: typeof at == "number" ? `${at}px` : at
  } : void 0;
  return /* @__PURE__ */ r($l, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: la,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        re?.root,
        ia
      ),
      onContextMenu: Oa,
      children: [
        /* @__PURE__ */ r("style", { children: `
          .flash-table-fixed-cell {
            width: var(--flash-col-size) !important;
            min-width: var(--flash-col-size) !important;
            max-width: var(--flash-col-size) !important;
          }
        ` }),
        ja && /* @__PURE__ */ r("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ r(ut, { className: "animate-spin size-6 text-primary" }) }),
        G && /* @__PURE__ */ r(
          Ql,
          {
            table: B,
            totalRecords: n,
            showTotalRecords: Ne,
            showDensityToggle: ot,
            showHelpButton: wn,
            density: me,
            onDensityChange: xr,
            pinActionsColumnRight: H,
            pinLastColumnRight: Z,
            enableColumnOrdering: ue,
            enableColumnPinning: K,
            enableColumnVisibility: Fe,
            isCustomized: br,
            onReset: yr,
            canScrollLeft: Cn,
            canScrollRight: Sn,
            onScrollHorizontal: Ea,
            toolbarLeftContent: Nn,
            toolbarRightContent: Jn,
            labels: be,
            className: re?.toolbar
          }
        ),
        st && wt.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              re?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r("span", { className: "font-medium text-foreground", children: be.selectedItemsCount(wt.length) }),
                I?.(wt, vr)
              ] }),
              /* @__PURE__ */ c(
                le,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: vr,
                  children: [
                    /* @__PURE__ */ r(Ft, {}),
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
            ref: yt,
            onScroll: Nt,
            style: Ba,
            className: a(
              "relative w-full overflow-auto",
              re?.viewport
            ),
            children: [
              Ht && /* @__PURE__ */ r(
                "div",
                {
                  ref: lr,
                  "aria-hidden": "true",
                  className: "sticky left-0 z-[25] h-0 w-0 overflow-visible pointer-events-none",
                  children: va.map((f) => /* @__PURE__ */ r(
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
                no,
                {
                  sensors: La,
                  collisionDetection: ro,
                  modifiers: [Ss],
                  onDragEnd: Fa,
                  children: /* @__PURE__ */ c(
                    "table",
                    {
                      ref: ir,
                      style: Nr ? { width: B.getTotalSize(), minWidth: "100%" } : void 0,
                      className: a(
                        Nr ? "table-fixed" : "table-auto w-full",
                        "caption-bottom border-separate border-spacing-0",
                        me === "ultra-compact" && "text-xs",
                        me === "compact" && "text-sm",
                        me === "comfortable" && "text-sm",
                        re?.table
                      ),
                      children: [
                        /* @__PURE__ */ r("colgroup", { children: B.getVisibleLeafColumns().map((f) => {
                          const b = f.id, x = Ke.has(b), T = Me(b), E = f.columnDef.meta, $ = f.columnDef, j = x || T || !!E?.isActions || $.enableResizing === !1 && ($.size !== void 0 || $.width !== void 0 || E?.width !== void 0), W = `${f.getSize()}px`;
                          return /* @__PURE__ */ r(
                            "col",
                            {
                              style: {
                                width: W,
                                ...j ? {
                                  "--flash-col-size": W
                                } : {}
                              },
                              className: j ? "flash-table-fixed-cell" : void 0
                            },
                            b
                          );
                        }) }),
                        /* @__PURE__ */ r(
                          _o,
                          {
                            className: a(
                              "bg-muted",
                              Zn && at && "sticky top-0 z-30 bg-muted",
                              re?.header
                            ),
                            children: B.getHeaderGroups().map((f) => /* @__PURE__ */ r(
                              je,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  re?.headerRow
                                ),
                                children: /* @__PURE__ */ r(
                                  ao,
                                  {
                                    items: f.headers.map((b) => b.column.id),
                                    strategy: ks,
                                    children: f.headers.map((b) => {
                                      const x = b.column.id, T = b.column.getIsPinned(), E = Ke.has(x), $ = Me(x);
                                      return /* @__PURE__ */ r(
                                        Zl,
                                        {
                                          header: b,
                                          density: me,
                                          enableColumnOrdering: ue,
                                          enableColumnPinning: K,
                                          enableColumnResizing: Oe,
                                          isActionsCol: E,
                                          isSystemLeftCol: $,
                                          pinnedPosition: T,
                                          stickyOffset: zn[x],
                                          isLastLeftPinned: x === Mn,
                                          isFirstRightPinned: x === Tn,
                                          canScrollLeft: Cn,
                                          canScrollRight: Sn,
                                          labels: be,
                                          className: re?.headerCell,
                                          onRegisterHeaderElement: Da
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
                        /* @__PURE__ */ r(Ao, { className: re?.body, children: Va ? Array.from({ length: P }).map((f, b) => /* @__PURE__ */ r(
                          je,
                          {
                            className: "border-b-0 hover:bg-transparent",
                            children: Ct.map((x) => /* @__PURE__ */ r(
                              Ue,
                              {
                                className: a(
                                  "border-b border-border/60",
                                  me === "ultra-compact" && "py-0.5 px-2",
                                  me === "compact" && "py-1 px-3",
                                  me === "comfortable" && "py-2 px-3"
                                ),
                                children: /* @__PURE__ */ r(Do, { className: "h-4 w-full max-w-[140px]" })
                              },
                              `skeleton-${b}-${x.id}`
                            ))
                          },
                          `skeleton-${b}`
                        )) : St.length > 0 ? St.map((f, b) => {
                          const x = rr ? rr(f.original) : null, E = f.getIsExpanded() && !!D, $ = f.getVisibleCells(), j = b % 2 === 1, oe = b === St.length - 1;
                          return /* @__PURE__ */ c(Ya, { children: [
                            /* @__PURE__ */ r(
                              je,
                              {
                                ref: (W) => _a(f.id, W),
                                "data-state": f.getIsSelected() && "selected",
                                onClick: (W) => {
                                  Y && f.getCanExpand() && f.toggleExpanded(), er?.(f.original, W);
                                },
                                onDoubleClick: tr ? (W) => tr(f.original, W) : void 0,
                                className: a(
                                  "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)]",
                                  aa && j && "bg-muted/80 dark:bg-muted/40 [--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_80%,var(--card))] dark:[--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_40%,var(--card))]",
                                  sa ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] dark:hover:bg-muted dark:hover:[--flash-table-cell-bg:var(--muted)]" : "hover:bg-transparent",
                                  "data-[state=selected]:bg-muted data-[state=selected]:[--flash-table-cell-bg:var(--muted)] dark:data-[state=selected]:bg-muted dark:data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                  (er || Y && f.getCanExpand()) && "cursor-pointer",
                                  re?.row,
                                  nr ? nr(f.original, b) : ""
                                ),
                                children: $.map((W) => {
                                  const L = W.column.id, ie = W.column.getIsPinned(), ae = ie === "left", Ce = ie === "right", te = ae || Ce, U = L === Mn, _e = L === Tn, Pe = Ke.has(L), Ae = Me(L), fe = W.column.columnDef.meta, Ut = zn[L] ?? 0, Ge = W.column.columnDef, Xt = fe?.width ?? W.column.getSize(), $a = Ge.minSize ?? fe?.minWidth ?? (te ? W.column.getSize() : void 0), qa = Ge.maxSize && Ge.maxSize < Number.MAX_SAFE_INTEGER ? Ge.maxSize : fe?.maxWidth ?? (Pe ? W.column.getSize() : void 0), Cr = Pe || Ae || !!fe?.isActions || Ge.enableResizing === !1 && (Ge.size !== void 0 || Ge.width !== void 0 || fe?.width !== void 0), Ka = typeof Xt == "number" ? `${Xt}px` : Xt, Ga = {
                                    width: Xt,
                                    minWidth: $a,
                                    maxWidth: qa,
                                    ...Cr ? { "--flash-col-size": Ka } : {},
                                    ...te ? {
                                      backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                    } : {},
                                    ...ae ? {
                                      position: "sticky",
                                      left: `${Ut}px`
                                    } : {},
                                    ...Ce ? {
                                      position: "sticky",
                                      right: `${Ut}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    Ue,
                                    {
                                      style: Ga,
                                      className: a(
                                        Cr && "flash-table-fixed-cell",
                                        fe?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                        "align-middle transition-colors",
                                        Ae && "[&:has([role=checkbox])]:pr-2",
                                        te && "sticky",
                                        // Row bottom border
                                        (!oe || wr || Wt) && !x && !E && "border-b border-border",
                                        // Density padding
                                        me === "ultra-compact" && "py-0.5 px-2 text-xs",
                                        me === "compact" && "py-1 px-3 text-sm",
                                        me === "comfortable" && "py-2 px-3 text-sm",
                                        // Alignment
                                        (Pe || fe?.align === "right") && "text-right",
                                        (Ae || fe?.align === "center") && "text-center",
                                        // Pinned cell stacking context (opaque background comes from --flash-table-cell-bg)
                                        te && "z-20",
                                        // Sticky boundary dividers & directional shadows
                                        U && "border-r border-border",
                                        U && Cn && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        _e && "border-l border-border",
                                        _e && Sn && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        re?.cell,
                                        fe?.cellClassName
                                      ),
                                      children: Ln(
                                        W.column.columnDef.cell,
                                        W.getContext()
                                      )
                                    },
                                    W.id
                                  );
                                })
                              }
                            ),
                            E && D && /* @__PURE__ */ r(
                              je,
                              {
                                ref: (W) => Aa(f.id, W),
                                className: a(
                                  "bg-muted/20 hover:bg-muted/20 border-b-0",
                                  re?.expandedRow
                                ),
                                children: /* @__PURE__ */ r(
                                  Ue,
                                  {
                                    colSpan: Ct.length || 1,
                                    className: a(
                                      "p-3",
                                      !oe && !x && "border-b border-border"
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
                                colSpan: Ct.length || 1,
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
                        }) : /* @__PURE__ */ r(je, { className: "hover:bg-transparent", children: /* @__PURE__ */ r(
                          Ue,
                          {
                            colSpan: Ct.length || e.length || 1,
                            className: a(
                              "h-24 text-center text-muted-foreground text-sm",
                              re?.emptyCell
                            ),
                            children: g ? be.loadingMessage : S ?? /* @__PURE__ */ r("span", { className: "italic", children: be.emptyMessage })
                          }
                        ) }) }),
                        (wr || Wt) && /* @__PURE__ */ r(
                          Eo,
                          {
                            className: a(
                              "border-t bg-muted/50 font-medium",
                              Zn && at && "sticky bottom-0 z-30 bg-muted",
                              re?.footer
                            ),
                            children: Wt ? /* @__PURE__ */ r(je, { className: re?.footerRow, children: /* @__PURE__ */ r(
                              Ue,
                              {
                                colSpan: Ct.length || 1,
                                className: a(
                                  "px-3 py-2 border-t border-border",
                                  re?.footerCell
                                ),
                                children: Wt
                              }
                            ) }) : B.getFooterGroups().map((f) => /* @__PURE__ */ r(
                              je,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  re?.footerRow
                                ),
                                children: f.headers.map((b) => {
                                  const x = b.column.id, T = b.column.getIsPinned(), E = T === "left", $ = T === "right", j = E || $, oe = x === Mn, W = x === Tn, L = Ke.has(x), ie = Me(x), ae = b.column.columnDef.meta, Ce = zn[x] ?? 0, te = b.column.columnDef, U = ae?.width ?? b.getSize(), _e = te.minSize ?? ae?.minWidth ?? (j ? b.getSize() : void 0), Pe = te.maxSize && te.maxSize < Number.MAX_SAFE_INTEGER ? te.maxSize : ae?.maxWidth ?? (L ? b.getSize() : void 0), Ae = L || ie || !!ae?.isActions || te.enableResizing === !1 && (te.size !== void 0 || te.width !== void 0 || ae?.width !== void 0), fe = typeof U == "number" ? `${U}px` : U, Ut = {
                                    width: U,
                                    minWidth: _e,
                                    maxWidth: Pe,
                                    ...Ae ? { "--flash-col-size": fe } : {},
                                    ...j ? {
                                      backgroundColor: "var(--muted)"
                                    } : {},
                                    ...E ? {
                                      position: "sticky",
                                      left: `${Ce}px`
                                    } : {},
                                    ...$ ? {
                                      position: "sticky",
                                      right: `${Ce}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ r(
                                    Ue,
                                    {
                                      style: Ut,
                                      className: a(
                                        Ae && "flash-table-fixed-cell",
                                        "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                        j ? "sticky bg-muted z-20" : "bg-muted",
                                        me === "ultra-compact" && "py-1 px-2 text-xs",
                                        me === "compact" && "py-1 px-3 text-sm",
                                        me === "comfortable" && "py-2 px-3 text-sm",
                                        (L || ae?.align === "right") && "text-right",
                                        ae?.align === "center" && "text-center",
                                        oe && "border-r border-border",
                                        W && "border-l border-border",
                                        re?.footerCell,
                                        ae?.footerClassName
                                      ),
                                      children: b.isPlaceholder ? null : Ln(
                                        b.column.columnDef.footer,
                                        b.getContext()
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
        Ve && /* @__PURE__ */ r(
          Jl,
          {
            position: ha,
            onClose: () => sr(null),
            table: B,
            density: me,
            onDensityChange: xr,
            showDensityToggle: ot,
            pinActionsColumnRight: H,
            pinLastColumnRight: Z,
            enableColumnPinning: K,
            enableColumnVisibility: Fe,
            isCustomized: br,
            onReset: yr,
            labels: be
          }
        )
      ]
    }
  ) });
}
nd.displayName = "FlashTable";
const rd = Le(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), yn = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  lo.Root,
  {
    ref: n,
    className: a(rd(), e),
    ...t
  }
));
yn.displayName = lo.Root.displayName;
const Ec = xs, Oo = i.createContext(
  {}
), rt = ({
  ...e
}) => /* @__PURE__ */ r(Oo.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r(bs, { ...e }) }), vn = () => {
  const e = i.useContext(Oo), t = i.useContext(Vo), { getFieldState: n, formState: o } = He(), s = n(e.name, o);
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
}, Vo = i.createContext(
  {}
), We = i.forwardRef(({ className: e, ...t }, n) => {
  const o = i.useId();
  return /* @__PURE__ */ r(Vo.Provider, { value: { id: o }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
We.displayName = "FormItem";
const Be = i.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: s } = vn();
  return /* @__PURE__ */ r(
    yn,
    {
      ref: n,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
Be.displayName = "FormLabel";
const xt = i.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: s, formMessageId: l } = vn();
  return /* @__PURE__ */ r(
    Ur,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
xt.displayName = "FormControl";
const jo = i.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = vn();
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
jo.displayName = "FormDescription";
const $e = i.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: s, formMessageId: l } = vn(), d = s ? String(s?.message) : t;
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
$e.displayName = "FormMessage";
const od = Le("font-bold tracking-tight", {
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
}), Lc = At.forwardRef(
  ({ className: e, variant: t, children: n, ...o }, s) => /* @__PURE__ */ r(
    t || "h1",
    {
      className: a(od({ variant: t }), e),
      ref: s,
      ...o,
      children: n
    }
  )
), Fc = ({
  name: e,
  label: t,
  placeholder: n,
  mask: o,
  ...s
}) => {
  const l = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: l.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(We, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(xt, { children: o ? /* @__PURE__ */ r(
          fd,
          {
            mask: o,
            placeholder: n,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ r(xn, { placeholder: n, ...s, ...d }) }),
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
}, ad = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  we.Root,
  {
    ref: o,
    className: a(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ r(Ho, {})
    ]
  }
));
ad.displayName = we.Root.displayName;
const sd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  we.List,
  {
    ref: n,
    className: a(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
sd.displayName = we.List.displayName;
const Oc = we.Item, id = Le(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), ld = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  we.Trigger,
  {
    ref: o,
    className: a(id(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ r(
        Ze,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ld.displayName = we.Trigger.displayName;
const dd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  we.Content,
  {
    ref: n,
    className: a(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
dd.displayName = we.Content.displayName;
const cd = we.Link, Ho = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r(
  we.Viewport,
  {
    className: a(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Ho.displayName = we.Viewport.displayName;
const ud = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  we.Indicator,
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
ud.displayName = we.Indicator.displayName;
const md = At.forwardRef(({ className: e, title: t, children: n, ...o }, s) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(cd, { asChild: !0, children: /* @__PURE__ */ c(
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
md.displayName = "ListItem";
function fd({
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
    xn,
    {
      value: fo(e, t),
      onChange: g,
      ...o
    }
  );
}
const pd = (e, t = 300) => {
  const [n, o] = pe(e);
  return Ie(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), n;
}, Ar = Le(
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
), gd = i.forwardRef(
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
    ...A
  }, R) => {
    const [p, h] = i.useState(o), [C, N] = i.useState(!1), [y, I] = i.useState(!1), [z, v] = i.useState(""), F = pd(z, 300);
    Ie(() => {
      P && P(F ?? "");
    }, [F]);
    const M = (w) => {
      if (w.key === "Enter")
        N(!0);
      else if (w.key === "Backspace" && !w.currentTarget.value) {
        const V = [...p];
        V.pop(), h(V), t(V);
      }
    }, D = (w) => {
      const V = p.includes(w) ? p.filter((q) => q !== w) : [...p, w];
      h(V), t(V);
    }, _ = () => {
      h([]), t([]);
    }, Y = () => {
      N((w) => !w);
    }, J = () => {
      const w = p.slice(0, d);
      h(w), t(w);
    }, ne = () => {
      if (p.length === e.length)
        _();
      else {
        const w = e.map((V) => V.value);
        h(w), t(w);
      }
    };
    return /* @__PURE__ */ c(
      gt,
      {
        open: C,
        onOpenChange: N,
        modal: u,
        children: [
          /* @__PURE__ */ r(ht, { asChild: !0, children: /* @__PURE__ */ r(
            le,
            {
              ref: R,
              ...A,
              onClick: Y,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                g
              ),
              children: p.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  p.slice(0, d).map((w) => {
                    const V = e.find((ge) => ge.value === w), q = V?.icon;
                    return /* @__PURE__ */ c(
                      On,
                      {
                        className: a(
                          y ? "animate-bounce" : "",
                          Ar({ variant: n })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          q && /* @__PURE__ */ r(q, { className: "h-4 w-4 mr-2" }),
                          V?.label,
                          /* @__PURE__ */ r(
                            Rr,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (ge) => {
                                ge.stopPropagation(), D(w);
                              }
                            }
                          )
                        ]
                      },
                      w
                    );
                  }),
                  p.length > d && /* @__PURE__ */ c(
                    On,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        y ? "animate-bounce" : "",
                        Ar({ variant: n })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${p.length - d}`,
                        /* @__PURE__ */ r(
                          Rr,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (w) => {
                              w.stopPropagation(), J();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  k && /* @__PURE__ */ r(ut, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ r(
                    us,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (w) => {
                        w.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ r(
                    Go,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ r(Ze, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ r(Ze, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ r(
            nt,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => N(!1),
              children: /* @__PURE__ */ c(Ot, { shouldFilter: !P, children: [
                /* @__PURE__ */ r(
                  mn,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: M,
                    onValueChange: v
                  }
                ),
                /* @__PURE__ */ c(fn, { children: [
                  !k && /* @__PURE__ */ r(pn, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Vt, { children: [
                    !k && !e.length && !!z.length && S && /* @__PURE__ */ r(
                      Qe,
                      {
                        onSelect: S,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ r(ms, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ r("b", { children: z })
                        ] })
                      },
                      "new"
                    ),
                    k && /* @__PURE__ */ r("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ r(ut, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      Qe,
                      {
                        onSelect: ne,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                p.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ r(kr, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ r("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((w) => {
                      const V = p.includes(w.value);
                      return /* @__PURE__ */ c(
                        Qe,
                        {
                          onSelect: () => D(w.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ r(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  V ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ r(kr, { className: "h-4 w-4" })
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
                  /* @__PURE__ */ r(yo, {})
                ] })
              ] })
            }
          ),
          l > 0 && p.length > 0 && /* @__PURE__ */ r(
            fs,
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
gd.displayName = "MultiSelect";
const hd = ({ className: e, ...t }) => /* @__PURE__ */ r(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
hd.displayName = "Pagination";
const xd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  "ul",
  {
    ref: n,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
xd.displayName = "PaginationContent";
const bd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r("li", { ref: n, className: a("", e), ...t }));
bd.displayName = "PaginationItem";
const Xn = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) => /* @__PURE__ */ r(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: a(
      et({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...o
  }
);
Xn.displayName = "PaginationLink";
const yd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  Xn,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Br, { className: "h-4 w-4" })
  }
);
yd.displayName = "PaginationPrevious";
const vd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  Xn,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Lt, { className: "h-4 w-4" })
  }
);
vd.displayName = "PaginationNext";
const wd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(Or, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
wd.displayName = "PaginationEllipsis";
const Nd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  It.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: n
  }
));
Nd.displayName = It.Root.displayName;
const Cd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  It.Item,
  {
    ref: n,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(It.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r(jr, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
Cd.displayName = It.Item.displayName;
const Sd = At.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  Ye.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ r(Ye.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r(Wo, {}),
      /* @__PURE__ */ r(Ye.Corner, {})
    ]
  }
));
Sd.displayName = Ye.Root.displayName;
const Wo = At.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ r(
  Ye.ScrollAreaScrollbar,
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
    children: /* @__PURE__ */ r(Ye.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Wo.displayName = Ye.ScrollAreaScrollbar.displayName;
const Bo = ee.Root, Vc = ee.Group, $o = ee.Value, Yn = i.forwardRef(({ className: e, children: t, isLoading: n = !1, ...o }, s) => /* @__PURE__ */ c(
  ee.Trigger,
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
        n && /* @__PURE__ */ r(ut, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ r(ee.Icon, { asChild: !0, children: /* @__PURE__ */ r(Ze, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Yn.displayName = ee.Trigger.displayName;
const qo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ee.ScrollUpButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(ps, { className: "h-4 w-4" })
  }
));
qo.displayName = ee.ScrollUpButton.displayName;
const Ko = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ee.ScrollDownButton,
  {
    ref: n,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Ze, { className: "h-4 w-4" })
  }
));
Ko.displayName = ee.ScrollDownButton.displayName;
const Qn = i.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, s) => /* @__PURE__ */ r(ee.Portal, { children: /* @__PURE__ */ c(
  ee.Content,
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
      /* @__PURE__ */ r(qo, {}),
      /* @__PURE__ */ r(
        ee.Viewport,
        {
          className: a(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(Ko, {})
    ]
  }
) }));
Qn.displayName = ee.Content.displayName;
const Rd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ee.Label,
  {
    ref: n,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
Rd.displayName = ee.Label.displayName;
const sn = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ c(
  ee.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(ee.ItemIndicator, { children: /* @__PURE__ */ r(Et, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r(ee.ItemText, { children: t })
    ]
  }
));
sn.displayName = ee.Item.displayName;
const kd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  ee.Separator,
  {
    ref: n,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
kd.displayName = ee.Separator.displayName;
const jc = ({
  name: e,
  label: t,
  placeholder: n,
  options: o,
  helpText: s,
  isLoading: l,
  ...d
}) => {
  const u = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: u.control,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ c(We, { children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ c(
          Bo,
          {
            onValueChange: g.onChange,
            value: g.value,
            defaultValue: g.value,
            ...d,
            children: [
              /* @__PURE__ */ r(xt, { children: /* @__PURE__ */ r(Yn, { isLoading: l, children: /* @__PURE__ */ r($o, { placeholder: n }) }) }),
              /* @__PURE__ */ r(Qn, { children: o.map((m) => /* @__PURE__ */ r(sn, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ r(jo, { children: s }),
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
}, Go = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, s) => /* @__PURE__ */ r(
    co.Root,
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
Go.displayName = co.Root.displayName;
const Hc = X.Root, Wc = X.Trigger, Bc = X.Close, Pd = X.Portal, Uo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Uo.displayName = X.Overlay.displayName;
const zd = Le(
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
), Md = i.forwardRef(({ side: e = "right", className: t, children: n, ...o }, s) => /* @__PURE__ */ c(Pd, { children: [
  /* @__PURE__ */ r(Uo, {}),
  /* @__PURE__ */ c(
    X.Content,
    {
      ref: s,
      className: a(zd({ side: e }), t),
      ...o,
      children: [
        n,
        /* @__PURE__ */ c(X.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r(Ft, { className: "h-4 w-4" }),
          /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Md.displayName = X.Content.displayName;
const Td = ({
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
Td.displayName = "SheetHeader";
const Id = ({
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
Id.displayName = "SheetFooter";
const Dd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Title,
  {
    ref: n,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Dd.displayName = X.Title.displayName;
const _d = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  X.Description,
  {
    ref: n,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
_d.displayName = X.Description.displayName;
const Ad = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Fn.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ r(
      Fn.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Ad.displayName = Fn.Root.displayName;
const $c = tt.Root, Ed = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  tt.List,
  {
    ref: n,
    className: a(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ed.displayName = tt.List.displayName;
const Ld = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  tt.Trigger,
  {
    ref: n,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ld.displayName = tt.Trigger.displayName;
const Fd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  tt.Content,
  {
    ref: n,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Fd.displayName = tt.Content.displayName;
const Xo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
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
Xo.displayName = "Textarea";
const Od = ({
  name: e,
  label: t,
  placeholder: n,
  ...o
}) => {
  const s = He();
  return /* @__PURE__ */ r(
    rt,
    {
      control: s.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(We, { children: [
        !!t && /* @__PURE__ */ r(Be, { children: t }),
        /* @__PURE__ */ r(xt, { children: /* @__PURE__ */ r(Xo, { placeholder: n, ...o, ...l }) }),
        /* @__PURE__ */ r($e, {})
      ] })
    }
  );
};
Od.displayName = "TextareaForm";
const Vd = Se.Provider, jd = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, Yo = i.forwardRef(({ className: e, position: t = "bottom-right", ...n }, o) => /* @__PURE__ */ r(
  Se.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${jd[t]}`,
      e
    ),
    ...n
  }
));
Yo.displayName = Se.Viewport.displayName;
const Hd = Le(
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
), Qo = i.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ r(
  Se.Root,
  {
    ref: o,
    className: a(Hd({ variant: t }), e),
    ...n
  }
));
Qo.displayName = Se.Root.displayName;
const Wd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Se.Action,
  {
    ref: n,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Wd.displayName = Se.Action.displayName;
const Jo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Se.Close,
  {
    ref: n,
    className: a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r(Ft, { className: "h-4 w-4" })
  }
));
Jo.displayName = Se.Close.displayName;
const Zo = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Se.Title,
  {
    ref: n,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
Zo.displayName = Se.Title.displayName;
const ea = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ r(
  Se.Description,
  {
    ref: n,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
ea.displayName = Se.Description.displayName;
const Bd = 5, $d = 1e4;
let _n = 0;
function qd() {
  return _n = (_n + 1) % Number.MAX_SAFE_INTEGER, _n.toString();
}
const An = /* @__PURE__ */ new Map(), Er = (e) => {
  if (An.has(e))
    return;
  const t = setTimeout(() => {
    An.delete(e), Mt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, $d);
  An.set(e, t);
}, Kd = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Bd)
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
      return n ? Er(n) : e.toasts.forEach((o) => {
        Er(o.id);
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
}, en = [];
let tn = { toasts: [] };
function Mt(e) {
  tn = Kd(tn, e), en.forEach((t) => {
    t(tn);
  });
}
function Gd({ ...e }) {
  const t = qd(), n = (s) => Mt({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => Mt({ type: "DISMISS_TOAST", toastId: t });
  return Mt({
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
function Ud() {
  const [e, t] = i.useState(tn);
  return i.useEffect(() => (en.push(t), () => {
    const n = en.indexOf(t);
    n > -1 && en.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Gd,
    dismiss: (n) => Mt({ type: "DISMISS_TOAST", toastId: n })
  };
}
function qc() {
  const { toasts: e } = Ud();
  return /* @__PURE__ */ c(Vd, { children: [
    e.map(function({ id: t, title: n, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(Qo, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ r(Zo, { children: n }),
          o && /* @__PURE__ */ r(ea, { children: o })
        ] }),
        s,
        /* @__PURE__ */ r(Jo, {})
      ] }, t);
    }),
    /* @__PURE__ */ r(Yo, {})
  ] });
}
const ta = Le(
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
), Xd = i.forwardRef(({ className: e, variant: t, size: n, ...o }, s) => /* @__PURE__ */ r(
  uo.Root,
  {
    ref: s,
    className: a(ta({ variant: t, size: n, className: e })),
    ...o
  }
));
Xd.displayName = uo.Root.displayName;
const na = i.createContext({
  size: "default",
  variant: "default"
}), Yd = i.forwardRef(({ className: e, variant: t, size: n, children: o, ...s }, l) => /* @__PURE__ */ r(
  cn.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ r(na.Provider, { value: { variant: t, size: n }, children: o })
  }
));
Yd.displayName = cn.Root.displayName;
const Qd = i.forwardRef(({ className: e, children: t, variant: n, size: o, ...s }, l) => {
  const d = i.useContext(na);
  return /* @__PURE__ */ r(
    cn.Item,
    {
      ref: l,
      className: a(
        ta({
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
Qd.displayName = cn.Item.displayName;
export {
  hc as Accordion,
  _s as AccordionContent,
  Is as AccordionItem,
  Ds as AccordionTrigger,
  Es as Alert,
  Fs as AlertDescription,
  xc as AlertDialog,
  $s as AlertDialogAction,
  qs as AlertDialogCancel,
  Vs as AlertDialogContent,
  Bs as AlertDialogDescription,
  Hs as AlertDialogFooter,
  js as AlertDialogHeader,
  mo as AlertDialogOverlay,
  Os as AlertDialogPortal,
  Ws as AlertDialogTitle,
  bc as AlertDialogTrigger,
  Ls as AlertTitle,
  Ks as AsyncSelect,
  yc as AsyncSelectForm,
  Us as Avatar,
  Ys as AvatarFallback,
  Xs as AvatarImage,
  On as Badge,
  Js as Breadcrumb,
  oi as BreadcrumbEllipsis,
  ei as BreadcrumbItem,
  ti as BreadcrumbLink,
  Zs as BreadcrumbList,
  ni as BreadcrumbPage,
  ri as BreadcrumbSeparator,
  le as Button,
  go as Calendar,
  Ui as CalendarDayButton,
  Xi as Card,
  Zi as CardContent,
  Ji as CardDescription,
  el as CardFooter,
  Yi as CardHeader,
  Qi as CardTitle,
  tl as Carousel,
  nl as CarouselContent,
  rl as CarouselItem,
  al as CarouselNext,
  ol as CarouselPrevious,
  il as ChartContainer,
  Cc as ChartLegend,
  cl as ChartLegendContent,
  ll as ChartStyle,
  Nc as ChartTooltip,
  dl as ChartTooltipContent,
  ft as Checkbox,
  ul as Combobox,
  Sc as ComboboxForm,
  Ot as Command,
  Rc as CommandDialog,
  pn as CommandEmpty,
  Vt as CommandGroup,
  mn as CommandInput,
  Qe as CommandItem,
  fn as CommandList,
  yo as CommandSeparator,
  ml as CommandShortcut,
  jt as DEFAULT_FLASH_TABLE_LABELS,
  gl as DatePicker,
  kc as DatePickerForm,
  ko as DateTimePicker,
  Pc as DateTimePickerForm,
  Po as Dialog,
  zc as DialogClose,
  Kn as DialogContent,
  Io as DialogDescription,
  Dl as DialogFooter,
  Mo as DialogHeader,
  zo as DialogOverlay,
  Il as DialogPortal,
  To as DialogTitle,
  Tl as DialogTrigger,
  Mc as DropdownMenu,
  Fl as DropdownMenuCheckboxItem,
  El as DropdownMenuContent,
  Ic as DropdownMenuGroup,
  Ll as DropdownMenuItem,
  Vl as DropdownMenuLabel,
  Dc as DropdownMenuPortal,
  Ac as DropdownMenuRadioGroup,
  Ol as DropdownMenuRadioItem,
  jl as DropdownMenuSeparator,
  Hl as DropdownMenuShortcut,
  _c as DropdownMenuSub,
  Al as DropdownMenuSubContent,
  _l as DropdownMenuSubTrigger,
  Tc as DropdownMenuTrigger,
  nd as FlashTable,
  Yl as FlashTableColumnManager,
  Jl as FlashTableContextMenu,
  Zl as FlashTableHeaderCell,
  Ul as FlashTableHelpDialog,
  Ql as FlashTableToolbar,
  Ec as Form,
  xt as FormControl,
  jo as FormDescription,
  rt as FormField,
  We as FormItem,
  Be as FormLabel,
  $e as FormMessage,
  Lc as Heading,
  xn as Input,
  Fc as InputForm,
  yn as Label,
  md as ListItem,
  fd as MaskedInput,
  gd as MultiSelect,
  ad as NavigationMenu,
  dd as NavigationMenuContent,
  ud as NavigationMenuIndicator,
  Oc as NavigationMenuItem,
  cd as NavigationMenuLink,
  sd as NavigationMenuList,
  ld as NavigationMenuTrigger,
  Ho as NavigationMenuViewport,
  hd as Pagination,
  xd as PaginationContent,
  wd as PaginationEllipsis,
  bd as PaginationItem,
  Xn as PaginationLink,
  vd as PaginationNext,
  yd as PaginationPrevious,
  gt as Popover,
  nt as PopoverContent,
  ht as PopoverTrigger,
  Nd as RadioGroup,
  Cd as RadioGroupItem,
  Sd as ScrollArea,
  Wo as ScrollBar,
  Bo as Select,
  Qn as SelectContent,
  jc as SelectForm,
  Vc as SelectGroup,
  sn as SelectItem,
  Rd as SelectLabel,
  Ko as SelectScrollDownButton,
  qo as SelectScrollUpButton,
  kd as SelectSeparator,
  Yn as SelectTrigger,
  $o as SelectValue,
  Go as Separator,
  Hc as Sheet,
  Bc as SheetClose,
  Md as SheetContent,
  _d as SheetDescription,
  Id as SheetFooter,
  Td as SheetHeader,
  Uo as SheetOverlay,
  Pd as SheetPortal,
  Dd as SheetTitle,
  Wc as SheetTrigger,
  Do as Skeleton,
  Ad as Switch,
  Wl as Table,
  Ao as TableBody,
  Bl as TableCaption,
  Ue as TableCell,
  Eo as TableFooter,
  Lo as TableHead,
  _o as TableHeader,
  je as TableRow,
  $c as Tabs,
  Fd as TabsContent,
  Ed as TabsList,
  Ld as TabsTrigger,
  Xo as Textarea,
  Od as TextareaForm,
  Ro as TimePicker,
  Zt as TimePickerInput,
  Qo as Toast,
  Wd as ToastAction,
  Jo as ToastClose,
  ea as ToastDescription,
  Vd as ToastProvider,
  Zo as ToastTitle,
  Yo as ToastViewport,
  qc as Toaster,
  Xd as Toggle,
  Yd as ToggleGroup,
  Qd as ToggleGroupItem,
  Gn as Tooltip,
  hn as TooltipContent,
  $l as TooltipProvider,
  Un as TooltipTrigger,
  Qs as badgeVariants,
  wc as brazillianStates,
  Kl as buildDefaultPinning,
  et as buttonVariants,
  a as cn,
  zt as extractColumnId,
  lt as extractWidthFromClassName,
  an as getColumnLabel,
  _t as isActionsColumnDef,
  Fo as isActionsColumnId,
  bn as isExpansionColumnId,
  dt as isSameArray,
  Dt as isSelectionColumnId,
  Me as isSystemLeftColumnId,
  vc as mask,
  id as navigationMenuTriggerStyle,
  Dn as parseColumnWidth,
  Dr as reconcileColumnOrder,
  Kd as reducer,
  ql as resolveStorageScope,
  Gd as toast,
  ta as toggleVariants,
  ed as useFlashTablePersistence,
  vn as useFormField,
  Ud as useToast
};
