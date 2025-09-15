export interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    disabled?: boolean;
}
export declare function DatePicker({ value, onChange, disabled }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
