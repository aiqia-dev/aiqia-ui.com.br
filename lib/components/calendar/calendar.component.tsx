import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";

import { cn } from "../../utils/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ptBR}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
