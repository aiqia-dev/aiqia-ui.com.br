import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "..";
import { useFormContext } from "react-hook-form";

export type SelectFormProps = {
  name: string;
  options: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  helpText?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export const SelectForm = ({
  name,
  label,
  placeholder,
  options,
  helpText,
  isLoading,
  ...props
}: SelectFormProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>{label}</FormLabel>}
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            {...props}
          >
            <FormControl>
              <SelectTrigger isLoading={isLoading}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {!!helpText && <FormDescription>{helpText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
