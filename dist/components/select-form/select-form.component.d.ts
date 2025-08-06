export type SelectFormProps = {
    name: string;
    options: {
        value: string;
        label: string;
    }[];
    label?: string;
    placeholder?: string;
    helpText?: string;
};
export declare const SelectForm: ({ name, label, placeholder, options, helpText, ...props }: SelectFormProps) => import("react/jsx-runtime").JSX.Element;
