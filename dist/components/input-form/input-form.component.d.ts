import { InputProps } from '..';
export type InputFormProps = {
    name: string;
    label?: string;
    placeholder?: string;
    mask?: string;
} & InputProps;
export declare const InputForm: ({ name, label, placeholder, mask, ...props }: InputFormProps) => import("react/jsx-runtime").JSX.Element;
