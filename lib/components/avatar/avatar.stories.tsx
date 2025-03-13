import { StoryFn } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar.component";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ['autodocs']
};

export const Standard: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"></AvatarImage>
    <AvatarFallback>AQ</AvatarFallback>
  </Avatar>
);
