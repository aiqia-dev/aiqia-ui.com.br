export interface AsyncSelectProps<T> {
    /** Options */
    options: T[];
    /** Fech loading */
    isLoading: boolean;
    /** Function to render each option */
    renderOption: (option: T) => React.ReactNode;
    /** Function to get the value from an option */
    getOptionValue: (option: T) => string;
    /** Function to get the display value for the selected option */
    getDisplayValue: (option: T) => React.ReactNode;
    /** Currently selected value */
    value?: string;
    /** Callback when selection changes */
    onChange: (value: string) => void;
    /** Callback when search term changes */
    onSearchChange: (value: string) => void;
    /** Label for the select field */
    label: string;
    /** Placeholder text when no selection */
    placeholder?: string;
    /** Disable the entire select */
    disabled?: boolean;
    /** Custom width for the popover */
    width?: string | number;
    /** Custom class names */
    className?: string;
    /** Custom trigger button class names */
    triggerClassName?: string;
    /** Custom no results message */
    noResultsMessage?: string;
    /** Allow clearing the selection */
    clearable?: boolean;
    /** Error message */
    error?: string;
}
export declare function AsyncSelect<T>({ options, isLoading, renderOption, getOptionValue, getDisplayValue, label, placeholder, value, onChange, onSearchChange, disabled, triggerClassName, noResultsMessage, clearable, error, }: AsyncSelectProps<T>): import("react/jsx-runtime").JSX.Element;
