// Checkbox.stories.tsx
import { Meta, StoryFn } from "@storybook/react-vite";
import { Checkbox } from "./checkbox.component";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Checkbox>> = ({
  ...args
}) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  className: "h-3 w-3",
  disabled: false,
};
