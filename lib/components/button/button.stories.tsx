import { StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button.component";
import { Bell } from "lucide-react";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select"
    },
    size: {
      control: "select"
    }
  }
};

export const Standard: Story = {
  args: {
    variant: 'default'
  },
  render: (args: ButtonProps) => (
    <Button {...args}>
      Button
    </Button>
  )
};

export const Variants: Story = {
  render: (args: ButtonProps) => (
    <div className="flex gap-5 flex-wrap">
      <Button {...args} variant="default">default</Button>
      <Button {...args} variant="destructive">destructive</Button>
      <Button {...args} variant="ghost">ghost</Button>
      <Button {...args} variant="ghostDestructive">ghostDestructive</Button>
      <Button {...args} variant="outline">outline</Button>
      <Button {...args} variant="secondary">secondary</Button>
      <Button {...args} variant="link">link</Button>
    </div>
  )
};

export const Sizes: Story = {
  args: {
    variant: 'default'
  },
  render: (args: ButtonProps) => (
    <div className="flex gap-5 flex-wrap items-center">
      <Button {...args} size="sm">size: sm</Button>
      <Button {...args} size="default">size: default</Button>
      <Button {...args} size="lg">size: lg</Button>
      <Button {...args} size="icon">
        <Bell />
      </Button>
    </div>
  )
};
