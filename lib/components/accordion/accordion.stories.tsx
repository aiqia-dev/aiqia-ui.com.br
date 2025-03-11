import { Meta, StoryFn } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion.component";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as Meta;

const Template: StoryFn = (args) => (
  <Accordion type="multiple" {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Item 1</AccordionTrigger>
      <AccordionContent>Content for item 1.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Item 2</AccordionTrigger>
      <AccordionContent>Content for item 2.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Item 3</AccordionTrigger>
      <AccordionContent>Content for item 3.</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {};
