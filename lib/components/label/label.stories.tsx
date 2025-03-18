import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label.component";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  tags: ["autodocs"],
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => <Label {...args}>This is a label</Label>,
};
