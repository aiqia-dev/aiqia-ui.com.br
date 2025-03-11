import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle, SheetDescription } from './sheet.component';
import { X } from 'lucide-react';

export default {
  title: 'Components/Sheet',
  component: Sheet,
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent side={args.side}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description goes here.</SheetDescription>
        </SheetHeader>
        <p>This is a sample content inside the sheet.</p>
        <SheetClose onClick={() => setOpen(false)}>
          <X className="h-4 w-4" /> Close
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export const Default = Template.bind({});
Default.args = {
  side: 'right',
};

export const TopSheet = Template.bind({});
TopSheet.args = {
  side: 'top',
};

export const BottomSheet = Template.bind({});
BottomSheet.args = {
  side: 'bottom',
};

export const LeftSheet = Template.bind({});
LeftSheet.args = {
  side: 'left',
};

export const RightSheet = Template.bind({});
RightSheet.args = {
  side: 'right',
};