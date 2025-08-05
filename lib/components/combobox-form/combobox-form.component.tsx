import { useFormContext } from "react-hook-form";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "..";
import { cn } from "@/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export type ComboboxFormOption = {
  value: string;
  label: string;
};

export type ComboboxFormProps = {
  name: string;
  label: string;
  options: ComboboxFormOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
};

export function ComboboxForm({
  name,
  label,
  options,
  placeholder = "Selecione uma opção",
  searchPlaceholder = "Buscar...",
  emptyMessage = "Nenhum resultado encontrado.",
}: ComboboxFormProps) {
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  aria-expanded={open}
                  disabled={options.length === 0}
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? options.find((option) => option.value === field.value)
                        ?.label
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
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
                          setValue(name, option.value, {
                            shouldValidate: true,
                          });
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4",
                            field.value === option.value
                              ? "opacity-100"
                              : "opacity-0"
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
