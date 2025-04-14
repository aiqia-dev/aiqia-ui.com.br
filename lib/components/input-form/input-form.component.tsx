import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputProps,
  MaskedInput,
} from "..";
import { useFormContext } from "react-hook-form";

export type InputFormProps = {
  name: string;
  label?: string;
  placeholder?: string;
  mask?: string;
} & InputProps;

export const InputForm = ({
  name,
  label,
  placeholder,
  mask,
  ...props
}: InputFormProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {Boolean(label) && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {mask ? (
              <MaskedInput
                mask={mask}
                placeholder={placeholder}
                {...props}
                {...field}
              />
            ) : (
              <Input placeholder={placeholder} {...props} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

InputForm.displayName = "InputForm";
