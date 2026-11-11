import { jsx as n, jsxs as c, Fragment as je } from "react/jsx-runtime";
import * as i from "react";
import kt, { useState as se, useEffect as ye, useCallback as ie, useImperativeHandle as Sn, useRef as ke, isValidElement as Ma, useMemo as ce, useLayoutEffect as Da, Fragment as _a } from "react";
import * as Be from "@radix-ui/react-accordion";
import { ChevronDown as We, ChevronsUpDown as Rn, Loader2 as nt, Check as Pt, MoreHorizontal as kn, ChevronRight as zt, ChevronLeftIcon as Aa, ChevronRightIcon as La, ChevronDownIcon as Ea, ArrowLeft as Oa, ArrowRight as Va, Search as Pn, CalendarIcon as ja, Clock as Fa, Calendar as Ha, X as Tt, Circle as zn, HelpCircle as mn, Mouse as Ba, Columns3 as Tn, Pin as Yt, MoveHorizontal as Wa, ArrowUpDown as In, Rows3 as Tr, RotateCcw as Qt, MousePointerClick as $a, Eye as Ir, ChevronLeft as Mn, AlignJustify as Dn, Rows2 as _n, GripVertical as An, Lock as Ln, Info as qa, ArrowUp as Ka, ArrowDown as Ua, XCircle as fn, XIcon as Ga, Plus as Xa, CheckIcon as pn, WandSparkles as Ya, ChevronUp as Qa } from "lucide-react";
import { clsx as Ja } from "clsx";
import { twMerge as Za } from "tailwind-merge";
import { cva as Re } from "class-variance-authority";
import * as le from "@radix-ui/react-alert-dialog";
import { useFormContext as Ie, FormProvider as es, Controller as ts } from "react-hook-form";
import * as st from "@radix-ui/react-avatar";
import { Slot as En } from "@radix-ui/react-slot";
import { Link as rs } from "react-router-dom";
import { TZDate as xe, getDefaultClassNames as On, DayPicker as ns } from "react-day-picker";
import os from "embla-carousel-react";
import * as Mr from "recharts";
import * as Nr from "@radix-ui/react-checkbox";
import { Command as ue } from "cmdk";
import { format as Vn, parse as jn, isValid as Fn, add as as } from "date-fns";
import * as Ct from "@radix-ui/react-popover";
import * as $ from "@radix-ui/react-dialog";
import * as K from "@radix-ui/react-dropdown-menu";
import { useSensors as Hn, useSensor as qt, PointerSensor as Bn, KeyboardSensor as Wn, DndContext as $n, closestCenter as qn } from "@dnd-kit/core";
import { restrictToVerticalAxis as ss, restrictToHorizontalAxis as is } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as Kn, SortableContext as Un, verticalListSortingStrategy as ls, arrayMove as rt, useSortable as Gn, horizontalListSortingStrategy as ds } from "@dnd-kit/sortable";
import { flexRender as Cr, useReactTable as cs, getExpandedRowModel as us, getSortedRowModel as ms, getCoreRowModel as fs } from "@tanstack/react-table";
import * as ot from "@radix-ui/react-tooltip";
import { CSS as Xn } from "@dnd-kit/utilities";
import * as Yn from "@radix-ui/react-label";
import * as me from "@radix-ui/react-navigation-menu";
import * as St from "@radix-ui/react-radio-group";
import * as Fe from "@radix-ui/react-scroll-area";
import * as Q from "@radix-ui/react-select";
import * as Qn from "@radix-ui/react-separator";
import * as Sr from "@radix-ui/react-switch";
import * as qe from "@radix-ui/react-tabs";
import * as ge from "@radix-ui/react-toast";
import * as Jn from "@radix-ui/react-toggle";
import * as Jt from "@radix-ui/react-toggle-group";
function a(...e) {
  return Za(Ja(e));
}
const Zd = Be.Root, ps = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Be.Item,
  {
    ref: r,
    className: a("border-b", e),
    ...t
  }
));
ps.displayName = "AccordionItem";
const gs = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(Be.Header, { className: "flex", children: /* @__PURE__ */ c(
  Be.Trigger,
  {
    ref: o,
    className: a(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(We, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
gs.displayName = Be.Trigger.displayName;
const hs = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(
  Be.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ n("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
hs.displayName = Be.Content.displayName;
const bs = Re(
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
), xs = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(bs({ variant: t }), e),
    ...r
  }
));
xs.displayName = "Alert";
const ys = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "h5",
  {
    ref: r,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
ys.displayName = "AlertTitle";
const ws = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
ws.displayName = "AlertDescription";
const ec = le.Root, tc = le.Trigger, vs = le.Portal, Zn = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  le.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Zn.displayName = le.Overlay.displayName;
const Ns = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(vs, { children: [
  /* @__PURE__ */ n(Zn, {}),
  /* @__PURE__ */ n(
    le.Content,
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
Ns.displayName = le.Content.displayName;
const Cs = ({
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
Cs.displayName = "AlertDialogHeader";
const Ss = ({
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
Ss.displayName = "AlertDialogFooter";
const Rs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  le.Title,
  {
    ref: r,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
Rs.displayName = le.Title.displayName;
const ks = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  le.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
ks.displayName = le.Description.displayName;
const Ps = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  le.Action,
  {
    ref: r,
    className: a($e(), e),
    ...t
  }
));
Ps.displayName = le.Action.displayName;
const zs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  le.Cancel,
  {
    ref: r,
    className: a(
      $e({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
zs.displayName = le.Cancel.displayName;
function Ts({
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
  noResultsMessage: C,
  clearable: _ = !0,
  error: R
}) {
  const [f, p] = se(!1), [v, y] = se(u), [h, I] = se(null), [z, b] = se("");
  ye(() => {
    y(u);
  }, [u]), ye(() => {
    if (u && e.length > 0) {
      const T = e.find((M) => o(M) === u);
      T && I(T);
    }
  }, [u, e, o]);
  const A = ie(
    (T) => {
      const M = _ && T === v ? "" : T;
      u && y(M), I(
        e.find((D) => o(D) === M) || null
      ), g(M), p(!1);
    },
    [v, g, _, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ n(lr, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(it, { open: f, onOpenChange: p, children: [
      /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
        re,
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
            /* @__PURE__ */ n("div", { className: "truncate", children: u && h ? s(h) : d }),
            /* @__PURE__ */ n(Rn, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Ke, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(It, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ n(
            er,
            {
              placeholder: "Buscar",
              value: z,
              onValueChange: (T) => {
                b(T), m(T);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ n("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ n(nt, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(tr, { children: [
          t && e.length === 0 && /* @__PURE__ */ n(Is, {}),
          !t && e.length === 0 && /* @__PURE__ */ n(rr, { children: /* @__PURE__ */ n("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: C ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ n(Mt, { children: e.map((T) => /* @__PURE__ */ c(
            He,
            {
              value: o(T),
              onSelect: A,
              children: [
                /* @__PURE__ */ n(
                  Pt,
                  {
                    className: a(
                      "mr-2 size-4 shrink-0",
                      v === o(T) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ n("div", { className: "w-0 flex-1", children: r(T) })
              ]
            },
            o(T)
          )) })
        ] })
      ] }) })
    ] }),
    !!R && /* @__PURE__ */ n("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: R })
  ] });
}
function Is() {
  return /* @__PURE__ */ n(Mt, { children: [1, 2, 3].map((e) => /* @__PURE__ */ n(He, { disabled: !0, className: "p-0", children: /* @__PURE__ */ n(wo, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const rc = ({
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
  const { control: P } = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      name: e,
      control: P,
      render: ({ field: k }) => /* @__PURE__ */ c(Me, { children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(
          Ts,
          {
            options: s,
            value: k.value,
            placeholder: l,
            onSearchChange: d,
            getDisplayValue: u,
            getOptionValue: g,
            renderOption: m,
            onChange: (C) => k.onChange(C),
            isLoading: o,
            disabled: r
          }
        ),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
}, Ms = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  st.Root,
  {
    ref: r,
    className: a(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Ms.displayName = st.Root.displayName;
const Ds = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  st.Image,
  {
    ref: r,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
Ds.displayName = st.Image.displayName;
const _s = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  st.Fallback,
  {
    ref: r,
    className: a(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
_s.displayName = st.Fallback.displayName;
const As = Re(
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
function Rr({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ n("div", { className: a(As({ variant: t }), e), ...r });
}
const Ls = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ n("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Ls.displayName = "Breadcrumb";
const Es = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Es.displayName = "BreadcrumbList";
const Os = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "li",
  {
    ref: r,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Os.displayName = "BreadcrumbItem";
const Vs = i.forwardRef(({ asChild: e, className: t, ...r }, o) => /* @__PURE__ */ n(
  e ? En : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...r
  }
));
Vs.displayName = "BreadcrumbLink";
const js = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
js.displayName = "BreadcrumbPage";
const Fs = ({
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
    children: e ?? /* @__PURE__ */ n(zt, {})
  }
);
Fs.displayName = "BreadcrumbSeparator";
const Hs = ({
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
      /* @__PURE__ */ n(kn, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More" })
    ]
  }
);
Hs.displayName = "BreadcrumbElipssis";
const Bs = {
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
}, $e = Re(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: Bs,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), re = i.forwardRef(({ className: e, variant: t, size: r, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ n(je, { children: s ? /* @__PURE__ */ n(
  rs,
  {
    className: a($e({ variant: t, size: r, className: e })),
    ref: d,
    to: s,
    ...l
  }
) : /* @__PURE__ */ n(
  "button",
  {
    className: a($e({ variant: t, size: r, className: e })),
    ref: d,
    disabled: o,
    ...l
  }
) }));
re.displayName = "Button";
const Ws = "(##) ####-####", $s = "(##) #####-####", qs = "#####-###", Ks = "###.###.###-##", Us = "##.###.###/####-##", Gs = "###########", Xs = "##.###.###-#", Ys = "AAA#A##", Qs = "###########", Js = "##############", eo = (e, t) => {
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
}, nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: $s,
  CNH_MASK: Gs,
  CNPJ_MASK: Us,
  CPF_MASK: Ks,
  PHONE_MASK: Ws,
  PLATE_MASK: Ys,
  RENAVAM_MASK: Qs,
  RG_MASK: Xs,
  RNTRC_MASK: Js,
  ZIP_CODE_MASK: qs,
  formatMask: eo
}, Symbol.toStringTag, { value: "Module" })), oc = [
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
function yr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function xt(e) {
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
function yt(e) {
  return (t, r = {}) => {
    const o = r.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], l = t.match(s);
    if (!l)
      return null;
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(u) ? ei(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      Zs(u, (k) => k.test(d))
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
function Zs(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function ei(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ti(e) {
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
const ri = {
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
}, ni = (e, t, r) => {
  let o;
  const s = ri[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + o : "há " + o : o;
}, oi = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, ai = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, si = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ii = {
  date: yr({
    formats: oi,
    defaultWidth: "full"
  }),
  time: yr({
    formats: ai,
    defaultWidth: "full"
  }),
  dateTime: yr({
    formats: si,
    defaultWidth: "full"
  })
}, li = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, di = (e, t, r, o) => {
  const s = li[e];
  return typeof s == "function" ? s(t) : s;
}, ci = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, ui = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, mi = {
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
}, fi = {
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
}, pi = {
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
}, gi = {
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
}, hi = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, bi = {
  ordinalNumber: hi,
  era: xt({
    values: ci,
    defaultWidth: "wide"
  }),
  quarter: xt({
    values: ui,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: xt({
    values: mi,
    defaultWidth: "wide"
  }),
  day: xt({
    values: fi,
    defaultWidth: "wide"
  }),
  dayPeriod: xt({
    values: pi,
    defaultWidth: "wide",
    formattingValues: gi,
    defaultFormattingWidth: "wide"
  })
}, xi = /^(\d+)[ºªo]?/i, yi = /\d+/i, wi = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, vi = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Ni = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Ci = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Si = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Ri = {
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
}, ki = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Pi = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, zi = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Ti = {
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
}, Ii = {
  ordinalNumber: ti({
    matchPattern: xi,
    parsePattern: yi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: wi,
    defaultMatchWidth: "wide",
    parsePatterns: vi,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: Ni,
    defaultMatchWidth: "wide",
    parsePatterns: Ci,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: Si,
    defaultMatchWidth: "wide",
    parsePatterns: Ri,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: ki,
    defaultMatchWidth: "wide",
    parsePatterns: Pi,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: zi,
    defaultMatchWidth: "any",
    parsePatterns: Ti,
    defaultParseWidth: "any"
  })
}, to = {
  code: "pt-BR",
  formatDistance: ni,
  formatLong: ii,
  formatRelative: di,
  localize: bi,
  match: Ii,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ro({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = to,
  formatters: d,
  components: u,
  startMonth: g,
  endMonth: m,
  timeZone: P = "America/Sao_Paulo",
  ...k
}) {
  const C = new xe(/* @__PURE__ */ new Date(), P), _ = new xe(C.getFullYear() - 100, 0, 1, P), R = new xe(C.getFullYear() + 10, 11, 31, P), f = On();
  return /* @__PURE__ */ n(
    ns,
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
      startMonth: g ?? _,
      endMonth: m ?? R,
      locale: l,
      formatters: {
        formatMonthDropdown: (p) => p.toLocaleString(l?.code, { month: "short" }),
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
          $e({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          f.button_previous
        ),
        button_next: a(
          $e({ variant: s }),
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
        Root: ({ className: p, rootRef: v, ...y }) => /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "calendar",
            ref: v,
            className: a(p),
            ...y
          }
        ),
        Chevron: ({ className: p, orientation: v, ...y }) => v === "left" ? /* @__PURE__ */ n(Aa, { className: a("cn-rtl-flip size-4", p), ...y }) : v === "right" ? /* @__PURE__ */ n(La, { className: a("cn-rtl-flip size-4", p), ...y }) : /* @__PURE__ */ n(Ea, { className: a("size-4", p), ...y }),
        DayButton: ({ ...p }) => /* @__PURE__ */ n(Mi, { locale: l, ...p }),
        WeekNumber: ({ children: p, ...v }) => /* @__PURE__ */ n("td", { ...v, children: /* @__PURE__ */ n("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...u
      },
      ...k
    }
  );
}
function Mi({
  className: e,
  day: t,
  modifiers: r,
  locale: o,
  ...s
}) {
  const l = On(), d = i.useRef(null);
  return i.useEffect(() => {
    r.focused && d.current?.focus();
  }, [r.focused]), /* @__PURE__ */ n(
    re,
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
const Di = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Di.displayName = "Card";
const _i = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
_i.displayName = "CardHeader";
const Ai = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Ai.displayName = "CardTitle";
const Li = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "p",
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Li.displayName = "CardDescription";
const Ei = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { ref: r, className: a("p-4", e), ...t }));
Ei.displayName = "CardContent";
const Oi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
Oi.displayName = "CardFooter";
const no = i.createContext(null);
function Zt() {
  const e = i.useContext(no);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Vi = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [g, m] = os(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [P, k] = i.useState(!1), [C, _] = i.useState(!1), R = i.useCallback((y) => {
      y && (k(y.canScrollPrev()), _(y.canScrollNext()));
    }, []), f = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), p = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), v = i.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), f()) : y.key === "ArrowRight" && (y.preventDefault(), p());
      },
      [f, p]
    );
    return i.useEffect(() => {
      !m || !r || r(m);
    }, [m, r]), i.useEffect(() => {
      if (m)
        return R(m), m.on("reInit", R), m.on("select", R), () => {
          m?.off("select", R);
        };
    }, [m, R]), /* @__PURE__ */ n(
      no.Provider,
      {
        value: {
          carouselRef: g,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: f,
          scrollNext: p,
          canScrollPrev: P,
          canScrollNext: C
        },
        children: /* @__PURE__ */ n(
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
Vi.displayName = "Carousel";
const ji = i.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: o, orientation: s } = Zt();
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
ji.displayName = "CarouselContent";
const Fi = i.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: o } = Zt();
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
Fi.displayName = "CarouselItem";
const Hi = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = Zt();
  return /* @__PURE__ */ c(
    re,
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
        /* @__PURE__ */ n(Oa, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Hi.displayName = "CarouselPrevious";
const Bi = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = Zt();
  return /* @__PURE__ */ c(
    re,
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
        /* @__PURE__ */ n(Va, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Bi.displayName = "CarouselNext";
const Wi = { light: "", dark: ".dark" }, oo = i.createContext(null);
function ao() {
  const e = i.useContext(oo);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const $i = i.forwardRef(({ id: e, className: t, children: r, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ n(oo.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
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
        /* @__PURE__ */ n(qi, { id: u, config: o }),
        /* @__PURE__ */ n(Mr.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
$i.displayName = "Chart";
const qi = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return r.length ? /* @__PURE__ */ n(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Wi).map(
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
}, ac = Mr.Tooltip, Ki = i.forwardRef(
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
    labelKey: C
  }, _) => {
    const { config: R } = ao(), f = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [v] = t;
      if (!v)
        return null;
      const y = `${C || v.dataKey || v.name || "value"}`, h = kr(R, v, y), I = !C && typeof d == "string" ? R[d]?.label || d : h?.label;
      return u ? /* @__PURE__ */ n("div", { className: a("font-medium", g), children: u(I, t) }) : I ? /* @__PURE__ */ n("div", { className: a("font-medium", g), children: I }) : null;
    }, [
      d,
      u,
      t,
      s,
      g,
      R,
      C
    ]);
    if (!e || !t?.length)
      return null;
    const p = t.length === 1 && o !== "dot";
    return /* @__PURE__ */ c(
      "div",
      {
        ref: _,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          p ? null : f,
          /* @__PURE__ */ n("div", { className: "grid gap-1.5", children: t.map((v, y) => {
            if (!v)
              return null;
            const h = `${k || v.dataKey || v.name || "value"}`, I = kr(R, v, h), z = P || v.payload.fill || v.color;
            return /* @__PURE__ */ n(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && v?.value !== void 0 && v.name ? m(v.value, v.name, v, y, v.payload) : /* @__PURE__ */ c(je, { children: [
                  I?.icon ? /* @__PURE__ */ n(I.icon, {}) : !l && /* @__PURE__ */ n(
                    "div",
                    {
                      className: a(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": p && o === "dashed"
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
                        p ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                          p ? f : null,
                          /* @__PURE__ */ n("span", { className: "text-muted-foreground", children: I?.label || v.name })
                        ] }),
                        v.value && /* @__PURE__ */ n("span", { className: "font-mono font-medium tabular-nums text-foreground", children: v.value.toLocaleString() })
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
Ki.displayName = "ChartTooltip";
const sc = Mr.Legend, Ui = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = ao();
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
          const g = `${s || u.dataKey || "value"}`, m = kr(d, u, g);
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
Ui.displayName = "ChartLegend";
function kr(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : o && r in o && typeof o[r] == "string" && (s = o[r]), s in e ? e[s] : e[r];
}
const at = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Nr.Root,
  {
    ref: r,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      Nr.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ n(Pt, { className: "size-4 h-full" })
      }
    )
  }
));
at.displayName = Nr.Root.displayName;
function ic({
  name: e,
  label: t,
  options: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: g, setValue: m } = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: g,
      name: e,
      render: ({ field: P }) => /* @__PURE__ */ c(Me, { children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(
          Gi,
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
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
}
function Gi({
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
  const [P, k] = se(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ n(lr, { children: e }),
    /* @__PURE__ */ c(it, { open: P, onOpenChange: k, children: [
      /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
        re,
        {
          variant: "outline",
          disabled: g,
          className: a(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !r && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ n("div", { className: "truncate", children: r ? t.find((C) => C.value === r)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ n(nt, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ n(Rn, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Ke, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(It, { children: [
        /* @__PURE__ */ n(er, { placeholder: l }),
        /* @__PURE__ */ c(tr, { children: [
          /* @__PURE__ */ n(rr, { children: d }),
          /* @__PURE__ */ n(Mt, { children: t.map((C) => /* @__PURE__ */ c(
            He,
            {
              value: C.label,
              onSelect: () => {
                r === C.value ? o(void 0) : o(C.value), k(!1);
              },
              children: [
                /* @__PURE__ */ n(
                  Pt,
                  {
                    className: a(
                      "mr-2 size-4",
                      r === C.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ n("div", { className: "w-0 flex-1", children: C.label })
              ]
            },
            C.value
          )) })
        ] })
      ] }) })
    ] }),
    !!u && /* @__PURE__ */ n("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: u })
  ] });
}
const It = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ue,
  {
    ref: r,
    className: a(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
It.displayName = ue.displayName;
const lc = ({ children: e, ...t }) => /* @__PURE__ */ n(go, { ...t, children: /* @__PURE__ */ n(_r, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ n(It, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), er = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ n(Pn, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ n(
    ue.Input,
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
er.displayName = ue.Input.displayName;
const tr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ue.List,
  {
    ref: r,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
tr.displayName = ue.List.displayName;
const rr = i.forwardRef((e, t) => /* @__PURE__ */ n(
  ue.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
rr.displayName = ue.Empty.displayName;
const Mt = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ue.Group,
  {
    ref: r,
    className: a(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Mt.displayName = ue.Group.displayName;
const so = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ue.Separator,
  {
    ref: r,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
so.displayName = ue.Separator.displayName;
const He = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ue.Item,
  {
    ref: r,
    className: a(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
He.displayName = ue.Item.displayName;
const Xi = ({
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
Xi.displayName = "CommandShortcut";
const it = Ct.Root, lt = Ct.Trigger, Ke = i.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...o }, s) => /* @__PURE__ */ n(Ct.Portal, { children: /* @__PURE__ */ n(
  Ct.Content,
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
Ke.displayName = Ct.Content.displayName;
function Yi(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (r += "/"), r += t[o];
  return r;
}
function Qi(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (r += "/"), o === 8 && (r += " - "), (o === 10 || o === 12) && (r += "/"), r += t[o];
  return r;
}
function Kt(e) {
  if (e.length < 10) return null;
  const t = jn(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Fn(t) ? t : null;
}
function gn(e) {
  const t = e.split(" - "), r = Kt(t[0] ?? "");
  if (!r) return null;
  const o = t[1] ? Kt(t[1]) : void 0;
  return { from: r, to: o ?? void 0 };
}
function jt(e) {
  return Vn(e, "dd/MM/yyyy");
}
function Ft(e, t) {
  if (!e) return "";
  if (t === "range") {
    const r = e;
    return r.from ? r.to ? `${jt(r.from)} - ${jt(r.to)}` : jt(r.from) : "";
  }
  return jt(e);
}
function hn(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function Ji({
  value: e,
  onChange: t,
  disabled: r,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [g, m] = i.useState(
    hn(e)
  ), [P, k] = i.useState(
    Ft(e, s)
  ), [C, _] = i.useState(!1), R = i.useRef(null), f = i.useRef(
    Ft(e, s)
  ), p = i.useRef(!1);
  i.useEffect(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    const z = Ft(e, s);
    u(e), k(z), f.current = z;
    const b = hn(e);
    b && m(b);
  }, [e]);
  function v(z) {
    p.current = !0;
    const b = Ft(z, s);
    u(z), k(b), f.current = b, t?.(z), s !== "range" && _(!1);
  }
  function y(z) {
    const b = z.target.value;
    if (b.replace(/\D/g, "") === "") {
      k(""), f.current = "", p.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const A = z.target.selectionStart ?? b.length, T = b.slice(0, A).replace(/\D/g, "").length, M = s === "range" ? Qi(b) : Yi(b);
    if (k(M), requestAnimationFrame(() => {
      if (R.current) {
        let D = 0, q = M.length;
        for (let G = 0; G < M.length; G++)
          if (/\d/.test(M[G]) && D++, D === T) {
            q = G + 1;
            break;
          }
        R.current.setSelectionRange(q, q);
      }
    }), s === "range") {
      const D = gn(M);
      D && (p.current = !0, u(D), f.current = M, D.from && m(D.from), t?.(D));
    } else {
      const D = Kt(M);
      D && (p.current = !0, u(D), m(D), f.current = M, t?.(D));
    }
  }
  function h() {
    !(s === "range" ? gn(P) !== null : Kt(P) !== null) && P !== "" && k(f.current);
  }
  const I = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(it, { open: C, onOpenChange: _, children: [
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
              onChange: y,
              onBlur: h,
              placeholder: I,
              disabled: r,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ n(lt, { asChild: !0, disabled: r, children: /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              disabled: r,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ n(ja, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ n(Ke, { className: "w-auto p-0", children: /* @__PURE__ */ n(
      ro,
      {
        mode: s,
        selected: d,
        onSelect: v,
        disabled: o,
        month: g,
        onMonthChange: m,
        timeZone: "America/Sao_Paulo",
        ...l
      }
    ) })
  ] });
}
const dc = ({
  name: e,
  label: t,
  ...r
}) => {
  const o = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Me, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(
          Ji,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
};
function Zi(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function el(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function tl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function nr(e, { max: t, min: r = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = r), s < r && (s = t)) : (s > t && (s = t), s < r && (s = r)), s.toString().padStart(2, "0"));
}
function io(e) {
  return Zi(e) ? e : nr(e, { max: 23 });
}
function lo(e) {
  return el(e) ? e : nr(e, { min: 1, max: 12 });
}
function Ut(e) {
  return tl(e) ? e : nr(e, { max: 59 });
}
function Dr(e, { min: t, max: r, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, nr(String(s), { min: t, max: r, loop: !0 }));
}
function rl(e, t) {
  return Dr(e, { min: 0, max: 23, step: t });
}
function nl(e, t) {
  return Dr(e, { min: 1, max: 12, step: t });
}
function bn(e, t) {
  return Dr(e, { min: 0, max: 59, step: t });
}
function ol(e, t) {
  const r = Ut(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function al(e, t) {
  const r = Ut(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function sl(e, t) {
  const r = io(t);
  return e.setHours(parseInt(r, 10)), e;
}
function il(e, t, r) {
  const o = parseInt(lo(t), 10), s = cl(o, r);
  return e.setHours(s), e;
}
function Pr(e, t, r, o) {
  switch (r) {
    case "minutes":
      return ol(e, t);
    case "seconds":
      return al(e, t);
    case "hours":
      return sl(e, t);
    case "12hours":
      return o ? il(e, t, o) : e;
    default:
      return e;
  }
}
function ll(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Ut(String(e.getMinutes()));
    case "seconds":
      return Ut(String(e.getSeconds()));
    case "hours":
      return io(String(e.getHours()));
    case "12hours":
      return lo(String(co(e.getHours())));
    default:
      return "00";
  }
}
function dl(e, t, r) {
  switch (r) {
    case "minutes":
      return bn(e, t);
    case "seconds":
      return bn(e, t);
    case "hours":
      return rl(e, t);
    case "12hours":
      return nl(e, t);
    default:
      return "00";
  }
}
function cl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function co(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function uo(e) {
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
function ul(e) {
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
function ml(e, t) {
  const r = e.replace(/\D/g, ""), o = ul(t);
  let s = "";
  for (let l = 0; l < r.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += r[l];
  return s;
}
function xn(e, t) {
  const r = uo(t);
  if (e.length < r.length) return null;
  const o = jn(e.slice(0, r.length), r, new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Fn(o) ? o : null;
}
function wt(e, t) {
  return Vn(e, uo(t));
}
const mo = i.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, g = (m) => {
      if (t?.(m), r) {
        const P = new xe(r, "America/Sao_Paulo"), k = co(r.getHours());
        o?.(
          Pr(
            P,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ n("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Mo,
      {
        defaultValue: e,
        onValueChange: (m) => g(m),
        children: [
          /* @__PURE__ */ n(
            Or,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ n(Do, {})
            }
          ),
          /* @__PURE__ */ c(Vr, { children: [
            /* @__PURE__ */ n(Xt, { value: "AM", children: "AM" }),
            /* @__PURE__ */ n(Xt, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
mo.displayName = "TimePeriodSelect";
const Bt = i.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: r,
    id: o,
    name: s,
    date: l = (() => {
      const f = new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return f.setHours(0, 0, 0, 0), f;
    })(),
    onDateChange: d,
    onChange: u,
    onKeyDown: g,
    picker: m,
    period: P,
    onLeftFocus: k,
    onRightFocus: C,
    ..._
  }, R) => {
    const [f, p] = i.useState(!1), [v, y] = i.useState("0");
    i.useEffect(() => {
      if (f) {
        const b = setTimeout(() => {
          p(!1);
        }, 2e3);
        return () => clearTimeout(b);
      }
    }, [f]);
    const h = i.useMemo(() => ll(l, m), [l, m]), I = (b) => m === "12hours" && f && h.slice(1, 2) === "1" && v === "0" ? `0${b}` : f ? h.slice(1, 2) + b : `0${b}`, z = (b) => {
      if (b.key !== "Tab") {
        if (b.preventDefault(), b.key === "ArrowRight" && C?.(), b.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(b.key)) {
          const A = b.key === "ArrowUp" ? 1 : -1, T = dl(h, A, m);
          f && p(!1);
          const M = l ? new xe(l, "America/Sao_Paulo") : new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Pr(M, T, m, P));
        }
        if (b.key >= "0" && b.key <= "9") {
          m === "12hours" && y(b.key);
          const A = I(b.key);
          f && C?.(), p((M) => !M);
          const T = l ? new xe(l, "America/Sao_Paulo") : new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Pr(T, A, m, P));
        }
      }
    };
    return /* @__PURE__ */ n(
      ar,
      {
        ref: R,
        id: o || m,
        name: s || m,
        className: a(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || h,
        onChange: (b) => {
          b.preventDefault(), u?.(b);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (b) => {
          g?.(b), z(b);
        },
        ..._
      }
    );
  }
);
Bt.displayName = "TimePickerInput";
const fo = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), g = i.useRef(null), [m, P] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return Sn(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: g.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ n("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ n(Fa, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ n(
        Bt,
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
      (o === "minute" || o === "second") && /* @__PURE__ */ c(je, { children: [
        ":",
        /* @__PURE__ */ n(
          Bt,
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
      o === "second" && /* @__PURE__ */ c(je, { children: [
        ":",
        /* @__PURE__ */ n(
          Bt,
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
        mo,
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
fo.displayName = "TimePicker";
const po = i.forwardRef(
  ({
    locale: e = to,
    defaultPopupValue: t = (() => {
      const R = new xe(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
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
    ...C
  }, _) => {
    const [R, f] = i.useState(r ?? t), p = ke(null), v = ke(null), [y, h] = i.useState(r), [I, z] = i.useState(!1), [b, A] = i.useState(
      r ? wt(r, g) : ""
    ), T = ke(!1), M = ke(
      r ? wt(r, g) : ""
    ), D = (x) => {
      if (!x)
        return;
      if (!t) {
        x.setHours(
          R?.getHours() ?? 0,
          R?.getMinutes() ?? 0,
          R?.getSeconds() ?? 0
        ), o?.(x), f(x);
        return;
      }
      const H = (x.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), oe = as(t, {
        days: Math.ceil(H)
      });
      oe.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(oe), f(oe);
    };
    ye(() => {
      if (T.current) {
        T.current = !1;
        return;
      }
      const x = r ? wt(r, g) : "";
      r ? (h(r), f(r)) : h(void 0), A(x), M.current = x;
    }, [r, g]);
    const q = (x) => {
      if (!x)
        return;
      T.current = !0;
      const E = wt(x, g);
      o?.(x), f(x), h(x), A(E), M.current = E;
    };
    Sn(
      _,
      () => ({
        ...p.current,
        value: y
      }),
      [y]
    );
    function G(x) {
      const E = x.target.value;
      if (E.replace(/\D/g, "") === "") {
        A(""), M.current = "", T.current = !0, h(void 0), o?.(void 0);
        return;
      }
      const H = x.target.selectionStart ?? E.length, oe = E.slice(0, H).replace(/\D/g, "").length, he = ml(E, g);
      A(he), requestAnimationFrame(() => {
        if (v.current) {
          let Pe = 0, fe = he.length;
          for (let ve = 0; ve < he.length; ve++)
            if (/\d/.test(he[ve]) && Pe++, Pe === oe) {
              fe = ve + 1;
              break;
            }
          v.current.setSelectionRange(fe, fe);
        }
      });
      const we = xn(he, g);
      we && (T.current = !0, M.current = he, o?.(we), h(we), f(we));
    }
    function Z() {
      !(xn(b, g) !== null) && b !== "" && A(M.current);
    }
    return /* @__PURE__ */ c(it, { open: I, onOpenChange: z, children: [
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
                ref: v,
                value: b,
                onChange: G,
                onBlur: Z,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ n(lt, { asChild: !0, disabled: d, children: /* @__PURE__ */ n(
              "button",
              {
                ref: p,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ n(Ha, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(Ke, { className: "w-auto p-0", children: [
        /* @__PURE__ */ n(
          ro,
          {
            selected: y,
            onSelect: (x) => {
              x && (x.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), q(x));
            },
            onMonthChange: D,
            month: y ?? R,
            locale: e,
            disabled: k,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...C,
            mode: "single"
          }
        ),
        g !== "day" && /* @__PURE__ */ n("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ n(
          fo,
          {
            onChange: (x) => {
              if (T.current = !0, o?.(x), h(x), x) {
                f(x);
                const E = wt(x, g);
                A(E), M.current = E;
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
po.displayName = "DateTimePicker";
const cc = ({
  name: e,
  label: t,
  ...r
}) => {
  const o = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(Me, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(
          po,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
}, go = $.Root, fl = $.Trigger, pl = $.Portal, uc = $.Close, ho = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Overlay,
  {
    ref: r,
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ho.displayName = $.Overlay.displayName;
const _r = i.forwardRef(({ className: e, onClose: t, ...r }, o) => /* @__PURE__ */ c(pl, { children: [
  /* @__PURE__ */ n(ho, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    $.Content,
    {
      ref: o,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ n(
          $.Close,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ c("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ n(Tt, { className: "h-4 w-4" }),
              /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        r.children
      ]
    }
  )
] }));
_r.displayName = $.Content.displayName;
const bo = ({
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
bo.displayName = "DialogHeader";
const gl = ({
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
gl.displayName = "DialogFooter";
const xo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Title,
  {
    ref: r,
    className: a(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
xo.displayName = $.Title.displayName;
const yo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
yo.displayName = $.Description.displayName;
const mc = K.Root, fc = K.Trigger, pc = K.Group, gc = K.Portal, hc = K.Sub, bc = K.RadioGroup, hl = i.forwardRef(({ className: e, inset: t, children: r, ...o }, s) => /* @__PURE__ */ c(
  K.SubTrigger,
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
      /* @__PURE__ */ n(zt, { className: "ml-auto h-4 w-4" })
    ]
  }
));
hl.displayName = K.SubTrigger.displayName;
const bl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  K.SubContent,
  {
    ref: r,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
bl.displayName = K.SubContent.displayName;
const xl = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(K.Portal, { children: /* @__PURE__ */ n(
  K.Content,
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
xl.displayName = K.Content.displayName;
const yl = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  K.Item,
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
yl.displayName = K.Item.displayName;
const wl = i.forwardRef(({ className: e, children: t, checked: r, ...o }, s) => /* @__PURE__ */ c(
  K.CheckboxItem,
  {
    ref: s,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(K.ItemIndicator, { children: /* @__PURE__ */ n(Pt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
wl.displayName = K.CheckboxItem.displayName;
const vl = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  K.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(K.ItemIndicator, { children: /* @__PURE__ */ n(zn, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
vl.displayName = K.RadioItem.displayName;
const Nl = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  K.Label,
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
Nl.displayName = K.Label.displayName;
const Cl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  K.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Cl.displayName = K.Separator.displayName;
const Sl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "span",
  {
    className: a("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Sl.displayName = "DropdownMenuShortcut";
function wo({
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
const Rl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ n(
  "table",
  {
    ref: r,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Rl.displayName = "Table";
const vo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "thead",
  {
    ref: r,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
vo.displayName = "TableHeader";
const No = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "tbody",
  {
    ref: r,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
No.displayName = "TableBody";
const Co = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Co.displayName = "TableFooter";
const Te = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Te.displayName = "TableRow";
const So = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
So.displayName = "TableHead";
const Ve = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Ve.displayName = "TableCell";
const kl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "caption",
  {
    ref: r,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
kl.displayName = "TableCaption";
const Pl = ot.Provider, Ar = ot.Root, Lr = ot.Trigger, or = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(ot.Portal, { children: /* @__PURE__ */ n(
  ot.Content,
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
or.displayName = ot.Content.displayName;
const ar = kt.forwardRef(({ className: e, type: t, ...r }, o) => t === "textarea" ? /* @__PURE__ */ n(
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
)), Dt = {
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
}, yn = {
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
function zl(e) {
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
function vt(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function Rt(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function sr(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function Se(e) {
  return Rt(e) || sr(e);
}
function Ro(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function ir(e, t, r, o, s) {
  return !!(t.meta?.isActions || o && Ro(e) || s && r);
}
function zr(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(zr).filter(Boolean).join(" ").trim() : Ma(e) ? zr(e.props.children) : "";
}
function Gt(e) {
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
      }), s = zr(o);
      if (s)
        return s;
    } catch {
    }
  return yn[e.id] ? yn[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function Tl(e, t) {
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    r.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = vt(l, d), g = l.meta, m = d === e.length - 1;
    if (Se(u)) {
      r.add(u);
      return;
    }
    if (g?.defaultPinned === "left") {
      r.add(u);
      return;
    }
    (g?.defaultPinned === "right" || ir(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(r).sort((l, d) => {
      const u = (g) => Rt(g) ? 0 : sr(g) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function wn(e, t) {
  if (!e || e.length === 0)
    return t;
  const r = new Set(t), o = e.filter((d) => r.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (Rt(d))
        l.unshift(d);
      else if (sr(d)) {
        const g = l.findIndex(Rt);
        l.splice(g + 1, 0, d);
      } else Ro(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function tt(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((r, o) => r === t[o]);
}
const vn = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", Il = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ n(Ba, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c(je, { children: [
      "Segure ",
      /* @__PURE__ */ n("kbd", { className: vn, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ n(Tn, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ n(Yt, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ n(Wa, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ n(In, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c(je, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ n("kbd", { className: vn, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ n(Tr, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ n($a, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c(je, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ n(Qt, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Ml({
  labels: e = Dt
}) {
  return /* @__PURE__ */ c(go, { children: [
    /* @__PURE__ */ c(Ar, { children: [
      /* @__PURE__ */ n(Lr, { asChild: !0, children: /* @__PURE__ */ n(fl, { asChild: !0, children: /* @__PURE__ */ n(
        re,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ n(mn, {})
        }
      ) }) }),
      /* @__PURE__ */ n(or, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(_r, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(bo, { children: [
        /* @__PURE__ */ c(xo, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ n(mn, { className: "size-4 text-primary" }),
          e.helpModalTitle
        ] }),
        /* @__PURE__ */ n(yo, { children: e.helpModalDescription })
      ] }),
      /* @__PURE__ */ n("div", { className: "divide-y divide-border rounded-md border border-border bg-card", children: Il.map((t) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3 p-2.5", children: [
        /* @__PURE__ */ n("div", { className: "size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0", children: t.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ n("p", { className: "text-xs font-semibold text-foreground leading-tight", children: t.title }),
          /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground leading-relaxed", children: t.description })
        ] })
      ] }, t.id)) })
    ] })
  ] });
}
function Dl({
  column: e,
  label: t,
  isActionsCol: r,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  labels: d
}) {
  const u = e.columnDef.meta, m = e.getIsPinned() === "left", P = o && !r && u?.enableReordering !== !1, k = s && !r && e.getCanPin() && u?.enablePinning !== !1, C = l && !r && e.getCanHide(), {
    attributes: _,
    listeners: R,
    setNodeRef: f,
    transform: p,
    transition: v,
    isDragging: y
  } = Gn({
    id: e.id,
    disabled: !P,
    animateLayoutChanges: () => !1
  }), h = {
    transform: Xn.Transform.toString(p),
    transition: v
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: f,
      style: h,
      className: a(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        y ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative" : "hover:bg-muted/70",
        !e.getIsVisible() && "opacity-60"
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
          P ? /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              ..._,
              ...R,
              className: "text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5",
              title: d.columnManagerFooterHint,
              children: /* @__PURE__ */ n(An, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ n("span", { className: "w-4 shrink-0" }),
          C ? /* @__PURE__ */ n(
            at,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (I) => e.toggleVisibility(!!I),
              "aria-label": t
            }
          ) : /* @__PURE__ */ n(at, { checked: !0, disabled: !0, "aria-label": t }),
          /* @__PURE__ */ n(
            "span",
            {
              className: a(
                "truncate font-medium text-foreground cursor-pointer",
                !e.getIsVisible() && "line-through text-muted-foreground"
              ),
              title: t,
              onClick: () => {
                C && e.toggleVisibility(!e.getIsVisible());
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
              /* @__PURE__ */ n(Ln, { className: "size-2.5" }),
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
              Yt,
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
function _l({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: r,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: g = Dt
}) {
  const [m, P] = se(""), k = Hn(
    qt(Bn, {
      activationConstraint: { distance: 4 }
    }),
    qt(Wn, {
      coordinateGetter: Kn
    })
  ), C = e.getAllLeafColumns(), _ = C.filter(
    (y) => !Se(y.id)
  ), R = m.trim().toLowerCase(), f = R ? _.filter(
    (y) => Gt(y).toLowerCase().includes(R)
  ) : _, p = _.filter(
    (y) => !y.getIsVisible()
  ).length, v = (y) => {
    const { active: h, over: I } = y;
    if (!I || h.id === I.id) return;
    const z = String(h.id), b = String(I.id), A = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : C.map((H) => H.id), T = A.indexOf(z), M = A.indexOf(b);
    T !== -1 && M !== -1 && e.setColumnOrder(rt(A, T, M));
    const D = e.getState().columnPinning.left ?? [], q = D.indexOf(z), G = D.indexOf(b);
    q !== -1 && G !== -1 && e.setColumnPinning((H) => ({
      ...H,
      left: rt(H.left ?? [], q, G)
    }));
    const Z = e.getState().columnPinning.right ?? [], x = Z.indexOf(z), E = Z.indexOf(b);
    x !== -1 && E !== -1 && e.setColumnPinning((H) => ({
      ...H,
      right: rt(H.right ?? [], x, E)
    }));
  };
  return /* @__PURE__ */ c(it, { children: [
    /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
      re,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: g.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ n(Tn, {}),
          /* @__PURE__ */ n("span", { children: g.columnsButton }),
          p > 0 && /* @__PURE__ */ c(
            Rr,
            {
              variant: "secondary",
              className: "ml-1 px-1.5 py-0 text-xs font-semibold",
              children: [
                _.length - p,
                "/",
                _.length
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c(Ke, { align: "end", className: "w-76 p-0 shadow-lg", children: [
      /* @__PURE__ */ c("div", { className: "p-2.5 border-b space-y-2 bg-muted/30", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-xs font-semibold text-foreground", children: g.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            p > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => e.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ n(Ir, { className: "size-3" }),
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
                  /* @__PURE__ */ n(Qt, { className: "size-3" }),
                  g.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        _.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ n(Pn, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ n(
            ar,
            {
              value: m,
              onChange: (y) => P(y.target.value),
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
              children: /* @__PURE__ */ n(Tt, { className: "size-3" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: f.length === 0 ? /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground text-center py-4", children: g.noColumnsFound }) : /* @__PURE__ */ n(
        $n,
        {
          sensors: k,
          collisionDetection: qn,
          modifiers: [ss],
          onDragEnd: v,
          children: /* @__PURE__ */ n(
            Un,
            {
              items: f.map((y) => y.id),
              strategy: ls,
              children: f.map((y, h) => {
                const I = h === C.length - 1, z = ir(
                  y.id,
                  y.columnDef,
                  I,
                  t,
                  r
                );
                return /* @__PURE__ */ n(
                  Dl,
                  {
                    column: y,
                    label: Gt(y),
                    isActionsCol: z,
                    enableColumnOrdering: o && !m.trim(),
                    enableColumnPinning: s,
                    enableColumnVisibility: l,
                    labels: g
                  },
                  y.id
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
function Al({
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
  isCustomized: C,
  onReset: _,
  canScrollLeft: R,
  canScrollRight: f,
  onScrollHorizontal: p,
  toolbarLeftContent: v,
  toolbarRightContent: y,
  labels: h = Dt,
  className: I
}) {
  const b = e.getAllLeafColumns().filter(
    (M) => !Se(M.id) && !M.getIsVisible()
  ).length, A = t ?? e.getRowModel().rows.length, T = R || f;
  return /* @__PURE__ */ c(
    "div",
    {
      className: a(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        I
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2 min-w-0", children: [
          r && /* @__PURE__ */ c("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            h.totalRecords,
            " ",
            /* @__PURE__ */ n("strong", { className: "font-semibold text-foreground", children: A.toLocaleString("pt-BR") })
          ] }),
          v,
          b > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => e.toggleAllColumnsVisible(!0),
              title: h.showAllColumns,
              className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ n(Ir, { className: "size-3" }),
                b,
                " ",
                b === 1 ? h.hiddenColumnSingular : h.hiddenColumnPlural
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto shrink-0", children: [
          y,
          T && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ n(
              re,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => p("left"),
                title: h.scrollLeft,
                "aria-label": h.scrollLeft,
                children: /* @__PURE__ */ n(Mn, {})
              }
            ),
            /* @__PURE__ */ n(
              re,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !f,
                onClick: () => p("right"),
                title: h.scrollRight,
                "aria-label": h.scrollRight,
                children: /* @__PURE__ */ n(zt, {})
              }
            )
          ] }),
          o && /* @__PURE__ */ c(
            "div",
            {
              className: "hidden sm:inline-flex items-center gap-1",
              role: "group",
              "aria-label": h.densityLabel,
              children: [
                /* @__PURE__ */ n(
                  re,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: h.densityUltraCompact,
                    children: /* @__PURE__ */ n(Dn, {})
                  }
                ),
                /* @__PURE__ */ n(
                  re,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: h.densityCompact,
                    children: /* @__PURE__ */ n(Tr, {})
                  }
                ),
                /* @__PURE__ */ n(
                  re,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: h.densityComfortable,
                    children: /* @__PURE__ */ n(_n, {})
                  }
                )
              ]
            }
          ),
          (k || m || P) && /* @__PURE__ */ n(
            _l,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: g,
              enableColumnOrdering: m,
              enableColumnPinning: P,
              enableColumnVisibility: k,
              isCustomized: C,
              onReset: _,
              labels: h
            }
          ),
          C && /* @__PURE__ */ c(Ar, { children: [
            /* @__PURE__ */ n(Lr, { asChild: !0, children: /* @__PURE__ */ n(
              re,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: _,
                "aria-label": h.resetToDefaultTooltip,
                children: /* @__PURE__ */ n(Qt, {})
              }
            ) }),
            /* @__PURE__ */ n(or, { side: "bottom", children: h.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ n(Ml, { labels: h })
        ] })
      ]
    }
  );
}
function Ll({
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
  labels: C = Dt
}) {
  const _ = ke(null);
  if (ye(() => {
    if (!e) return;
    const h = (I) => {
      I instanceof KeyboardEvent && I.key !== "Escape" || I instanceof MouseEvent && _.current?.contains(I.target) || t();
    };
    return document.addEventListener("mousedown", h), document.addEventListener("keydown", h), () => {
      document.removeEventListener("mousedown", h), document.removeEventListener("keydown", h);
    };
  }, [e, t]), !e) return null;
  const R = r.getAllLeafColumns(), f = R.filter(
    (h) => !Se(h.id)
  ), p = f.filter(
    (h) => !h.getIsVisible()
  ).length, v = typeof window < "u" ? Math.min(e.x, Math.max(16, window.innerWidth - 272)) : e.x, y = typeof window < "u" ? Math.min(e.y, Math.max(16, window.innerHeight - 380)) : e.y;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: _,
      className: "fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95",
      style: { top: y, left: v },
      children: [
        /* @__PURE__ */ c("div", { className: "px-3 py-2 bg-muted/40 border-b flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: C.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            p > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => r.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer",
                title: C.showAllColumns,
                children: [
                  /* @__PURE__ */ n(Ir, { className: "size-3" }),
                  C.showAllColumns
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
                title: C.resetToDefault,
                children: [
                  /* @__PURE__ */ n(Qt, { className: "size-3" }),
                  C.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ c("div", { className: "px-3 py-1.5 border-b flex items-center justify-between bg-muted/15", children: [
          /* @__PURE__ */ n("span", { className: "text-[11px] text-muted-foreground", children: C.densityLabel }),
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
                title: C.densityUltraCompact,
                children: [
                  /* @__PURE__ */ n(Dn, { className: "size-2.5" }),
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
                title: C.densityCompact,
                children: [
                  /* @__PURE__ */ n(Tr, { className: "size-2.5" }),
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
                title: C.densityComfortable,
                children: [
                  /* @__PURE__ */ n(_n, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: f.map((h, I) => {
          const z = Gt(h), b = h.columnDef.meta, A = I === R.length - 1, T = ir(
            h.id,
            h.columnDef,
            A,
            d,
            u
          ), D = h.getIsPinned() === "left", q = m && !T && h.getCanHide(), G = g && !T && h.getCanPin() && b?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ n(
                    at,
                    {
                      checked: h.getIsVisible(),
                      disabled: !q,
                      onCheckedChange: (Z) => h.toggleVisibility(!!Z)
                    }
                  ),
                  /* @__PURE__ */ n("span", { className: "truncate text-xs", title: z, children: z })
                ] }),
                T ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ n(Ln, { className: "size-2.5" }),
                  C.pinnedRightBadge
                ] }) : G ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => h.pin(D ? !1 : "left"),
                    title: D ? C.unpin : C.pinLeft,
                    "aria-label": D ? C.unpin : C.pinLeft,
                    className: a(
                      "p-1 rounded-xs transition-colors cursor-pointer",
                      D ? "text-primary bg-primary/15 hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    children: /* @__PURE__ */ n(
                      Yt,
                      {
                        className: a(
                          "size-3.5 transition-transform",
                          D && "fill-current -rotate-45"
                        )
                      }
                    )
                  }
                ) : null
              ]
            },
            h.id
          );
        }) })
      ]
    }
  );
}
function El({
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
  canScrollRight: C,
  labels: _,
  className: R,
  onRegisterHeaderElement: f
}) {
  const { column: p } = e, v = p.columnDef.meta, y = r && !l && !d && v?.enableReordering !== !1, h = o && !l && !d && p.getCanPin() && v?.enablePinning !== !1, I = p.getCanSort(), z = p.getIsSorted(), b = p.getSortIndex(), A = e.getContext().table.getState().sorting.length > 1 && b >= 0, T = u === "left", M = u === "right", D = T || M, {
    attributes: q,
    listeners: G,
    setNodeRef: Z,
    transform: x,
    transition: E,
    isDragging: H
  } = Gn({
    id: p.id,
    disabled: !y,
    animateLayoutChanges: () => !1
  }), oe = (j) => {
    Z(j), f(p.id, j);
  }, he = x !== null && (x.x !== 0 || x.y !== 0), we = g ?? 0, Pe = {
    width: e.getSize(),
    minWidth: p.columnDef.minSize ?? (D ? e.getSize() : void 0),
    maxWidth: p.columnDef.maxSize,
    ...he ? {
      transform: Xn.Translate.toString(x),
      transition: E
    } : {},
    ...D ? {
      backgroundColor: "var(--muted)"
    } : {},
    ...T ? { position: "sticky", left: `${we}px` } : {},
    ...M ? { position: "sticky", right: `${we}px` } : {}
  }, fe = ke(!1), ve = e.getResizeHandler(), ct = (j) => {
    j.stopPropagation(), fe.current = !0;
    const X = () => {
      window.setTimeout(() => {
        fe.current = !1;
      }, 0), window.removeEventListener("mouseup", X);
    };
    window.addEventListener("mouseup", X), ve(j);
  }, O = (j) => {
    j.stopPropagation(), fe.current = !0;
    const X = () => {
      window.setTimeout(() => {
        fe.current = !1;
      }, 0), window.removeEventListener("touchend", X), window.removeEventListener("touchcancel", X);
    };
    window.addEventListener("touchend", X), window.addEventListener("touchcancel", X), ve(j);
  }, F = (j) => {
    fe.current || p.getIsResizing() || I && p.getToggleSortingHandler()?.(j);
  }, J = (j) => {
    j.stopPropagation(), D ? p.pin(!1) : p.pin("left");
  }, be = Gt(p);
  return /* @__PURE__ */ c(
    So,
    {
      ref: oe,
      style: Pe,
      ...y ? q : {},
      ...y ? G : {},
      onClick: I ? F : void 0,
      className: a(
        "group/th select-none whitespace-nowrap align-middle border-b border-border transition-colors font-medium text-muted-foreground",
        d && "[&:has([role=checkbox])]:pr-2",
        D ? "sticky" : "relative",
        // Density sizing & typography - matched to aiqia-ui TableHead
        t === "ultra-compact" && "h-7 px-2 text-xs",
        t === "compact" && "h-8.5 px-3 text-xs",
        t === "comfortable" && "h-10 px-3 text-sm",
        // Background: 100% opaque bg-muted when pinned so scrolled headers never bleed through
        D ? "bg-muted z-30" : "bg-muted hover:bg-accent z-10",
        // Interactive cursor
        I && "cursor-pointer hover:text-foreground",
        y && !I && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        H && "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
        // Sticky boundary dividers & scroll shadows
        m && "border-r border-border",
        m && k && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        P && "border-l border-border",
        P && C && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        R,
        v?.headerClassName
      ),
      children: [
        e.isPlaceholder ? null : /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex items-center gap-1.5 w-full min-w-0 overflow-hidden",
              (l || v?.align === "right") && "justify-end",
              (d || v?.align === "center") && "justify-center"
            ),
            children: [
              y && /* @__PURE__ */ n(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: _.columnManagerFooterHint,
                  children: /* @__PURE__ */ n(An, { className: "size-3" })
                }
              ),
              /* @__PURE__ */ c(
                "div",
                {
                  className: a(
                    "flex items-center gap-1 min-w-0",
                    !d && "flex-1",
                    (l || v?.align === "right") && "justify-end",
                    (d || v?.align === "center") && "justify-center"
                  ),
                  children: [
                    /* @__PURE__ */ n(
                      "span",
                      {
                        className: "truncate",
                        title: d ? void 0 : be,
                        children: Cr(p.columnDef.header, e.getContext())
                      }
                    ),
                    v?.headerTooltip && /* @__PURE__ */ c(Ar, { children: [
                      /* @__PURE__ */ n(Lr, { asChild: !0, children: /* @__PURE__ */ n(
                        "span",
                        {
                          onClick: (j) => j.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ n(qa, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ n(or, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: v.headerTooltip })
                    ] }),
                    I && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      z === "asc" ? /* @__PURE__ */ n(Ka, { className: "size-3.5 text-foreground" }) : z === "desc" ? /* @__PURE__ */ n(Ua, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ n(In, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      A && /* @__PURE__ */ n("span", { className: "text-[9px] font-bold text-foreground leading-none", children: b + 1 })
                    ] })
                  ]
                }
              ),
              h && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  onClick: J,
                  onPointerDown: (j) => j.stopPropagation(),
                  title: D ? _.unpin : _.pinLeft,
                  "aria-label": D ? _.unpin : _.pinLeft,
                  className: a(
                    "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                    D ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
                  ),
                  children: /* @__PURE__ */ n(
                    Yt,
                    {
                      className: a(
                        "size-3 transition-transform",
                        T && "fill-current -rotate-45",
                        M && "fill-current rotate-45"
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        s && p.getCanResize() && !d && /* @__PURE__ */ n(
          "div",
          {
            onMouseDown: ct,
            onTouchStart: O,
            onDoubleClick: (j) => {
              j.stopPropagation(), p.resetSize();
            },
            onClick: (j) => j.stopPropagation(),
            onPointerDown: (j) => j.stopPropagation(),
            title: _.resetColumnWidth,
            className: "group/resize absolute right-0 top-0 z-20 flex h-full w-2.5 cursor-col-resize select-none touch-none items-center justify-end",
            children: /* @__PURE__ */ n(
              "span",
              {
                className: a(
                  "h-4/5 w-0.5 rounded-full transition-colors",
                  p.getIsResizing() ? "bg-primary h-full" : "bg-transparent group-hover/th:bg-border group-hover/resize:bg-primary"
                )
              }
            )
          }
        )
      ]
    }
  );
}
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ol({
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
  onColumnVisibilityChange: C,
  propColumnSizing: _,
  onColumnSizingChange: R,
  propColumnOrder: f,
  onColumnOrderChange: p,
  propColumnPinning: v,
  onColumnPinningChange: y,
  propDensity: h,
  onDensityChange: I
}) {
  const z = ce(
    () => e.map((O, F) => vt(O, F)),
    [e]
  ), b = ce(
    () => Tl(e, {
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
  ), A = ce(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), T = ce(() => {
    const O = zl(o), F = typeof window < "u" ? window.location.pathname : "app", J = t || `${F}::${z.join("|")}`;
    return `${s}:${O}:${J}`;
  }, [t, z, o, s]), M = ie(() => {
    const O = b.left ?? [], F = b.right ?? [], J = /* @__PURE__ */ new Set([...O, ...F]), j = {
      columnOrder: [
        ...O,
        ...z.filter((X) => !J.has(X)),
        ...F
      ],
      columnVisibility: {},
      columnPinning: b,
      columnSizing: {},
      density: d
    };
    if (!r || !A)
      return j;
    try {
      const X = A.getItem(T);
      if (!X) return j;
      const U = JSON.parse(X), Ae = new Set(z), Ge = wn(
        Array.isArray(U.columnOrder) ? U.columnOrder : [],
        z
      ), Xe = Array.isArray(U.columnPinning?.left) ? U.columnPinning.left.filter((Le) => Ae.has(Le)) : b.left ?? [], cr = Array.isArray(U.columnPinning?.right) ? U.columnPinning.right.filter((Le) => Ae.has(Le)) : b.right ?? [], ut = Array.from(
        /* @__PURE__ */ new Set([
          ...(b.left ?? []).filter(Se),
          ...Xe
        ])
      ), Ye = Array.from(
        /* @__PURE__ */ new Set([...cr, ...b.right ?? []])
      ), ur = /* @__PURE__ */ new Set([...ut, ...Ye]), mr = Ge.filter((Le) => !ur.has(Le));
      return {
        columnOrder: [...ut, ...mr, ...Ye],
        columnVisibility: U.columnVisibility && typeof U.columnVisibility == "object" ? U.columnVisibility : {},
        columnPinning: {
          left: ut,
          right: Ye
        },
        columnSizing: U.columnSizing && typeof U.columnSizing == "object" ? U.columnSizing : {},
        density: U.density === "ultra-compact" || U.density === "compact" || U.density === "comfortable" ? U.density : d
      };
    } catch {
      return j;
    }
  }, [
    z,
    b,
    d,
    r,
    A,
    T
  ]), [D, q] = se(M);
  ye(() => {
    q((O) => {
      const F = wn(
        O.columnOrder,
        z
      ), J = new Set(z), be = Array.from(
        /* @__PURE__ */ new Set([
          ...(O.columnPinning.right ?? []).filter((X) => J.has(X)),
          ...b.right ?? []
        ])
      ), j = Array.from(
        /* @__PURE__ */ new Set([
          ...(b.left ?? []).filter(Se),
          ...(O.columnPinning.left ?? []).filter((X) => J.has(X))
        ])
      );
      return tt(F, O.columnOrder) && tt(j, O.columnPinning.left) && tt(be, O.columnPinning.right) ? O : {
        ...O,
        columnOrder: F,
        columnPinning: {
          left: j,
          right: be
        }
      };
    });
  }, [z, b]);
  const G = k ?? D.columnVisibility, Z = _ ?? D.columnSizing, x = f ?? D.columnOrder, E = v ?? D.columnPinning, H = h ?? D.density;
  ye(() => {
    if (!(!r || !A))
      try {
        const O = {
          columnOrder: x,
          columnVisibility: G,
          columnPinning: E,
          columnSizing: Z,
          density: H
        };
        A.setItem(T, JSON.stringify(O));
      } catch {
      }
  }, [
    r,
    A,
    T,
    x,
    G,
    E,
    Z,
    H
  ]);
  const oe = ie(
    (O) => {
      C?.(O), q((F) => ({
        ...F,
        columnVisibility: Ht(O, F.columnVisibility)
      }));
    },
    [C]
  ), he = ie(
    (O) => {
      R?.(O), q((F) => ({
        ...F,
        columnSizing: Ht(O, F.columnSizing)
      }));
    },
    [R]
  ), we = ie(
    (O) => {
      p?.(O), q((F) => ({
        ...F,
        columnOrder: Ht(O, F.columnOrder)
      }));
    },
    [p]
  ), Pe = ie(
    (O) => {
      y?.(O), q((F) => {
        const J = Ht(O, F.columnPinning), be = J.left ?? [], j = J.right ?? [], X = /* @__PURE__ */ new Set([...be, ...j]), Ae = (F.columnOrder.length > 0 ? F.columnOrder : z).filter((Xe) => !X.has(Xe)), Ge = [...be, ...Ae, ...j];
        return {
          ...F,
          columnPinning: J,
          columnOrder: Ge
        };
      });
    },
    [y, z]
  ), fe = ie(
    (O) => {
      I?.(O), q((F) => ({
        ...F,
        density: O
      }));
    },
    [I]
  ), ve = ce(() => {
    const O = Object.values(G).some(
      (U) => U === !1
    ), F = !tt(x, z), J = !tt(
      E.left ?? [],
      b.left ?? []
    ), be = !tt(
      E.right ?? [],
      b.right ?? []
    ), j = Object.keys(Z).length > 0;
    return O || F || J || be || j || H !== d;
  }, [
    G,
    x,
    z,
    E,
    b,
    Z,
    H,
    d
  ]), ct = ie(() => {
    if (q({
      columnOrder: z,
      columnVisibility: {},
      columnPinning: b,
      columnSizing: {},
      density: d
    }), C?.({}), p?.(z), y?.(b), R?.({}), I?.(d), r && A)
      try {
        A.removeItem(T);
      } catch {
      }
  }, [
    z,
    b,
    d,
    p,
    y,
    R,
    C,
    I,
    r,
    A,
    T
  ]);
  return {
    columnVisibility: G,
    onColumnVisibilityChange: oe,
    columnSizing: Z,
    onColumnSizingChange: he,
    columnOrder: x,
    onColumnOrderChange: we,
    columnPinning: E,
    onColumnPinningChange: Pe,
    density: H,
    onDensityChange: fe,
    defaultColumnOrder: z,
    defaultColumnPinning: b,
    isCustomized: ve,
    resetToDefaults: ct
  };
}
function Vl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jl({
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
  emptyContent: C,
  rowSelection: _,
  onRowSelectionChange: R,
  onSelectedRowsChange: f,
  enableRowSelection: p,
  showSelectionColumn: v,
  isRowSelectable: y,
  selectionDisabledReason: h,
  renderBulkActions: I,
  expanded: z,
  onExpandedChange: b,
  getSubRows: A,
  getRowCanExpand: T,
  renderSubComponent: M,
  showExpandColumn: D = !0,
  expandOnRowClick: q = !1,
  enableSorting: G = !0,
  enableMultiSort: Z = !0,
  sorting: x,
  onSortingChange: E,
  manualSorting: H = !1,
  columnVisibility: oe,
  onColumnVisibilityChange: he,
  columnSizing: we,
  onColumnSizingChange: Pe,
  columnOrder: fe,
  onColumnOrderChange: ve,
  columnPinning: ct,
  onColumnPinningChange: O,
  pinActionsColumnRight: F = !0,
  pinLastColumnRight: J = !1,
  defaultPinnedLeft: be,
  defaultPinnedRight: j,
  enableColumnOrdering: X = !0,
  enableColumnPinning: U = !0,
  enableColumnVisibility: Ae = !0,
  enableColumnResizing: Ge = !0,
  enableContextMenu: Xe = !0,
  showToolbar: cr = !0,
  showTotalRecords: ut = !0,
  showDensityToggle: Ye = !0,
  showHelpButton: ur = !0,
  toolbarLeftContent: mr,
  toolbarRightContent: jr,
  density: Le = "compact",
  onDensityChange: qo,
  tableLayout: Ko = "fixed",
  striped: Fr = !1,
  hoverable: Hr = !0,
  stickyHeader: Br = !0,
  maxHeight: Qe,
  className: Uo,
  classNames: ee,
  style: Go,
  getRowId: Xo,
  onRowClick: Wr,
  onRowDoubleClick: $r,
  rowClassName: qr,
  renderRowProgress: Kr,
  footerContent: _t,
  onTableReady: Ur,
  labels: Gr
}) {
  const de = ce(
    () => ({
      ...Dt,
      ...Gr,
      ...k ? { emptyMessage: k } : {}
    }),
    [Gr, k]
  ), [Yo, Qo] = se([]), [Jo, Zo] = se({}), [ea, ta] = se({}), [ra, Xr] = se(
    null
  ), [fr, na] = se(!1), [pr, oa] = se(!1), [gr, aa] = se(
    {}
  ), mt = ke(null), Yr = ke(null), At = ke(
    /* @__PURE__ */ new Map()
  ), sa = x ?? Yo, ia = E ?? Qo, Qr = _ ?? Jo, la = ie(
    (w) => {
      R?.(w), Zo(
        (S) => Vl(w, _ ?? S)
      );
    },
    [R, _]
  ), da = z ?? ea, ca = b ?? ta, Je = p !== void 0 ? !!p : !!(v || R || f || I), ua = ce(
    () => e.some(
      (w, S) => Rt(vt(w, S))
    ),
    [e]
  ), Jr = (v ?? Je) && !ua, Zr = !!(M || A), ma = ce(
    () => e.some(
      (w, S) => sr(vt(w, S))
    ),
    [e]
  ), en = Zr && D && !ma, tn = ce(() => {
    const w = e.map((N, L) => ({
      ...N,
      id: vt(N, L)
    })), S = [];
    return Jr && S.push({
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
      header: ({ table: N }) => /* @__PURE__ */ n(
        at,
        {
          checked: N.getIsAllPageRowsSelected() || N.getIsSomePageRowsSelected() && "indeterminate",
          onCheckedChange: (L) => N.toggleAllPageRowsSelected(!!L),
          "aria-label": de.selectAllRows,
          onClick: (L) => L.stopPropagation()
        }
      ),
      cell: ({ row: N }) => {
        const L = N.getCanSelect();
        return /* @__PURE__ */ n(
          at,
          {
            checked: N.getIsSelected(),
            disabled: !L,
            title: L ? void 0 : h,
            onCheckedChange: (W) => N.toggleSelected(!!W),
            "aria-label": de.selectRow(N.id),
            onClick: (W) => W.stopPropagation()
          }
        );
      }
    }), en && S.push({
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
      cell: ({ row: N }) => {
        if (!N.getCanExpand()) return null;
        const L = N.getIsExpanded();
        return /* @__PURE__ */ n(
          re,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (W) => {
              W.stopPropagation(), N.toggleExpanded();
            },
            "aria-label": L ? de.collapseRow : de.expandRow,
            title: L ? de.collapseRow : de.expandRow,
            children: L ? /* @__PURE__ */ n(We, {}) : /* @__PURE__ */ n(zt, {})
          }
        );
      }
    }), [...S, ...w];
  }, [
    e,
    Jr,
    en,
    de,
    h
  ]), {
    columnVisibility: ft,
    onColumnVisibilityChange: fa,
    columnSizing: Lt,
    onColumnSizingChange: pa,
    columnOrder: Et,
    onColumnOrderChange: ga,
    columnPinning: Ze,
    onColumnPinningChange: ha,
    density: ne,
    onDensityChange: rn,
    isCustomized: nn,
    resetToDefaults: on
  } = Ol({
    columns: tn,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: Le,
    pinActionsColumnRight: F,
    pinLastColumnRight: J,
    defaultPinnedLeft: be,
    defaultPinnedRight: j,
    propColumnVisibility: oe,
    onColumnVisibilityChange: he,
    propColumnSizing: we,
    onColumnSizingChange: Pe,
    propColumnOrder: fe,
    onColumnOrderChange: ve,
    propColumnPinning: ct,
    onColumnPinningChange: O,
    propDensity: void 0,
    onDensityChange: qo
  }), ba = ce(() => typeof p == "function" ? p : y ? (w) => y(w.original) : Je, [p, y, Je]), xa = ce(() => {
    if (T) return T;
    if (M) return () => !0;
  }, [T, M]), B = cs({
    data: t,
    columns: tn,
    defaultColumn: {
      minSize: 60
    },
    getRowId: Xo,
    getSubRows: A,
    getRowCanExpand: xa,
    getCoreRowModel: fs(),
    getSortedRowModel: H ? void 0 : ms(),
    getExpandedRowModel: Zr ? us() : void 0,
    onSortingChange: ia,
    onExpandedChange: ca,
    onColumnVisibilityChange: fa,
    onColumnSizingChange: pa,
    onColumnOrderChange: ga,
    onColumnPinningChange: ha,
    onRowSelectionChange: la,
    manualSorting: H,
    state: {
      sorting: sa,
      expanded: da,
      rowSelection: Qr,
      columnVisibility: ft,
      columnSizing: Lt,
      columnOrder: Et,
      columnPinning: Ze
    },
    enableRowSelection: ba,
    enableSorting: G,
    enableMultiSort: Z,
    enableColumnResizing: Ge,
    enableColumnPinning: U,
    columnResizeMode: "onChange"
  });
  ye(() => {
    Ur?.(B);
  }, [B, Ur]);
  const pt = ce(() => Je ? B.getSelectedRowModel().flatRows.map((w) => w.original) : [], [B, Qr, t, Je]);
  ye(() => {
    f?.(pt);
  }, [pt, f]);
  const Ot = ie(() => {
    const w = {};
    At.current.forEach((S, N) => {
      if (S) {
        const L = Math.round(S.getBoundingClientRect().width);
        L > 0 && (w[N] = L);
      }
    }), aa((S) => {
      const N = Object.keys(w);
      return N.length === Object.keys(S).length && N.every((L) => Math.abs((S[L] ?? 0) - w[L]) <= 1) ? S : w;
    });
  }, []), ya = ie(
    (w, S) => {
      S ? At.current.set(w, S) : At.current.delete(w);
    },
    []
  ), gt = ie(() => {
    const w = mt.current;
    if (!w) return;
    const { scrollLeft: S, scrollWidth: N, clientWidth: L } = w, W = Math.max(0, N - L);
    na(S > 2), oa(W - S > 2);
  }, []);
  ye(() => {
    const w = mt.current;
    if (!w) return;
    const S = (N) => {
      if (!N.ctrlKey || !(w.scrollWidth > w.clientWidth + 1)) return;
      const W = Math.abs(N.deltaY) >= Math.abs(N.deltaX) ? N.deltaY : N.deltaX;
      if (W === 0) return;
      const te = N.deltaMode === 1 ? 32 : N.deltaMode === 2 ? w.clientWidth * 0.8 : 1;
      N.preventDefault(), w.scrollLeft += W * te;
    };
    return w.addEventListener("wheel", S, { passive: !1 }), () => {
      w.removeEventListener("wheel", S);
    };
  }, []), Da(() => {
    Ot(), gt();
  }, [
    Ot,
    gt,
    t,
    ft,
    Et,
    Ze,
    Lt,
    ne
  ]), ye(() => {
    const w = mt.current, S = Yr.current;
    if (!w || typeof ResizeObserver > "u") return;
    const N = new ResizeObserver(() => {
      Ot(), gt();
    });
    return N.observe(w), S && N.observe(S), At.current.forEach((L) => {
      L && N.observe(L);
    }), () => N.disconnect();
  }, [
    gt,
    Ot,
    ft,
    Et,
    Ze
  ]);
  const wa = ie((w) => {
    const S = mt.current;
    if (!S) return;
    const N = Math.max(240, Math.floor(S.clientWidth * 0.6));
    S.scrollBy({
      left: w === "left" ? -N : N,
      behavior: "smooth"
    });
  }, []), ht = B.getVisibleLeafColumns(), {
    stickyOffsets: hr,
    lastLeftPinnedColumnId: br,
    firstRightPinnedColumnId: xr,
    actionsColumnIds: et
  } = ce(() => {
    const w = {}, S = /* @__PURE__ */ new Set(), N = B.getAllLeafColumns(), L = /* @__PURE__ */ new Map();
    N.forEach((V, ae) => {
      L.set(V.id, V), ir(
        V.id,
        V.columnDef,
        ae === N.length - 1,
        F,
        J
      ) && S.add(V.id);
    });
    const W = (V) => ft[V.id] !== !1 && V.getIsVisible(), te = (Ze.left ?? []).map((V) => L.get(V)).filter(
      (V) => !!V && W(V)
    ), pe = (Ze.right ?? []).map((V) => L.get(V)).filter(
      (V) => !!V && W(V)
    );
    let Ne = 0;
    for (const V of te)
      w[V.id] = Ne, Ne += gr[V.id] || V.getSize();
    let Y = 0;
    for (let V = pe.length - 1; V >= 0; V--) {
      const ae = pe[V];
      w[ae.id] = Y, Y += gr[ae.id] || ae.getSize();
    }
    return {
      stickyOffsets: w,
      lastLeftPinnedColumnId: te.length > 0 ? te[te.length - 1].id : null,
      firstRightPinnedColumnId: pe.length > 0 ? pe[0].id : null,
      actionsColumnIds: S
    };
  }, [
    B,
    Ze,
    Et,
    ft,
    Lt,
    gr,
    F,
    J
  ]), va = Hn(
    qt(Bn, {
      activationConstraint: { distance: 6 }
    }),
    qt(Wn, {
      coordinateGetter: Kn
    })
  ), Na = ie(
    (w) => {
      const { active: S, over: N } = w;
      if (!N || S.id === N.id) return;
      const L = String(S.id), W = String(N.id);
      if (Se(L) || Se(W) || et.has(L) || et.has(W))
        return;
      const te = B.getState().columnOrder.length > 0 ? B.getState().columnOrder : B.getAllLeafColumns().map((Ce) => Ce.id), pe = te.indexOf(L), Ne = te.indexOf(W);
      pe !== -1 && Ne !== -1 && B.setColumnOrder(rt(te, pe, Ne));
      const Y = B.getState().columnPinning.left ?? [], V = Y.indexOf(L), ae = Y.indexOf(W);
      V !== -1 && ae !== -1 && B.setColumnPinning((Ce) => ({
        ...Ce,
        left: rt(Ce.left ?? [], V, ae)
      }));
      const ze = B.getState().columnPinning.right ?? [], Ee = ze.indexOf(L), Oe = ze.indexOf(W);
      Ee !== -1 && Oe !== -1 && B.setColumnPinning((Ce) => ({
        ...Ce,
        right: rt(Ce.right ?? [], Ee, Oe)
      }));
    },
    [B, et]
  ), Ca = (w) => {
    Xe && (w.preventDefault(), Xr({ x: w.clientX, y: w.clientY }));
  }, an = ie(() => {
    B.resetRowSelection();
  }, [B]), bt = B.getRowModel().rows, Sa = g && (m === "skeleton" || m === "auto" && bt.length === 0), Ra = g && (m === "overlay" || m === "auto" && bt.length > 0), sn = ce(
    () => B.getFooterGroups().some(
      (w) => w.headers.some((S) => S.column.columnDef.footer !== void 0)
    ),
    [B]
  ), ka = Object.keys(Lt).length > 0, Pa = !!B.getState().columnSizingInfo?.isResizingColumn, ln = Ko === "fixed" || ka || Pa, za = Qe ? {
    maxHeight: typeof Qe == "number" ? `${Qe}px` : Qe
  } : void 0;
  return /* @__PURE__ */ n(Pl, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: Go,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        ee?.root,
        Uo
      ),
      onContextMenu: Ca,
      children: [
        Ra && /* @__PURE__ */ n("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ n(nt, { className: "animate-spin size-6 text-primary" }) }),
        cr && /* @__PURE__ */ n(
          Al,
          {
            table: B,
            totalRecords: r,
            showTotalRecords: ut,
            showDensityToggle: Ye,
            showHelpButton: ur,
            density: ne,
            onDensityChange: rn,
            pinActionsColumnRight: F,
            pinLastColumnRight: J,
            enableColumnOrdering: X,
            enableColumnPinning: U,
            enableColumnVisibility: Ae,
            isCustomized: nn,
            onReset: on,
            canScrollLeft: fr,
            canScrollRight: pr,
            onScrollHorizontal: wa,
            toolbarLeftContent: mr,
            toolbarRightContent: jr,
            labels: de,
            className: ee?.toolbar
          }
        ),
        Je && pt.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              ee?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n("span", { className: "font-medium text-foreground", children: de.selectedItemsCount(pt.length) }),
                I?.(pt, an)
              ] }),
              /* @__PURE__ */ c(
                re,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: an,
                  children: [
                    /* @__PURE__ */ n(Tt, {}),
                    /* @__PURE__ */ n("span", { children: de.clearSelection })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            ref: mt,
            onScroll: gt,
            style: za,
            className: a(
              "relative w-full overflow-auto",
              ee?.viewport
            ),
            children: /* @__PURE__ */ n(
              $n,
              {
                sensors: va,
                collisionDetection: qn,
                modifiers: [is],
                onDragEnd: Na,
                children: /* @__PURE__ */ c(
                  "table",
                  {
                    ref: Yr,
                    style: ln ? { width: B.getTotalSize(), minWidth: "100%" } : void 0,
                    className: a(
                      ln ? "table-fixed" : "table-auto w-full",
                      "caption-bottom border-separate border-spacing-0",
                      ne === "ultra-compact" && "text-xs",
                      ne === "compact" && "text-sm",
                      ne === "comfortable" && "text-sm",
                      ee?.table
                    ),
                    children: [
                      /* @__PURE__ */ n(
                        vo,
                        {
                          className: a(
                            "bg-muted",
                            Br && Qe && "sticky top-0 z-30 bg-muted",
                            ee?.header
                          ),
                          children: B.getHeaderGroups().map((w) => /* @__PURE__ */ n(
                            Te,
                            {
                              className: a(
                                "hover:bg-transparent border-b-0",
                                ee?.headerRow
                              ),
                              children: /* @__PURE__ */ n(
                                Un,
                                {
                                  items: w.headers.map((S) => S.column.id),
                                  strategy: ds,
                                  children: w.headers.map((S) => {
                                    const N = S.column.id, L = S.column.getIsPinned(), W = et.has(N), te = Se(N);
                                    return /* @__PURE__ */ n(
                                      El,
                                      {
                                        header: S,
                                        density: ne,
                                        enableColumnOrdering: X,
                                        enableColumnPinning: U,
                                        enableColumnResizing: Ge,
                                        isActionsCol: W,
                                        isSystemLeftCol: te,
                                        pinnedPosition: L,
                                        stickyOffset: hr[N],
                                        isLastLeftPinned: N === br,
                                        isFirstRightPinned: N === xr,
                                        canScrollLeft: fr,
                                        canScrollRight: pr,
                                        labels: de,
                                        className: ee?.headerCell,
                                        onRegisterHeaderElement: ya
                                      },
                                      S.id
                                    );
                                  })
                                }
                              )
                            },
                            w.id
                          ))
                        }
                      ),
                      /* @__PURE__ */ n(No, { className: ee?.body, children: Sa ? Array.from({ length: P }).map((w, S) => /* @__PURE__ */ n(
                        Te,
                        {
                          className: "border-b-0 hover:bg-transparent",
                          children: ht.map((N) => /* @__PURE__ */ n(
                            Ve,
                            {
                              className: a(
                                "border-b border-border/60",
                                ne === "ultra-compact" && "py-0.5 px-2",
                                ne === "compact" && "py-1 px-3",
                                ne === "comfortable" && "py-2 px-3"
                              ),
                              children: /* @__PURE__ */ n(wo, { className: "h-4 w-full max-w-[140px]" })
                            },
                            `skeleton-${S}-${N.id}`
                          ))
                        },
                        `skeleton-${S}`
                      )) : bt.length > 0 ? bt.map((w, S) => {
                        const N = Kr ? Kr(w.original) : null, W = w.getIsExpanded() && !!M, te = w.getVisibleCells(), pe = S % 2 === 1, Ne = S === bt.length - 1;
                        return /* @__PURE__ */ c(_a, { children: [
                          /* @__PURE__ */ n(
                            Te,
                            {
                              "data-state": w.getIsSelected() && "selected",
                              onClick: (Y) => {
                                q && w.getCanExpand() && w.toggleExpanded(), Wr?.(w.original, Y);
                              },
                              onDoubleClick: $r ? (Y) => $r(w.original, Y) : void 0,
                              className: a(
                                "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)] data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                Hr ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] data-[state=selected]:bg-muted" : "hover:bg-transparent",
                                (Wr || q && w.getCanExpand()) && "cursor-pointer",
                                Fr && pe && "bg-muted [--flash-table-cell-bg:var(--muted)]",
                                ee?.row,
                                qr ? qr(w.original, S) : ""
                              ),
                              children: te.map((Y) => {
                                const V = Y.column.id, ae = Y.column.getIsPinned(), ze = ae === "left", Ee = ae === "right", Oe = ze || Ee, Ce = V === br, dn = V === xr, Ta = et.has(V), cn = Se(V), Vt = Y.column.columnDef.meta, un = hr[V] ?? 0, Ia = {
                                  width: Y.column.getSize(),
                                  minWidth: Y.column.columnDef.minSize ?? (Oe ? Y.column.getSize() : void 0),
                                  maxWidth: Y.column.columnDef.maxSize,
                                  ...Oe ? {
                                    backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                  } : {},
                                  ...ze ? {
                                    position: "sticky",
                                    left: `${un}px`
                                  } : {},
                                  ...Ee ? {
                                    position: "sticky",
                                    right: `${un}px`
                                  } : {}
                                };
                                return /* @__PURE__ */ n(
                                  Ve,
                                  {
                                    style: Ia,
                                    className: a(
                                      Vt?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                      "align-middle transition-colors",
                                      cn && "[&:has([role=checkbox])]:pr-2",
                                      Oe && "sticky",
                                      // Row bottom border
                                      (!Ne || sn || _t) && !N && !W && "border-b border-border",
                                      // Density padding
                                      ne === "ultra-compact" && "py-0.5 px-2 text-xs",
                                      ne === "compact" && "py-1 px-3 text-sm",
                                      ne === "comfortable" && "py-2 px-3 text-sm",
                                      // Alignment
                                      (Ta || Vt?.align === "right") && "text-right",
                                      (cn || Vt?.align === "center") && "text-center",
                                      // Pinned cell 100% opaque background so scrolled content never bleeds through
                                      Oe && [
                                        "z-20",
                                        Fr && pe ? "bg-muted" : "bg-card",
                                        Hr && "group-hover/row:bg-muted",
                                        "group-data-[state=selected]/row:bg-muted"
                                      ],
                                      // Sticky boundary dividers & directional shadows
                                      Ce && "border-r border-border",
                                      Ce && fr && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                      dn && "border-l border-border",
                                      dn && pr && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                      ee?.cell,
                                      Vt?.cellClassName
                                    ),
                                    children: Cr(
                                      Y.column.columnDef.cell,
                                      Y.getContext()
                                    )
                                  },
                                  Y.id
                                );
                              })
                            }
                          ),
                          W && M && /* @__PURE__ */ n(
                            Te,
                            {
                              className: a(
                                "bg-muted/20 hover:bg-muted/20 border-b-0",
                                ee?.expandedRow
                              ),
                              children: /* @__PURE__ */ n(
                                Ve,
                                {
                                  colSpan: ht.length || 1,
                                  className: a(
                                    "p-3",
                                    !Ne && !N && "border-b border-border"
                                  ),
                                  children: M({
                                    row: w,
                                    data: w.original
                                  })
                                }
                              )
                            }
                          ),
                          N && /* @__PURE__ */ n("tr", { className: "p-0 m-0 border-0 pointer-events-none select-none", children: /* @__PURE__ */ n(
                            "td",
                            {
                              colSpan: ht.length || 1,
                              className: "p-0 m-0 border-b border-border h-[2px] leading-none bg-muted",
                              children: /* @__PURE__ */ n(
                                "div",
                                {
                                  className: a(
                                    "h-[2px] transition-all duration-300",
                                    N.color || "bg-primary"
                                  ),
                                  style: {
                                    width: `${Math.min(100, Math.max(1, N.percent < 1 ? 1 : N.percent))}%`,
                                    minWidth: "4px"
                                  }
                                }
                              )
                            }
                          ) })
                        ] }, w.id);
                      }) : /* @__PURE__ */ n(Te, { className: "hover:bg-transparent", children: /* @__PURE__ */ n(
                        Ve,
                        {
                          colSpan: ht.length || e.length || 1,
                          className: a(
                            "h-24 text-center text-muted-foreground text-sm",
                            ee?.emptyCell
                          ),
                          children: g ? de.loadingMessage : C ?? /* @__PURE__ */ n("span", { className: "italic", children: de.emptyMessage })
                        }
                      ) }) }),
                      (sn || _t) && /* @__PURE__ */ n(
                        Co,
                        {
                          className: a(
                            "border-t bg-muted/50 font-medium",
                            Br && Qe && "sticky bottom-0 z-20 bg-muted",
                            ee?.footer
                          ),
                          children: _t ? /* @__PURE__ */ n(Te, { className: ee?.footerRow, children: /* @__PURE__ */ n(
                            Ve,
                            {
                              colSpan: ht.length || 1,
                              className: a(
                                "px-3 py-2 border-t border-border",
                                ee?.footerCell
                              ),
                              children: _t
                            }
                          ) }) : B.getFooterGroups().map((w) => /* @__PURE__ */ n(
                            Te,
                            {
                              className: a(
                                "hover:bg-transparent border-b-0",
                                ee?.footerRow
                              ),
                              children: w.headers.map((S) => {
                                const N = S.column.id, L = S.column.getIsPinned(), W = L === "left", te = L === "right", pe = W || te, Ne = N === br, Y = N === xr, V = et.has(N), ae = S.column.columnDef.meta, ze = hr[N] ?? 0, Ee = {
                                  width: S.getSize(),
                                  ...pe ? {
                                    backgroundColor: "var(--muted)"
                                  } : {},
                                  ...W ? {
                                    position: "sticky",
                                    left: `${ze}px`
                                  } : {},
                                  ...te ? {
                                    position: "sticky",
                                    right: `${ze}px`
                                  } : {}
                                };
                                return /* @__PURE__ */ n(
                                  Ve,
                                  {
                                    style: Ee,
                                    className: a(
                                      "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                      pe ? "sticky bg-muted z-20" : "bg-muted",
                                      ne === "ultra-compact" && "py-1 px-2 text-xs",
                                      ne === "compact" && "py-1 px-3 text-sm",
                                      ne === "comfortable" && "py-2 px-3 text-sm",
                                      (V || ae?.align === "right") && "text-right",
                                      ae?.align === "center" && "text-center",
                                      Ne && "border-r border-border",
                                      Y && "border-l border-border",
                                      ee?.footerCell,
                                      ae?.footerClassName
                                    ),
                                    children: S.isPlaceholder ? null : Cr(
                                      S.column.columnDef.footer,
                                      S.getContext()
                                    )
                                  },
                                  S.id
                                );
                              })
                            },
                            w.id
                          ))
                        }
                      )
                    ]
                  }
                )
              }
            )
          }
        ),
        Xe && /* @__PURE__ */ n(
          Ll,
          {
            position: ra,
            onClose: () => Xr(null),
            table: B,
            density: ne,
            onDensityChange: rn,
            showDensityToggle: Ye,
            pinActionsColumnRight: F,
            pinLastColumnRight: J,
            enableColumnPinning: U,
            enableColumnVisibility: Ae,
            isCustomized: nn,
            onReset: on,
            labels: de
          }
        )
      ]
    }
  ) });
}
jl.displayName = "FlashTable";
const Fl = Re(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), lr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Yn.Root,
  {
    ref: r,
    className: a(Fl(), e),
    ...t
  }
));
lr.displayName = Yn.Root.displayName;
const xc = es, ko = i.createContext(
  {}
), Ue = ({
  ...e
}) => /* @__PURE__ */ n(ko.Provider, { value: { name: e.name }, children: /* @__PURE__ */ n(ts, { ...e }) }), dr = () => {
  const e = i.useContext(ko), t = i.useContext(Po), { getFieldState: r, formState: o } = Ie(), s = r(e.name, o);
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
}, Po = i.createContext(
  {}
), Me = i.forwardRef(({ className: e, ...t }, r) => {
  const o = i.useId();
  return /* @__PURE__ */ n(Po.Provider, { value: { id: o }, children: /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
Me.displayName = "FormItem";
const De = i.forwardRef(({ className: e, ...t }, r) => {
  const { error: o, formItemId: s } = dr();
  return /* @__PURE__ */ n(
    lr,
    {
      ref: r,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
De.displayName = "FormLabel";
const dt = i.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: l } = dr();
  return /* @__PURE__ */ n(
    En,
    {
      ref: t,
      id: o,
      "aria-describedby": r ? `${s} ${l}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
dt.displayName = "FormControl";
const zo = i.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = dr();
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
zo.displayName = "FormDescription";
const _e = i.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: l } = dr(), d = s ? String(s?.message) : t;
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
_e.displayName = "FormMessage";
const Hl = Re("font-bold tracking-tight", {
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
}), yc = kt.forwardRef(
  ({ className: e, variant: t, children: r, ...o }, s) => /* @__PURE__ */ n(
    t || "h1",
    {
      className: a(Hl({ variant: t }), e),
      ref: s,
      ...o,
      children: r
    }
  )
), wc = ({
  name: e,
  label: t,
  placeholder: r,
  mask: o,
  ...s
}) => {
  const l = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: l.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(Me, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(dt, { children: o ? /* @__PURE__ */ n(
          Yl,
          {
            mask: o,
            placeholder: r,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ n(ar, { placeholder: r, ...s, ...d }) }),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
}, Bl = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  me.Root,
  {
    ref: o,
    className: a(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(To, {})
    ]
  }
));
Bl.displayName = me.Root.displayName;
const Wl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.List,
  {
    ref: r,
    className: a(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Wl.displayName = me.List.displayName;
const vc = me.Item, $l = Re(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), ql = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  me.Trigger,
  {
    ref: o,
    className: a($l(), "group", e),
    ...r,
    children: [
      t,
      " ",
      /* @__PURE__ */ n(
        We,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
ql.displayName = me.Trigger.displayName;
const Kl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.Content,
  {
    ref: r,
    className: a(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
Kl.displayName = me.Content.displayName;
const Ul = me.Link, To = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ n(
  me.Viewport,
  {
    className: a(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
To.displayName = me.Viewport.displayName;
const Gl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.Indicator,
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
Gl.displayName = me.Indicator.displayName;
const Xl = kt.forwardRef(({ className: e, title: t, children: r, ...o }, s) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(Ul, { asChild: !0, children: /* @__PURE__ */ c(
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
Xl.displayName = "ListItem";
function Yl({
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
    ar,
    {
      value: eo(e, t),
      onChange: g,
      ...o
    }
  );
}
const Ql = (e, t = 300) => {
  const [r, o] = se(e);
  return ye(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}, Nn = Re(
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
), Jl = i.forwardRef(
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
    onCreate: C,
    ..._
  }, R) => {
    const [f, p] = i.useState(o), [v, y] = i.useState(!1), [h, I] = i.useState(!1), [z, b] = i.useState(""), A = Ql(z, 300);
    ye(() => {
      P && P(A ?? "");
    }, [A]);
    const T = (x) => {
      if (x.key === "Enter")
        y(!0);
      else if (x.key === "Backspace" && !x.currentTarget.value) {
        const E = [...f];
        E.pop(), p(E), t(E);
      }
    }, M = (x) => {
      const E = f.includes(x) ? f.filter((H) => H !== x) : [...f, x];
      p(E), t(E);
    }, D = () => {
      p([]), t([]);
    }, q = () => {
      y((x) => !x);
    }, G = () => {
      const x = f.slice(0, d);
      p(x), t(x);
    }, Z = () => {
      if (f.length === e.length)
        D();
      else {
        const x = e.map((E) => E.value);
        p(x), t(x);
      }
    };
    return /* @__PURE__ */ c(
      it,
      {
        open: v,
        onOpenChange: y,
        modal: u,
        children: [
          /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ n(
            re,
            {
              ref: R,
              ..._,
              onClick: q,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                g
              ),
              children: f.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  f.slice(0, d).map((x) => {
                    const E = e.find((oe) => oe.value === x), H = E?.icon;
                    return /* @__PURE__ */ c(
                      Rr,
                      {
                        className: a(
                          h ? "animate-bounce" : "",
                          Nn({ variant: r })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          H && /* @__PURE__ */ n(H, { className: "h-4 w-4 mr-2" }),
                          E?.label,
                          /* @__PURE__ */ n(
                            fn,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (oe) => {
                                oe.stopPropagation(), M(x);
                              }
                            }
                          )
                        ]
                      },
                      x
                    );
                  }),
                  f.length > d && /* @__PURE__ */ c(
                    Rr,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        h ? "animate-bounce" : "",
                        Nn({ variant: r })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${f.length - d}`,
                        /* @__PURE__ */ n(
                          fn,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (x) => {
                              x.stopPropagation(), G();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  k && /* @__PURE__ */ n(nt, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ n(
                    Ga,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (x) => {
                        x.stopPropagation(), D();
                      }
                    }
                  ),
                  /* @__PURE__ */ n(
                    Lo,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ n(We, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ n("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ n(We, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ n(
            Ke,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => y(!1),
              children: /* @__PURE__ */ c(It, { shouldFilter: !P, children: [
                /* @__PURE__ */ n(
                  er,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: T,
                    onValueChange: b
                  }
                ),
                /* @__PURE__ */ c(tr, { children: [
                  !k && /* @__PURE__ */ n(rr, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Mt, { children: [
                    !k && !e.length && !!z.length && C && /* @__PURE__ */ n(
                      He,
                      {
                        onSelect: C,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ n(Xa, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ n("b", { children: z })
                        ] })
                      },
                      "new"
                    ),
                    k && /* @__PURE__ */ n("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ n(nt, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      He,
                      {
                        onSelect: Z,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                f.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ n(pn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ n("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((x) => {
                      const E = f.includes(x.value);
                      return /* @__PURE__ */ c(
                        He,
                        {
                          onSelect: () => M(x.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ n(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  E ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ n(pn, { className: "h-4 w-4" })
                              }
                            ),
                            x.icon && /* @__PURE__ */ n(x.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ n("span", { children: x.label })
                          ]
                        },
                        x.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ n(so, {})
                ] })
              ] })
            }
          ),
          l > 0 && f.length > 0 && /* @__PURE__ */ n(
            Ya,
            {
              className: a(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                h ? "" : "text-muted-foreground"
              ),
              onClick: () => I(!h)
            }
          )
        ]
      }
    );
  }
);
Jl.displayName = "MultiSelect";
const Zl = ({ className: e, ...t }) => /* @__PURE__ */ n(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Zl.displayName = "Pagination";
const ed = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "ul",
  {
    ref: r,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
ed.displayName = "PaginationContent";
const td = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("li", { ref: r, className: a("", e), ...t }));
td.displayName = "PaginationItem";
const Er = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...o
}) => /* @__PURE__ */ n(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: a(
      $e({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...o
  }
);
Er.displayName = "PaginationLink";
const rd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  Er,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(Mn, { className: "h-4 w-4" })
  }
);
rd.displayName = "PaginationPrevious";
const nd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  Er,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(zt, { className: "h-4 w-4" })
  }
);
nd.displayName = "PaginationNext";
const od = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ n(kn, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
od.displayName = "PaginationEllipsis";
const ad = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  St.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: r
  }
));
ad.displayName = St.Root.displayName;
const sd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  St.Item,
  {
    ref: r,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(St.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ n(zn, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
sd.displayName = St.Item.displayName;
const id = kt.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  Fe.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ n(Fe.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ n(Io, {}),
      /* @__PURE__ */ n(Fe.Corner, {})
    ]
  }
));
id.displayName = Fe.Root.displayName;
const Io = kt.forwardRef(({ className: e, orientation: t = "vertical", ...r }, o) => /* @__PURE__ */ n(
  Fe.ScrollAreaScrollbar,
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
    children: /* @__PURE__ */ n(Fe.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Io.displayName = Fe.ScrollAreaScrollbar.displayName;
const Mo = Q.Root, Nc = Q.Group, Do = Q.Value, Or = i.forwardRef(({ className: e, children: t, isLoading: r = !1, ...o }, s) => /* @__PURE__ */ c(
  Q.Trigger,
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
        r && /* @__PURE__ */ n(nt, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ n(Q.Icon, { asChild: !0, children: /* @__PURE__ */ n(We, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Or.displayName = Q.Trigger.displayName;
const _o = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Q.ScrollUpButton,
  {
    ref: r,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(Qa, { className: "h-4 w-4" })
  }
));
_o.displayName = Q.ScrollUpButton.displayName;
const Ao = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Q.ScrollDownButton,
  {
    ref: r,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(We, { className: "h-4 w-4" })
  }
));
Ao.displayName = Q.ScrollDownButton.displayName;
const Vr = i.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ n(Q.Portal, { children: /* @__PURE__ */ c(
  Q.Content,
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
      /* @__PURE__ */ n(_o, {}),
      /* @__PURE__ */ n(
        Q.Viewport,
        {
          className: a(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n(Ao, {})
    ]
  }
) }));
Vr.displayName = Q.Content.displayName;
const ld = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Q.Label,
  {
    ref: r,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
ld.displayName = Q.Label.displayName;
const Xt = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  Q.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(Q.ItemIndicator, { children: /* @__PURE__ */ n(Pt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ n(Q.ItemText, { children: t })
    ]
  }
));
Xt.displayName = Q.Item.displayName;
const dd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Q.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
dd.displayName = Q.Separator.displayName;
const Cc = ({
  name: e,
  label: t,
  placeholder: r,
  options: o,
  helpText: s,
  isLoading: l,
  ...d
}) => {
  const u = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: u.control,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ c(Me, { children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ c(
          Mo,
          {
            onValueChange: g.onChange,
            value: g.value,
            defaultValue: g.value,
            ...d,
            children: [
              /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(Or, { isLoading: l, children: /* @__PURE__ */ n(Do, { placeholder: r }) }) }),
              /* @__PURE__ */ n(Vr, { children: o.map((m) => /* @__PURE__ */ n(Xt, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ n(zo, { children: s }),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
}, Lo = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ n(
    Qn.Root,
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
Lo.displayName = Qn.Root.displayName;
const Sc = $.Root, Rc = $.Trigger, kc = $.Close, cd = $.Portal, Eo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Eo.displayName = $.Overlay.displayName;
const ud = Re(
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
), md = i.forwardRef(({ side: e = "right", className: t, children: r, ...o }, s) => /* @__PURE__ */ c(cd, { children: [
  /* @__PURE__ */ n(Eo, {}),
  /* @__PURE__ */ c(
    $.Content,
    {
      ref: s,
      className: a(ud({ side: e }), t),
      ...o,
      children: [
        r,
        /* @__PURE__ */ c($.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ n(Tt, { className: "h-4 w-4" }),
          /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
md.displayName = $.Content.displayName;
const fd = ({
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
fd.displayName = "SheetHeader";
const pd = ({
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
pd.displayName = "SheetFooter";
const gd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Title,
  {
    ref: r,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
gd.displayName = $.Title.displayName;
const hd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  $.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
hd.displayName = $.Description.displayName;
const bd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Sr.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ n(
      Sr.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
bd.displayName = Sr.Root.displayName;
const Pc = qe.Root, xd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  qe.List,
  {
    ref: r,
    className: a(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
xd.displayName = qe.List.displayName;
const yd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  qe.Trigger,
  {
    ref: r,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
yd.displayName = qe.Trigger.displayName;
const wd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  qe.Content,
  {
    ref: r,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
wd.displayName = qe.Content.displayName;
const Oo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Oo.displayName = "Textarea";
const vd = ({
  name: e,
  label: t,
  placeholder: r,
  ...o
}) => {
  const s = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: s.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(Me, { children: [
        !!t && /* @__PURE__ */ n(De, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(Oo, { placeholder: r, ...o, ...l }) }),
        /* @__PURE__ */ n(_e, {})
      ] })
    }
  );
};
vd.displayName = "TextareaForm";
const Nd = ge.Provider, Cd = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, Vo = i.forwardRef(({ className: e, position: t = "bottom-right", ...r }, o) => /* @__PURE__ */ n(
  ge.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Cd[t]}`,
      e
    ),
    ...r
  }
));
Vo.displayName = ge.Viewport.displayName;
const Sd = Re(
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
), jo = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  ge.Root,
  {
    ref: o,
    className: a(Sd({ variant: t }), e),
    ...r
  }
));
jo.displayName = ge.Root.displayName;
const Rd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ge.Action,
  {
    ref: r,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Rd.displayName = ge.Action.displayName;
const Fo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ge.Close,
  {
    ref: r,
    className: a(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ n(Tt, { className: "h-4 w-4" })
  }
));
Fo.displayName = ge.Close.displayName;
const Ho = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ge.Title,
  {
    ref: r,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
Ho.displayName = ge.Title.displayName;
const Bo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ge.Description,
  {
    ref: r,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
Bo.displayName = ge.Description.displayName;
const kd = 5, Pd = 1e4;
let wr = 0;
function zd() {
  return wr = (wr + 1) % Number.MAX_SAFE_INTEGER, wr.toString();
}
const vr = /* @__PURE__ */ new Map(), Cn = (e) => {
  if (vr.has(e))
    return;
  const t = setTimeout(() => {
    vr.delete(e), Nt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Pd);
  vr.set(e, t);
}, Td = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, kd)
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
      return r ? Cn(r) : e.toasts.forEach((o) => {
        Cn(o.id);
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
}, Wt = [];
let $t = { toasts: [] };
function Nt(e) {
  $t = Td($t, e), Wt.forEach((t) => {
    t($t);
  });
}
function Id({ ...e }) {
  const t = zd(), r = (s) => Nt({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => Nt({ type: "DISMISS_TOAST", toastId: t });
  return Nt({
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
function Md() {
  const [e, t] = i.useState($t);
  return i.useEffect(() => (Wt.push(t), () => {
    const r = Wt.indexOf(t);
    r > -1 && Wt.splice(r, 1);
  }), [e]), {
    ...e,
    toast: Id,
    dismiss: (r) => Nt({ type: "DISMISS_TOAST", toastId: r })
  };
}
function zc() {
  const { toasts: e } = Md();
  return /* @__PURE__ */ c(Nd, { children: [
    e.map(function({ id: t, title: r, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(jo, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ n(Ho, { children: r }),
          o && /* @__PURE__ */ n(Bo, { children: o })
        ] }),
        s,
        /* @__PURE__ */ n(Fo, {})
      ] }, t);
    }),
    /* @__PURE__ */ n(Vo, {})
  ] });
}
const Wo = Re(
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
), Dd = i.forwardRef(({ className: e, variant: t, size: r, ...o }, s) => /* @__PURE__ */ n(
  Jn.Root,
  {
    ref: s,
    className: a(Wo({ variant: t, size: r, className: e })),
    ...o
  }
));
Dd.displayName = Jn.Root.displayName;
const $o = i.createContext({
  size: "default",
  variant: "default"
}), _d = i.forwardRef(({ className: e, variant: t, size: r, children: o, ...s }, l) => /* @__PURE__ */ n(
  Jt.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ n($o.Provider, { value: { variant: t, size: r }, children: o })
  }
));
_d.displayName = Jt.Root.displayName;
const Ad = i.forwardRef(({ className: e, children: t, variant: r, size: o, ...s }, l) => {
  const d = i.useContext($o);
  return /* @__PURE__ */ n(
    Jt.Item,
    {
      ref: l,
      className: a(
        Wo({
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
Ad.displayName = Jt.Item.displayName;
export {
  Zd as Accordion,
  hs as AccordionContent,
  ps as AccordionItem,
  gs as AccordionTrigger,
  xs as Alert,
  ws as AlertDescription,
  ec as AlertDialog,
  Ps as AlertDialogAction,
  zs as AlertDialogCancel,
  Ns as AlertDialogContent,
  ks as AlertDialogDescription,
  Ss as AlertDialogFooter,
  Cs as AlertDialogHeader,
  Zn as AlertDialogOverlay,
  vs as AlertDialogPortal,
  Rs as AlertDialogTitle,
  tc as AlertDialogTrigger,
  ys as AlertTitle,
  Ts as AsyncSelect,
  rc as AsyncSelectForm,
  Ms as Avatar,
  _s as AvatarFallback,
  Ds as AvatarImage,
  Rr as Badge,
  Ls as Breadcrumb,
  Hs as BreadcrumbEllipsis,
  Os as BreadcrumbItem,
  Vs as BreadcrumbLink,
  Es as BreadcrumbList,
  js as BreadcrumbPage,
  Fs as BreadcrumbSeparator,
  re as Button,
  ro as Calendar,
  Mi as CalendarDayButton,
  Di as Card,
  Ei as CardContent,
  Li as CardDescription,
  Oi as CardFooter,
  _i as CardHeader,
  Ai as CardTitle,
  Vi as Carousel,
  ji as CarouselContent,
  Fi as CarouselItem,
  Bi as CarouselNext,
  Hi as CarouselPrevious,
  $i as ChartContainer,
  sc as ChartLegend,
  Ui as ChartLegendContent,
  qi as ChartStyle,
  ac as ChartTooltip,
  Ki as ChartTooltipContent,
  at as Checkbox,
  Gi as Combobox,
  ic as ComboboxForm,
  It as Command,
  lc as CommandDialog,
  rr as CommandEmpty,
  Mt as CommandGroup,
  er as CommandInput,
  He as CommandItem,
  tr as CommandList,
  so as CommandSeparator,
  Xi as CommandShortcut,
  Dt as DEFAULT_FLASH_TABLE_LABELS,
  Ji as DatePicker,
  dc as DatePickerForm,
  po as DateTimePicker,
  cc as DateTimePickerForm,
  go as Dialog,
  uc as DialogClose,
  _r as DialogContent,
  yo as DialogDescription,
  gl as DialogFooter,
  bo as DialogHeader,
  ho as DialogOverlay,
  pl as DialogPortal,
  xo as DialogTitle,
  fl as DialogTrigger,
  mc as DropdownMenu,
  wl as DropdownMenuCheckboxItem,
  xl as DropdownMenuContent,
  pc as DropdownMenuGroup,
  yl as DropdownMenuItem,
  Nl as DropdownMenuLabel,
  gc as DropdownMenuPortal,
  bc as DropdownMenuRadioGroup,
  vl as DropdownMenuRadioItem,
  Cl as DropdownMenuSeparator,
  Sl as DropdownMenuShortcut,
  hc as DropdownMenuSub,
  bl as DropdownMenuSubContent,
  hl as DropdownMenuSubTrigger,
  fc as DropdownMenuTrigger,
  jl as FlashTable,
  _l as FlashTableColumnManager,
  Ll as FlashTableContextMenu,
  El as FlashTableHeaderCell,
  Ml as FlashTableHelpDialog,
  Al as FlashTableToolbar,
  xc as Form,
  dt as FormControl,
  zo as FormDescription,
  Ue as FormField,
  Me as FormItem,
  De as FormLabel,
  _e as FormMessage,
  yc as Heading,
  ar as Input,
  wc as InputForm,
  lr as Label,
  Xl as ListItem,
  Yl as MaskedInput,
  Jl as MultiSelect,
  Bl as NavigationMenu,
  Kl as NavigationMenuContent,
  Gl as NavigationMenuIndicator,
  vc as NavigationMenuItem,
  Ul as NavigationMenuLink,
  Wl as NavigationMenuList,
  ql as NavigationMenuTrigger,
  To as NavigationMenuViewport,
  Zl as Pagination,
  ed as PaginationContent,
  od as PaginationEllipsis,
  td as PaginationItem,
  Er as PaginationLink,
  nd as PaginationNext,
  rd as PaginationPrevious,
  it as Popover,
  Ke as PopoverContent,
  lt as PopoverTrigger,
  ad as RadioGroup,
  sd as RadioGroupItem,
  id as ScrollArea,
  Io as ScrollBar,
  Mo as Select,
  Vr as SelectContent,
  Cc as SelectForm,
  Nc as SelectGroup,
  Xt as SelectItem,
  ld as SelectLabel,
  Ao as SelectScrollDownButton,
  _o as SelectScrollUpButton,
  dd as SelectSeparator,
  Or as SelectTrigger,
  Do as SelectValue,
  Lo as Separator,
  Sc as Sheet,
  kc as SheetClose,
  md as SheetContent,
  hd as SheetDescription,
  pd as SheetFooter,
  fd as SheetHeader,
  Eo as SheetOverlay,
  cd as SheetPortal,
  gd as SheetTitle,
  Rc as SheetTrigger,
  wo as Skeleton,
  bd as Switch,
  Rl as Table,
  No as TableBody,
  kl as TableCaption,
  Ve as TableCell,
  Co as TableFooter,
  So as TableHead,
  vo as TableHeader,
  Te as TableRow,
  Pc as Tabs,
  wd as TabsContent,
  xd as TabsList,
  yd as TabsTrigger,
  Oo as Textarea,
  vd as TextareaForm,
  fo as TimePicker,
  Bt as TimePickerInput,
  jo as Toast,
  Rd as ToastAction,
  Fo as ToastClose,
  Bo as ToastDescription,
  Nd as ToastProvider,
  Ho as ToastTitle,
  Vo as ToastViewport,
  zc as Toaster,
  Dd as Toggle,
  _d as ToggleGroup,
  Ad as ToggleGroupItem,
  Ar as Tooltip,
  or as TooltipContent,
  Pl as TooltipProvider,
  Lr as TooltipTrigger,
  As as badgeVariants,
  oc as brazillianStates,
  Tl as buildDefaultPinning,
  $e as buttonVariants,
  a as cn,
  vt as extractColumnId,
  Gt as getColumnLabel,
  ir as isActionsColumnDef,
  Ro as isActionsColumnId,
  sr as isExpansionColumnId,
  tt as isSameArray,
  Rt as isSelectionColumnId,
  Se as isSystemLeftColumnId,
  nc as mask,
  $l as navigationMenuTriggerStyle,
  wn as reconcileColumnOrder,
  Td as reducer,
  zl as resolveStorageScope,
  Id as toast,
  Wo as toggleVariants,
  Ol as useFlashTablePersistence,
  dr as useFormField,
  Md as useToast
};
