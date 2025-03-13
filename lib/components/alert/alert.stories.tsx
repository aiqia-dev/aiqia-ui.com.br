import { StoryFn } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert.component";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "destructive", "secondary", "ghost", "outline"],
    },
    title: {
      control: "text"
    },
    description: {
      control: "text"
    }
  },
};

export const Standard: StoryFn = (args) => (
  <Alert {...args}>
    <AlertTitle>{args.title || "Default Title"}</AlertTitle>
    <AlertDescription>{args.description || "Default description for the alert."}</AlertDescription>
  </Alert>
);
