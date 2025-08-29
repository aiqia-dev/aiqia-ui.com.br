import { StoryFn } from "@storybook/react-vite";
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
    },
    className: {
      control: "text",
      description: "Additional classes to apply to the component container.",
      table: {
        type: { summary: "string" },
      },
    }
  },
};

export const Default: StoryFn = (args) => (
  <Alert {...args}>
    <AlertTitle>{args.title || "Default Title"}</AlertTitle>
    <AlertDescription>{args.description || "Default description for the alert."}</AlertDescription>
  </Alert>
);
