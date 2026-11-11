import { Table } from '@tanstack/react-table';
import { FlashTableDensity, FlashTableLabels } from './flash-table.types';
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
export declare function FlashTableContextMenu<TData>({ position, onClose, table, density, onDensityChange, showDensityToggle, pinActionsColumnRight, pinLastColumnRight, enableColumnPinning, enableColumnVisibility, isCustomized, onReset, labels, }: FlashTableContextMenuProps<TData>): import("react").JSX.Element | null;
