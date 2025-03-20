// Card.stories.tsx
import { StoryFn } from "@storybook/react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card.component";
import { Button } from "../button/button.component";

export default {
  title: "Components/Card",
  tags: ['autodocs'],
  component: Card,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes to apply to the component container.",
      table: {
        type: { summary: "string" },
      },
    },
  }
};

export const Default: StoryFn = (args) => (
  <Card {...args}>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardContent>
      <p>This is the card content.</p>
    </CardContent>
    <CardFooter>
      <Button>Footer Button</Button>
    </CardFooter>
  </Card>
);

export const OnlyCard: StoryFn = (args) => (
  <Card className="p-5" {...args}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate ea, accusamus illum placeat ducimus aut, aspernatur numquam voluptatum libero ex possimus fugiat labore pariatur fugit cum voluptates. Impedit, quod!</p>
  </Card>
);
