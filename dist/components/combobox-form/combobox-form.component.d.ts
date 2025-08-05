export type ComboboxFormOption = {
    value: string;
    label: string;
};
export type ComboboxFormProps = {
    name: string;
    label: string;
    options: ComboboxFormOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
};
export declare function ComboboxForm({ name, label, options, placeholder, searchPlaceholder, emptyMessage, }: ComboboxFormProps): import("react/jsx-runtime").JSX.Element;
