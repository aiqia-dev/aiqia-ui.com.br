export type TextareaFormProps = {
    name: string;
    label?: string;
    placeholder?: string;
};
declare const TextareaForm: {
    ({ name, label, placeholder, ...props }: TextareaFormProps): import("react").JSX.Element;
    displayName: string;
};
export { TextareaForm };
