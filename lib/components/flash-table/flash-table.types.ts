import type {
  CellContext,
  Column,
  ColumnDef,
  ColumnOrderState,
  ColumnPinningPosition,
  ColumnPinningState,
  ColumnSizingState,
  ExpandedState,
  Header,
  HeaderContext,
  OnChangeFn,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  Table,
  Updater,
  VisibilityState,
} from "@tanstack/react-table";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

// Re-export common TanStack Table types for consumer convenience
// Note: TanStack's Table type is exported as TanStackTable / FlashTableInstance to avoid colliding with the Table UI component
export type {
  CellContext,
  Column,
  ColumnDef,
  ColumnOrderState,
  ColumnPinningPosition,
  ColumnPinningState,
  ColumnSizingState,
  ExpandedState,
  Header,
  HeaderContext,
  OnChangeFn,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  Table as FlashTableInstance,
  Table as TanStackTable,
  Updater,
  VisibilityState,
};

export type FlashTableDensity = "ultra-compact" | "compact" | "comfortable";

export type FlashTableLoadingMode = "auto" | "overlay" | "skeleton";

export interface FlashTableColumnMeta {
  /** Human-readable column label used in the column manager and context menu */
  label?: string;
  /** Marks this column as the actions column (auto-pinned to the right) */
  isActions?: boolean;
  /** Default pin side when the table initializes */
  defaultPinned?: "left" | "right" | false;
  /** Whether the user can pin/unpin this column */
  enablePinning?: boolean;
  /** Whether the user can drag-and-drop reorder this column */
  enableReordering?: boolean;
  /** Text alignment for header, cells, and footer */
  align?: "left" | "center" | "right";
  /** Custom className applied to header cell */
  headerClassName?: string;
  /** Custom className applied to body cells */
  cellClassName?: string;
  /** Custom className applied to footer cell */
  footerClassName?: string;
  /** Optional tooltip description shown on the column header */
  headerTooltip?: string;
  /** Whether text in cells of this column should wrap instead of truncating/nowrap */
  wrap?: boolean;
}

export interface FlashTablePersistedState {
  columnOrder: ColumnOrderState;
  columnVisibility: VisibilityState;
  columnPinning: ColumnPinningState;
  columnSizing: ColumnSizingState;
  density: FlashTableDensity;
}

export interface FlashTableRowProgress {
  /** Progress percentage from 0 to 100 */
  percent: number;
  /** Optional Tailwind background class or CSS color (e.g. 'bg-emerald-500' or '#10b981') */
  color?: string;
}

export interface FlashTableClassNames {
  root?: string;
  toolbar?: string;
  selectionBar?: string;
  viewport?: string;
  table?: string;
  header?: string;
  headerRow?: string;
  headerCell?: string;
  body?: string;
  row?: string;
  expandedRow?: string;
  cell?: string;
  footer?: string;
  footerRow?: string;
  footerCell?: string;
  emptyCell?: string;
}

export interface FlashTableLabels {
  totalRecords: string;
  hiddenColumnSingular: string;
  hiddenColumnPlural: string;
  columnsButton: string;
  customizeColumnsTitle: string;
  showAllColumns: string;
  resetToDefault: string;
  resetToDefaultTooltip: string;
  helpButtonTooltip: string;
  helpModalTitle: string;
  helpModalDescription: string;
  searchColumnsPlaceholder: string;
  noColumnsFound: string;
  columnManagerFooterHint: string;
  densityLabel: string;
  densityUltraCompact: string;
  densityCompact: string;
  densityComfortable: string;
  pinLeft: string;
  pinRight: string;
  unpin: string;
  pinnedLeftBadge: string;
  pinnedRightBadge: string;
  emptyMessage: string;
  loadingMessage: string;
  selectedItemsCount: (count: number) => string;
  clearSelection: string;
  selectAllRows: string;
  selectRow: (rowId: string) => string;
  expandRow: string;
  collapseRow: string;
  scrollLeft: string;
  scrollRight: string;
  resetColumnWidth: string;
}

