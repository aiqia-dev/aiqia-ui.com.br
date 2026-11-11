import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Column, Table } from "@tanstack/react-table";
import {
  AlignJustify,
  ChevronLeft,
  ChevronRight,
  Columns3,
  Eye,
  GripVertical,
  Lock,
  Pin,
  RotateCcw,
  Rows2,
  Rows3,
  Search,
  X,
} from "lucide-react";
import { type ChangeEvent, type ReactNode, useState } from "react";
import { cn } from "../../utils/utils";
import { Badge } from "../badge/badge.component";
import { Button } from "../button/button.component";
import { Checkbox } from "../checkbox/checkbox.component";
import { Input } from "../input/input.component";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover.component";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../tooltip/tooltip.component";
import { FlashTableHelpDialog } from "./flash-table-help-dialog";
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

interface SortableColumnItemProps<TData> {
  column: Column<TData, unknown>;
  label: string;
  isActionsCol: boolean;
  enableColumnOrdering: boolean;
  enableColumnPinning: boolean;
  enableColumnVisibility: boolean;
  labels: FlashTableLabels;
}

function SortableColumnItem<TData>({
  column,
  label,
  isActionsCol,
  enableColumnOrdering,
  enableColumnPinning,
  enableColumnVisibility,
  labels,
}: SortableColumnItemProps<TData>) {
  const meta = column.columnDef.meta as FlashTableColumnMeta | undefined;
  const isPinned = column.getIsPinned();
  const isPinnedLeft = isPinned === "left";

  const canReorder =
    enableColumnOrdering && !isActionsCol && meta?.enableReordering !== false;
  const canPin =
    enableColumnPinning &&
    !isActionsCol &&
    column.getCanPin() &&
    meta?.enablePinning !== false;
  const canHide =
    enableColumnVisibility && !isActionsCol && column.getCanHide();

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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md text-xs transition-colors select-none",
        isDragging
          ? "bg-accent shadow-md ring-1 ring-primary/30 z-20 relative"
          : "hover:bg-muted/70",
        !column.getIsVisible() && "opacity-60"
      )}
    >
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {canReorder ? (
          <button
            type="button"
            {...attributes}
            {...listeners}
            className="text-muted-foreground/50 hover:text-foreground cursor-grab active:cursor-grabbing shrink-0 p-0.5"
            title={labels.columnManagerFooterHint}
          >
            <GripVertical className="size-3.5" />
          </button>
        ) : (
          <span className="w-4 shrink-0" />
        )}

        {canHide ? (
          <Checkbox
            checked={column.getIsVisible()}
            onCheckedChange={(checked) => column.toggleVisibility(!!checked)}
            aria-label={label}
          />
        ) : (
          <Checkbox checked disabled aria-label={label} />
        )}

        <span
          className={cn(
            "truncate font-medium text-foreground cursor-pointer",
            !column.getIsVisible() && "line-through text-muted-foreground"
          )}
          title={label}
          onClick={() => {
            if (canHide) {
              column.toggleVisibility(!column.getIsVisible());
            }
          }}
        >
          {label}
        </span>
      </div>

      <div className="flex items-center gap-0.5 shrink-0">
        {isActionsCol ? (
          <span
            className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-xs bg-muted text-muted-foreground font-medium"
            title={labels.pinnedRightBadge}
          >
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
              "inline-flex items-center justify-center p-1 rounded-xs transition-colors cursor-pointer",
              isPinnedLeft
                ? "bg-primary/15 text-primary hover:bg-primary/25"
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
    </div>
  );
}

export interface FlashTableColumnManagerProps<TData> {
  table: Table<TData>;
  pinActionsColumnRight: boolean;
  pinLastColumnRight: boolean;
  enableColumnOrdering: boolean;
  enableColumnPinning: boolean;
  enableColumnVisibility: boolean;
  isCustomized: boolean;
  onReset: () => void;
  labels?: FlashTableLabels;
}

