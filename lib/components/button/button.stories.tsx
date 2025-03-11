// Button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button.component";
import { X } from "lucide-react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children ? children : "Button"}</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "default",
  disabled: false,
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  size: "default",
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: "default",
  size: "sm",
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: "default",
  size: "lg",
  disabled: false,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "default",
  size: "icon",
  disabled: false,
  children: <X />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  size: "default",
  disabled: true,
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  size: "default",
  href: "https://example.com",
};
