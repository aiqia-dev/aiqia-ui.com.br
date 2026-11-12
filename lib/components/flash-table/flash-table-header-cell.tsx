import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender, type Header } from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  GripVertical,
  Info,
  Pin,
} from "lucide-react";
import { type CSSProperties, useRef } from "react";
import { cn } from "../../utils/utils";
import { TableHead } from "../table/table.component";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/tooltip.component";
import type {
  FlashTableColumnDef,
  FlashTableColumnMeta,
  FlashTableDensity,
  FlashTableLabels,
} from "./flash-table.types";
import { getColumnLabel } from "./flash-table.utils";

export interface FlashTableHeaderCellProps<TData, TValue> {
  header: Header<TData, TValue>;
  density: FlashTableDensity;
  enableColumnOrdering: boolean;
  enableColumnPinning: boolean;
  enableColumnResizing: boolean;
  isActionsCol: boolean;
  isSystemLeftCol: boolean;
  pinnedPosition: "left" | "right" | false;
  stickyOffset?: number;
  isLastLeftPinned: boolean;
  isFirstRightPinned: boolean;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  labels: FlashTableLabels;
  className?: string;
  onRegisterHeaderElement: (
    columnId: string,
    element: HTMLTableCellElement | null
  ) => void;
}

export function FlashTableHeaderCell<TData, TValue>({
  header,
  density,
  enableColumnOrdering,
  enableColumnPinning,
  enableColumnResizing,
  isActionsCol,
  isSystemLeftCol,
  pinnedPosition,
  stickyOffset,
  isLastLeftPinned,
  isFirstRightPinned,
  canScrollLeft,
  canScrollRight,
  labels,
  className,
  onRegisterHeaderElement,
}: FlashTableHeaderCellProps<TData, TValue>) {
  const { column } = header;
  const meta = column.columnDef.meta as FlashTableColumnMeta | undefined;

  const canReorder =
    enableColumnOrdering &&
    !isActionsCol &&
    !isSystemLeftCol &&
    meta?.enableReordering !== false;

  const canPin =
    enableColumnPinning &&
    !isActionsCol &&
    !isSystemLeftCol &&
    column.getCanPin() &&
    meta?.enablePinning !== false;

  const canSort = column.getCanSort();
  const sorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();
  const isMultiSorted =
    header.getContext().table.getState().sorting.length > 1 && sortIndex >= 0;

  const isPinnedLeft = pinnedPosition === "left";
  const isPinnedRight = pinnedPosition === "right";
  const isPinned = isPinnedLeft || isPinnedRight;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    disabled: !canReorder,
    animateLayoutChanges: () => false,
  });

  const setRefs = (el: HTMLTableCellElement | null) => {
    setNodeRef(el);
    onRegisterHeaderElement(column.id, el);
  };

  const hasActiveTransform =
    transform !== null && (transform.x !== 0 || transform.y !== 0);

  const resolvedStickyOffset = stickyOffset ?? 0;
  const colDef = column.columnDef as FlashTableColumnDef<TData, TValue>;

  const resolvedWidth =
    (meta?.width as number | string | undefined) ?? header.getSize();
  const resolvedMinWidth =
    colDef.minSize ??
    (meta?.minWidth as number | string | undefined) ??
    (isPinned ? header.getSize() : undefined);
  const resolvedMaxWidth =
    colDef.maxSize && colDef.maxSize < Number.MAX_SAFE_INTEGER
      ? colDef.maxSize
      : (meta?.maxWidth as number | string | undefined) ??
        (isActionsCol ? header.getSize() : undefined);

  const isFixedCol =
    isActionsCol ||
    isSystemLeftCol ||
    Boolean(meta?.isActions) ||
    (colDef.enableResizing === false &&
      (colDef.size !== undefined ||
        colDef.width !== undefined ||
        meta?.width !== undefined));

  const formattedColSize =
    typeof resolvedWidth === "number" ? `${resolvedWidth}px` : resolvedWidth;

  const style: CSSProperties & Record<string, string | number | undefined> = {
    width: resolvedWidth,
    minWidth: resolvedMinWidth,
    maxWidth: resolvedMaxWidth,
    ...(isFixedCol ? { "--flash-col-size": formattedColSize } : {}),
    ...(hasActiveTransform
      ? {
          transform: CSS.Translate.toString(transform),
          transition,
        }
      : {}),
    ...(isPinned
      ? {
          backgroundColor: "var(--muted)",
        }
      : {}),
    ...(isPinnedLeft
      ? { position: "sticky", left: `${resolvedStickyOffset}px` }
      : {}),
    ...(isPinnedRight
      ? { position: "sticky", right: `${resolvedStickyOffset}px` }
      : {}),
  };

  const suppressSortClickRef = useRef(false);
  const resizeHandler = header.getResizeHandler();

  const handleResizeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    suppressSortClickRef.current = true;
    const clearSuppress = () => {
      window.setTimeout(() => {
        suppressSortClickRef.current = false;
      }, 0);
      window.removeEventListener("mouseup", clearSuppress);
    };
    window.addEventListener("mouseup", clearSuppress);
    resizeHandler(e);
  };

  const handleResizeTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    suppressSortClickRef.current = true;
    const clearSuppress = () => {
      window.setTimeout(() => {
        suppressSortClickRef.current = false;
      }, 0);
      window.removeEventListener("touchend", clearSuppress);
      window.removeEventListener("touchcancel", clearSuppress);
    };
    window.addEventListener("touchend", clearSuppress);
    window.addEventListener("touchcancel", clearSuppress);
    resizeHandler(e);
  };

  const handleHeaderClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    if (suppressSortClickRef.current || column.getIsResizing()) {
      return;
    }
    if (canSort) {
      column.getToggleSortingHandler()?.(e);
    }
  };

  const handleTogglePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPinned) {
      column.pin(false);
    } else {
      column.pin("left");
    }
  };

  const label = getColumnLabel(column);

  return (
    <TableHead
      ref={setRefs}
      style={style}
      {...(canReorder ? attributes : {})}
      {...(canReorder ? listeners : {})}
      onClick={canSort ? handleHeaderClick : undefined}
      className={cn(
        isFixedCol && "flash-table-fixed-cell",
        "group/th select-none whitespace-nowrap align-middle border-b border-border transition-colors font-medium text-muted-foreground",
        isSystemLeftCol && "[&:has([role=checkbox])]:pr-2",
        isPinned ? "sticky" : "relative",
        // Density sizing & typography - matched to aiqia-ui TableHead
        density === "ultra-compact" && "h-7 px-2 text-xs",
        density === "compact" && "h-8.5 px-3 text-xs",
        density === "comfortable" && "h-10 px-3 text-sm",
        // Background: 100% opaque bg-muted when pinned so scrolled headers never bleed through
        isPinned ? "bg-muted z-30" : "bg-muted hover:bg-accent z-10",
        // Interactive cursor
        canSort && "cursor-pointer hover:text-foreground",
        canReorder && !canSort && "cursor-grab active:cursor-grabbing",
        // Dragging visual elevation (100% opaque)
        isDragging &&
          "z-40 bg-accent shadow-md ring-1 ring-primary/40 cursor-grabbing",
        // Sticky boundary dividers & scroll shadows
        isLastLeftPinned && "border-r border-border",
        isLastLeftPinned &&
          canScrollLeft &&
          "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        isFirstRightPinned && "border-l border-border",
        isFirstRightPinned &&
          canScrollRight &&
          "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.1)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.4)]",
        className,
        meta?.headerClassName
      )}
    >
      {header.isPlaceholder ? null : (
        <div
          className={cn(
            "flex items-center gap-1.5 w-full min-w-0 overflow-hidden",
            (isActionsCol || meta?.align === "right") && "justify-end",
            (isSystemLeftCol || meta?.align === "center") && "justify-center"
          )}
        >
          {/* Drag Handle Icon */}
          {canReorder && (
            <span
              className="inline-flex items-center justify-center text-muted-foreground/30 group-hover/th:text-muted-foreground cursor-grab active:cursor-grabbing shrink-0 -ml-1 transition-colors"
              title={labels.columnManagerFooterHint}
            >
              <GripVertical className="size-3" />
            </span>
          )}

          {/* Header Content */}
          <div
            className={cn(
              "flex items-center gap-1 min-w-0",
              !isSystemLeftCol && "flex-1",
              (isActionsCol || meta?.align === "right") && "justify-end",
              (isSystemLeftCol || meta?.align === "center") && "justify-center"
            )}
          >
            <span
              className="truncate"
              title={!isSystemLeftCol ? label : undefined}
            >
              {flexRender(column.columnDef.header, header.getContext())}
            </span>

            {/* Optional Header Info Tooltip */}
            {meta?.headerTooltip && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-muted-foreground/60 hover:text-foreground cursor-help shrink-0"
                  >
                    <Info className="size-3" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs font-normal normal-case tracking-normal">
                  {meta.headerTooltip}
                </TooltipContent>
              </Tooltip>
            )}

            {/* Sort Icon */}
            {canSort && (
              <span className="inline-flex items-center gap-0.5 shrink-0 ml-0.5">
                {sorted === "asc" ? (
                  <ArrowUp className="size-3.5 text-foreground" />
                ) : sorted === "desc" ? (
                  <ArrowDown className="size-3.5 text-foreground" />
                ) : (
                  <ArrowUpDown className="size-3 text-muted-foreground/40 group-hover/th:text-muted-foreground transition-colors" />
                )}
                {isMultiSorted && (
                  <span className="text-[9px] font-bold text-foreground leading-none">
                    {sortIndex + 1}
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Pin Button */}
          {canPin && (
            <button
              type="button"
              onClick={handleTogglePin}
              onPointerDown={(e) => e.stopPropagation()}
              title={isPinned ? labels.unpin : labels.pinLeft}
              aria-label={isPinned ? labels.unpin : labels.pinLeft}
              className={cn(
                "inline-flex items-center justify-center rounded-xs p-0.5 shrink-0 transition-all cursor-pointer",
                isPinned
                  ? "text-primary bg-primary/15 hover:bg-primary/25 opacity-100"
                  : "text-muted-foreground/40 hover:text-foreground hover:bg-background/80 opacity-0 group-hover/th:opacity-100 focus:opacity-100"
              )}
            >
              <Pin
                className={cn(
                  "size-3 transition-transform",
                  isPinnedLeft && "fill-current -rotate-45",
                  isPinnedRight && "fill-current rotate-45"
                )}
              />
            </button>
          )}
        </div>
      )}

      {/* Column Resize Handle */}
      {enableColumnResizing && column.getCanResize() && !isSystemLeftCol && (
        <div
          onMouseDown={handleResizeMouseDown}
          onTouchStart={handleResizeTouchStart}
          onDoubleClick={(e) => {
            e.stopPropagation();
            column.resetSize();
          }}
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          title={labels.resetColumnWidth}
          className="group/resize absolute right-0 top-0 z-20 flex h-full w-2.5 cursor-col-resize select-none touch-none items-center justify-end"
        >
          <span
            className={cn(
              "h-4/5 w-0.5 rounded-full transition-colors",
              column.getIsResizing()
                ? "bg-primary h-full"
                : "bg-transparent group-hover/th:bg-border group-hover/resize:bg-primary"
            )}
          />
        </div>
      )}
    </TableHead>
  );
}
