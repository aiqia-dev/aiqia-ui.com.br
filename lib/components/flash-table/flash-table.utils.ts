import type {
  Column,
  ColumnDef,
  ColumnOrderState,
  ColumnPinningState,
} from "@tanstack/react-table";
import { isValidElement, type ReactNode } from "react";
import type {
  FlashTableColumnMeta,
  FlashTableLabels,
} from "./flash-table.types";

export const DEFAULT_FLASH_TABLE_LABELS: FlashTableLabels = {
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
  selectedItemsCount: (count: number) =>
    `${count} ${count === 1 ? "item selecionado" : "itens selecionados"}`,
  clearSelection: "Limpar seleção",
  selectAllRows: "Selecionar todas as linhas",
  selectRow: (rowId: string) => `Selecionar linha ${rowId}`,
  expandRow: "Expandir linha",
  collapseRow: "Recolher linha",
  scrollLeft: "Rolar colunas para a esquerda",
  scrollRight: "Rolar colunas para a direita",
  resetColumnWidth: "Restaurar largura",
};

const COMMON_COLUMN_LABELS: Record<string, string> = {
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
  updatedAt: "Atualizado em",
};

export function resolveStorageScope(explicitScope?: string): string {
  if (explicitScope && explicitScope.trim()) {
    return explicitScope.trim();
  }
  if (typeof window === "undefined") {
    return "default-user";
  }
  try {
    const sessionRaw =
      window.localStorage.getItem("session") ||
      window.localStorage.getItem("auth-storage") ||
      window.sessionStorage.getItem("session");
    if (sessionRaw) {
      const parsed = JSON.parse(sessionRaw);
      const userId =
        parsed?.user?.uuid ||
        parsed?.payload?.user?.uuid ||
        parsed?.state?.user?.uuid ||
        parsed?.user?.id ||
        parsed?.state?.user?.id;
      if (userId) return String(userId);
    }
  } catch {
    // Ignore storage read/parse errors
  }
  return "default-user";
}

export function extractColumnId<TData, TValue>(
  col: ColumnDef<TData, TValue>,
  index: number
): string {
  if (col.id) return col.id;
  if ("accessorKey" in col && typeof col.accessorKey === "string") {
    return col.accessorKey;
  }
  return `col_${index}`;
}

export function isSelectionColumnId(columnId: string): boolean {
  const normalized = columnId.trim().toLowerCase();
  return (
    normalized === "select" ||
    normalized === "selection" ||
    normalized === "__select__"
  );
}

export function isExpansionColumnId(columnId: string): boolean {
  const normalized = columnId.trim().toLowerCase();
  return (
    normalized === "expand" ||
    normalized === "expander" ||
    normalized === "__expand__"
  );
}

export function isSystemLeftColumnId(columnId: string): boolean {
  return isSelectionColumnId(columnId) || isExpansionColumnId(columnId);
}

export function isActionsColumnId(columnId: string): boolean {
  const normalized = columnId.trim().toLowerCase();
  return (
    normalized === "actions" ||
    normalized === "action" ||
    normalized === "acoes" ||
    normalized === "ações"
  );
}

export function isActionsColumnDef<TData, TValue>(
  columnId: string,
  columnDef: ColumnDef<TData, TValue>,
  isLastColumn: boolean,
  pinActionsColumnRight: boolean,
  pinLastColumnRight: boolean
): boolean {
  const meta = columnDef.meta as FlashTableColumnMeta | undefined;
  if (meta?.isActions) return true;
  if (pinActionsColumnRight && isActionsColumnId(columnId)) return true;
  if (pinLastColumnRight && isLastColumn) return true;
  return false;
}

/**
 * Parses numeric pixel width from a number or CSS string ('80px', '5rem', '80')
 */
export function parseColumnWidth(
  value: number | string | undefined
): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "number") {
    return Number.isFinite(value) && value > 0 ? value : undefined;
  }
  const str = String(value).trim();
  if (!str) return undefined;

  // Direct number string "80"
  if (/^\d+(?:\.\d+)?$/.test(str)) {
    const num = parseFloat(str);
    return Number.isFinite(num) && num > 0 ? num : undefined;
  }

  // Pixel string "80px"
  const pxMatch = str.match(/^(\d+(?:\.\d+)?)px$/);
  if (pxMatch) {
    return parseFloat(pxMatch[1]);
  }

  // Rem string "5rem" (assuming standard 16px root font size)
  const remMatch = str.match(/^(\d+(?:\.\d+)?)rem$/);
  if (remMatch) {
    return parseFloat(remMatch[1]) * 16;
  }

  return undefined;
}

/**
 * Extracts numeric width from Tailwind className (e.g. 'w-[80px]', '!w-[80px]', 'w-20', '!w-16')
 */
