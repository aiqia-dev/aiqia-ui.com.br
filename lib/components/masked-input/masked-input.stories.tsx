import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MaskedInput, MaskedInputProps } from "./masked-input.component";

export default {
  title: 'Components/MaskedInput', 
  component: MaskedInput,
  argTypes: {
    value: { control: 'text' },
    mask: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<MaskedInputProps> = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <MaskedInput
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  mask: '###-###-####',
};

export const CustomMask = Template.bind({});
CustomMask.args = {
  value: '1234',
  mask: 'AAA-###',
};

export const FullExample = Template.bind({});
FullExample.args = {
  value: 'abcdef123',
  mask: 'AAAA-####',
};