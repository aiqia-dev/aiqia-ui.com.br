import { Meta, StoryFn } from "@storybook/react";

import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast.component";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success"],
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <div style={{ height: 200 }}>
      <ToastProvider>
        <Toast variant={args.variant}>
          <div className="grid gap-1">
            <ToastTitle>Toast Title</ToastTitle>
            <ToastDescription>
              This is a description for the toast.
            </ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport position={args.position} />
      </ToastProvider>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  position: "top-left",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  position: "bottom-right",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  position: "top-left",
};
