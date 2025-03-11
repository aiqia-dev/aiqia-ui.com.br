import { Meta, StoryFn } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./dialog.component";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: StoryFn = (args) => (
  <Dialog {...args}>
    <DialogTrigger asChild>
      <button className="text-lg font-medium text-blue-500">Open Dialog</button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a dialog description. You can add any content here.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-sm">
            Close
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {};
