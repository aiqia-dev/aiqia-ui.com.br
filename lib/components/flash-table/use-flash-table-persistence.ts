import type {
  ColumnDef,
  ColumnOrderState,
  ColumnPinningState,
  ColumnSizingState,
  OnChangeFn,
  Updater,
  VisibilityState,
} from "@tanstack/react-table";
import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  FlashTableDensity,
  FlashTablePersistedState,
  FlashTableStorageAdapter,
} from "./flash-table.types";
import {
  buildDefaultPinning,
  extractColumnId,
  isSameArray,
  isSystemLeftColumnId,
  reconcileColumnOrder,
  resolveStorageScope,
} from "./flash-table.utils";

export interface UseFlashTablePersistenceOptions<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  tableId?: string;
  persistState: boolean;
  storageScope?: string;
  storagePrefix?: string;
  storage?: FlashTableStorageAdapter;
  defaultDensity: FlashTableDensity;
  pinActionsColumnRight: boolean;
  pinLastColumnRight: boolean;
  defaultPinnedLeft?: string[];
  defaultPinnedRight?: string[];
  propColumnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
  propColumnSizing?: ColumnSizingState;
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;
  propColumnOrder?: ColumnOrderState;
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;
  propColumnPinning?: ColumnPinningState;
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;
  propDensity?: FlashTableDensity;
  onDensityChange?: (density: FlashTableDensity) => void;
}

function resolveUpdater<T>(updater: Updater<T>, previous: T): T {
  return typeof updater === "function"
    ? (updater as (old: T) => T)(previous)
    : updater;
}