export interface FlashTableStorageAdapter {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

export interface FlashTableProps<TData, TValue = unknown> {
  /** Column definitions powered by @tanstack/react-table */
  columns: ColumnDef<TData, TValue>[];
  /** Dataset array to render */
  data: TData[];
  /** Total number of records (for server-paginated lists; defaults to data.length when omitted) */
  totalRecords?: number;

  // --- Persistence & Identity ---
  /**
   * Unique identifier used to persist column order, visibility, pinning, sizing, and density.
   * When omitted, a deterministic key is generated from the current route and column IDs.
   */
  tableId?: string;
  /** Whether to persist user layout customizations in storage (default: true) */
  persistState?: boolean;
  /** Optional user/tenant scope identifier for isolating persisted states per user */
  storageScope?: string;
  /** Optional prefix for storage keys (default: 'aiqia-ui:flash-table:v1') */
  storagePrefix?: string;
  /** Optional custom storage adapter (defaults to window.localStorage) */
  storage?: FlashTableStorageAdapter;

  // --- Loading & Empty States ---
  /** Whether data is currently loading */
  isLoading?: boolean;
  /** How loading state is displayed: 'auto' (skeleton when empty, overlay when populated), 'overlay', or 'skeleton' (default: 'auto') */
  loadingMode?: FlashTableLoadingMode;
  /** Number of skeleton rows to render when loading in skeleton mode (default: 5) */
  skeletonRowsCount?: number;
  /** Custom message displayed when there are no rows */
  emptyMessage?: string;
  /** Custom ReactNode rendered when there are no rows (overrides emptyMessage) */
  emptyContent?: ReactNode;

  // --- Row Selection ---
  /** Controlled row selection state ({ [rowId]: boolean }) */
  rowSelection?: RowSelectionState;
  /** Callback when row selection state changes */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  /** Convenience callback receiving the actual selected TData items whenever selection changes */
  onSelectedRowsChange?: (selectedRows: TData[]) => void;
  /** Enables or restricts row selection (boolean or row predicate) */
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /** Automatically injects a checkbox selection column on the left when true (defaults to true when enableRowSelection, onRowSelectionChange, onSelectedRowsChange or renderBulkActions is provided) */
  showSelectionColumn?: boolean;
  /** Predicate to determine if a specific row can be selected */
  isRowSelectable?: (row: TData) => boolean;
  /** Tooltip/title shown when hovering a disabled selection checkbox */
  selectionDisabledReason?: string;
  /** Custom actions rendered in the selection banner/toolbar when 1+ rows are selected */
  renderBulkActions?: (
    selectedRows: TData[],
    clearSelection: () => void
  ) => ReactNode;

  // --- Row Expansion / Sub-components ---
  /** Controlled expanded rows state */
  expanded?: ExpandedState;
  /** Callback when expanded state changes */
  onExpandedChange?: OnChangeFn<ExpandedState>;
  /** Function to extract sub-rows for hierarchical tree tables */
  getSubRows?: (originalRow: TData, index: number) => TData[] | undefined;
  /** Predicate to determine if a row can be expanded (defaults to true when renderSubComponent is provided) */
  getRowCanExpand?: (row: Row<TData>) => boolean;
  /** Renders a custom detail panel below an expanded row */
  renderSubComponent?: (props: { row: Row<TData>; data: TData }) => ReactNode;
  /** Automatically injects an expand/collapse toggle column on the left when renderSubComponent is provided (default: true) */
  showExpandColumn?: boolean;
  /** Toggles row expansion when clicking anywhere on the row (default: false) */
  expandOnRowClick?: boolean;

  // --- Sorting ---
  /** Enables column sorting (default: true) */
  enableSorting?: boolean;
  /** Enables multi-column sorting when holding Shift (default: true) */
  enableMultiSort?: boolean;
  /** Controlled sorting state */
  sorting?: SortingState;
  /** Callback when sorting changes */
  onSortingChange?: OnChangeFn<SortingState>;
  /** Enables server-side manual sorting (default: false) */
  manualSorting?: boolean;

