"use client";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import {
  type Column,
  type ColumnDef,
  type ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  type Row,
  type RowSelectionState,
  type SortingState,
  type Updater,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, ChevronRight, Loader2, X } from "lucide-react";
import {
  type CSSProperties,
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "../../utils/utils";
import { Button } from "../button/button.component";
import { Checkbox } from "../checkbox/checkbox.component";
import { Skeleton } from "../skeleton/skeleton.component";
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "../table/table.component";
import { TooltipProvider } from "../tooltip/tooltip.component";
import {
  FlashTableColumnManager,
  type FlashTableColumnManagerProps,
  FlashTableToolbar,
  type FlashTableToolbarProps,
} from "./flash-table-column-manager";
import {
  type ContextMenuPosition,
  FlashTableContextMenu,
  type FlashTableContextMenuProps,
} from "./flash-table-context-menu";
import {
  FlashTableHeaderCell,
  type FlashTableHeaderCellProps,
} from "./flash-table-header-cell";
import {
  FlashTableHelpDialog,
  type FlashTableHelpDialogProps,
} from "./flash-table-help-dialog";
import type {
  FlashTableColumnMeta,
  FlashTableLabels,
  FlashTableProps,
} from "./flash-table.types";
import {
  DEFAULT_FLASH_TABLE_LABELS,
  extractColumnId,
  isActionsColumnDef,
  isExpansionColumnId,
  isSelectionColumnId,
  isSystemLeftColumnId,
} from "./flash-table.utils";
import { useFlashTablePersistence } from "./use-flash-table-persistence";

function resolveUpdater<T>(updater: Updater<T>, previous: T): T {
  return typeof updater === "function"
    ? (updater as (old: T) => T)(previous)
    : updater;
}

export function FlashTable<TData, TValue = unknown>({
  columns,
  data,
  totalRecords,
  tableId,
  persistState = true,
  storageScope,
  storagePrefix,
  storage,
  isLoading = false,
  loadingMode = "auto",
  skeletonRowsCount = 5,
  emptyMessage,
  emptyContent,
  rowSelection: propRowSelection,
  onRowSelectionChange: propOnRowSelectionChange,
  onSelectedRowsChange,
  enableRowSelection,
  showSelectionColumn,
  isRowSelectable,
  selectionDisabledReason,
  renderBulkActions,
  expanded: propExpanded,
  onExpandedChange: propOnExpandedChange,
  getSubRows,
  getRowCanExpand,
  renderSubComponent,
  showExpandColumn = true,
  expandOnRowClick = false,
  enableSorting = true,
  enableMultiSort = true,
  sorting: propSorting,
  onSortingChange: propOnSortingChange,
  manualSorting = false,
  columnVisibility: propColumnVisibility,
  onColumnVisibilityChange: propOnColumnVisibilityChange,
  columnSizing: propColumnSizing,
  onColumnSizingChange: propOnColumnSizingChange,
  columnOrder: propColumnOrder,
  onColumnOrderChange: propOnColumnOrderChange,
  columnPinning: propColumnPinning,
  onColumnPinningChange: propOnColumnPinningChange,
  pinActionsColumnRight = true,
  pinLastColumnRight = false,
  defaultPinnedLeft,
  defaultPinnedRight,
  enableColumnOrdering = true,
  enableColumnPinning = true,
  enableColumnVisibility = true,
  enableColumnResizing = true,
  enableContextMenu = true,
  showToolbar = true,
  showTotalRecords = true,
  showDensityToggle = true,
  showHelpButton = true,
  toolbarLeftContent,
  toolbarRightContent,
  density: defaultDensity = "compact",
  onDensityChange: propOnDensityChange,
  tableLayout = "fixed",
  striped = false,
  hoverable = true,
  stickyHeader = true,
  maxHeight,
  className,
  classNames,
  style,
  getRowId,
  onRowClick,
  onRowDoubleClick,
  rowClassName,
  renderRowProgress,
  footerContent,
  onTableReady,
  labels: customLabels,
}: FlashTableProps<TData, TValue>) {
  const labels = useMemo<FlashTableLabels>(
    () => ({
      ...DEFAULT_FLASH_TABLE_LABELS,
      ...customLabels,
      ...(emptyMessage ? { emptyMessage } : {}),
    }),
    [customLabels, emptyMessage]
  );

  // Internal states for uncontrolled modes
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);
  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});
  const [internalExpanded, setInternalExpanded] = useState<ExpandedState>({});

  const [contextMenu, setContextMenu] = useState<ContextMenuPosition | null>(
    null
  );
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [measuredWidths, setMeasuredWidths] = useState<Record<string, number>>(
    {}
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tableElementRef = useRef<HTMLTableElement>(null);
  const headerElementsRef = useRef<Map<string, HTMLTableCellElement>>(
    new Map()
  );

  const finalSorting = propSorting ?? internalSorting;
  const finalOnSortingChange = propOnSortingChange ?? setInternalSorting;

  const finalRowSelection = propRowSelection ?? internalRowSelection;
  const handleRowSelectionChange = useCallback(
    (updater: Updater<RowSelectionState>) => {
      propOnRowSelectionChange?.(updater);
      setInternalRowSelection((prev) =>
        resolveUpdater(updater, propRowSelection ?? prev)
      );
    },
    [propOnRowSelectionChange, propRowSelection]
  );

  const finalExpanded = propExpanded ?? internalExpanded;
  const finalOnExpandedChange = propOnExpandedChange ?? setInternalExpanded;

  // Determine whether row selection is active
  const isRowSelectionActive =
    enableRowSelection !== undefined
      ? Boolean(enableRowSelection)
      : Boolean(
          showSelectionColumn ||
            propOnRowSelectionChange ||
            onSelectedRowsChange ||
            renderBulkActions
        );

  const hasUserSelectionCol = useMemo(
    () =>
      columns.some((col, idx) =>
        isSelectionColumnId(extractColumnId(col, idx))
      ),
    [columns]
  );

  const shouldInjectSelectionCol =
    (showSelectionColumn ?? isRowSelectionActive) && !hasUserSelectionCol;

  const hasExpansionSupport = Boolean(renderSubComponent || getSubRows);
  const hasUserExpandCol = useMemo(
    () =>
      columns.some((col, idx) =>
        isExpansionColumnId(extractColumnId(col, idx))
      ),
    [columns]
  );
  const shouldInjectExpandCol =
    hasExpansionSupport && showExpandColumn && !hasUserExpandCol;

  // Build normalized columns including optional auto-injected selection & expand columns
  const normalizedColumns = useMemo<ColumnDef<TData, TValue>[]>(() => {
    const baseCols = columns.map((col, idx) => ({
      ...col,
      id: extractColumnId(col, idx),
    }));

    const injectedLeftCols: ColumnDef<TData, TValue>[] = [];

    if (shouldInjectSelectionCol) {
      injectedLeftCols.push({
        id: "__select__",
        size: 38,
        minSize: 38,
        maxSize: 44,
        enableSorting: false,
        enableResizing: false,
        enableHiding: false,
        enablePinning: true,
        meta: {
          label: "Seleção",
          align: "center",
          enablePinning: false,
          enableReordering: false,
          defaultPinned: "left",
        } satisfies FlashTableColumnMeta,
        header: ({ table: tbl }) => (
          <Checkbox
            checked={
              tbl.getIsAllPageRowsSelected() ||
              (tbl.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              tbl.toggleAllPageRowsSelected(!!value)
            }
            aria-label={labels.selectAllRows}
            onClick={(e) => e.stopPropagation()}
          />
        ),
        cell: ({ row }) => {
          const canSelect = row.getCanSelect();
          return (
            <Checkbox
              checked={row.getIsSelected()}
              disabled={!canSelect}
              title={!canSelect ? selectionDisabledReason : undefined}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label={labels.selectRow(row.id)}
              onClick={(e) => e.stopPropagation()}
            />
          );
        },
      });
    }

    if (shouldInjectExpandCol) {
      injectedLeftCols.push({
        id: "__expand__",
        size: 36,
        minSize: 36,
        maxSize: 42,
        enableSorting: false,
        enableResizing: false,
        enableHiding: false,
        enablePinning: true,
        meta: {
          label: "Expandir",
          align: "center",
          enablePinning: false,
          enableReordering: false,
          defaultPinned: "left",
        } satisfies FlashTableColumnMeta,
        header: () => null,
        cell: ({ row }) => {
          if (!row.getCanExpand()) return null;
          const isExp = row.getIsExpanded();
          return (
            <Button
              variant="ghost"
              size="iconSm"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                row.toggleExpanded();
              }}
              aria-label={isExp ? labels.collapseRow : labels.expandRow}
              title={isExp ? labels.collapseRow : labels.expandRow}
            >
              {isExp ? (
                <ChevronDown />
              ) : (
                <ChevronRight />
              )}
            </Button>
          );
        },
      });
    }

    return [...injectedLeftCols, ...baseCols];
  }, [
    columns,
    shouldInjectSelectionCol,
    shouldInjectExpandCol,
    labels,
    selectionDisabledReason,
  ]);

  const {
    columnVisibility,
    onColumnVisibilityChange,
    columnSizing,
    onColumnSizingChange,
    columnOrder,
    onColumnOrderChange,
    columnPinning,
    onColumnPinningChange,
    density,
    onDensityChange,
    isCustomized,
    resetToDefaults,
  } = useFlashTablePersistence({
    columns: normalizedColumns,
    tableId,
    persistState,
    storageScope,
    storagePrefix,
    storage,
    defaultDensity,
    pinActionsColumnRight,
    pinLastColumnRight,
    defaultPinnedLeft,
    defaultPinnedRight,
    propColumnVisibility,
    onColumnVisibilityChange: propOnColumnVisibilityChange,
    propColumnSizing,
    onColumnSizingChange: propOnColumnSizingChange,
    propColumnOrder,
    onColumnOrderChange: propOnColumnOrderChange,
    propColumnPinning,
    onColumnPinningChange: propOnColumnPinningChange,
    propDensity: undefined,
    onDensityChange: propOnDensityChange,
  });

  const rowSelectionPredicate = useMemo(() => {
    if (typeof enableRowSelection === "function") {
      return enableRowSelection;
    }
    if (isRowSelectable) {
      return (row: Row<TData>) => isRowSelectable(row.original);
    }
    return isRowSelectionActive;
  }, [enableRowSelection, isRowSelectable, isRowSelectionActive]);

  const rowCanExpandPredicate = useMemo(() => {
    if (getRowCanExpand) return getRowCanExpand;
    if (renderSubComponent) return () => true;
    return undefined;
  }, [getRowCanExpand, renderSubComponent]);

  const table = useReactTable({
    data,
    columns: normalizedColumns,
    defaultColumn: {
      minSize: 60,
    },
    getRowId,
    getSubRows,
    getRowCanExpand: rowCanExpandPredicate,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: manualSorting ? undefined : getSortedRowModel(),
    getExpandedRowModel: hasExpansionSupport
      ? getExpandedRowModel()
      : undefined,
    onSortingChange: finalOnSortingChange,
    onExpandedChange: finalOnExpandedChange,
    onColumnVisibilityChange,
    onColumnSizingChange,
    onColumnOrderChange,
    onColumnPinningChange,
    onRowSelectionChange: handleRowSelectionChange,
    manualSorting,
    state: {
      sorting: finalSorting,
      expanded: finalExpanded,
      rowSelection: finalRowSelection,
      columnVisibility,
      columnSizing,
      columnOrder,
      columnPinning,
    },
    enableRowSelection: rowSelectionPredicate,
    enableSorting,
    enableMultiSort,
    enableColumnResizing,
    enableColumnPinning,
    columnResizeMode: "onChange",
  });

  useEffect(() => {
    onTableReady?.(table);
  }, [table, onTableReady]);

  // Notify parent when selected rows change
  const selectedRowsData = useMemo(() => {
    if (!isRowSelectionActive) return [];
    return table
      .getSelectedRowModel()
      .flatRows.map((r) => r.original);
  }, [table, finalRowSelection, data, isRowSelectionActive]);

  useEffect(() => {
    onSelectedRowsChange?.(selectedRowsData);
  }, [selectedRowsData, onSelectedRowsChange]);

  // Measure header cell DOM widths for pixel-accurate multi-column sticky offsets
  const measureHeaderWidths = useCallback(() => {
    const nextWidths: Record<string, number> = {};
    headerElementsRef.current.forEach((el, colId) => {
      if (el) {
        const width = Math.round(el.getBoundingClientRect().width);
        if (width > 0) {
          nextWidths[colId] = width;
        }
      }
    });

    setMeasuredWidths((prev) => {
      const keys = Object.keys(nextWidths);
      if (
        keys.length === Object.keys(prev).length &&
        keys.every((k) => Math.abs((prev[k] ?? 0) - nextWidths[k]) <= 1)
      ) {
        return prev;
      }
      return nextWidths;
    });
  }, []);

  const registerHeaderElement = useCallback(
    (columnId: string, element: HTMLTableCellElement | null) => {
      if (element) {
        headerElementsRef.current.set(columnId, element);
      } else {
        headerElementsRef.current.delete(columnId);
      }
    },
    []
  );

  const updateScrollState = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(maxScroll - scrollLeft > 2);
  }, []);

  // Support Ctrl + Mouse Wheel for horizontal scrolling anywhere over the table
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return;

      const hasHorizontalOverflow =
        container.scrollWidth > container.clientWidth + 1;
      if (!hasHorizontalOverflow) return;

      const rawDelta =
        Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (rawDelta === 0) return;

      const multiplier =
        e.deltaMode === 1
          ? 32
          : e.deltaMode === 2
            ? container.clientWidth * 0.8
            : 1;

      e.preventDefault();
      container.scrollLeft += rawDelta * multiplier;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useLayoutEffect(() => {
    measureHeaderWidths();
    updateScrollState();
  }, [
    measureHeaderWidths,
    updateScrollState,
    data,
    columnVisibility,
    columnOrder,
    columnPinning,
    columnSizing,
    density,
  ]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const tableEl = tableElementRef.current;
    if (!container || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => {
      measureHeaderWidths();
      updateScrollState();
    });

    observer.observe(container);
    if (tableEl) {
      observer.observe(tableEl);
    }
    headerElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [
    updateScrollState,
    measureHeaderWidths,
    columnVisibility,
    columnOrder,
    columnPinning,
  ]);

  const handleScrollHorizontal = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = Math.max(240, Math.floor(container.clientWidth * 0.6));
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  // Compute cumulative sticky offsets for left-pinned and right-pinned visible columns
  const visibleLeafColumns = table.getVisibleLeafColumns();

  const {
    stickyOffsets,
    lastLeftPinnedColumnId,
    firstRightPinnedColumnId,
    actionsColumnIds,
  } = useMemo(() => {
    const offsets: Record<string, number> = {};
    const actionsSet = new Set<string>();
    const allCols = table.getAllLeafColumns();
    const colMap = new Map<string, Column<TData, unknown>>();

    allCols.forEach((col, index) => {
      colMap.set(col.id, col);
      if (
        isActionsColumnDef(
          col.id,
          col.columnDef,
          index === allCols.length - 1,
          pinActionsColumnRight,
          pinLastColumnRight
        )
      ) {
        actionsSet.add(col.id);
      }
    });

    const isColVisible = (col: Column<TData, unknown>) =>
      columnVisibility[col.id] !== false && col.getIsVisible();

    const leftCols = (columnPinning.left ?? [])
      .map((id) => colMap.get(id))
      .filter(
        (col): col is Column<TData, unknown> => !!col && isColVisible(col)
      );

    const rightCols = (columnPinning.right ?? [])
      .map((id) => colMap.get(id))
      .filter(
        (col): col is Column<TData, unknown> => !!col && isColVisible(col)
      );

    let accLeft = 0;
    for (const col of leftCols) {
      offsets[col.id] = accLeft;
      accLeft += measuredWidths[col.id] || col.getSize();
    }

    let accRight = 0;
    for (let i = rightCols.length - 1; i >= 0; i--) {
      const col = rightCols[i];
      offsets[col.id] = accRight;
      accRight += measuredWidths[col.id] || col.getSize();
    }

    return {
      stickyOffsets: offsets,
      lastLeftPinnedColumnId:
        leftCols.length > 0 ? leftCols[leftCols.length - 1].id : null,
      firstRightPinnedColumnId: rightCols.length > 0 ? rightCols[0].id : null,
      actionsColumnIds: actionsSet,
    };
  }, [
    table,
    columnPinning,
    columnOrder,
    columnVisibility,
    columnSizing,
    measuredWidths,
    pinActionsColumnRight,
    pinLastColumnRight,
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleHeaderDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const activeId = String(active.id);
      const overId = String(over.id);

      if (
        isSystemLeftColumnId(activeId) ||
        isSystemLeftColumnId(overId) ||
        actionsColumnIds.has(activeId) ||
        actionsColumnIds.has(overId)
      ) {
        return;
      }

      const currentOrder =
        table.getState().columnOrder.length > 0
          ? table.getState().columnOrder
          : table.getAllLeafColumns().map((c) => c.id);

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
    },
    [table, actionsColumnIds]
  );

  const handleContextMenu = (e: React.MouseEvent) => {
    if (!enableContextMenu) return;
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const clearSelection = useCallback(() => {
    table.resetRowSelection();
  }, [table]);

  const rows = table.getRowModel().rows;
  const showSkeletonRows =
    isLoading &&
    (loadingMode === "skeleton" ||
      (loadingMode === "auto" && rows.length === 0));
  const showLoadingOverlay =
    isLoading &&
    (loadingMode === "overlay" || (loadingMode === "auto" && rows.length > 0));

  const hasColumnFooters = useMemo(
    () =>
      table
        .getFooterGroups()
        .some((group) =>
          group.headers.some((h) => h.column.columnDef.footer !== undefined)
        ),
    [table]
  );

  const hasCustomColumnSizing = Object.keys(columnSizing).length > 0;
  const isResizingAnyColumn = Boolean(
    table.getState().columnSizingInfo?.isResizingColumn
  );
  const useFixedLayout =
    tableLayout === "fixed" || hasCustomColumnSizing || isResizingAnyColumn;

  const viewportStyle: CSSProperties | undefined = maxHeight
    ? {
        maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
      }
    : undefined;

  return (
    <TooltipProvider delayDuration={200}>
      <div
        style={style}
        className={cn(
          "relative z-0 overflow-hidden rounded-lg border border-border bg-card shadow-xs",
          classNames?.root,
          className
        )}
        onContextMenu={handleContextMenu}
      >
        {/* Loading Overlay */}
        {showLoadingOverlay && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] flex justify-center items-center z-50">
            <Loader2 className="animate-spin size-6 text-primary" />
          </div>
        )}

        {/* Integrated Compact Control Bar */}
        {showToolbar && (
          <FlashTableToolbar
            table={table}
            totalRecords={totalRecords}
            showTotalRecords={showTotalRecords}
            showDensityToggle={showDensityToggle}
            showHelpButton={showHelpButton}
            density={density}
            onDensityChange={onDensityChange}
            pinActionsColumnRight={pinActionsColumnRight}
            pinLastColumnRight={pinLastColumnRight}
            enableColumnOrdering={enableColumnOrdering}
            enableColumnPinning={enableColumnPinning}
            enableColumnVisibility={enableColumnVisibility}
            isCustomized={isCustomized}
            onReset={resetToDefaults}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            onScrollHorizontal={handleScrollHorizontal}
            toolbarLeftContent={toolbarLeftContent}
            toolbarRightContent={toolbarRightContent}
            labels={labels}
            className={classNames?.toolbar}
          />
        )}

        {/* Active Row Selection Banner / Bulk Actions */}
        {isRowSelectionActive && selectedRowsData.length > 0 && (
          <div
            className={cn(
              "flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-primary/5 border-b border-primary/20 text-xs",
              classNames?.selectionBar
            )}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">
                {labels.selectedItemsCount(selectedRowsData.length)}
              </span>
              {renderBulkActions?.(selectedRowsData, clearSelection)}
            </div>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={clearSelection}
            >
              <X />
              <span>{labels.clearSelection}</span>
            </Button>
          </div>
        )}

        {/* Scrollable Table Viewport */}
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          style={viewportStyle}
          className={cn(
            "relative w-full overflow-auto",
            classNames?.viewport
          )}
        >
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            modifiers={[restrictToHorizontalAxis]}
            onDragEnd={handleHeaderDragEnd}
          >
            <table
              ref={tableElementRef}
              style={
                useFixedLayout
                  ? { width: table.getTotalSize(), minWidth: "100%" }
                  : undefined
              }
              className={cn(
                useFixedLayout ? "table-fixed" : "table-auto w-full",
                "caption-bottom border-separate border-spacing-0",
                density === "ultra-compact" && "text-xs",
                density === "compact" && "text-sm",
                density === "comfortable" && "text-sm",
                classNames?.table
              )}
            >
              <TableHeader
                className={cn(
                  "bg-muted",
                  stickyHeader && maxHeight && "sticky top-0 z-30 bg-muted",
                  classNames?.header
                )}
              >
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className={cn(
                      "hover:bg-transparent border-b-0",
                      classNames?.headerRow
                    )}
                  >
                    <SortableContext
                      items={headerGroup.headers.map((h) => h.column.id)}
                      strategy={horizontalListSortingStrategy}
                    >
                      {headerGroup.headers.map((header) => {
                        const colId = header.column.id;
                        const pinnedPos = header.column.getIsPinned();
                        const isActionsCol = actionsColumnIds.has(colId);
                        const isSystemLeftCol = isSystemLeftColumnId(colId);

                        return (
                          <FlashTableHeaderCell
                            key={header.id}
                            header={header}
                            density={density}
                            enableColumnOrdering={enableColumnOrdering}
                            enableColumnPinning={enableColumnPinning}
                            enableColumnResizing={enableColumnResizing}
                            isActionsCol={isActionsCol}
                            isSystemLeftCol={isSystemLeftCol}
                            pinnedPosition={pinnedPos}
                            stickyOffset={stickyOffsets[colId]}
                            isLastLeftPinned={colId === lastLeftPinnedColumnId}
                            isFirstRightPinned={
                              colId === firstRightPinnedColumnId
                            }
                            canScrollLeft={canScrollLeft}
                            canScrollRight={canScrollRight}
                            labels={labels}
                            className={classNames?.headerCell}
                            onRegisterHeaderElement={registerHeaderElement}
                          />
                        );
                      })}
                    </SortableContext>
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody className={classNames?.body}>
                {showSkeletonRows ? (
                  Array.from({ length: skeletonRowsCount }).map((_, sIdx) => (
                    <TableRow
                      key={`skeleton-${sIdx}`}
                      className="border-b-0 hover:bg-transparent"
                    >
                      {visibleLeafColumns.map((col) => (
                        <TableCell
                          key={`skeleton-${sIdx}-${col.id}`}
                          className={cn(
                            "border-b border-border/60",
                            density === "ultra-compact" && "py-0.5 px-2",
                            density === "compact" && "py-1 px-3",
                            density === "comfortable" && "py-2 px-3"
                          )}
                        >
                          <Skeleton className="h-4 w-full max-w-[140px]" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : rows.length > 0 ? (
                  rows.map((row, rowIndex) => {
                    const rowProgress = renderRowProgress
                      ? renderRowProgress(row.original)
                      : null;
                    const isExpanded = row.getIsExpanded();
                    const hasSubComponent =
                      isExpanded && Boolean(renderSubComponent);
                    const visibleCells = row.getVisibleCells();
                    const isEvenRow = rowIndex % 2 === 1;
                    const isLastRow = rowIndex === rows.length - 1;

                    return (
                      <Fragment key={row.id}>
                        <TableRow
                          data-state={row.getIsSelected() && "selected"}
                          onClick={(e) => {
                            if (expandOnRowClick && row.getCanExpand()) {
                              row.toggleExpanded();
                            }
                            onRowClick?.(row.original, e);
                          }}
                          onDoubleClick={
                            onRowDoubleClick
                              ? (e) => onRowDoubleClick(row.original, e)
                              : undefined
                          }
                          className={cn(
                            "group/row border-b-0 transition-colors [--flash-table-cell-bg:var(--card)] data-[state=selected]:[--flash-table-cell-bg:var(--muted)]",
                            hoverable
                              ? "hover:bg-muted hover:[--flash-table-cell-bg:var(--muted)] data-[state=selected]:bg-muted"
                              : "hover:bg-transparent",
                            (onRowClick ||
                              (expandOnRowClick && row.getCanExpand())) &&
                              "cursor-pointer",
                            striped &&
                              isEvenRow &&
                              "bg-muted [--flash-table-cell-bg:var(--muted)]",
                            classNames?.row,
                            rowClassName
                              ? rowClassName(row.original, rowIndex)
                              : ""
                          )}
                        >
                          {visibleCells.map((cell) => {
                            const colId = cell.column.id;
                            const pinnedPos = cell.column.getIsPinned();
                            const isPinnedLeft = pinnedPos === "left";
                            const isPinnedRight = pinnedPos === "right";
                            const isPinned = isPinnedLeft || isPinnedRight;
                            const isLastLeftPinned =
                              colId === lastLeftPinnedColumnId;
                            const isFirstRightPinned =
                              colId === firstRightPinnedColumnId;
                            const isActionsCol = actionsColumnIds.has(colId);
                            const isSystemLeftCol = isSystemLeftColumnId(colId);
                            const meta = cell.column.columnDef.meta as
                              | FlashTableColumnMeta
                              | undefined;
                            const stickyOffset = stickyOffsets[colId] ?? 0;

                            const cellStyle: CSSProperties = {
                              width: cell.column.getSize(),
                              minWidth:
                                cell.column.columnDef.minSize ??
                                (isPinned ? cell.column.getSize() : undefined),
                              maxWidth: cell.column.columnDef.maxSize,
                              ...(isPinned
                                ? {
                                    backgroundColor:
                                      "var(--flash-table-cell-bg, var(--card))",
                                  }
                                : {}),
                              ...(isPinnedLeft
                                ? {
                                    position: "sticky",
                                    left: `${stickyOffset}px`,
                                  }
                                : {}),
                              ...(isPinnedRight
                                ? {
                                    position: "sticky",
                                    right: `${stickyOffset}px`,
                                  }
                                : {}),
                            };

                            return (
                              <TableCell
                                key={cell.id}
                                style={cellStyle}
                                className={cn(
                                  meta?.wrap
                                    ? "whitespace-normal"
                                    : "whitespace-nowrap overflow-hidden text-ellipsis",
                                  "align-middle transition-colors",
                                  isSystemLeftCol &&
                                    "[&:has([role=checkbox])]:pr-2",
                                  isPinned && "sticky",
                                  // Row bottom border
                                  (!isLastRow ||
                                    hasColumnFooters ||
                                    footerContent) &&
                                    !rowProgress &&
                                    !hasSubComponent &&
                                    "border-b border-border",
                                  // Density padding
                                  density === "ultra-compact" &&
                                    "py-0.5 px-2 text-xs",
                                  density === "compact" &&
                                    "py-1 px-3 text-sm",
                                  density === "comfortable" &&
                                    "py-2 px-3 text-sm",
                                  // Alignment
                                  (isActionsCol || meta?.align === "right") &&
                                    "text-right",
                                  (isSystemLeftCol ||
                                    meta?.align === "center") &&
                                    "text-center",
                                  // Pinned cell 100% opaque background so scrolled content never bleeds through
                                  isPinned && [
                                    "z-20",
                                    striped && isEvenRow
                                      ? "bg-muted"
                                      : "bg-card",
                                    hoverable && "group-hover/row:bg-muted",
                                    "group-data-[state=selected]/row:bg-muted",
                                  ],
                                  // Sticky boundary dividers & directional shadows
                                  isLastLeftPinned &&
                                    "border-r border-border",
                                  isLastLeftPinned &&
                                    canScrollLeft &&
                                    "shadow-[4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                  isFirstRightPinned &&
                                    "border-l border-border",
                                  isFirstRightPinned &&
                                    canScrollRight &&
                                    "shadow-[-4px_0_8px_-2px_rgba(0,0,0,0.08)] dark:shadow-[-4px_0_12px_-2px_rgba(0,0,0,0.35)]",
                                  classNames?.cell,
                                  meta?.cellClassName
                                )}
                              >
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>

                        {/* Optional Expanded Sub-Component Row */}
                        {hasSubComponent && renderSubComponent && (
                          <TableRow
                            className={cn(
                              "bg-muted/20 hover:bg-muted/20 border-b-0",
                              classNames?.expandedRow
                            )}
                          >
                            <TableCell
                              colSpan={visibleLeafColumns.length || 1}
                              className={cn(
                                "p-3",
                                !isLastRow &&
                                  !rowProgress &&
                                  "border-b border-border"
                              )}
                            >
                              {renderSubComponent({
                                row,
                                data: row.original,
                              })}
                            </TableCell>
                          </TableRow>
                        )}

                        {/* Optional Row Progress Line */}
                        {rowProgress && (
                          <tr className="p-0 m-0 border-0 pointer-events-none select-none">
                            <td
                              colSpan={visibleLeafColumns.length || 1}
                              className="p-0 m-0 border-b border-border h-[2px] leading-none bg-muted"
                            >
                              <div
                                className={cn(
                                  "h-[2px] transition-all duration-300",
                                  rowProgress.color || "bg-primary"
                                )}
                                style={{
                                  width: `${Math.min(100, Math.max(1, rowProgress.percent < 1 ? 1 : rowProgress.percent))}%`,
                                  minWidth: "4px",
                                }}
                              />
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })
                ) : (
                  <TableRow className="hover:bg-transparent">
                    <TableCell
                      colSpan={visibleLeafColumns.length || columns.length || 1}
                      className={cn(
                        "h-24 text-center text-muted-foreground text-sm",
                        classNames?.emptyCell
                      )}
                    >
                      {isLoading
                        ? labels.loadingMessage
                        : (emptyContent ?? (
                            <span className="italic">
                              {labels.emptyMessage}
                            </span>
                          ))}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>

              {/* Optional Footer */}
              {(hasColumnFooters || footerContent) && (
                <TableFooter
                  className={cn(
                    "border-t bg-muted/50 font-medium",
                    stickyHeader && maxHeight && "sticky bottom-0 z-20 bg-muted",
                    classNames?.footer
                  )}
                >
                  {footerContent ? (
                    <TableRow className={classNames?.footerRow}>
                      <TableCell
                        colSpan={visibleLeafColumns.length || 1}
                        className={cn(
                          "px-3 py-2 border-t border-border",
                          classNames?.footerCell
                        )}
                      >
                        {footerContent}
                      </TableCell>
                    </TableRow>
                  ) : (
                    table.getFooterGroups().map((footerGroup) => (
                      <TableRow
                        key={footerGroup.id}
                        className={cn(
                          "hover:bg-transparent border-b-0",
                          classNames?.footerRow
                        )}
                      >
                        {footerGroup.headers.map((header) => {
                          const colId = header.column.id;
                          const pinnedPos = header.column.getIsPinned();
                          const isPinnedLeft = pinnedPos === "left";
                          const isPinnedRight = pinnedPos === "right";
                          const isPinned = isPinnedLeft || isPinnedRight;
                          const isLastLeftPinned =
                            colId === lastLeftPinnedColumnId;
                          const isFirstRightPinned =
                            colId === firstRightPinnedColumnId;
                          const isActionsCol = actionsColumnIds.has(colId);
                          const meta = header.column.columnDef.meta as
                            | FlashTableColumnMeta
                            | undefined;
                          const stickyOffset = stickyOffsets[colId] ?? 0;

                          const footerStyle: CSSProperties = {
                            width: header.getSize(),
                            ...(isPinned
                              ? {
                                  backgroundColor: "var(--muted)",
                                }
                              : {}),
                            ...(isPinnedLeft
                              ? {
                                  position: "sticky",
                                  left: `${stickyOffset}px`,
                                }
                              : {}),
                            ...(isPinnedRight
                              ? {
                                  position: "sticky",
                                  right: `${stickyOffset}px`,
                                }
                              : {}),
                          };

                          return (
                            <TableCell
                              key={header.id}
                              style={footerStyle}
                              className={cn(
                                "whitespace-nowrap overflow-hidden text-ellipsis font-medium border-t border-border",
                                isPinned ? "sticky bg-muted z-20" : "bg-muted",
                                density === "ultra-compact" && "py-1 px-2 text-xs",
                                density === "compact" && "py-1 px-3 text-sm",
                                density === "comfortable" && "py-2 px-3 text-sm",
                                (isActionsCol || meta?.align === "right") &&
                                  "text-right",
                                meta?.align === "center" && "text-center",
                                isLastLeftPinned && "border-r border-border",
                                isFirstRightPinned && "border-l border-border",
                                classNames?.footerCell,
                                meta?.footerClassName
                              )}
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.footer,
                                    header.getContext()
                                  )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))
                  )}
                </TableFooter>
              )}
            </table>
          </DndContext>
        </div>

        {/* Right-click Context Menu */}
        {enableContextMenu && (
          <FlashTableContextMenu
            position={contextMenu}
            onClose={() => setContextMenu(null)}
            table={table}
            density={density}
            onDensityChange={onDensityChange}
            showDensityToggle={showDensityToggle}
            pinActionsColumnRight={pinActionsColumnRight}
            pinLastColumnRight={pinLastColumnRight}
            enableColumnPinning={enableColumnPinning}
            enableColumnVisibility={enableColumnVisibility}
            isCustomized={isCustomized}
            onReset={resetToDefaults}
            labels={labels}
          />
        )}
      </div>
    </TooltipProvider>
  );
}

FlashTable.displayName = "FlashTable";

export {
  FlashTableColumnManager,
  type FlashTableColumnManagerProps,
  FlashTableToolbar,
  type FlashTableToolbarProps,
  FlashTableContextMenu,
  type FlashTableContextMenuProps,
  type ContextMenuPosition,
  FlashTableHeaderCell,
  type FlashTableHeaderCellProps,
  FlashTableHelpDialog,
  type FlashTableHelpDialogProps,
  useFlashTablePersistence,
  DEFAULT_FLASH_TABLE_LABELS,
};

export * from "./flash-table.types";
export * from "./flash-table.utils";