export function FlashTableColumnManager<TData>({
  table,
  pinActionsColumnRight,
  pinLastColumnRight,
  enableColumnOrdering,
  enableColumnPinning,
  enableColumnVisibility,
  isCustomized,
  onReset,
  labels = DEFAULT_FLASH_TABLE_LABELS,
}: FlashTableColumnManagerProps<TData>) {
  const [searchQuery, setSearchQuery] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 4 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const allLeafColumns = table.getAllLeafColumns();
  const manageableColumns = allLeafColumns.filter(
    (col) => !isSystemLeftColumnId(col.id)
  );

  const query = searchQuery.trim().toLowerCase();
  const filteredColumns = query
    ? manageableColumns.filter((col) =>
        getColumnLabel(col).toLowerCase().includes(query)
      )
    : manageableColumns;

  const hiddenCount = manageableColumns.filter(
    (col) => !col.getIsVisible()
  ).length;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    const currentOrder =
      table.getState().columnOrder.length > 0
        ? table.getState().columnOrder
        : allLeafColumns.map((c) => c.id);

    const oldIndex = currentOrder.indexOf(activeId);
    const newIndex = currentOrder.indexOf(overId);

    if (oldIndex !== -1 && newIndex !== -1) {
      table.setColumnOrder(arrayMove(currentOrder, oldIndex, newIndex));
    }

    const leftPinned = table.getState().columnPinning.left ?? [];
    const oldLeftIdx = leftPinned.indexOf(activeId);
    const newLeftIdx = leftPinned.indexOf(overId);
    if (oldLeftIdx !== -1 && newLeftIdx !== -1) {
      table.setColumnPinning((prev) => ({
        ...prev,
        left: arrayMove(prev.left ?? [], oldLeftIdx, newLeftIdx),
      }));
    }

    const rightPinned = table.getState().columnPinning.right ?? [];
    const oldRightIdx = rightPinned.indexOf(activeId);
    const newRightIdx = rightPinned.indexOf(overId);
    if (oldRightIdx !== -1 && newRightIdx !== -1) {
      table.setColumnPinning((prev) => ({
        ...prev,
        right: arrayMove(prev.right ?? [], oldRightIdx, newRightIdx),
      }));
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          type="button"
          title={labels.customizeColumnsTitle}
        >
          <Columns3 />
          <span>{labels.columnsButton}</span>
          {hiddenCount > 0 && (
            <Badge
              variant="secondary"
              className="ml-1 px-1.5 py-0 text-xs font-semibold"
            >
              {manageableColumns.length - hiddenCount}/
              {manageableColumns.length}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-76 p-0 shadow-lg">
        <div className="p-2.5 border-b space-y-2 bg-muted/30">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">
              {labels.customizeColumnsTitle}
            </span>
            <div className="flex items-center gap-1.5">
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => table.toggleAllColumnsVisible(true)}
                  className="inline-flex items-center gap-1 text-[11px] text-primary hover:underline px-1 cursor-pointer"
                >
                  <Eye className="size-3" />
                  {labels.showAllColumns}
                </button>
              )}
              {isCustomized && (
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground px-1 cursor-pointer"
                >
                  <RotateCcw className="size-3" />
                  {labels.resetToDefault}
                </button>
              )}
            </div>
          </div>

          {manageableColumns.length > 5 && (
            <div className="relative">
              <Search className="size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <Input
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                placeholder={labels.searchColumnsPlaceholder}
                className="h-7 pl-8 pr-7 text-xs bg-background"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <X className="size-3" />
                </button>
              )}
            </div>
          )}
        </div>

        <div className="max-h-72 overflow-y-auto p-1.5 space-y-0.5">
          {filteredColumns.length === 0 ? (
            <p className="text-xs text-muted-foreground text-center py-4">
              {labels.noColumnsFound}
            </p>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis]}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={filteredColumns.map((c) => c.id)}
                strategy={verticalListSortingStrategy}
              >
                {filteredColumns.map((column, index) => {
                  const isLast = index === allLeafColumns.length - 1;
                  const isActionsCol = isActionsColumnDef(
                    column.id,
                    column.columnDef,
                    isLast,
                    pinActionsColumnRight,
                    pinLastColumnRight
                  );
                  return (
                    <SortableColumnItem
                      key={column.id}
                      column={column}
                      label={getColumnLabel(column)}
                      isActionsCol={isActionsCol}
                      enableColumnOrdering={
                        enableColumnOrdering && !searchQuery.trim()
                      }
                      enableColumnPinning={enableColumnPinning}
                      enableColumnVisibility={enableColumnVisibility}
                      labels={labels}
                    />
                  );
                })}
              </SortableContext>
            </DndContext>
          )}
        </div>

        <div className="px-3 py-1.5 border-t bg-muted/20 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>{labels.columnManagerFooterHint}</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export interface FlashTableToolbarProps<TData> {
  table: Table<TData>;
  totalRecords?: number;
  showTotalRecords?: boolean;
  showDensityToggle?: boolean;
  showHelpButton?: boolean;
  density: FlashTableDensity;
  onDensityChange: (density: FlashTableDensity) => void;
  pinActionsColumnRight: boolean;
  pinLastColumnRight: boolean;
  enableColumnOrdering: boolean;
  enableColumnPinning: boolean;
  enableColumnVisibility: boolean;
  isCustomized: boolean;
  onReset: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScrollHorizontal: (direction: "left" | "right") => void;
  toolbarLeftContent?: ReactNode;
  toolbarRightContent?: ReactNode;
  labels?: FlashTableLabels;
  className?: string;
}