  // --- Column Customization (Visibility, Sizing, Order, Pinning) ---
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
  columnSizing?: ColumnSizingState;
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;
  columnOrder?: ColumnOrderState;
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;
  columnPinning?: ColumnPinningState;
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;
  /** Automatically pins the actions column ('actions') to the right edge (default: true) */
  pinActionsColumnRight?: boolean;
  /** Pins the last column of the table to the right edge even if its id is not 'actions' (default: false) */
  pinLastColumnRight?: boolean;
  /** Column IDs pinned to the left by default */
  defaultPinnedLeft?: string[];
  /** Column IDs pinned to the right by default */
  defaultPinnedRight?: string[];
  /** Enables drag-and-drop column reordering on headers and column manager (default: true) */
  enableColumnOrdering?: boolean;
  /** Enables pinning/unpinning columns to the left or right (default: true) */
  enableColumnPinning?: boolean;
  /** Enables hiding/showing columns (default: true) */
  enableColumnVisibility?: boolean;
  /** Enables resizing column widths by dragging header edges (default: true) */
  enableColumnResizing?: boolean;
  /** Enables right-click context menu on the table (default: true) */
  enableContextMenu?: boolean;

  // --- Toolbar ---
  /** Shows the compact top control bar (default: true) */
  showToolbar?: boolean;
  /** Shows the total records counter on the left side of the toolbar (default: true) */
  showTotalRecords?: boolean;
  /** Shows the density switcher in the toolbar (default: true) */
  showDensityToggle?: boolean;
  /** Shows the table tips/help modal button in the toolbar (default: true) */
  showHelpButton?: boolean;
  /** Optional custom content rendered on the left side of the toolbar */
  toolbarLeftContent?: ReactNode;
  /** Optional custom content rendered on the right side of the toolbar */
  toolbarRightContent?: ReactNode;

  // --- Layout, Appearance & Styling ---
  /** Visual density of the table. Defaults to 'compact'. */
  density?: FlashTableDensity;
  /** Callback when density changes */
  onDensityChange?: (density: FlashTableDensity) => void;
  /** CSS table-layout mode (default: 'fixed') */
  tableLayout?: "fixed" | "auto";
  /** Applies subtle alternating row background colors (default: false) */
  striped?: boolean;
  /** Highlights rows on hover (default: true) */
  hoverable?: boolean;
  /** Keeps the table header sticky at the top when scrolling vertically (default: true) */
  stickyHeader?: boolean;
  /** Optional maximum height for vertical scrolling with sticky header (e.g. '600px' or 600) */
  maxHeight?: string | number;
  /** Custom className for the root container */
  className?: string;
  /** Granular className overrides for internal sub-elements */
  classNames?: FlashTableClassNames;
  /** Inline style for the root container */
  style?: CSSProperties;

  // --- Row & Footer Callbacks ---
  /** Function to extract a unique row ID (e.g. (row) => row.uuid) */
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
  /** Row click handler */
  onRowClick?: (row: TData, event: MouseEvent<HTMLTableRowElement>) => void;
  /** Row double-click handler */
  onRowDoubleClick?: (
    row: TData,
    event: MouseEvent<HTMLTableRowElement>
  ) => void;
  /** Dynamic className per row based on row data */
  rowClassName?: (row: TData, index: number) => string;
  /** Horizontal progress bar rendered at the bottom edge of each row (0 to 100%) */
  renderRowProgress?: (row: TData) => FlashTableRowProgress | null;
  /** Custom footer content rendered inside <TableFooter> */
  footerContent?: ReactNode;
  /** Exposes the underlying TanStack Table instance to parent components if needed */
  onTableReady?: (table: Table<TData>) => void;
  /** Customizable UI labels / translations */
  labels?: Partial<FlashTableLabels>;
}
