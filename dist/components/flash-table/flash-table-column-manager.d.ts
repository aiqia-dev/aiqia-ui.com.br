import { Table } from '@tanstack/react-table';
import { ReactNode } from 'react';
import { FlashTableDensity, FlashTableLabels } from './flash-table.types';
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
export declare function FlashTableColumnManager<TData>({ table, pinActionsColumnRight, pinLastColumnRight, enableColumnOrdering, enableColumnPinning, enableColumnVisibility, isCustomized, onReset, labels, }: FlashTableColumnManagerProps<TData>): import("react").JSX.Element;
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
export declare function FlashTableToolbar<TData>({ table, totalRecords, showTotalRecords, showDensityToggle, showHelpButton, density, onDensityChange, pinActionsColumnRight, pinLastColumnRight, enableColumnOrdering, enableColumnPinning, enableColumnVisibility, isCustomized, onReset, canScrollLeft, canScrollRight, onScrollHorizontal, toolbarLeftContent, toolbarRightContent, labels, className, }: FlashTableToolbarProps<TData>): import("react").JSX.Element;
