export type ComboboxOption = {
    value: string;
    label: string;
};
export type ComboBoxProps = {
    label?: string;
    options: ComboboxOption[];
    selected: string | undefined;
    onSelect: (value: string | undefined) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    error?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
};
export declare function Combobox({ label, options, selected, onSelect, placeholder, searchPlaceholder, emptyMessage, error, isDisabled, isLoading }: ComboBoxProps): import("react/jsx-runtime").JSX.Element;
