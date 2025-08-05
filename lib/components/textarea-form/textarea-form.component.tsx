import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from "..";
import { useFormContext } from "react-hook-form";

export type TextareaFormProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const TextareaForm = ({
  name,
  label,
  placeholder,
  ...props
}: TextareaFormProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

TextareaForm.displayName = "TextareaForm";

export { TextareaForm };
