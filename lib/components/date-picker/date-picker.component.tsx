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
import { DayPickerProps } from "react-day-picker";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  disabledDates?: DayPickerProps["disabled"]
}

export function DatePicker({ value, onChange, disabled, disabledDates }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);

  function handleSelect(date: Date | undefined) {
    setDate(date);
    onChange?.(date);
  }

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
            {date ? (
              format(date, "PPP", { locale: ptBR })
            ) : (
              <span>Selecione uma data</span>
            )}
          </div>

          <ChevronDown className="shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          required
          mode="single"
          selected={date}
          onSelect={handleSelect}
          disabled={disabledDates}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
