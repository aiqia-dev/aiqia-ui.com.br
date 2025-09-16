import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "..";
import { cn } from "@/utils";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { useState } from "react";

export type ComboboxOption = {
  value: string;
  label: string;
};

export type ComboBoxProps = {
  label?: string;
  options: ComboboxOption[];
  selected: string | undefined;
  onSelect: (value: string | undefined) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  error?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export function Combobox({
  label,
  options,
  selected,
  onSelect,
  placeholder = "Selecione uma opção",
  searchPlaceholder = "Buscar...",
  emptyMessage = "Nenhum resultado encontrado.",
  error,
  disabled = false,
  isLoading = false
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      {!!label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={disabled}
            className={cn(
              "relative w-full justify-between hover:bg-input bg-input font-normal",
              !selected && "text-muted-foreground"
            )}
          >
            <div className="truncate">
              {selected
                ? options.find((option) => option.value === selected)?.label
                : placeholder}
            </div>

            <div className="flex items-center gap-1">
              {isLoading && (
                <Loader2 className="animate-spin shrink-0 opacity-50" />
              )}
              <ChevronsUpDown className="shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto min-w-[var(--radix-popover-trigger-width)]">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    value={option.label}
                    key={option.value}
                    onSelect={() => {
                      if (selected === option.value) {
                        onSelect(undefined);
                      } else {
                        onSelect(option.value);
                      }
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        selected === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="w-0 flex-1">
                      {option.label}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {!!error && (
        <p className="text-destructive dark:text-red-400 text-[0.8rem]">
          {error}
        </p>
      )}
    </div>
  );
}
