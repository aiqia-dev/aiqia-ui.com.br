export type SelectFormProps = {
    name: string;
    options: {
        value: string;
        label: string;
    }[];
    label?: string;
    placeholder?: string;
    helpText?: string;
    disabled?: boolean;
    isLoading?: boolean;
};
export declare const SelectForm: ({ name, label, placeholder, options, helpText, isLoading, ...props }: SelectFormProps) => import("react/jsx-runtime").JSX.Element;
