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
import { Check, ChevronsUpDown } from "lucide-react";
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
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      {!!label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            disabled={options.length === 0}
            className={cn(
              "w-full justify-between",
              !selected && "text-muted-foreground"
            )}
          >
            {selected
              ? options.find((option) => option.value === selected)?.label
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-[var(--radix-popover-trigger-width)] p-0">
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
                    {option.label}
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