export function useFlashTablePersistence<TData, TValue>({
  columns,
  tableId,
  persistState,
  storageScope,
  storagePrefix = "aiqia-ui:flash-table:v1",
  storage,
  defaultDensity,
  pinActionsColumnRight,
  pinLastColumnRight,
  defaultPinnedLeft,
  defaultPinnedRight,
  propColumnVisibility,
  onColumnVisibilityChange,
  propColumnSizing,
  onColumnSizingChange,
  propColumnOrder,
  onColumnOrderChange,
  propColumnPinning,
  onColumnPinningChange,
  propDensity,
  onDensityChange,
}: UseFlashTablePersistenceOptions<TData, TValue>) {
  const defaultColumnOrder = useMemo<ColumnOrderState>(
    () => columns.map((col, idx) => extractColumnId(col, idx)),
    [columns]
  );

  const defaultColumnPinning = useMemo<ColumnPinningState>(
    () =>
      buildDefaultPinning(columns, {
        pinActionsColumnRight,
        pinLastColumnRight,
        defaultPinnedLeft,
        defaultPinnedRight,
      }),
    [
      columns,
      pinActionsColumnRight,
      pinLastColumnRight,
      defaultPinnedLeft,
      defaultPinnedRight,
    ]
  );

  const storageAdapter = useMemo<FlashTableStorageAdapter | null>(() => {
    if (storage) return storage;
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage;
    }
    return null;
  }, [storage]);

  const storageKey = useMemo(() => {
    const scope = resolveStorageScope(storageScope);
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "app";
    const idPart = tableId || `${pathname}::${defaultColumnOrder.join("|")}`;
    return `${storagePrefix}:${scope}:${idPart}`;
  }, [tableId, defaultColumnOrder, storageScope, storagePrefix]);

  const loadInitialState = useCallback((): FlashTablePersistedState => {
    const fallbackLeft = defaultColumnPinning.left ?? [];
    const fallbackRight = defaultColumnPinning.right ?? [];
    const fallbackPinnedSet = new Set([...fallbackLeft, ...fallbackRight]);
    const fallbackOrder = [
      ...fallbackLeft,
      ...defaultColumnOrder.filter((id) => !fallbackPinnedSet.has(id)),
      ...fallbackRight,
    ];

    const fallback: FlashTablePersistedState = {
      columnOrder: fallbackOrder,
      columnVisibility: {},
      columnPinning: defaultColumnPinning,
      columnSizing: {},
      density: defaultDensity,
    };

    if (!persistState || !storageAdapter) {
      return fallback;
    }

    try {
      const raw = storageAdapter.getItem(storageKey);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw) as Partial<FlashTablePersistedState>;
      const validIds = new Set(defaultColumnOrder);

      const reconciledOrder = reconcileColumnOrder(
        Array.isArray(parsed.columnOrder) ? parsed.columnOrder : [],
        defaultColumnOrder
      );

      const savedLeft = Array.isArray(parsed.columnPinning?.left)
        ? parsed.columnPinning.left.filter((id) => validIds.has(id))
        : (defaultColumnPinning.left ?? []);

      const savedRight = Array.isArray(parsed.columnPinning?.right)
        ? parsed.columnPinning.right.filter((id) => validIds.has(id))
        : (defaultColumnPinning.right ?? []);

      const mergedLeft = Array.from(
        new Set([
          ...(defaultColumnPinning.left ?? []).filter(isSystemLeftColumnId),
          ...savedLeft,
        ])
      );

      const mergedRight = Array.from(
        new Set([...savedRight, ...(defaultColumnPinning.right ?? [])])
      );

      const pinnedSet = new Set([...mergedLeft, ...mergedRight]);
      const centerOrder = reconciledOrder.filter((id) => !pinnedSet.has(id));
      const normalizedOrder = [...mergedLeft, ...centerOrder, ...mergedRight];

      return {
        columnOrder: normalizedOrder,
        columnVisibility:
          parsed.columnVisibility && typeof parsed.columnVisibility === "object"
            ? parsed.columnVisibility
            : {},
        columnPinning: {
          left: mergedLeft,
          right: mergedRight,
        },
        columnSizing:
          parsed.columnSizing && typeof parsed.columnSizing === "object"
            ? parsed.columnSizing
            : {},
        density:
          parsed.density === "ultra-compact" ||
          parsed.density === "compact" ||
          parsed.density === "comfortable"
            ? parsed.density
            : defaultDensity,
      };
    } catch {
      return fallback;
    }
  }, [
    defaultColumnOrder,
    defaultColumnPinning,
    defaultDensity,
    persistState,
    storageAdapter,
    storageKey,
  ]);

  const [internalState, setInternalState] =
    useState<FlashTablePersistedState>(loadInitialState);

  // Sync if columns definition changes dynamically
  useEffect(() => {
    setInternalState((prev) => {
      const nextOrder = reconcileColumnOrder(
        prev.columnOrder,
        defaultColumnOrder
      );
      const validIds = new Set(defaultColumnOrder);
      const nextRight = Array.from(
        new Set([
          ...(prev.columnPinning.right ?? []).filter((id) => validIds.has(id)),
          ...(defaultColumnPinning.right ?? []),
        ])
      );
      const nextLeft = Array.from(
        new Set([
          ...(defaultColumnPinning.left ?? []).filter(isSystemLeftColumnId),
          ...(prev.columnPinning.left ?? []).filter((id) => validIds.has(id)),
        ])
      );

      if (
        isSameArray(nextOrder, prev.columnOrder) &&
        isSameArray(nextLeft, prev.columnPinning.left) &&
        isSameArray(nextRight, prev.columnPinning.right)
      ) {
        return prev;
      }

      return {
        ...prev,
        columnOrder: nextOrder,
        columnPinning: {
          left: nextLeft,
          right: nextRight,
        },
      };
    });
  }, [defaultColumnOrder, defaultColumnPinning]);

  const columnVisibility =
    propColumnVisibility ?? internalState.columnVisibility;
  const columnSizing = propColumnSizing ?? internalState.columnSizing;
  const columnOrder = propColumnOrder ?? internalState.columnOrder;
  const columnPinning = propColumnPinning ?? internalState.columnPinning;
  const density = propDensity ?? internalState.density;

  // Save to storage whenever persisted state changes
  useEffect(() => {
    if (!persistState || !storageAdapter) return;
    try {
      const payload: FlashTablePersistedState = {
        columnOrder,
        columnVisibility,
        columnPinning,
        columnSizing,
        density,
      };
      storageAdapter.setItem(storageKey, JSON.stringify(payload));
    } catch {
      // Ignore quota or private browsing errors
    }
  }, [
    persistState,
    storageAdapter,
    storageKey,
    columnOrder,
    columnVisibility,
    columnPinning,
    columnSizing,
    density,
  ]);

  const handleColumnVisibilityChange: OnChangeFn<VisibilityState> = useCallback(
    (updater) => {
      onColumnVisibilityChange?.(updater);
      setInternalState((prev) => ({
        ...prev,
        columnVisibility: resolveUpdater(updater, prev.columnVisibility),
      }));
    },
    [onColumnVisibilityChange]
  );

  const handleColumnSizingChange: OnChangeFn<ColumnSizingState> = useCallback(
    (updater) => {
      onColumnSizingChange?.(updater);
      setInternalState((prev) => ({
        ...prev,
        columnSizing: resolveUpdater(updater, prev.columnSizing),
      }));
    },
    [onColumnSizingChange]
  );

  const handleColumnOrderChange: OnChangeFn<ColumnOrderState> = useCallback(
    (updater) => {
      onColumnOrderChange?.(updater);
      setInternalState((prev) => ({
        ...prev,
        columnOrder: resolveUpdater(updater, prev.columnOrder),
      }));
    },
    [onColumnOrderChange]
  );

  const handleColumnPinningChange: OnChangeFn<ColumnPinningState> = useCallback(
    (updater) => {
      onColumnPinningChange?.(updater);
      setInternalState((prev) => {
        const nextPinning = resolveUpdater(updater, prev.columnPinning);
        const leftIds = nextPinning.left ?? [];
        const rightIds = nextPinning.right ?? [];
        const pinnedSet = new Set([...leftIds, ...rightIds]);
        const baseOrder =
          prev.columnOrder.length > 0 ? prev.columnOrder : defaultColumnOrder;
        const centerIds = baseOrder.filter((id) => !pinnedSet.has(id));
        const syncedOrder = [...leftIds, ...centerIds, ...rightIds];

        return {
          ...prev,
          columnPinning: nextPinning,
          columnOrder: syncedOrder,
        };
      });
    },
    [onColumnPinningChange, defaultColumnOrder]
  );

  const handleDensityChange = useCallback(
    (nextDensity: FlashTableDensity) => {
      onDensityChange?.(nextDensity);
      setInternalState((prev) => ({
        ...prev,
        density: nextDensity,
      }));
    },
    [onDensityChange]
  );

  const isCustomized = useMemo(() => {
    const hasHiddenCols = Object.values(columnVisibility).some(
      (visible) => visible === false
    );
    const hasCustomOrder = !isSameArray(columnOrder, defaultColumnOrder);
    const hasCustomLeftPin = !isSameArray(
      columnPinning.left ?? [],
      defaultColumnPinning.left ?? []
    );
    const hasCustomRightPin = !isSameArray(
      columnPinning.right ?? [],
      defaultColumnPinning.right ?? []
    );
    const hasCustomSizing = Object.keys(columnSizing).length > 0;
    const hasCustomDensity = density !== defaultDensity;

    return (
      hasHiddenCols ||
      hasCustomOrder ||
      hasCustomLeftPin ||
      hasCustomRightPin ||
      hasCustomSizing ||
      hasCustomDensity
    );
  }, [
    columnVisibility,
    columnOrder,
    defaultColumnOrder,
    columnPinning,
    defaultColumnPinning,
    columnSizing,
    density,
    defaultDensity,
  ]);

  const resetToDefaults = useCallback(() => {
    const cleanState: FlashTablePersistedState = {
      columnOrder: defaultColumnOrder,
      columnVisibility: {},
      columnPinning: defaultColumnPinning,
      columnSizing: {},
      density: defaultDensity,
    };
    setInternalState(cleanState);
    onColumnVisibilityChange?.({});
    onColumnOrderChange?.(defaultColumnOrder);
    onColumnPinningChange?.(defaultColumnPinning);
    onColumnSizingChange?.({});
    onDensityChange?.(defaultDensity);

    if (persistState && storageAdapter) {
      try {
        storageAdapter.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  }, [
    defaultColumnOrder,
    defaultColumnPinning,
    defaultDensity,
    onColumnOrderChange,
    onColumnPinningChange,
    onColumnSizingChange,
    onColumnVisibilityChange,
    onDensityChange,
    persistState,
    storageAdapter,
    storageKey,
  ]);

  return {
    columnVisibility,
    onColumnVisibilityChange: handleColumnVisibilityChange,
    columnSizing,
    onColumnSizingChange: handleColumnSizingChange,
    columnOrder,
    onColumnOrderChange: handleColumnOrderChange,
    columnPinning,
    onColumnPinningChange: handleColumnPinningChange,
    density,
    onDensityChange: handleDensityChange,
    defaultColumnOrder,
    defaultColumnPinning,
    isCustomized,
    resetToDefaults,
  };
}
