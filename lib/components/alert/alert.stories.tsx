import { Meta, StoryFn } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert.component";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "destructive", "secondary", "ghost", "outline"], // Inclui novas variantes
      description: "Define o estilo do alerta.",
      table: {
        type: { summary: "default | destructive | secondary | ghost | outline" },
        defaultValue: { summary: "default" },
      },
    },
    title: {
      control: "text",
      description: "Título do alerta.",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "Descrição do alerta.",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      control: false,
      description: "Classes CSS adicionais para customização.",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <AlertTitle>{args.title || "Default Title"}</AlertTitle>
    <AlertDescription>{args.description || "Default description for the alert."}</AlertDescription>
  </Alert>
);


export const Default = Template.bind({});
Default.args = {
  variant: "default",
  title: "Default Alert",
  description: "This is a default alert message.",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  title: "Destructive Alert",
  description: "This is a destructive alert message.",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  title: "Secondary Alert",
  description: "This is a secondary alert message.",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  title: "Ghost Alert",
  description: "This is a ghost-style alert message.",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  title: "Outline Alert",
  description: "This is an outline-style alert message.",
};
