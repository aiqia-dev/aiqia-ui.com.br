import { Column, ColumnDef, ColumnOrderState, ColumnPinningState } from '@tanstack/react-table';
import { FlashTableLabels } from './flash-table.types';
export declare const DEFAULT_FLASH_TABLE_LABELS: FlashTableLabels;
export declare function resolveStorageScope(explicitScope?: string): string;
export declare function extractColumnId<TData, TValue>(col: ColumnDef<TData, TValue>, index: number): string;
export declare function isSelectionColumnId(columnId: string): boolean;
export declare function isExpansionColumnId(columnId: string): boolean;
export declare function isSystemLeftColumnId(columnId: string): boolean;
export declare function isActionsColumnId(columnId: string): boolean;
export declare function isActionsColumnDef<TData, TValue>(columnId: string, columnDef: ColumnDef<TData, TValue>, isLastColumn: boolean, pinActionsColumnRight: boolean, pinLastColumnRight: boolean): boolean;
export declare function getColumnLabel<TData, TValue = unknown>(column: Column<TData, TValue>): string;
export declare function buildDefaultPinning<TData, TValue>(columns: ColumnDef<TData, TValue>[], options: {
    pinActionsColumnRight: boolean;
    pinLastColumnRight: boolean;
    defaultPinnedLeft?: string[];
    defaultPinnedRight?: string[];
}): ColumnPinningState;
export declare function reconcileColumnOrder(savedOrder: ColumnOrderState, defaultOrder: ColumnOrderState): ColumnOrderState;
export declare function isSameArray(a?: string[], b?: string[]): boolean;
