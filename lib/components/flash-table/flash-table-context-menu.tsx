import type { Table } from "@tanstack/react-table";
import {
  AlignJustify,
  Eye,
  Lock,
  Pin,
  RotateCcw,
  Rows2,
  Rows3,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/utils";
import { Checkbox } from "../checkbox/checkbox.component";
import type {
  FlashTableColumnMeta,
  FlashTableDensity,
  FlashTableLabels,
} from "./flash-table.types";
import {
  DEFAULT_FLASH_TABLE_LABELS,
  getColumnLabel,
  isActionsColumnDef,
  isSystemLeftColumnId,
} from "./flash-table.utils";

export interface ContextMenuPosition {
  x: number;
  y: number;
}

export interface FlashTableContextMenuProps<TData> {
  position: ContextMenuPosition | null;
  onClose: () => void;
  table: Table<TData>;
  density: FlashTableDensity;
  onDensityChange: (density: FlashTableDensity) => void;
  showDensityToggle?: boolean;
  pinActionsColumnRight: boolean;
  pinLastColumnRight: boolean;
  enableColumnPinning: boolean;
  enableColumnVisibility: boolean;
  isCustomized: boolean;
  onReset: () => void;
  labels?: FlashTableLabels;
}

export function FlashTableContextMenu<TData>({
  position,
  onClose,
  table,
  density,
  onDensityChange,
  showDensityToggle = true,
  pinActionsColumnRight,
  pinLastColumnRight,
  enableColumnPinning,
  enableColumnVisibility,
  isCustomized,
  onReset,
  labels = DEFAULT_FLASH_TABLE_LABELS,
}: FlashTableContextMenuProps<TData>) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!position) return;

    const handleClose = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key !== "Escape") return;
      if (
        e instanceof MouseEvent &&
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      onClose();
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, [position, onClose]);

  if (!position) return null;

  const allLeafColumns = table.getAllLeafColumns();
  const manageableColumns = allLeafColumns.filter(
    (col) => !isSystemLeftColumnId(col.id)
  );
  const hiddenCount = manageableColumns.filter(
    (col) => !col.getIsVisible()
  ).length;

  const safeLeft =
    typeof window !== "undefined"
      ? Math.min(position.x, Math.max(16, window.innerWidth - 272))
      : position.x;
  const safeTop =
    typeof window !== "undefined"
      ? Math.min(position.y, Math.max(16, window.innerHeight - 380))
      : position.y;

  return (
    <div
      ref={menuRef}
      className="fixed z-50 bg-popover border border-border rounded-lg shadow-xl w-68 overflow-hidden text-xs text-popover-foreground animate-in fade-in-0 zoom-in-95"
      style={{ top: safeTop, left: safeLeft }}
    >
      {/* Header */}
      <div className="px-3 py-2 bg-muted/40 border-b flex items-center justify-between">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          {labels.customizeColumnsTitle}
        </span>
        <div className="flex items-center gap-1.5">
          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => table.toggleAllColumnsVisible(true)}
              className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline cursor-pointer"
              title={labels.showAllColumns}
            >
              <Eye className="size-3" />
              {labels.showAllColumns}
            </button>
          )}
          {isCustomized && (
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground cursor-pointer"
              title={labels.resetToDefault}
            >
              <RotateCcw className="size-3" />
              {labels.resetToDefault}
            </button>
          )}
        </div>
      </div>

      {/* Density Quick Selector */}
      {showDensityToggle && (
        <div className="px-3 py-1.5 border-b flex items-center justify-between bg-muted/15">
          <span className="text-[11px] text-muted-foreground">
            {labels.densityLabel}
          </span>
          <div className="inline-flex items-center gap-1 rounded-xs border bg-background p-0.5">
            <button
              type="button"
              onClick={() => onDensityChange("ultra-compact")}
              className={cn(
                "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                density === "ultra-compact"
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={labels.densityUltraCompact}
            >
              <AlignJustify className="size-2.5" />
              Ultra
            </button>
            <button
              type="button"
              onClick={() => onDensityChange("compact")}
              className={cn(
                "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                density === "compact"
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={labels.densityCompact}
            >
              <Rows3 className="size-2.5" />
              Comp.
            </button>
            <button
              type="button"
              onClick={() => onDensityChange("comfortable")}
              className={cn(
                "px-1.5 py-0.5 rounded-xs text-[10px] inline-flex items-center gap-1 transition-colors cursor-pointer",
                density === "comfortable"
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={labels.densityComfortable}
            >
              <Rows2 className="size-2.5" />
              Normal
            </button>
          </div>
        </div>
      )}

      {/* Column List */}
      <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5">
        {manageableColumns.map((column, idx) => {
          const label = getColumnLabel(column);
          const meta = column.columnDef.meta as
            | FlashTableColumnMeta
            | undefined;
          const isLast = idx === allLeafColumns.length - 1;
          const isActionsCol = isActionsColumnDef(
            column.id,
            column.columnDef,
            isLast,
            pinActionsColumnRight,
            pinLastColumnRight
          );
          const isPinned = column.getIsPinned();
          const isPinnedLeft = isPinned === "left";
          const canHide =
            enableColumnVisibility && !isActionsCol && column.getCanHide();
          const canPin =
            enableColumnPinning &&
            !isActionsCol &&
            column.getCanPin() &&
            meta?.enablePinning !== false;

          return (
            <div
              key={column.id}
              className="flex items-center justify-between gap-2 px-2 py-1 rounded-xs hover:bg-muted/70"
            >
              <label className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer">
                <Checkbox
                  checked={column.getIsVisible()}
                  disabled={!canHide}
                  onCheckedChange={(checked) =>
                    column.toggleVisibility(!!checked)
                  }
                />
                <span className="truncate text-xs" title={label}>
                  {label}
                </span>
              </label>

              {isActionsCol ? (
                <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Lock className="size-2.5" />
                  {labels.pinnedRightBadge}
                </span>
              ) : canPin ? (
                <button
                  type="button"
                  onClick={() => column.pin(isPinnedLeft ? false : "left")}
                  title={isPinnedLeft ? labels.unpin : labels.pinLeft}
                  aria-label={isPinnedLeft ? labels.unpin : labels.pinLeft}
                  className={cn(
                    "p-1 rounded-xs transition-colors cursor-pointer",
                    isPinnedLeft
                      ? "text-primary bg-primary/15 hover:bg-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Pin
                    className={cn(
                      "size-3.5 transition-transform",
                      isPinnedLeft && "fill-current -rotate-45"
                    )}
                  />
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
