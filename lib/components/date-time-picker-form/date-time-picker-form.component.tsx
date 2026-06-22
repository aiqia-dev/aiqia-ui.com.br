import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  DateTimePicker,
  DateTimePickerProps,
} from "..";
import { useFormContext } from "react-hook-form";

export type DateTimePickerFormProps = {
  name: string;
  label?: string;
} & Omit<DateTimePickerProps, "value" | "onChange">;

export const DateTimePickerForm = ({
  name,
  label,
  ...props
}: DateTimePickerFormProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {Boolean(label) && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <DateTimePicker
              value={field.value}
              onChange={field.onChange}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
