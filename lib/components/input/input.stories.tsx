import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input.component";

const meta: Meta<typeof Input> = {
  title: "Components/Input", 
  component: Input, 
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} placeholder="Enter text here" />,
};

export const Disabled: Story = {
  render: (args) => <Input {...args} placeholder="Disabled input" disabled />,
};

export const WithCustomClass: Story = {
  render: (args) => (
    <Input {...args} placeholder="Input with custom styles" className="bg-blue-200" />
  ),
};

export const Focused: Story = {
  render: (args) => (
    <Input
      {...args}
      placeholder="Focused input"
      onFocus={(e: any) => e.target.select()}
    />
  ),
};

export const ErrorState: Story = {
  render: (args) => (
    <Input
      {...args}
      placeholder="Input with error"
      className="border-red-500 focus-visible:ring-red-500"
    />
  ),
};
