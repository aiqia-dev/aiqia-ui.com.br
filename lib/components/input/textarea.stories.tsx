import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.component";

const meta: Meta<typeof Input> = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <Input {...args} placeholder="Disabled input" type="textarea" />
  ),
};
