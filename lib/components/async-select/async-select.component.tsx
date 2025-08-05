import { useState, useEffect, useCallback } from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "../../utils/utils";
import { Button, Label, Skeleton } from "..";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "..";
import { Popover, PopoverContent, PopoverTrigger } from "..";

export interface AsyncSelectProps<T> {
  /** Options */
  options: T[];
  /** Fech loading */
  isLoading: boolean;
  /** Function to render each option */
  renderOption: (option: T) => React.ReactNode;
  /** Function to get the value from an option */
  getOptionValue: (option: T) => string;
  /** Function to get the display value for the selected option */
  getDisplayValue: (option: T) => React.ReactNode;
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange: (value: string) => void;
  /** Callback when search term changes */
  onSearchChange: (value: string) => void;
  /** Label for the select field */
  label: string;
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Disable the entire select */
  disabled?: boolean;
  /** Custom width for the popover */
  width?: string | number;
  /** Custom class names */
  className?: string;
  /** Custom trigger button class names */
  triggerClassName?: string;
  /** Custom no results message */
  noResultsMessage?: string;
  /** Allow clearing the selection */
  clearable?: boolean;
}

export function AsyncSelect<T>({
  options,
  isLoading,
  renderOption,
  getOptionValue,
  getDisplayValue,
  label,
  placeholder = "Selecione...",
  value,
  onChange,
  onSearchChange,
  disabled = false,
  triggerClassName,
  noResultsMessage,
  clearable = true,
}: AsyncSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    if (value && options.length > 0) {
      const option = options.find((opt) => getOptionValue(opt) === value);
      if (option) {
        setSelectedOption(option);
      }
    }
  }, [value, options, getOptionValue]);

  const handleSelect = useCallback(
    (currentValue: string) => {
      const newValue =
        clearable && currentValue === selectedValue ? "" : currentValue;
      if (value) setSelectedValue(newValue);
      setSelectedOption(
        options.find((option) => getOptionValue(option) === newValue) || null
      );
      onChange(newValue);
      setOpen(false);
    },
    [selectedValue, onChange, clearable, options, getOptionValue, value]
  );

  return (
    <div className="space-y-1">
      {!!label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between w-full",
              disabled && "opacity-50 cursor-not-allowed",
              triggerClassName
            )}
            disabled={disabled}
          >
            {value && selectedOption
              ? getDisplayValue(selectedOption)
              : placeholder}
            <ChevronsUpDown className="opacity-50" size={10} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto min-w-[var(--radix-popover-trigger-width)]">
          <Command shouldFilter={false}>
            <div className="relative border-b">
              <CommandInput
                placeholder="Buscar"
                value={searchTerm}
                onValueChange={(value) => {
                  setSearchTerm(value);
                  onSearchChange(value);
                }}
              />
              {isLoading && options.length > 0 && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
            </div>
            <CommandList>
              {isLoading && options.length === 0 && <DefaultLoadingSkeleton />}
              {!isLoading && options.length === 0 && (
                <CommandEmpty>
                  <div className="py-2 text-center text-sm text-muted-foreground italic">
                    {noResultsMessage ?? "Nenhum resultado encontrado."}
                  </div>
                </CommandEmpty>
              )}
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={getOptionValue(option)}
                    value={getOptionValue(option)}
                    onSelect={handleSelect}
                  >
                    {renderOption(option)}
                    <Check
                      className={cn(
                        "ml-auto h-3 w-3",
                        selectedValue === getOptionValue(option)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function DefaultLoadingSkeleton() {
  return (
    <CommandGroup>
      {[1, 2, 3].map((i) => (
        <CommandItem key={i} disabled className="p-0">
          <Skeleton className="w-full h-8 my-0.5" />
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
