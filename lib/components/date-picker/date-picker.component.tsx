"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";

import { cn } from "../../utils/utils";
import { Button } from "../button/button.component";
import { Calendar } from "../calendar/calendar.component";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover.component";
import { ptBR } from "date-fns/locale";
import { DateRange, DayPicker, DayPickerProps } from "react-day-picker";

export type DatePickerProps = {
  value?: Date | DateRange;
  onChange?: (date: any) => void;
  disabled?: boolean;
  disabledDates?: DayPickerProps["disabled"];
} & React.ComponentProps<typeof DayPicker>;

export function DatePicker({
  value,
  onChange,
  disabled,
  disabledDates,
  mode = "single",
  ...props
}: DatePickerProps) {
  const [date, setDate] = React.useState<any>(value);

  function handleSelect(newDate: any) {
    setDate(newDate);
    onChange?.(newDate);
  }

  const renderValue = () => {
    if (!date) return <span>Selecione uma data</span>;

    if (mode === "range") {
      const range = date as DateRange;
      if (range.from) {
        if (range.to) {
          return (
            <>
              {format(range.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
              {format(range.to, "dd/MM/yyyy", { locale: ptBR })}
            </>
          );
        }
        return format(range.from, "dd/MM/yyyy", { locale: ptBR });
      }
      return <span>Selecione uma data</span>;
    }

    return format(date as Date, "PPP", { locale: ptBR });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal hover:bg-input bg-input",
            !date && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <div className="flex">
            <CalendarIcon className="mr-2" />
            {renderValue()}
          </div>

          <ChevronDown className="shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode={mode as any}
          selected={date}
          onSelect={handleSelect}
          disabled={disabledDates}
          defaultMonth={date?.from}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
