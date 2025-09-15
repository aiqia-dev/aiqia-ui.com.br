import { useFormContext } from "react-hook-form";
import {
  Combobox,
  FormField,
  FormItem,
  FormMessage,
} from "..";

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
  disabled?: boolean;
  isLoading?: boolean;
};

export function ComboboxForm({
  name,
  label,
  options,
  placeholder = "Selecione uma opção",
  searchPlaceholder = "Buscar...",
  emptyMessage = "Nenhum resultado encontrado.",
  disabled = false,
  isLoading = false
}: ComboboxFormProps) {
  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Combobox
            label={label}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            emptyMessage={emptyMessage}
            options={options}
            selected={field.value}
            onSelect={(v) => setValue(name, v, { shouldValidate: true })}
            disabled={disabled}
            isLoading={isLoading}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
