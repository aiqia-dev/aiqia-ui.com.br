import { DayPicker } from 'react-day-picker';
import * as React from "react";
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, showOutsideDays, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
