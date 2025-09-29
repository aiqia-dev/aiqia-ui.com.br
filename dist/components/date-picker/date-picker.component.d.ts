import { DayPickerProps } from 'react-day-picker';
export interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    disabledDates?: DayPickerProps["disabled"];
}
export declare function DatePicker({ value, onChange, disabled, disabledDates }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
