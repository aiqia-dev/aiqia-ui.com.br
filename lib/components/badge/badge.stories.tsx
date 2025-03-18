import { StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./badge.component";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "secondary", "outline"]
    },
    className: {
      control: "text",
      description: "Additional classes to apply to the component container.",
      table: {
        type: { summary: "string" },
      },
    }
  },
};

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  render: (args: BadgeProps) => (
    <Badge {...args}>Default</Badge>
  )
};

export const Variants: Story = {
  render: (args: BadgeProps) => (
    <div className="flex gap-5 flex-wrap">
      <Badge {...args} variant="default">Default</Badge>
      <Badge {...args} variant="destructive">Destructive</Badge>
      <Badge {...args} variant="outline">Outline</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
    </div>
  )
};