export function extractWidthFromClassName(
  className?: string,
  prefix: "w" | "min-w" | "max-w" = "w"
): number | undefined {
  if (!className) return undefined;

  // Check for arbitrary px class: w-[80px] or !w-[80px]
  const arbitraryPxRegex = new RegExp(
    `(?:^|\\s)!?${prefix}-\\[(\\d+(?:\\.\\d+)?)px\\]`
  );
  const pxMatch = className.match(arbitraryPxRegex);
  if (pxMatch) {
    return parseFloat(pxMatch[1]);
  }

  // Check for arbitrary rem class: w-[5rem] or !w-[5rem]
  const arbitraryRemRegex = new RegExp(
    `(?:^|\\s)!?${prefix}-\\[(\\d+(?:\\.\\d+)?)rem\\]`
  );
  const remMatch = className.match(arbitraryRemRegex);
  if (remMatch) {
    return parseFloat(remMatch[1]) * 16;
  }

  // Check for standard Tailwind numeric scale: w-16, w-20, w-24, etc.
  const scaleRegex = new RegExp(
    `(?:^|\\s)!?${prefix}-(\\d+(?:\\.\\d+)?)(?:\\s|$)`
  );
  const scaleMatch = className.match(scaleRegex);
  if (scaleMatch) {
    const scale = parseFloat(scaleMatch[1]);
    return scale * 4;
  }

  return undefined;
}

function extractTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node).trim();
  }
  if (Array.isArray(node)) {
    return node
      .map(extractTextFromReactNode)
      .filter(Boolean)
      .join(" ")
      .trim();
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextFromReactNode(node.props.children);
  }
  return "";
}

export function getColumnLabel<TData, TValue = unknown>(
  column: Column<TData, TValue>
): string {
  const meta = column.columnDef.meta as FlashTableColumnMeta | undefined;
  if (meta?.label) {
    return meta.label;
  }

  const header = column.columnDef.header;
  if (typeof header === "string" && header.trim()) {
    return header.trim();
  }

  if (typeof header === "function") {
    try {
      const rendered = header({
        column,
        header: {
          id: column.id,
          index: 0,
          depth: 1,
          column,
          isPlaceholder: false,
          colSpan: 1,
          rowSpan: 1,
          subHeaders: [],
          getContext: () => ({
            column,
            header: null as never,
            table: null as never,
          }),
          getLeafHeaders: () => [],
          getResizeHandler: () => () => {},
          getSize: () => column.getSize(),
          getStart: () => 0,
          headerGroup: null as never,
        },
        table: null as never,
      });
      const extracted = extractTextFromReactNode(rendered);
      if (extracted) {
        return extracted;
      }
    } catch {
      // Fallback
    }
  }

  if (COMMON_COLUMN_LABELS[column.id]) {
    return COMMON_COLUMN_LABELS[column.id];
  }

  return column.id
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/^\w/, (char) => char.toUpperCase());
}

export function buildDefaultPinning<TData, TValue>(
  columns: ColumnDef<TData, TValue>[],
  options: {
    pinActionsColumnRight: boolean;
    pinLastColumnRight: boolean;
    defaultPinnedLeft?: string[];
    defaultPinnedRight?: string[];
  }
): ColumnPinningState {
  const left = new Set<string>();
  const right = new Set<string>();

  for (const colId of options.defaultPinnedLeft ?? []) {
    left.add(colId);
  }
  for (const colId of options.defaultPinnedRight ?? []) {
    right.add(colId);
  }

  columns.forEach((col, index) => {
    const colId = extractColumnId(col, index);
    const meta = col.meta as FlashTableColumnMeta | undefined;
    const isLast = index === columns.length - 1;

    if (isSystemLeftColumnId(colId)) {
      left.add(colId);
      return;
    }

    if (meta?.defaultPinned === "left") {
      left.add(colId);
      return;
    }

    if (
      meta?.defaultPinned === "right" ||
      isActionsColumnDef(
        colId,
        col,
        isLast,
        options.pinActionsColumnRight,
        options.pinLastColumnRight
      )
    ) {
      right.add(colId);
    }
  });

  // Ensure select and expand are always first in left pinning
  const orderedLeft = Array.from(left).sort((a, b) => {
    const priority = (id: string) => {
      if (isSelectionColumnId(id)) return 0;
      if (isExpansionColumnId(id)) return 1;
      return 2;
    };
    return priority(a) - priority(b);
  });

  return {
    left: orderedLeft,
    right: Array.from(right),
  };
}

export function reconcileColumnOrder(
  savedOrder: ColumnOrderState,
  defaultOrder: ColumnOrderState
): ColumnOrderState {
  if (!savedOrder || savedOrder.length === 0) {
    return defaultOrder;
  }

  const validSet = new Set(defaultOrder);
  const kept = savedOrder.filter((id) => validSet.has(id));
  const keptSet = new Set(kept);

  // Insert any newly added columns in their relative positions
  const result = [...kept];
  defaultOrder.forEach((id, idx) => {
    if (!keptSet.has(id)) {
      if (isSelectionColumnId(id)) {
        result.unshift(id);
      } else if (isExpansionColumnId(id)) {
        const selectIdx = result.findIndex(isSelectionColumnId);
        result.splice(selectIdx + 1, 0, id);
      } else if (isActionsColumnId(id) || idx === defaultOrder.length - 1) {
        result.push(id);
      } else {
        result.splice(Math.min(idx, result.length), 0, id);
      }
    }
  });

  return result;
}

export function isSameArray(a: string[] = [], b: string[] = []): boolean {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}
