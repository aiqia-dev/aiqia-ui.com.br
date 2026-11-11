import { jsx as n, jsxs as c, Fragment as je } from "react/jsx-runtime";
import * as i from "react";
import kt, { useState as ie, useEffect as we, useCallback as ne, useImperativeHandle as Mn, useRef as ye, isValidElement as Fa, useMemo as ue, useLayoutEffect as Ha, Fragment as Ba } from "react";
import * as Be from "@radix-ui/react-accordion";
import { ChevronDown as We, ChevronsUpDown as Dn, Loader2 as nt, Check as Pt, MoreHorizontal as In, ChevronRight as zt, ChevronLeftIcon as Wa, ChevronRightIcon as $a, ChevronDownIcon as qa, ArrowLeft as Ka, ArrowRight as Ua, Search as _n, CalendarIcon as Ga, Clock as Xa, Calendar as Ya, X as Tt, Circle as An, HelpCircle as xn, Mouse as Qa, Columns3 as Ln, Pin as Jt, MoveHorizontal as Ja, ArrowUpDown as En, Rows3 as _r, RotateCcw as Zt, MousePointerClick as Za, Eye as Ar, ChevronLeft as On, AlignJustify as Vn, Rows2 as jn, GripVertical as Fn, Lock as Hn, Info as es, ArrowUp as ts, ArrowDown as rs, XCircle as yn, XIcon as ns, Plus as os, CheckIcon as vn, WandSparkles as as, ChevronUp as ss } from "lucide-react";
import { clsx as is } from "clsx";
import { twMerge as ls } from "tailwind-merge";
import { cva as ze } from "class-variance-authority";
import * as de from "@radix-ui/react-alert-dialog";
import { useFormContext as Ie, FormProvider as ds, Controller as cs } from "react-hook-form";
import * as st from "@radix-ui/react-avatar";
import { Slot as Bn } from "@radix-ui/react-slot";
import { Link as us } from "react-router-dom";
import { TZDate as ve, getDefaultClassNames as Wn, DayPicker as ms } from "react-day-picker";
import fs from "embla-carousel-react";
import * as Lr from "recharts";
import * as kr from "@radix-ui/react-checkbox";
import { Command as me } from "cmdk";
import { format as $n, parse as qn, isValid as Kn, add as ps } from "date-fns";
import * as Ct from "@radix-ui/react-popover";
import * as q from "@radix-ui/react-dialog";
import * as G from "@radix-ui/react-dropdown-menu";
import { useSensors as Un, useSensor as Ut, PointerSensor as Gn, KeyboardSensor as Xn, DndContext as Yn, closestCenter as Qn } from "@dnd-kit/core";
import { restrictToVerticalAxis as gs, restrictToHorizontalAxis as hs } from "@dnd-kit/modifiers";
import { sortableKeyboardCoordinates as Jn, SortableContext as Zn, verticalListSortingStrategy as bs, arrayMove as rt, useSortable as eo, horizontalListSortingStrategy as xs } from "@dnd-kit/sortable";
import { flexRender as Pr, useReactTable as ys, getExpandedRowModel as vs, getSortedRowModel as ws, getCoreRowModel as Ns } from "@tanstack/react-table";
import * as ot from "@radix-ui/react-tooltip";
import { CSS as to } from "@dnd-kit/utilities";
import * as ro from "@radix-ui/react-label";
import * as fe from "@radix-ui/react-navigation-menu";
import * as St from "@radix-ui/react-radio-group";
import * as Fe from "@radix-ui/react-scroll-area";
import * as Z from "@radix-ui/react-select";
import * as no from "@radix-ui/react-separator";
import * as zr from "@radix-ui/react-switch";
import * as qe from "@radix-ui/react-tabs";
import * as he from "@radix-ui/react-toast";
import * as oo from "@radix-ui/react-toggle";
import * as er from "@radix-ui/react-toggle-group";
function a(...e) {
  return ls(is(e));
}
const lc = Be.Root, Cs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Be.Item,
  {
    ref: r,
    className: a("border-b", e),
    ...t
  }
));
Cs.displayName = "AccordionItem";
const Ss = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(Be.Header, { className: "flex", children: /* @__PURE__ */ c(
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
Ss.displayName = Be.Trigger.displayName;
const Rs = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ n(
  Be.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...r,
    children: /* @__PURE__ */ n("div", { className: a("pb-4 pt-0", e), children: t })
  }
));
Rs.displayName = Be.Content.displayName;
const ks = ze(
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
), Ps = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  "div",
  {
    ref: o,
    role: "alert",
    className: a(ks({ variant: t }), e),
    ...r
  }
));
Ps.displayName = "Alert";
const zs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "h5",
  {
    ref: r,
    className: a("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
zs.displayName = "AlertTitle";
const Ts = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Ts.displayName = "AlertDescription";
const dc = de.Root, cc = de.Trigger, Ms = de.Portal, ao = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  de.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
ao.displayName = de.Overlay.displayName;
const Ds = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(Ms, { children: [
  /* @__PURE__ */ n(ao, {}),
  /* @__PURE__ */ n(
    de.Content,
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
Ds.displayName = de.Content.displayName;
const Is = ({
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
Is.displayName = "AlertDialogHeader";
const _s = ({
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
_s.displayName = "AlertDialogFooter";
const As = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  de.Title,
  {
    ref: r,
    className: a("text-lg font-semibold", e),
    ...t
  }
));
As.displayName = de.Title.displayName;
const Ls = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  de.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Ls.displayName = de.Description.displayName;
const Es = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  de.Action,
  {
    ref: r,
    className: a($e(), e),
    ...t
  }
));
Es.displayName = de.Action.displayName;
const Os = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  de.Cancel,
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
Os.displayName = de.Cancel.displayName;
function Vs({
  options: e,
  isLoading: t,
  renderOption: r,
  getOptionValue: o,
  getDisplayValue: s,
  label: l,
  placeholder: d = "Selecione...",
  value: u,
  onChange: h,
  onSearchChange: m,
  disabled: P = !1,
  triggerClassName: k,
  noResultsMessage: S,
  clearable: A = !0,
  error: R
}) {
  const [f, g] = ie(!1), [C, v] = ie(u), [b, M] = ie(null), [z, x] = ie("");
  we(() => {
    v(u);
  }, [u]), we(() => {
    if (u && e.length > 0) {
      const T = e.find((D) => o(D) === u);
      T && M(T);
    }
  }, [u, e, o]);
  const L = ne(
    (T) => {
      const D = A && T === C ? "" : T;
      u && v(D), M(
        e.find((_) => o(_) === D) || null
      ), h(D), g(!1);
    },
    [C, h, A, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!l && /* @__PURE__ */ n(cr, { className: a(R && "text-destructive"), children: l }),
    /* @__PURE__ */ c(it, { open: f, onOpenChange: g, children: [
      /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
        ae,
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
            /* @__PURE__ */ n("div", { className: "truncate", children: u && b ? s(b) : d }),
            /* @__PURE__ */ n(Dn, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Ke, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Mt, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ n(
            rr,
            {
              placeholder: "Buscar",
              value: z,
              onValueChange: (T) => {
                x(T), m(T);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ n("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ n(nt, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(nr, { children: [
          t && e.length === 0 && /* @__PURE__ */ n(js, {}),
          !t && e.length === 0 && /* @__PURE__ */ n(or, { children: /* @__PURE__ */ n("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: S ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ n(Dt, { children: e.map((T) => /* @__PURE__ */ c(
            He,
            {
              value: o(T),
              onSelect: L,
              children: [
                /* @__PURE__ */ n(
                  Pt,
                  {
                    className: a(
                      "mr-2 size-4 shrink-0",
                      C === o(T) ? "opacity-100" : "opacity-0"
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
function js() {
  return /* @__PURE__ */ n(Dt, { children: [1, 2, 3].map((e) => /* @__PURE__ */ n(He, { disabled: !0, className: "p-0", children: /* @__PURE__ */ n(ko, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const uc = ({
  name: e,
  label: t,
  disabled: r,
  isLoading: o,
  options: s,
  placeholder: l = "Selecione",
  onSearchChange: d,
  getDisplayValue: u,
  getOptionValue: h,
  renderOption: m
}) => {
  const { control: P } = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      name: e,
      control: P,
      render: ({ field: k }) => /* @__PURE__ */ c(_e, { children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(
          Vs,
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
            disabled: r
          }
        ),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
}, Fs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Fs.displayName = st.Root.displayName;
const Hs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  st.Image,
  {
    ref: r,
    className: a("aspect-square h-full w-full", e),
    ...t
  }
));
Hs.displayName = st.Image.displayName;
const Bs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Bs.displayName = st.Fallback.displayName;
const Ws = ze(
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
function Tr({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ n("div", { className: a(Ws({ variant: t }), e), ...r });
}
const $s = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ n("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
$s.displayName = "Breadcrumb";
const qs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
qs.displayName = "BreadcrumbList";
const Ks = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "li",
  {
    ref: r,
    className: a("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ks.displayName = "BreadcrumbItem";
const Us = i.forwardRef(({ asChild: e, className: t, ...r }, o) => /* @__PURE__ */ n(
  e ? Bn : "a",
  {
    ref: o,
    className: a("transition-colors hover:text-foreground", t),
    ...r
  }
));
Us.displayName = "BreadcrumbLink";
const Gs = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Gs.displayName = "BreadcrumbPage";
const Xs = ({
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
Xs.displayName = "BreadcrumbSeparator";
const Ys = ({
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
      /* @__PURE__ */ n(In, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More" })
    ]
  }
);
Ys.displayName = "BreadcrumbElipssis";
const Qs = {
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
}, $e = ze(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: Qs,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ae = i.forwardRef(({ className: e, variant: t, size: r, disabled: o, href: s, ...l }, d) => /* @__PURE__ */ n(je, { children: s ? /* @__PURE__ */ n(
  us,
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
ae.displayName = "Button";
const Js = "(##) ####-####", Zs = "(##) #####-####", ei = "#####-###", ti = "###.###.###-##", ri = "##.###.###/####-##", ni = "###########", oi = "##.###.###-#", ai = "AAA#A##", si = "###########", ii = "##############", so = (e, t) => {
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
}, mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: Zs,
  CNH_MASK: ni,
  CNPJ_MASK: ri,
  CPF_MASK: ti,
  PHONE_MASK: Js,
  PLATE_MASK: ai,
  RENAVAM_MASK: si,
  RG_MASK: oi,
  RNTRC_MASK: ii,
  ZIP_CODE_MASK: ei,
  formatMask: so
}, Symbol.toStringTag, { value: "Module" })), fc = [
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
function Cr(e) {
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
    const d = l[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], h = Array.isArray(u) ? di(u, (k) => k.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      li(u, (k) => k.test(d))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(h) : h, m = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(m)
    ) : m;
    const P = t.slice(d.length);
    return { value: m, rest: P };
  };
}
function li(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function di(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ci(e) {
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
const ui = {
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
}, mi = (e, t, r) => {
  let o;
  const s = ui[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), r?.addSuffix ? r.comparison && r.comparison > 0 ? "em " + o : "há " + o : o;
}, fi = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, pi = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, gi = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hi = {
  date: Cr({
    formats: fi,
    defaultWidth: "full"
  }),
  time: Cr({
    formats: pi,
    defaultWidth: "full"
  }),
  dateTime: Cr({
    formats: gi,
    defaultWidth: "full"
  })
}, bi = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, xi = (e, t, r, o) => {
  const s = bi[e];
  return typeof s == "function" ? s(t) : s;
}, yi = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, vi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, wi = {
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
}, Ni = {
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
}, Ci = {
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
}, Si = {
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
}, Ri = (e, t) => {
  const r = Number(e);
  return t?.unit === "week" ? r + "ª" : r + "º";
}, ki = {
  ordinalNumber: Ri,
  era: xt({
    values: yi,
    defaultWidth: "wide"
  }),
  quarter: xt({
    values: vi,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: xt({
    values: wi,
    defaultWidth: "wide"
  }),
  day: xt({
    values: Ni,
    defaultWidth: "wide"
  }),
  dayPeriod: xt({
    values: Ci,
    defaultWidth: "wide",
    formattingValues: Si,
    defaultFormattingWidth: "wide"
  })
}, Pi = /^(\d+)[ºªo]?/i, zi = /\d+/i, Ti = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Mi = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Di = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Ii = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, _i = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, Ai = {
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
}, Li = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Ei = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Oi = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Vi = {
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
}, ji = {
  ordinalNumber: ci({
    matchPattern: Pi,
    parsePattern: zi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yt({
    matchPatterns: Ti,
    defaultMatchWidth: "wide",
    parsePatterns: Mi,
    defaultParseWidth: "any"
  }),
  quarter: yt({
    matchPatterns: Di,
    defaultMatchWidth: "wide",
    parsePatterns: Ii,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yt({
    matchPatterns: _i,
    defaultMatchWidth: "wide",
    parsePatterns: Ai,
    defaultParseWidth: "any"
  }),
  day: yt({
    matchPatterns: Li,
    defaultMatchWidth: "wide",
    parsePatterns: Ei,
    defaultParseWidth: "any"
  }),
  dayPeriod: yt({
    matchPatterns: Oi,
    defaultMatchWidth: "any",
    parsePatterns: Vi,
    defaultParseWidth: "any"
  })
}, io = {
  code: "pt-BR",
  formatDistance: mi,
  formatLong: hi,
  formatRelative: xi,
  localize: ki,
  match: ji,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function lo({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: l = io,
  formatters: d,
  components: u,
  startMonth: h,
  endMonth: m,
  timeZone: P = "America/Sao_Paulo",
  ...k
}) {
  const S = new ve(/* @__PURE__ */ new Date(), P), A = new ve(S.getFullYear() - 100, 0, 1, P), R = new ve(S.getFullYear() + 10, 11, 31, P), f = Wn();
  return /* @__PURE__ */ n(
    ms,
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
      startMonth: h ?? A,
      endMonth: m ?? R,
      locale: l,
      formatters: {
        formatMonthDropdown: (g) => g.toLocaleString(l?.code, { month: "short" }),
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
        Root: ({ className: g, rootRef: C, ...v }) => /* @__PURE__ */ n(
          "div",
          {
            "data-slot": "calendar",
            ref: C,
            className: a(g),
            ...v
          }
        ),
        Chevron: ({ className: g, orientation: C, ...v }) => C === "left" ? /* @__PURE__ */ n(Wa, { className: a("cn-rtl-flip size-4", g), ...v }) : C === "right" ? /* @__PURE__ */ n($a, { className: a("cn-rtl-flip size-4", g), ...v }) : /* @__PURE__ */ n(qa, { className: a("size-4", g), ...v }),
        DayButton: ({ ...g }) => /* @__PURE__ */ n(Fi, { locale: l, ...g }),
        WeekNumber: ({ children: g, ...C }) => /* @__PURE__ */ n("td", { ...C, children: /* @__PURE__ */ n("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: g }) }),
        ...u
      },
      ...k
    }
  );
}
function Fi({
  className: e,
  day: t,
  modifiers: r,
  locale: o,
  ...s
}) {
  const l = Wn(), d = i.useRef(null);
  return i.useEffect(() => {
    r.focused && d.current?.focus();
  }, [r.focused]), /* @__PURE__ */ n(
    ae,
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
const Hi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Hi.displayName = "Card";
const Bi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
Bi.displayName = "CardHeader";
const Wi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Wi.displayName = "CardTitle";
const $i = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "p",
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
$i.displayName = "CardDescription";
const qi = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { ref: r, className: a("p-4", e), ...t }));
qi.displayName = "CardContent";
const Ki = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "div",
  {
    ref: r,
    className: a("flex items-center p-4 pt-0", e),
    ...t
  }
));
Ki.displayName = "CardFooter";
const co = i.createContext(null);
function tr() {
  const e = i.useContext(co);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Ui = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: o,
    className: s,
    children: l,
    ...d
  }, u) => {
    const [h, m] = fs(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [P, k] = i.useState(!1), [S, A] = i.useState(!1), R = i.useCallback((v) => {
      v && (k(v.canScrollPrev()), A(v.canScrollNext()));
    }, []), f = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), g = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), C = i.useCallback(
      (v) => {
        v.key === "ArrowLeft" ? (v.preventDefault(), f()) : v.key === "ArrowRight" && (v.preventDefault(), g());
      },
      [f, g]
    );
    return i.useEffect(() => {
      !m || !r || r(m);
    }, [m, r]), i.useEffect(() => {
      if (m)
        return R(m), m.on("reInit", R), m.on("select", R), () => {
          m?.off("select", R);
        };
    }, [m, R]), /* @__PURE__ */ n(
      co.Provider,
      {
        value: {
          carouselRef: h,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: f,
          scrollNext: g,
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
Ui.displayName = "Carousel";
const Gi = i.forwardRef(({ className: e, ...t }, r) => {
  const { carouselRef: o, orientation: s } = tr();
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
Gi.displayName = "CarouselContent";
const Xi = i.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: o } = tr();
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
Xi.displayName = "CarouselItem";
const Yi = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollPrev: d, canScrollPrev: u } = tr();
  return /* @__PURE__ */ c(
    ae,
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
        /* @__PURE__ */ n(Ka, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Yi.displayName = "CarouselPrevious";
const Qi = i.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...o }, s) => {
  const { orientation: l, scrollNext: d, canScrollNext: u } = tr();
  return /* @__PURE__ */ c(
    ae,
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
        /* @__PURE__ */ n(Ua, { className: "h-4 w-4" }),
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Qi.displayName = "CarouselNext";
const Ji = { light: "", dark: ".dark" }, uo = i.createContext(null);
function mo() {
  const e = i.useContext(uo);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Zi = i.forwardRef(({ id: e, className: t, children: r, config: o, ...s }, l) => {
  const d = i.useId(), u = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ n(uo.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
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
        /* @__PURE__ */ n(el, { id: u, config: o }),
        /* @__PURE__ */ n(Lr.ResponsiveContainer, { children: r })
      ]
    }
  ) });
});
Zi.displayName = "Chart";
const el = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return r.length ? /* @__PURE__ */ n(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Ji).map(
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
}, pc = Lr.Tooltip, tl = i.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: o = "dot",
    hideLabel: s = !1,
    hideIndicator: l = !1,
    label: d,
    labelFormatter: u,
    labelClassName: h,
    formatter: m,
    color: P,
    nameKey: k,
    labelKey: S
  }, A) => {
    const { config: R } = mo(), f = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [C] = t;
      if (!C)
        return null;
      const v = `${S || C.dataKey || C.name || "value"}`, b = Mr(R, C, v), M = !S && typeof d == "string" ? R[d]?.label || d : b?.label;
      return u ? /* @__PURE__ */ n("div", { className: a("font-medium", h), children: u(M, t) }) : M ? /* @__PURE__ */ n("div", { className: a("font-medium", h), children: M }) : null;
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
    const g = t.length === 1 && o !== "dot";
    return /* @__PURE__ */ c(
      "div",
      {
        ref: A,
        className: a(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          g ? null : f,
          /* @__PURE__ */ n("div", { className: "grid gap-1.5", children: t.map((C, v) => {
            if (!C)
              return null;
            const b = `${k || C.dataKey || C.name || "value"}`, M = Mr(R, C, b), z = P || C.payload.fill || C.color;
            return /* @__PURE__ */ n(
              "div",
              {
                className: a(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && C?.value !== void 0 && C.name ? m(C.value, C.name, C, v, C.payload) : /* @__PURE__ */ c(je, { children: [
                  M?.icon ? /* @__PURE__ */ n(M.icon, {}) : !l && /* @__PURE__ */ n(
                    "div",
                    {
                      className: a(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": g && o === "dashed"
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
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                          g ? f : null,
                          /* @__PURE__ */ n("span", { className: "text-muted-foreground", children: M?.label || C.name })
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
tl.displayName = "ChartTooltip";
const gc = Lr.Legend, rl = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: r, verticalAlign: o = "bottom", nameKey: s }, l) => {
    const { config: d } = mo();
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
          const h = `${s || u.dataKey || "value"}`, m = Mr(d, u, h);
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
rl.displayName = "ChartLegend";
function Mr(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : o && r in o && typeof o[r] == "string" && (s = o[r]), s in e ? e[s] : e[r];
}
const at = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  kr.Root,
  {
    ref: r,
    className: a(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(
      kr.Indicator,
      {
        className: a("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ n(Pt, { className: "size-4 h-full" })
      }
    )
  }
));
at.displayName = kr.Root.displayName;
function hc({
  name: e,
  label: t,
  options: r,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  disabled: d = !1,
  isLoading: u = !1
}) {
  const { control: h, setValue: m } = Ie();
  return /* @__PURE__ */ n(
    Ue,
    {
      control: h,
      name: e,
      render: ({ field: P }) => /* @__PURE__ */ c(_e, { children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(
          nl,
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
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
}
function nl({
  label: e,
  options: t,
  selected: r,
  onSelect: o,
  placeholder: s = "Selecione uma opção",
  searchPlaceholder: l = "Buscar...",
  emptyMessage: d = "Nenhum resultado encontrado.",
  error: u,
  disabled: h = !1,
  isLoading: m = !1
}) {
  const [P, k] = ie(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ n(cr, { children: e }),
    /* @__PURE__ */ c(it, { open: P, onOpenChange: k, children: [
      /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
        ae,
        {
          variant: "outline",
          disabled: h,
          className: a(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !r && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ n("div", { className: "truncate", children: r ? t.find((S) => S.value === r)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ n(nt, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ n(Dn, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ n(Ke, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(Mt, { children: [
        /* @__PURE__ */ n(rr, { placeholder: l }),
        /* @__PURE__ */ c(nr, { children: [
          /* @__PURE__ */ n(or, { children: d }),
          /* @__PURE__ */ n(Dt, { children: t.map((S) => /* @__PURE__ */ c(
            He,
            {
              value: S.label,
              onSelect: () => {
                r === S.value ? o(void 0) : o(S.value), k(!1);
              },
              children: [
                /* @__PURE__ */ n(
                  Pt,
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
const Mt = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me,
  {
    ref: r,
    className: a(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Mt.displayName = me.displayName;
const bc = ({ children: e, ...t }) => /* @__PURE__ */ n(wo, { ...t, children: /* @__PURE__ */ n(Or, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ n(Mt, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), rr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ n(_n, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ n(
    me.Input,
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
rr.displayName = me.Input.displayName;
const nr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.List,
  {
    ref: r,
    className: a("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
nr.displayName = me.List.displayName;
const or = i.forwardRef((e, t) => /* @__PURE__ */ n(
  me.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
or.displayName = me.Empty.displayName;
const Dt = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.Group,
  {
    ref: r,
    className: a(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Dt.displayName = me.Group.displayName;
const fo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.Separator,
  {
    ref: r,
    className: a("-mx-1 h-px bg-border", e),
    ...t
  }
));
fo.displayName = me.Separator.displayName;
const He = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  me.Item,
  {
    ref: r,
    className: a(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
He.displayName = me.Item.displayName;
const ol = ({
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
ol.displayName = "CommandShortcut";
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
function al(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (r += "/"), r += t[o];
  return r;
}
function sl(e) {
  const t = e.replace(/\D/g, "");
  let r = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (r += "/"), o === 8 && (r += " - "), (o === 10 || o === 12) && (r += "/"), r += t[o];
  return r;
}
function Gt(e) {
  if (e.length < 10) return null;
  const t = qn(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Kn(t) ? t : null;
}
function wn(e) {
  const t = e.split(" - "), r = Gt(t[0] ?? "");
  if (!r) return null;
  const o = t[1] ? Gt(t[1]) : void 0;
  return { from: r, to: o ?? void 0 };
}
function Ht(e) {
  return $n(e, "dd/MM/yyyy");
}
function Bt(e, t) {
  if (!e) return "";
  if (t === "range") {
    const r = e;
    return r.from ? r.to ? `${Ht(r.from)} - ${Ht(r.to)}` : Ht(r.from) : "";
  }
  return Ht(e);
}
function Nn(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function il({
  value: e,
  onChange: t,
  disabled: r,
  disabledDates: o,
  mode: s = "single",
  ...l
}) {
  const [d, u] = i.useState(e), [h, m] = i.useState(
    Nn(e)
  ), [P, k] = i.useState(
    Bt(e, s)
  ), [S, A] = i.useState(!1), R = i.useRef(null), f = i.useRef(
    Bt(e, s)
  ), g = i.useRef(!1);
  i.useEffect(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    const z = Bt(e, s);
    u(e), k(z), f.current = z;
    const x = Nn(e);
    x && m(x);
  }, [e]);
  function C(z) {
    g.current = !0;
    const x = Bt(z, s);
    u(z), k(x), f.current = x, t?.(z), s !== "range" && A(!1);
  }
  function v(z) {
    const x = z.target.value;
    if (x.replace(/\D/g, "") === "") {
      k(""), f.current = "", g.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const L = z.target.selectionStart ?? x.length, T = x.slice(0, L).replace(/\D/g, "").length, D = s === "range" ? sl(x) : al(x);
    if (k(D), requestAnimationFrame(() => {
      if (R.current) {
        let _ = 0, K = D.length;
        for (let Q = 0; Q < D.length; Q++)
          if (/\d/.test(D[Q]) && _++, _ === T) {
            K = Q + 1;
            break;
          }
        R.current.setSelectionRange(K, K);
      }
    }), s === "range") {
      const _ = wn(D);
      _ && (g.current = !0, u(_), f.current = D, _.from && m(_.from), t?.(_));
    } else {
      const _ = Gt(D);
      _ && (g.current = !0, u(_), m(_), f.current = D, t?.(_));
    }
  }
  function b() {
    !(s === "range" ? wn(P) !== null : Gt(P) !== null) && P !== "" && k(f.current);
  }
  const M = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(it, { open: S, onOpenChange: A, children: [
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
              onChange: v,
              onBlur: b,
              placeholder: M,
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
              children: /* @__PURE__ */ n(Ga, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ n(Ke, { className: "w-auto p-0", children: /* @__PURE__ */ n(
      lo,
      {
        mode: s,
        selected: d,
        onSelect: C,
        disabled: o,
        month: h,
        onMonthChange: m,
        timeZone: "America/Sao_Paulo",
        ...l
      }
    ) })
  ] });
}
const xc = ({
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
      render: ({ field: s }) => /* @__PURE__ */ c(_e, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(
          il,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
};
function ll(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function dl(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function cl(e) {
  return /^[0-5][0-9]$/.test(e);
}
function ar(e, { max: t, min: r = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = r), s < r && (s = t)) : (s > t && (s = t), s < r && (s = r)), s.toString().padStart(2, "0"));
}
function po(e) {
  return ll(e) ? e : ar(e, { max: 23 });
}
function go(e) {
  return dl(e) ? e : ar(e, { min: 1, max: 12 });
}
function Xt(e) {
  return cl(e) ? e : ar(e, { max: 59 });
}
function Er(e, { min: t, max: r, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, ar(String(s), { min: t, max: r, loop: !0 }));
}
function ul(e, t) {
  return Er(e, { min: 0, max: 23, step: t });
}
function ml(e, t) {
  return Er(e, { min: 1, max: 12, step: t });
}
function Cn(e, t) {
  return Er(e, { min: 0, max: 59, step: t });
}
function fl(e, t) {
  const r = Xt(t);
  return e.setMinutes(parseInt(r, 10)), e;
}
function pl(e, t) {
  const r = Xt(t);
  return e.setSeconds(parseInt(r, 10)), e;
}
function gl(e, t) {
  const r = po(t);
  return e.setHours(parseInt(r, 10)), e;
}
function hl(e, t, r) {
  const o = parseInt(go(t), 10), s = yl(o, r);
  return e.setHours(s), e;
}
function Dr(e, t, r, o) {
  switch (r) {
    case "minutes":
      return fl(e, t);
    case "seconds":
      return pl(e, t);
    case "hours":
      return gl(e, t);
    case "12hours":
      return o ? hl(e, t, o) : e;
    default:
      return e;
  }
}
function bl(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return Xt(String(e.getMinutes()));
    case "seconds":
      return Xt(String(e.getSeconds()));
    case "hours":
      return po(String(e.getHours()));
    case "12hours":
      return go(String(ho(e.getHours())));
    default:
      return "00";
  }
}
function xl(e, t, r) {
  switch (r) {
    case "minutes":
      return Cn(e, t);
    case "seconds":
      return Cn(e, t);
    case "hours":
      return ul(e, t);
    case "12hours":
      return ml(e, t);
    default:
      return "00";
  }
}
function yl(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function ho(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function bo(e) {
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
function vl(e) {
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
function wl(e, t) {
  const r = e.replace(/\D/g, ""), o = vl(t);
  let s = "";
  for (let l = 0; l < r.length && l < o; l++)
    (l === 2 || l === 4) && (s += "/"), l === 8 && (s += " "), (l === 10 || l === 12) && (s += ":"), s += r[l];
  return s;
}
function Sn(e, t) {
  const r = bo(t);
  if (e.length < r.length) return null;
  const o = qn(e.slice(0, r.length), r, new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Kn(o) ? o : null;
}
function vt(e, t) {
  return $n(e, bo(t));
}
const xo = i.forwardRef(
  ({ period: e, setPeriod: t, date: r, onDateChange: o, onLeftFocus: s, onRightFocus: l }, d) => {
    const u = (m) => {
      m.key === "ArrowRight" && l?.(), m.key === "ArrowLeft" && s?.();
    }, h = (m) => {
      if (t?.(m), r) {
        const P = new ve(r, "America/Sao_Paulo"), k = ho(r.getHours());
        o?.(
          Dr(
            P,
            k.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ n("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Oo,
      {
        defaultValue: e,
        onValueChange: (m) => h(m),
        children: [
          /* @__PURE__ */ n(
            Hr,
            {
              ref: d,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ n(Vo, {})
            }
          ),
          /* @__PURE__ */ c(Br, { children: [
            /* @__PURE__ */ n(Qt, { value: "AM", children: "AM" }),
            /* @__PURE__ */ n(Qt, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
xo.displayName = "TimePeriodSelect";
const $t = i.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: r,
    id: o,
    name: s,
    date: l = (() => {
      const f = new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return f.setHours(0, 0, 0, 0), f;
    })(),
    onDateChange: d,
    onChange: u,
    onKeyDown: h,
    picker: m,
    period: P,
    onLeftFocus: k,
    onRightFocus: S,
    ...A
  }, R) => {
    const [f, g] = i.useState(!1), [C, v] = i.useState("0");
    i.useEffect(() => {
      if (f) {
        const x = setTimeout(() => {
          g(!1);
        }, 2e3);
        return () => clearTimeout(x);
      }
    }, [f]);
    const b = i.useMemo(() => bl(l, m), [l, m]), M = (x) => m === "12hours" && f && b.slice(1, 2) === "1" && C === "0" ? `0${x}` : f ? b.slice(1, 2) + x : `0${x}`, z = (x) => {
      if (x.key !== "Tab") {
        if (x.preventDefault(), x.key === "ArrowRight" && S?.(), x.key === "ArrowLeft" && k?.(), ["ArrowUp", "ArrowDown"].includes(x.key)) {
          const L = x.key === "ArrowUp" ? 1 : -1, T = xl(b, L, m);
          f && g(!1);
          const D = l ? new ve(l, "America/Sao_Paulo") : new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Dr(D, T, m, P));
        }
        if (x.key >= "0" && x.key <= "9") {
          m === "12hours" && v(x.key);
          const L = M(x.key);
          f && S?.(), g((D) => !D);
          const T = l ? new ve(l, "America/Sao_Paulo") : new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          d?.(Dr(T, L, m, P));
        }
      }
    };
    return /* @__PURE__ */ n(
      ir,
      {
        ref: R,
        id: o || m,
        name: s || m,
        className: a(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: r || b,
        onChange: (x) => {
          x.preventDefault(), u?.(x);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (x) => {
          h?.(x), z(x);
        },
        ...A
      }
    );
  }
);
$t.displayName = "TimePickerInput";
const yo = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: r = 24, granularity: o = "second" }, s) => {
    const l = i.useRef(null), d = i.useRef(null), u = i.useRef(null), h = i.useRef(null), [m, P] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return Mn(
      s,
      () => ({
        minuteRef: l.current,
        hourRef: d.current,
        secondRef: u.current,
        periodRef: h.current
      }),
      [l, d, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ n("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ n(Xa, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ n(
        $t,
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
          $t,
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
          $t,
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
      r === 12 && /* @__PURE__ */ n("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ n(
        xo,
        {
          period: m,
          setPeriod: P,
          date: e,
          onDateChange: (k) => {
            t?.(k), k && k?.getHours() >= 12 ? P("PM") : P("AM");
          },
          ref: h,
          onLeftFocus: () => u?.current?.focus()
        }
      ) })
    ] });
  }
);
yo.displayName = "TimePicker";
const vo = i.forwardRef(
  ({
    locale: e = io,
    defaultPopupValue: t = (() => {
      const R = new ve(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return R.setHours(0, 0, 0, 0), R;
    })(),
    value: r,
    onChange: o,
    hourCycle: s = 24,
    yearRange: l = 50,
    disabled: d = !1,
    displayFormat: u,
    granularity: h = "minute",
    placeholder: m = "dd/mm/aaaa - hh:mm",
    className: P,
    disabledDates: k,
    ...S
  }, A) => {
    const [R, f] = i.useState(r ?? t), g = ye(null), C = ye(null), [v, b] = i.useState(r), [M, z] = i.useState(!1), [x, L] = i.useState(
      r ? vt(r, h) : ""
    ), T = ye(!1), D = ye(
      r ? vt(r, h) : ""
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
      const $ = (y.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), le = ps(t, {
        days: Math.ceil($)
      });
      le.setHours(
        R?.getHours() ?? 0,
        R?.getMinutes() ?? 0,
        R?.getSeconds() ?? 0
      ), o?.(le), f(le);
    };
    we(() => {
      if (T.current) {
        T.current = !1;
        return;
      }
      const y = r ? vt(r, h) : "";
      r ? (b(r), f(r)) : b(void 0), L(y), D.current = y;
    }, [r, h]);
    const K = (y) => {
      if (!y)
        return;
      T.current = !0;
      const O = vt(y, h);
      o?.(y), f(y), b(y), L(O), D.current = O;
    };
    Mn(
      A,
      () => ({
        ...g.current,
        value: v
      }),
      [v]
    );
    function Q(y) {
      const O = y.target.value;
      if (O.replace(/\D/g, "") === "") {
        L(""), D.current = "", T.current = !0, b(void 0), o?.(void 0);
        return;
      }
      const $ = y.target.selectionStart ?? O.length, le = O.slice(0, $).replace(/\D/g, "").length, be = wl(O, h);
      L(be), requestAnimationFrame(() => {
        if (C.current) {
          let Me = 0, pe = be.length;
          for (let Ce = 0; Ce < be.length; Ce++)
            if (/\d/.test(be[Ce]) && Me++, Me === le) {
              pe = Ce + 1;
              break;
            }
          C.current.setSelectionRange(pe, pe);
        }
      });
      const Ne = Sn(be, h);
      Ne && (T.current = !0, D.current = be, o?.(Ne), b(Ne), f(Ne));
    }
    function te() {
      !(Sn(x, h) !== null) && x !== "" && L(D.current);
    }
    return /* @__PURE__ */ c(it, { open: M, onOpenChange: z, children: [
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
                value: x,
                onChange: Q,
                onBlur: te,
                placeholder: m,
                disabled: d,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ n(lt, { asChild: !0, disabled: d, children: /* @__PURE__ */ n(
              "button",
              {
                ref: g,
                type: "button",
                disabled: d,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ n(Ya, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(Ke, { className: "w-auto p-0", children: [
        /* @__PURE__ */ n(
          lo,
          {
            selected: v,
            onSelect: (y) => {
              y && (y.setHours(
                R?.getHours() ?? 0,
                R?.getMinutes() ?? 0,
                R?.getSeconds() ?? 0
              ), K(y));
            },
            onMonthChange: _,
            month: v ?? R,
            locale: e,
            disabled: k,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...S,
            mode: "single"
          }
        ),
        h !== "day" && /* @__PURE__ */ n("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ n(
          yo,
          {
            onChange: (y) => {
              if (T.current = !0, o?.(y), b(y), y) {
                f(y);
                const O = vt(y, h);
                L(O), D.current = O;
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
vo.displayName = "DateTimePicker";
const yc = ({
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
      render: ({ field: s }) => /* @__PURE__ */ c(_e, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(
          vo,
          {
            value: s.value,
            onChange: s.onChange,
            ...r
          }
        ) }),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
}, wo = q.Root, Nl = q.Trigger, Cl = q.Portal, vc = q.Close, No = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Overlay,
  {
    ref: r,
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
No.displayName = q.Overlay.displayName;
const Or = i.forwardRef(({ className: e, onClose: t, ...r }, o) => /* @__PURE__ */ c(Cl, { children: [
  /* @__PURE__ */ n(No, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    q.Content,
    {
      ref: o,
      className: a(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ n(
          q.Close,
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
Or.displayName = q.Content.displayName;
const Co = ({
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
Co.displayName = "DialogHeader";
const Sl = ({
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
Sl.displayName = "DialogFooter";
const So = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Title,
  {
    ref: r,
    className: a(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
So.displayName = q.Title.displayName;
const Ro = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Ro.displayName = q.Description.displayName;
const wc = G.Root, Nc = G.Trigger, Cc = G.Group, Sc = G.Portal, Rc = G.Sub, kc = G.RadioGroup, Rl = i.forwardRef(({ className: e, inset: t, children: r, ...o }, s) => /* @__PURE__ */ c(
  G.SubTrigger,
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
Rl.displayName = G.SubTrigger.displayName;
const kl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  G.SubContent,
  {
    ref: r,
    className: a(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
kl.displayName = G.SubContent.displayName;
const Pl = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(G.Portal, { children: /* @__PURE__ */ n(
  G.Content,
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
Pl.displayName = G.Content.displayName;
const zl = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  G.Item,
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
zl.displayName = G.Item.displayName;
const Tl = i.forwardRef(({ className: e, children: t, checked: r, ...o }, s) => /* @__PURE__ */ c(
  G.CheckboxItem,
  {
    ref: s,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(G.ItemIndicator, { children: /* @__PURE__ */ n(Pt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Tl.displayName = G.CheckboxItem.displayName;
const Ml = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  G.RadioItem,
  {
    ref: o,
    className: a(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(G.ItemIndicator, { children: /* @__PURE__ */ n(An, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ml.displayName = G.RadioItem.displayName;
const Dl = i.forwardRef(({ className: e, inset: t, ...r }, o) => /* @__PURE__ */ n(
  G.Label,
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
Dl.displayName = G.Label.displayName;
const Il = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  G.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Il.displayName = G.Separator.displayName;
const _l = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  "span",
  {
    className: a("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
_l.displayName = "DropdownMenuShortcut";
function ko({
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
const Al = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ n(
  "table",
  {
    ref: r,
    className: a("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Al.displayName = "Table";
const Po = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "thead",
  {
    ref: r,
    className: a("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
Po.displayName = "TableHeader";
const zo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "tbody",
  {
    ref: r,
    className: a("[&_tr:last-child]:border-0", e),
    ...t
  }
));
zo.displayName = "TableBody";
const To = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
To.displayName = "TableFooter";
const De = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
De.displayName = "TableRow";
const Mo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Mo.displayName = "TableHead";
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
const Ll = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "caption",
  {
    ref: r,
    className: a("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Ll.displayName = "TableCaption";
const El = ot.Provider, Vr = ot.Root, jr = ot.Trigger, sr = i.forwardRef(({ className: e, sideOffset: t = 4, ...r }, o) => /* @__PURE__ */ n(ot.Portal, { children: /* @__PURE__ */ n(
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
sr.displayName = ot.Content.displayName;
const ir = kt.forwardRef(({ className: e, type: t, ...r }, o) => t === "textarea" ? /* @__PURE__ */ n(
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
)), It = {
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
}, Rn = {
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
function Ol(e) {
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
function wt(e, t) {
  return e.id ? e.id : "accessorKey" in e && typeof e.accessorKey == "string" ? e.accessorKey : `col_${t}`;
}
function Rt(e) {
  const t = e.trim().toLowerCase();
  return t === "select" || t === "selection" || t === "__select__";
}
function lr(e) {
  const t = e.trim().toLowerCase();
  return t === "expand" || t === "expander" || t === "__expand__";
}
function Pe(e) {
  return Rt(e) || lr(e);
}
function Do(e) {
  const t = e.trim().toLowerCase();
  return t === "actions" || t === "action" || t === "acoes" || t === "ações";
}
function dr(e, t, r, o, s) {
  return !!(t.meta?.isActions || o && Do(e) || s && r);
}
function Ir(e) {
  return typeof e == "string" || typeof e == "number" ? String(e).trim() : Array.isArray(e) ? e.map(Ir).filter(Boolean).join(" ").trim() : Fa(e) ? Ir(e.props.children) : "";
}
function Yt(e) {
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
      }), s = Ir(o);
      if (s)
        return s;
    } catch {
    }
  return Rn[e.id] ? Rn[e.id] : e.id.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^\w/, (o) => o.toUpperCase());
}
function Vl(e, t) {
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (const l of t.defaultPinnedLeft ?? [])
    r.add(l);
  for (const l of t.defaultPinnedRight ?? [])
    o.add(l);
  return e.forEach((l, d) => {
    const u = wt(l, d), h = l.meta, m = d === e.length - 1;
    if (Pe(u)) {
      r.add(u);
      return;
    }
    if (h?.defaultPinned === "left") {
      r.add(u);
      return;
    }
    (h?.defaultPinned === "right" || dr(
      u,
      l,
      m,
      t.pinActionsColumnRight,
      t.pinLastColumnRight
    )) && o.add(u);
  }), {
    left: Array.from(r).sort((l, d) => {
      const u = (h) => Rt(h) ? 0 : lr(h) ? 1 : 2;
      return u(l) - u(d);
    }),
    right: Array.from(o)
  };
}
function kn(e, t) {
  if (!e || e.length === 0)
    return t;
  const r = new Set(t), o = e.filter((d) => r.has(d)), s = new Set(o), l = [...o];
  return t.forEach((d, u) => {
    if (!s.has(d))
      if (Rt(d))
        l.unshift(d);
      else if (lr(d)) {
        const h = l.findIndex(Rt);
        l.splice(h + 1, 0, d);
      } else Do(d) || u === t.length - 1 ? l.push(d) : l.splice(Math.min(u, l.length), 0, d);
  }), l;
}
function tt(e = [], t = []) {
  return e.length !== t.length ? !1 : e.every((r, o) => r === t[o]);
}
const Pn = "inline-flex items-center px-1.5 py-0.5 text-[11px] font-mono font-medium bg-muted border border-border rounded text-foreground", jl = [
  {
    id: "horizontal-scroll",
    icon: /* @__PURE__ */ n(Qa, { className: "size-4" }),
    title: "Scroll horizontal",
    description: /* @__PURE__ */ c(je, { children: [
      "Segure ",
      /* @__PURE__ */ n("kbd", { className: Pn, children: "Ctrl" }),
      " + scroll do mouse sobre a tabela ou use as setas na barra superior."
    ] })
  },
  {
    id: "columns",
    icon: /* @__PURE__ */ n(Ln, { className: "size-4" }),
    title: "Exibir e reordenar colunas",
    description: "Use o botão Colunas para ocultar/exibir campos ou arraste os títulos para mudar a ordem."
  },
  {
    id: "pin",
    icon: /* @__PURE__ */ n(Jt, { className: "size-4" }),
    title: "Fixar colunas",
    description: "Clique no ícone de pin em Colunas (ou botão direito no cabeçalho) para fixar à esquerda."
  },
  {
    id: "resize",
    icon: /* @__PURE__ */ n(Ja, { className: "size-4" }),
    title: "Largura das colunas",
    description: "Arraste a borda direita do cabeçalho para ajustar ou dê duplo clique para restaurar."
  },
  {
    id: "sort",
    icon: /* @__PURE__ */ n(En, { className: "size-4" }),
    title: "Ordenação",
    description: /* @__PURE__ */ c(je, { children: [
      "Clique no título para ordenar. Segure",
      " ",
      /* @__PURE__ */ n("kbd", { className: Pn, children: "Shift" }),
      " para ordenar por múltiplas colunas."
    ] })
  },
  {
    id: "density",
    icon: /* @__PURE__ */ n(_r, { className: "size-4" }),
    title: "Densidade",
    description: "Alterne entre Ultra compacta, Compacta e Confortável nos ícones do topo."
  },
  {
    id: "context-and-reset",
    icon: /* @__PURE__ */ n(Za, { className: "size-4" }),
    title: "Menu rápido e padrão",
    description: /* @__PURE__ */ c(je, { children: [
      "Clique com o botão direito na tabela para atalhos ou clique em",
      " ",
      /* @__PURE__ */ n(Zt, { className: "inline size-3 align-text-bottom text-foreground" }),
      " ",
      "para restaurar o padrão."
    ] })
  }
];
function Fl({
  labels: e = It
}) {
  return /* @__PURE__ */ c(wo, { children: [
    /* @__PURE__ */ c(Vr, { children: [
      /* @__PURE__ */ n(jr, { asChild: !0, children: /* @__PURE__ */ n(Nl, { asChild: !0, children: /* @__PURE__ */ n(
        ae,
        {
          variant: "ghost",
          size: "iconSm",
          type: "button",
          "aria-label": e.helpButtonTooltip,
          children: /* @__PURE__ */ n(xn, {})
        }
      ) }) }),
      /* @__PURE__ */ n(sr, { side: "bottom", children: e.helpButtonTooltip })
    ] }),
    /* @__PURE__ */ c(Or, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ c(Co, { children: [
        /* @__PURE__ */ c(So, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ n(xn, { className: "size-4 text-primary" }),
          e.helpModalTitle
        ] }),
        /* @__PURE__ */ n(Ro, { children: e.helpModalDescription })
      ] }),
      /* @__PURE__ */ n("div", { className: "divide-y divide-border rounded-md border border-border bg-card", children: jl.map((t) => /* @__PURE__ */ c("div", { className: "flex items-start gap-3 p-2.5", children: [
        /* @__PURE__ */ n("div", { className: "size-8 rounded-md bg-muted text-foreground flex items-center justify-center shrink-0", children: t.icon }),
        /* @__PURE__ */ c("div", { className: "min-w-0 space-y-0.5", children: [
          /* @__PURE__ */ n("p", { className: "text-xs font-semibold text-foreground leading-tight", children: t.title }),
          /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground leading-relaxed", children: t.description })
        ] })
      ] }, t.id)) })
    ] })
  ] });
}
function Hl({
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
    transform: g,
    transition: C,
    isDragging: v
  } = eo({
    id: e.id,
    disabled: !P,
    animateLayoutChanges: () => !1
  }), b = {
    transform: to.Transform.toString(g),
    transition: C
  };
  return /* @__PURE__ */ c(
    "div",
    {
      ref: f,
      style: b,
      className: a(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        v ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative" : "hover:bg-muted/70",
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
              children: /* @__PURE__ */ n(Fn, { className: "size-3.5" })
            }
          ) : /* @__PURE__ */ n("span", { className: "w-4 shrink-0" }),
          S ? /* @__PURE__ */ n(
            at,
            {
              checked: e.getIsVisible(),
              onCheckedChange: (M) => e.toggleVisibility(!!M),
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
              /* @__PURE__ */ n(Hn, { className: "size-2.5" }),
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
              Jt,
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
function Bl({
  table: e,
  pinActionsColumnRight: t,
  pinLastColumnRight: r,
  enableColumnOrdering: o,
  enableColumnPinning: s,
  enableColumnVisibility: l,
  isCustomized: d,
  onReset: u,
  labels: h = It
}) {
  const [m, P] = ie(""), k = Un(
    Ut(Gn, {
      activationConstraint: { distance: 4 }
    }),
    Ut(Xn, {
      coordinateGetter: Jn
    })
  ), S = e.getAllLeafColumns(), A = S.filter(
    (v) => !Pe(v.id)
  ), R = m.trim().toLowerCase(), f = R ? A.filter(
    (v) => Yt(v).toLowerCase().includes(R)
  ) : A, g = A.filter(
    (v) => !v.getIsVisible()
  ).length, C = (v) => {
    const { active: b, over: M } = v;
    if (!M || b.id === M.id) return;
    const z = String(b.id), x = String(M.id), L = e.getState().columnOrder.length > 0 ? e.getState().columnOrder : S.map(($) => $.id), T = L.indexOf(z), D = L.indexOf(x);
    T !== -1 && D !== -1 && e.setColumnOrder(rt(L, T, D));
    const _ = e.getState().columnPinning.left ?? [], K = _.indexOf(z), Q = _.indexOf(x);
    K !== -1 && Q !== -1 && e.setColumnPinning(($) => ({
      ...$,
      left: rt($.left ?? [], K, Q)
    }));
    const te = e.getState().columnPinning.right ?? [], y = te.indexOf(z), O = te.indexOf(x);
    y !== -1 && O !== -1 && e.setColumnPinning(($) => ({
      ...$,
      right: rt($.right ?? [], y, O)
    }));
  };
  return /* @__PURE__ */ c(it, { children: [
    /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ c(
      ae,
      {
        variant: "outline",
        size: "sm",
        type: "button",
        title: h.customizeColumnsTitle,
        children: [
          /* @__PURE__ */ n(Ln, {}),
          /* @__PURE__ */ n("span", { children: h.columnsButton }),
          g > 0 && /* @__PURE__ */ c(
            Tr,
            {
              variant: "secondary",
              className: "ml-1 px-1.5 py-0 text-xs font-semibold",
              children: [
                A.length - g,
                "/",
                A.length
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c(Ke, { align: "end", className: "w-76 p-0 shadow-lg", children: [
      /* @__PURE__ */ c("div", { className: "p-2.5 border-b space-y-2 bg-muted/30", children: [
        /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-xs font-semibold text-foreground", children: h.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            g > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => e.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ n(Ar, { className: "size-3" }),
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
                  /* @__PURE__ */ n(Zt, { className: "size-3" }),
                  h.resetToDefault
                ]
              }
            )
          ] })
        ] }),
        A.length > 5 && /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ n(_n, { className: "size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" }),
          /* @__PURE__ */ n(
            ir,
            {
              value: m,
              onChange: (v) => P(v.target.value),
              placeholder: h.searchColumnsPlaceholder,
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
      /* @__PURE__ */ n("div", { className: "max-h-72 overflow-y-auto p-1.5 space-y-0.5", children: f.length === 0 ? /* @__PURE__ */ n("p", { className: "text-xs text-muted-foreground text-center py-4", children: h.noColumnsFound }) : /* @__PURE__ */ n(
        Yn,
        {
          sensors: k,
          collisionDetection: Qn,
          modifiers: [gs],
          onDragEnd: C,
          children: /* @__PURE__ */ n(
            Zn,
            {
              items: f.map((v) => v.id),
              strategy: bs,
              children: f.map((v, b) => {
                const M = b === S.length - 1, z = dr(
                  v.id,
                  v.columnDef,
                  M,
                  t,
                  r
                );
                return /* @__PURE__ */ n(
                  Hl,
                  {
                    column: v,
                    label: Yt(v),
                    isActionsCol: z,
                    enableColumnOrdering: o && !m.trim(),
                    enableColumnPinning: s,
                    enableColumnVisibility: l,
                    labels: h
                  },
                  v.id
                );
              })
            }
          )
        }
      ) }),
      /* @__PURE__ */ n("div", { className: "px-3 py-1.5 border-t bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground", children: /* @__PURE__ */ n("span", { children: h.columnManagerFooterHint }) })
    ] })
  ] });
}
function Wl({
  table: e,
  totalRecords: t,
  showTotalRecords: r = !0,
  showDensityToggle: o = !0,
  showHelpButton: s = !0,
  density: l,
  onDensityChange: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: h,
  enableColumnOrdering: m,
  enableColumnPinning: P,
  enableColumnVisibility: k,
  isCustomized: S,
  onReset: A,
  canScrollLeft: R,
  canScrollRight: f,
  onScrollHorizontal: g,
  toolbarLeftContent: C,
  toolbarRightContent: v,
  labels: b = It,
  className: M
}) {
  const x = e.getAllLeafColumns().filter(
    (D) => !Pe(D.id) && !D.getIsVisible()
  ).length, L = t ?? e.getRowModel().rows.length, T = R || f;
  return /* @__PURE__ */ c(
    "div",
    {
      className: a(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        M
      ),
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center gap-2 min-w-0", children: [
          r && /* @__PURE__ */ c("span", { className: "text-xs text-muted-foreground tabular-nums", children: [
            b.totalRecords,
            " ",
            /* @__PURE__ */ n("strong", { className: "font-semibold text-foreground", children: L.toLocaleString("pt-BR") })
          ] }),
          C,
          x > 0 && /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: () => e.toggleAllColumnsVisible(!0),
              title: b.showAllColumns,
              className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer",
              children: [
                /* @__PURE__ */ n(Ar, { className: "size-3" }),
                x,
                " ",
                x === 1 ? b.hiddenColumnSingular : b.hiddenColumnPlural
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5 ml-auto shrink-0", children: [
          v,
          T && /* @__PURE__ */ c("div", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ n(
              ae,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !R,
                onClick: () => g("left"),
                title: b.scrollLeft,
                "aria-label": b.scrollLeft,
                children: /* @__PURE__ */ n(On, {})
              }
            ),
            /* @__PURE__ */ n(
              ae,
              {
                type: "button",
                variant: "outline",
                size: "iconSm",
                disabled: !f,
                onClick: () => g("right"),
                title: b.scrollRight,
                "aria-label": b.scrollRight,
                children: /* @__PURE__ */ n(zt, {})
              }
            )
          ] }),
          o && /* @__PURE__ */ c(
            "div",
            {
              className: "hidden sm:inline-flex items-center gap-1",
              role: "group",
              "aria-label": b.densityLabel,
              children: [
                /* @__PURE__ */ n(
                  ae,
                  {
                    type: "button",
                    variant: l === "ultra-compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("ultra-compact"),
                    title: b.densityUltraCompact,
                    children: /* @__PURE__ */ n(Vn, {})
                  }
                ),
                /* @__PURE__ */ n(
                  ae,
                  {
                    type: "button",
                    variant: l === "compact" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("compact"),
                    title: b.densityCompact,
                    children: /* @__PURE__ */ n(_r, {})
                  }
                ),
                /* @__PURE__ */ n(
                  ae,
                  {
                    type: "button",
                    variant: l === "comfortable" ? "secondary" : "ghost",
                    size: "iconSm",
                    onClick: () => d("comfortable"),
                    title: b.densityComfortable,
                    children: /* @__PURE__ */ n(jn, {})
                  }
                )
              ]
            }
          ),
          (k || m || P) && /* @__PURE__ */ n(
            Bl,
            {
              table: e,
              pinActionsColumnRight: u,
              pinLastColumnRight: h,
              enableColumnOrdering: m,
              enableColumnPinning: P,
              enableColumnVisibility: k,
              isCustomized: S,
              onReset: A,
              labels: b
            }
          ),
          S && /* @__PURE__ */ c(Vr, { children: [
            /* @__PURE__ */ n(jr, { asChild: !0, children: /* @__PURE__ */ n(
              ae,
              {
                variant: "ghost",
                size: "iconSm",
                type: "button",
                onClick: A,
                "aria-label": b.resetToDefaultTooltip,
                children: /* @__PURE__ */ n(Zt, {})
              }
            ) }),
            /* @__PURE__ */ n(sr, { side: "bottom", children: b.resetToDefaultTooltip })
          ] }),
          s && /* @__PURE__ */ n(Fl, { labels: b })
        ] })
      ]
    }
  );
}
function $l({
  position: e,
  onClose: t,
  table: r,
  density: o,
  onDensityChange: s,
  showDensityToggle: l = !0,
  pinActionsColumnRight: d,
  pinLastColumnRight: u,
  enableColumnPinning: h,
  enableColumnVisibility: m,
  isCustomized: P,
  onReset: k,
  labels: S = It
}) {
  const A = ye(null);
  if (we(() => {
    if (!e) return;
    const b = (M) => {
      M instanceof KeyboardEvent && M.key !== "Escape" || M instanceof MouseEvent && A.current?.contains(M.target) || t();
    };
    return document.addEventListener("mousedown", b), document.addEventListener("keydown", b), () => {
      document.removeEventListener("mousedown", b), document.removeEventListener("keydown", b);
    };
  }, [e, t]), !e) return null;
  const R = r.getAllLeafColumns(), f = R.filter(
    (b) => !Pe(b.id)
  ), g = f.filter(
    (b) => !b.getIsVisible()
  ).length, C = typeof window < "u" ? Math.min(e.x, Math.max(16, window.innerWidth - 272)) : e.x, v = typeof window < "u" ? Math.min(e.y, Math.max(16, window.innerHeight - 380)) : e.y;
  return /* @__PURE__ */ c(
    "div",
    {
      ref: A,
      className: "fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95",
      style: { top: v, left: C },
      children: [
        /* @__PURE__ */ c("div", { className: "px-3 py-2 bg-muted/40 border-b flex items-center justify-between", children: [
          /* @__PURE__ */ n("span", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-wider", children: S.customizeColumnsTitle }),
          /* @__PURE__ */ c("div", { className: "flex items-center gap-1.5", children: [
            g > 0 && /* @__PURE__ */ c(
              "button",
              {
                type: "button",
                onClick: () => r.toggleAllColumnsVisible(!0),
                className: "inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer",
                title: S.showAllColumns,
                children: [
                  /* @__PURE__ */ n(Ar, { className: "size-3" }),
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
                  /* @__PURE__ */ n(Zt, { className: "size-3" }),
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
                  /* @__PURE__ */ n(Vn, { className: "size-2.5" }),
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
                  /* @__PURE__ */ n(_r, { className: "size-2.5" }),
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
                  /* @__PURE__ */ n(jn, { className: "size-2.5" }),
                  "Normal"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "max-h-64 overflow-y-auto p-1.5 space-y-0.5", children: f.map((b, M) => {
          const z = Yt(b), x = b.columnDef.meta, L = M === R.length - 1, T = dr(
            b.id,
            b.columnDef,
            L,
            d,
            u
          ), _ = b.getIsPinned() === "left", K = m && !T && b.getCanHide(), Q = h && !T && b.getCanPin() && x?.enablePinning !== !1;
          return /* @__PURE__ */ c(
            "div",
            {
              className: "flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70",
              children: [
                /* @__PURE__ */ c("label", { className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer", children: [
                  /* @__PURE__ */ n(
                    at,
                    {
                      checked: b.getIsVisible(),
                      disabled: !K,
                      onCheckedChange: (te) => b.toggleVisibility(!!te)
                    }
                  ),
                  /* @__PURE__ */ n("span", { className: "truncate text-xs", title: z, children: z })
                ] }),
                T ? /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                  /* @__PURE__ */ n(Hn, { className: "size-2.5" }),
                  S.pinnedRightBadge
                ] }) : Q ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    onClick: () => b.pin(_ ? !1 : "left"),
                    title: _ ? S.unpin : S.pinLeft,
                    "aria-label": _ ? S.unpin : S.pinLeft,
                    className: a(
                      "p-1 rounded-xs transition-colors cursor-pointer",
                      _ ? "text-primary bg-primary/15 hover:bg-primary/25" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    ),
                    children: /* @__PURE__ */ n(
                      Jt,
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
            b.id
          );
        }) })
      ]
    }
  );
}
function ql({
  header: e,
  density: t,
  enableColumnOrdering: r,
  enableColumnPinning: o,
  enableColumnResizing: s,
  isActionsCol: l,
  isSystemLeftCol: d,
  pinnedPosition: u,
  stickyOffset: h,
  isLastLeftPinned: m,
  isFirstRightPinned: P,
  canScrollLeft: k,
  canScrollRight: S,
  labels: A,
  className: R,
  onRegisterHeaderElement: f
}) {
  const { column: g } = e, C = g.columnDef.meta, v = r && !l && !d && C?.enableReordering !== !1, b = o && !l && !d && g.getCanPin() && C?.enablePinning !== !1, M = g.getCanSort(), z = g.getIsSorted(), x = g.getSortIndex(), L = e.getContext().table.getState().sorting.length > 1 && x >= 0, T = u === "left", D = u === "right", _ = T || D, {
    attributes: K,
    listeners: Q,
    setNodeRef: te,
    transform: y,
    transition: O,
    isDragging: $
  } = eo({
    id: g.id,
    disabled: !v,
    animateLayoutChanges: () => !1
  }), le = (F) => {
    te(F), f(g.id, F);
  }, be = y !== null && (y.x !== 0 || y.y !== 0), Ne = h ?? 0, Me = {
    width: e.getSize(),
    minWidth: g.columnDef.minSize ?? (_ ? e.getSize() : void 0),
    maxWidth: g.columnDef.maxSize,
    ...be ? {
      transform: to.Translate.toString(y),
      transition: O
    } : {},
    ..._ ? {
      backgroundColor: "var(--muted)"
    } : {},
    ...T ? { position: "sticky", left: `${Ne}px` } : {},
    ...D ? { position: "sticky", right: `${Ne}px` } : {}
  }, pe = ye(!1), Ce = e.getResizeHandler(), ct = (F) => {
    F.stopPropagation(), pe.current = !0;
    const J = () => {
      window.setTimeout(() => {
        pe.current = !1;
      }, 0), window.removeEventListener("mouseup", J);
    };
    window.addEventListener("mouseup", J), Ce(F);
  }, V = (F) => {
    F.stopPropagation(), pe.current = !0;
    const J = () => {
      window.setTimeout(() => {
        pe.current = !1;
      }, 0), window.removeEventListener("touchend", J), window.removeEventListener("touchcancel", J);
    };
    window.addEventListener("touchend", J), window.addEventListener("touchcancel", J), Ce(F);
  }, H = (F) => {
    pe.current || g.getIsResizing() || M && g.getToggleSortingHandler()?.(F);
  }, ee = (F) => {
    F.stopPropagation(), _ ? g.pin(!1) : g.pin("left");
  }, xe = Yt(g);
  return /* @__PURE__ */ c(
    Mo,
    {
      ref: le,
      style: Me,
      ...v ? K : {},
      ...v ? Q : {},
      onClick: M ? H : void 0,
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
        M && "cursor-pointer hover:text-foreground",
        v && !M && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        $ && "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
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
              v && /* @__PURE__ */ n(
                "span",
                {
                  className: "inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors",
                  title: A.columnManagerFooterHint,
                  children: /* @__PURE__ */ n(Fn, { className: "size-3" })
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
                        title: d ? void 0 : xe,
                        children: Pr(g.columnDef.header, e.getContext())
                      }
                    ),
                    C?.headerTooltip && /* @__PURE__ */ c(Vr, { children: [
                      /* @__PURE__ */ n(jr, { asChild: !0, children: /* @__PURE__ */ n(
                        "span",
                        {
                          onClick: (F) => F.stopPropagation(),
                          className: "inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0",
                          children: /* @__PURE__ */ n(es, { className: "size-3" })
                        }
                      ) }),
                      /* @__PURE__ */ n(sr, { side: "top", className: "max-w-xs font-normal normal-case tracking-normal", children: C.headerTooltip })
                    ] }),
                    M && /* @__PURE__ */ c("span", { className: "inline-flex items-center gap-0.5 shrink-0 ml-0.5", children: [
                      z === "asc" ? /* @__PURE__ */ n(ts, { className: "size-3.5 text-foreground" }) : z === "desc" ? /* @__PURE__ */ n(rs, { className: "size-3.5 text-foreground" }) : /* @__PURE__ */ n(En, { className: "size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" }),
                      L && /* @__PURE__ */ n("span", { className: "text-[9px] font-bold text-foreground leading-none", children: x + 1 })
                    ] })
                  ]
                }
              ),
              b && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  onClick: ee,
                  onPointerDown: (F) => F.stopPropagation(),
                  title: _ ? A.unpin : A.pinLeft,
                  "aria-label": _ ? A.unpin : A.pinLeft,
                  className: a(
                    "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                    _ ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100" : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
                  ),
                  children: /* @__PURE__ */ n(
                    Jt,
                    {
                      className: a(
                        "size-3 transition-transform",
                        T && "fill-current -rotate-45",
                        D && "fill-current rotate-45"
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        s && g.getCanResize() && !d && /* @__PURE__ */ n(
          "div",
          {
            onMouseDown: ct,
            onTouchStart: V,
            onDoubleClick: (F) => {
              F.stopPropagation(), g.resetSize();
            },
            onClick: (F) => F.stopPropagation(),
            onPointerDown: (F) => F.stopPropagation(),
            title: A.resetColumnWidth,
            className: "group/resize absolute right-0 top-0 z-20 flex h-full w-2.5 cursor-col-resize select-none touch-none items-center justify-end",
            children: /* @__PURE__ */ n(
              "span",
              {
                className: a(
                  "h-4/5 w-0.5 rounded-full transition-colors",
                  g.getIsResizing() ? "bg-primary h-full" : "bg-transparent group-hover/th:bg-border group-hover/resize:bg-primary"
                )
              }
            )
          }
        )
      ]
    }
  );
}
function Wt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kl({
  columns: e,
  tableId: t,
  persistState: r,
  storageScope: o,
  storagePrefix: s = "aiqia-ui:flash-table:v1",
  storage: l,
  defaultDensity: d,
  pinActionsColumnRight: u,
  pinLastColumnRight: h,
  defaultPinnedLeft: m,
  defaultPinnedRight: P,
  propColumnVisibility: k,
  onColumnVisibilityChange: S,
  propColumnSizing: A,
  onColumnSizingChange: R,
  propColumnOrder: f,
  onColumnOrderChange: g,
  propColumnPinning: C,
  onColumnPinningChange: v,
  propDensity: b,
  onDensityChange: M
}) {
  const z = ue(
    () => e.map((V, H) => wt(V, H)),
    [e]
  ), x = ue(
    () => Vl(e, {
      pinActionsColumnRight: u,
      pinLastColumnRight: h,
      defaultPinnedLeft: m,
      defaultPinnedRight: P
    }),
    [
      e,
      u,
      h,
      m,
      P
    ]
  ), L = ue(() => l || (typeof window < "u" && window.localStorage ? window.localStorage : null), [l]), T = ue(() => {
    const V = Ol(o), H = typeof window < "u" ? window.location.pathname : "app", ee = t || `${H}::${z.join("|")}`;
    return `${s}:${V}:${ee}`;
  }, [t, z, o, s]), D = ne(() => {
    const V = x.left ?? [], H = x.right ?? [], ee = /* @__PURE__ */ new Set([...V, ...H]), F = {
      columnOrder: [
        ...V,
        ...z.filter((J) => !ee.has(J)),
        ...H
      ],
      columnVisibility: {},
      columnPinning: x,
      columnSizing: {},
      density: d
    };
    if (!r || !L)
      return F;
    try {
      const J = L.getItem(T);
      if (!J) return F;
      const X = JSON.parse(J), Ee = new Set(z), Ge = kn(
        Array.isArray(X.columnOrder) ? X.columnOrder : [],
        z
      ), Xe = Array.isArray(X.columnPinning?.left) ? X.columnPinning.left.filter((Oe) => Ee.has(Oe)) : x.left ?? [], mr = Array.isArray(X.columnPinning?.right) ? X.columnPinning.right.filter((Oe) => Ee.has(Oe)) : x.right ?? [], ut = Array.from(
        /* @__PURE__ */ new Set([
          ...(x.left ?? []).filter(Pe),
          ...Xe
        ])
      ), Ye = Array.from(
        /* @__PURE__ */ new Set([...mr, ...x.right ?? []])
      ), fr = /* @__PURE__ */ new Set([...ut, ...Ye]), pr = Ge.filter((Oe) => !fr.has(Oe));
      return {
        columnOrder: [...ut, ...pr, ...Ye],
        columnVisibility: X.columnVisibility && typeof X.columnVisibility == "object" ? X.columnVisibility : {},
        columnPinning: {
          left: ut,
          right: Ye
        },
        columnSizing: X.columnSizing && typeof X.columnSizing == "object" ? X.columnSizing : {},
        density: X.density === "ultra-compact" || X.density === "compact" || X.density === "comfortable" ? X.density : d
      };
    } catch {
      return F;
    }
  }, [
    z,
    x,
    d,
    r,
    L,
    T
  ]), [_, K] = ie(D);
  we(() => {
    K((V) => {
      const H = kn(
        V.columnOrder,
        z
      ), ee = new Set(z), xe = Array.from(
        /* @__PURE__ */ new Set([
          ...(V.columnPinning.right ?? []).filter((J) => ee.has(J)),
          ...x.right ?? []
        ])
      ), F = Array.from(
        /* @__PURE__ */ new Set([
          ...(x.left ?? []).filter(Pe),
          ...(V.columnPinning.left ?? []).filter((J) => ee.has(J))
        ])
      );
      return tt(H, V.columnOrder) && tt(F, V.columnPinning.left) && tt(xe, V.columnPinning.right) ? V : {
        ...V,
        columnOrder: H,
        columnPinning: {
          left: F,
          right: xe
        }
      };
    });
  }, [z, x]);
  const Q = k ?? _.columnVisibility, te = A ?? _.columnSizing, y = f ?? _.columnOrder, O = C ?? _.columnPinning, $ = b ?? _.density;
  we(() => {
    if (!(!r || !L))
      try {
        const V = {
          columnOrder: y,
          columnVisibility: Q,
          columnPinning: O,
          columnSizing: te,
          density: $
        };
        L.setItem(T, JSON.stringify(V));
      } catch {
      }
  }, [
    r,
    L,
    T,
    y,
    Q,
    O,
    te,
    $
  ]);
  const le = ne(
    (V) => {
      S?.(V), K((H) => ({
        ...H,
        columnVisibility: Wt(V, H.columnVisibility)
      }));
    },
    [S]
  ), be = ne(
    (V) => {
      R?.(V), K((H) => ({
        ...H,
        columnSizing: Wt(V, H.columnSizing)
      }));
    },
    [R]
  ), Ne = ne(
    (V) => {
      g?.(V), K((H) => ({
        ...H,
        columnOrder: Wt(V, H.columnOrder)
      }));
    },
    [g]
  ), Me = ne(
    (V) => {
      v?.(V), K((H) => {
        const ee = Wt(V, H.columnPinning), xe = ee.left ?? [], F = ee.right ?? [], J = /* @__PURE__ */ new Set([...xe, ...F]), Ee = (H.columnOrder.length > 0 ? H.columnOrder : z).filter((Xe) => !J.has(Xe)), Ge = [...xe, ...Ee, ...F];
        return {
          ...H,
          columnPinning: ee,
          columnOrder: Ge
        };
      });
    },
    [v, z]
  ), pe = ne(
    (V) => {
      M?.(V), K((H) => ({
        ...H,
        density: V
      }));
    },
    [M]
  ), Ce = ue(() => {
    const V = Object.values(Q).some(
      (X) => X === !1
    ), H = !tt(y, z), ee = !tt(
      O.left ?? [],
      x.left ?? []
    ), xe = !tt(
      O.right ?? [],
      x.right ?? []
    ), F = Object.keys(te).length > 0;
    return V || H || ee || xe || F || $ !== d;
  }, [
    Q,
    y,
    z,
    O,
    x,
    te,
    $,
    d
  ]), ct = ne(() => {
    if (K({
      columnOrder: z,
      columnVisibility: {},
      columnPinning: x,
      columnSizing: {},
      density: d
    }), S?.({}), g?.(z), v?.(x), R?.({}), M?.(d), r && L)
      try {
        L.removeItem(T);
      } catch {
      }
  }, [
    z,
    x,
    d,
    g,
    v,
    R,
    S,
    M,
    r,
    L,
    T
  ]);
  return {
    columnVisibility: Q,
    onColumnVisibilityChange: le,
    columnSizing: te,
    onColumnSizingChange: be,
    columnOrder: y,
    onColumnOrderChange: Ne,
    columnPinning: O,
    onColumnPinningChange: Me,
    density: $,
    onDensityChange: pe,
    defaultColumnOrder: z,
    defaultColumnPinning: x,
    isCustomized: Ce,
    resetToDefaults: ct
  };
}
function Ul(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gl({
  columns: e,
  data: t,
  totalRecords: r,
  tableId: o,
  persistState: s = !0,
  storageScope: l,
  storagePrefix: d,
  storage: u,
  isLoading: h = !1,
  loadingMode: m = "auto",
  skeletonRowsCount: P = 5,
  emptyMessage: k,
  emptyContent: S,
  rowSelection: A,
  onRowSelectionChange: R,
  onSelectedRowsChange: f,
  enableRowSelection: g,
  showSelectionColumn: C,
  isRowSelectable: v,
  selectionDisabledReason: b,
  renderBulkActions: M,
  expanded: z,
  onExpandedChange: x,
  getSubRows: L,
  getRowCanExpand: T,
  renderSubComponent: D,
  showExpandColumn: _ = !0,
  expandOnRowClick: K = !1,
  enableSorting: Q = !0,
  enableMultiSort: te = !0,
  sorting: y,
  onSortingChange: O,
  manualSorting: $ = !1,
  columnVisibility: le,
  onColumnVisibilityChange: be,
  columnSizing: Ne,
  onColumnSizingChange: Me,
  columnOrder: pe,
  onColumnOrderChange: Ce,
  columnPinning: ct,
  onColumnPinningChange: V,
  pinActionsColumnRight: H = !0,
  pinLastColumnRight: ee = !1,
  defaultPinnedLeft: xe,
  defaultPinnedRight: F,
  enableColumnOrdering: J = !0,
  enableColumnPinning: X = !0,
  enableColumnVisibility: Ee = !0,
  enableColumnResizing: Ge = !0,
  enableContextMenu: Xe = !0,
  showToolbar: mr = !0,
  showTotalRecords: ut = !0,
  showDensityToggle: Ye = !0,
  showHelpButton: fr = !0,
  toolbarLeftContent: pr,
  toolbarRightContent: Wr,
  density: Oe = "compact",
  onDensityChange: Qo,
  tableLayout: Jo = "fixed",
  striped: Zo = !1,
  hoverable: ea = !0,
  stickyHeader: $r = !0,
  maxHeight: Qe,
  className: ta,
  classNames: re,
  style: ra,
  getRowId: na,
  onRowClick: qr,
  onRowDoubleClick: Kr,
  rowClassName: Ur,
  rowAccentColor: _t,
  renderRowProgress: Gr,
  footerContent: At,
  onTableReady: Xr,
  labels: Yr
}) {
  const ce = ue(
    () => ({
      ...It,
      ...Yr,
      ...k ? { emptyMessage: k } : {}
    }),
    [Yr, k]
  ), [oa, aa] = ie([]), [sa, ia] = ie({}), [la, da] = ie({}), [ca, Qr] = ie(
    null
  ), [gr, ua] = ie(!1), [hr, ma] = ie(!1), [br, fa] = ie(
    {}
  ), mt = ye(null), Jr = ye(null), Lt = ye(
    /* @__PURE__ */ new Map()
  ), Zr = ye(null), xr = ye(/* @__PURE__ */ new Map()), yr = ye(
    /* @__PURE__ */ new Map()
  ), [pa, en] = ie([]), tn = y ?? oa, ga = O ?? aa, rn = A ?? sa, ha = ne(
    (p) => {
      R?.(p), ia(
        (w) => Ul(p, A ?? w)
      );
    },
    [R, A]
  ), nn = z ?? la, ba = x ?? da, Je = g !== void 0 ? !!g : !!(C || R || f || M), xa = ue(
    () => e.some(
      (p, w) => Rt(wt(p, w))
    ),
    [e]
  ), on = (C ?? Je) && !xa, an = !!(D || L), ya = ue(
    () => e.some(
      (p, w) => lr(wt(p, w))
    ),
    [e]
  ), sn = an && _ && !ya, ln = ue(() => {
    const p = e.map((N, I) => ({
      ...N,
      id: wt(N, I)
    })), w = [];
    return on && w.push({
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
          onCheckedChange: (I) => N.toggleAllPageRowsSelected(!!I),
          "aria-label": ce.selectAllRows,
          onClick: (I) => I.stopPropagation()
        }
      ),
      cell: ({ row: N }) => {
        const I = N.getCanSelect();
        return /* @__PURE__ */ n(
          at,
          {
            checked: N.getIsSelected(),
            disabled: !I,
            title: I ? void 0 : b,
            onCheckedChange: (j) => N.toggleSelected(!!j),
            "aria-label": ce.selectRow(N.id),
            onClick: (j) => j.stopPropagation()
          }
        );
      }
    }), sn && w.push({
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
        const I = N.getIsExpanded();
        return /* @__PURE__ */ n(
          ae,
          {
            variant: "ghost",
            size: "iconSm",
            type: "button",
            onClick: (j) => {
              j.stopPropagation(), N.toggleExpanded();
            },
            "aria-label": I ? ce.collapseRow : ce.expandRow,
            title: I ? ce.collapseRow : ce.expandRow,
            children: I ? /* @__PURE__ */ n(We, {}) : /* @__PURE__ */ n(zt, {})
          }
        );
      }
    }), [...w, ...p];
  }, [
    e,
    on,
    sn,
    ce,
    b
  ]), {
    columnVisibility: ft,
    onColumnVisibilityChange: va,
    columnSizing: Et,
    onColumnSizingChange: wa,
    columnOrder: Ot,
    onColumnOrderChange: Na,
    columnPinning: Ze,
    onColumnPinningChange: Ca,
    density: se,
    onDensityChange: dn,
    isCustomized: cn,
    resetToDefaults: un
  } = Kl({
    columns: ln,
    tableId: o,
    persistState: s,
    storageScope: l,
    storagePrefix: d,
    storage: u,
    defaultDensity: Oe,
    pinActionsColumnRight: H,
    pinLastColumnRight: ee,
    defaultPinnedLeft: xe,
    defaultPinnedRight: F,
    propColumnVisibility: le,
    onColumnVisibilityChange: be,
    propColumnSizing: Ne,
    onColumnSizingChange: Me,
    propColumnOrder: pe,
    onColumnOrderChange: Ce,
    propColumnPinning: ct,
    onColumnPinningChange: V,
    propDensity: void 0,
    onDensityChange: Qo
  }), Sa = ue(() => typeof g == "function" ? g : v ? (p) => v(p.original) : Je, [g, v, Je]), Ra = ue(() => {
    if (T) return T;
    if (D) return () => !0;
  }, [T, D]), W = ys({
    data: t,
    columns: ln,
    defaultColumn: {
      minSize: 60
    },
    getRowId: na,
    getSubRows: L,
    getRowCanExpand: Ra,
    getCoreRowModel: Ns(),
    getSortedRowModel: $ ? void 0 : ws(),
    getExpandedRowModel: an ? vs() : void 0,
    onSortingChange: ga,
    onExpandedChange: ba,
    onColumnVisibilityChange: va,
    onColumnSizingChange: wa,
    onColumnOrderChange: Na,
    onColumnPinningChange: Ca,
    onRowSelectionChange: ha,
    manualSorting: $,
    state: {
      sorting: tn,
      expanded: nn,
      rowSelection: rn,
      columnVisibility: ft,
      columnSizing: Et,
      columnOrder: Ot,
      columnPinning: Ze
    },
    enableRowSelection: Sa,
    enableSorting: Q,
    enableMultiSort: te,
    enableColumnResizing: Ge,
    enableColumnPinning: X,
    columnResizeMode: "onChange"
  });
  we(() => {
    Xr?.(W);
  }, [W, Xr]);
  const pt = ue(() => Je ? W.getSelectedRowModel().flatRows.map((p) => p.original) : [], [W, rn, t, Je]);
  we(() => {
    f?.(pt);
  }, [pt, f]);
  const Vt = ne(() => {
    const p = {};
    Lt.current.forEach((w, N) => {
      if (w) {
        const I = Math.round(w.getBoundingClientRect().width);
        I > 0 && (p[N] = I);
      }
    }), fa((w) => {
      const N = Object.keys(p);
      return N.length === Object.keys(w).length && N.every((I) => Math.abs((w[I] ?? 0) - p[I]) <= 1) ? w : p;
    });
  }, []), ka = ne(
    (p, w) => {
      w ? Lt.current.set(p, w) : Lt.current.delete(p);
    },
    []
  ), Pa = ne(
    (p, w) => {
      w ? xr.current.set(p, w) : xr.current.delete(p);
    },
    []
  ), za = ne(
    (p, w) => {
      w ? yr.current.set(p, w) : yr.current.delete(p);
    },
    []
  ), jt = ne(() => {
    if (!_t) {
      en((j) => j.length === 0 ? j : []);
      return;
    }
    const p = Zr.current;
    if (!p) return;
    const w = p.getBoundingClientRect(), N = W.getRowModel().rows, I = [];
    N.forEach((j, Y) => {
      const U = _t(j.original, Y);
      if (!U) return;
      const ge = xr.current.get(j.id);
      if (!ge) return;
      const B = ge.getBoundingClientRect(), E = yr.current.get(j.id), oe = E ? E.getBoundingClientRect().bottom : B.bottom, Se = Math.round((B.top - w.top) * 10) / 10, Re = Math.round((oe - B.top) * 10) / 10;
      if (Re <= 0) return;
      const Te = U.startsWith("#") || U.startsWith("rgb") || U.startsWith("hsl") || U.startsWith("oklch") || U.startsWith("var(");
      I.push({
        key: j.id,
        top: Se,
        height: Re,
        color: U,
        isCssColor: Te
      });
    }), en((j) => j.length === I.length && j.every(
      (Y, U) => Y.key === I[U].key && Math.abs(Y.top - I[U].top) <= 0.5 && Math.abs(Y.height - I[U].height) <= 0.5 && Y.color === I[U].color
    ) ? j : I);
  }, [_t, W]), gt = ne(() => {
    const p = mt.current;
    if (!p) return;
    const { scrollLeft: w, scrollWidth: N, clientWidth: I } = p, j = Math.max(0, N - I);
    ua(w > 2), ma(j - w > 2);
  }, []);
  we(() => {
    const p = mt.current;
    if (!p) return;
    const w = (N) => {
      if (!N.ctrlKey || !(p.scrollWidth > p.clientWidth + 1)) return;
      const j = Math.abs(N.deltaY) >= Math.abs(N.deltaX) ? N.deltaY : N.deltaX;
      if (j === 0) return;
      const Y = N.deltaMode === 1 ? 32 : N.deltaMode === 2 ? p.clientWidth * 0.8 : 1;
      N.preventDefault(), p.scrollLeft += j * Y;
    };
    return p.addEventListener("wheel", w, { passive: !1 }), () => {
      p.removeEventListener("wheel", w);
    };
  }, []), Ha(() => {
    Vt(), gt(), jt();
  }, [
    Vt,
    gt,
    jt,
    t,
    ft,
    Ot,
    Ze,
    Et,
    se,
    tn,
    nn
  ]), we(() => {
    const p = mt.current, w = Jr.current;
    if (!p || typeof ResizeObserver > "u") return;
    const N = new ResizeObserver(() => {
      Vt(), gt(), jt();
    });
    return N.observe(p), w && N.observe(w), Lt.current.forEach((I) => {
      I && N.observe(I);
    }), () => N.disconnect();
  }, [
    gt,
    Vt,
    jt,
    ft,
    Ot,
    Ze
  ]);
  const Ta = ne((p) => {
    const w = mt.current;
    if (!w) return;
    const N = Math.max(240, Math.floor(w.clientWidth * 0.6));
    w.scrollBy({
      left: p === "left" ? -N : N,
      behavior: "smooth"
    });
  }, []), ht = W.getVisibleLeafColumns(), {
    stickyOffsets: vr,
    lastLeftPinnedColumnId: wr,
    firstRightPinnedColumnId: Nr,
    actionsColumnIds: et
  } = ue(() => {
    const p = {}, w = /* @__PURE__ */ new Set(), N = W.getAllLeafColumns(), I = /* @__PURE__ */ new Map();
    N.forEach((E, oe) => {
      I.set(E.id, E), dr(
        E.id,
        E.columnDef,
        oe === N.length - 1,
        H,
        ee
      ) && w.add(E.id);
    });
    const j = (E) => ft[E.id] !== !1 && E.getIsVisible(), Y = (Ze.left ?? []).map((E) => I.get(E)).filter(
      (E) => !!E && j(E)
    ), U = (Ze.right ?? []).map((E) => I.get(E)).filter(
      (E) => !!E && j(E)
    );
    let ge = 0;
    for (const E of Y)
      p[E.id] = ge, ge += br[E.id] || E.getSize();
    let B = 0;
    for (let E = U.length - 1; E >= 0; E--) {
      const oe = U[E];
      p[oe.id] = B, B += br[oe.id] || oe.getSize();
    }
    return {
      stickyOffsets: p,
      lastLeftPinnedColumnId: Y.length > 0 ? Y[Y.length - 1].id : null,
      firstRightPinnedColumnId: U.length > 0 ? U[0].id : null,
      actionsColumnIds: w
    };
  }, [
    W,
    Ze,
    Ot,
    ft,
    Et,
    br,
    H,
    ee
  ]), Ma = Un(
    Ut(Gn, {
      activationConstraint: { distance: 6 }
    }),
    Ut(Xn, {
      coordinateGetter: Jn
    })
  ), Da = ne(
    (p) => {
      const { active: w, over: N } = p;
      if (!N || w.id === N.id) return;
      const I = String(w.id), j = String(N.id);
      if (Pe(I) || Pe(j) || et.has(I) || et.has(j))
        return;
      const Y = W.getState().columnOrder.length > 0 ? W.getState().columnOrder : W.getAllLeafColumns().map((ke) => ke.id), U = Y.indexOf(I), ge = Y.indexOf(j);
      U !== -1 && ge !== -1 && W.setColumnOrder(rt(Y, U, ge));
      const B = W.getState().columnPinning.left ?? [], E = B.indexOf(I), oe = B.indexOf(j);
      E !== -1 && oe !== -1 && W.setColumnPinning((ke) => ({
        ...ke,
        left: rt(ke.left ?? [], E, oe)
      }));
      const Se = W.getState().columnPinning.right ?? [], Re = Se.indexOf(I), Te = Se.indexOf(j);
      Re !== -1 && Te !== -1 && W.setColumnPinning((ke) => ({
        ...ke,
        right: rt(ke.right ?? [], Re, Te)
      }));
    },
    [W, et]
  ), Ia = (p) => {
    Xe && (p.preventDefault(), Qr({ x: p.clientX, y: p.clientY }));
  }, mn = ne(() => {
    W.resetRowSelection();
  }, [W]), bt = W.getRowModel().rows, _a = h && (m === "skeleton" || m === "auto" && bt.length === 0), Aa = h && (m === "overlay" || m === "auto" && bt.length > 0), fn = ue(
    () => W.getFooterGroups().some(
      (p) => p.headers.some((w) => w.column.columnDef.footer !== void 0)
    ),
    [W]
  ), La = Object.keys(Et).length > 0, Ea = !!W.getState().columnSizingInfo?.isResizingColumn, pn = Jo === "fixed" || La || Ea, Oa = Qe ? {
    maxHeight: typeof Qe == "number" ? `${Qe}px` : Qe
  } : void 0;
  return /* @__PURE__ */ n(El, { delayDuration: 200, children: /* @__PURE__ */ c(
    "div",
    {
      style: ra,
      className: a(
        "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
        re?.root,
        ta
      ),
      onContextMenu: Ia,
      children: [
        Aa && /* @__PURE__ */ n("div", { className: "absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50", children: /* @__PURE__ */ n(nt, { className: "animate-spin size-6 text-primary" }) }),
        mr && /* @__PURE__ */ n(
          Wl,
          {
            table: W,
            totalRecords: r,
            showTotalRecords: ut,
            showDensityToggle: Ye,
            showHelpButton: fr,
            density: se,
            onDensityChange: dn,
            pinActionsColumnRight: H,
            pinLastColumnRight: ee,
            enableColumnOrdering: J,
            enableColumnPinning: X,
            enableColumnVisibility: Ee,
            isCustomized: cn,
            onReset: un,
            canScrollLeft: gr,
            canScrollRight: hr,
            onScrollHorizontal: Ta,
            toolbarLeftContent: pr,
            toolbarRightContent: Wr,
            labels: ce,
            className: re?.toolbar
          }
        ),
        Je && pt.length > 0 && /* @__PURE__ */ c(
          "div",
          {
            className: a(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              re?.selectionBar
            ),
            children: [
              /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n("span", { className: "font-medium text-foreground", children: ce.selectedItemsCount(pt.length) }),
                M?.(pt, mn)
              ] }),
              /* @__PURE__ */ c(
                ae,
                {
                  variant: "ghost",
                  size: "sm",
                  type: "button",
                  onClick: mn,
                  children: [
                    /* @__PURE__ */ n(Tt, {}),
                    /* @__PURE__ */ n("span", { children: ce.clearSelection })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            ref: mt,
            onScroll: gt,
            style: Oa,
            className: a(
              "relative w-full overflow-auto",
              re?.viewport
            ),
            children: [
              _t && /* @__PURE__ */ n(
                "div",
                {
                  ref: Zr,
                  "aria-hidden": "true",
                  className: "sticky left-0 z-[25] h-0 w-0 overflow-visible pointer-events-none",
                  children: pa.map((p) => /* @__PURE__ */ n(
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
                Yn,
                {
                  sensors: Ma,
                  collisionDetection: Qn,
                  modifiers: [hs],
                  onDragEnd: Da,
                  children: /* @__PURE__ */ c(
                    "table",
                    {
                      ref: Jr,
                      style: pn ? { width: W.getTotalSize(), minWidth: "100%" } : void 0,
                      className: a(
                        pn ? "table-fixed" : "table-auto w-full",
                        "caption-bottom border-separate border-spacing-0",
                        se === "ultra-compact" && "text-xs",
                        se === "compact" && "text-sm",
                        se === "comfortable" && "text-sm",
                        re?.table
                      ),
                      children: [
                        /* @__PURE__ */ n(
                          Po,
                          {
                            className: a(
                              "bg-muted",
                              $r && Qe && "sticky top-0 z-30 bg-muted",
                              re?.header
                            ),
                            children: W.getHeaderGroups().map((p) => /* @__PURE__ */ n(
                              De,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  re?.headerRow
                                ),
                                children: /* @__PURE__ */ n(
                                  Zn,
                                  {
                                    items: p.headers.map((w) => w.column.id),
                                    strategy: xs,
                                    children: p.headers.map((w) => {
                                      const N = w.column.id, I = w.column.getIsPinned(), j = et.has(N), Y = Pe(N);
                                      return /* @__PURE__ */ n(
                                        ql,
                                        {
                                          header: w,
                                          density: se,
                                          enableColumnOrdering: J,
                                          enableColumnPinning: X,
                                          enableColumnResizing: Ge,
                                          isActionsCol: j,
                                          isSystemLeftCol: Y,
                                          pinnedPosition: I,
                                          stickyOffset: vr[N],
                                          isLastLeftPinned: N === wr,
                                          isFirstRightPinned: N === Nr,
                                          canScrollLeft: gr,
                                          canScrollRight: hr,
                                          labels: ce,
                                          className: re?.headerCell,
                                          onRegisterHeaderElement: ka
                                        },
                                        w.id
                                      );
                                    })
                                  }
                                )
                              },
                              p.id
                            ))
                          }
                        ),
                        /* @__PURE__ */ n(zo, { className: re?.body, children: _a ? Array.from({ length: P }).map((p, w) => /* @__PURE__ */ n(
                          De,
                          {
                            className: "border-b-0 hover:bg-transparent",
                            children: ht.map((N) => /* @__PURE__ */ n(
                              Ve,
                              {
                                className: a(
                                  "border-b border-border/60",
                                  se === "ultra-compact" && "py-0.5 px-2",
                                  se === "compact" && "py-1 px-3",
                                  se === "comfortable" && "py-2 px-3"
                                ),
                                children: /* @__PURE__ */ n(ko, { className: "h-4 w-full max-w-[140px]" })
                              },
                              `skeleton-${w}-${N.id}`
                            ))
                          },
                          `skeleton-${w}`
                        )) : bt.length > 0 ? bt.map((p, w) => {
                          const N = Gr ? Gr(p.original) : null, j = p.getIsExpanded() && !!D, Y = p.getVisibleCells(), U = w % 2 === 1, ge = w === bt.length - 1;
                          return /* @__PURE__ */ c(Ba, { children: [
                            /* @__PURE__ */ n(
                              De,
                              {
                                ref: (B) => Pa(p.id, B),
                                "data-state": p.getIsSelected() && "selected",
                                onClick: (B) => {
                                  K && p.getCanExpand() && p.toggleExpanded(), qr?.(p.original, B);
                                },
                                onDoubleClick: Kr ? (B) => Kr(p.original, B) : void 0,
                                className: a(
                                  "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)]",
                                  Zo && U && "bg-muted/80 dark:bg-muted/40 [--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_80%,var(--card))] dark:[--flash-table-cell-bg:color-mix(in_srgb,var(--muted)_40%,var(--card))]",
                                  ea ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] dark:hover:bg-muted dark:hover:[--flash-table-cell-bg:var(--muted)]" : "hover:bg-transparent",
                                  "data-[state=selected]:bg-muted data-[state=selected]:[--flash-table-cell-bg:var(--muted)] dark:data-[state=selected]:bg-muted dark:data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                                  (qr || K && p.getCanExpand()) && "cursor-pointer",
                                  re?.row,
                                  Ur ? Ur(p.original, w) : ""
                                ),
                                children: Y.map((B) => {
                                  const E = B.column.id, oe = B.column.getIsPinned(), Se = oe === "left", Re = oe === "right", Te = Se || Re, ke = E === wr, gn = E === Nr, Va = et.has(E), hn = Pe(E), Ft = B.column.columnDef.meta, bn = vr[E] ?? 0, ja = {
                                    width: B.column.getSize(),
                                    minWidth: B.column.columnDef.minSize ?? (Te ? B.column.getSize() : void 0),
                                    maxWidth: B.column.columnDef.maxSize,
                                    ...Te ? {
                                      backgroundColor: "var(--flash-table-cell-bg, var(--card))"
                                    } : {},
                                    ...Se ? {
                                      position: "sticky",
                                      left: `${bn}px`
                                    } : {},
                                    ...Re ? {
                                      position: "sticky",
                                      right: `${bn}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ n(
                                    Ve,
                                    {
                                      style: ja,
                                      className: a(
                                        Ft?.wrap ? "whitespace-normal" : "whitespace-nowrap overflow-hidden text-ellipsis",
                                        "align-middle transition-colors",
                                        hn && "[&:has([role=checkbox])]:pr-2",
                                        Te && "sticky",
                                        // Row bottom border
                                        (!ge || fn || At) && !N && !j && "border-b border-border",
                                        // Density padding
                                        se === "ultra-compact" && "py-0.5 px-2 text-xs",
                                        se === "compact" && "py-1 px-3 text-sm",
                                        se === "comfortable" && "py-2 px-3 text-sm",
                                        // Alignment
                                        (Va || Ft?.align === "right") && "text-right",
                                        (hn || Ft?.align === "center") && "text-center",
                                        // Pinned cell stacking context (opaque background comes from --flash-table-cell-bg)
                                        Te && "z-20",
                                        // Sticky boundary dividers & directional shadows
                                        ke && "border-r border-border",
                                        ke && gr && "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        gn && "border-l border-border",
                                        gn && hr && "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                        re?.cell,
                                        Ft?.cellClassName
                                      ),
                                      children: Pr(
                                        B.column.columnDef.cell,
                                        B.getContext()
                                      )
                                    },
                                    B.id
                                  );
                                })
                              }
                            ),
                            j && D && /* @__PURE__ */ n(
                              De,
                              {
                                ref: (B) => za(p.id, B),
                                className: a(
                                  "bg-muted/20 hover:bg-muted/20 border-b-0",
                                  re?.expandedRow
                                ),
                                children: /* @__PURE__ */ n(
                                  Ve,
                                  {
                                    colSpan: ht.length || 1,
                                    className: a(
                                      "p-3",
                                      !ge && !N && "border-b border-border"
                                    ),
                                    children: D({
                                      row: p,
                                      data: p.original
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
                          ] }, p.id);
                        }) : /* @__PURE__ */ n(De, { className: "hover:bg-transparent", children: /* @__PURE__ */ n(
                          Ve,
                          {
                            colSpan: ht.length || e.length || 1,
                            className: a(
                              "h-24 text-center text-muted-foreground text-sm",
                              re?.emptyCell
                            ),
                            children: h ? ce.loadingMessage : S ?? /* @__PURE__ */ n("span", { className: "italic", children: ce.emptyMessage })
                          }
                        ) }) }),
                        (fn || At) && /* @__PURE__ */ n(
                          To,
                          {
                            className: a(
                              "border-t bg-muted/50 font-medium",
                              $r && Qe && "sticky bottom-0 z-30 bg-muted",
                              re?.footer
                            ),
                            children: At ? /* @__PURE__ */ n(De, { className: re?.footerRow, children: /* @__PURE__ */ n(
                              Ve,
                              {
                                colSpan: ht.length || 1,
                                className: a(
                                  "px-3 py-2 border-t border-border",
                                  re?.footerCell
                                ),
                                children: At
                              }
                            ) }) : W.getFooterGroups().map((p) => /* @__PURE__ */ n(
                              De,
                              {
                                className: a(
                                  "hover:bg-transparent border-b-0",
                                  re?.footerRow
                                ),
                                children: p.headers.map((w) => {
                                  const N = w.column.id, I = w.column.getIsPinned(), j = I === "left", Y = I === "right", U = j || Y, ge = N === wr, B = N === Nr, E = et.has(N), oe = w.column.columnDef.meta, Se = vr[N] ?? 0, Re = {
                                    width: w.getSize(),
                                    ...U ? {
                                      backgroundColor: "var(--muted)"
                                    } : {},
                                    ...j ? {
                                      position: "sticky",
                                      left: `${Se}px`
                                    } : {},
                                    ...Y ? {
                                      position: "sticky",
                                      right: `${Se}px`
                                    } : {}
                                  };
                                  return /* @__PURE__ */ n(
                                    Ve,
                                    {
                                      style: Re,
                                      className: a(
                                        "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                        U ? "sticky bg-muted z-20" : "bg-muted",
                                        se === "ultra-compact" && "py-1 px-2 text-xs",
                                        se === "compact" && "py-1 px-3 text-sm",
                                        se === "comfortable" && "py-2 px-3 text-sm",
                                        (E || oe?.align === "right") && "text-right",
                                        oe?.align === "center" && "text-center",
                                        ge && "border-r border-border",
                                        B && "border-l border-border",
                                        re?.footerCell,
                                        oe?.footerClassName
                                      ),
                                      children: w.isPlaceholder ? null : Pr(
                                        w.column.columnDef.footer,
                                        w.getContext()
                                      )
                                    },
                                    w.id
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
        Xe && /* @__PURE__ */ n(
          $l,
          {
            position: ca,
            onClose: () => Qr(null),
            table: W,
            density: se,
            onDensityChange: dn,
            showDensityToggle: Ye,
            pinActionsColumnRight: H,
            pinLastColumnRight: ee,
            enableColumnPinning: X,
            enableColumnVisibility: Ee,
            isCustomized: cn,
            onReset: un,
            labels: ce
          }
        )
      ]
    }
  ) });
}
Gl.displayName = "FlashTable";
const Xl = ze(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), cr = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  ro.Root,
  {
    ref: r,
    className: a(Xl(), e),
    ...t
  }
));
cr.displayName = ro.Root.displayName;
const Pc = ds, Io = i.createContext(
  {}
), Ue = ({
  ...e
}) => /* @__PURE__ */ n(Io.Provider, { value: { name: e.name }, children: /* @__PURE__ */ n(cs, { ...e }) }), ur = () => {
  const e = i.useContext(Io), t = i.useContext(_o), { getFieldState: r, formState: o } = Ie(), s = r(e.name, o);
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
}, _o = i.createContext(
  {}
), _e = i.forwardRef(({ className: e, ...t }, r) => {
  const o = i.useId();
  return /* @__PURE__ */ n(_o.Provider, { value: { id: o }, children: /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: a("space-y-1 relative", e),
      ...t
    }
  ) });
});
_e.displayName = "FormItem";
const Ae = i.forwardRef(({ className: e, ...t }, r) => {
  const { error: o, formItemId: s } = ur();
  return /* @__PURE__ */ n(
    cr,
    {
      ref: r,
      className: a(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
Ae.displayName = "FormLabel";
const dt = i.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: l } = ur();
  return /* @__PURE__ */ n(
    Bn,
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
const Ao = i.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: o } = ur();
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
Ao.displayName = "FormDescription";
const Le = i.forwardRef(({ className: e, children: t, ...r }, o) => {
  const { error: s, formMessageId: l } = ur(), d = s ? String(s?.message) : t;
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
Le.displayName = "FormMessage";
const Yl = ze("font-bold tracking-tight", {
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
}), zc = kt.forwardRef(
  ({ className: e, variant: t, children: r, ...o }, s) => /* @__PURE__ */ n(
    t || "h1",
    {
      className: a(Yl({ variant: t }), e),
      ref: s,
      ...o,
      children: r
    }
  )
), Tc = ({
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
      render: ({ field: d }) => /* @__PURE__ */ c(_e, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(dt, { children: o ? /* @__PURE__ */ n(
          ad,
          {
            mask: o,
            placeholder: r,
            ...s,
            ...d
          }
        ) : /* @__PURE__ */ n(ir, { placeholder: r, ...s, ...d }) }),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
}, Ql = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  fe.Root,
  {
    ref: o,
    className: a(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ n(Lo, {})
    ]
  }
));
Ql.displayName = fe.Root.displayName;
const Jl = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.List,
  {
    ref: r,
    className: a(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Jl.displayName = fe.List.displayName;
const Mc = fe.Item, Zl = ze(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), ed = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  fe.Trigger,
  {
    ref: o,
    className: a(Zl(), "group", e),
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
ed.displayName = fe.Trigger.displayName;
const td = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Content,
  {
    ref: r,
    className: a(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
td.displayName = fe.Content.displayName;
const rd = fe.Link, Lo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("div", { className: a("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ n(
  fe.Viewport,
  {
    className: a(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: r,
    ...t
  }
) }));
Lo.displayName = fe.Viewport.displayName;
const nd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  fe.Indicator,
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
nd.displayName = fe.Indicator.displayName;
const od = kt.forwardRef(({ className: e, title: t, children: r, ...o }, s) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(rd, { asChild: !0, children: /* @__PURE__ */ c(
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
od.displayName = "ListItem";
function ad({
  value: e,
  mask: t,
  onChange: r,
  ...o
}) {
  const s = t.split("#").length - 1, l = t.split("A").length - 1, d = t.split("*").length - 1, u = s + l + d;
  function h(m) {
    const k = m.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, u);
    r(k);
  }
  return /* @__PURE__ */ n(
    ir,
    {
      value: so(e, t),
      onChange: h,
      ...o
    }
  );
}
const sd = (e, t = 300) => {
  const [r, o] = ie(e);
  return we(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}, zn = ze(
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
), id = i.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: r,
    defaultValue: o = [],
    placeholder: s = "Select options",
    animation: l = 0,
    maxCount: d = 3,
    modalPopover: u = !1,
    className: h,
    preventSelectAll: m = !1,
    onSearchChange: P,
    isLoading: k,
    onCreate: S,
    ...A
  }, R) => {
    const [f, g] = i.useState(o), [C, v] = i.useState(!1), [b, M] = i.useState(!1), [z, x] = i.useState(""), L = sd(z, 300);
    we(() => {
      P && P(L ?? "");
    }, [L]);
    const T = (y) => {
      if (y.key === "Enter")
        v(!0);
      else if (y.key === "Backspace" && !y.currentTarget.value) {
        const O = [...f];
        O.pop(), g(O), t(O);
      }
    }, D = (y) => {
      const O = f.includes(y) ? f.filter(($) => $ !== y) : [...f, y];
      g(O), t(O);
    }, _ = () => {
      g([]), t([]);
    }, K = () => {
      v((y) => !y);
    }, Q = () => {
      const y = f.slice(0, d);
      g(y), t(y);
    }, te = () => {
      if (f.length === e.length)
        _();
      else {
        const y = e.map((O) => O.value);
        g(y), t(y);
      }
    };
    return /* @__PURE__ */ c(
      it,
      {
        open: C,
        onOpenChange: v,
        modal: u,
        children: [
          /* @__PURE__ */ n(lt, { asChild: !0, children: /* @__PURE__ */ n(
            ae,
            {
              ref: R,
              ...A,
              onClick: K,
              variant: "outline",
              className: a(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                h
              ),
              children: f.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  f.slice(0, d).map((y) => {
                    const O = e.find((le) => le.value === y), $ = O?.icon;
                    return /* @__PURE__ */ c(
                      Tr,
                      {
                        className: a(
                          b ? "animate-bounce" : "",
                          zn({ variant: r })
                        ),
                        style: { animationDuration: `${l}s` },
                        children: [
                          $ && /* @__PURE__ */ n($, { className: "h-4 w-4 mr-2" }),
                          O?.label,
                          /* @__PURE__ */ n(
                            yn,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (le) => {
                                le.stopPropagation(), D(y);
                              }
                            }
                          )
                        ]
                      },
                      y
                    );
                  }),
                  f.length > d && /* @__PURE__ */ c(
                    Tr,
                    {
                      className: a(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        b ? "animate-bounce" : "",
                        zn({ variant: r })
                      ),
                      style: { animationDuration: `${l}s` },
                      children: [
                        `+ ${f.length - d}`,
                        /* @__PURE__ */ n(
                          yn,
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
                  k && /* @__PURE__ */ n(nt, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ n(
                    ns,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (y) => {
                        y.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ n(
                    Ho,
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
              onEscapeKeyDown: () => v(!1),
              children: /* @__PURE__ */ c(Mt, { shouldFilter: !P, children: [
                /* @__PURE__ */ n(
                  rr,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: T,
                    onValueChange: x
                  }
                ),
                /* @__PURE__ */ c(nr, { children: [
                  !k && /* @__PURE__ */ n(or, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(Dt, { children: [
                    !k && !e.length && !!z.length && S && /* @__PURE__ */ n(
                      He,
                      {
                        onSelect: S,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ n(os, { className: "size-4" }),
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
                        onSelect: te,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ n(
                            "div",
                            {
                              className: a(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                f.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ n(vn, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ n("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((y) => {
                      const O = f.includes(y.value);
                      return /* @__PURE__ */ c(
                        He,
                        {
                          onSelect: () => D(y.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ n(
                              "div",
                              {
                                className: a(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  O ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ n(vn, { className: "h-4 w-4" })
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
                  /* @__PURE__ */ n(fo, {})
                ] })
              ] })
            }
          ),
          l > 0 && f.length > 0 && /* @__PURE__ */ n(
            as,
            {
              className: a(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                b ? "" : "text-muted-foreground"
              ),
              onClick: () => M(!b)
            }
          )
        ]
      }
    );
  }
);
id.displayName = "MultiSelect";
const ld = ({ className: e, ...t }) => /* @__PURE__ */ n(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("mx-auto flex w-full justify-center", e),
    ...t
  }
);
ld.displayName = "Pagination";
const dd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  "ul",
  {
    ref: r,
    className: a("flex flex-row items-center gap-1", e),
    ...t
  }
));
dd.displayName = "PaginationContent";
const cd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n("li", { ref: r, className: a("", e), ...t }));
cd.displayName = "PaginationItem";
const Fr = ({
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
Fr.displayName = "PaginationLink";
const ud = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  Fr,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(On, { className: "h-4 w-4" })
  }
);
ud.displayName = "PaginationPrevious";
const md = ({
  className: e,
  ...t
}) => /* @__PURE__ */ n(
  Fr,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: a("gap-1", e),
    ...t,
    children: /* @__PURE__ */ n(zt, { className: "h-4 w-4" })
  }
);
md.displayName = "PaginationNext";
const fd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ n(In, { className: "h-4 w-4" }),
      /* @__PURE__ */ n("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
fd.displayName = "PaginationEllipsis";
const pd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  St.Root,
  {
    className: a("grid gap-2", e),
    ...t,
    ref: r
  }
));
pd.displayName = St.Root.displayName;
const gd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  St.Item,
  {
    ref: r,
    className: a(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(St.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ n(An, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
gd.displayName = St.Item.displayName;
const hd = kt.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  Fe.Root,
  {
    ref: o,
    className: a("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ n(Fe.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ n(Eo, {}),
      /* @__PURE__ */ n(Fe.Corner, {})
    ]
  }
));
hd.displayName = Fe.Root.displayName;
const Eo = kt.forwardRef(({ className: e, orientation: t = "vertical", ...r }, o) => /* @__PURE__ */ n(
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
Eo.displayName = Fe.ScrollAreaScrollbar.displayName;
const Oo = Z.Root, Dc = Z.Group, Vo = Z.Value, Hr = i.forwardRef(({ className: e, children: t, isLoading: r = !1, ...o }, s) => /* @__PURE__ */ c(
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
        r && /* @__PURE__ */ n(nt, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ n(Z.Icon, { asChild: !0, children: /* @__PURE__ */ n(We, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
Hr.displayName = Z.Trigger.displayName;
const jo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Z.ScrollUpButton,
  {
    ref: r,
    className: a(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ n(ss, { className: "h-4 w-4" })
  }
));
jo.displayName = Z.ScrollUpButton.displayName;
const Fo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Z.ScrollDownButton,
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
Fo.displayName = Z.ScrollDownButton.displayName;
const Br = i.forwardRef(({ className: e, children: t, position: r = "popper", ...o }, s) => /* @__PURE__ */ n(Z.Portal, { children: /* @__PURE__ */ c(
  Z.Content,
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
      /* @__PURE__ */ n(jo, {}),
      /* @__PURE__ */ n(
        Z.Viewport,
        {
          className: a(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n(Fo, {})
    ]
  }
) }));
Br.displayName = Z.Content.displayName;
const bd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Z.Label,
  {
    ref: r,
    className: a("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
bd.displayName = Z.Label.displayName;
const Qt = i.forwardRef(({ className: e, children: t, ...r }, o) => /* @__PURE__ */ c(
  Z.Item,
  {
    ref: o,
    className: a(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ n(Z.ItemIndicator, { children: /* @__PURE__ */ n(Pt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ n(Z.ItemText, { children: t })
    ]
  }
));
Qt.displayName = Z.Item.displayName;
const xd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  Z.Separator,
  {
    ref: r,
    className: a("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
xd.displayName = Z.Separator.displayName;
const Ic = ({
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
      render: ({ field: h }) => /* @__PURE__ */ c(_e, { children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ c(
          Oo,
          {
            onValueChange: h.onChange,
            value: h.value,
            defaultValue: h.value,
            ...d,
            children: [
              /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(Hr, { isLoading: l, children: /* @__PURE__ */ n(Vo, { placeholder: r }) }) }),
              /* @__PURE__ */ n(Br, { children: o.map((m) => /* @__PURE__ */ n(Qt, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ n(Ao, { children: s }),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
}, Ho = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: r = !0, ...o }, s) => /* @__PURE__ */ n(
    no.Root,
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
Ho.displayName = no.Root.displayName;
const _c = q.Root, Ac = q.Trigger, Lc = q.Close, yd = q.Portal, Bo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Overlay,
  {
    className: a(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: r
  }
));
Bo.displayName = q.Overlay.displayName;
const vd = ze(
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
), wd = i.forwardRef(({ side: e = "right", className: t, children: r, ...o }, s) => /* @__PURE__ */ c(yd, { children: [
  /* @__PURE__ */ n(Bo, {}),
  /* @__PURE__ */ c(
    q.Content,
    {
      ref: s,
      className: a(vd({ side: e }), t),
      ...o,
      children: [
        r,
        /* @__PURE__ */ c(q.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ n(Tt, { className: "h-4 w-4" }),
          /* @__PURE__ */ n("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
wd.displayName = q.Content.displayName;
const Nd = ({
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
Nd.displayName = "SheetHeader";
const Cd = ({
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
Cd.displayName = "SheetFooter";
const Sd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Title,
  {
    ref: r,
    className: a("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Sd.displayName = q.Title.displayName;
const Rd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  q.Description,
  {
    ref: r,
    className: a("text-sm text-muted-foreground", e),
    ...t
  }
));
Rd.displayName = q.Description.displayName;
const kd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  zr.Root,
  {
    className: a(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ n(
      zr.Thumb,
      {
        className: a(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
kd.displayName = zr.Root.displayName;
const Ec = qe.Root, Pd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Pd.displayName = qe.List.displayName;
const zd = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
zd.displayName = qe.Trigger.displayName;
const Td = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Td.displayName = qe.Content.displayName;
const Wo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
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
Wo.displayName = "Textarea";
const Md = ({
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
      render: ({ field: l }) => /* @__PURE__ */ c(_e, { children: [
        !!t && /* @__PURE__ */ n(Ae, { children: t }),
        /* @__PURE__ */ n(dt, { children: /* @__PURE__ */ n(Wo, { placeholder: r, ...o, ...l }) }),
        /* @__PURE__ */ n(Le, {})
      ] })
    }
  );
};
Md.displayName = "TextareaForm";
const Dd = he.Provider, Id = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, $o = i.forwardRef(({ className: e, position: t = "bottom-right", ...r }, o) => /* @__PURE__ */ n(
  he.Viewport,
  {
    ref: o,
    className: a(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Id[t]}`,
      e
    ),
    ...r
  }
));
$o.displayName = he.Viewport.displayName;
const _d = ze(
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
), qo = i.forwardRef(({ className: e, variant: t, ...r }, o) => /* @__PURE__ */ n(
  he.Root,
  {
    ref: o,
    className: a(_d({ variant: t }), e),
    ...r
  }
));
qo.displayName = he.Root.displayName;
const Ad = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  he.Action,
  {
    ref: r,
    className: a(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
Ad.displayName = he.Action.displayName;
const Ko = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  he.Close,
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
Ko.displayName = he.Close.displayName;
const Uo = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  he.Title,
  {
    ref: r,
    className: a("text-sm font-semibold", e),
    ...t
  }
));
Uo.displayName = he.Title.displayName;
const Go = i.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ n(
  he.Description,
  {
    ref: r,
    className: a("text-sm opacity-90", e),
    ...t
  }
));
Go.displayName = he.Description.displayName;
const Ld = 5, Ed = 1e4;
let Sr = 0;
function Od() {
  return Sr = (Sr + 1) % Number.MAX_SAFE_INTEGER, Sr.toString();
}
const Rr = /* @__PURE__ */ new Map(), Tn = (e) => {
  if (Rr.has(e))
    return;
  const t = setTimeout(() => {
    Rr.delete(e), Nt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Ed);
  Rr.set(e, t);
}, Vd = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Ld)
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
      return r ? Tn(r) : e.toasts.forEach((o) => {
        Tn(o.id);
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
}, qt = [];
let Kt = { toasts: [] };
function Nt(e) {
  Kt = Vd(Kt, e), qt.forEach((t) => {
    t(Kt);
  });
}
function jd({ ...e }) {
  const t = Od(), r = (s) => Nt({
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
function Fd() {
  const [e, t] = i.useState(Kt);
  return i.useEffect(() => (qt.push(t), () => {
    const r = qt.indexOf(t);
    r > -1 && qt.splice(r, 1);
  }), [e]), {
    ...e,
    toast: jd,
    dismiss: (r) => Nt({ type: "DISMISS_TOAST", toastId: r })
  };
}
function Oc() {
  const { toasts: e } = Fd();
  return /* @__PURE__ */ c(Dd, { children: [
    e.map(function({ id: t, title: r, description: o, action: s, ...l }) {
      return /* @__PURE__ */ c(qo, { ...l, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          r && /* @__PURE__ */ n(Uo, { children: r }),
          o && /* @__PURE__ */ n(Go, { children: o })
        ] }),
        s,
        /* @__PURE__ */ n(Ko, {})
      ] }, t);
    }),
    /* @__PURE__ */ n($o, {})
  ] });
}
const Xo = ze(
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
), Hd = i.forwardRef(({ className: e, variant: t, size: r, ...o }, s) => /* @__PURE__ */ n(
  oo.Root,
  {
    ref: s,
    className: a(Xo({ variant: t, size: r, className: e })),
    ...o
  }
));
Hd.displayName = oo.Root.displayName;
const Yo = i.createContext({
  size: "default",
  variant: "default"
}), Bd = i.forwardRef(({ className: e, variant: t, size: r, children: o, ...s }, l) => /* @__PURE__ */ n(
  er.Root,
  {
    ref: l,
    className: a("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ n(Yo.Provider, { value: { variant: t, size: r }, children: o })
  }
));
Bd.displayName = er.Root.displayName;
const Wd = i.forwardRef(({ className: e, children: t, variant: r, size: o, ...s }, l) => {
  const d = i.useContext(Yo);
  return /* @__PURE__ */ n(
    er.Item,
    {
      ref: l,
      className: a(
        Xo({
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
Wd.displayName = er.Item.displayName;
export {
  lc as Accordion,
  Rs as AccordionContent,
  Cs as AccordionItem,
  Ss as AccordionTrigger,
  Ps as Alert,
  Ts as AlertDescription,
  dc as AlertDialog,
  Es as AlertDialogAction,
  Os as AlertDialogCancel,
  Ds as AlertDialogContent,
  Ls as AlertDialogDescription,
  _s as AlertDialogFooter,
  Is as AlertDialogHeader,
  ao as AlertDialogOverlay,
  Ms as AlertDialogPortal,
  As as AlertDialogTitle,
  cc as AlertDialogTrigger,
  zs as AlertTitle,
  Vs as AsyncSelect,
  uc as AsyncSelectForm,
  Fs as Avatar,
  Bs as AvatarFallback,
  Hs as AvatarImage,
  Tr as Badge,
  $s as Breadcrumb,
  Ys as BreadcrumbEllipsis,
  Ks as BreadcrumbItem,
  Us as BreadcrumbLink,
  qs as BreadcrumbList,
  Gs as BreadcrumbPage,
  Xs as BreadcrumbSeparator,
  ae as Button,
  lo as Calendar,
  Fi as CalendarDayButton,
  Hi as Card,
  qi as CardContent,
  $i as CardDescription,
  Ki as CardFooter,
  Bi as CardHeader,
  Wi as CardTitle,
  Ui as Carousel,
  Gi as CarouselContent,
  Xi as CarouselItem,
  Qi as CarouselNext,
  Yi as CarouselPrevious,
  Zi as ChartContainer,
  gc as ChartLegend,
  rl as ChartLegendContent,
  el as ChartStyle,
  pc as ChartTooltip,
  tl as ChartTooltipContent,
  at as Checkbox,
  nl as Combobox,
  hc as ComboboxForm,
  Mt as Command,
  bc as CommandDialog,
  or as CommandEmpty,
  Dt as CommandGroup,
  rr as CommandInput,
  He as CommandItem,
  nr as CommandList,
  fo as CommandSeparator,
  ol as CommandShortcut,
  It as DEFAULT_FLASH_TABLE_LABELS,
  il as DatePicker,
  xc as DatePickerForm,
  vo as DateTimePicker,
  yc as DateTimePickerForm,
  wo as Dialog,
  vc as DialogClose,
  Or as DialogContent,
  Ro as DialogDescription,
  Sl as DialogFooter,
  Co as DialogHeader,
  No as DialogOverlay,
  Cl as DialogPortal,
  So as DialogTitle,
  Nl as DialogTrigger,
  wc as DropdownMenu,
  Tl as DropdownMenuCheckboxItem,
  Pl as DropdownMenuContent,
  Cc as DropdownMenuGroup,
  zl as DropdownMenuItem,
  Dl as DropdownMenuLabel,
  Sc as DropdownMenuPortal,
  kc as DropdownMenuRadioGroup,
  Ml as DropdownMenuRadioItem,
  Il as DropdownMenuSeparator,
  _l as DropdownMenuShortcut,
  Rc as DropdownMenuSub,
  kl as DropdownMenuSubContent,
  Rl as DropdownMenuSubTrigger,
  Nc as DropdownMenuTrigger,
  Gl as FlashTable,
  Bl as FlashTableColumnManager,
  $l as FlashTableContextMenu,
  ql as FlashTableHeaderCell,
  Fl as FlashTableHelpDialog,
  Wl as FlashTableToolbar,
  Pc as Form,
  dt as FormControl,
  Ao as FormDescription,
  Ue as FormField,
  _e as FormItem,
  Ae as FormLabel,
  Le as FormMessage,
  zc as Heading,
  ir as Input,
  Tc as InputForm,
  cr as Label,
  od as ListItem,
  ad as MaskedInput,
  id as MultiSelect,
  Ql as NavigationMenu,
  td as NavigationMenuContent,
  nd as NavigationMenuIndicator,
  Mc as NavigationMenuItem,
  rd as NavigationMenuLink,
  Jl as NavigationMenuList,
  ed as NavigationMenuTrigger,
  Lo as NavigationMenuViewport,
  ld as Pagination,
  dd as PaginationContent,
  fd as PaginationEllipsis,
  cd as PaginationItem,
  Fr as PaginationLink,
  md as PaginationNext,
  ud as PaginationPrevious,
  it as Popover,
  Ke as PopoverContent,
  lt as PopoverTrigger,
  pd as RadioGroup,
  gd as RadioGroupItem,
  hd as ScrollArea,
  Eo as ScrollBar,
  Oo as Select,
  Br as SelectContent,
  Ic as SelectForm,
  Dc as SelectGroup,
  Qt as SelectItem,
  bd as SelectLabel,
  Fo as SelectScrollDownButton,
  jo as SelectScrollUpButton,
  xd as SelectSeparator,
  Hr as SelectTrigger,
  Vo as SelectValue,
  Ho as Separator,
  _c as Sheet,
  Lc as SheetClose,
  wd as SheetContent,
  Rd as SheetDescription,
  Cd as SheetFooter,
  Nd as SheetHeader,
  Bo as SheetOverlay,
  yd as SheetPortal,
  Sd as SheetTitle,
  Ac as SheetTrigger,
  ko as Skeleton,
  kd as Switch,
  Al as Table,
  zo as TableBody,
  Ll as TableCaption,
  Ve as TableCell,
  To as TableFooter,
  Mo as TableHead,
  Po as TableHeader,
  De as TableRow,
  Ec as Tabs,
  Td as TabsContent,
  Pd as TabsList,
  zd as TabsTrigger,
  Wo as Textarea,
  Md as TextareaForm,
  yo as TimePicker,
  $t as TimePickerInput,
  qo as Toast,
  Ad as ToastAction,
  Ko as ToastClose,
  Go as ToastDescription,
  Dd as ToastProvider,
  Uo as ToastTitle,
  $o as ToastViewport,
  Oc as Toaster,
  Hd as Toggle,
  Bd as ToggleGroup,
  Wd as ToggleGroupItem,
  Vr as Tooltip,
  sr as TooltipContent,
  El as TooltipProvider,
  jr as TooltipTrigger,
  Ws as badgeVariants,
  fc as brazillianStates,
  Vl as buildDefaultPinning,
  $e as buttonVariants,
  a as cn,
  wt as extractColumnId,
  Yt as getColumnLabel,
  dr as isActionsColumnDef,
  Do as isActionsColumnId,
  lr as isExpansionColumnId,
  tt as isSameArray,
  Rt as isSelectionColumnId,
  Pe as isSystemLeftColumnId,
  mc as mask,
  Zl as navigationMenuTriggerStyle,
  kn as reconcileColumnOrder,
  Vd as reducer,
  Ol as resolveStorageScope,
  jd as toast,
  Xo as toggleVariants,
  Kl as useFlashTablePersistence,
  ur as useFormField,
  Fd as useToast
};
