import { Header } from '@tanstack/react-table';
import { FlashTableDensity, FlashTableLabels } from './flash-table.types';
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
    onRegisterHeaderElement: (columnId: string, element: HTMLTableCellElement | null) => void;
}
export declare function FlashTableHeaderCell<TData, TValue>({ header, density, enableColumnOrdering, enableColumnPinning, enableColumnResizing, isActionsCol, isSystemLeftCol, pinnedPosition, stickyOffset, isLastLeftPinned, isFirstRightPinned, canScrollLeft, canScrollRight, labels, className, onRegisterHeaderElement, }: FlashTableHeaderCellProps<TData, TValue>): import("react").JSX.Element;