export function FlashTableToolbar<TData>({
  table,
  totalRecords,
  showTotalRecords = true,
  showDensityToggle = true,
  showHelpButton = true,
  density,
  onDensityChange,
  pinActionsColumnRight,
  pinLastColumnRight,
  enableColumnOrdering,
  enableColumnPinning,
  enableColumnVisibility,
  isCustomized,
  onReset,
  canScrollLeft,
  canScrollRight,
  onScrollHorizontal,
  toolbarLeftContent,
  toolbarRightContent,
  labels = DEFAULT_FLASH_TABLE_LABELS,
  className,
}: FlashTableToolbarProps<TData>) {
  const allColumns = table.getAllLeafColumns();
  const hiddenColumnsCount = allColumns.filter(
    (col) => !isSystemLeftColumnId(col.id) && !col.getIsVisible()
  ).length;

  const displayTotal = totalRecords ?? table.getRowModel().rows.length;
  const hasHorizontalOverflow = canScrollLeft || canScrollRight;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-muted/30 border-b border-border text-xs",
        className
      )}
    >
      {/* Left Area: Total Records + Custom Left Content + Hidden Columns Badge */}
      <div className="flex flex-wrap items-center gap-2 min-w-0">
        {showTotalRecords && (
          <span className="text-xs text-muted-foreground tabular-nums">
            {labels.totalRecords}{" "}
            <strong className="font-semibold text-foreground">
              {displayTotal.toLocaleString("pt-BR")}
            </strong>
          </span>
        )}

        {toolbarLeftContent}

        {hiddenColumnsCount > 0 && (
          <button
            type="button"
            onClick={() => table.toggleAllColumnsVisible(true)}
            title={labels.showAllColumns}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px] font-medium transition-colors cursor-pointer"
          >
            <Eye className="size-3" />
            {hiddenColumnsCount}{" "}
            {hiddenColumnsCount === 1
              ? labels.hiddenColumnSingular
              : labels.hiddenColumnPlural}
          </button>
        )}
      </div>

      {/* Right Area: Custom Right Content, Scroll Controls, Density Switcher, Column Manager, Reset */}
      <div className="flex items-center gap-1.5 ml-auto shrink-0">
        {toolbarRightContent}

        {/* Horizontal Scroll Quick Navigation when overflowing */}
        {hasHorizontalOverflow && (
          <div className="inline-flex items-center gap-1">
            <Button
              type="button"
              variant="outline"
              size="iconSm"
              disabled={!canScrollLeft}
              onClick={() => onScrollHorizontal("left")}
              title={labels.scrollLeft}
              aria-label={labels.scrollLeft}
            >
              <ChevronLeft />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="iconSm"
              disabled={!canScrollRight}
              onClick={() => onScrollHorizontal("right")}
              title={labels.scrollRight}
              aria-label={labels.scrollRight}
            >
              <ChevronRight />
            </Button>
          </div>
        )}

        {/* Density Switcher */}
        {showDensityToggle && (
          <div
            className="hidden sm:inline-flex items-center gap-1"
            role="group"
            aria-label={labels.densityLabel}
          >
            <Button
              type="button"
              variant={density === "ultra-compact" ? "secondary" : "ghost"}
              size="iconSm"
              onClick={() => onDensityChange("ultra-compact")}
              title={labels.densityUltraCompact}
            >
              <AlignJustify />
            </Button>
            <Button
              type="button"
              variant={density === "compact" ? "secondary" : "ghost"}
              size="iconSm"
              onClick={() => onDensityChange("compact")}
              title={labels.densityCompact}
            >
              <Rows3 />
            </Button>
            <Button
              type="button"
              variant={density === "comfortable" ? "secondary" : "ghost"}
              size="iconSm"
              onClick={() => onDensityChange("comfortable")}
              title={labels.densityComfortable}
            >
              <Rows2 />
            </Button>
          </div>
        )}

        {/* Column Manager Popover */}
        {(enableColumnVisibility ||
          enableColumnOrdering ||
          enableColumnPinning) && (
          <FlashTableColumnManager
            table={table}
            pinActionsColumnRight={pinActionsColumnRight}
            pinLastColumnRight={pinLastColumnRight}
            enableColumnOrdering={enableColumnOrdering}
            enableColumnPinning={enableColumnPinning}
            enableColumnVisibility={enableColumnVisibility}
            isCustomized={isCustomized}
            onReset={onReset}
            labels={labels}
          />
        )}

        {/* Quick Reset Button when customized */}
        {isCustomized && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="iconSm"
                type="button"
                onClick={onReset}
                aria-label={labels.resetToDefaultTooltip}
              >
                <RotateCcw />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {labels.resetToDefaultTooltip}
            </TooltipContent>
          </Tooltip>
        )}

        {/* Table Help / Shortcuts Dialog */}
        {showHelpButton && <FlashTableHelpDialog labels={labels} />}
      </div>
    </div>
  );
}
