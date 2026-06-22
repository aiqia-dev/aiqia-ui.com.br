import { DatePickerProps } from '..';
export type DatePickerFormProps = {
    name: string;
    label?: string;
} & Omit<DatePickerProps, "value" | "onChange">;
export declare const DatePickerForm: ({ name, label, ...props }: DatePickerFormProps) => import("react").JSX.Element;
