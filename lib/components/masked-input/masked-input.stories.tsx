import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { MaskedInput, MaskedInputProps } from "./masked-input.component";

export default {
  title: "Components/MaskedInput",
  component: MaskedInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    mask: { control: "text" },
  },
} as Meta;

export const Default: StoryFn<MaskedInputProps> = ({
  mask = "(##) #####-####",
  ...args
}) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <MaskedInput
      {...args}
      mask={mask}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
