import { Input, InputProps } from "../input/input.component";
import { formatMask } from "../../utils/mask";

export interface MaskedInputProps
  extends Omit<InputProps, "onChange" | "value"> {
  value: string | undefined;
  mask: string;
  onChange: (value: string) => void;
}

export function MaskedInput({
  value,
  mask,
  onChange,
  ...rest
}: MaskedInputProps) {
  const hashCount = mask.split("#").length - 1;
  const aCount = mask.split("A").length - 1;
  const cleanedLength = hashCount + aCount;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    const cleanedValue = inputValue
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, cleanedLength);
    onChange(cleanedValue);
  }

  return (
    <Input
      value={formatMask(value as string, mask)}
      onChange={handleChange}
      {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}
