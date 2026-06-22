import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  DatePicker,
  DatePickerProps,
} from "..";
import { useFormContext } from "react-hook-form";

export type DatePickerFormProps = {
  name: string;
  label?: string;
} & Omit<DatePickerProps, "value" | "onChange">;

export const DatePickerForm = ({
  name,
  label,
  ...props
}: DatePickerFormProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {Boolean(label) && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              {...(props as any)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
