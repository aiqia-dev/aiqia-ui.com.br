"use client";

import * as React from "react";
import { format, parse, isValid } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "../../utils/utils";
import { Calendar } from "../calendar/calendar.component";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover.component";
import { DateRange, DayPicker, DayPickerProps } from "react-day-picker";

export type DatePickerProps = {
  value?: Date | DateRange;
  onChange?: (date: any) => void;
  disabled?: boolean;
  disabledDates?: DayPickerProps["disabled"];
} & React.ComponentProps<typeof DayPicker>;

// ---- Mask helpers ----

function applyDateMask(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  let result = "";
  for (let i = 0; i < digits.length && i < 8; i++) {
    if (i === 2 || i === 4) result += "/";
    result += digits[i];
  }
  return result;
}

function applyRangeMask(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  let result = "";
  for (let i = 0; i < digits.length && i < 16; i++) {
    if (i === 2 || i === 4) result += "/";
    if (i === 8) result += " - ";
    if (i === 10 || i === 12) result += "/";
    result += digits[i];
  }
  return result;
}

// ---- Parse helpers ----

function parseSingleDate(str: string): Date | null {
  if (str.length < 10) return null;
  const d = parse(str.slice(0, 10), "dd/MM/yyyy", new Date());
  return isValid(d) ? d : null;
}

function parseRangeInput(str: string): DateRange | null {
  const parts = str.split(" - ");
  const from = parseSingleDate(parts[0] ?? "");
  if (!from) return null;
  const to = parts[1] ? parseSingleDate(parts[1]) : undefined;
  return { from, to: to ?? undefined };
}

// ---- Format helpers ----

function dateToString(d: Date): string {
  return format(d, "dd/MM/yyyy");
}

function valueToInputString(
  value: Date | DateRange | undefined,
  mode: string
): string {
  if (!value) return "";
  if (mode === "range") {
    const r = value as DateRange;
    if (!r.from) return "";
    if (!r.to) return dateToString(r.from);
    return `${dateToString(r.from)} - ${dateToString(r.to)}`;
  }
  return dateToString(value as Date);
}

function getMonthFromValue(value: Date | DateRange | undefined): Date | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value;
  return (value as DateRange).from;
}

// ---- Component ----

export function DatePicker({
  value,
  onChange,
  disabled,
  disabledDates,
  mode = "single",
  captionLayout = 'dropdown',
  ...props
}: DatePickerProps) {
  const [date, setDate] = React.useState<any>(value);
  const [calendarMonth, setCalendarMonth] = React.useState<Date | undefined>(
    getMonthFromValue(value)
  );
  const [inputValue, setInputValue] = React.useState<string>(
    valueToInputString(value, mode as string)
  );
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  /**
   * Tracks the last valid input string, used to restore on blur
   * when the user leaves the input in a partial/invalid state.
   */
  const lastValidInputValue = React.useRef<string>(
    valueToInputString(value, mode as string)
  );

  /**
   * When the user types or selects from the calendar, we call onChange which
   * causes the parent to update `value`. We use this ref to skip the effect
   * in that case so the user's in-progress input is not overwritten.
   */
  const preventExternalSync = React.useRef(false);

  React.useEffect(() => {
    if (preventExternalSync.current) {
      preventExternalSync.current = false;
      return;
    }
    // External value change — sync all state
    const str = valueToInputString(value, mode as string);
    setDate(value);
    setInputValue(str);
    lastValidInputValue.current = str;
    const month = getMonthFromValue(value);
    if (month) setCalendarMonth(month);
  }, [value]);

  function handleSelect(newDate: any) {
    preventExternalSync.current = true;
    const str = valueToInputString(newDate, mode as string);
    setDate(newDate);
    setInputValue(str);
    lastValidInputValue.current = str;
    onChange?.(newDate);
    if (mode !== "range") {
      setOpen(false);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawInput = e.target.value;

    // If the user clears the input entirely, propagate undefined immediately
    if (rawInput.replace(/\D/g, "") === "") {
      setInputValue("");
      lastValidInputValue.current = "";
      preventExternalSync.current = true;
      setDate(undefined);
      setCalendarMonth(undefined);
      onChange?.(undefined);
      return;
    }

    const cursorPos = e.target.selectionStart ?? rawInput.length;
    const digitsBeforeCursor = rawInput
      .slice(0, cursorPos)
      .replace(/\D/g, "").length;

    const masked =
      mode === "range" ? applyRangeMask(rawInput) : applyDateMask(rawInput);

    setInputValue(masked);

    // Restore cursor position after React re-renders the masked value
    requestAnimationFrame(() => {
      if (inputRef.current) {
        let digitCount = 0;
        let newPos = masked.length;
        for (let i = 0; i < masked.length; i++) {
          if (/\d/.test(masked[i])) digitCount++;
          if (digitCount === digitsBeforeCursor) {
            newPos = i + 1;
            break;
          }
        }
        inputRef.current.setSelectionRange(newPos, newPos);
      }
    });

    if (mode === "range") {
      const parsed = parseRangeInput(masked);
      if (parsed) {
        preventExternalSync.current = true;
        setDate(parsed);
        lastValidInputValue.current = masked;
        if (parsed.from) setCalendarMonth(parsed.from);
        onChange?.(parsed);
      }
      // Partial range: keep previous value, user is still editing
    } else {
      const parsed = parseSingleDate(masked);
      if (parsed) {
        preventExternalSync.current = true;
        setDate(parsed);
        setCalendarMonth(parsed);
        lastValidInputValue.current = masked;
        onChange?.(parsed);
      }
      // Partial date: keep previous value, user is still editing
    }
  }

  function handleInputBlur() {
    const isComplete =
      mode === "range"
        ? parseRangeInput(inputValue) !== null
        : parseSingleDate(inputValue) !== null;

    // If user left the input incomplete/invalid, restore to last valid value
    if (!isComplete && inputValue !== "") {
      setInputValue(lastValidInputValue.current);
    }
  }

  const placeholder =
    mode === "range" ? "dd/mm/aaaa - dd/mm/aaaa" : "dd/mm/aaaa";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "flex h-9 w-full items-center rounded-md border bg-input shadow-xs transition-colors focus-within:ring-1 focus-within:ring-ring",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          disabled={disabled}
          className="min-w-0 flex-1 bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed md:text-sm"
        />
        <PopoverTrigger asChild disabled={disabled}>
          <button
            type="button"
            disabled={disabled}
            className="flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed"
          >
            <CalendarIcon className="h-4 w-4" />
          </button>
        </PopoverTrigger>
      </div>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode={mode as any}
          selected={date}
          onSelect={handleSelect}
          disabled={disabledDates}
          month={calendarMonth}
          onMonthChange={setCalendarMonth}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
