import { DateTimePickerProps } from '..';
export type DateTimePickerFormProps = {
    name: string;
    label?: string;
} & Omit<DateTimePickerProps, "value" | "onChange">;
export declare const DateTimePickerForm: ({ name, label, ...props }: DateTimePickerFormProps) => import("react").JSX.Element;
