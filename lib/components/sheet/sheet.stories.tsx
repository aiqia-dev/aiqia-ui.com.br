import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet.component";
import { X } from "lucide-react";
import { Button } from "../button/button.component";

export default {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent side={args.side}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description goes here.</SheetDescription>
        </SheetHeader>
        <p>This is a sample content inside the sheet.</p>
        <SheetClose onClick={() => setOpen(false)}>
          <Button variant="outline">
            <X className="h-4 w-4" /> Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export const Default = Template.bind({});
Default.args = {
  side: "right",
};

export const TopSheet = Template.bind({});
TopSheet.args = {
  side: "top",
};

export const BottomSheet = Template.bind({});
BottomSheet.args = {
  side: "bottom",
};

export const LeftSheet = Template.bind({});
LeftSheet.args = {
  side: "left",
};

export const RightSheet = Template.bind({});
RightSheet.args = {
  side: "right",
};
