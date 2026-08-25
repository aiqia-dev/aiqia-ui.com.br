import { jsx as r, jsxs as c, Fragment as _e } from "react/jsx-runtime";
import * as i from "react";
import xe, { useState as oe, useEffect as pe, useCallback as ua, useImperativeHandle as bt, useRef as ke } from "react";
import * as Z from "@radix-ui/react-accordion";
import { ChevronDown as ne, ChevronsUpDown as xt, Loader2 as ge, Check as ye, MoreHorizontal as yt, ChevronRight as Je, ChevronLeftIcon as ma, ChevronRightIcon as fa, ChevronDownIcon as pa, ArrowLeft as ga, ArrowRight as ha, Search as ba, CalendarIcon as xa, Clock as ya, Calendar as wa, X as et, Circle as wt, XCircle as dt, XIcon as va, Plus as Na, CheckIcon as lt, WandSparkles as Ca, ChevronLeft as Sa, ChevronUp as Ra } from "lucide-react";
import { clsx as ka } from "clsx";
import { twMerge as Pa } from "tailwind-merge";
import { cva as O } from "class-variance-authority";
import * as j from "@radix-ui/react-alert-dialog";
import { useFormContext as q, FormProvider as Ta, Controller as Da } from "react-hook-form";
import * as ie from "@radix-ui/react-avatar";
import { Slot as vt } from "@radix-ui/react-slot";
import { Link as Ma } from "react-router-dom";
import { TZDate as E, getDefaultClassNames as Nt, DayPicker as Aa } from "react-day-picker";
import _a from "embla-carousel-react";
import * as tt from "recharts";
import * as Ue from "@radix-ui/react-checkbox";
import { Command as F } from "cmdk";
import { format as Ct, parse as St, isValid as Rt, add as Ia } from "date-fns";
import * as he from "@radix-ui/react-popover";
import * as k from "@radix-ui/react-dialog";
import * as D from "@radix-ui/react-dropdown-menu";
import * as kt from "@radix-ui/react-label";
import * as H from "@radix-ui/react-navigation-menu";
import * as be from "@radix-ui/react-radio-group";
import * as Y from "@radix-ui/react-scroll-area";
import * as A from "@radix-ui/react-select";
import * as Pt from "@radix-ui/react-separator";
import * as Ye from "@radix-ui/react-switch";
import * as ee from "@radix-ui/react-tabs";
import * as L from "@radix-ui/react-toast";
import * as Tt from "@radix-ui/react-toggle";
import * as je from "@radix-ui/react-toggle-group";
import * as se from "@radix-ui/react-tooltip";
function n(...e) {
  return Pa(ka(e));
}
const gs = Z.Root, za = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  Z.Item,
  {
    ref: a,
    className: n("border-b", e),
    ...t
  }
));
za.displayName = "AccordionItem";
const Va = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ r(Z.Header, { className: "flex", children: /* @__PURE__ */ c(
  Z.Trigger,
  {
    ref: o,
    className: n(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r(ne, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Va.displayName = Z.Trigger.displayName;
const ja = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ r(
  Z.Content,
  {
    ref: o,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...a,
    children: /* @__PURE__ */ r("div", { className: n("pb-4 pt-0", e), children: t })
  }
));
ja.displayName = Z.Content.displayName;
const Fa = O(
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
), Ha = i.forwardRef(({ className: e, variant: t, ...a }, o) => /* @__PURE__ */ r(
  "div",
  {
    ref: o,
    role: "alert",
    className: n(Fa({ variant: t }), e),
    ...a
  }
));
Ha.displayName = "Alert";
const La = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "h5",
  {
    ref: a,
    className: n("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
La.displayName = "AlertTitle";
const Ea = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "div",
  {
    ref: a,
    className: n("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Ea.displayName = "AlertDescription";
const hs = j.Root, bs = j.Trigger, Oa = j.Portal, Dt = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  j.Overlay,
  {
    className: n(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
Dt.displayName = j.Overlay.displayName;
const Ba = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ c(Oa, { children: [
  /* @__PURE__ */ r(Dt, {}),
  /* @__PURE__ */ r(
    j.Content,
    {
      ref: a,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
Ba.displayName = j.Content.displayName;
const Wa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Wa.displayName = "AlertDialogHeader";
const $a = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
$a.displayName = "AlertDialogFooter";
const qa = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  j.Title,
  {
    ref: a,
    className: n("text-lg font-semibold", e),
    ...t
  }
));
qa.displayName = j.Title.displayName;
const Ka = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  j.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
Ka.displayName = j.Description.displayName;
const Ga = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  j.Action,
  {
    ref: a,
    className: n(J(), e),
    ...t
  }
));
Ga.displayName = j.Action.displayName;
const Xa = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  j.Cancel,
  {
    ref: a,
    className: n(
      J({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Xa.displayName = j.Cancel.displayName;
function Ua({
  options: e,
  isLoading: t,
  renderOption: a,
  getOptionValue: o,
  getDisplayValue: s,
  label: d,
  placeholder: l = "Selecione...",
  value: u,
  onChange: g,
  onSearchChange: m,
  disabled: w = !1,
  triggerClassName: b,
  noResultsMessage: C,
  clearable: z = !0,
  error: v
}) {
  const [f, x] = oe(!1), [h, N] = oe(u), [P, I] = oe(null), [M, y] = oe("");
  pe(() => {
    N(u);
  }, [u]), pe(() => {
    if (u && e.length > 0) {
      const S = e.find((R) => o(R) === u);
      S && I(S);
    }
  }, [u, e, o]);
  const V = ua(
    (S) => {
      const R = z && S === h ? "" : S;
      u && N(R), I(
        e.find((_) => o(_) === R) || null
      ), g(R), x(!1);
    },
    [h, g, z, e, o, u]
  );
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!d && /* @__PURE__ */ r(Be, { className: n(v && "text-destructive"), children: d }),
    /* @__PURE__ */ c(Ne, { open: f, onOpenChange: x, children: [
      /* @__PURE__ */ r(Ce, { asChild: !0, children: /* @__PURE__ */ c(
        te,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": f,
          className: n(
            "justify-between w-full hover:bg-input bg-input font-normal",
            w && "opacity-50 cursor-not-allowed",
            !u && "text-muted-foreground",
            b
          ),
          disabled: w,
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: u && P ? s(P) : l }),
            /* @__PURE__ */ r(xt, { className: "opacity-50", size: 10 })
          ]
        }
      ) }),
      /* @__PURE__ */ r(de, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(we, { shouldFilter: !1, children: [
        /* @__PURE__ */ c("div", { className: "relative border-b", children: [
          /* @__PURE__ */ r(
            He,
            {
              placeholder: "Buscar",
              value: M,
              onValueChange: (S) => {
                y(S), m(S);
              }
            }
          ),
          t && e.length > 0 && /* @__PURE__ */ r("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center", children: /* @__PURE__ */ r(ge, { className: "h-4 w-4 animate-spin" }) })
        ] }),
        /* @__PURE__ */ c(Le, { children: [
          t && e.length === 0 && /* @__PURE__ */ r(Ya, {}),
          !t && e.length === 0 && /* @__PURE__ */ r(Ee, { children: /* @__PURE__ */ r("div", { className: "py-2 text-center text-sm text-muted-foreground italic", children: C ?? "Nenhum resultado encontrado." }) }),
          /* @__PURE__ */ r(ve, { children: e.map((S) => /* @__PURE__ */ c(
            Q,
            {
              value: o(S),
              onSelect: V,
              children: [
                /* @__PURE__ */ r(
                  ye,
                  {
                    className: n(
                      "mr-2 size-4 shrink-0",
                      h === o(S) ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ r("div", { className: "w-0 flex-1", children: a(S) })
              ]
            },
            o(S)
          )) })
        ] })
      ] }) })
    ] }),
    !!v && /* @__PURE__ */ r("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: v })
  ] });
}
function Ya() {
  return /* @__PURE__ */ r(ve, { children: [1, 2, 3].map((e) => /* @__PURE__ */ r(Q, { disabled: !0, className: "p-0", children: /* @__PURE__ */ r(Tn, { className: "w-full h-8 my-0.5" }) }, e)) });
}
const xs = ({
  name: e,
  label: t,
  disabled: a,
  isLoading: o,
  options: s,
  placeholder: d = "Selecione",
  onSearchChange: l,
  getDisplayValue: u,
  getOptionValue: g,
  renderOption: m
}) => {
  const { control: w } = q();
  return /* @__PURE__ */ r(
    ae,
    {
      name: e,
      control: w,
      render: ({ field: b }) => /* @__PURE__ */ c(K, { children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(
          Ua,
          {
            options: s,
            value: b.value,
            placeholder: d,
            onSearchChange: l,
            getDisplayValue: u,
            getOptionValue: g,
            renderOption: m,
            onChange: (C) => b.onChange(C),
            isLoading: o,
            disabled: a
          }
        ),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
}, Qa = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ie.Root,
  {
    ref: a,
    className: n(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Qa.displayName = ie.Root.displayName;
const Za = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ie.Image,
  {
    ref: a,
    className: n("aspect-square h-full w-full", e),
    ...t
  }
));
Za.displayName = ie.Image.displayName;
const Ja = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ie.Fallback,
  {
    ref: a,
    className: n(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ja.displayName = ie.Fallback.displayName;
const er = O(
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
function ct({ className: e, variant: t, ...a }) {
  return /* @__PURE__ */ r("div", { className: n(er({ variant: t }), e), ...a });
}
const tr = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ r("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
tr.displayName = "Breadcrumb";
const ar = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "ol",
  {
    ref: a,
    className: n(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
ar.displayName = "BreadcrumbList";
const rr = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "li",
  {
    ref: a,
    className: n("inline-flex items-center gap-1.5", e),
    ...t
  }
));
rr.displayName = "BreadcrumbItem";
const or = i.forwardRef(({ asChild: e, className: t, ...a }, o) => /* @__PURE__ */ r(
  e ? vt : "a",
  {
    ref: o,
    className: n("transition-colors hover:text-foreground", t),
    ...a
  }
));
or.displayName = "BreadcrumbLink";
const nr = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "span",
  {
    ref: a,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: n("font-normal text-foreground", e),
    ...t
  }
));
nr.displayName = "BreadcrumbPage";
const sr = ({
  children: e,
  className: t,
  ...a
}) => /* @__PURE__ */ r(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: n("[&>svg]:w-3.5 [&>svg]:h-3.5", t),
    ...a,
    children: e ?? /* @__PURE__ */ r(Je, {})
  }
);
sr.displayName = "BreadcrumbSeparator";
const ir = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: n("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(yt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More" })
    ]
  }
);
ir.displayName = "BreadcrumbElipssis";
const dr = {
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
}, J = O(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:size-5 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: dr,
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), te = i.forwardRef(({ className: e, variant: t, size: a, disabled: o, href: s, ...d }, l) => /* @__PURE__ */ r(_e, { children: s ? /* @__PURE__ */ r(
  Ma,
  {
    className: n(J({ variant: t, size: a, className: e })),
    ref: l,
    to: s,
    ...d
  }
) : /* @__PURE__ */ r(
  "button",
  {
    className: n(J({ variant: t, size: a, className: e })),
    ref: l,
    disabled: o,
    ...d
  }
) }));
te.displayName = "Button";
const lr = "(##) ####-####", cr = "(##) #####-####", ur = "#####-###", mr = "###.###.###-##", fr = "##.###.###/####-##", pr = "###########", gr = "##.###.###-#", hr = "AAA#A##", br = "###########", xr = "##############", Mt = (e, t) => {
  let a = "", o = 0;
  for (let s = 0; s < t.length; s++) {
    const d = e[o];
    if (d === void 0)
      break;
    switch (t[s]) {
      case "#":
        if (!/\d/.test(d))
          return a;
        a += d, o++;
        break;
      case "A":
        if (!/[a-zA-Z]/.test(d))
          return a;
        a += d, o++;
        break;
      case "*":
        /[a-zA-Z0-9]/.test(d) && (a += e[o]), o++;
        break;
      default:
        a += t[s], t[s] === d && o++;
    }
  }
  return a;
}, ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CELL_PHONE_MASK: cr,
  CNH_MASK: pr,
  CNPJ_MASK: fr,
  CPF_MASK: mr,
  PHONE_MASK: lr,
  PLATE_MASK: hr,
  RENAVAM_MASK: br,
  RG_MASK: gr,
  RNTRC_MASK: xr,
  ZIP_CODE_MASK: ur,
  formatMask: Mt
}, Symbol.toStringTag, { value: "Module" })), ws = [
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
function Ke(e) {
  return (t = {}) => {
    const a = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[a] || e.formats[e.defaultWidth];
  };
}
function ce(e) {
  return (t, a) => {
    const o = a?.context ? String(a.context) : "standalone";
    let s;
    if (o === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, u = a?.width ? String(a.width) : l;
      s = e.formattingValues[u] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, u = a?.width ? String(a.width) : e.defaultWidth;
      s = e.values[u] || e.values[l];
    }
    const d = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[d];
  };
}
function ue(e) {
  return (t, a = {}) => {
    const o = a.width, s = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], d = t.match(s);
    if (!d)
      return null;
    const l = d[0], u = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(u) ? wr(u, (b) => b.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      yr(u, (b) => b.test(l))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(g) : g, m = a.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      a.valueCallback(m)
    ) : m;
    const w = t.slice(l.length);
    return { value: m, rest: w };
  };
}
function yr(e, t) {
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a]))
      return a;
}
function wr(e, t) {
  for (let a = 0; a < e.length; a++)
    if (t(e[a]))
      return a;
}
function vr(e) {
  return (t, a = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const s = o[0], d = t.match(e.parsePattern);
    if (!d) return null;
    let l = e.valueCallback ? e.valueCallback(d[0]) : d[0];
    l = a.valueCallback ? a.valueCallback(l) : l;
    const u = t.slice(s.length);
    return { value: l, rest: u };
  };
}
const Nr = {
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
}, Cr = (e, t, a) => {
  let o;
  const s = Nr[e];
  return typeof s == "string" ? o = s : t === 1 ? o = s.one : o = s.other.replace("{{count}}", String(t)), a?.addSuffix ? a.comparison && a.comparison > 0 ? "em " + o : "há " + o : o;
}, Sr = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, Rr = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, kr = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Pr = {
  date: Ke({
    formats: Sr,
    defaultWidth: "full"
  }),
  time: Ke({
    formats: Rr,
    defaultWidth: "full"
  }),
  dateTime: Ke({
    formats: kr,
    defaultWidth: "full"
  })
}, Tr = {
  lastWeek: (e) => {
    const t = e.getDay();
    return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Dr = (e, t, a, o) => {
  const s = Tr[e];
  return typeof s == "function" ? s(t) : s;
}, Mr = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "depois de cristo"]
}, Ar = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, _r = {
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
}, Ir = {
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
}, zr = {
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
}, Vr = {
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
}, jr = (e, t) => {
  const a = Number(e);
  return t?.unit === "week" ? a + "ª" : a + "º";
}, Fr = {
  ordinalNumber: jr,
  era: ce({
    values: Mr,
    defaultWidth: "wide"
  }),
  quarter: ce({
    values: Ar,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ce({
    values: _r,
    defaultWidth: "wide"
  }),
  day: ce({
    values: Ir,
    defaultWidth: "wide"
  }),
  dayPeriod: ce({
    values: zr,
    defaultWidth: "wide",
    formattingValues: Vr,
    defaultFormattingWidth: "wide"
  })
}, Hr = /^(\d+)[ºªo]?/i, Lr = /\d+/i, Er = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
}, Or = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
}, Br = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Wr = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $r = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, qr = {
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
}, Kr = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}, Gr = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}, Xr = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}, Ur = {
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
}, Yr = {
  ordinalNumber: vr({
    matchPattern: Hr,
    parsePattern: Lr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ue({
    matchPatterns: Er,
    defaultMatchWidth: "wide",
    parsePatterns: Or,
    defaultParseWidth: "any"
  }),
  quarter: ue({
    matchPatterns: Br,
    defaultMatchWidth: "wide",
    parsePatterns: Wr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ue({
    matchPatterns: $r,
    defaultMatchWidth: "wide",
    parsePatterns: qr,
    defaultParseWidth: "any"
  }),
  day: ue({
    matchPatterns: Kr,
    defaultMatchWidth: "wide",
    parsePatterns: Gr,
    defaultParseWidth: "any"
  }),
  dayPeriod: ue({
    matchPatterns: Xr,
    defaultMatchWidth: "any",
    parsePatterns: Ur,
    defaultParseWidth: "any"
  })
}, At = {
  code: "pt-BR",
  formatDistance: Cr,
  formatLong: Pr,
  formatRelative: Dr,
  localize: Fr,
  match: Yr,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _t({
  className: e,
  classNames: t,
  showOutsideDays: a = !0,
  captionLayout: o = "dropdown",
  buttonVariant: s = "ghost",
  locale: d = At,
  formatters: l,
  components: u,
  startMonth: g,
  endMonth: m,
  timeZone: w = "America/Sao_Paulo",
  ...b
}) {
  const C = new E(/* @__PURE__ */ new Date(), w), z = new E(C.getFullYear() - 100, 0, 1, w), v = new E(C.getFullYear() + 10, 11, 31, w), f = Nt();
  return /* @__PURE__ */ r(
    Aa,
    {
      showOutsideDays: a,
      timeZone: w,
      className: n(
        "p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] bg-background group/calendar in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      startMonth: g ?? z,
      endMonth: m ?? v,
      locale: d,
      formatters: {
        formatMonthDropdown: (x) => x.toLocaleString(d?.code, { month: "short" }),
        ...l
      },
      classNames: {
        root: n("w-fit", f.root),
        months: n(
          "flex gap-4 flex-col md:flex-row relative",
          f.months
        ),
        month: n("flex flex-col w-full gap-4", f.month),
        nav: n(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          f.nav
        ),
        button_previous: n(
          J({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          f.button_previous
        ),
        button_next: n(
          J({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          f.button_next
        ),
        month_caption: n(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          f.month_caption
        ),
        dropdowns: n(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          f.dropdowns
        ),
        dropdown_root: n(
          "relative cn-calendar-dropdown-root rounded-(--cell-radius)",
          f.dropdown_root
        ),
        dropdown: n(
          "absolute bg-popover inset-0 opacity-0",
          f.dropdown
        ),
        caption_label: n(
          "select-none font-medium",
          o === "label" ? "text-sm" : "cn-calendar-caption-label rounded-(--cell-radius) flex items-center gap-1 text-sm  [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          f.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: n("flex", f.weekdays),
        weekday: n(
          "text-muted-foreground rounded-(--cell-radius) flex-1 font-normal text-[0.8rem] select-none",
          f.weekday
        ),
        week: n("flex w-full mt-2", f.week),
        week_number_header: n(
          "select-none w-(--cell-size)",
          f.week_number_header
        ),
        week_number: n(
          "text-[0.8rem] select-none text-muted-foreground",
          f.week_number
        ),
        day: n(
          "relative w-full rounded-(--cell-radius) h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) group/day aspect-square select-none",
          b.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          f.day
        ),
        range_start: n(
          "rounded-l-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:right-0 z-0 isolate",
          f.range_start
        ),
        range_middle: n("rounded-none", f.range_middle),
        range_end: n(
          "rounded-r-(--cell-radius) bg-muted relative after:bg-muted after:absolute after:inset-y-0 after:w-4 after:left-0 z-0 isolate",
          f.range_end
        ),
        today: n(
          "bg-muted text-foreground rounded-(--cell-radius) data-[selected=true]:rounded-none",
          f.today
        ),
        outside: n(
          "text-muted-foreground aria-selected:text-muted-foreground",
          f.outside
        ),
        disabled: n(
          "text-muted-foreground opacity-50",
          f.disabled
        ),
        hidden: n("invisible", f.hidden),
        ...t
      },
      components: {
        Root: ({ className: x, rootRef: h, ...N }) => /* @__PURE__ */ r(
          "div",
          {
            "data-slot": "calendar",
            ref: h,
            className: n(x),
            ...N
          }
        ),
        Chevron: ({ className: x, orientation: h, ...N }) => h === "left" ? /* @__PURE__ */ r(ma, { className: n("cn-rtl-flip size-4", x), ...N }) : h === "right" ? /* @__PURE__ */ r(fa, { className: n("cn-rtl-flip size-4", x), ...N }) : /* @__PURE__ */ r(pa, { className: n("size-4", x), ...N }),
        DayButton: ({ ...x }) => /* @__PURE__ */ r(Qr, { locale: d, ...x }),
        WeekNumber: ({ children: x, ...h }) => /* @__PURE__ */ r("td", { ...h, children: /* @__PURE__ */ r("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: x }) }),
        ...u
      },
      ...b
    }
  );
}
function Qr({
  className: e,
  day: t,
  modifiers: a,
  locale: o,
  ...s
}) {
  const d = Nt(), l = i.useRef(null);
  return i.useEffect(() => {
    a.focused && l.current?.focus();
  }, [a.focused]), /* @__PURE__ */ r(
    te,
    {
      ref: l,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(o?.code),
      "data-selected-single": a.selected && !a.range_start && !a.range_end && !a.range_middle,
      "data-range-start": a.range_start,
      "data-range-end": a.range_end,
      "data-range-middle": a.range_middle,
      className: n(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) [&>span]:text-xs [&>span]:opacity-70",
        d.day,
        e
      ),
      ...s
    }
  );
}
const Zr = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "div",
  {
    ref: a,
    className: n(
      "rounded-lg border bg-card text-card-foreground shadow-xs",
      e
    ),
    ...t
  }
));
Zr.displayName = "Card";
const Jr = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "div",
  {
    ref: a,
    className: n("flex flex-col space-y-1.5 p-4 pb-0", e),
    ...t
  }
));
Jr.displayName = "CardHeader";
const eo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "h3",
  {
    ref: a,
    className: n(
      "text-xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
eo.displayName = "CardTitle";
const to = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "p",
  {
    ref: a,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
to.displayName = "CardDescription";
const ao = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r("div", { ref: a, className: n("p-4", e), ...t }));
ao.displayName = "CardContent";
const ro = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "div",
  {
    ref: a,
    className: n("flex items-center p-4 pt-0", e),
    ...t
  }
));
ro.displayName = "CardFooter";
const It = i.createContext(null);
function Fe() {
  const e = i.useContext(It);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const oo = i.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: a,
    plugins: o,
    className: s,
    children: d,
    ...l
  }, u) => {
    const [g, m] = _a(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [w, b] = i.useState(!1), [C, z] = i.useState(!1), v = i.useCallback((N) => {
      N && (b(N.canScrollPrev()), z(N.canScrollNext()));
    }, []), f = i.useCallback(() => {
      m?.scrollPrev();
    }, [m]), x = i.useCallback(() => {
      m?.scrollNext();
    }, [m]), h = i.useCallback(
      (N) => {
        N.key === "ArrowLeft" ? (N.preventDefault(), f()) : N.key === "ArrowRight" && (N.preventDefault(), x());
      },
      [f, x]
    );
    return i.useEffect(() => {
      !m || !a || a(m);
    }, [m, a]), i.useEffect(() => {
      if (m)
        return v(m), m.on("reInit", v), m.on("select", v), () => {
          m?.off("select", v);
        };
    }, [m, v]), /* @__PURE__ */ r(
      It.Provider,
      {
        value: {
          carouselRef: g,
          api: m,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: f,
          scrollNext: x,
          canScrollPrev: w,
          canScrollNext: C
        },
        children: /* @__PURE__ */ r(
          "div",
          {
            ref: u,
            onKeyDownCapture: h,
            className: n("relative", s),
            role: "region",
            "aria-roledescription": "carousel",
            ...l,
            children: d
          }
        )
      }
    );
  }
);
oo.displayName = "Carousel";
const no = i.forwardRef(({ className: e, ...t }, a) => {
  const { carouselRef: o, orientation: s } = Fe();
  return /* @__PURE__ */ r("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      className: n(
        "flex",
        s === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
no.displayName = "CarouselContent";
const so = i.forwardRef(({ className: e, ...t }, a) => {
  const { orientation: o } = Fe();
  return /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      role: "group",
      "aria-roledescription": "slide",
      className: n(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
so.displayName = "CarouselItem";
const io = i.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...o }, s) => {
  const { orientation: d, scrollPrev: l, canScrollPrev: u } = Fe();
  return /* @__PURE__ */ c(
    te,
    {
      ref: s,
      variant: t,
      size: a,
      className: n(
        "absolute  h-8 w-8 rounded-full",
        d === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ r(ga, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
io.displayName = "CarouselPrevious";
const lo = i.forwardRef(({ className: e, variant: t = "outline", size: a = "icon", ...o }, s) => {
  const { orientation: d, scrollNext: l, canScrollNext: u } = Fe();
  return /* @__PURE__ */ c(
    te,
    {
      ref: s,
      variant: t,
      size: a,
      className: n(
        "absolute h-8 w-8 rounded-full",
        d === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !u,
      onClick: l,
      ...o,
      children: [
        /* @__PURE__ */ r(ha, { className: "h-4 w-4" }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
lo.displayName = "CarouselNext";
const co = { light: "", dark: ".dark" }, zt = i.createContext(null);
function Vt() {
  const e = i.useContext(zt);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const uo = i.forwardRef(({ id: e, className: t, children: a, config: o, ...s }, d) => {
  const l = i.useId(), u = `chart-${e || l.replace(/:/g, "")}`;
  return /* @__PURE__ */ r(zt.Provider, { value: { config: o }, children: /* @__PURE__ */ c(
    "div",
    {
      "data-chart": u,
      ref: d,
      className: n(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ r(mo, { id: u, config: o }),
        /* @__PURE__ */ r(tt.ResponsiveContainer, { children: a })
      ]
    }
  ) });
});
uo.displayName = "Chart";
const mo = ({ id: e, config: t }) => {
  const a = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return a.length ? /* @__PURE__ */ r(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(co).map(
          ([o, s]) => `
${s} [data-chart=${e}] {
${a.map(([d, l]) => {
            const u = l.theme?.[o] || l.color;
            return u ? `  --color-${d}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, vs = tt.Tooltip, fo = i.forwardRef(
  ({
    active: e,
    payload: t,
    className: a,
    indicator: o = "dot",
    hideLabel: s = !1,
    hideIndicator: d = !1,
    label: l,
    labelFormatter: u,
    labelClassName: g,
    formatter: m,
    color: w,
    nameKey: b,
    labelKey: C
  }, z) => {
    const { config: v } = Vt(), f = i.useMemo(() => {
      if (s || !t?.length)
        return null;
      const [h] = t;
      if (!h)
        return null;
      const N = `${C || h.dataKey || h.name || "value"}`, P = Qe(v, h, N), I = !C && typeof l == "string" ? v[l]?.label || l : P?.label;
      return u ? /* @__PURE__ */ r("div", { className: n("font-medium", g), children: u(I, t) }) : I ? /* @__PURE__ */ r("div", { className: n("font-medium", g), children: I }) : null;
    }, [
      l,
      u,
      t,
      s,
      g,
      v,
      C
    ]);
    if (!e || !t?.length)
      return null;
    const x = t.length === 1 && o !== "dot";
    return /* @__PURE__ */ c(
      "div",
      {
        ref: z,
        className: n(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          a
        ),
        children: [
          x ? null : f,
          /* @__PURE__ */ r("div", { className: "grid gap-1.5", children: t.map((h, N) => {
            if (!h)
              return null;
            const P = `${b || h.dataKey || h.name || "value"}`, I = Qe(v, h, P), M = w || h.payload.fill || h.color;
            return /* @__PURE__ */ r(
              "div",
              {
                className: n(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  o === "dot" && "items-center"
                ),
                children: m && h?.value !== void 0 && h.name ? m(h.value, h.name, h, N, h.payload) : /* @__PURE__ */ c(_e, { children: [
                  I?.icon ? /* @__PURE__ */ r(I.icon, {}) : !d && /* @__PURE__ */ r(
                    "div",
                    {
                      className: n(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": o === "dot",
                          "w-1": o === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                          "my-0.5": x && o === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": M,
                        "--color-border": M
                      }
                    }
                  ),
                  /* @__PURE__ */ c(
                    "div",
                    {
                      className: n(
                        "flex flex-1 justify-between leading-none",
                        x ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                          x ? f : null,
                          /* @__PURE__ */ r("span", { className: "text-muted-foreground", children: I?.label || h.name })
                        ] }),
                        h.value && /* @__PURE__ */ r("span", { className: "font-mono font-medium tabular-nums text-foreground", children: h.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              h.dataKey
            );
          }) })
        ]
      }
    );
  }
);
fo.displayName = "ChartTooltip";
const Ns = tt.Legend, po = i.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: a, verticalAlign: o = "bottom", nameKey: s }, d) => {
    const { config: l } = Vt();
    return a?.length ? /* @__PURE__ */ r(
      "div",
      {
        ref: d,
        className: n(
          "flex items-center justify-center gap-4",
          o === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: a.map((u) => {
          if (!u)
            return null;
          const g = `${s || u.dataKey || "value"}`, m = Qe(l, u, g);
          return /* @__PURE__ */ c(
            "div",
            {
              className: n(
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
po.displayName = "ChartLegend";
function Qe(e, t, a) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = a;
  return a in t && typeof t[a] == "string" ? s = t[a] : o && a in o && typeof o[a] == "string" && (s = o[a]), s in e ? e[s] : e[a];
}
const go = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  Ue.Root,
  {
    ref: a,
    className: n(
      "peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(
      Ue.Indicator,
      {
        className: n("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ r(ye, { className: "size-4 h-full" })
      }
    )
  }
));
go.displayName = Ue.Root.displayName;
function Cs({
  name: e,
  label: t,
  options: a,
  placeholder: o = "Selecione uma opção",
  searchPlaceholder: s = "Buscar...",
  emptyMessage: d = "Nenhum resultado encontrado.",
  disabled: l = !1,
  isLoading: u = !1
}) {
  const { control: g, setValue: m } = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: g,
      name: e,
      render: ({ field: w }) => /* @__PURE__ */ c(K, { children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(
          ho,
          {
            placeholder: o,
            searchPlaceholder: s,
            emptyMessage: d,
            options: a,
            selected: w.value,
            onSelect: (b) => m(e, b, { shouldValidate: !0 }),
            disabled: l,
            isLoading: u
          }
        ),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
}
function ho({
  label: e,
  options: t,
  selected: a,
  onSelect: o,
  placeholder: s = "Selecione uma opção",
  searchPlaceholder: d = "Buscar...",
  emptyMessage: l = "Nenhum resultado encontrado.",
  error: u,
  disabled: g = !1,
  isLoading: m = !1
}) {
  const [w, b] = oe(!1);
  return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
    !!e && /* @__PURE__ */ r(Be, { children: e }),
    /* @__PURE__ */ c(Ne, { open: w, onOpenChange: b, children: [
      /* @__PURE__ */ r(Ce, { asChild: !0, children: /* @__PURE__ */ c(
        te,
        {
          variant: "outline",
          disabled: g,
          className: n(
            "relative w-full justify-between hover:bg-input bg-input font-normal",
            !a && "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ r("div", { className: "truncate", children: a ? t.find((C) => C.value === a)?.label : s }),
            /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
              m && /* @__PURE__ */ r(ge, { className: "animate-spin shrink-0 opacity-50" }),
              /* @__PURE__ */ r(xt, { className: "shrink-0 opacity-50" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ r(de, { className: "p-0 w-auto min-w-[var(--radix-popover-trigger-width)]", children: /* @__PURE__ */ c(we, { children: [
        /* @__PURE__ */ r(He, { placeholder: d }),
        /* @__PURE__ */ c(Le, { children: [
          /* @__PURE__ */ r(Ee, { children: l }),
          /* @__PURE__ */ r(ve, { children: t.map((C) => /* @__PURE__ */ c(
            Q,
            {
              value: C.label,
              onSelect: () => {
                a === C.value ? o(void 0) : o(C.value), b(!1);
              },
              children: [
                /* @__PURE__ */ r(
                  ye,
                  {
                    className: n(
                      "mr-2 size-4",
                      a === C.value ? "opacity-100" : "opacity-0"
                    )
                  }
                ),
                /* @__PURE__ */ r("div", { className: "w-0 flex-1", children: C.label })
              ]
            },
            C.value
          )) })
        ] })
      ] }) })
    ] }),
    !!u && /* @__PURE__ */ r("p", { className: "text-destructive dark:text-red-400 text-[0.8rem]", children: u })
  ] });
}
const we = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  F,
  {
    ref: a,
    className: n(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
we.displayName = F.displayName;
const Ss = ({ children: e, ...t }) => /* @__PURE__ */ r(Vo, { ...t, children: /* @__PURE__ */ r(qt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r(we, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), He = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ c("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r(ba, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r(
    F.Input,
    {
      ref: a,
      className: n(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
He.displayName = F.Input.displayName;
const Le = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  F.List,
  {
    ref: a,
    className: n("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Le.displayName = F.List.displayName;
const Ee = i.forwardRef((e, t) => /* @__PURE__ */ r(
  F.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Ee.displayName = F.Empty.displayName;
const ve = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  F.Group,
  {
    ref: a,
    className: n(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
ve.displayName = F.Group.displayName;
const jt = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  F.Separator,
  {
    ref: a,
    className: n("-mx-1 h-px bg-border", e),
    ...t
  }
));
jt.displayName = F.Separator.displayName;
const Q = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  F.Item,
  {
    ref: a,
    className: n(
      "relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e
    ),
    ...t
  }
));
Q.displayName = F.Item.displayName;
const bo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: n(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
bo.displayName = "CommandShortcut";
const Ne = he.Root, Ce = he.Trigger, de = i.forwardRef(({ className: e, align: t = "center", sideOffset: a = 4, ...o }, s) => /* @__PURE__ */ r(he.Portal, { children: /* @__PURE__ */ r(
  he.Content,
  {
    ref: s,
    align: t,
    sideOffset: a,
    className: n(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
de.displayName = he.Content.displayName;
function xo(e) {
  const t = e.replace(/\D/g, "");
  let a = "";
  for (let o = 0; o < t.length && o < 8; o++)
    (o === 2 || o === 4) && (a += "/"), a += t[o];
  return a;
}
function yo(e) {
  const t = e.replace(/\D/g, "");
  let a = "";
  for (let o = 0; o < t.length && o < 16; o++)
    (o === 2 || o === 4) && (a += "/"), o === 8 && (a += " - "), (o === 10 || o === 12) && (a += "/"), a += t[o];
  return a;
}
function Ie(e) {
  if (e.length < 10) return null;
  const t = St(
    e.slice(0, 10),
    "dd/MM/yyyy",
    new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo")
  );
  return Rt(t) ? t : null;
}
function ut(e) {
  const t = e.split(" - "), a = Ie(t[0] ?? "");
  if (!a) return null;
  const o = t[1] ? Ie(t[1]) : void 0;
  return { from: a, to: o ?? void 0 };
}
function Pe(e) {
  return Ct(e, "dd/MM/yyyy");
}
function Te(e, t) {
  if (!e) return "";
  if (t === "range") {
    const a = e;
    return a.from ? a.to ? `${Pe(a.from)} - ${Pe(a.to)}` : Pe(a.from) : "";
  }
  return Pe(e);
}
function mt(e) {
  if (e)
    return e instanceof Date ? e : e.from;
}
function wo({
  value: e,
  onChange: t,
  disabled: a,
  disabledDates: o,
  mode: s = "single",
  ...d
}) {
  const [l, u] = i.useState(e), [g, m] = i.useState(
    mt(e)
  ), [w, b] = i.useState(
    Te(e, s)
  ), [C, z] = i.useState(!1), v = i.useRef(null), f = i.useRef(
    Te(e, s)
  ), x = i.useRef(!1);
  i.useEffect(() => {
    if (x.current) {
      x.current = !1;
      return;
    }
    const M = Te(e, s);
    u(e), b(M), f.current = M;
    const y = mt(e);
    y && m(y);
  }, [e]);
  function h(M) {
    x.current = !0;
    const y = Te(M, s);
    u(M), b(y), f.current = y, t?.(M), s !== "range" && z(!1);
  }
  function N(M) {
    const y = M.target.value;
    if (y.replace(/\D/g, "") === "") {
      b(""), f.current = "", x.current = !0, u(void 0), m(void 0), t?.(void 0);
      return;
    }
    const V = M.target.selectionStart ?? y.length, S = y.slice(0, V).replace(/\D/g, "").length, R = s === "range" ? yo(y) : xo(y);
    if (b(R), requestAnimationFrame(() => {
      if (v.current) {
        let _ = 0, U = R.length;
        for (let W = 0; W < R.length; W++)
          if (/\d/.test(R[W]) && _++, _ === S) {
            U = W + 1;
            break;
          }
        v.current.setSelectionRange(U, U);
      }
    }), s === "range") {
      const _ = ut(R);
      _ && (x.current = !0, u(_), f.current = R, _.from && m(_.from), t?.(_));
    } else {
      const _ = Ie(R);
      _ && (x.current = !0, u(_), m(_), f.current = R, t?.(_));
    }
  }
  function P() {
    !(s === "range" ? ut(w) !== null : Ie(w) !== null) && w !== "" && b(f.current);
  }
  const I = s === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";
  return /* @__PURE__ */ c(Ne, { open: C, onOpenChange: z, children: [
    /* @__PURE__ */ c(
      "div",
      {
        className: n(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          a && "cursor-not-allowed opacity-50"
        ),
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: v,
              value: w,
              onChange: N,
              onBlur: P,
              placeholder: I,
              disabled: a,
              className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
            }
          ),
          /* @__PURE__ */ r(Ce, { asChild: !0, disabled: a, children: /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              disabled: a,
              className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
              children: /* @__PURE__ */ r(xa, { className: "h-4 w-4" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ r(de, { className: "w-auto p-0", children: /* @__PURE__ */ r(
      _t,
      {
        mode: s,
        selected: l,
        onSelect: h,
        disabled: o,
        month: g,
        onMonthChange: m,
        timeZone: "America/Sao_Paulo",
        ...d
      }
    ) })
  ] });
}
const Rs = ({
  name: e,
  label: t,
  ...a
}) => {
  const o = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(K, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(
          wo,
          {
            value: s.value,
            onChange: s.onChange,
            ...a
          }
        ) }),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
};
function vo(e) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(e);
}
function No(e) {
  return /^(0[1-9]|1[0-2])$/.test(e);
}
function Co(e) {
  return /^[0-5][0-9]$/.test(e);
}
function Oe(e, { max: t, min: a = 0, loop: o = !1 }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (o ? (s > t && (s = a), s < a && (s = t)) : (s > t && (s = t), s < a && (s = a)), s.toString().padStart(2, "0"));
}
function Ft(e) {
  return vo(e) ? e : Oe(e, { max: 23 });
}
function Ht(e) {
  return No(e) ? e : Oe(e, { min: 1, max: 12 });
}
function ze(e) {
  return Co(e) ? e : Oe(e, { max: 59 });
}
function at(e, { min: t, max: a, step: o }) {
  let s = parseInt(e, 10);
  return Number.isNaN(s) ? "00" : (s += o, Oe(String(s), { min: t, max: a, loop: !0 }));
}
function So(e, t) {
  return at(e, { min: 0, max: 23, step: t });
}
function Ro(e, t) {
  return at(e, { min: 1, max: 12, step: t });
}
function ft(e, t) {
  return at(e, { min: 0, max: 59, step: t });
}
function ko(e, t) {
  const a = ze(t);
  return e.setMinutes(parseInt(a, 10)), e;
}
function Po(e, t) {
  const a = ze(t);
  return e.setSeconds(parseInt(a, 10)), e;
}
function To(e, t) {
  const a = Ft(t);
  return e.setHours(parseInt(a, 10)), e;
}
function Do(e, t, a) {
  const o = parseInt(Ht(t), 10), s = _o(o, a);
  return e.setHours(s), e;
}
function Ze(e, t, a, o) {
  switch (a) {
    case "minutes":
      return ko(e, t);
    case "seconds":
      return Po(e, t);
    case "hours":
      return To(e, t);
    case "12hours":
      return o ? Do(e, t, o) : e;
    default:
      return e;
  }
}
function Mo(e, t) {
  if (!e) return "00";
  switch (t) {
    case "minutes":
      return ze(String(e.getMinutes()));
    case "seconds":
      return ze(String(e.getSeconds()));
    case "hours":
      return Ft(String(e.getHours()));
    case "12hours":
      return Ht(String(Lt(e.getHours())));
    default:
      return "00";
  }
}
function Ao(e, t, a) {
  switch (a) {
    case "minutes":
      return ft(e, t);
    case "seconds":
      return ft(e, t);
    case "hours":
      return So(e, t);
    case "12hours":
      return Ro(e, t);
    default:
      return "00";
  }
}
function _o(e, t) {
  return t === "PM" ? e <= 11 ? e + 12 : e : t === "AM" && e === 12 ? 0 : e;
}
function Lt(e) {
  return e === 0 || e === 12 ? "12" : e >= 22 ? `${e - 12}` : e % 12 > 9 ? `${e}` : `0${e % 12}`;
}
function Et(e) {
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
function Io(e) {
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
function zo(e, t) {
  const a = e.replace(/\D/g, ""), o = Io(t);
  let s = "";
  for (let d = 0; d < a.length && d < o; d++)
    (d === 2 || d === 4) && (s += "/"), d === 8 && (s += " "), (d === 10 || d === 12) && (s += ":"), s += a[d];
  return s;
}
function pt(e, t) {
  const a = Et(t);
  if (e.length < a.length) return null;
  const o = St(e.slice(0, a.length), a, new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo"));
  return Rt(o) ? o : null;
}
function me(e, t) {
  return Ct(e, Et(t));
}
const Ot = i.forwardRef(
  ({ period: e, setPeriod: t, date: a, onDateChange: o, onLeftFocus: s, onRightFocus: d }, l) => {
    const u = (m) => {
      m.key === "ArrowRight" && d?.(), m.key === "ArrowLeft" && s?.();
    }, g = (m) => {
      if (t?.(m), a) {
        const w = new E(a, "America/Sao_Paulo"), b = Lt(a.getHours());
        o?.(
          Ze(
            w,
            b.toString(),
            "12hours",
            e === "AM" ? "PM" : "AM"
          )
        );
      }
    };
    return /* @__PURE__ */ r("div", { className: "flex h-10 items-center", children: /* @__PURE__ */ c(
      Qt,
      {
        defaultValue: e,
        onValueChange: (m) => g(m),
        children: [
          /* @__PURE__ */ r(
            nt,
            {
              ref: l,
              className: "w-[65px] focus:bg-accent focus:text-accent-foreground",
              onKeyDown: u,
              children: /* @__PURE__ */ r(Zt, {})
            }
          ),
          /* @__PURE__ */ c(st, { children: [
            /* @__PURE__ */ r(Ve, { value: "AM", children: "AM" }),
            /* @__PURE__ */ r(Ve, { value: "PM", children: "PM" })
          ] })
        ]
      }
    ) });
  }
);
Ot.displayName = "TimePeriodSelect";
const De = i.forwardRef(
  ({
    className: e,
    type: t = "tel",
    value: a,
    id: o,
    name: s,
    date: d = (() => {
      const f = new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return f.setHours(0, 0, 0, 0), f;
    })(),
    onDateChange: l,
    onChange: u,
    onKeyDown: g,
    picker: m,
    period: w,
    onLeftFocus: b,
    onRightFocus: C,
    ...z
  }, v) => {
    const [f, x] = i.useState(!1), [h, N] = i.useState("0");
    i.useEffect(() => {
      if (f) {
        const y = setTimeout(() => {
          x(!1);
        }, 2e3);
        return () => clearTimeout(y);
      }
    }, [f]);
    const P = i.useMemo(() => Mo(d, m), [d, m]), I = (y) => m === "12hours" && f && P.slice(1, 2) === "1" && h === "0" ? `0${y}` : f ? P.slice(1, 2) + y : `0${y}`, M = (y) => {
      if (y.key !== "Tab") {
        if (y.preventDefault(), y.key === "ArrowRight" && C?.(), y.key === "ArrowLeft" && b?.(), ["ArrowUp", "ArrowDown"].includes(y.key)) {
          const V = y.key === "ArrowUp" ? 1 : -1, S = Ao(P, V, m);
          f && x(!1);
          const R = d ? new E(d, "America/Sao_Paulo") : new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          l?.(Ze(R, S, m, w));
        }
        if (y.key >= "0" && y.key <= "9") {
          m === "12hours" && N(y.key);
          const V = I(y.key);
          f && C?.(), x((R) => !R);
          const S = d ? new E(d, "America/Sao_Paulo") : new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
          l?.(Ze(S, V, m, w));
        }
      }
    };
    return /* @__PURE__ */ r(
      rt,
      {
        ref: v,
        id: o || m,
        name: s || m,
        className: n(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          e
        ),
        value: a || P,
        onChange: (y) => {
          y.preventDefault(), u?.(y);
        },
        type: t,
        inputMode: "decimal",
        onKeyDown: (y) => {
          g?.(y), M(y);
        },
        ...z
      }
    );
  }
);
De.displayName = "TimePickerInput";
const Bt = i.forwardRef(
  ({ date: e, onChange: t, hourCycle: a = 24, granularity: o = "second" }, s) => {
    const d = i.useRef(null), l = i.useRef(null), u = i.useRef(null), g = i.useRef(null), [m, w] = i.useState(
      e && e.getHours() >= 12 ? "PM" : "AM"
    );
    return bt(
      s,
      () => ({
        minuteRef: d.current,
        hourRef: l.current,
        secondRef: u.current,
        periodRef: g.current
      }),
      [d, l, u]
    ), /* @__PURE__ */ c("div", { className: "flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ r("label", { htmlFor: "datetime-picker-hour-input", className: "cursor-pointer", children: /* @__PURE__ */ r(ya, { className: "mr-2 h-4 w-4" }) }),
      /* @__PURE__ */ r(
        De,
        {
          picker: a === 24 ? "hours" : "12hours",
          date: e,
          id: "datetime-picker-hour-input",
          onDateChange: t,
          ref: l,
          period: m,
          onRightFocus: () => d?.current?.focus()
        }
      ),
      (o === "minute" || o === "second") && /* @__PURE__ */ c(_e, { children: [
        ":",
        /* @__PURE__ */ r(
          De,
          {
            picker: "minutes",
            date: e,
            onDateChange: t,
            ref: d,
            onLeftFocus: () => l?.current?.focus(),
            onRightFocus: () => u?.current?.focus()
          }
        )
      ] }),
      o === "second" && /* @__PURE__ */ c(_e, { children: [
        ":",
        /* @__PURE__ */ r(
          De,
          {
            picker: "seconds",
            date: e,
            onDateChange: t,
            ref: u,
            onLeftFocus: () => d?.current?.focus(),
            onRightFocus: () => g?.current?.focus()
          }
        )
      ] }),
      a === 12 && /* @__PURE__ */ r("div", { className: "grid gap-1 text-center", children: /* @__PURE__ */ r(
        Ot,
        {
          period: m,
          setPeriod: w,
          date: e,
          onDateChange: (b) => {
            t?.(b), b && b?.getHours() >= 12 ? w("PM") : w("AM");
          },
          ref: g,
          onLeftFocus: () => u?.current?.focus()
        }
      ) })
    ] });
  }
);
Bt.displayName = "TimePicker";
const Wt = i.forwardRef(
  ({
    locale: e = At,
    defaultPopupValue: t = (() => {
      const v = new E(/* @__PURE__ */ new Date(), "America/Sao_Paulo");
      return v.setHours(0, 0, 0, 0), v;
    })(),
    value: a,
    onChange: o,
    hourCycle: s = 24,
    yearRange: d = 50,
    disabled: l = !1,
    displayFormat: u,
    granularity: g = "minute",
    placeholder: m = "dd/mm/aaaa - hh:mm",
    className: w,
    disabledDates: b,
    ...C
  }, z) => {
    const [v, f] = i.useState(a ?? t), x = ke(null), h = ke(null), [N, P] = i.useState(a), [I, M] = i.useState(!1), [y, V] = i.useState(
      a ? me(a, g) : ""
    ), S = ke(!1), R = ke(
      a ? me(a, g) : ""
    ), _ = (p) => {
      if (!p)
        return;
      if (!t) {
        p.setHours(
          v?.getHours() ?? 0,
          v?.getMinutes() ?? 0,
          v?.getSeconds() ?? 0
        ), o?.(p), f(p);
        return;
      }
      const $ = (p.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24), B = Ia(t, {
        days: Math.ceil($)
      });
      B.setHours(
        v?.getHours() ?? 0,
        v?.getMinutes() ?? 0,
        v?.getSeconds() ?? 0
      ), o?.(B), f(B);
    };
    pe(() => {
      if (S.current) {
        S.current = !1;
        return;
      }
      const p = a ? me(a, g) : "";
      a ? (P(a), f(a)) : P(void 0), V(p), R.current = p;
    }, [a, g]);
    const U = (p) => {
      if (!p)
        return;
      S.current = !0;
      const T = me(p, g);
      o?.(p), f(p), P(p), V(T), R.current = T;
    };
    bt(
      z,
      () => ({
        ...x.current,
        value: N
      }),
      [N]
    );
    function W(p) {
      const T = p.target.value;
      if (T.replace(/\D/g, "") === "") {
        V(""), R.current = "", S.current = !0, P(void 0), o?.(void 0);
        return;
      }
      const $ = p.target.selectionStart ?? T.length, B = T.slice(0, $).replace(/\D/g, "").length, re = zo(T, g);
      V(re), requestAnimationFrame(() => {
        if (h.current) {
          let it = 0, qe = re.length;
          for (let Re = 0; Re < re.length; Re++)
            if (/\d/.test(re[Re]) && it++, it === B) {
              qe = Re + 1;
              break;
            }
          h.current.setSelectionRange(qe, qe);
        }
      });
      const Se = pt(re, g);
      Se && (S.current = !0, R.current = re, o?.(Se), P(Se), f(Se));
    }
    function $e() {
      !(pt(y, g) !== null) && y !== "" && V(R.current);
    }
    return /* @__PURE__ */ c(Ne, { open: I, onOpenChange: M, children: [
      /* @__PURE__ */ c(
        "div",
        {
          className: n(
            "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
            l && "cursor-not-allowed opacity-50",
            w
          ),
          children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: h,
                value: y,
                onChange: W,
                onBlur: $e,
                placeholder: m,
                disabled: l,
                className: "min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
              }
            ),
            /* @__PURE__ */ r(Ce, { asChild: !0, disabled: l, children: /* @__PURE__ */ r(
              "button",
              {
                ref: x,
                type: "button",
                disabled: l,
                className: "flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed",
                children: /* @__PURE__ */ r(wa, { className: "h-4 w-4" })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ c(de, { className: "w-auto p-0", children: [
        /* @__PURE__ */ r(
          _t,
          {
            selected: N,
            onSelect: (p) => {
              p && (p.setHours(
                v?.getHours() ?? 0,
                v?.getMinutes() ?? 0,
                v?.getSeconds() ?? 0
              ), U(p));
            },
            onMonthChange: _,
            month: N ?? v,
            locale: e,
            disabled: b,
            className: "w-full",
            timeZone: "America/Sao_Paulo",
            ...C,
            mode: "single"
          }
        ),
        g !== "day" && /* @__PURE__ */ r("div", { className: "border-t border-border p-3", children: /* @__PURE__ */ r(
          Bt,
          {
            onChange: (p) => {
              if (S.current = !0, o?.(p), P(p), p) {
                f(p);
                const T = me(p, g);
                V(T), R.current = T;
              }
            },
            date: v,
            hourCycle: s,
            granularity: g
          }
        ) })
      ] })
    ] });
  }
);
Wt.displayName = "DateTimePicker";
const ks = ({
  name: e,
  label: t,
  ...a
}) => {
  const o = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: o.control,
      name: e,
      render: ({ field: s }) => /* @__PURE__ */ c(K, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(
          Wt,
          {
            value: s.value,
            onChange: s.onChange,
            ...a
          }
        ) }),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
}, Vo = k.Root, Ps = k.Trigger, jo = k.Portal, Ts = k.Close, $t = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Overlay,
  {
    ref: a,
    className: n(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
$t.displayName = k.Overlay.displayName;
const qt = i.forwardRef(({ className: e, onClose: t, ...a }, o) => /* @__PURE__ */ c(jo, { children: [
  /* @__PURE__ */ r($t, { onClick: (s) => s.stopPropagation() }),
  /* @__PURE__ */ c(
    k.Content,
    {
      ref: o,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ r(
          k.Close,
          {
            asChild: !0,
            className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: /* @__PURE__ */ c("button", { onClick: t, className: "absolute top-4 right-4", children: [
              /* @__PURE__ */ r(et, { className: "h-4 w-4" }),
              /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
            ] })
          }
        ),
        a.children
      ]
    }
  )
] }));
qt.displayName = k.Content.displayName;
const Fo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Fo.displayName = "DialogHeader";
const Ho = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Ho.displayName = "DialogFooter";
const Lo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Title,
  {
    ref: a,
    className: n(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Lo.displayName = k.Title.displayName;
const Eo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
Eo.displayName = k.Description.displayName;
const Ds = D.Root, Ms = D.Trigger, As = D.Group, _s = D.Portal, Is = D.Sub, zs = D.RadioGroup, Oo = i.forwardRef(({ className: e, inset: t, children: a, ...o }, s) => /* @__PURE__ */ c(
  D.SubTrigger,
  {
    ref: s,
    className: n(
      "flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      a,
      /* @__PURE__ */ r(Je, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Oo.displayName = D.SubTrigger.displayName;
const Bo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  D.SubContent,
  {
    ref: a,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Bo.displayName = D.SubContent.displayName;
const Wo = i.forwardRef(({ className: e, sideOffset: t = 4, ...a }, o) => /* @__PURE__ */ r(D.Portal, { children: /* @__PURE__ */ r(
  D.Content,
  {
    ref: o,
    sideOffset: t,
    className: n(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...a
  }
) }));
Wo.displayName = D.Content.displayName;
const $o = i.forwardRef(({ className: e, inset: t, ...a }, o) => /* @__PURE__ */ r(
  D.Item,
  {
    ref: o,
    className: n(
      "relative flex cursor-default select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...a
  }
));
$o.displayName = D.Item.displayName;
const qo = i.forwardRef(({ className: e, children: t, checked: a, ...o }, s) => /* @__PURE__ */ c(
  D.CheckboxItem,
  {
    ref: s,
    className: n(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...o,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(D.ItemIndicator, { children: /* @__PURE__ */ r(ye, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
qo.displayName = D.CheckboxItem.displayName;
const Ko = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ c(
  D.RadioItem,
  {
    ref: o,
    className: n(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(D.ItemIndicator, { children: /* @__PURE__ */ r(wt, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Ko.displayName = D.RadioItem.displayName;
const Go = i.forwardRef(({ className: e, inset: t, ...a }, o) => /* @__PURE__ */ r(
  D.Label,
  {
    ref: o,
    className: n(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Go.displayName = D.Label.displayName;
const Xo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  D.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Xo.displayName = D.Separator.displayName;
const Uo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "span",
  {
    className: n("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Uo.displayName = "DropdownMenuShortcut";
const Yo = O(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Be = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  kt.Root,
  {
    ref: a,
    className: n(Yo(), e),
    ...t
  }
));
Be.displayName = kt.Root.displayName;
const Vs = Ta, Kt = i.createContext(
  {}
), ae = ({
  ...e
}) => /* @__PURE__ */ r(Kt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ r(Da, { ...e }) }), We = () => {
  const e = i.useContext(Kt), t = i.useContext(Gt), { getFieldState: a, formState: o } = q(), s = a(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: d } = t;
  return {
    id: d,
    name: e.name,
    formItemId: `${d}-form-item`,
    formDescriptionId: `${d}-form-item-description`,
    formMessageId: `${d}-form-item-message`,
    ...s
  };
}, Gt = i.createContext(
  {}
), K = i.forwardRef(({ className: e, ...t }, a) => {
  const o = i.useId();
  return /* @__PURE__ */ r(Gt.Provider, { value: { id: o }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: a,
      className: n("space-y-1 relative", e),
      ...t
    }
  ) });
});
K.displayName = "FormItem";
const G = i.forwardRef(({ className: e, ...t }, a) => {
  const { error: o, formItemId: s } = We();
  return /* @__PURE__ */ r(
    Be,
    {
      ref: a,
      className: n(o && "text-destructive dark:text-red-400", e),
      htmlFor: s,
      ...t
    }
  );
});
G.displayName = "FormLabel";
const le = i.forwardRef(({ ...e }, t) => {
  const { error: a, formItemId: o, formDescriptionId: s, formMessageId: d } = We();
  return /* @__PURE__ */ r(
    vt,
    {
      ref: t,
      id: o,
      "aria-describedby": a ? `${s} ${d}` : `${s}`,
      "aria-invalid": !!a,
      ...e
    }
  );
});
le.displayName = "FormControl";
const Xt = i.forwardRef(({ className: e, ...t }, a) => {
  const { formDescriptionId: o } = We();
  return /* @__PURE__ */ r(
    "p",
    {
      ref: a,
      id: o,
      className: n("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
Xt.displayName = "FormDescription";
const X = i.forwardRef(({ className: e, children: t, ...a }, o) => {
  const { error: s, formMessageId: d } = We(), l = s ? String(s?.message) : t;
  return l ? /* @__PURE__ */ r(
    "p",
    {
      ref: o,
      id: d,
      className: n(
        "text-[0.8rem] font-normal text-destructive dark:text-red-400",
        e
      ),
      ...a,
      children: l
    }
  ) : null;
});
X.displayName = "FormMessage";
const Qo = O("font-bold tracking-tight", {
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
}), js = xe.forwardRef(
  ({ className: e, variant: t, children: a, ...o }, s) => /* @__PURE__ */ r(
    t || "h1",
    {
      className: n(Qo({ variant: t }), e),
      ref: s,
      ...o,
      children: a
    }
  )
), rt = xe.forwardRef(({ className: e, type: t, ...a }, o) => t === "textarea" ? /* @__PURE__ */ r(
  "textarea",
  {
    rows: 1,
    ref: o,
    className: n(
      "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ...a
  }
) : /* @__PURE__ */ r(
  "input",
  {
    ref: o,
    type: t,
    className: n(
      "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:bg-accent file:px-2 file:h-6.5 file:text-accent-foreground file:rounded-md file:cursor-pointer",
      e
    ),
    ...a
  }
)), Fs = ({
  name: e,
  label: t,
  placeholder: a,
  mask: o,
  ...s
}) => {
  const d = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: d.control,
      name: e,
      render: ({ field: l }) => /* @__PURE__ */ c(K, { className: "flex-1", children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(le, { children: o ? /* @__PURE__ */ r(
          sn,
          {
            mask: o,
            placeholder: a,
            ...s,
            ...l
          }
        ) : /* @__PURE__ */ r(rt, { placeholder: a, ...s, ...l }) }),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
}, Zo = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ c(
  H.Root,
  {
    ref: o,
    className: n(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...a,
    children: [
      t,
      /* @__PURE__ */ r(Ut, {})
    ]
  }
));
Zo.displayName = H.Root.displayName;
const Jo = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  H.List,
  {
    ref: a,
    className: n(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
Jo.displayName = H.List.displayName;
const Hs = H.Item, en = O(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
), tn = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ c(
  H.Trigger,
  {
    ref: o,
    className: n(en(), "group", e),
    ...a,
    children: [
      t,
      " ",
      /* @__PURE__ */ r(
        ne,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
tn.displayName = H.Trigger.displayName;
const an = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  H.Content,
  {
    ref: a,
    className: n(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
an.displayName = H.Content.displayName;
const rn = H.Link, Ut = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r("div", { className: n("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ r(
  H.Viewport,
  {
    className: n(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: a,
    ...t
  }
) }));
Ut.displayName = H.Viewport.displayName;
const on = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  H.Indicator,
  {
    ref: a,
    className: n(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
on.displayName = H.Indicator.displayName;
const nn = xe.forwardRef(({ className: e, title: t, children: a, ...o }, s) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(rn, { asChild: !0, children: /* @__PURE__ */ c(
  "a",
  {
    ref: s,
    className: n(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...o,
    children: [
      /* @__PURE__ */ r("div", { className: "text-sm font-medium leading-none", children: t }),
      /* @__PURE__ */ r("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: a })
    ]
  }
) }) }));
nn.displayName = "ListItem";
function sn({
  value: e,
  mask: t,
  onChange: a,
  ...o
}) {
  const s = t.split("#").length - 1, d = t.split("A").length - 1, l = t.split("*").length - 1, u = s + d + l;
  function g(m) {
    const b = m.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, u);
    a(b);
  }
  return /* @__PURE__ */ r(
    rt,
    {
      value: Mt(e, t),
      onChange: g,
      ...o
    }
  );
}
const dn = (e, t = 300) => {
  const [a, o] = oe(e);
  return pe(() => {
    const s = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), a;
}, gt = O(
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
), ln = i.forwardRef(
  ({
    options: e,
    onValueChange: t,
    variant: a,
    defaultValue: o = [],
    placeholder: s = "Select options",
    animation: d = 0,
    maxCount: l = 3,
    modalPopover: u = !1,
    className: g,
    preventSelectAll: m = !1,
    onSearchChange: w,
    isLoading: b,
    onCreate: C,
    ...z
  }, v) => {
    const [f, x] = i.useState(o), [h, N] = i.useState(!1), [P, I] = i.useState(!1), [M, y] = i.useState(""), V = dn(M, 300);
    pe(() => {
      w && w(V ?? "");
    }, [V]);
    const S = (p) => {
      if (p.key === "Enter")
        N(!0);
      else if (p.key === "Backspace" && !p.currentTarget.value) {
        const T = [...f];
        T.pop(), x(T), t(T);
      }
    }, R = (p) => {
      const T = f.includes(p) ? f.filter(($) => $ !== p) : [...f, p];
      x(T), t(T);
    }, _ = () => {
      x([]), t([]);
    }, U = () => {
      N((p) => !p);
    }, W = () => {
      const p = f.slice(0, l);
      x(p), t(p);
    }, $e = () => {
      if (f.length === e.length)
        _();
      else {
        const p = e.map((T) => T.value);
        x(p), t(p);
      }
    };
    return /* @__PURE__ */ c(
      Ne,
      {
        open: h,
        onOpenChange: N,
        modal: u,
        children: [
          /* @__PURE__ */ r(Ce, { asChild: !0, children: /* @__PURE__ */ r(
            te,
            {
              ref: v,
              ...z,
              onClick: U,
              variant: "outline",
              className: n(
                "flex w-full p-1 py-0 rounded-md border min-h-10 h-auto items-center justify-between hover:bg-input bg-input [&_svg]:pointer-events-auto",
                g
              ),
              children: f.length > 0 ? /* @__PURE__ */ c("div", { className: "flex justify-between items-center w-full", children: [
                /* @__PURE__ */ c("div", { className: "flex flex-wrap items-center", children: [
                  f.slice(0, l).map((p) => {
                    const T = e.find((B) => B.value === p), $ = T?.icon;
                    return /* @__PURE__ */ c(
                      ct,
                      {
                        className: n(
                          P ? "animate-bounce" : "",
                          gt({ variant: a })
                        ),
                        style: { animationDuration: `${d}s` },
                        children: [
                          $ && /* @__PURE__ */ r($, { className: "h-4 w-4 mr-2" }),
                          T?.label,
                          /* @__PURE__ */ r(
                            dt,
                            {
                              className: "ml-2 h-4 w-4 cursor-pointer",
                              onClick: (B) => {
                                B.stopPropagation(), R(p);
                              }
                            }
                          )
                        ]
                      },
                      p
                    );
                  }),
                  f.length > l && /* @__PURE__ */ c(
                    ct,
                    {
                      className: n(
                        "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                        P ? "animate-bounce" : "",
                        gt({ variant: a })
                      ),
                      style: { animationDuration: `${d}s` },
                      children: [
                        `+ ${f.length - l}`,
                        /* @__PURE__ */ r(
                          dt,
                          {
                            className: "ml-2 h-4 w-4 cursor-pointer",
                            onClick: (p) => {
                              p.stopPropagation(), W();
                            }
                          }
                        )
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c("div", { className: "flex items-center justify-between", children: [
                  b && /* @__PURE__ */ r(ge, { className: "animate-spin text-muted-foreground" }),
                  /* @__PURE__ */ r(
                    va,
                    {
                      className: "h-4 mx-2 cursor-pointer text-muted-foreground",
                      onClick: (p) => {
                        p.stopPropagation(), _();
                      }
                    }
                  ),
                  /* @__PURE__ */ r(
                    ta,
                    {
                      orientation: "vertical",
                      className: "flex min-h-6 h-full"
                    }
                  ),
                  /* @__PURE__ */ r(ne, { className: "h-4 mx-2 cursor-pointer text-muted-foreground" })
                ] })
              ] }) : /* @__PURE__ */ c("div", { className: "flex items-center justify-between w-full mx-auto", children: [
                /* @__PURE__ */ r("span", { className: "text-sm text-muted-foreground mx-3", children: s }),
                /* @__PURE__ */ r(ne, { className: "h-4 cursor-pointer text-muted-foreground mx-2" })
              ] })
            }
          ) }),
          /* @__PURE__ */ r(
            de,
            {
              className: "w-auto min-w-[--radix-popover-trigger-width] p-0",
              align: "start",
              onEscapeKeyDown: () => N(!1),
              children: /* @__PURE__ */ c(we, { shouldFilter: !w, children: [
                /* @__PURE__ */ r(
                  He,
                  {
                    placeholder: "Pesquisar...",
                    onKeyDown: S,
                    onValueChange: y
                  }
                ),
                /* @__PURE__ */ c(Le, { children: [
                  !b && /* @__PURE__ */ r(Ee, { children: "Nenhum resultado encontrado." }),
                  /* @__PURE__ */ c(ve, { children: [
                    !b && !e.length && !!M.length && C && /* @__PURE__ */ r(
                      Q,
                      {
                        onSelect: C,
                        className: "cursor-pointer",
                        children: /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ r(Na, { className: "size-4" }),
                          "Criar ",
                          /* @__PURE__ */ r("b", { children: M })
                        ] })
                      },
                      "new"
                    ),
                    b && /* @__PURE__ */ r("div", { className: "py-2 flex justify-center", children: /* @__PURE__ */ r(ge, { className: "text-foreground/50 size-4 animate-spin" }) }),
                    !m && /* @__PURE__ */ c(
                      Q,
                      {
                        onSelect: $e,
                        className: "cursor-pointer",
                        children: [
                          /* @__PURE__ */ r(
                            "div",
                            {
                              className: n(
                                "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                f.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                              ),
                              children: /* @__PURE__ */ r(lt, { className: "h-4 w-4" })
                            }
                          ),
                          /* @__PURE__ */ r("span", { children: "(Selecionar todos)" })
                        ]
                      },
                      "all"
                    ),
                    e.map((p) => {
                      const T = f.includes(p.value);
                      return /* @__PURE__ */ c(
                        Q,
                        {
                          onSelect: () => R(p.value),
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ r(
                              "div",
                              {
                                className: n(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary",
                                  T ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ r(lt, { className: "h-4 w-4" })
                              }
                            ),
                            p.icon && /* @__PURE__ */ r(p.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
                            /* @__PURE__ */ r("span", { children: p.label })
                          ]
                        },
                        p.value
                      );
                    })
                  ] }),
                  /* @__PURE__ */ r(jt, {})
                ] })
              ] })
            }
          ),
          d > 0 && f.length > 0 && /* @__PURE__ */ r(
            Ca,
            {
              className: n(
                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                P ? "" : "text-muted-foreground"
              ),
              onClick: () => I(!P)
            }
          )
        ]
      }
    );
  }
);
ln.displayName = "MultiSelect";
const cn = ({ className: e, ...t }) => /* @__PURE__ */ r(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: n("mx-auto flex w-full justify-center", e),
    ...t
  }
);
cn.displayName = "Pagination";
const un = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "ul",
  {
    ref: a,
    className: n("flex flex-row items-center gap-1", e),
    ...t
  }
));
un.displayName = "PaginationContent";
const mn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r("li", { ref: a, className: n("", e), ...t }));
mn.displayName = "PaginationItem";
const ot = ({
  className: e,
  isActive: t,
  size: a = "icon",
  ...o
}) => /* @__PURE__ */ r(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: n(
      J({
        variant: t ? "outline" : "ghost",
        size: a
      }),
      e
    ),
    ...o
  }
);
ot.displayName = "PaginationLink";
const fn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  ot,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: n("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Sa, { className: "h-4 w-4" })
  }
);
fn.displayName = "PaginationPrevious";
const pn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  ot,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: n("gap-1", e),
    ...t,
    children: /* @__PURE__ */ r(Je, { className: "h-4 w-4" })
  }
);
pn.displayName = "PaginationNext";
const gn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c(
  "span",
  {
    "aria-hidden": !0,
    className: n("flex h-9 w-9 items-center justify-center relative", e),
    ...t,
    children: [
      /* @__PURE__ */ r(yt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
gn.displayName = "PaginationEllipsis";
const hn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  be.Root,
  {
    className: n("grid gap-2", e),
    ...t,
    ref: a
  }
));
hn.displayName = be.Root.displayName;
const bn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  be.Item,
  {
    ref: a,
    className: n(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(be.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ r(wt, { className: "h-3.5 w-3.5 fill-primary" }) })
  }
));
bn.displayName = be.Item.displayName;
const xn = xe.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ c(
  Y.Root,
  {
    ref: o,
    className: n("relative overflow-hidden", e),
    ...a,
    children: [
      /* @__PURE__ */ r(Y.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ r(Yt, {}),
      /* @__PURE__ */ r(Y.Corner, {})
    ]
  }
));
xn.displayName = Y.Root.displayName;
const Yt = xe.forwardRef(({ className: e, orientation: t = "vertical", ...a }, o) => /* @__PURE__ */ r(
  Y.ScrollAreaScrollbar,
  {
    ref: o,
    orientation: t,
    className: n(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r(Y.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-foreground/40" })
  }
));
Yt.displayName = Y.ScrollAreaScrollbar.displayName;
const Qt = A.Root, Ls = A.Group, Zt = A.Value, nt = i.forwardRef(({ className: e, children: t, isLoading: a = !1, ...o }, s) => /* @__PURE__ */ c(
  A.Trigger,
  {
    ref: s,
    className: n(
      "flex h-9 w-full items-center text-left justify-between rounded-md border bg-input shadow-xs px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...o,
    children: [
      t,
      /* @__PURE__ */ c("div", { className: "flex items-center gap-1", children: [
        a && /* @__PURE__ */ r(ge, { className: "animate-spin opacity-50" }),
        /* @__PURE__ */ r(A.Icon, { asChild: !0, children: /* @__PURE__ */ r(ne, { className: "h-4 w-4 opacity-50" }) })
      ] })
    ]
  }
));
nt.displayName = A.Trigger.displayName;
const Jt = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  A.ScrollUpButton,
  {
    ref: a,
    className: n(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(Ra, { className: "h-4 w-4" })
  }
));
Jt.displayName = A.ScrollUpButton.displayName;
const ea = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  A.ScrollDownButton,
  {
    ref: a,
    className: n(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ r(ne, { className: "h-4 w-4" })
  }
));
ea.displayName = A.ScrollDownButton.displayName;
const st = i.forwardRef(({ className: e, children: t, position: a = "popper", ...o }, s) => /* @__PURE__ */ r(A.Portal, { children: /* @__PURE__ */ c(
  A.Content,
  {
    ref: s,
    className: n(
      "relative z-50 max-h-96 min-w-[8rem] max-w-dvw overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: a,
    ...o,
    children: [
      /* @__PURE__ */ r(Jt, {}),
      /* @__PURE__ */ r(
        A.Viewport,
        {
          className: n(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ r(ea, {})
    ]
  }
) }));
st.displayName = A.Content.displayName;
const yn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  A.Label,
  {
    ref: a,
    className: n("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
yn.displayName = A.Label.displayName;
const Ve = i.forwardRef(({ className: e, children: t, ...a }, o) => /* @__PURE__ */ c(
  A.Item,
  {
    ref: o,
    className: n(
      "relative flex w-full cursor-pointer select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(A.ItemIndicator, { children: /* @__PURE__ */ r(ye, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r(A.ItemText, { children: t })
    ]
  }
));
Ve.displayName = A.Item.displayName;
const wn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  A.Separator,
  {
    ref: a,
    className: n("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
wn.displayName = A.Separator.displayName;
const Es = ({
  name: e,
  label: t,
  placeholder: a,
  options: o,
  helpText: s,
  isLoading: d,
  ...l
}) => {
  const u = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: u.control,
      name: e,
      render: ({ field: g }) => /* @__PURE__ */ c(K, { children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ c(
          Qt,
          {
            onValueChange: g.onChange,
            value: g.value,
            defaultValue: g.value,
            ...l,
            children: [
              /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(nt, { isLoading: d, children: /* @__PURE__ */ r(Zt, { placeholder: a }) }) }),
              /* @__PURE__ */ r(st, { children: o.map((m) => /* @__PURE__ */ r(Ve, { value: m.value, children: m.label }, m.value)) })
            ]
          }
        ),
        !!s && /* @__PURE__ */ r(Xt, { children: s }),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
}, ta = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: a = !0, ...o }, s) => /* @__PURE__ */ r(
    Pt.Root,
    {
      ref: s,
      decorative: a,
      orientation: t,
      className: n(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
ta.displayName = Pt.Root.displayName;
const Os = k.Root, Bs = k.Trigger, Ws = k.Close, vn = k.Portal, aa = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Overlay,
  {
    className: n(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: a
  }
));
aa.displayName = k.Overlay.displayName;
const Nn = O(
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
), Cn = i.forwardRef(({ side: e = "right", className: t, children: a, ...o }, s) => /* @__PURE__ */ c(vn, { children: [
  /* @__PURE__ */ r(aa, {}),
  /* @__PURE__ */ c(
    k.Content,
    {
      ref: s,
      className: n(Nn({ side: e }), t),
      ...o,
      children: [
        a,
        /* @__PURE__ */ c(k.Close, { className: "absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ r(et, { className: "h-4 w-4" }),
          /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Cn.displayName = k.Content.displayName;
const Sn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Sn.displayName = "SheetHeader";
const Rn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r(
  "div",
  {
    className: n(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Rn.displayName = "SheetFooter";
const kn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Title,
  {
    ref: a,
    className: n("text-lg font-semibold text-foreground", e),
    ...t
  }
));
kn.displayName = k.Title.displayName;
const Pn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  k.Description,
  {
    ref: a,
    className: n("text-sm text-muted-foreground", e),
    ...t
  }
));
Pn.displayName = k.Description.displayName;
function Tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: n("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Dn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  Ye.Root,
  {
    className: n(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border",
      e
    ),
    ...t,
    ref: a,
    children: /* @__PURE__ */ r(
      Ye.Thumb,
      {
        className: n(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Dn.displayName = Ye.Root.displayName;
const Mn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r("div", { className: "relative w-full overflow-auto border rounded-lg shadow-xs", children: /* @__PURE__ */ r(
  "table",
  {
    ref: a,
    className: n("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Mn.displayName = "Table";
const An = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "thead",
  {
    ref: a,
    className: n("[&_tr]:border-b bg-muted/50", e),
    ...t
  }
));
An.displayName = "TableHeader";
const _n = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "tbody",
  {
    ref: a,
    className: n("[&_tr:last-child]:border-0", e),
    ...t
  }
));
_n.displayName = "TableBody";
const In = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "tfoot",
  {
    ref: a,
    className: n(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 [&>tr>td]:py-2",
      e
    ),
    ...t
  }
));
In.displayName = "TableFooter";
const zn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "tr",
  {
    ref: a,
    className: n(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
zn.displayName = "TableRow";
const Vn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "th",
  {
    ref: a,
    className: n(
      "h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
Vn.displayName = "TableHead";
const jn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "td",
  {
    ref: a,
    className: n(
      "py-1 px-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      e
    ),
    ...t
  }
));
jn.displayName = "TableCell";
const Fn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "caption",
  {
    ref: a,
    className: n("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
Fn.displayName = "TableCaption";
const $s = ee.Root, Hn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ee.List,
  {
    ref: a,
    className: n(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Hn.displayName = ee.List.displayName;
const Ln = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ee.Trigger,
  {
    ref: a,
    className: n(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ln.displayName = ee.Trigger.displayName;
const En = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  ee.Content,
  {
    ref: a,
    className: n(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
En.displayName = ee.Content.displayName;
const ra = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  "textarea",
  {
    className: n(
      "flex min-h-[60px] w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: a,
    ...t
  }
));
ra.displayName = "Textarea";
const On = ({
  name: e,
  label: t,
  placeholder: a,
  ...o
}) => {
  const s = q();
  return /* @__PURE__ */ r(
    ae,
    {
      control: s.control,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ c(K, { children: [
        !!t && /* @__PURE__ */ r(G, { children: t }),
        /* @__PURE__ */ r(le, { children: /* @__PURE__ */ r(ra, { placeholder: a, ...o, ...d }) }),
        /* @__PURE__ */ r(X, {})
      ] })
    }
  );
};
On.displayName = "TextareaForm";
const Bn = L.Provider, Wn = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0"
}, oa = i.forwardRef(({ className: e, position: t = "bottom-right", ...a }, o) => /* @__PURE__ */ r(
  L.Viewport,
  {
    ref: o,
    className: n(
      `fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px] ${Wn[t]}`,
      e
    ),
    ...a
  }
));
oa.displayName = L.Viewport.displayName;
const $n = O(
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
), na = i.forwardRef(({ className: e, variant: t, ...a }, o) => /* @__PURE__ */ r(
  L.Root,
  {
    ref: o,
    className: n($n({ variant: t }), e),
    ...a
  }
));
na.displayName = L.Root.displayName;
const qn = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  L.Action,
  {
    ref: a,
    className: n(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t
  }
));
qn.displayName = L.Action.displayName;
const sa = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  L.Close,
  {
    ref: a,
    className: n(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ r(et, { className: "h-4 w-4" })
  }
));
sa.displayName = L.Close.displayName;
const ia = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  L.Title,
  {
    ref: a,
    className: n("text-sm font-semibold", e),
    ...t
  }
));
ia.displayName = L.Title.displayName;
const da = i.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r(
  L.Description,
  {
    ref: a,
    className: n("text-sm opacity-90", e),
    ...t
  }
));
da.displayName = L.Description.displayName;
const Kn = 5, Gn = 1e4;
let Ge = 0;
function Xn() {
  return Ge = (Ge + 1) % Number.MAX_SAFE_INTEGER, Ge.toString();
}
const Xe = /* @__PURE__ */ new Map(), ht = (e) => {
  if (Xe.has(e))
    return;
  const t = setTimeout(() => {
    Xe.delete(e), fe({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Gn);
  Xe.set(e, t);
}, Un = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Kn)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (a) => a.id === t.toast.id ? { ...a, ...t.toast } : a
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: a } = t;
      return a ? ht(a) : e.toasts.forEach((o) => {
        ht(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === a || a === void 0 ? {
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
        toasts: e.toasts.filter((a) => a.id !== t.toastId)
      };
  }
}, Me = [];
let Ae = { toasts: [] };
function fe(e) {
  Ae = Un(Ae, e), Me.forEach((t) => {
    t(Ae);
  });
}
function Yn({ ...e }) {
  const t = Xn(), a = (s) => fe({
    type: "UPDATE_TOAST",
    toast: { ...s, id: t }
  }), o = () => fe({ type: "DISMISS_TOAST", toastId: t });
  return fe({
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
    update: a
  };
}
function Qn() {
  const [e, t] = i.useState(Ae);
  return i.useEffect(() => (Me.push(t), () => {
    const a = Me.indexOf(t);
    a > -1 && Me.splice(a, 1);
  }), [e]), {
    ...e,
    toast: Yn,
    dismiss: (a) => fe({ type: "DISMISS_TOAST", toastId: a })
  };
}
function qs() {
  const { toasts: e } = Qn();
  return /* @__PURE__ */ c(Bn, { children: [
    e.map(function({ id: t, title: a, description: o, action: s, ...d }) {
      return /* @__PURE__ */ c(na, { ...d, className: "mt-2", children: [
        /* @__PURE__ */ c("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ r(ia, { children: a }),
          o && /* @__PURE__ */ r(da, { children: o })
        ] }),
        s,
        /* @__PURE__ */ r(sa, {})
      ] }, t);
    }),
    /* @__PURE__ */ r(oa, {})
  ] });
}
const la = O(
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
), Zn = i.forwardRef(({ className: e, variant: t, size: a, ...o }, s) => /* @__PURE__ */ r(
  Tt.Root,
  {
    ref: s,
    className: n(la({ variant: t, size: a, className: e })),
    ...o
  }
));
Zn.displayName = Tt.Root.displayName;
const ca = i.createContext({
  size: "default",
  variant: "default"
}), Jn = i.forwardRef(({ className: e, variant: t, size: a, children: o, ...s }, d) => /* @__PURE__ */ r(
  je.Root,
  {
    ref: d,
    className: n("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ r(ca.Provider, { value: { variant: t, size: a }, children: o })
  }
));
Jn.displayName = je.Root.displayName;
const es = i.forwardRef(({ className: e, children: t, variant: a, size: o, ...s }, d) => {
  const l = i.useContext(ca);
  return /* @__PURE__ */ r(
    je.Item,
    {
      ref: d,
      className: n(
        la({
          variant: l.variant || a,
          size: l.size || o
        }),
        e
      ),
      ...s,
      children: t
    }
  );
});
es.displayName = je.Item.displayName;
const Ks = se.Provider, Gs = se.Root, Xs = se.Trigger, ts = i.forwardRef(({ className: e, sideOffset: t = 4, ...a }, o) => /* @__PURE__ */ r(se.Portal, { children: /* @__PURE__ */ r(
  se.Content,
  {
    ref: o,
    sideOffset: t,
    className: n(
      "z-50 overflow-hidden rounded-md bg-popover-foreground px-3 py-1.5 text-xs text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...a
  }
) }));
ts.displayName = se.Content.displayName;
export {
  gs as Accordion,
  ja as AccordionContent,
  za as AccordionItem,
  Va as AccordionTrigger,
  Ha as Alert,
  Ea as AlertDescription,
  hs as AlertDialog,
  Ga as AlertDialogAction,
  Xa as AlertDialogCancel,
  Ba as AlertDialogContent,
  Ka as AlertDialogDescription,
  $a as AlertDialogFooter,
  Wa as AlertDialogHeader,
  Dt as AlertDialogOverlay,
  Oa as AlertDialogPortal,
  qa as AlertDialogTitle,
  bs as AlertDialogTrigger,
  La as AlertTitle,
  Ua as AsyncSelect,
  xs as AsyncSelectForm,
  Qa as Avatar,
  Ja as AvatarFallback,
  Za as AvatarImage,
  ct as Badge,
  tr as Breadcrumb,
  ir as BreadcrumbEllipsis,
  rr as BreadcrumbItem,
  or as BreadcrumbLink,
  ar as BreadcrumbList,
  nr as BreadcrumbPage,
  sr as BreadcrumbSeparator,
  te as Button,
  _t as Calendar,
  Qr as CalendarDayButton,
  Zr as Card,
  ao as CardContent,
  to as CardDescription,
  ro as CardFooter,
  Jr as CardHeader,
  eo as CardTitle,
  oo as Carousel,
  no as CarouselContent,
  so as CarouselItem,
  lo as CarouselNext,
  io as CarouselPrevious,
  uo as ChartContainer,
  Ns as ChartLegend,
  po as ChartLegendContent,
  mo as ChartStyle,
  vs as ChartTooltip,
  fo as ChartTooltipContent,
  go as Checkbox,
  ho as Combobox,
  Cs as ComboboxForm,
  we as Command,
  Ss as CommandDialog,
  Ee as CommandEmpty,
  ve as CommandGroup,
  He as CommandInput,
  Q as CommandItem,
  Le as CommandList,
  jt as CommandSeparator,
  bo as CommandShortcut,
  wo as DatePicker,
  Rs as DatePickerForm,
  Wt as DateTimePicker,
  ks as DateTimePickerForm,
  Vo as Dialog,
  Ts as DialogClose,
  qt as DialogContent,
  Eo as DialogDescription,
  Ho as DialogFooter,
  Fo as DialogHeader,
  $t as DialogOverlay,
  jo as DialogPortal,
  Lo as DialogTitle,
  Ps as DialogTrigger,
  Ds as DropdownMenu,
  qo as DropdownMenuCheckboxItem,
  Wo as DropdownMenuContent,
  As as DropdownMenuGroup,
  $o as DropdownMenuItem,
  Go as DropdownMenuLabel,
  _s as DropdownMenuPortal,
  zs as DropdownMenuRadioGroup,
  Ko as DropdownMenuRadioItem,
  Xo as DropdownMenuSeparator,
  Uo as DropdownMenuShortcut,
  Is as DropdownMenuSub,
  Bo as DropdownMenuSubContent,
  Oo as DropdownMenuSubTrigger,
  Ms as DropdownMenuTrigger,
  Vs as Form,
  le as FormControl,
  Xt as FormDescription,
  ae as FormField,
  K as FormItem,
  G as FormLabel,
  X as FormMessage,
  js as Heading,
  rt as Input,
  Fs as InputForm,
  Be as Label,
  nn as ListItem,
  sn as MaskedInput,
  ln as MultiSelect,
  Zo as NavigationMenu,
  an as NavigationMenuContent,
  on as NavigationMenuIndicator,
  Hs as NavigationMenuItem,
  rn as NavigationMenuLink,
  Jo as NavigationMenuList,
  tn as NavigationMenuTrigger,
  Ut as NavigationMenuViewport,
  cn as Pagination,
  un as PaginationContent,
  gn as PaginationEllipsis,
  mn as PaginationItem,
  ot as PaginationLink,
  pn as PaginationNext,
  fn as PaginationPrevious,
  Ne as Popover,
  de as PopoverContent,
  Ce as PopoverTrigger,
  hn as RadioGroup,
  bn as RadioGroupItem,
  xn as ScrollArea,
  Yt as ScrollBar,
  Qt as Select,
  st as SelectContent,
  Es as SelectForm,
  Ls as SelectGroup,
  Ve as SelectItem,
  yn as SelectLabel,
  ea as SelectScrollDownButton,
  Jt as SelectScrollUpButton,
  wn as SelectSeparator,
  nt as SelectTrigger,
  Zt as SelectValue,
  ta as Separator,
  Os as Sheet,
  Ws as SheetClose,
  Cn as SheetContent,
  Pn as SheetDescription,
  Rn as SheetFooter,
  Sn as SheetHeader,
  aa as SheetOverlay,
  vn as SheetPortal,
  kn as SheetTitle,
  Bs as SheetTrigger,
  Tn as Skeleton,
  Dn as Switch,
  Mn as Table,
  _n as TableBody,
  Fn as TableCaption,
  jn as TableCell,
  In as TableFooter,
  Vn as TableHead,
  An as TableHeader,
  zn as TableRow,
  $s as Tabs,
  En as TabsContent,
  Hn as TabsList,
  Ln as TabsTrigger,
  ra as Textarea,
  On as TextareaForm,
  Bt as TimePicker,
  De as TimePickerInput,
  na as Toast,
  qn as ToastAction,
  sa as ToastClose,
  da as ToastDescription,
  Bn as ToastProvider,
  ia as ToastTitle,
  oa as ToastViewport,
  qs as Toaster,
  Zn as Toggle,
  Jn as ToggleGroup,
  es as ToggleGroupItem,
  Gs as Tooltip,
  ts as TooltipContent,
  Ks as TooltipProvider,
  Xs as TooltipTrigger,
  er as badgeVariants,
  ws as brazillianStates,
  J as buttonVariants,
  n as cn,
  ys as mask,
  en as navigationMenuTriggerStyle,
  Un as reducer,
  Yn as toast,
  la as toggleVariants,
  We as useFormField,
  Qn as useToast
};
