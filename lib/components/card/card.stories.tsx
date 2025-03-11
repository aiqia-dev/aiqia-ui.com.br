// Card.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card.component";

export default {
  title: "Components/Card",
  component: Card,
  subcomponents: { CardTitle, CardDescription, CardContent, CardFooter },
} as Meta;

const Template: StoryFn = (args) => (
  <Card {...args}>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardContent>
      <p>This is the card content.</p>
    </CardContent>
    <CardFooter>
      <button>Footer Button</button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <>
      <CardTitle>Custom Title</CardTitle>
      <CardDescription>Custom Description</CardDescription>
      <CardContent>
        <p>Custom content goes here.</p>
      </CardContent>
      <CardFooter>
        <button>Custom Footer Button</button>
      </CardFooter>
    </>
  ),
};
