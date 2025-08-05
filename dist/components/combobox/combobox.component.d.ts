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
};
export declare function Combobox({ label, options, selected, onSelect, placeholder, searchPlaceholder, emptyMessage, error, }: ComboBoxProps): import("react/jsx-runtime").JSX.Element;
