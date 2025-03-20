import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle.component";
import { Bold } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  tags: ["autodocs"],
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle aria-label="Toggle italic" {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};
