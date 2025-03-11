import { CalendarProps } from '..';
import * as React from "react";
type TimePickerType = "minutes" | "seconds" | "hours" | "12hours";
type Period = "AM" | "PM";
interface TimePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    picker: TimePickerType;
    date?: Date | null;
    onDateChange?: (date: Date | undefined) => void;
    period?: Period;
    onRightFocus?: () => void;
    onLeftFocus?: () => void;
}
declare const TimePickerInput: React.ForwardRefExoticComponent<TimePickerInputProps & React.RefAttributes<HTMLInputElement>>;
interface TimePickerProps {
    date?: Date | null;
    onChange?: (date: Date | undefined) => void;
    hourCycle?: 12 | 24;
    /**
     * Determines the smallest unit that is displayed in the datetime picker.
     * Default is 'second'.
     * */
    granularity?: Granularity;
}
interface TimePickerRef {
    minuteRef: HTMLInputElement | null;
    hourRef: HTMLInputElement | null;
    secondRef: HTMLInputElement | null;
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<TimePickerRef>>;
type Granularity = "day" | "hour" | "minute" | "second";
type DateTimePickerProps = {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    /** showing `AM/PM` or not. */
    hourCycle?: 12 | 24;
    placeholder?: string;
    /**
     * The year range will be: `This year + yearRange` and `this year - yearRange`.
     * Default is 50.
     * For example:
     * This year is 2024, The year dropdown will be 1974 to 2024 which is generated by `2024 - 50 = 1974` and `2024 + 50 = 2074`.
     * */
    yearRange?: number;
    /**
     * The format is derived from the `date-fns` documentation.
     * @reference https://date-fns.org/v3.6.0/docs/format
     **/
    displayFormat?: {
        hour24?: string;
        hour12?: string;
    };
    /**
     * The granularity prop allows you to control the smallest unit that is displayed by DateTimePicker.
     * By default, the value is `second` which shows all time inputs.
     **/
    granularity?: Granularity;
    className?: string;
    /**
     * Show the default month and time when popup the calendar. Default is the current Date().
     **/
    defaultPopupValue?: Date;
} & Pick<CalendarProps, "locale" | "weekStartsOn" | "showWeekNumber" | "showOutsideDays">;
type DateTimePickerRef = {
    value?: Date;
} & Omit<HTMLButtonElement, "value">;
declare const DateTimePicker: React.ForwardRefExoticComponent<{
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    disabled?: boolean;
    /** showing `AM/PM` or not. */
    hourCycle?: 12 | 24;
    placeholder?: string;
    /**
     * The year range will be: `This year + yearRange` and `this year - yearRange`.
     * Default is 50.
     * For example:
     * This year is 2024, The year dropdown will be 1974 to 2024 which is generated by `2024 - 50 = 1974` and `2024 + 50 = 2074`.
     * */
    yearRange?: number;
    /**
     * The format is derived from the `date-fns` documentation.
     * @reference https://date-fns.org/v3.6.0/docs/format
     **/
    displayFormat?: {
        hour24?: string;
        hour12?: string;
    };
    /**
     * The granularity prop allows you to control the smallest unit that is displayed by DateTimePicker.
     * By default, the value is `second` which shows all time inputs.
     **/
    granularity?: Granularity;
    className?: string;
    /**
     * Show the default month and time when popup the calendar. Default is the current Date().
     **/
    defaultPopupValue?: Date;
} & Pick<import('react-day-picker').DayPickerProps, "showOutsideDays" | "showWeekNumber" | "locale" | "weekStartsOn"> & React.RefAttributes<Partial<DateTimePickerRef>>>;
export { DateTimePicker, TimePickerInput, TimePicker };
export type { TimePickerType, DateTimePickerProps, DateTimePickerRef };
