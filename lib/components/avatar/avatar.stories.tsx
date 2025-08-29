import { StoryFn } from "@storybook/react-vite";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar.component";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes to apply to the component container.",
      table: {
        type: { summary: "string" },
      },
    }
  }
};

export const Default: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"></AvatarImage>
    <AvatarFallback>AQ</AvatarFallback>
  </Avatar>
);
