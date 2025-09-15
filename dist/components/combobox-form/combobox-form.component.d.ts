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
    disabled?: boolean;
    isLoading?: boolean;
};
export declare function ComboboxForm({ name, label, options, placeholder, searchPlaceholder, emptyMessage, disabled, isLoading }: ComboboxFormProps): import("react/jsx-runtime").JSX.Element;
