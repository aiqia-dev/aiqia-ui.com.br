import { Meta, StoryFn } from "@storybook/react";
import { Badge, BadgeProps } from "./badge.component";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "secondary", "destructive", "outline"], // Variantes suportadas
      description: "Define o estilo visual do badge.",
      table: {
        type: { summary: "default | secondary | destructive | outline" },
        defaultValue: { summary: "default" },
      },
    },
    className: {
      control: "text",
      description: "Classes CSS adicionais para customização do badge.",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo exibido dentro do badge.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "Default Badge",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Badge",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  children: "Destructive Badge",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  children: "Outline Badge",
};