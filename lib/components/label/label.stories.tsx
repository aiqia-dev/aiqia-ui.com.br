import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label.component";

const meta: Meta<typeof Label> = {
  title: "Components/Label", 
  component: Label, 
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>This is a label</Label>,
};

export const Variants: Story = {
  render: (args) => (
    <>
      <Label {...args} className="text-blue-500">
        Blue Label
      </Label>
      <Label {...args} className="text-red-500">
        Red Label
      </Label>
      <Label {...args} className="text-green-500">
        Green Label
      </Label>
    </>
  ),
};
