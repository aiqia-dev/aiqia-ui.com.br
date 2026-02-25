import { InputProps } from '../input/input.component';
export interface MaskedInputProps extends Omit<InputProps, "onChange" | "value"> {
    value: string | undefined;
    mask: string;
    onChange: (value: string) => void;
}
export declare function MaskedInput({ value, mask, onChange, ...rest }: MaskedInputProps): import("react/jsx-runtime").JSX.Element;
