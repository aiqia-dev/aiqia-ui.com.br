import { useFixtureSelect } from 'react-cosmos/client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion.component";
import { Code } from "../../../cosmos/Code"

const Component = () => {
  const [type] = useFixtureSelect('type', {
    options: ['single', 'multiple'],
  });

  return (
    <>
      <Accordion type={type}>
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

      <Code language="html">{code}</Code>
    </>
  )
}

export default Component;

const code = `<Accordion type="single">
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
</Accordion>`