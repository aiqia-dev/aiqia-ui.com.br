import { DateRange, DayPicker, DayPickerProps } from 'react-day-picker';
import * as React from "react";
export type DatePickerProps = {
    value?: Date | DateRange;
    onChange?: (date: any) => void;
    disabled?: boolean;
    disabledDates?: DayPickerProps["disabled"];
} & React.ComponentProps<typeof DayPicker>;
export declare function DatePicker({ value, onChange, disabled, disabledDates, mode, ...props }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
